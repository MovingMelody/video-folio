import React from "react";
import styled from "styled-components";
import bg_watermark from "../assets/images/capture.svg";
import avatar from "../assets/images/avatar.png";
import Navbar from "../components/navbar";

export default function LandingPage() {
  return (
    <div>
      <HeroWrapper>
      <Navbar/>
        <IntroSection>
          <Avatar>
            <AvatarImg src={avatar}></AvatarImg>
          </Avatar>
          <Wrap>
            <UIText size="1.2rem" color="#8892AF" font="bold">
              Hello!
            </UIText>
            <UIText size="2.6rem" font="bold">
              I'm COOL.
            </UIText>
            <UIText color="#8892AF" size="1em">
              A Professional video grapher who captures. <br />
              Does magic with Camera.
            </UIText>
            <Cta>
              {" "}
              <UIText size="1.4rem" color="#0B192E" font="bold">
                Hire Me
              </UIText>
            </Cta>
          </Wrap>
        </IntroSection>
      </HeroWrapper>
    </div>
  );
}

const HeroWrapper = styled.section`
  height: 99.8vh;
  background: url(${bg_watermark}) no-repeat;
  background-position: left top;
  padding: 0;
  margin: 0;
  background-size: contain;
  @media screen and (max-width: 480px) {
    ${"" /* background: url(${anim}) no-repeat center center; */}
  }
`;

const Avatar = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0;
  right: 0;
`;
const AvatarImg = styled.img`
  position: relative;
  float: right;
  width: 720px;
  @media screen and (max-width: 480px) {
    width: 420px;
  }
`;

const IntroSection = styled.section`
  display: flex;
  min-height: 74vh;
  max-width: 820px;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;
const Wrap = styled.section`
  display: flex;
  align-items: start;
  flex-direction: column;
`;

const UIText = styled.div`
  font-weight: ${(props) => props.font};
  color: ${(props) => props.color};
  font-size: ${(props) => props.size};
  letter-spacing: ${(props) => props.space};
  @media screen and (max-width: 480px) {
  }
`;

const Cta = styled.div`
  width: 120px;
  height: 40px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  margin-top: 10px;
  background-color: var(--primary-color);
`;


// const NavBar = styled.nav`
// `;