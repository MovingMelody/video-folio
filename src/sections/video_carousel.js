import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";
import bg_watermark from "../assets/images/temp.jpeg";
import bg2 from "../assets/images/temp.jpeg";
import styled from "styled-components";
// import AwesomeSliderStyles from 'react-awesome-slider/src/styled/scale-out-animation.scss';
const AutoplaySlider = withAutoplay(AwesomeSlider);

export default function video_carousel() {
  return (
    <ContainerWrapper>
      <AutoplaySlider
    //   cssModule={AwesomeSliderStyles}
        animation="cubeAnimation"
        play={true}
        cancelOnInteraction={false}
        interval={6000}
      >
        <div data-src={bg_watermark} />
        <div data-src={bg2} />
      </AutoplaySlider>
    </ContainerWrapper>
  );
}

const ContainerWrapper = styled.div`
  margin-top: 120px;
  height: 100vh;
`;
