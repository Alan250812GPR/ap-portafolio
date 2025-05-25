const images = [
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg",
    width: 320,
    height: 320, // Adjusted height for better aspect ratio with SVG
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg",
    width: 320,
    height: 280, // Adjusted height for better aspect ratio with SVG
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg",
    width: 320,
    height: 320,
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg",
    width: 320,
    height: 320,
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Laravel.svg",
    width: 320,
    height: 320,
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/4/4f/Csharp_Logo.png",
    width: 320,
    height: 320,
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/e/ee/MariaDB_Logo.svg",
    width: 320,
    height: 180, // Adjusted height for better aspect ratio with SVG
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/e/ee/.NET_Logo.svg",
    width: 320,
    height: 180, // Adjusted height for better aspect ratio with SVG
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Microsoft_Azure.svg",
    width: 320,
    height: 280, // Adjusted height for better aspect ratio with SVG
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg",
    width: 320,
    height: 180, // Adjusted height for better aspect ratio with SVG
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/en/e/ee/RabbitMQ_logo.png",
    width: 320,
    height: 212,
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
    width: 320,
    height: 280, // Adjusted height for better aspect ratio with SVG
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/en/8/8c/Microsoft_SQL_Server_Logo.svg",
    width: 320,
    height: 212,
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/7/74/Symfony_logo.svg",
    width: 320,
    height: 180, // Adjusted height for better aspect ratio with SVG
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
    width: 320,
    height: 190, // Adjusted height for better aspect ratio with SVG
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg",
    width: 320,
    height: 320,
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/9/91/Ubuntu_logo_transparent_background.png",
    width: 320,
    height: 320,
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/e/ee/Visual_Basic_logo.svg",
    width: 320,
    height: 320,
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/f/f6/Vitejs_logo.svg",
    width: 320,
    height: 320,
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/f/fd/WINDEV_logo.png", // This seems to be the most common freely available.
    width: 320,
    height: 212,
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Windows_Server_2016_logo.svg/320px-Windows_Server_2016_logo.svg.png", // Using a specific version that's common.
    width: 320,
    height: 212,
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/2/24/Xamarin_logo.svg",
    width: 320,
    height: 320,
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/a/a2/Yarn_logo_transparent_background.svg",
    width: 320,
    height: 320,
  },
];

const Tecnologys = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {images.map((image, index) => (
        <img
          key={index}
          src={image.src}
          alt={`Technology  
 ${index + 1}`}
          className="object-scale-down h-full w-full rounded-lg"
        />
      ))}
    </div>
  );
  };
  
  export default Tecnologys;
  