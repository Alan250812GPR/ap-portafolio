import About from "../AboutMe/aboutMe";
import React from 'react';
import myPdfIcon from '../../assets/pdf.svg';
import AlanParraProfile from '../../assets/AlanParraProfile.jpg';

  const ResumeSpanish = () => {
    const currentUrl = 'https://drive.google.com/file/d/18OaEhEJqxJZyG1ElrbmwVYJq-kvKwuYY/view?usp=sharing';
  
    const link = document.createElement('a');
    link.href = currentUrl;
    link.target = "_blank";
  
    link.click();
  };

  const ResumeEnglish = () => {
    
    const currentUrl = 'https://drive.google.com/file/d/1C7UV5Vr-aJz0xibOAOPivADML8OiQHZw/view?usp=sharing';
  
    const link = document.createElement('a');
    link.href = currentUrl;
    link.target = "_blank";
  
    link.click();
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
          src={AlanParraProfile}
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
