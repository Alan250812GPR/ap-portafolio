import { Gallery } from "react-grid-gallery";

const images = [
   {
      src: "../../../public/tec/Abap.jpeg",
      width: 320,
      height: 212,
   },
   {
    src: "../../../public/tec/Angular_full_color_logo.svg.png",
    width: 320,
    height: 212,
 },
 {
  src: "../../../public/tec/Bootstrap_logo.svg",
  width: 320,
  height: 212,
},
{
  src: "../../../public/tec/Html_Css.jpeg",
  width: 320,
  height: 212,
},
{
  src: "../../../public/tec/Js.png",
  width: 320,
  height: 212,
},
{
  src: "../../../public/tec/Laravel.svg.png",
  width: 320,
  height: 212,
},
{
  src: "../../../public/tec/Logo-csharp.webp",
  width: 320,
  height: 212,
},
{
  src: "../../../public/tec/MariaDB_Logo.png",
  width: 320,
  height: 212,
},
{
  src: "../../../public/tec/Microsoft_.NET_logo.svg.png",
  width: 320,
  height: 212,
},
{
  src: "../../../public/tec/Microsoft_Azure.svg.png",
  width: 320,
  height: 212,
},
{
  src: "../../../public/tec/PHP-logo.svg.png",
  width: 320,
  height: 212,
},
{
  src: "../../../public/tec/Rabbit.png",
  width: 320,
  height: 212,
},
{
  src: "../../../public/tec/React_logo.png",
  width: 320,
  height: 212,
},
{
  src: "../../../public/tec/SqlServer.png",
  width: 320,
  height: 212,
},
{
  src: "../../../public/tec/Symfony.png",
  width: 320,
  height: 212,
},
{
  src: "../../../public/tec/tailwindcss.png",
  width: 320,
  height: 212,
},
{
  src: "../../../public/tec/Typescript_logosvg.png",
  width: 320,
  height: 212,
},
{
  src: "../../../public/tec/ubuntu.png",
  width: 320,
  height: 212,
},
{
  src: "../../../public/tec/VB.png",
  width: 320,
  height: 212,
},
{
  src: "../../../public/tec/Vite.svg",
  width: 320,
  height: 212,
},
{
  src: "../../../public/tec/Windev.png",
  width: 320,
  height: 212,
},
{
  src: "../../../public/tec/wserver.png",
  width: 320,
  height: 212,
},
{
  src: "../../../public/tec/Xamarin-logo.svg.png",
  width: 320,
  height: 212,
},
{
  src: "../../../public/tec/yarn.png",
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
  