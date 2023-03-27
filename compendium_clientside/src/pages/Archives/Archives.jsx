import React from "react";
import Header from "../../components/Navbar/Navbar";
import "./Archives.css";
import eye from "../../images/eye.png";
import download from "../../images/download.png";
import issue1 from "../Home/newpaper/issue1.pdf";
import issue2 from "../Home/newpaper/issue2.pdf";
import issue3 from "../Home/newpaper/issue3.pdf";
import issue4 from "../Home/newpaper/issue4.pdf";
import { Link } from 'react-router-dom';
import instaIcon from "../../images/insta-icon.svg";
import linkedIcon from "../../images/linkdin-icon.svg";
import mailIcon from "../../images/mail.png";
// import Footer from "../../components/Footer/Footer";

function Placementsbody(){
    return(
        <div>
            <div className="Archives">
                <p className="Archiveshead" >Newspaper Archives</p>
                <p className="Archives-content">Our organization is run by IARE undergraduates. Up to _ students a year are involved in The Compendium, mastering skills such as reporting, journalism, writing, photography, digital production, videography, editing, graphic design and social media management while also learning effective communication and how to manage teams and their own schedules.</p>
            </div>
            <div class="timeline">
                <div class="container left">
                    <div class="content">
                    <h2>AUGUST 2019</h2>
                    <h1 className="number01">01</h1>
                    <p className="firstedition">First Edition</p>
                    <a href={issue1} target="__blank" > <img className="eye"  src={eye} alt="" /></a>
                    <Link download={issue1} target="__blank"> <img className="download" src={download} alt="" /></Link>
                    </div>
                </div>
                <div class="container right">
                    <div class="content">
                    <h2>SEPTEMBER 2019</h2>
                    <h1 className="number02">02</h1>
                    <p className="secondedition">Second Edition</p>
                    <a href={issue2} target="__blank" > <img className="eye"  src={eye} alt="" /></a>
                    <Link download={issue2} target="__blank"> <img className="download" src={download} alt="" /></Link></div>
                </div>
                <div class="container left">
                    <div class="content">
                    <h2>NOVEMBER 2019</h2>
                    <h1 className="number03">03</h1>
                    <p className="thirdedition">Third Edition</p>
                    <a href={issue3} target="__blank" > <img className="eye"  src={eye} alt="" /></a>
                    <Link download={issue3} target="__blank"> <img className="download" src={download} alt="" /></Link></div>
                </div>
                <div class="container right">
                    <div class="content">
                    <h2>JANUARY 2020</h2>
                    <h1 className="number04">04</h1>
                    <p className="fourthedition">Fourth Edition</p>
                    <a href={issue4} target="__blank" > <img className="eye"  src={eye} alt="" /></a>
                    <Link download={issue4} target="__blank"> <img className="download" src={download} alt="" /></Link></div>
                </div>
                <div class="container left">
                    <div class="content">
                    <h2>April 2022</h2>
                    <h1 className="number05">05</h1>
                    <p className="fifthedition">Fifth Edition</p>
                    <a href={issue4} target="__blank" > <img className="eye"  src={eye} alt="" /></a>
                    <Link download={issue4} target="__blank"> <img className="download" src={download} alt="" /></Link>
                    </div>
                </div>
            </div>
            <div className="footer-Ar">
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
function Placements(){
    return(
        <div>
            <Header />
            <Placementsbody />
            {/* <Footer /> */}
        </div>
    );
}
export default Placements;