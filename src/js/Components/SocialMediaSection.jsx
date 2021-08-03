import React from "react";
import { SocialIcon } from 'react-social-icons';
import "../../css/main.scss";

export default function SocialMediaSection(props){
    return (
        <section className="social-media-section">
            <ul className="nav-content-box">
                <li>
                    <SocialIcon
                    url="https://www.linkedin.com/in/joshua-boss/"
                    bgColor="#e2eaec"
                    />
                </li>
                <li>
                    <SocialIcon
                    url="https://github.com/jsboss5"
                    bgColor="#e2eaec"
                    />
                </li>
                <li>
                <SocialIcon
                    url="mailto: joshua.boss@duke.edu"
                    bgColor="#e2eaec"
                    />
                </li>
            </ul>
        </section>
    );
}
