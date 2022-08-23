import React from "react";
import "../Pages/ChoosePlan.css";
import { Link } from "react-router-dom";
import NetflixLogo from "../assets/NetflixLogo.png";
import myproject from '../assets/myproject.png'
import ticko from '../assets/ticko.png'

function ChoosePlan() {
  return (
    <div>
      <div className="choosePlan__body">
        <div className="hero__logo__btn">
          <div className="logo__text__left">
            <Link to="/">
              {" "}
              <img src={NetflixLogo} className="LoGo"></img>
            </Link>
          </div>
          <div className="SignIn__button">
            <Link to='/'><button className="signOut__btn">Sign Out</button></Link>
          </div>
        </div>
        <div className="Plan__section">
            <img className="tick__icon" src={myproject}></img>
            <h5 className="step__3">Step 2 OF 3</h5>
            <h1 className='header__plan__title'>Choose your plan.</h1>
            <div className="plan__description">
            <div className="row">
            <img className='ticko__icon' src={ticko}></img>
            <h4 className='ticko__icon__description'>No commitments, cancel <br/> anytime.</h4>
            </div>
            <div className="row">
            <img className='ticko__icon' src={ticko}></img>
            <h4 className='ticko__icon__description'>Everything on Netflix for one <br/> low price.</h4>
            </div>
            <div className="row">
            <img className='ticko__icon' src={ticko}></img>
            <h4 className='ticko__icon__description'>No ads and no extra fees. Ever.</h4>
            </div>
        <Link to='/'> <button className="next__btn_2">Next</button></Link>
            </div>
        </div>
      </div>
    </div>
  );
}

export default ChoosePlan;
