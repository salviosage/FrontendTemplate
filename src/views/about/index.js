import React, {useState, useEffect} from 'react';
import about_us_header from "../../assets/images/about-us-header.png";
import our_vision_img_content from "../../assets/images/our-vision-img-content.png";
import channel from "../../assets/images/chanel.png";
import mo from "../../assets/images/mo.png";
import weTrain from "../../assets/images/weTrain.svg";
import Joseph_Semafara from "../../assets/images/Joseph_Semafara.png";
import {
  FormHelperText,
  Paper,
  makeStyles
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  
  mainFeaturedPost: {
    position: 'relative',
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
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
const About =props=>{
  const classes = useStyles();
    return (
        <>
        <Paper className={classes.mainFeaturedPost} style={{ backgroundImage: `url(${about_us_header })` }}>
<div className="row">
    <div className="abt_header">
        <div className="parallax-container">
            <div>
                <h3 className="abt_header_text">About Us</h3>
            </div>
        </div>
    </div>
</div>
</Paper>


  <div className="containerr" id="about_solvers">
    <div className="section">
      <div className="row" id="whoWeAre">
        <div className="col s12 m4">
         
            <h1 className="we-are">We Are</h1>
        </div>

        <div className="col s12 m8" id="WeAre-content">
          <div className="icon-lock">
            <p className="WeAre-block">
              Lorem ipsum dolor sit amet, consectetur 
              adipiscing elit. Nunc imperdiet aliquet convallis.
            Curabitur quam orci,
              facilisis sed ultrices ut, accumsan et ex.Pellentesque
               habitant morbi tristique  Phasellus
               Lorem ipsum dolor sit amet, consectetur 
              adipiscing elit. Nunc imperdiet aliquet convallis.
            Curabitur quam orci,
              facilisis sed ultrices ut, accumsan et ex.Pellentesque
               habitant morbi tristique  Phasellus
               Lorem ipsum dolor sit amet, consectetur 
              adipiscing elit. Nunc imperdiet aliquet convallis.
            Curabitur quam orci,
              facilisis sed ultrices ut, accumsan et ex.Pellentesque
               habitant morbi tristique  Phasellus
               <br/>
               <br/>Lorem ipsum dolor sit amet, consectetur 
               adipiscing elit. Nunc imperdiet aliquet convallis.
             Curabitur quam orci,
               facilisis sed ultrices ut, accumsan et ex.Pellentesque
                habitant morbi tristique  PhasellusLorem ipsum dolor sit amet, consectetur 
                adipiscing elit. Nunc imperdiet aliquet convallis.
              Curabitur quam orci,
                facilisis sed ultrices ut, accumsan et ex.Pellentesque
                 habitant morbi tristique  Phasellus
              </p>
          </div>
        </div>
      </div>

    </div>
  </div>

  <Paper className={classes.mainFeaturedPost} style={{ backgroundImage: `url(${weTrain })` }}>
  <div className="parallax-container valign-wrapper">
    <div className="section no-pad-bot">
      <div className="containerr">
        <div className="row" id="our-value">
            <div className="col s12 m8">
                <h3>Our value</h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc imperdiet
                    aliquet convallis. Curabitur quam orci, facilisis sed ultrices ut, accumsan
                    et ex. Pellentesque habitant morbi tristique senectus et netus et malesuada
                    fames ac turpis egestas. Ut est libero,
                    tempus id augue at, sagittis dapibus felis. Phasellus  ...
                </p>
            </div>
        </div>
        <div className="row" id="our-value">
            <div className="col s12 m4">
                <img src={our_vision_img_content} alt="vision content" className="responsive-img"/>
            </div>
            <div className="col s12 m8">
                <h3>Our Vision</h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc imperdiet aliquet convallis. Curabitur quam orci, facilisis sed ultrices ut, accumsan et ex. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut est libero, tempus id augue at, sagittis dapibus felis. Phasellus  ...
                </p>
            </div>
        </div>
      </div>
    </div>
    <div className="parallax"><img src={weTrain} alt="our program"/></div>
  </div>
</Paper>
<div>
    <div className="row">
        <div className="col s12 m12">
            <div className="our-team-header"> <h5>OUR TEAM | <span> OUR PARTERNERS </span></h5> </div>
        </div>
        <div className="row members">
            <div className="col s12 m3" id="member">
                <img src={Joseph_Semafara} className="responsive-img" alt="joseph"/>
                <div>
                    <h5 className="team_member_title">Founder, CEO</h5>
                    <h4 className="team_member_name">SEMAFARANGA Joseph</h4>
                    <p>
                        content about founder,content about founder
                        content about founder ..
                    </p>
                </div>
            </div>
            <div className="col s12 m3" id="member">
                <img src={channel} className="responsive-img" alt="joseph"/>
                <div>
                    <h5 className="team_member_title">Founder, CEO</h5>
                    <h4 className="team_member_name">SEMAFARANGA Joseph</h4>
                    <p>
                        content about founder,content about founder
                        content about founder ..
                    </p>
                </div>
            </div>
            <div className="col s12 m3" id="member">
                <img src={mo} className="responsive-img" alt="joseph"/>
                <div>
                    <h5 className="team_member_title">Founder, CEO</h5>
                    <h4 className="team_member_name">SEMAFARANGA Joseph</h4>
                    <p>
                        content about founder,content about founder
                        content about founder ..
                    </p>
                </div>
            </div>
        </div>
    </div>
</div>
        </>
    );
}

export default About