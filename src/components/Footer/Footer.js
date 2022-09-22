import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer>
      <span>Copyright &copy;2022</span>

      <div className="social-links">
        <a href="#!">
          <i class="fa-brands fa-facebook"></i>
        </a>
        <a href="#!">
          <i class="fa-brands fa-youtube"></i>
        </a>
        <a href="#!">
          <i class="fa-brands fa-github"></i>
        </a>
      </div>

      <a href="#!" className="footer-logo">Hoai Nam</a>
    </footer>
  )
}

export default Footer