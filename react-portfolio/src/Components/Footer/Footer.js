import React from "react";
import logo from "../../assets/logo.png";
import "./Footer.css";

function Footer() {
  return (
    <footer>
      <div class="footer-logo">
        <img src={logo} alt="logo" />
      </div>
      {/* copyright */}
      <div class="footer-copyright">
        <p>© 2024 NexCrafters all rights reserved </p>
      </div>
      {/* Social links */}
      <ul className="footer-social-media">
        <li>
          <a href="">
            <i className="fa-brands fa-facebook"></i>
          </a>
        </li>
        <li>
          <a href="">
            <i className="fa-brands fa-twitter"></i>
          </a>
        </li>
        <li>
          <a href="">
            <i className="fa-brands fa-instagram"></i>
          </a>
        </li>
        <li>
          <a href="">
            <i className="fa-brands fa-youtube"></i>
          </a>
        </li>
        <li>
          <a href="">
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
