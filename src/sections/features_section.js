import React from "react";
import styled from "styled-components";
import "./hello.css";
import camera_icon from "../assets/images/icons/camera.png";
import star_icon from "../assets/images/icons/star.png";
import video_icon from "../assets/images/icons/video.png";

export default function highlightsSection() {
  return (
    <ContainerWrapper>
      <EachItem>
        <IconWrapper>
          <img src={camera_icon} alt="" />
        </IconWrapper>
        <HeadingText>2D Graphics</HeadingText>
        <Description>
          Photo manipulations, Poster Designs, Logo Designs, Trending Graphic
          Designs, Title Designs.
        </Description>
      </EachItem>
      <EachItem>
        <IconWrapper>
          <img src={video_icon} alt="" width="70px" />
        </IconWrapper>
        <HeadingText>Video Editing</HeadingText>
        <Description>
          Editing & Color Grading, Chroma Screen Works, Roto, Paint & Prep,
          Composting.
        </Description>
      </EachItem>
      <EachItem>
        <IconWrapper>
          <img src={star_icon} alt="" width="70px" />
        </IconWrapper>
        <HeadingText>3D Graphics</HeadingText>
        <Description>
          Title Intros, Motion Posters For Films, Stylized Environments,
          Interior & Exterior - Visualisation, Concept art & Animation, Motion
          Graphics.
        </Description>
      </EachItem>
    </ContainerWrapper>
  );
}

const HeadingText = styled.h3`
  padding: 10px 0px;
  font-family: "Tajawal", sans-serif;
  color: var(--text-primary);
`;

const ContainerWrapper = styled.div`
  display: grid;
  margin: 0 auto;
  margin-top: 80px;
  grid-gap: 1.6rem;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
`;

const EachItem = styled.div`
  background: #333333;
  padding: 20px 20px;
  border-radius: 10px;
  overflow-wrap: break-word;
  flex-direction: column;
  justify-self: auto;
`;

const IconWrapper = styled.div`
  padding: 10px;
  display: flex;
  justify-content: center;
  height: 60px;
  width: 60px;
  ${"" /* border-radius: 50%; */}
  ${"" /* background: var(--text-primary); */}
`;

const Description = styled.p`
  word-wrap: break-word;
  font-size: 1rem;
  font-family: "Avenir";
  color: var(--text-secondary);
`;
