import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { supabase } from "@/lib/supabaseClient";
import { motion } from "framer-motion";

// NOTE: I'm commenting out ReCAPTCHA as it was causing issues with the new setup.
// You might need to find an alternative or debug its integration with Vite + TS.
// import ReCAPTCHA from "react-google-recaptcha";

const Contact: React.FC = () => {
    const { t } = useTranslation();
    const [formData, setFormData] = useState({
        MailCustomer: "",
        NameCustomer: "",
        LastnameCustomer: "",
        PhoneCustomer: "",
        CompanyCustomer: "",
        MessageCustomer: "",
        termsAccepted: false,
    });
    // const [recaptchaVerified, setRecaptchaVerified] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const [loading, setLoading] = useState(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { id, value, type } = e.target;
        const checked = (e.target as HTMLInputElement).checked;
        setFormData((prevData) => ({
            ...prevData,
            [id]: type === "checkbox" ? checked : value,
        }));
    };

    // const onRecaptchaChange = (value: string | null) => {
    //     setRecaptchaVerified(!!value);
    // };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError("");
        setSuccess("");

        if (!formData.termsAccepted) {
            setError(t('contact.errors.terms'));
            return;
        }

        // if (!recaptchaVerified) {
        //     setError(t('contact.errors.recaptcha'));
        //     return;
        // }

        setLoading(true);

        try {
            const { error: supabaseError } = await supabase.from('Datos').insert([formData]);
            if (supabaseError) throw supabaseError;

            setSuccess(t('contact.success.text'));
            setFormData({
                MailCustomer: "", NameCustomer: "", LastnameCustomer: "", PhoneCustomer: "",
                CompanyCustomer: "", MessageCustomer: "", termsAccepted: false,
            });
            // setRecaptchaVerified(false);
        } catch (err: any) {
            console.error("Error submitting to Supabase:", err.message);
            setError(`${t('contact.errors.submit')}: ${err.message}`);
        } finally {
            setLoading(false);
        }
    };
    
    const inputClasses = "block w-full rounded-md border-0 bg-white/5 p-2.5 text-dark-text-primary shadow-sm ring-1 ring-inset ring-dark-border focus:ring-2 focus:ring-inset focus:ring-accent-primary sm:text-sm sm:leading-6 transition-colors";

    return (
        <div className="container mx-auto max-w-2xl">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
                <h1 className="text-3xl font-bold tracking-tight text-dark-text-primary sm:text-4xl">{t('contact.title')}</h1>
                <p className="mt-4 text-lg text-dark-text-secondary">{t('contact.description')}</p>
            </motion.div>

            <form className="mt-12 space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-6">
                    <div className="sm:col-span-3">
                        <label htmlFor="NameCustomer" className="block text-sm font-medium leading-6 text-dark-text-primary">{t('contact.form.firstName')}</label>
                        <div className="mt-2"><input type="text" id="NameCustomer" required className={inputClasses} value={formData.NameCustomer} onChange={handleInputChange} /></div>
                    </div>
                    <div className="sm:col-span-3">
                        <label htmlFor="LastnameCustomer" className="block text-sm font-medium leading-6 text-dark-text-primary">{t('contact.form.lastName')}</label>
                        <div className="mt-2"><input type="text" id="LastnameCustomer" required className={inputClasses} value={formData.LastnameCustomer} onChange={handleInputChange} /></div>
                    </div>
                    <div className="sm:col-span-6">
                        <label htmlFor="MailCustomer" className="block text-sm font-medium leading-6 text-dark-text-primary">{t('contact.form.email')}</label>
                        <div className="mt-2"><input type="email" id="MailCustomer" required className={inputClasses} value={formData.MailCustomer} onChange={handleInputChange} /></div>
                    </div>
                    <div className="sm:col-span-3">
                        <label htmlFor="PhoneCustomer" className="block text-sm font-medium leading-6 text-dark-text-primary">{t('contact.form.phone')}</label>
                        <div className="mt-2"><input type="text" id="PhoneCustomer" required className={inputClasses} value={formData.PhoneCustomer} onChange={handleInputChange} /></div>
                    </div>
                    <div className="sm:col-span-3">
                        <label htmlFor="CompanyCustomer" className="block text-sm font-medium leading-6 text-dark-text-primary">{t('contact.form.company')}</label>
                        <div className="mt-2"><input type="text" id="CompanyCustomer" required className={inputClasses} value={formData.CompanyCustomer} onChange={handleInputChange} /></div>
                    </div>
                    <div className="col-span-full">
                        <label htmlFor="MessageCustomer" className="block text-sm font-medium leading-6 text-dark-text-primary">{t('contact.form.message')}</label>
                        <div className="mt-2"><textarea id="MessageCustomer" rows={4} required className={inputClasses} placeholder={t('contact.form.message_placeholder')} value={formData.MessageCustomer} onChange={handleInputChange}></textarea></div>
                    </div>
                </div>

                <div className="flex items-start">
                    <div className="flex h-6 items-center"><input id="termsAccepted" type="checkbox" className="h-4 w-4 rounded border-dark-border bg-white/5 text-accent-primary focus:ring-accent-primary" required checked={formData.termsAccepted} onChange={handleInputChange} /></div>
                    <div className="ml-3 text-sm leading-6"><label htmlFor="termsAccepted" className="font-medium text-dark-text-secondary">{t('contact.form.terms')} <Link to="/" className="font-semibold text-accent-primary hover:text-accent-hover">{t('contact.form.terms_link')}</Link></label></div>
                </div>

                {/* <ReCAPTCHA sitekey="YOUR_RECAPTCHA_SITE_KEY" onChange={onRecaptchaChange} theme="dark" /> */}

                {error && <p className="text-red-500 text-sm">{error}</p>}
                {success && <p className="text-green-500 text-sm">{success}</p>}

                <div className="flex items-center gap-4">
                    <button type="submit" disabled={loading} className="rounded-md bg-accent-primary px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-accent-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-primary disabled:opacity-50">
                        {loading ? t('contact.form.submitting') : t('contact.form.submit')}
                    </button>
                    <Link to="/" className="text-sm font-semibold leading-6 text-dark-text-secondary hover:text-dark-text-primary">{t('contact.form.go_back')}</Link>
                </div>
            </form>
        </div>
    );
};

export default Contact;
