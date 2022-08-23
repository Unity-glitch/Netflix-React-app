import React from "react";
import "../Pages/SignUp1.css";
import NetflixLogo from "../assets/NetflixLogo.png";
import comp from "../assets/comp.png";
import { Link } from "react-router-dom";

function SignUp() {
  return (
    <div>
      <div className="signUp__body">
      <div className="hero__logo__btn">
            <div className="logo__text__left">
              <Link to="/"><img src={NetflixLogo} className="LoGo"></img></Link>
            </div>
            <div className="SignIn__button">
              <Link to='/SignIn'><button className="signUp__btn">Sign In</button></Link>
            </div>
        </div>
        <div className="signUp__setup__1">
          <div className="SignUp__Description">
            <img className="tv__image" src={comp}></img>
            <h5 className="step__1">Step 1 OF 3</h5>
            <h1 className="description__1">
              Finish setting up your <br /> account
            </h1>
            <h4 className="description__2">
              Netflix is personalized for you. <br />
              Create a password to watch on any <br /> device at any time.
            </h4>
          <Link to="/SetUpOne"><button className="next__btn__2">Next</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
