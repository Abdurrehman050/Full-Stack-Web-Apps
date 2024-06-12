import React from "react";
import Typical from "react-typical";
import "./Header.css";
import profileImg from "../../assets/profileImg.png";

function Header() {
  return (
    <div class="header-container">
      {/* header content */}
      <h1>Hy! Am</h1>
      <h2 className="fullname">Abdur Rehman</h2>
      <h2>
        I'm a {""}
        <Typical
          steps={[
            "Full Stack Developer 🕸",
            1000,
            "Frontend Developer 🌐",
            1000,
            "Backend Developer 🔗",
            1000,
            "React Developer ⚛️",
            1000,
          ]}
          loop={Infinity}
          wrapper="b"
        />
      </h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi quo dicta
        omnis sint itaque nostrum eaque ab corporis quae fugit sit possimus
        odit, minus commodi. Ratione quaerat expedita molestias dolorem?
      </p>
      <div class="header-payment-container">
        <button>Hire me</button>
        <i className="fa-brands fa-paypal"></i>
        <i className="fa-brands fa-cc-visa"></i>
        <i className="fa-brands fa-cc-mastercard"></i>
        <i className="fa-brands fa-cc-amex"></i>
      </div>
      <div class="profile-img-container">
        <img src={profileImg} alt="My pic" />
        <div className="circle-1"></div>
        <div className="circle-2"></div>
      </div>
    </div>
  );
}

export default Header;
