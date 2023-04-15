import React from "react";
import Header from "../../components/Navbar/Navbar";
import {useState,useEffect} from "react";
import axios from "axios";
import {useLocation} from "react-router";
import "./Articles.css";
// import linkedIcon from "../../images/linkdin-icon.svg";
// import instaIcon from "../../images/insta-icon.svg";
// import mailIcon from "../../images/mail.png";
// import {Link } from 'react-router-dom';
import Footer from "../../components/Footer/Footer";


function Article(){
    const {pathname}=useLocation();
    const path=pathname;
    // console.log(pathname+" pathname");
    const [art,setArt]=useState([]);
    // let [sty,setSty]=useState({});
    // let [styw,setStyw]=useState({});
  
    useEffect(()=>{
        const fetchPost=async()=>{
            const res=await axios.get("https://compendiumiare.onrender.com/api/posts"+path);
            
            setArt(res.data);
            // console.log(art,"length",res.data.content.length);
            // if(res.data.content.length !==0){
            //     const len=res.data.content.length;
            //     // setSty({top:(len/20)+'px'})
            //     // setStyw({top:len/65+'px'})
            // }
        };            

        fetchPost();
        
    },[path,art]);
    
    
    return (
        <>
        <Header />
        <div className="con">
            <div className="title-div">
                <h1 className="title">{ art.title }</h1>
            </div>
            <div className="date-div">
                <h1 className="date">{ art.dateAdded }</h1>
            </div>
            
            <div className="skill-row">
                <img className="img-article" src={art.img} alt="" srcset="" />
                <div className="content-div">
                    <h1 className="content">{ art.content }</h1>
                </div>
                <div className="writtenby-div">
                    <h1 className="writtenby" >Written by</h1>
                    <h1 className="writtenby" >{ art.writtenBy }</h1>
                </div>
            </div>
            
        </div>

        <div>

        </div>
        <Footer />
        {/* <div className="article-footer-ar"  >
            
            <p className="soc-p-ar">Social</p>
            <a href="https://www.instagram.com/thecompendium.iare/" target='_blank' rel='noreferrer'><img className="linkdin-ic" src={linkedIcon} alt="" /></a>
            <a href="https://www.linkedin.com/in/the-compendium-iare-987b35212/" target='_blank' rel='noreferrer'><img className="insta-ic" src={instaIcon} alt=""  /></a>
            <img className="mail-ic" src={mailIcon} alt=""  />

            <div className="footer-nav-ar">
                <h3>Navigate</h3>
                <div className="footNav-content-ar">
                    <Link to={'/aboutus'}><p>About us</p></Link>
                    <Link to={'articleslist'}><p>Articles</p></Link>
                    <Link to={'/gallery'}><p>Gallery</p></Link>
                    <Link to={'/gallery'}><p>Spotlight</p></Link>
                    <Link to={'/placements'}><p>Placements</p></Link>
                </div>
            </div>

            <p className="copyright-ar">&copy;2021 TheCompendium  </p>
        </div> */}
        </>
    );
}

export default Article;
