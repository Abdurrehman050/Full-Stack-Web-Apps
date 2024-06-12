import React from "react";
import "./Services.css";

function Services() {
  return (
    <div class="services-container">
      <div class="services-list-container">
        {/* description */}
        <div class="services-desc-container">
          <h1>
            My Awesome <span>Services</span>
          </h1>
          <p>
            This is for githubs ipsum dolor sit amet consectetur, adipisicing elit. Fugiat,
            sit ut, veniam nisi delectus ullam quisquam vel, culpa amet facilis
            non inventore earum similique molestias aut vero? Quidem, quos
            corrupti?Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit velit libero quidem illum, mollitia omnis accusamus
            recusandae consectetur natus provident? Dolorem corporis sit soluta
            atque temporibus natus ad sequi iusto.
          </p>
          <button>Hire Me</button>
        </div>
        {/* item */}
        <div class="service-item-container">
          <div class="services-item">
            <i className="fa-solid fa-code"></i>
            <div class="item-desc">
              <h3>Web Development</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Similique unde ipsum aperiam excepturi quaerat ducimus, iste
                accusamus nam vero necessitatibus possimus ab ad veniam nobis
                reiciendis dignissimos corporis repellat sequi.
              </p>
            </div>
          </div>
          <div class="services-item">
            <i className="fa-solid fa-desktop"></i>
            <div class="item-desc">
              <h3>Desktop Development</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Similique unde ipsum aperiam excepturi quaerat ducimus, iste
                accusamus nam vero necessitatibus possimus ab ad veniam nobis
                reiciendis dignissimos corporis repellat sequi.
              </p>
            </div>
          </div>
          <div class="services-item">
            <i className="fa-solid fa-tablet-alt"></i>
            <div class="item-desc">
              <h3>UI/UX Design</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Similique unde ipsum aperiam excepturi quaerat ducimus, iste
                accusamus nam vero necessitatibus possimus ab ad veniam nobis
                reiciendis dignissimos corporis repellat sequi.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
