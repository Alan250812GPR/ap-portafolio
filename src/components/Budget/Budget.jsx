import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import ReCAPTCHA from "react-google-recaptcha";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "../../Hooks/supabaseClient";

const Budget = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);

    const [formData, setFormData] = useState({
        MailCustomer: "",
        NameCustomer: "",
        LastnameCustomer: "",
        PhoneCustomer: "",
        CompanyCustomer: "",
        MessageCustomer: "",
        termsAccepted: false,
    });

    const [recaptchaVerified, setRecaptchaVerified] = useState(false);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false); // Para el estado del botón de envío
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const { id, value, type, checked } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [id]: type === "checkbox" ? checked : value,
        }));
    };

    const onRecaptchaChange = (value) => {
        setRecaptchaVerified(!!value); // true if value exists, false otherwise
    };

    const handleSubmit = async (e) => {
        e.preventDefault(); // Previene el envío por defecto del formulario

        setError(""); // Limpia cualquier error anterior

        if (!formData.termsAccepted) {
            setError("Debes aceptar los términos y condiciones.");
            return;
        }

        if (!recaptchaVerified) {
            setError("Por favor, completa el reCAPTCHA.");
            return;
        }

        setLoading(true); // Deshabilita el botón mientras se envía

        try {
            // Mapea los datos del formulario a los nombres de columna de Supabase
            const { MailCustomer, NameCustomer, LastnameCustomer, PhoneCustomer, CompanyCustomer, MessageCustomer } = formData;

            const { data, error } = await supabase
                .from('Datos') // Reemplaza 'your_table_name' con el nombre real de tu tabla (ej. 'Columns' o 'customers')
                .insert([
                    {
                        MailCustomer: MailCustomer,
                        NameCustomer: NameCustomer,
                        LastnameCustomer: LastnameCustomer,
                        PhoneCustomer: PhoneCustomer,
                        CompanyCustomer: CompanyCustomer,
                        MessageCustomer: MessageCustomer,
                    }
                ])
                .select(); // Opcional: para obtener los datos insertados

            if (error) {
                throw error;
            }

            Swal.fire({
                icon: "success",
                title: "¡Éxito!",
                text: "Tu mensaje ha sido enviado correctamente.",
                showConfirmButton: false,
                timer: 2000,
            });

            // Limpia el formulario después de un envío exitoso
            setFormData({
                MailCustomer: "",
                NameCustomer: "",
                LastnameCustomer: "",
                PhoneCustomer: "",
                CompanyCustomer: "",
                MessageCustomer: "",
                termsAccepted: false,
            });
            setRecaptchaVerified(false); // Reinicia el reCAPTCHA si es necesario

            // Puedes navegar a otra página o hacer algo más
            // navigate('/gracias');

        } catch (err) {
            console.error("Error al enviar el formulario a Supabase:", err.message);
            Swal.fire({
                icon: "error",
                title: "Error",
                text: `Hubo un problema al enviar tu mensaje: ${err.message}`,
            });
            setError("Hubo un error al enviar tu mensaje. Inténtalo de nuevo.");
        } finally {
            setLoading(false); // Habilita el botón de nuevo
        }
    };

    return (
        <form className="max-w-md mx-auto my-8 max-sm:ml-5 max-sm:mr-5" onSubmit={handleSubmit}>
            <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Tu información</h1>

            <div className="relative z-0 w-full mb-5 group">
                <input
                    type="email"
                    name="floating_email"
                    id="MailCustomer" // Usa el nombre de la columna de Supabase como ID
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    required
                    value={formData.MailCustomer}
                    onChange={handleInputChange}
                />
                <label htmlFor="MailCustomer" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Correo</label>
            </div>

            <div className="grid md:grid-cols-2 md:gap-6">
                <div className="relative z-0 w-full mb-5 group">
                    <input
                        type="text"
                        name="floating_first_name"
                        id="NameCustomer" // Usa el nombre de la columna de Supabase como ID
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                        required
                        value={formData.NameCustomer}
                        onChange={handleInputChange}
                    />
                    <label htmlFor="NameCustomer" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Nombre</label>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                    <input
                        type="text"
                        name="floating_last_name"
                        id="LastnameCustomer" // Usa el nombre de la columna de Supabase como ID
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                        required
                        value={formData.LastnameCustomer}
                        onChange={handleInputChange}
                    />
                    <label htmlFor="LastnameCustomer" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Apellido</label>
                </div>
            </div>
            <div className="grid md:grid-cols-2 md:gap-6">
                <div className="relative z-0 w-full mb-5 group">
                    <input
                        type="text"
                        id="PhoneCustomer" // Usa el nombre de la columna de Supabase como ID
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                        required
                        value={formData.PhoneCustomer}
                        onChange={handleInputChange}
                    />
                    <label htmlFor="PhoneCustomer" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Celular (+52 123-456-7890)</label>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                    <input
                        type="text"
                        name="floating_company"
                        id="CompanyCustomer" // Usa el nombre de la columna de Supabase como ID
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                        required
                        value={formData.CompanyCustomer}
                        onChange={handleInputChange}
                    />
                    <label htmlFor="CompanyCustomer" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Compañía (Ej. SmartRaccoon)</label>
                </div>
            </div>

            <label htmlFor="MessageCustomer" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tu Mensaje</label>
            <textarea
                id="MessageCustomer" // Usa el nombre de la columna de Supabase como ID
                rows="4"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-6"
                placeholder="Mensaje..."
                value={formData.MessageCustomer}
                onChange={handleInputChange}
            ></textarea>

            <div className="flex items-start mb-5">
                <div className="flex items-center h-5">
                    <input
                        id="termsAccepted" // Nuevo ID para el checkbox
                        type="checkbox"
                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                        required
                        checked={formData.termsAccepted}
                        onChange={handleInputChange}
                    />
                </div>
                <label htmlFor="termsAccepted" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Acepto <Link to="/" className="text-blue-600 hover:underline dark:text-blue-500">términos y condiciones</Link></label>
            </div>

            <ReCAPTCHA
                sitekey="6LesmUgqAAAAAJWomvk71YZBBTbbRSVR_ldi2yfp"
                onChange={onRecaptchaChange}
                className="mb-5"
            />

            {error && <p className="text-red-500 text-sm mb-3">{error}</p>}

            <button
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                type="submit"
                disabled={!recaptchaVerified || loading} // Deshabilita si reCAPTCHA no está verificado o está cargando
            >
                {loading ? "Enviando..." : "Enviar"}
            </button>

            <Link to="/" className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                Regresar al inicio
            </Link>
        </form>
    );
};

export default Budget;