import React from 'react';
import OpenCarrot from "../../images/open-carrot-blue.png"
import ContentSection from './ContentSection';

export default function DropDownSection({
    text,
    isOpen,
    content,
    }){

    const [headerOpen, setHeaderOpen] = React.useState(isOpen);

    const onHeaderClick = () => {
        setHeaderOpen(!headerOpen);
        console.log("flag");
    };

    const iconClass = headerOpen ? "carrot-icon opened" : "carrot-icon closed";
    return(
        <div>
            <div
                className="drop-down-header-container"
                onClick={onHeaderClick}
            >
                <div className="drop-down-title">
                    <h1 className="subtitle">{text}</h1>
                </div>
                <div className="arrow-icon-container">
                <img
                    className={iconClass}
                    src={OpenCarrot} alt="carrot"
                    />
                </div>
            </div>
            {headerOpen && content}
        </div>
    );

}