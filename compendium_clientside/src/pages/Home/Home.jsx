import React from "react";
// import Footer from "../../components/Footer/Footer";
// import Logo from "../../images/logo.png";
import Header from "../../components/Navbar/Navbar";
// import Footer from "../../components/Footer/Footer"
import sitting from "../../images/compw 1.svg";
import vector from "../../images/Vector 18.svg";
import vector23 from "../../images/Vector 23.png"
import ellipse from "../../images/Ellipse 8.png"
import arrow from "../../images/arrow.svg";
// import instagram from "../../images/insta-icon.svg";
// import linkedin from "../../images/linkdin-icon.svg";
// import eye from "../../images/eye.png";
// import download from "../../images/download.png";
import logo from "../../images/Logo (1) 2.svg";
import subscribe from "../../images/Group 7.svg";
import longarrow from "../../images/longarrow.png";
import line from "../../images/line.png";
import circle from "../../images/circle.png";
import rectangle27 from "../../images/Rectangle 27.png";
import rectangle28 from "../../images/Rectangle 28.png";
import rectangle29 from "../../images/Rectangle 29.png";
import linkedIcon from "../../images/linkdin-icon.svg";
import instaIcon from "../../images/insta-icon.svg";
import linkedin from "../../images/linkdin-icon-1.png";
import instagram from "../../images/insta-icon-1.png";
// import forestfire from "../../images/forestfire.jpg";
import mailIcon from "../../images/mail.png";
import mail from "../../images/mail1.png";
// import logo from "../../images/logo.png";
import issue1 from "../Home/newpaper/issue1.pdf";
import issue2 from "../Home/newpaper/issue2.pdf";
import issue3 from "../Home/newpaper/issue3.pdf";
import issue4 from "../Home/newpaper/issue4.pdf";
import droparrow from "../../images/droparrow.png"
import "./Home.css";
import { Link } from 'react-router-dom';

import axios from "axios";
import {useState,useEffect} from 'react';

function Homebody(){
    const [ids,setIds]=useState([]);
    const [art1,setArt1]=useState([])
    const [art2,setArt2]=useState([]);
    
    useEffect(()=>{
        let res;

        const fetpostid=async()=>{
          
        res = await axios.get("https://compendium-serverside.herokuapp.com/api/postid");
        console.log(" res "); 
        setIds(res.data);
        
        }
        if(ids.length===0){
            fetpostid();
        }

    },[ids,art1,art2]);

    useEffect(()=>{
        if(ids.length!==0){
        setArt1(ids[ids.length-1]);
        setArt2(ids[ids.length-2]);
        // console.log(" art1 art2 ",art1.postid,art2.postid);
        }
    },[ids,art1.postid,art2.postid]);

    
    //for fetching article1 for homepage
    const [article1,setArticle1]=useState([]);
    const [article2,setArticle2]=useState([]);
    useEffect(()=>{
        const fetpost=async()=>{
            let res=await axios.get("https://compendium-serverside.herokuapp.com/api/posts/"+art1.postid);
            setArticle1(res.data);
            res=await axios.get("https://compendium-serverside.herokuapp.com/api/posts/"+art2.postid);
            setArticle2(res.data);
            // console.log("article1 article2 ",article1,article2);
        }
        fetpost();
    },[art1.postid,art2.postid,article1,article2]);



    return(
    <div className="wholebody">
        <div className="homebody1">
            <img src={sitting} alt="" className="sitting "  />
            <div className="social">
                <img className="longarrow" src={longarrow}   alt="" />
                <a href="https://www.linkedin.com/in/the-compendium-iare-987b35212/" target='_blank' rel='noreferrer'><img className="linked-in" src={linkedin}   alt="" /></a>
                <a href="https://www.instagram.com/thecompendium.iare/" target='_blank' rel='noreferrer'><img className="instagram" src={instagram}  alt="" /></a>
                <a  href="mailto:iarethecompendium@gmail.com" > <img className="mail" src={mail}  alt="" /></a>
            </div>
            <div className="bodyone">
                <p className="tagline">The News and Publication Society of IARE</p>
                <p className="description">The Compendium (TC) is the News and Publication Society (NPS) of the Institute of Aeronautical Engineering. The Compendium was started in 2019, making it one of the earliest student clubs on campus. </p>
            </div>
        </div>
        
        <div className="homebody2 ">
            <p className="articles">Articles</p>
            <br />
            {/* <Link to={'/articleslist'}><button className="findbutton" type="button">Read More</button></Link> */}
            {/* <div className="twoarticles col-md-6">
                <div className="article2 col-md-6 col-sm-6">
                    <img className="article1-img" src={article2.img}  alt="" />
                    <div  className="arrow"> <Link to={'/'+article2._id}><img src={arrow} alt="Un available" /></Link> </div>
                    <h3 className="article1-title">{article2.title}</h3>
                </div>
                <div className="article3 col-md-6 col-sm-6">
                    <img className="article1-img" src={article2.img}  alt="" />
                    <div  className="arrow"> <Link to={'/'+article2._id}><img src={arrow} alt="Un available" /></Link> </div>
                    <h3 className="article1-title">{article2.title}</h3>
                </div>
            </div> */}
            <div class="container-fluid articlesdiv">
              <div class="row ">
              <div className="col-md-4">
            <Link to={'/articleslist'}><button className="findbutton2" type="button">Find Out More</button></Link> 
              </div>
                <div class="col-md-3 col-sm-12 article1">
                  <div class="card">
                    <div class="imgdiv">
                        <img src={sitting} class="card-img-top" alt="Article Image" />
                    </div>
                    <div class="card-body">                      
                      <Link to={'/'+article2._id}><p class="btn articleredirectbutton">Initial Article <i class="fa fa-arrow-right"></i></p></Link>
                    </div>
                  </div>
                </div>
                <div class="col-md-3 col-sm-12 article2">
                  <div class="card">
                    <div class="imgdiv">
                        <img src={sitting} class="card-img-top" alt="Article Image" />
                    </div>
                    <div class="card-body">                      
                      <Link to={'/'+article2._id}><p class="btn articleredirectbutton">Initial Article <i class="fa fa-arrow-right"></i></p></Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>

        <div className="homebody3">
            
            <p className="aboutus" >About Us</p>
            <div className="body3logo">
                <img src={logo} alt="" />
            </div>
            <p className="aboutus-content">The Compendium (TC) is the News and Publication Society (NPS) of the Institute of Aeronautical Engineering. The Compendium was started in 2019, making it one of the earliest student clubs on campus.</p>
             <Link to={'/aboutus'}>  <button className="findbutton1" type="button">Find Out More</button></Link> 
        </div>


        <div className="homebody4">
            <p className="NewspaperArchives" >Newspaper Archives</p>
            <p className="NewspaperArchives-content">Our organization is run by IARE undergraduates. Up to _ students a year are involved in The Compendium, mastering skills such as reporting, journalism, writing, photography, digital production, videography, editing, graphic design and social media management while also learning effective communication and how to manage teams and their own schedules.</p>
            <img className="line" src={line} alt="" />
            <img className="circle1" src={circle} alt="" />
            <img className="circle2" src={circle} alt="" />
            <img className="circle3" src={circle} alt="" />
            <img className="ellipse1" src={ellipse} alt="" />
            <p className="newsedition">Newspaper Editions</p>
            <div class="dropdown">
                <Link class="dropbtn"><img className="droparrow" src={droparrow} alt="" /></Link>
                <div class="dropdown-content">
                    <a href={issue1} target="__blank" >Issue 1</a>
                    <a href={issue2} target="__blank" >Issue 2</a>
                    <a href={issue3} target="__blank" >Issue 3</a>
                    <a href={issue4} target="__blank" >Issue 4</a>
                </div>
            </div>
        </div>


        <div className="homebody5">
            <p className="Spotlight" >Spotlight.</p>
            {/* <p className="Spotlight-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. convallis diam egestas.Morbi congue sed mattis. Morbi congue sed mattis.</p> */}
            <Link to={'/gallery'}><button className="findbutton2" type="button">Read More</button></Link> 
            <div className="spotlight-img">
                <div className="spotlight-img1"><img className="rectangle27 w-100 h-100" src={rectangle27} alt="" /></div>
                <div className="spotlight-img3"><img className="rectangle29 w-100 h-100" src={rectangle29} alt="" /></div>
                <div className="spotlight-img2"><img className="rectangle28 w-100 h-100" src={rectangle28} alt="" /></div>
                <img className="vector-18" src={vector} alt="" />
                <img className="ellipse" src={ellipse} alt="" />
                <img className="vector-23" src={vector23} alt="" />
            </div>
            
        </div>


        <div className="homebody6">
            <p className="Subscribe" >Subscribe</p>
            <img className="subscribeimage" src={subscribe} alt='Un available' />
            <hr  />
            <div className="subscribe-content">
                <h1 className="newsletter">Newsletter Signup</h1>
                <form>
                    <input class="email" type="text" name="search" placeholder="Your Email Address" />
                    <div  className="arrow2"><img src={arrow} alt="Un available" /></div>
                </form>
                
            </div>
        </div>

        <div className="footer-H">

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

    </div>);

    

}
function Home(){
    return(
        <>
        <Header />
        <Homebody />
        </>

    );
}
export default Home;