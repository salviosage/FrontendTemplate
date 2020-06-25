import React, {useState, useEffect} from 'react';
import {
  Paper,
  makeStyles
} from '@material-ui/core';
import hands_on_skils from "../../assets/images/icons/hands-on-skils.png";
import career_guidance from "../../assets/images/icons/career-guidance.png";
import opportunities from "../../assets/images/icons/opportunities.png";
import our_program from "../../assets/images/our-program.png";
import hands_on_skills_img_content from "../../assets/images/hands-on-skills-img-content.png";

const useStyles = makeStyles((theme) => ({
  
  mainFeaturedPost: {
    position: 'relative',
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    padding: theme.spacing(6),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(6),
      paddingRight: 0,
    },
  },
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,.3)',
  },
  mainFeaturedPostContent: {
    position: 'relative',
    padding: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(6),
      paddingRight: 0,
    },
  },

  paper: {
    backgroundColor: theme.palette.background.paper,
    // border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  
}));
const Program =props=>{
  const classes = useStyles();
    return (
        <>
        <Paper className={classes.mainFeaturedPost} style={{ backgroundImage: `url(${our_program })` }}>
  <div className="parallax-container">
      <div className="container">
        <div className="row" id="p-sm">
            <div className="program-summary">
                <div className="col s12 m3" id="p-s">
                        <div><img src={hands_on_skils} alt="hands-on-skills" className="responsive-img"/></div>
                        <h5>Hands on skills</h5>
                        <a><button>Read more</button></a>
                </div>
            </div>
            <div className="program-summary">
                <div className="col s12 m3" id="p-s">
                        <div><img src={career_guidance} alt="hands-on-skills" className="responsive-img"/></div>
                        <h5>career Guidance</h5>
                        <button>Read more</button>
                </div>
            </div>
            <div className="program-summary" >
                <div className="col s12 m3" id="p-s">
                        <div><img src={opportunities} alt="hands-on-skills" className="responsive-img"/></div>
                        <h5>opportunities </h5>
                        <button>Read more</button>
                </div>
            </div>
        </div>
      </div>
    <div className="parallax"><img src={our_program} alt="Unsplashed background img 1"/></div>
  </div>
  </Paper>

  <div className="containerr" id="about_solvers">
    <div className="section">
      <div className="row" id="whoWeAre">
        <div className="col s12 m4">
        
          <div>
            <img src={hands_on_skills_img_content} className="responsive-img" alt="data"/>
          </div>
        
          {/* <div className="icon-block">
            <h2 className="center brown-text"><i className="material-icons">flash_on</i></h2>
            <h5 className="center">Speeds up development</h5>

            <p className="light">We did most of the heavy lifting for you to provide a default stylings that incorporate our custom components. Additionally, we refined animations and transitions to provide a smoother experience for developers.</p>
          </div> */}
      
        </div>

        <div className="col s12 m8" id="program-content">
          <div className="icon-lock">
            <h2 className="whoWeAre-header">Hands on skills</h2> 
            <p className="whoWeAre-block">

              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc imperdiet aliquet convallis. Curabitur quam orci,
              facilisis sed ultrices ut, accumsan et ex.Pellentesque habitant morbi tristique  Phasellus  ...
   
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc imperdiet aliquet convallis. Curabitur quam orci,
              facilisis sed ultrices ut, accumsan et ex.Pellentesque habitant morbi tristique  Phasellus  ...
              </p>
              <button className="to-about-us"><a  href="/sign-up">Apply</a></button>
          </div>
        </div>
      </div>

    </div>
  </div>

<div className="containerr" id="about_solvers">
    <div className="section">
      <div className="row" id="whoWeAre">

        <div className="col s12 m8" id="whoWeAre-content">
            <div className="icon-lock">
              <h2 className="whoWeAre-header">Career guidance</h2> 
              <p className="whoWeAre-block">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc imperdiet aliquet convallis. Curabitur quam orci,
                facilisis sed ultrices ut, accumsan et ex.Pellentesque habitant morbi tristique  Phasellus  ...
                </p>
                <button className="to-about-us"><a  href="/sign-up">Apply</a></button>
            </div>
          </div>

        <div className="col s12 m4">

          
          <div>
            <img src={hands_on_skills_img_content} className="responsive-img" alt="data"/>
          </div>
        
          {/* <div className="icon-block">
            <h2 className="center brown-text"><i className="material-icons">flash_on</i></h2>
            <h5 className="center">Speeds up development</h5>

            <p className="light">We did most of the heavy lifting for you to provide a default stylings that incorporate our custom components. Additionally, we refined animations and transitions to provide a smoother experience for developers.</p>
          </div> */}
      
        </div>
      </div>

    </div>
  </div>


<div className="containerr" id="about_solvers">
    <div className="section">
      <div className="row" id="whoWeAre">
        <div className="col s12 m4">

          
          <div>
            <img src={hands_on_skills_img_content} className="responsive-img" alt="data"/>
          </div>
        
          {/* <div className="icon-block">
            <h2 className="center brown-text"><i className="material-icons">flash_on</i></h2>
            <h5 className="center">Speeds up development</h5>

            <p className="light">We did most of the heavy lifting for you to provide a default stylings that incorporate our custom components. Additionally, we refined animations and transitions to provide a smoother experience for developers.</p>
          </div> */}
        
        </div>

        <div className="col s12 m8" id="whoWeAre-content">
          <div className="icon-lock">
            <h2 className="whoWeAre-header">Opportunities</h2> 
            <p className="whoWeAre-block">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc imperdiet aliquet convallis. Curabitur quam orci,
              facilisis sed ultrices ut, accumsan et ex.Pellentesque habitant morbi tristique  Phasellus  ...
              </p>
              <button className="to-about-us"><a  href="/sign-up">Apply</a></button>
          </div>
        </div>
      </div>

    </div>
  </div>
        </>
    );
}

export default Program