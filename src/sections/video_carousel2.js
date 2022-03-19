import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";
import sliderOne from "../assets/images/COVER-PG.jpg";
import sliderFour from "../assets/images/Puneeth-1.png";
import sliderFive from "../assets/images/puneeth2.png";
import styled from "styled-components";
const AutoplaySlider = withAutoplay(AwesomeSlider);

export default function video_carousel2() {
  return (
    <ContainerWrapper>
      <AutoplaySlider
        animation="cubeAnimation"
        play={true}
        cancelOnInteraction={false}
        interval={6000}
      >
        <div data-src={sliderOne} />
        <div data-src={sliderFive} />
        <div data-src={sliderFour} />
      </AutoplaySlider>
    </ContainerWrapper>
  );
}

const ContainerWrapper = styled.div`
  margin-top: 120px;
  height: 100vh;
`;
