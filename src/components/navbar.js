import React from "react";
import styled from "styled-components";
// import img from "../assets/images/avatar.png";

function Navbar() {
  return (
    <div style={{ overflow: "hidden" }}>
      <NavBarContainer>
        {/* <img id="logoimg" src={img} width="90" alt="" /> */}
        <Logo>
          <h2>S.</h2>
        </Logo>
        <NavItem>HOME</NavItem>
        <NavItem>PORTFOLIO</NavItem>
      </NavBarContainer>
    </div>
  );
}

export default Navbar;
const NavBarContainer = styled.div`
  display: flex;
  max-width: 92vw;
  margin: 0 auto;
  padding-top: 20px;
  align-items: center;
`;

const NavItem = styled.h3`
  margin-left: 18px;
  font-family: "IBM Plex Mono", monospace;
  color: var(--text-primary);
`;

const Logo = styled.div`
  height: 50px;
  width: 50px;
  border-radius: 50px;
  background: var(--primary-color);
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  color: var(--main-color);
`;
