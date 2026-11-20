import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const CELESTE = new THREE.Color('#A8C8EA');
const YELLOW = new THREE.Color('#FFC61A');

type Rock = {
  object: THREE.LineLoop;
  vx: number;
  vy: number;
  spin: number;
  radius: number;
};

type Disposable = { dispose: () => void };

function makeAsteroid(radius: number): THREE.LineLoop {
  const sides = 8 + Math.floor(Math.random() * 4);
  const points: THREE.Vector3[] = [];
  for (let i = 0; i < sides; i += 1) {
    const angle = (i / sides) * Math.PI * 2 + (Math.random() - 0.5) * 0.35;
    const jagged = radius * (0.62 + Math.random() * 0.5);
    points.push(new THREE.Vector3(Math.cos(angle) * jagged, Math.sin(angle) * jagged, 0));
  }
  const geometry = new THREE.BufferGeometry().setFromPoints(points);
  const material = new THREE.LineBasicMaterial({ color: CELESTE, transparent: true, opacity: 0.55 });
  return new THREE.LineLoop(geometry, material);
}

function wrap(value: number, limit: number, padding: number) {
  const edge = limit + padding;
  if (value > edge) return -edge;
  if (value < -edge) return edge;
  return value;
}

const SceneBackground: React.FC = () => {
  const hostRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const disposables: Disposable[] = [];

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 10);
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: 'low-power' });
    renderer.setClearColor(0x000000, 0);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.domElement.style.width = '100%';
    renderer.domElement.style.height = '100%';
    renderer.domElement.style.display = 'block';
    host.appendChild(renderer.domElement);

    const world = { halfW: 10, halfH: 8 };

    const rocks: Rock[] = [];
    const sizes = [1.15, 0.95, 0.8, 0.62, 0.55, 0.48, 0.36, 0.32, 0.28];
    sizes.forEach((radius) => {
      const object = makeAsteroid(radius);
      disposables.push(object.geometry, object.material as Disposable);
      object.position.set((Math.random() - 0.5) * 16, (Math.random() - 0.5) * 12, 0);
      object.rotation.z = Math.random() * Math.PI * 2;
      const speed = 0.45 + Math.random() * 0.7;
      const heading = Math.random() * Math.PI * 2;
      rocks.push({
        object,
        vx: Math.cos(heading) * speed,
        vy: Math.sin(heading) * speed,
        spin: (Math.random() - 0.5) * 0.6,
        radius,
      });
      scene.add(object);
    });

    const shipGeometry = new THREE.BufferGeometry().setFromPoints([
      new THREE.Vector3(0.42, 0, 0),
      new THREE.Vector3(-0.28, 0.2, 0),
      new THREE.Vector3(-0.16, 0, 0),
      new THREE.Vector3(-0.28, -0.2, 0),
    ]);
    const shipMaterial = new THREE.LineBasicMaterial({ color: YELLOW, transparent: true, opacity: 0.95 });
    const ship = new THREE.LineLoop(shipGeometry, shipMaterial);
    disposables.push(shipGeometry, shipMaterial);

    const flameGeometry = new THREE.BufferGeometry().setFromPoints([
      new THREE.Vector3(-0.18, 0.08, 0),
      new THREE.Vector3(-0.48, 0, 0),
      new THREE.Vector3(-0.18, -0.08, 0),
    ]);
    const flameMaterial = new THREE.LineBasicMaterial({ color: YELLOW, transparent: true, opacity: 0.8 });
    const flame = new THREE.Line(flameGeometry, flameMaterial);
    flame.visible = false;
    disposables.push(flameGeometry, flameMaterial);

    const craft = new THREE.Group();
    craft.add(ship);
    craft.add(flame);
    scene.add(craft);

    const shipState = {
      x: -2.5,
      y: 0.4,
      angle: 0.4,
      vx: 0.35,
      vy: 0.15,
    };

    const resize = () => {
      const { width, height } = host.getBoundingClientRect();
      if (width === 0 || height === 0) return;
      const aspect = width / height;
      world.halfH = 8;
      world.halfW = 8 * aspect;
      camera.left = -world.halfW;
      camera.right = world.halfW;
      camera.top = world.halfH;
      camera.bottom = -world.halfH;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height, false);
    };
    resize();
    const observer = new ResizeObserver(resize);
    observer.observe(host);

    const clock = new THREE.Clock();
    let frame = 0;
    let running = !reducedMotion;

    const renderFrame = (dt: number) => {
      const time = clock.getElapsedTime();
      rocks.forEach((rock) => {
        rock.object.position.x = wrap(rock.object.position.x + rock.vx * dt, world.halfW, rock.radius);
        rock.object.position.y = wrap(rock.object.position.y + rock.vy * dt, world.halfH, rock.radius);
        rock.object.rotation.z += rock.spin * dt;
      });

      const thrusting = Math.sin(time * 0.85) > 0.35;
      shipState.angle += dt * 0.55;
      if (thrusting) {
        shipState.vx += Math.cos(shipState.angle) * 1.6 * dt;
        shipState.vy += Math.sin(shipState.angle) * 1.6 * dt;
      }
      shipState.vx *= 1 - dt * 0.35;
      shipState.vy *= 1 - dt * 0.35;
      shipState.x = wrap(shipState.x + shipState.vx * dt, world.halfW, 0.5);
      shipState.y = wrap(shipState.y + shipState.vy * dt, world.halfH, 0.5);
      craft.position.set(shipState.x, shipState.y, 0);
      craft.rotation.z = shipState.angle;
      flame.visible = thrusting;
      flame.scale.set(thrusting ? 0.7 + Math.sin(time * 28) * 0.35 : 1, 1, 1);

      renderer.render(scene, camera);
    };

    const loop = () => {
      renderFrame(Math.min(clock.getDelta(), 0.05));
      if (running) frame = window.requestAnimationFrame(loop);
    };

    if (reducedMotion) renderFrame(0);
    else frame = window.requestAnimationFrame(loop);

    const onVisibility = () => {
      if (reducedMotion) return;
      if (document.hidden) {
        running = false;
        window.cancelAnimationFrame(frame);
        return;
      }
      if (!running) {
        running = true;
        clock.getDelta();
        frame = window.requestAnimationFrame(loop);
      }
    };
    document.addEventListener('visibilitychange', onVisibility);

    return () => {
      running = false;
      window.cancelAnimationFrame(frame);
      document.removeEventListener('visibilitychange', onVisibility);
      observer.disconnect();
      disposables.forEach((item) => item.dispose());
      renderer.dispose();
      renderer.domElement.remove();
    };
  }, []);

  return (
    <div
      ref={hostRef}
      aria-hidden
      className="pointer-events-none fixed inset-y-0 left-0 right-0 z-0 md:left-[280px]"
    />
  );
};

export default SceneBackground;
