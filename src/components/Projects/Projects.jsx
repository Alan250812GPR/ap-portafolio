import React from "react";
import Github from '../../assets/svgGit.svg';

const cardsData = [
  {
    id: 1,
    title: "Pinochueco",
    imageUrl: "https://pinochueco.com/assets/img/logo.png",
    url: "https://pinochueco.com/",
    desc: "Cabañas pinochueco",
  },
  {
    id: 2,
    title: "Mazamitla Sierra Tours web",
    imageUrl: "https://mazamitlasierratours.com/public/IMG/MzLogos/CompleteLogo-Green.png",
    url: "https://mazamitlasierratours.com",
    desc: "Plataforma mazamitlasierratours",
  },
  {
    id: 3,
    title: "Mazamitla Sierra intranet",
    imageUrl: "https://mazamitlasierratours.com/public/IMG/MzLogos/CompleteLogo-Green.png",
    url: "https://mazamitlasierratours.com",
    desc: "Intranet de Mz para hacer control completo de la plataforma",
  },
  {
    id: 4,
    title: "sheva Ecommerce",
    imageUrl: "http://www.ssheva.com/images/logo.png",
    url: "https://www.linkedin.com/posts/alan-g-parra-robledo-617a4a138_desarrollo-developers-smartraccoon-activity-7169082216113782785-qNEr?utm_source=share&utm_medium=member_desktop",
    desc: "Integracion con erp para un ecommerce realizado a medida con php",
  },
  {
    id: 5,
    title: "Geo- CX",
    imageUrl: "https://thiagozambonini-portfolio-remojs.vercel.app/assets/geocx-icon-4b9c7a39.png",
    url: "https://github.com/Alan250812GPR",
    desc: "Sistema de rastreo de personal junto con algunos modulos como lo es PTO,Incidencias Etc.",
  },
  {
    id: 6,
    title: "EOPS",
    imageUrl: "https://media.licdn.com/dms/image/v2/D560BAQEY_-JbXJdipw/company-logo_200_200/company-logo_200_200/0/1713155438929/e_ops_logo?e=1734566400&v=beta&t=vAiqGZHMOpeoOkf0pcGSfiLGaXW7gO0t9zIGnwA5cL4",
    url: "https://www.linkedin.com/company/e-ops/",
    desc: "Sistema de registro de horas web y aplicacion android para carga de horas trabajadas y incidencias",
  },
  {
    id: 7,
    title: "App de notificaciones push",
    imageUrl: Github,
    url: "https://github.com/Alan250812GPR/AppPushNotificationPhp",
    desc: "esta app realizada en xamarin forms es generada para recibir notificaciones desde firebase",
  },
  {
    id: 8,
    title: "Windev clima Divemex",
    imageUrl: Github,
    url: "https://github.com/Alan250812GPR/WindevAlan",
    desc: "App de clima divemex realizada para la empresa",
  },
  {
    id: 9,
    title: "Portafolio Alan Parra",
    imageUrl: Github,
    url: "https://github.com/Alan250812GPR/ap-portafolio",
    desc: "este es mi portafolio y es el mismo que estas viendo en este momento",
  },
  {
    id: 10,
    title: "App de farmacias guadalajara",
    imageUrl: Github,
    url: "https://github.com/Alan250812GPR/Farmacias",
    desc: "este es la prueba tecnica realizada para farmacias guadalajara",
  },
  {
    id: 11,
    title: "Sincronizador de portapales en java",
    imageUrl: Github,
    url: "https://github.com/Alan250812GPR/SincronizadorPortapapeles",
    desc: "Desarrollo personal para un portapapeles multiplataforma",
  },
  {
    id: 12,
    title: "Aplicacionm de farmacia",
    imageUrl: Github,
    url: "https://github.com/Alan250812GPR/AP_FarmaCode",
    desc: "esto es un punto de venta de farmacia realizado en java",
  },
  {
    id: 13,
    title: "Encriptador php",
    imageUrl: Github,
    url: "https://github.com/Alan250812GPR/Encryp-example-php",
    desc: "muestra de una forma de como realizar una encriptacion de php",
  },
  {
    id: 14,
    title: "Punto de venta de imprenta",
    imageUrl: Github,
    url: "https://github.com/Alan250812GPR/Notas_Imprenta_Windev",
    desc: "Sistema de imprenta realizado en Windev",
  },
  {
    id: 15,
    title: "Diccionario de practica de ingles",
    imageUrl: Github,
    url: "https://github.com/Alan250812GPR/VerbosIngles",
    desc: "sistema de practica de ingles",
  },
  {
    id: 16,
    title: "Libreria de integracion de trello con php",
    imageUrl: Github,
    url: "https://github.com/Alan250812GPR/fuzzy-garbanzo",
    desc: "integracion de trello con php no oficial",
  },
  {
    id: 17,
    title: "Toka test",
    imageUrl: Github,
    url: "https://github.com/Alan250812GPR/TEST_DEV_AGPR_19-08-2021",
    desc: "Prueba tecnica Toka C#",
  },
  {
    id: 18,
    title: "Help Desk",
    imageUrl: Github,
    url: "https://github.com/Alan250812GPR/HelpDesk",
    desc: "sistema de tickets open source",
  },
  {
    id: 19,
    title: "SimpleStock",
    imageUrl: Github,
    url: "https://github.com/Alan250812GPR/SimpleStock",
    desc: "Sistema de inventarios open source",
  },
  {
    id: 20,
    title: "Descargar Files C#",
    imageUrl: Github,
    url: "https://github.com/Alan250812GPR/DescargarArchivosURL_C-",
    desc: "Descarga de archivos por url en C#",
  },
  {
    id: 21,
    title: "Divemex Apps",
    imageUrl: "https://www.divemex.com/wp-content/uploads/2021/06/LOGOS-DVM-03-768x256.png",
    url: "https://www.divemex.com",
    desc: "Apps internas para divemex como lo fueron para sensores de clima etc.",
  },
  {
    id: 22,
    title: "Fabrica Empresarial",
    imageUrl: "https://fabricaempresarial.com/images/events/fdn-fe.png",
    url: "https://fabricaempresarial.com/",
    desc: "Primera version de FDN proyecto realizado para un tercero con GS1",
  },
  {
    id: 23,
    title: "Basculas Fleximatic",
    imageUrl: "https://fleximatic.mx/assets/portal/img/Fleximatic-logo-01.png",
    url: "https://fleximatic.mx/",
    desc: "Primera version de basculas de empaque para fleximatic realizado en windev",
  },
  {
    id: 24,
    title: "Integraciones SmartSheet con TEOPM",
    imageUrl: "https://static.mywebsites360.com/e4900322c4a143998761024c71c2670f/i/d8b9cec644d04ad19510d86057d9dfeb/1/4SoifmQp45JMgBnHiBhVe/Logo_final.png",
    url: "https://www.teopm.com/",
    desc: "Integracion con TEOPM principalmente hacia SmartSheet",
  },
];

const Card = ({ title, imageUrl, url, desc }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img className="w-full" src={imageUrl} alt={title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>

        <p className="text-gray-700 text-base">
          {desc}
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <a
          href={url}
          className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ver más
        </a>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {cardsData.map((card) => (
        <Card key={card.id} {...card} />
      ))}
    </div>
  );
};

export default Projects;
