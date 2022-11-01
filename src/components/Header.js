import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";
import imag from "../images/header-background.png";
import illustration from "../images/man.png";

function Header() {
  return (
    <Container>
      <Img src={imag} />
      <CTA>
        <span></span>Connect Stripe and Crisp in a breeze
      </CTA>
      <Wrapper>
        <ContentInfos>
          <Fade bottom cascade>
            <Infos>
              <Title>
                Rendez votre <span>relation client</span> plus humaine avec
                Crisp
              </Title>
              <Description>
                La plateforme de messagerie multicanal qui met les entreprises
                en lien avec leurs clients
              </Description>
              <ButtonCTA>Utiliser Crisp gratuitement</ButtonCTA>
              <SmallDescription>
                14 jours d'essai gratuit - Aucune carte de crédit requise
              </SmallDescription>
            </Infos>
          </Fade>
          <Block />
        </ContentInfos>
        <Illustration src={illustration} />
      </Wrapper>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  position: relative;
  background-color: #f8fbff;
  width: 100vw;
  height: 100vh;
  /* margin-bottom: 60px; */
  @media (min-width: 940px) {
    /* margin-bottom: 20px; */
  }
`;

const Img = styled.img`
  position: absolute;
  object-fit: cover;
  width: 100vw;
  height: 100vh;
  @media (min-width: 940px) {
    height: 95vh;
  }
`;

const CTA = styled.button`
  position: absolute;
  font-size: 15px;
  top: 12%;
  border: none;
  height: 50px;
  margin: auto;
  width: 100%;
  background-color: #002650;
  color: white;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }

  @media (min-width: 769px) {
    top: 12%;
  }

  span {
    color: #002650;
    &::before {
      content: "NEW";
      background-color: white;
      padding: 3px 10px;
      border-radius: 10px;
      font-weight: 500;
      margin-right: 10px;
    }
  }

  @media (min-width: 940px) {
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    width: 400px;
    border-radius: 5px;
  }
`;

const Wrapper = styled.div`
  position: relative;
  top: 20%;
  margin: auto;
  max-width: 1200px;
  width: 90%;
  text-align: center;
  @media (min-width: 940px) {
    top: 25%;
  }
`;

const ContentInfos = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 940px) {
    flex-direction: row;
    align-items: none;
  }
`;
const Infos = styled.div`
  z-index: 3;
  text-align: center;
  @media (min-width: 940px) {
    text-align: left;
    max-width: 560px;
  }
`;
const Title = styled.h1`
  position: relative;
  color: #101010;
  font-size: 36px;
  font-weight: 600;
  line-height: 49px;
  margin-top: 10px;
  margin-bottom: 30px;
  min-width: 495px;
  span::before {
    position: absolute;
    content: "";
    background-color: #62a9ff;
    width: 245px;
    height: 5px;
    top: 43px;

    @media (min-width: 940px) {
      width: 280px;
    }
  }
  @media (min-width: 940px) {
    font-size: 41px;
  }
`;
const Description = styled.p`
  font-size: 16px;
  color: rgba(0, 0, 0, 0.5);
  padding: 0 10px;
  margin-bottom: 30px;
`;
const ButtonCTA = styled.button`
  width: 100%;
  border: none;
  padding: 20px 0;
  background-color: #226ef2;
  border-radius: 5px;
  color: white;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  margin-bottom: 15px;
  transform: scale(1);
  filter: drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.21));
  transition: 0.3s ease-in-out;
  &:hover {
    transform: scale(1.03);
  }

  @media (min-width: 940px) {
    width: 450px;
  }
`;

const SmallDescription = styled.p`
  font-size: 13px;
  color: rgba(0, 0, 0, 0.5);
  @media (min-width: 940px) {
    margin-left: 10%;
  }
`;

const Block = styled.div`
  @media (min-width: 940px) {
    width: 300px;
  }
`;

const Illustration = styled.img`
  z-index: 2;
  width: 400px;
  mix-blend-mode: multiply;

  @media (min-width: 940px) {
    width: 600px;
    position: absolute;
    top: 20%;
    left: 50%;
  }
`;
