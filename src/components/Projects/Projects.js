import React from 'react'
import './Projects.css'

import Ecom from '../../assets/images/ecom.png'
import Blog from '../../assets/images/blog.png'
import Next from '../../assets/images/next.png'
import Social from '../../assets/images/social.png'

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";

const Projects = () => {
  const data = [
    {
      src: Ecom,
      url: "#!"
    },
    {
      src: Blog,
      url: "#!"
    },
    {
      src: Next,
      url: "#!"
    },
    {
      src: Social,
      url: "#!"
    }
  ]
  return (
    <section id="projects">
      <div className="project-heading">
        <h3>Recent Projects</h3>
      </div>

      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
        }}
        modules={[Navigation, Pagination]}
        className="mySwiper"
      >
        {
          data.map(project => (
            <SwiperSlide key={project.id}>
              <div className="project-box">
                <a href={project.url}>
                  <img src={project.src} alt={project} />
                  <div className="p-overlayer">
                    <strong>Outserved Reports</strong>
                  </div>
                </a>
              </div>
            </SwiperSlide>
          ))
        }
      </Swiper>

      <div className="github-btn">
        <a href="#!" className="btn-link">
          My Github <i className="fa-brands fa-github"></i>
        </a>
      </div>
    </section>
  )
}

export default Projects