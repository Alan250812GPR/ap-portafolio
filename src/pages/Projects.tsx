import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
// @ts-ignore
import GithubIcon from '/githubB.png';

const projectsData = [
    { id: 1, title: "Mazamitla Sierra Tours", imageUrl: "https://mazamitlasierratours.com/public/IMG/MzLogos/CompleteLogo-Green.png", url: "https://mazamitlasierratours.com", desc: "Plataforma de tours y reservaciones" },
    { id: 2, title: "Sheva Ecommerce", imageUrl: "http://www.ssheva.com/images/logo.png", url: "https://www.linkedin.com/posts/alan-g-parra-robledo-617a4a138_desarrollo-developers-smartraccoon-activity-7169082216113782785-qNEr?utm_source=share&utm_medium=member_desktop", desc: "E-commerce con integración a ERP" },
    { id: 3, title: "Tiendas el asturiano", imageUrl: "https://cdn.shopify.com/s/files/1/0719/1183/3756/files/LOGO_ASTURIANO_2023-2_1.png?v=1770309561", url: "https://tiendaselasturiano.com/", desc: "Tiendas el asturiano participe en apps moviles y ecommerce" },
    { id: 4, title: "MacClipboard", imageUrl: GithubIcon, url: "https://github.com/Alan250812GPR/MacClipboardMonitorByAP", desc: "Proyecto Open Source para Mac" },
    { id: 5, title: "Voguex", imageUrl: "https://voguex.com/VoguexColor.svg", url: "https://voguex.com/", desc: "Marketplace Wedings" },
    { id: 6, title: "Geo-CX", imageUrl: "https://cdn.prod.website-files.com/67476344cf287349c7bb855a/6797d5b9126a5044074cf132_geocx_weblogo.png", url: "https://github.com/Alan250812GPR", desc: "Sistema de rastreo de personal y PTO" },
    { id: 7, title: "Portafolio Personal", imageUrl: GithubIcon, url: "https://github.com/Alan250812GPR/ap-portafolio", desc: "Este mismo portafolio, hecho en React y TS" },
    { id: 8, title: "Help Desk", imageUrl: GithubIcon, url: "https://github.com/Alan250812GPR/HelpDesk", desc: "Sistema de tickets open source" },
    { id: 9, title: "Pinochueco", imageUrl: "https://pinochueco.com/assets/img/logo.png", url: "https://pinochueco.com/", desc: "Cabañas pinochueco" },
    { id: 10, title: "SimpleStock", imageUrl: GithubIcon, url: "https://github.com/Alan250812GPR/SimpleStock", desc: "Sistema de inventarios open source" },
    { id: 11, title: "Divemex Apps", imageUrl: "https://www.divemex.com/wp-content/uploads/2021/06/LOGOS-DVM-03-768x256.png", url: "https://www.divemex.com", desc: "Aplicaciones internas para sensores de clima" },
];

const ProjectCard: React.FC<typeof projectsData[0]> = ({ title, imageUrl, url, desc }) => {
    const { t } = useTranslation();

    // ESTADO LOCAL: Para rastrear si la imagen principal falló al cargar
    const [imageError, setImageError] = useState(false);

    // FUNCIÓN: Genera un placeholder dinámico con la primera letra del título
    const renderFallback = () => (
        <div className="flex h-32 w-32 items-center justify-center rounded-full bg-gradient-to-br from-gray-700 to-gray-900 border-2 border-gray-600 shadow-inner">
      <span className="text-5xl font-extrabold text-gray-300 select-none">
        {title.charAt(0).toUpperCase()}
      </span>
        </div>
    );

    return (
        <motion.div
            layout
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            className="group relative flex flex-col overflow-hidden rounded-lg bg-dark-card shadow-lg"
        >
            <div className="flex h-40 items-center justify-center p-4 bg-white/5">
                {imageError ? (
                    renderFallback()
                ) : (
                    <img
                        src={imageUrl}
                        alt={title}
                        className="max-h-full max-w-full object-contain"
                        onError={() => setImageError(true)}
                    />
                )}
            </div>
            <div className="flex flex-1 flex-col p-4">
                <h3 className="font-bold text-lg text-dark-text-primary">{title}</h3>
                <p className="mt-2 text-sm text-dark-text-secondary flex-1">{desc}</p>
                <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-accent-primary transition-colors hover:text-accent-hover self-start"
                >
                    {t('projects.button')}
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </a>
            </div>
        </motion.div>
    );
};

const Projects: React.FC = () => {
    const { t } = useTranslation();
    return (
        <div className="container mx-auto">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <h1 className="text-3xl font-bold tracking-tight text-dark-text-primary sm:text-4xl">{t('projects.title')}</h1>
                <p className="mt-4 text-lg text-dark-text-secondary">{t('projects.description')}</p>
            </motion.div>
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {projectsData.map((project) => (
                    <ProjectCard key={project.id} {...project} />
                ))}
            </div>
        </div>
    );
};

export default Projects;