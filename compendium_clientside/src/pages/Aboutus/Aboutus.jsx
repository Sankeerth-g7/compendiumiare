import React from "react";
import Header from "../../components/Navbar/Navbar";
import "../Aboutus/Aboutus.css";
import Logo from "../../images/Logo (1) 2.svg";
import Founder from "../../images/IMG_6045 1.png";
import Creativedirector from "../../images/IMG_5936 1.png"; 
import President from "../../images/_DSC0341 1.png";
import Managingdirector from "../../images/jacob1.jpg";
import cofounder from "../../images/cofounder1.png";
// import Line from "../../images/Vector 25.png";
// import Lines from "../../images/Group 71.svg";
import linkedIcon from "../../images/linkdin-icon.svg";
import instaIcon from "../../images/insta-icon.svg";
import { Link } from "react-router-dom";
import instagram from "../../images/insta-icon-1.png";
import linkedin from "../../images/linkdin-icon-1.png";
import mail from "../../images/mail1.png";
import longarrow from "../../images/longarrow.png";
import mailIcon from "../../images/mail.png";
function Aboutusbody(){
    return (
        <div>
            <div class="body-1">
                <div className="social">
                    <img className="longarrow" src={longarrow}   alt="" />
                    <a href="https://www.linkedin.com/in/the-compendium-iare-987b35212/" target='_blank' rel='noreferrer'><img className="linked-in" src={linkedin}   alt="" /></a>
                    <a href="https://www.instagram.com/thecompendium.iare/" target='_blank' rel='noreferrer'><img className="instagram" src={instagram}  alt="" /></a>
                    <a  href="mailto:iarethecompendium@gmail.com" > <img className="mail" src={mail}  alt="" /></a>
                </div>
                <h1 class="about">About</h1>
                <img class="logo" src={Logo} alt="" />
                <p className="about-text1">The Compendium (TC) is the News and Publication Society (NPS) of the Institute of Aeronautical Engineering. The Compendium was started in 2019, making it one of the earliest student clubs on campus. </p>
                <p className="about-text2">Awareness is all about restoring your freedom to choose what you want instead of what your past imposes on you. The Compendium provides an overall review and makes sure that everyone is informed about all that happens at IARE. From achievements of students and faculty, to events, workshops, and fests conducted; Departmental activities to providing a platform for exposure of talent for students; everything that happens in IARE, The Compendium covers it all for you. </p>
            </div>

            <div className="body-2">
                <p className="team">The Team</p>
                <hr  class="hr2"/>
                {/* <img className="lines" src={Lines} alt="" /> */}
                <img className="Founder" src={Founder} alt="" />
                <div className="foundertextarea">
                    <p className="Foundertext">Founder</p>
                    <p className="name">Anusha Vajha</p>
                </div>
                <img className="Cofounder" src={cofounder} alt="" />
                <div className="cofoundertextarea">
                    <p className="cofoundertext">Co-founder</p>
                    <p className="name">Vennela Manmohan</p>
                </div>
            </div>

            <div className="body-3">
                <Link to="/president"><img className="president" src={President} alt="" /></Link>
                <div className="presidenttextarea">
                    <p className="Presidenttext">President</p>
                    <p className="name">Sachin Pisipati</p>
                </div>
                <Link to="/managingdirector"><img className="Managingdirector" src={Managingdirector} alt="" /></Link>
                <div className="managingdirectortextarea">
                    <p className="ManagingDirectortext">Managing Director</p>
                    <p className="name">Jacob Alex</p>
                </div>
                <Link to="/creativedirector"><img class="Creativedirector" src={Creativedirector} alt="" /></Link>
                <div className="creativedirectortextarea">
                    <p className="CreativeDirectortext">Creative Director</p>
                    <p className="name">Sharwann Solanki</p>
                </div>
            </div>

            <div className="footer-A">

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
function Aboutus(){
    return(
        <div>
            <Header />
            <Aboutusbody />
        </div>
    );
}
export default Aboutus;