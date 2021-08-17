import React from 'react';

export default function ButtonComponent({text, onClick}) {

    return(
        <button
            className="learn-more-button"
            onClick={onClick}
        >
            <span>{text}</span>
        </button>
    );
}