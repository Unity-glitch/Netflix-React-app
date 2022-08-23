import React from "react";
import "./Home.css";
import NetflixLogo from "../assets/NetflixLogo.png";
import mobilePicture from "../assets/mobile-0819.jpg";
import boxShot from "../assets/boxshot.png";
// import arrowl from '../assets/arrowl.png';
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <div className="container">
        <div className="header">
          <div className="header__Logo">
            <Link to="/">
              <img src={NetflixLogo} className="Logo__Text"></img>
            </Link>
          </div>
          <div className="login__Bbtn">
            <Link to="/SignIn">
              <button className="Login__Button">Sign In</button>
            </Link>
          </div>
        </div>
        <div className="hero">
          <div className="hero__Content">
            <h1 className="hero__Title">
              Unlimited movies, TV shows, and more.
            </h1>
            <p className="hero__Description1">
              Watch anywhere, Cancel anytime.
            </p>
            <p className="hero__Description2">
              Ready to Watch? Enter your email to create or restart your
              membership.{" "}
            </p>
          </div>
          <div className="hero__input_email">
            <input
              type="email"
              className="Hero__Input"
              placeholder="Your email"
            />
            <Link to="/SignUp">
              <input type="submit" className="email__btn" value="Get Started" />
            </Link>
            {/* <img classNames="right__arrow__icon" src={arrowl}></img> */}
          </div>
        </div>
      </div>
      <div className="container2">
        <div className="section__left">
          <h1 className="section__header__left">Enjoy on your TV.</h1>
          <p className="section__description__left">
            Watch on smart TV's, Platform , Xbox, Chromecast, Apple <br /> TV,
            Blu-ray players, and more.
          </p>
        </div>
        <div className="section__right2">
          <div clas="tv__frame">
            <img
              className="gif__video_1"
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
            ></img>
          </div>
          <div className="video_gif">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="Netflix__video__gif"
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v"
            ></video>
          </div>
        </div>
      </div>
      <div className="container3">
        <div className="left__video">
          <div class="first__image__left">
            <img src={mobilePicture} className="phone__image__left"></img>
          </div>
          <div className="small__phone__image">
            <div className="phone__image">
              <img src={boxShot} className="small__phone__image__left"></img>
              <div className="Phone__image__style">
                <div className="movie__description">
                  <h3 className="movie__title">Stranger Things</h3>
                  <h3 className="movie_downloading">Downloading...</h3>
                </div>
                <div clas="loading__round">
                  <img
                    className="loading__round__image"
                    src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/download-icon.gif"
                  ></img>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section__right">
          <h1 className="section__header__right">
            Download your shows <br /> to watch offline
          </h1>
          <p className="section__description__right">
            Save your favourites easily and always have <br /> something to
            watch.
          </p>
        </div>
      </div>
      <div className="container4">
        <div className="section__left2">
          <h1 className="section__header__left2">Watch everywhere.</h1>
          <p className="section__description__left2">
            Stream unlimited movies and TV shows on <br /> your phone, tablet,
            laptop and TV.
          </p>
        </div>
      </div>
      <div className="container5">
        <div className="section__left3">
          <img
            className="kids__image"
            src="https://occ-0-5543-1490.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABfpnX3dbgjZ-Je8Ax3xn0kXehZm_5L6-xe6YSTq_ucht9TI5jwDMqusWZKNYT8DfGudD0_wWVVTFLiN2_kaQJumz2iivUWbIbAtF.png?r=11f"
          ></img>
        </div>
        <div className="section__right__2">
          <h1 className="section__header__right__2">
            Create progiles for kids.
          </h1>
          <p className="section__description__right">
            Send kids on adventures with thier favourite <br /> characters in a
            space made just for them <br /> free with your membership.
          </p>
        </div>
      </div>
      <div className="container6">
        <div className="FAQ">
          <h2 className="faq">Frequently Asked Questions</h2>

          <button className="accordion">
            What is Netflix?
            {/* <svg id="thin-x" viewBox="0 0 26 26" class="svg-icon svg-icon-thin-x svg-closed" focusable="true"><path d="M10.5 9.3L1.8 0.5 0.5 1.8 9.3 10.5 0.5 19.3 1.8 20.5 10.5 11.8 19.3 20.5 20.5 19.3 11.8 10.5 20.5 1.8 19.3 0.5 10.5 9.3Z"></path></svg> */}
          </button>
          <div className="panel">
            <p>
              Netflix is a streaming service that offers a wide variety of
              award-winning TV shows, movies, anime, documentaries, and more on
              thousands of internet-connected devices.
            </p>
            <p>
              You can watch as much as you want, whenever you want without a
              single commercial – all for one low monthly price. There's always
              something new to discover and new TV shows and movies are added
              every week!
            </p>
          </div>
          <button className="accordion">How much does Netflix cost?</button>
          <div className="panel">
            <p>
              Watch Netflix on your smartphone, tablet, Smart TV, laptop, or
              streaming device, all for one fixed monthly fee. Plans range from
              ₦1,200 to ₦4,400 a month. No extra costs, no contracts.
            </p>
          </div>
          <button className="accordion">Where can i watch?</button>
          <div className="panel">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <button className="accordion">How do i cancel?</button>
          <div className="panel">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <button className="accordion">What can i watch on Netflix?</button>
          <div className="panel">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <button className="accordion">is Netflix good for kids?</button>
          <div className="panel">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
        {/* <form class="cta-form email-form" data-uia="email-form" method="GET"><h3 class="email-form-title">Ready to watch? Enter your email to create or restart your membership.</h3><div class="email-form-lockup"><ul class="simpleForm structural ui-grid"><li data-uia="field-email+wrapper" class="nfFormSpace field-email"><div data-uia="field-email+container" class="nfInput nfInputResponsive"><div class="nfInputPlacement"><label class="input_id" placeholder="email"><input type="email" data-uia="field-email" name="email" class="nfTextField" id="id_email_faq" value="" tabindex="0" autocomplete="email" maxlength="50" minlength="5" dir=""><label for="id_email_faq" class="placeLabel">Email address</label></label></div></div></li></ul><div class="our-story-cta-container cta-link-wrapper"><button class="btn btn-red nmhp-cta nmhp-cta-extra-large btn-none btn-custom" type="submit" autocomplete="off" tabindex="0" role="link" data-uia="our-story-cta-faq"><span id="" class="cta-btn-txt" data-uia="">Get Started</span><span id="" class="chevron-right-arrow" data-uia=""><svg viewBox="0 0 6 12" xmlns="http://www.w3.org/2000/svg"><desc>chevron</desc><path d="M.61 1.312l.78-.624L5.64 6l-4.25 5.312-.78-.624L4.36 6z" fill="none" fill-rule="evenodd"></path></svg></span></button></div></div></form> */}
      </div>
      <div className="Footer">
        <div class="site-footer-wrapper centered dark">
          <div class="footer-divider"></div>
          <div class="site-footer">
            <p class="footer-top">
              <a class="footer-top-a" href="https://help.netflix.com/contactus">
                Questions? Contact us.
              </a>
            </p>
            <ul class="footer-links structural">
              <li
                class="footer-link-item"
                placeholder="footer_responsive_link_faq_item"
              >
                <a
                  class="footer-link"
                  data-uia="footer-link"
                  href="https://help.netflix.com/support/412"
                  placeholder="footer_responsive_link_faq"
                >
                  <span id="" data-uia="data-uia-footer-label">
                    FAQ
                  </span>
                </a>
              </li>
              <li
                class="footer-link-item"
                placeholder="footer_responsive_link_help_item"
              >
                <a
                  class="footer-link"
                  data-uia="footer-link"
                  href="https://help.netflix.com"
                  placeholder="footer_responsive_link_help"
                >
                  <span id="" data-uia="data-uia-footer-label">
                    Help Center
                  </span>
                </a>
              </li>
              <li
                class="footer-link-item"
                placeholder="footer_responsive_link_account_item"
              >
                <a
                  class="footer-link"
                  data-uia="footer-link"
                  href="/youraccount"
                  placeholder="footer_responsive_link_account"
                >
                  <span id="" data-uia="data-uia-footer-label">
                    Account
                  </span>
                </a>
              </li>
              <li
                class="footer-link-item"
                placeholder="footer_responsive_link_media_center_item"
              >
                <a
                  class="footer-link"
                  data-uia="footer-link"
                  href="https://media.netflix.com/"
                  placeholder="footer_responsive_link_media_center"
                >
                  <span id="" data-uia="data-uia-footer-label">
                    Media Center
                  </span>
                </a>
              </li>
              <li
                class="footer-link-item"
                placeholder="footer_responsive_link_relations_item"
              >
                <a
                  class="footer-link"
                  data-uia="footer-link"
                  href="http://ir.netflix.com/"
                  placeholder="footer_responsive_link_relations"
                >
                  <span id="" data-uia="data-uia-footer-label">
                    Investor Relations
                  </span>
                </a>
              </li>
              <li
                class="footer-link-item"
                placeholder="footer_responsive_link_jobs_item"
              >
                <a
                  class="footer-link"
                  data-uia="footer-link"
                  href="https://jobs.netflix.com/jobs"
                  placeholder="footer_responsive_link_jobs"
                >
                  <span id="" data-uia="data-uia-footer-label">
                    Jobs
                  </span>
                </a>
              </li>
              <li
                class="footer-link-item"
                placeholder="footer_responsive_link_waysToWatch_item"
              >
                <a
                  class="footer-link"
                  data-uia="footer-link"
                  href="/watch"
                  placeholder="footer_responsive_link_waysToWatch"
                >
                  <span id="" data-uia="data-uia-footer-label">
                    Ways to Watch
                  </span>
                </a>
              </li>
              <li
                class="footer-link-item"
                placeholder="footer_responsive_link_terms_item"
              >
                <a
                  class="footer-link"
                  data-uia="footer-link"
                  href="https://help.netflix.com/legal/termsofuse"
                  placeholder="footer_responsive_link_terms"
                >
                  <span id="" data-uia="data-uia-footer-label">
                    Terms of Use
                  </span>
                </a>
              </li>
              <li
                class="footer-link-item"
                placeholder="footer_responsive_link_privacy_separate_link_item"
              >
                <a
                  class="footer-link"
                  data-uia="footer-link"
                  href="https://help.netflix.com/legal/privacy"
                  placeholder="footer_responsive_link_privacy_separate_link"
                >
                  <span id="" data-uia="data-uia-footer-label">
                    Privacy
                  </span>
                </a>
              </li>
              <li
                class="footer-link-item"
                placeholder="footer_responsive_link_cookies_separate_link_item"
              >
                <a
                  class="footer-link"
                  data-uia="footer-link"
                  href="#"
                  placeholder="footer_responsive_link_cookies_separate_link"
                >
                  <span id="" data-uia="data-uia-footer-label">
                    Cookie Preferences
                  </span>
                </a>
              </li>
              <li
                class="footer-link-item"
                placeholder="footer_responsive_link_corporate_information_item"
              >
                <a
                  class="footer-link"
                  data-uia="footer-link"
                  href="https://help.netflix.com/legal/corpinfo"
                  placeholder="footer_responsive_link_corporate_information"
                >
                  <span id="" data-uia="data-uia-footer-label">
                    Corporate Information
                  </span>
                </a>
              </li>
              <li
                class="footer-link-item"
                placeholder="footer_responsive_link_contact_us_item"
              >
                <a
                  class="footer-link"
                  data-uia="footer-link"
                  href="https://help.netflix.com/contactus"
                  placeholder="footer_responsive_link_contact_us"
                >
                  <span id="" data-uia="data-uia-footer-label">
                    Contact Us
                  </span>
                </a>
              </li>
              <li
                class="footer-link-item"
                placeholder="footer_responsive_link_speed_test_item"
              >
                <a
                  class="footer-link"
                  data-uia="footer-link"
                  href="https://fast.com"
                  placeholder="footer_responsive_link_speed_test"
                >
                  <span id="" data-uia="data-uia-footer-label">
                    Speed Test
                  </span>
                </a>
              </li>
              <li
                class="footer-link-item"
                placeholder="footer_responsive_link_legal_notices_item"
              >
                <a
                  class="footer-link"
                  data-uia="footer-link"
                  href="https://help.netflix.com/legal/notices"
                  placeholder="footer_responsive_link_legal_notices"
                >
                  <span id="" data-uia="data-uia-footer-label">
                    Legal Notices
                  </span>
                </a>
              </li>
              <li
                class="footer-link-item originals-link"
                placeholder="footer_responsive_link_only_on_netflix_item"
              >
                <a
                  class="footer-link"
                  data-uia="footer-link"
                  href="https://www.netflix.com/ng/browse/genre/839338"
                  placeholder="footer_responsive_link_only_on_netflix"
                >
                  <span id="" data-uia="data-uia-footer-label">
                    Only on Netflix
                  </span>
                </a>
              </li>
            </ul>
            <p class="footer-country">Netflix Nigeria</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}
