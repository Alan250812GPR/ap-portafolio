// LoadingSpinner.js
import React from 'react';
import './loadingSpinner.css'; // Puedes agregar estilos personalizados

const LoadingSpinner = () => {
    return (
        <div className="loading-spinner">
            {/* Aquí puedes agregar un spinner o cualquier animación */}
            <div className="spinner"></div>
            <p>Cargando...</p>
        </div>
    );
};

export default LoadingSpinner;