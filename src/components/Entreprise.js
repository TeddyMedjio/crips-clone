import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";
import staycation from "../images/logos/staycation.jpg";
import fornikar from "../images/logos/fornikar.jpg";
import bb from "../images/logos/bb.jpg";
import figaro from "../images/logos/LEFIGARO.jpg";
import maif from "../images/logos/MAIF.jpg";
import beta from "../images/logos/betagouv.jpg";

function Entreprise() {
  return (
    <Container>
      <Fade bottom cascade>
        <Wrapper>
          <Title>
            Plus de 300 000 entreprises communiquent avec leurs clients grâce à
            Crisp !
          </Title>
          <WrapperLogos>
            <LogoOne src={staycation} />
            <LogoTwo src={fornikar} />
            <LogoThree src={bb} />
            <LogoFour src={figaro} />
            <LogoFive src={maif} />
            <LogoSix src={beta} />
          </WrapperLogos>
          <SubTitle>Voir leurs témoignages</SubTitle>
        </Wrapper>
      </Fade>
    </Container>
  );
}

export default Entreprise;

const Container = styled.div`
  background-color: #fff;
  margin: auto;
  width: 100%;
`;

const Wrapper = styled.div`
  margin: auto;
  max-width: 1200px;
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  margin: 60px 0;
  font-size: 31px;
  width: 100%;
  text-align: center;
  @media (min-width: 940px) {
    max-width: 700px;
  }
`;

const WrapperLogos = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: auto;
  margin-bottom: 30px;
  width: 100%;
`;

const LogoOne = styled.img`
  height: 25px;
  margin-top: 7px;
  margin-right: 25px;
  mix-blend-mode: darken;
`;
const LogoTwo = styled.img`
  height: 30px;
  margin-right: 25px;
  mix-blend-mode: darken;
`;
const LogoThree = styled.img`
  height: 60px;
  margin-right: 25px;
  mix-blend-mode: darken;
`;
const LogoFour = styled.img`
  height: 25px;
  margin-right: 25px;
  mix-blend-mode: darken;
`;
const LogoFive = styled.img`
  height: 60px;
  margin-right: 25px;
  mix-blend-mode: darken;
`;
const LogoSix = styled.img`
  height: 30px;
  mix-blend-mode: darken;
`;

const SubTitle = styled.a`
  font-size: 21px;
  position: relative;
  font-weight: 700;
  color: black;
  margin-bottom: 100px;
  cursor: pointer;
  transition: 350ms ease-in-out;
  &::before {
    position: absolute;
    content: "";
    top: 27px;
    height: 3px;
    width: 100%;
    background-color: #377fea;
  }
  &:hover {
    color: #377fea;
  }
`;
