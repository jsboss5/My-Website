import React from 'react';
import { useHistory } from 'react-router-dom'

export default function ButtonComponent({text, path}) {
    const history = useHistory();
    const handleButtonClick = () => {
        history.push(path);
    };

    return(
        <button
            className="learn-more-button"
            onClick={handleButtonClick}
        >
            <span>{text}</span>
        </button>
    );
}