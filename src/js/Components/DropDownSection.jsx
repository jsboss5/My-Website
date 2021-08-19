import React from 'react';
import OpenCarrot from "../../images/open-carrot-blue.png"

export default function DropDownSection({
    text,
    isOpen,
    content,
    isMobile,
    isRealMobile,
    }){

    const [headerOpen, setHeaderOpen] = React.useState(isOpen);

    const onHeaderClick = () => {
        setHeaderOpen(!headerOpen);
    };

    const mobileClass = isMobile ? 'mobile-drop-down' : '';
    const realMobileClass = isRealMobile ? 'real-mobile-drop-down' : '';

    const iconClass = headerOpen ? "carrot-icon opened" : "carrot-icon closed";
    return(
        <div className={mobileClass + ' ' + realMobileClass}>
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