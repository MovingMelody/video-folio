import "react-awesome-slider/dist/styles.css";
import bg_video from "../assets/images/icons/videos/bg.mp4";
import styled from "styled-components";

export default function video_carousel3() {
  return (
    <ContainerWrapper>
      {/* <AutoplaySlider
        animation="cubeAnimation"
        play={true}
        cancelOnInteraction={false}
        interval={6000}
      >
        <div data-src={sliderOne} />
        <div data-src={sliderFive} />
        <div data-src={sliderFour} />
      </AutoplaySlider> */}

      <video autoPlay loop muted id="bg_video">
        <source src={bg_video} type="video/mp4" />
      </video>
    </ContainerWrapper>
  );
}

const ContainerWrapper = styled.div`
  margin-top: 120px;
  height: 100vh;
`;
