import React from "react";
import { Link } from 'react-router-dom';
import "./Footer.css";
import linkedIcon from "../../images/linkdin-icon.svg";
import instaIcon from "../../images/insta-icon.svg";
import mailIcon from "../../images/mail.png";

function Footer(){

    return(
        <>
        <div className="footer">

            <p className="soc-p-art">Social.</p>
            <a href="https://www.linkedin.com/in/the-compendium-iare-987b35212/" target='_blank' rel='noreferrer'><img className="insta-ic" src={instaIcon} alt=""  /></a>
            <a href="https://www.instagram.com/thecompendium.iare/" target='_blank' rel='noreferrer'><img className="linkdin-ic" src={linkedIcon} alt="" /></a>
            <a href="mailto:iarethecompendium@gmail.com" ><img className="mail-ic" src={mailIcon} alt=""  /></a>

            <div className="footer-nav">
                <h3>Navigate</h3>
                <div className="footNav-content">
                    <Link to={'/aboutus'}><p>About us</p></Link>
                    <Link to={'articleslist'}><p>Articles</p></Link>
                    <Link to={'/gallery'}><p>Gallery</p></Link>
                    <Link to={'/gallery'}><p>Spotlight</p></Link>
                    <Link to={'/archives'}><p>Archives</p></Link>
                </div>
            </div>

            <p className="copyright">&copy;2021 TheCompendium  </p>
            
        </div> 
        </>
    );
}

export default Footer;