const images = [
   {
      src: "https://mazamitlasierratours.com/tec/Abap.jpeg",
      width: 320,
      height: 212,
   },
   {
    src: "https://mazamitlasierratours.com/tec/Angular_full_color_logo.svg.png",
    width: 320,
    height: 212,
 },
 {
  src: "https://mazamitlasierratours.com/tec/Bootstrap_logo.svg",
  width: 320,
  height: 212,
},
{
  src: "https://mazamitlasierratours.com/tec/Html_Css.jpeg",
  width: 320,
  height: 212,
},
{
  src: "https://mazamitlasierratours.com/tec/Js.png",
  width: 320,
  height: 212,
},
{
  src: "https://mazamitlasierratours.com/tec/Laravel.svg.png",
  width: 320,
  height: 212,
},
{
  src: "https://mazamitlasierratours.com/tec/Logo-csharp.webp",
  width: 320,
  height: 212,
},
{
  src: "https://mazamitlasierratours.com/tec/MariaDB_Logo.png",
  width: 320,
  height: 212,
},
{
  src: "https://mazamitlasierratours.com/tec/Microsoft_.NET_logo.svg.png",
  width: 320,
  height: 212,
},
{
  src: "https://mazamitlasierratours.com/tec/Microsoft_Azure.svg.png",
  width: 320,
  height: 212,
},
{
  src: "https://mazamitlasierratours.com/tec/PHP-logo.svg.png",
  width: 320,
  height: 212,
},
{
  src: "https://mazamitlasierratours.com/tec/Rabbit.png",
  width: 320,
  height: 212,
},
{
  src: "https://mazamitlasierratours.com/tec/React_logo.png",
  width: 320,
  height: 212,
},
{
  src: "https://mazamitlasierratours.com/tec/SqlServer.png",
  width: 320,
  height: 212,
},
{
  src: "https://mazamitlasierratours.com/tec/Symfony.png",
  width: 320,
  height: 212,
},
{
  src: "https://mazamitlasierratours.com/tec/tailwindcss.png",
  width: 320,
  height: 212,
},
{
  src: "https://mazamitlasierratours.com/tec/Typescript_logosvg.png",
  width: 320,
  height: 212,
},
{
  src: "https://mazamitlasierratours.com/tec/ubuntu.png",
  width: 320,
  height: 212,
},
{
  src: "https://mazamitlasierratours.com/tec/VB.png",
  width: 320,
  height: 212,
},
{
  src: "https://mazamitlasierratours.com/tec/Vite.svg",
  width: 320,
  height: 212,
},
{
  src: "https://mazamitlasierratours.com/tec/Windev.png",
  width: 320,
  height: 212,
},
{
  src: "https://mazamitlasierratours.com/tec/wserver.png",
  width: 320,
  height: 212,
},
{
  src: "https://mazamitlasierratours.com/tec/Xamarin-logo.svg.png",
  width: 320,
  height: 212,
},
{
  src: "https://mazamitlasierratours.com/tec/yarn.png",
  width: 320,
  height: 212,
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
  