import React, { Component } from "react";
import "../Pages/SignIn.css";
import NetflixLogo from "../assets/NetflixLogo.png";
import { Link } from "react-router-dom";



const SignIn = () => {
  // constructor(props) {
  //   super(props)
  //   this.state = {value: ''};
  //   this.handleChange = this.handleChange.bind(this);
  //   this.handleSubmit = this.handleSubmit.bind(this);
  // }
  // handleChange(e){
  //   this.setState({value: e.target.value});
  // }
  // handleSubmit(e){
  //   alert("You have submitted the input successfully:" + this.state.value);
  //   e.preventDefault();
  // }

  return (
    <div>
      <div className="SignIn__Container">
        <div className="Header__Logo">
          <Link to="/">
            <img className="Logo__Text" src={NetflixLogo} />
          </Link>
        </div>

        <div className="Card">
          <div className="Card__Content">
            <h1 className="Card__Title">Sign In</h1>
            <form method="POST">
              <input
                id="details1"
                name="email"
                type="email"
                className="Email_text"
                placeholder="Enter your Email"
              ></input>
              <br />
              <input
              id="details2"
              name="password"
                type="password"
                className="password_text"
                placeholder="Enter your password"
              ></input>
              <br />
              <Link to="/SearchMovies">
                <input
                id="button2"
                  type="submit"
                  className="password__btn"
                  placeholder="Sign In"
                ></input>
              </Link>
            </form>
            <div className="conditions">
              <div className="left">
                <input type="checkbox"></input>
                <label className="form__check">Remember me</label>
              </div>
              <div className="right">
                <p className="help">Need Help?</p>
              </div>
            </div>
            <div className="Card__Content2">
              <p className="SignUp__text">New to Netflix?</p>
              <Link to="/SignUp">
                <button className="help2">SignUp Now</button>
              </Link>
            </div>
            <div className="description_text_footer">
              <page className="description">
                This page is protected by Google reCAPTCHA to ensure you're not
                a bot.
              </page>
              <p></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;





