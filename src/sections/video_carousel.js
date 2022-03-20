import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";
import sliderOne from "../assets/images/COVER-PG.jpg";
import sliderTwo from "../assets/images/pg4.jpg";
import sliderThree from "../assets/images/pg5.jpg";
// import sliderFour from "../assets/images/Puneeth-1.png";
// import sliderFive from "../assets/images/puneeth2.png";
import styled from "styled-components";
const AutoplaySlider = withAutoplay(AwesomeSlider);

export default function video_carousel() {
  return (
    <ContainerWrapper>
      <AutoplaySlider
        animation="cubeAnimation"
        play={true}
        bullets={false}
        cancelOnInteraction={false}
        interval={6000}
      >
        <div data-src={sliderOne} />
        <div data-src={sliderTwo} />
        {/* <div data-src={sliderFour} /> */}
        {/* <div data-src={sliderFive} /> */}
        <div data-src={sliderThree} />
      </AutoplaySlider>
    </ContainerWrapper>
  );
}

const ContainerWrapper = styled.div`
  margin-top: 120px;
  ${'' /* height: 100vh; */}
`;
