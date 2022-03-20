import React from "react";
import styled from "styled-components";
import img from "../assets/images/logo.png";

function Navbar() {
  return (
    <div style={{ overflow: "hidden" }}>
      <NavBarContainer>
        <Logo>
        <img id="logoimg" src={img} width="50" alt="" />
          {/* <h3>S.</h3> */}
        </Logo>
        <NavItem>HOME</NavItem>
        <NavItem>PORTFOLIO</NavItem>
        {/* <NavItem>GEAR</NavItem> */}
        <NavItem>CONTACT</NavItem>
      </NavBarContainer>
    </div>
  );
}

export default Navbar;
const NavBarContainer = styled.div`
  display: flex;
  ${'' /* max-width: 92vw; */}
  padding-left:40px;
  margin: 0 auto;
  ${'' /* background-color:#8892AF; */}
  padding-top: 20px;
  padding-bottom: 20px;
  align-items: center;
`;

const NavItem = styled.h3`
  margin-left: 20px;
  letter-spacing:1px;
  font-family:"Avenir";
  ${'' /* color: var(--text-primary); */}
  color: #fff;
`;

const Logo = styled.div`
  height: 40px;
  width: 40px;
  border-radius: 100px;
  background: var(--primary-color);
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  color: var(--main-color);
`;
