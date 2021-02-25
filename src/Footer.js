import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer>
      <div className="footer-poweredBy">
        <h3>Powered By : </h3>
        <a href="https://www.themoviedb.org/" target="_blank">
          <img
            src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg"
            alt=""
          />
        </a>
      </div>
      <div className="footer-info">
        <p>
          Questions? Call&nbsp;&nbsp;
          <span>
            <a href="">000-800-040-1843</a>
          </span>
        </p>
        <div className="footer-info-parts">
          <div className="footer-info-part">
            <a href="">FAQ</a>
            <a href="">Investor Relation</a>
            <a href="">Privacy</a>
            <a href="">Speed Test</a>
          </div>
          <div className="footer-info-part">
            <a href="">Help Centre</a>
            <a href="">Jobs</a>
            <a href="">Cookie Prefrences</a>
            <a href="">Legal Notices</a>
          </div>
          <div className="footer-info-part">
            <a href="">Account</a>
            <a href="">Ways to Watch</a>
            <a href="">Corporate Information</a>
            <a href="">Netflix Originals</a>
          </div>
          <div className="footer-info-part">
            <a href="">Media Centre</a>
            <a href="">Terms of Use</a>
            <a href="">Contact Us</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
