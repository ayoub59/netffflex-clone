import React from "react";
import styled from "styled-components";
import { useEffect, useState } from "react";
import "./App.css";
import Youtube from "react-youtube";
function NAvBar() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);
  return (
    <Container className={`nav ${show && "app"}`}>
      <Logo
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png"
        alt="Netflix Logo"
      ></Logo>
      <User
        src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png"
        alt="Avatar"
      ></User>
    </Container>
  );
}
const Container = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  z-index: 1;
  justify-content: space-between;
  /* Animations */
  transition-timing-function: ease-in;
  transition: all 0.8s;
`;
const Logo = styled.img`
  left: 20px;
  padding: 20px;
  height: 40px;
  object-fit: contain;
`;
const User = styled.img`
  right: 20px;
  padding: 20px;
  height: 40px;
  object-fit: contain;
`;
export default NAvBar;
