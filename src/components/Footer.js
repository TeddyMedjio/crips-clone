import React from "react";
import styled from "styled-components";
import logo from "../images/logo-crisp-gris.svg";
import facebook from "../images/footer/logo-facebook.svg";
import twitter from "../images/footer/logo-twitter.svg";
import youtube from "../images/footer/logo-youtube.svg";
import logoSystem from "../images/footer/logo-footer.svg";
import cameroun from "../images/footer/cameroun.png";

function Footer() {
  return (
    <Container>
      <Wrapper>
        <SectionLeft>
          <Logo src={logo} />
          <Links>
            <LinkOne>
              <li>
                <a href="#">Témoignages</a>
              </li>
              <li>
                <a href="#">Comparaisons</a>
              </li>
              <li>
                <a href="#">Alternatives</a>
              </li>
              <li>
                <a href="#">Centre d'aide</a>
              </li>
              <li>
                <a href="#">Centre de développpement</a>
              </li>
            </LinkOne>
            <LinkTwo>
              <li>
                <a href="#">Conditions d'utilisation</a>
              </li>
              <li>
                <a href="#">Confidentialité</a>
              </li>
              <li>
                <a href="#">Sécurité</a>
              </li>
              <li>
                <a href="#">Pack presse</a>
              </li>
            </LinkTwo>
            <LinkThree>
              <li>
                <a href="#">Lire notre blog</a>
              </li>
              <li>
                <a href="#">A propos</a>
              </li>
              <li>
                <a href="#">Recrutement</a>
              </li>
              <li>
                <a href="#">Partenariats</a>
              </li>
            </LinkThree>
          </Links>
        </SectionLeft>
        <SectionReseaux>
          <Traduction></Traduction>
          <Icons>
            <Facebook src={facebook} />
            <Twitter src={twitter} />
            <Youtube src={youtube} />
          </Icons>
        </SectionReseaux>
      </Wrapper>
      <Signature>
        <Block>
          <Left>
            <LogoSystem src={logoSystem} />
            <Name>System Statuts</Name>
          </Left>
          <Middle>© 2022 Teddy Medjio</Middle>
          <Rigth>
            <Pays>Fais au Cameroun</Pays>
            <Flag src={cameroun} />
          </Rigth>
        </Block>
      </Signature>
    </Container>
  );
}

export default Footer;

const Signature = styled.div`
  margin: auto;
  max-width: 1200px;
  width: 90%;
`;

const Block = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 50px 0 20px;
`;
const Left = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const LogoSystem = styled.img`
  width: 30px;
  margin-right: 10px;
`;
const Name = styled.p`
  font-size: 14px;
  font-weight: 700;
`;
const Middle = styled.p`
  font-size: 14px;
  font-weight: 600;
`;
const Rigth = styled.div`
  display: none;
  @media (min-width: 600px) {
    display: flex;
  }
`;
const Pays = styled.p`
  font-size: 14px;
  font-weight: 600;
`;
const Flag = styled.img`
  width: 20px;
  margin-left: 20px;
`;

const Container = styled.div`
  position: relative;
  margin: auto;
  width: 100%;
  margin-top: 250px;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin: auto;
  max-width: 1200px;
  width: 90%;
  flex-direction: column;
  @media (min-width: 768px) {
    align-items: flex-start;
    justify-content: space-between;
    flex-direction: row;
  }
`;

const SectionLeft = styled.div`
  display: flex;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const Logo = styled.img`
  height: 30px;
  margin-top: 40px;
  margin-bottom: 40px;

  @media (min-width: 768px) {
    margin-top: 0;
    height: 28px;
    margin-right: 70px;
  }
`;
const Links = styled.div`
  display: flex;
  justify-content: center;
`;
const LinkOne = styled.ul`
  position: relative;
  margin-right: 50px;
  li {
    margin-bottom: 10px;
    a {
      font-weight: 500;
      color: #101010;
      &:hover {
        color: #317fea;
        transition: all 350ms ease-in-out;
        text-decoration: underline;
      }
    }
  }
`;
const LinkTwo = styled(LinkOne)``;
const LinkThree = styled(LinkOne)`
  margin-right: 0;
`;
const SectionReseaux = styled.div`
  margin-top: 20px;
  @media (min-width: 768px) {
    margin-top: 0;
  }
`;
const Icons = styled.div`
  display: flex;
`;
const Facebook = styled.img`
  height: 30px;
  margin-left: 20px;
  cursor: pointer;
`;
const Twitter = styled(Facebook)``;
const Youtube = styled(Facebook)``;
const Traduction = styled.div``;
