import React from "react";
import Topbar from "../../components/Navbar/Navbar";
import Founderpic from "../../images/IMG_6045 1.png";
import "./Aboutus-individual.css";
import Cross from "../../images/Vector 35.png";
import { Link } from "react-router-dom";
import linkedIcon from "../../images/linkdin-icon.svg";
import instaIcon from "../../images/insta-icon.svg";
import mailIcon from "../../images/mail.png";
function Founderbody(){
    return(
        <div>
            <div class="Founderbody">
                <Link to="/aboutus"><img class="Cross" src={Cross} alt="" /></Link>
                <img class="Founderpic" src={Founderpic} alt="" />
                <p class="teammembersname">Anusha Vajha</p>
                <p class="foundername">Founder</p>
                <p className="founderdescription">An achiever, dreamer and fine leader. Introducing to you the new President of The Compendium, Rahul (Sattarapu Rahul). He aims for perfection in all his ventures. An ordinary person with a skill to practise perfection is what he is. Previously, he had served tirelessly as the Vice President of the club. He is one with high spirits and never lets a teammate down. Always a sight for calm and composure, he leads the team with all his heart. He has proved multiple times that nothing is bigger than The Compendium to him. Otherwise, he is just an ordinary student with a weird combination of maturity and kiddish mentality which changes dynamically. He’s a person who knows exactly what he wants and almost always successfully can convey it to the team and get it done. </p>
            </div>

            <div className="footer-AI">

                <p className="soc-p-art-H">Social.</p>
                {/* <Link ><img className="linkdin-ic-H" src={linkedIcon} alt="" /></Link>
                <Link><img className="insta-ic-H" src={instaIcon} alt=""  /></Link>
                <Link><img className="mail-ic-H" src={mailIcon} alt=""  /></Link> */}
                <a href="https://www.instagram.com/thecompendium.iare/" target='_blank' rel='noreferrer'><img className="linkdin-ic-H" src={linkedIcon} alt="" /></a>
                <a href="https://www.linkedin.com/in/the-compendium-iare-987b35212/" target='_blank' rel='noreferrer'><img className="insta-ic-H" src={instaIcon} alt=""  /></a>
                <a href="mailto:iarethecompendium@gmail.com" ><img className="mail-ic-H" src={mailIcon} alt=""  /></a>
            
                <div className="footer-nav-H">
                    <h3>Navigate</h3>
                    <div className="footNav-content-H">
                        <Link to={'/aboutus'}><p>About us</p></Link>
                        <Link to={'articleslist'}><p>Articles</p></Link>
                        <Link to={'/gallery'}><p>Gallery</p></Link>
                        <Link to={'/gallery'}><p>Spotlight</p></Link>
                        <Link to={'/archives'}><p>Archives</p></Link>
    
                    </div>
                </div>
                <p className="copyright-H">&copy;2021 TheCompendium  </p>
            </div>
        </div>

    );
}
function Founder(){
    return(
        <div>
            <Topbar />
            <Founderbody />
        </div>
    );
}
export default Founder;