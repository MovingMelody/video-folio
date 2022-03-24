import React from "react";
import styled from "styled-components";
import "./hello.css";
export default function aboutSection() {
  return (
    <ContainerWrapper>
      <p
        style={{
          fontFamily: "Avenir",
          textTransform: "uppercase",
          fontSize: "30px",
          letterSpacing: "1px",
        }}
      >
        Puneeth Gowda
      </p>
      <div style={{ marginTop: "24px" }}></div>
      <HeadingText>
        Professional Film Editor & Visual Effects Artist
      </HeadingText>
      <div style={{ marginTop: "8px" }}></div>
      <Description>
        Creating Stunning Graphics & Visuals in 2D & 3D
      </Description>
    </ContainerWrapper>
  );
}

const HeadingText = styled.h3`
  letter-spacing: 1px;
  font-size: 1.4rem;
  font-family: "League Spartan", sans-serif;
  color: var(--text-primary);
`;

const ContainerWrapper = styled.div`
  ${"" /* display: grid; */}
  ${"" /* margin: 0 auto; */}
  margin-top: 120px;
  ${"" /* grid-gap: 1.6rem; */}
  ${"" /* grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); */}
`;

// const EachItem = styled.div`
//   background: #1f2c43;
//   padding: 20px 20px;
//   border-radius: 10px;
//   overflow-wrap: break-word;
//   flex-direction: column;
//   justify-self: auto;
// `;

// const IconWrapper = styled.div`
//   padding: 10px;
//   display: flex;
//   justify-content: center;
//   height: 60px;
//   width: 60px;
//   ${"" /* border-radius: 50%; */}
//   ${"" /* background: var(--text-primary); */}
// `;

const Description = styled.p`
  word-wrap: break-word;
  font-size: 1.2rem;
  max-width: 700px;
  font-family: "Poppins", sans-serif;
  color: var(--text-secondary);
`;
