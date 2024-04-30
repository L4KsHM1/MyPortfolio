import React from "react";
import { getImageUrl } from "../../utils";

export const About = () =>{
    return <section>
        <h2>About</h2>
        <div><img src={getImageUrl("about/aboutImage.png")} alt="me" />
        <ul>
            <li>
                <img src={getImageUrl("about/cursorIcon.png")} alt="cursoricon" />
                 <div>
                    <h3>Frontend Developer</h3>
                    <p>I'm a frontend developer with experience in building responsive and optimized sites</p>
                 </div>
        </li>
        <li>
                <img src={getImageUrl("about/serverIcon.png")} alt="servericon" />
                 <div>
                    <h3>Backend Developer</h3>
                    <p>I have experience developing fast and optimised back-end systems and APIs</p>
                 </div>
        </li>
        <li>
                <img src={getImageUrl("about/serverIcon.png")} alt="cursoricon" />
                 <div>
                    <h3>UI Designer</h3>
                    <p> I'm currently enhancing my proficiency in design software such as Adobe XD and Figma through hands-on practice and online tutorials.
                   </p>
                 </div>
        </li>
        </ul>
        </div>
    </section>
}