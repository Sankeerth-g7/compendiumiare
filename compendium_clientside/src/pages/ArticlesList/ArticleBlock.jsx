import React from 'react';
import { useState,useEffect } from 'react';
import ArticlesList from './ArticlesList';
import "./ArticleBlock.css";
import Topbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
// import {useLocation} from "react-router";
import axios from "axios";


const ArticleBlock = () => {
    const [posts,setPosts]=useState([]);
    // const allPosts=JSON.parse(localStorage.getItem("allposts"));
    // setPosts(allPosts);
    useEffect(()=>{

        const fetchArts= async ()=>{
            const res =  await axios.get("https://transcendent-bunny-818b80.netlify.app/api/posts");
            console.log(" fet ");
            setPosts(res.data.reverse());
        }
        
        // if(posts.length===0){
            fetchArts();
        // }
        


    },[posts])

    return (
        <>
        <Topbar />
        <div className="articleList">
            
            <p className="article-name-p">Articles</p>

            <div className="container container-articlelist" >
                <ArticlesList articles={posts} />
            </div>
        </div>
        <Footer />
        </>
    )
}

export default ArticleBlock;
