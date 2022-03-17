import React from "react";
import styled from "styled-components";
import "./hello.css";
export default function aboutSection() {
  return (
    <ContainerWrapper>
      <h1>Bharath Vikram</h1>
      <div style={{ marginTop: "14px" }}></div>

      <HeadingText>Cinematographer, Filmmaker, Storyteller</HeadingText>
      <div style={{ marginTop: "40px" }}></div>
      <Description>
        I'm a paragraph. Click here to add your own text and edit me. It’s easy.
        Just click “Edit Text” or double click me to add your own content and
        make changes to the font.
      </Description>
    </ContainerWrapper>
  );
}

const HeadingText = styled.h3`
  letter-spacing: 1px;
  font-size: 1.6rem;
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
  font-size: 1.2rem;
  max-width:700px;
  font-family: "Poppins", sans-serif;
  color: var(--text-secondary);
`;
