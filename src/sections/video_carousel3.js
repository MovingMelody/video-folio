import "react-awesome-slider/dist/styles.css";
import bg_video from "../assets/images/icons/videos/bg.mp4";
import styled from "styled-components";

export default function video_carousel3() {
  return (
    <ContainerWrapper>
        <VideoWrapper autoPlay loop muted id="bg_video">
          <source src={bg_video} type="video/mp4" />
        </VideoWrapper>
    </ContainerWrapper>
  );
}

const ContainerWrapper = styled.div`
  margin-top: 80px;
`;
const VideoWrapper = styled.video`
  object-fit: contain;
  width: 100vw;
  height: 100%;
`;
