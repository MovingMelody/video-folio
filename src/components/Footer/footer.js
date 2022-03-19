import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faTwitter,
  faWhatsapp,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import {
  faMobileAlt,
  faHome,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
export default function Footer() {
  return (
    <div>
      <FooterWrapper>
        <LinksCategoryWrapper>
          <LinksCategoryHeader style={{ fontSize: "2rem" }}>
            Puneeth Gowda
          </LinksCategoryHeader>
          <EachLinkItem style={{ lineHeight: "1.5rem" }}>
            <p style={{ textTransform: "capitalize" }}>
              I'm a paragraph. Click here to add
              <br />
              your own text and edit me.
              <br />
            </p>
          </EachLinkItem>
          <EachLinkItem>
            <SocialMedia>
              <div style={{ paddingRight: "8px" }}>
                <a
                  href="https://www.instagram.com/itsmepuneethgowda/"
                  style={{ color: "#ccd6f6" }}
                >
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
              </div>
              <div style={{ padding: "8px" }}>
                <a
                  href="https://api.whatsapp.com/send?phone=+918660918790"
                  style={{ color: "#ccd6f6" }}
                >
                  <FontAwesomeIcon icon={faWhatsapp} />
                </a>
              </div>
              <div style={{ padding: "8px" }}>
                <a
                  href="https://www.instagram.com/itsmepuneethgowda/"
                  style={{ color: "#ccd6f6" }}
                >
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
              </div>
              <div style={{ padding: "8px" }}>
                <a
                  href="https://www.youtube.com/channel/UCm6evfTAb9lSgdbpH3QQkPg/featured"
                  style={{ color: "#ccd6f6" }}
                >
                  <FontAwesomeIcon icon={faYoutube} />
                </a>
              </div>
            </SocialMedia>
          </EachLinkItem>
        </LinksCategoryWrapper>
        <LinksCategoryWrapper></LinksCategoryWrapper>
        <LinksCategoryWrapper></LinksCategoryWrapper>

        <LinksCategoryWrapper>
          <LinksCategoryHeader>Contact Us</LinksCategoryHeader>
          <EachLinkItem>
            <FontAwesomeIcon icon={faMobileAlt} color="#ffaa19" />
            <p style={{ marginLeft: "8px" }}> +91 86609 18790</p>
          </EachLinkItem>
          <EachLinkItem>
            <FontAwesomeIcon icon={faEnvelope} color="#ffaa19" />
            <p style={{ marginLeft: "8px", textTransform: "lowercase" }}>
              {" "}
              artist@puneethgowda.com
            </p>
          </EachLinkItem>
          <EachLinkItem>
            <FontAwesomeIcon icon={faHome} color="#ffaa19" />
            <p style={{ marginLeft: "8px", textTransform: "lowercase" }}>
              Your address here
            </p>
          </EachLinkItem>
        </LinksCategoryWrapper>
      </FooterWrapper>
      <CopyRights>
        <p>
          Copyright © Puneeth Gowda {new Date().getFullYear()}. All Rights
          Reserved.
        </p>
      </CopyRights>
    </div>
  );
}

const FooterWrapper = styled.div`
  margin: 0 auto;
  background: var(--main-color);
  padding: 60px 0px;
  font-family: "Poppins", sans-serif;
  display: grid;
  padding-left: 50px;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  @media screen and (max-width: 480px) {
    padding-left: 30px;
    margin-bottom: -28px;
  }
`;

const LinksCategoryWrapper = styled.div`
  @media screen and (max-width: 480px) {
    margin-bottom: 30px;
  }
`;

const EachLinkItem = styled.div`
  line-height: 2.3rem;
  display: flex;
  font-size: 0.95rem;
  font-weight: 300;
  align-items: center;
  text-transform: uppercase;
  color: #b1c0f1;
  color: #ccd6f6;
`;

const LinksCategoryHeader = styled.h2`
  color: var(--brand-color);
  /* color: #ccd6f6; */
  margin-bottom: 10px;
  font-family: "Tajawal", sans-serif;
`;

const CopyRights = styled.div`
  border-top: 1px solid #ccd6f62f;
  width: 100%;
  color: #ccd6f6;
  padding: 16px 0px;
  background: var(--main-color);
  font-size: 1rem;
  text-align: center;
  font-family: "Poppins", sans-serif;
  @media screen and (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

const SocialMedia = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1.2rem;
`;
