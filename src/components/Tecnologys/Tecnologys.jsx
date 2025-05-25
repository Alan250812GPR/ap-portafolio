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
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Mariadb-seal-browntext.svg/512px-Mariadb-seal-browntext.svg.png",
    width: 320,
    height: 180, // Adjusted height for better aspect ratio with SVG
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Microsoft_.NET_logo.svg/250px-Microsoft_.NET_logo.svg.png",
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
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/RabbitMQ_logo.svg/172px-RabbitMQ_logo.svg.png",
    width: 320,
    height: 212,
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
    width: 320,
    height: 280, // Adjusted height for better aspect ratio with SVG
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Microsoft_SQL_Server_2025_icon.svg/48px-Microsoft_SQL_Server_2025_icon.svg.png",
    width: 320,
    height: 212,
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Symfony2.svg/235px-Symfony2.svg.png",
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
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Ubuntu-logo-no-wordmark-solid-o-2022.svg/250px-Ubuntu-logo-no-wordmark-solid-o-2022.svg.png",
    width: 320,
    height: 320,
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/VB.NET_Logo.svg/250px-VB.NET_Logo.svg.png",
    width: 320,
    height: 320,
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Vitejs-logo.svg/250px-Vitejs-logo.svg.png",
    width: 320,
    height: 320,
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Windev_20_User_Manual_Book.jpg/250px-Windev_20_User_Manual_Book.jpg", // This seems to be the most common freely available.
    width: 320,
    height: 212,
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Windows_Server_logo.svg/1277px-Windows_Server_logo.svg.png", // Using a specific version that's common.
    width: 320,
    height: 212,
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Xamarin_logo_and_wordmark.png/960px-Xamarin_logo_and_wordmark.png",
    width: 320,
    height: 320,
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Yarn-logo-circle.svg/250px-Yarn-logo-circle.svg.png",
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
  