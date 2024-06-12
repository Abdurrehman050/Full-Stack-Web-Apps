import React from "react";
import sample from "../../assets/sample.jpg";
import "./Work.css";
function Works() {
  return (
    <div class="works-container">
      <h1>My Recent Works</h1>
      <div class="works-list-container">
        <div class="works-item">
          <img src={sample} alt="my work" />
        </div>
        <div class="works-item">
          <img src={sample} alt="my work" />
        </div>
        <div class="works-item">
          <img src={sample} alt="my work" />
        </div>
        <div class="works-item">
          <img src={sample} alt="my work" />
        </div>
        <div class="works-item">
          <img src={sample} alt="my work" />
        </div>
        <div class="works-item">
          <img src={sample} alt="my work" />
        </div>
      </div>
    </div>
  );
}

export default Works;
