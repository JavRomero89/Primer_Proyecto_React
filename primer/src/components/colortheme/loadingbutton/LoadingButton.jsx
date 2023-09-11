import React, { useState } from 'react';

function LoadingButton({ onClick, theme }) {
    const [loading, setLoading] = useState(false);

    const handleClick = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            onClick();
        }, 2000); 
    }

    if (loading) {
        return <Loading />;
    }

    return (
        <button onClick={handleClick} className="theme-button">
            {theme === 'light' ? 'dark' : 'light'}
        </button>
    );
}

function Loading() {
    return <span>Cargando...</span>; 
}

export default LoadingButton;
