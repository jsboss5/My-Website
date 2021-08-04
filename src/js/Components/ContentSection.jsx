import React from "react";
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
                    {columnOne}
                    {columnTwo}
            </div>
        </section>
    );
};

// Work on this sooon