import React,{useState,useEffect} from 'react'
import axios from 'axios';
// import { render } from '@testing-library/react';
import "./addArticle.css"

const DeleteArticle = () => {

    const delPost=async(x)=>{
        await axios.delete("http://localhost:5000/api/posts/"+x);
        // console.log(" post deleted ",res);
        await axios.delete("http://localhost:5000/api/postid/"+x);
        alert("post deleted");
        // this.render();


    }
    let [postsids,setPostsids]=useState([]);
    useEffect(()=>{
        const fetids=async()=>{
        const res= await axios.get("http://localhost:5000/api/postid");
        setPostsids(res.data);
        }
        fetids();
    })
    
    
    // console.log(" postids ",postsids);
  return (
    

      <>
    <h3 style={{color:"white"}}>Delete posts </h3>
        {
        postsids.map((ar,index)=>(
            <div className='del-articles' key={index}>
                <div className='del-article'>
                    <p style={{color:"white"}} >{ar.posttitle}</p>
                </div>
                <button style={{marginBottom:"30px"}} onClick={()=>delPost(ar.postid)}>delete</button>
            </div>
        ))
        }
    </>        
  )
}

export default DeleteArticle
