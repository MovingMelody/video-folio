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
        <HeadingText>3D Graphics</HeadingText>
        <Description>
          We have our own trained, professional & experienced technician. Which
          make you comfortable to hand over your gadget to our technician.
        </Description>
      </EachItem>
      <EachItem>
        <IconWrapper>
          <img src={video_icon} alt="" width="70px" />
        </IconWrapper>
        <HeadingText>Trusted Service</HeadingText>
        <Description>
          It provides opportunities for everyone to enjoy lowest and affordable
          price which helps save your money upto 50%. Hurry Up! Book Now
        </Description>
      </EachItem>
      <EachItem>
        <IconWrapper>
          <img src={star_icon} alt="" width="70px" />
        </IconWrapper>
        <HeadingText>Lowest & Affordable Pricing</HeadingText>
        <Description>
          We have our own trained, professional & experienced technician. Which
          make you comfortable to hand over your gadget to our technician.
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
  background: #1f2c43;
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
  font-family:"Avenir";
  color: var(--text-secondary);
`;
