import React from "react";
import { ReactNavbar } from "overlay-navbar";
import logo from "../../images/r_logo.png";
import { FaUserAlt } from "react-icons/fa";

import "./Header.css"

const Header = () => {
  return (
    <ReactNavbar
      navColor1="#06283D"
      navColor2="#F2EBE9"
      burgerColor="#FEE2C5"
      burgerColorHover="#A5BECC"
      logo={logo}
      logoWidth="250px"
      logoHoverColor="#47B5FF"
      nav2justifyContent="space-around"
      nav3justifyContent="space-around"
      link1Text="Home"
      link2Text="About"
      link3Text="Projects"
      link4Text="Contact"
      link1Url="/"
      link2Url="/about"
      link3Url="/projects"
      link4Url="/contact"
      link1ColorHover="#47B5FF"
      link1Color="#06283D"
      link1Size="2rem"
      link1Padding="3vmax"
      profileIcon={true}
      ProfileIconElement={FaUserAlt}
      profileIconColor="#06283D"
      profileIconColorHover="#47B5FF"
    />
  );
};

export default Header;
