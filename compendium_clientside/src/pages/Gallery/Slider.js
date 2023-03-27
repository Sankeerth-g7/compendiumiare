import React, {useState} from 'react'
import './Slider.css'
import BtnSlider from './BtnSlider'
import dataSlider from './dataSlider'
import linkedIcon from "../../images/linkdin-icon.svg";
import instaIcon from "../../images/insta-icon.svg";
import Topbar from '../../components/Navbar/Navbar';
import mailIcon from "../../images/mail.png";
import { Link } from 'react-router-dom';

export default function Slider() {

    const [slideIndex, setSlideIndex] = useState(1)

    const nextSlide = () => {
        if(slideIndex !== dataSlider.length){
            setSlideIndex(slideIndex + 1)
        } 
        else if (slideIndex === dataSlider.length){
            setSlideIndex(1)
        }
    }

    const prevSlide = () => {
        if(slideIndex !== 1){
            setSlideIndex(slideIndex - 1)
        }
        else if (slideIndex === 1){
            setSlideIndex(dataSlider.length)
        }
    }

    const moveDot = index => {
        setSlideIndex(index)
    }

    return (
        <>
        <Topbar />
        
        <div className="gallery">
            <div>
                <h1 className="Heading">Gallery</h1>
            </div>
            <div className="container-slider">
                {dataSlider.map((obj, index) => {
                    return (
                        <div
                        key={obj.id}
                        className={slideIndex === index + 1 ? "slide active-anim" : "slide"}>
                            <img src={process.env.PUBLIC_URL + `/images/img${index + 1}.jpg`}  alt="" />
                        </div>
                    )
                })}
                

            </div>
            <div className="container-dots">
                    {Array.from({length: 6}).map((item, index) => (
                        <div 
                        onClick={() => moveDot(index + 1)}
                        className={slideIndex === index + 1 ? "dot active" : "dot"}
                        ></div>
                    ))}  
            </div>
            <BtnSlider moveSlide={nextSlide} direction={"next"} />
            <BtnSlider moveSlide={prevSlide} direction={"prev"}/>
        </div>
        <div className="footer-G">

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
        
      </>
    )
}

