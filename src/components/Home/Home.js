import React from "react";
import "./Home.css";
import Avatar from "../../assets/images/avatar.jpg";

const Home = () => {
  return (
    <section id="home">
      <div className="home-text" data-aos="fade-down">
        <strong>Hello, it's me</strong>
        <h1>Hoai Nam</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur est
          ipsum quo. Maxime placeat autem assumenda quasi.
        </p>
        <a href="#summery" className="btn-link">
          Scroll For Me
        </a>
      </div>

      <div className="home-img" data-aos="fade-up">
        <div className="img-box">
          <img src={Avatar} alt="Avatar" />

          <h2>
            Hoai Nam <br />
            <span>Front-end Developer</span>
          </h2>

          <div className="social">
            <a href="#!">
              <i className="fa-brands fa-facebook"></i>
            </a>
            <a href="#!">
              <i className="fa-brands fa-youtube"></i>
            </a>
          </div>
          <a href="#!" className="hire-me">
            Hire me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
