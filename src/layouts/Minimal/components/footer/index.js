import React from 'react';
import PropTypes from 'prop-types';




const Footer = props => {
  const { className, ...rest } = props;


  return (
    <div
      {...rest}
      className={ className}
    >
     <footer className="footer-contents">
    <div className="container" id="footerbg">
      <div className="row" id="footerbgii">
{/*      
        <div className="col l6 s12">
          <h5 className="footer-header">Company Bio</h5>
          <p className="company-bio-content">
            Lorem ipsum dolor sit amet, consectetur adipiscing
             elit. Nunc imperdiet aliquet convallis. Curabitur
            quam orci, facilisis sed ultrices ut, accumsan et ex.
            Pellentesque habitant morbi tristique senectus et netus
             et malesuada fames ac turpis egestas. Ut est libero,
              tempus id augue at, sagittis dapibus felis. Phasellus  ...
            
            </p>


        </div> */}
    
        <div className="col l3 s12">
          <h5 className="footer-header">About Us</h5>
          <ul>
            <li><a className="grey-text" href="/about">Who We Are</a></li>
            <li><a className="grey-text" href="/about">Our Value</a></li>
            <li><a className="grey-text" href="/about">Our Team</a></li>
            <li><a className="grey-text" href="/about">Our Partern</a></li>
          </ul>
        </div>
        <div className="col l3 s12">
          <h5 className="footer-header">our program</h5>
          <ul>
            <li><a className="grey-text" href="/programs">Hands On Skills</a></li>
            <li><a className="grey-text" href="/programs">Career Guidance</a></li>
            <li><a className="grey-text" href="/programs">Outsourcing</a></li>
          </ul>
        </div>
        <div className="col l3 s12">
          <h5 className="footer-header">Solvers</h5>
          <ul>
            <li><a className="grey-text" href="/solvers">Who Is Solver</a></li>
            <li><a className="grey-text" href="/sign-in">Join</a></li>
            <li><a className="grey-text" href="/hire">Hire</a></li>
          </ul>
        </div>
        <div className="col l3 s12">
          <h5 className="footer-header">Stay With Us</h5>
          <ul>
            <li><a className="grey-text" href="#!">Location</a></li>
            <li><a className="grey-text" href="#!">Contact Us</a></li>
            <li><a className="grey-text" href="#!">Our Social meadia</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div className="footer-copyright">
      <div className="container">
      Made by <a className="brown-text text-lighten-3" href=""> Lambert</a>
      </div>
    </div>
  </footer>
    </div>
  );
};

Footer.propTypes = {
  className: PropTypes.string
};

export default Footer;

