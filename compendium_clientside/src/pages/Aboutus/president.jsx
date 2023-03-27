import React from "react";
import Topbar from "../../components/Navbar/Navbar";
import Managingdirectorpic from "../../images/_DSC0341 1.png";
import "./Aboutus-individual.css";
import Cross from "../../images/Vector 35.png";
import linkedIcon from "../../images/linkdin-icon.svg";
import instaIcon from "../../images/insta-icon.svg";
import { Link } from "react-router-dom";
import mailIcon from "../../images/mail.png";
function Managingdirectorbody(){
    return(
        <div>
        <div class="Presidentbody">
            <Link to="/aboutus"><img class="Cross" src={Cross} alt="" /></Link>
            <img class="Presidentpic" src={Managingdirectorpic} alt="" />
            <p class="teammembersname">Sachin Pisipati</p>
            <p class="managingdirectorname">President</p>
            <p className="presidentdescription">Introducing to you the President of The Compendium, Sachin Pisipati. He is a strong believer in working hard, no matter what. He is someone who believes in learning even from losses. He never lets anyone down and carries us all as one big family. He makes his mark not by words, but by his actions. His hard work speaks volumes for himself. Majoring in Mechanical Engineering, he is exploring his interests in the field but his true passion lies in acting. He is a cinephile with numerous short films already released and a few in the making. He is also an active member in Eco Crew and NSS IARE, and SAE India and is currently competing, with his team, in AEROTHON ‘21.</p>
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
function Managingdirector(){
    return(
        <div>
            <Topbar />
            <Managingdirectorbody />
        </div>
    );
}
export default Managingdirector;