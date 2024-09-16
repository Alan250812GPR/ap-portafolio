import { Gallery } from "react-grid-gallery";

const images = [
   {
      src: "../../assets/tec/Abap.jpeg",
      width: 320,
      height: 212,
   },
   {
    src: "../../assets/tec/Angular_full_color_logo.svg.png",
    width: 320,
    height: 212,
 },
 {
  src: "../../assets/tec/Bootstrap_logo.svg",
  width: 320,
  height: 212,
},
{
  src: "../../assets/tec/Html_Css.jpeg",
  width: 320,
  height: 212,
},
{
  src: "../../assets/tec/Js.png",
  width: 320,
  height: 212,
},
{
  src: "../../assets/tec/Laravel.svg.png",
  width: 320,
  height: 212,
},
{
  src: "../../assets/tec/Logo-csharp.webp",
  width: 320,
  height: 212,
},
{
  src: "../../assets/tec/MariaDB_Logo.png",
  width: 320,
  height: 212,
},
{
  src: "../../assets/tec/Microsoft_.NET_logo.svg.png",
  width: 320,
  height: 212,
},
{
  src: "../../assets/tec/Microsoft_Azure.svg.png",
  width: 320,
  height: 212,
},
{
  src: "../../assets/tec/PHP-logo.svg.png",
  width: 320,
  height: 212,
},
{
  src: "../../assets/tec/Rabbit.png",
  width: 320,
  height: 212,
},
{
  src: "../../assets/tec/React_logo.png",
  width: 320,
  height: 212,
},
{
  src: "../../assets/tec/SqlServer.png",
  width: 320,
  height: 212,
},
{
  src: "../../assets/tec/Symfony.png",
  width: 320,
  height: 212,
},
{
  src: "../../assets/tec/tailwindcss.png",
  width: 320,
  height: 212,
},
{
  src: "../../assets/tec/Typescript_logosvg.png",
  width: 320,
  height: 212,
},
{
  src: "../../assets/tec/ubuntu.png",
  width: 320,
  height: 212,
},
{
  src: "../../assets/tec/VB.png",
  width: 320,
  height: 212,
},
{
  src: "../../assets/tec/Vite.svg",
  width: 320,
  height: 212,
},
{
  src: "../../assets/tec/Windev.png",
  width: 320,
  height: 212,
},
{
  src: "../../assets/tec/wserver.png",
  width: 320,
  height: 212,
},
{
  src: "../../assets/tec/Xamarin-logo.svg.png",
  width: 320,
  height: 212,
},
{
  src: "../../assets/tec/yarn.png",
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
  