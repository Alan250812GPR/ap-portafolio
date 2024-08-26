import { useState } from "react";
import React, { useEffect } from "react";
import Cookies from "js-cookie";
import axios from "axios";
import Swal from "sweetalert2";
import ReCAPTCHA from "react-google-recaptcha";
import { jwtDecode } from "jwt-decode";
import { Link, useNavigate } from "react-router-dom";

const Budget = () => {
  document.title = "Iniciar sesión";
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [button, setButton] = useState("");
  const navigate = useNavigate();
  const apiUrl = process.env.VITE_APP_REACT_BASE_URL || "http://localhost:5001"; // Default to localhost for development

  function onChange(value) {
    setButton(true);
  }

  const handleLogin = async (event) => {
    event.preventDefault();

    // Encriptar la contraseña en base64
    const encryptedPassword = encodeBase64(password);

    try {
      const response = await axios.post(`${apiUrl}/api/Customer/Contac`, {
        userName: user,
        userPassword: encryptedPassword,
      });

      const { jwt } = response.data;

      // Guardar el JWT en una cookie con duración de 2 horas
      Cookies.set("auth_token", jwt, { expires: 2 / 24 });

      console.log("cookie:", Cookies.get("auth_token"));

      const decodedToken = jwtDecode(jwt);

      // Guardar el usuario en localStorage
      localStorage.setItem("user", JSON.stringify(decodedToken));
      const userId = decodedToken.nameid;

      Swal.fire({
        icon: "success",
        title: "Inicio de sesión exitoso!",
        showConfirmButton: false,
        timer: 1500,
      }).then(() => {
        // Redirigir después de que la alerta se haya cerrado
        navigate(`/profile/${userId}`);
      });
    } catch (error) {
      setError("Nombre de usuario o contraseña invalida.");
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Nombre de usuario o contraseña invalida.",
      });
    }
  };

  return (
<form className="max-w-md mx-auto my-8 max-sm:ml-5 max-sm:mr-5">

<h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Tu informacíon</h1>

  <div className="relative z-0 w-full mb-5 group">
      <input type="email" name="floating_email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label for="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Correo</label>
  </div>
  
  <div className="grid md:grid-cols-2 md:gap-6">
    <div className="relative z-0 w-full mb-5 group">
        <input type="text" name="floating_first_name" id="floating_first_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
        <label for="floating_first_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Nombre</label>
    </div>
    <div className="relative z-0 w-full mb-5 group">
        <input type="text" name="floating_last_name" id="floating_last_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
        <label for="floating_last_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Apellido</label>
    </div>
  </div>
  <div className="grid md:grid-cols-2 md:gap-6">
    <div className="relative z-0 w-full mb-5 group">
        <input type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" name="floating_phone" id="floating_phone" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
        <label for="floating_phone" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Celular (+52 123-456-7890)</label>
    </div>
    <div className="relative z-0 w-full mb-5 group">
        <input type="text" name="floating_company" id="floating_company" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
        <label for="floating_company" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Compañia (Ej. SmartRaccoon)</label>
    </div>
  </div>

  <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tu Mensaje</label>
  <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-6" placeholder="Mensaje..."></textarea>

  <div className="flex items-start mb-5">
    <div className="flex items-center h-5">
      <input id="terms" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
    </div>
    <label for="terms" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Acepto <Link to="/" className="text-blue-600 hover:underline dark:text-blue-500">terminos y condiciones</Link></label>
  </div>
  <ReCAPTCHA
              sitekey="6LdEIRYqAAAAABWJJvkrc2zHtptd9Oyd52ULlXa0"
              onChange={onChange}
            />
            {button && (
              <button className="login__form--box--btn" type="submit">
                Enviar
              </button>
            )}
            {error && <p className="error">{error}</p>}
            <a href="/" className="regresarHome" type="submit">
              Regresar al inicio
            </a>
</form>
  );
};

export default Budget;


/*
<ReCAPTCHA
              sitekey="6LdEIRYqAAAAABWJJvkrc2zHtptd9Oyd52ULlXa0"
              onChange={onChange}
            />
            {button && (
              <button className="login__form--box--btn" type="submit">
                Enviar
              </button>
            )}
            {error && <p className="error">{error}</p>}
            <a href="/" className="regresarHome" type="submit">
              Regresar al inicio
            </a>
*/