import React from "react";
import "../Pages/SetUpOne.css";
import { Link } from "react-router-dom";
import NetflixLogo from "../assets/NetflixLogo.png";

function SetUpOne() {

  return (
    <div>
      <div className="SetUpOne__section">
      <div className="hero__logo__btn">
            <div className="logo__text__left">
              <Link to='/'>
                {" "}
                <img src={NetflixLogo} className="LoGo"></img>
              </Link>
            </div>
            <div className="SignIn__button">
              <button className="signUp__btn">Sign In</button>
            </div>
          </div>
        <div className="setUpOne__Section__body">
          <div className="SetUpOne__section__description">
            <h5 className="step__2">Step 1 OF 3</h5>
            <h1 className="description__3">
              Create a password to start  your membership
            </h1>
            <h4 className="description__4">
              Just a few more steps and your're done! <br />
              We hate paperwork, too. <br />
            </h4>
            <div className="user__Inputs">
              <input
                className="email__in"
                type="email"
                placeholder="Email"
              ></input>{" "}
              <br />
              <input
                className="password__in"
                type="password"
                placeholder="Add a password"
              ></input>
            </div>
            <div className="checkBox__condition">
              <input type="checkbox"></input>
              <p className="condition__agreements">
                Please do not Email me Netflix special offers.
              </p>
            </div>
           <Link to='/ChoosePlan'> <button className="next__btn_2">Next</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SetUpOne;
