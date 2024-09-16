import About from "../AboutMe/aboutMe";
import React from 'react';
import myPdfIcon from '../../../public/pdf.svg';

  const ResumeSpanish = () => {
    const pdfUrl = '../../../public/PDF/Alan Resume Spanish.pdf'; // Ruta relativa desde la raíz del servidor
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'AlanParraCV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const ResumeEnglish = () => {
    const pdfUrl = '../../../public/PDF/Alan Resume English.pdf'; // Ruta relativa desde la raíz del servidor
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'AlanParraCV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

const Home = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-5 grid-rows-1 sm:grid-rows-5 gap-4">
      <div className="col-span-1 sm:col-span-3 row-span-1 sm:row-span-5">
        <About />
      </div>
      <div className="col-span-1 sm:col-span-2 sm:row-span-3 sm:col-start-4 sm:justify-end">
        <img
          alt=""
          src="../../../public/AlanParraProfile.jpg"
          className="h-40 sm:h-60 w-40 sm:w-60 bg-slate-200 content-end"
        />
      </div>
      <div className="col-span-1 sm:col-span-2 sm:row-span-2 sm:col-start-4 sm:row-start-4">
        <button
          onClick={ResumeSpanish}
          className="flex items-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-3"
        >
          <span>Curriculum Español</span>
          <img src={myPdfIcon} alt="Icono PDF" className="h-4 w-4 sm:h-6 sm:w-6 ml-2" />
        </button>

        <button
          onClick={ResumeEnglish}
          className="flex items-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          <span>Resume English</span>
          <img src={myPdfIcon} alt="Icono PDF" className="h-4 w-4 sm:h-6 sm:w-6 ml-2" />
        </button>
      </div>
    </div>
  );
};

export default Home;
