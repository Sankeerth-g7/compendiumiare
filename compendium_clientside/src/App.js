import React from "react";
import {
  HashRouter as Router,
  Switch,
  Route
}from "react-router-dom";
import Aboutus from "./pages/Aboutus/Aboutus";
import Archives from "./pages/Archives/Archives";
import Slider from "./pages/Gallery/Slider";
import Home from "./pages/Home/Home";
import ArticleBlock from "./pages/ArticlesList/ArticleBlock";
import Article from "./pages/Articles/Article";
import Login from "./pages/login/Login";
import President from "./pages/Aboutus/president";
import Founder from "./pages/Aboutus/founder";
import Creativedirector from "./pages/Aboutus/creativedirector";
import Managingdirector from "./pages/Aboutus/managingdirector";
import Cofounder from "./pages/Aboutus/cofounder";
// import AddArticle from "./pages/write/AddArticle";


function App(){
  // let md5=require("md5");
// const key=md5("compendium");
//console.log(key);
    return (
      
        <Router>
          <Switch>
         
            <Route exact path='/'>
             <Home />
            </Route>
          
            <Route path='/aboutus'>
             <Aboutus />
            </Route>

            <Route path='/archives'>
             <Archives />
            </Route>

            <Route path='/President'>
             <President />
            </Route>

            <Route path='/managingdirector'>
             <Managingdirector />
            </Route>

            <Route path='/creativedirector'>
             <Creativedirector />
            </Route>

            <Route path='/founder'>
             <Founder />
            </Route>

            <Route path='/cofounder'>
             <Cofounder />
            </Route>

            <Route path='/gallery'>
            <Slider />
            </Route>

            <Route path='/articleslist' >
              <ArticleBlock />
            </Route>

            <Route path='/login/bc31fc693c24f4aa0bf13dcf0fbfb1e8' >
              <Login />
             </Route>

              {/* <Route path="/write">
               <AddArticle />
             </Route> */}

            <Route path="/:id" >
               <Article />
            </Route>

            
          </Switch>
        </Router>
    );
}

export default App;
