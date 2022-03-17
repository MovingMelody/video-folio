import React from "react";
import styled from "styled-components";
import "./hello.css";
export default function highlightsSection() {
  return (
    <ContainerWrapper>
      <EachItem>
        <IconWrapper>
          <img
            src="https://cdn-icons.flaticon.com/png/512/2276/premium/2276416.png?token=exp=1647389110~hmac=6ebd5a00d61d4f263ec2dbec4ebc8acc"
            alt=""
            width="70px"
          />
        </IconWrapper>
        <HeadingText>Original & Quality Parts</HeadingText>
        <Description>
          We have our own trained, professional & experienced technician. Which
          make you comfortable to hand over your gadget to our technician.
        </Description>
      </EachItem>
      <EachItem>
        <IconWrapper>
          <img
            src="https://cdn-icons.flaticon.com/png/512/3153/premium/3153346.png?token=exp=1647389504~hmac=0285d89f2fecc0143df98ef673bef040"
            alt=""
            width="70px"
          />
        </IconWrapper>
        <HeadingText>Trusted Service</HeadingText>
        <Description>
          It provides opportunities for everyone to enjoy lowest and affordable
          price which helps save your money upto 50%. Hurry Up! Book Now
        </Description>
      </EachItem>
      <EachItem>
        <IconWrapper>
          <img
            src="https://cdn-icons-png.flaticon.com/512/6957/6957053.png"
            alt=""
            width="70px"
          />
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
  font-size: 0.9rem;
  font-family: "Poppins", sans-serif;
  color: var(--text-secondary);
`;
