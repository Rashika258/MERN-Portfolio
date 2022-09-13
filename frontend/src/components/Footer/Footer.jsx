import { Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { BsGithub, BsYoutube, BsInstagram, BsLinkedin } from "react-icons/bs";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div>
        <h1>My Story</h1>
        <h3>
          Hey, my name is Rashika Suresh. I am a <span>Full Stack Web Developer</span> and <span>Freelancer</span> with proficient experience in building end to end business applications.
        </h3>

        <Link to="/contact" className="footerContactBtn">
          <Typography>Get In Touch</Typography>
        </Link>
      </div>
      <div>
        <Typography variant="h6">Let's Connect</Typography>
        <a href="https://github.com/" target="black">
          <BsGithub />
        </a>
        <a href="https://youtube.com/" target="black">
          <BsYoutube />
        </a>
        <a href="https://instagram.com/" target="black">
          <BsInstagram />
        </a>
        <a href="https://www.linkedin.com/in/" target="black">
          <BsLinkedin />
        </a>
      </div>
    </div>
  );
};

export default Footer;
