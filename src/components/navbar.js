import React from "react";
import styled from "styled-components";
// import img from "../assets/images/avatar.png";

function Navbar() {
  return (
    <div style={{ overflow: "hidden" }}>
      <NavBarContainer>
        {/* <img id="logoimg" src={img} width="90" alt="" /> */}
        <Logo>
          <h3>S.</h3>
        </Logo>
        <NavItem>HOME</NavItem>
        <NavItem>PORTFOLIO</NavItem>
        <NavItem>GEAR</NavItem>
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
  font-family: "League Spartan", sans-serif;
  ${'' /* color: var(--text-primary); */}
  color: #fff;
`;

const Logo = styled.div`
  height: 40px;
  width: 40px;
  border-radius: 50px;
  background: var(--primary-color);
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  color: var(--main-color);
`;
