import React from "react";
import Creativedirectorpic from "../../images/IMG_5936 1.png";
import Topbar from "../../components/Navbar/Navbar";
import "./Aboutus-individual.css";
import Cross from "../../images/Vector 35.png";
import linkedIcon from "../../images/linkdin-icon.svg";
import instaIcon from "../../images/insta-icon.svg";
import { Link } from "react-router-dom";
import mailIcon from "../../images/mail.png";
function Creativedirectorbody(){
    return(
        <div>
        <div class="Creativedirectorbody">
            <Link to="/aboutus"><img class="Cross" src={Cross} alt="" /></Link>
            <img class="Creativedirectorpic" src={Creativedirectorpic} alt="" />
            <p class="teammembersname">Sharwann Solanki</p>
            <p class="creativedirectorname">Creative Director</p>
            <p className="creativedirectordescription">A self proclaimed introvert, hard to believe though. Introducing to you the Creative Director of The Compendium, Sharwan Solanki. The phrase mentioned above is what he lives by. “Believe” he says. In the process, the hard work and in yourself. Sharwan served as a production manager previously at The Compendium and is no stranger to the workings of the club. He is a kind and powerful leader. His wit is unmatched but very well respected. He is a coder and a very successful one. He was the grand-finalist for national level hackathon (SIH 2020) and secured 760th position in Google Code Jam 2020. Pursuing his degree in Computer Science Engineering, he is a programer and developer with a burning passion to help others with his code. He is an anime freak and always manages to sneak a reference in every situation. His ideas and improvisations are simply brilliant</p>
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
function Creativedirector(){
    return(
        <div>
            <Topbar />
            <Creativedirectorbody />
        </div>
    );
}
export default Creativedirector;