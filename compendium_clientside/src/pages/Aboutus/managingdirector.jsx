import React from "react";
import Topbar from "../../components/Navbar/Navbar";
import Managingdirectorpic from "../../images/jacob1.jpg";
import "./Aboutus-individual.css";
import Cross from "../../images/Vector 35.png";
import linkedIcon from "../../images/linkdin-icon.svg";
import instaIcon from "../../images/insta-icon.svg";
import { Link } from "react-router-dom";
import mailIcon from "../../images/mail.png";

function Managingdirectorbody(){
    return(
        <div>
        <div class="Managingdirectorbody">
            <Link to="/aboutus"><img class="Cross" src={Cross} alt="" /></Link>
            <img class="Managingdirectorpic" src={Managingdirectorpic} alt="" />
            <p class="teammembersname">Jacob Alex</p>
            <p class="managingdirectorname">Managing Director</p>
            <p className="managingdirectordescription">Jacob Alex, a third year computer science engineering student who doesn't lack in compassion or spontaneity. He is tenacious, and wise. While spontaneity is a strong suit, he is also known to be thoughtful and calm. He's a good leader, as he makes sure that the people around him take their work seriously, and don't forget to have a life while they do it.<br />His strengths lie in identifying problems and the right people to solve them.</p>
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