import Plyr from "plyr-react";
import "plyr-react/dist/plyr.css";
import Modal, {
  ModalSection,
  ModalHeader,
} from "@kiwicom/orbit-components/lib/Modal";
import styled from "styled-components";

import { useState } from "react";
export default function VideoGallery() {
  const videoSrc = [
    {
      type: "video",
      sources: [
        {
          src: "yWtFb9LJs3o",
          provider: "youtube",
        },
      ],
    },
    {
      type: "video",
      sources: [
        {
          src: "rtASDs1pWeY",
          provider: "youtube",
        },
      ],
    },
    {
      type: "video",
      sources: [
        {
          src: "rtASDs1pWeY",
          provider: "youtube",
        },
      ],
    },
    {
      type: "video",
      sources: [
        {
          src: "rtASDs1pWeY",
          provider: "youtube",
        },
      ],
    },
    {
      type: "video",
      sources: [
        {
          src: "rtASDs1pWeY",
          provider: "youtube",
        },
      ],
    },
  ];
  const [showModal, setShowModal] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <div>
      {showModal && (
        <Modal
          disableAnimation={true}
          size="large"
          onClose={() => {
            setShowModal(false);
          }}
        >
          <ModalHeader title="Awesome Video" />
          <ModalSection>
            <Plyr source={videoSrc[currentIndex]} autoPlay={true} />
          </ModalSection>
        </Modal>
      )}
      <Header>Video Work</Header>
      <ServiesWrapper>
        {videoSrc.map((eachService) => {
          return (
            <ItemWrapper
              key={eachService.serviceName}
              onClick={() => {
                setCurrentIndex(videoSrc.indexOf(eachService));
                setShowModal(true);
              }}
            >
              <EachItem></EachItem>
            </ItemWrapper>
          );
        })}
      </ServiesWrapper>
    </div>
  );
}

const ServiesWrapper = styled.div`
  display: grid;
  grid-gap: 8px;
  margin: 0 auto;
  grid-gap: 2em;
  max-width: 900px;
  margin-top: 40px;
  justify-content: center;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
`;

const EachItem = styled.div`
  background: white;
  border-radius: 6px;
  background: url("https://image.freepik.com/free-vector/flat-geometric-background_23-2148941302.jpg")
    no-repeat;
  height: 100%;
  opacity: 0.8;
  margin: 0 14px;
  width: 94%;
  height: 260px;
  background-size: cover;
  padding: 36px 26px;
`;

const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Header = styled.h2`
  display: flex;
  font-size: 2.6rem;
  text-align: center;
  padding: 100px 0px 12px 0px;
  color: #ffffff;
  justify-content: center;
  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;
