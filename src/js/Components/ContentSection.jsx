import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { useInView } from 'react-intersection-observer';
import "../../css/main.scss";

export default function ContentSection ({
    columnOne,
    columnTwo,
    isMobile,
    }){


    const mobileCss =  isMobile ? 'mobile' : '';

    const [ref, inView] = useInView({
      root: null,
      threshold: 0.75,
    });

    const inViewCss = inView ? "in-view" : "";

    return(
        <section
            className={"content-section " + inViewCss}
            ref={ref}>
            <div className={"main-section-container " + mobileCss}>
                <div className="column-one">
                    {columnOne}
                </div>
                <div className="column-two">
                    {columnTwo}
                </div>
            </div>
        </section>
    );
};

// Work on this sooon