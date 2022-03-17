import Plyr from "plyr-react";
import "plyr-react/dist/plyr.css";
import Modal, {
  ModalSection,
  ModalHeader,
} from "@kiwicom/orbit-components/lib/Modal";
import styled from "styled-components";
import React, { useState, useEffect } from "react";

import { fetchVideos } from "../services/fetchdata.service";

export default function VideoGallery() {
  // data format
  // const videoSrc = [
  //   {
  //     type: "video",
  //     sources: [
  //       {
  //         src: "yWtFb9LJs3o",
  //         provider: "youtube",
  //       },
  //     ],
  //   },
  //   {
  //     type: "video",
  //     sources: [
  //       {
  //         src: "rtASDs1pWeY",
  //         provider: "youtube",
  //       },
  //     ],
  //   },
  // ];

  const [showModal, setShowModal] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [videoData, setVideoData] = useState([]);
  const [loading, setLoading] = useState(true);

  const populateDocs = (docs) => {
    if (docs === undefined) return setLoading(false);
    let data = [];
    docs.forEach((doc) => {
      data.push({ ...doc.data(), ref: doc.ref });
    });
    setVideoData(() => [...data]);
    console.log(videoData);
    setLoading(false);
  };

  // fetch videos on page init
  const getVideos = async () => {
    setLoading(true);
    await fetchVideos().then((result) => {
      populateDocs(result);
    }, setLoading(false));
  };
  
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => getVideos(), []);

  return (
    <div>
      {loading && (
        <div>
          <Header>Loading...</Header>
        </div>
      )}
      {!loading && (
        <div>
          {showModal && (
            <Modal
              disableAnimation={false}
              size="large"
              fixedFooter={false}
              onClose={() => {
                setShowModal(false);
              }}
            >
              <ModalHeader title={videoData[currentIndex].title} />
              <ModalSection>
                <Plyr source={videoData[currentIndex]} autoPlay={true} />
              </ModalSection>
            </Modal>
          )}
          <Header>Video Work</Header>
          <ServiesWrapper>
            {videoData.map((eachVideo) => {
              return (
                <ItemWrapper
                  key={eachVideo.type}
                  onClick={() => {
                    setCurrentIndex(videoData.indexOf(eachVideo));
                    setShowModal(true);
                  }}
                >
                  <EachItem
                    src={`https://img.youtube.com/vi/${eachVideo.sources[0].src}/mqdefault.jpg`}
                  ></EachItem>
                </ItemWrapper>
              );
            })}
          </ServiesWrapper>
        </div>
      )}
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

const EachItem = styled.img`
  background: var(--text-primary);
  border-radius: 6px;
  height: 100%;
  margin: 0 14px;
  width: 94%;
  height: 260px;
  background-size: contain;
  transition: transform 0.5s ease;
  ${"" /* padding: 4px; */}
  &:hover {
    transform: scale(1.1);
  }
`;

const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  overflow: hidden;
  border-radius: 6px;
`;

const Header = styled.h2`
  display: flex;
  font-size: 2.6rem;
  text-align: center;
  padding: 100px 0px 12px 0px;
  justify-content: center;
  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;
