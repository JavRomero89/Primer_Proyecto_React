import React, { useState } from 'react';
import './ColorTheme.css';
import LoadingButton from './loadingbutton/LoadingButton';


function ColorTheme() {
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    }

    return (
        <div className={`color ${theme}`}>
            <div className="container">
                <h1>Aqui va el titulo</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure veniam sunt quod esse dignissimos illo temporibus voluptatibus neque recusandae ex. Quod blanditiis quia maxime quisquam nihil illo sed vitae numquam.</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem aut nobis iure, quaerat sunt ratione possimus sint? Minus culpa iure porro eum magni eveniet, quos deleniti molestiae, veritatis unde quo.</p>
                <LoadingButton onClick={toggleTheme} theme={theme} />

            </div>
        </div>
    );
}

// function Button({ onClick, theme }) {
//     return (
//         <button onClick={onClick} className="theme-button">
//             {theme === 'light' ? 'dark' : 'light'}

//         </button>
//     );
// }

export default ColorTheme;
