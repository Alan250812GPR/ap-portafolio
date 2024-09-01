import { Typography } from "@material-tailwind/react";
import { Link, useNavigate } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="fixed-bottom w-full bg-white p-8">
      <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 bg-white text-center md:justify-between">
        <Link
              to="/"
              >
              <img src="../../../../public/DevAP.svg" alt="logo-ct" className="w-10" />
              </Link>
        <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
          <li>
            <Link
              as="a"
              to="/"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              Inicio
            </Link>
          </li>
          <li>
            <Link
              as="a"
              to="/Tecnologys"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              Tecnologias
            </Link>
          </li>
          <li>
            <Link
              as="a"
              to="/Projects"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              Proyectos
            </Link>
          </li>
          <li>
            <Link
              as="a"
              to="/Budget"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              Cotizaciones
            </Link>
          </li>
        </ul>
      </div>
      <hr className="my-8 border-blue-gray-50" />
      <Typography color="blue-gray" className="text-center font-normal">
        &copy; 2024 Alan Parra
      </Typography>
    </footer>
  )
}

export default Footer