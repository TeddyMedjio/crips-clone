import React from "react";
import styled from "styled-components";
import fleurs from "../images/leaf-cercle.png";
import Fade from "react-reveal/Fade";

function Newsletter() {
  return (
    <Container>
      <Fade bottom cascade>
        <Wrapper>
          <Image src={fleurs} />
          <Title>Prêt à améliorer votre relation client?</Title>
          <Button>Essayer Crisp gratuitement</Button>
          <ButtonTwo>Demander une démo</ButtonTwo>
        </Wrapper>
      </Fade>
    </Container>
  );
}

export default Newsletter;

const Container = styled.div`
  position: relative;
  margin: auto;
  width: 100%;
`;

const Title = styled.h3`
  text-align: center;
  color: white;
  margin: 30px 0;
  font-weight: 500;
  font-size: 31px;
`;
const Wrapper = styled.div`
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  top: -35px;
  max-width: 1200px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #002650;
  padding-bottom: 20px;
`;
const Image = styled.img`
  position: absolute;
  height: 100%;
  left: 0;
`;

const Button = styled.button`
  width: 90%;
  max-width: 336px;
  border: none;
  padding: 20px 0;
  background-color: #226ef2;
  border-radius: 5px;
  color: white;
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 15px;
  cursor: pointer;
  transform: scale(1);
  filter: drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.21));
  transition: 0.3s ease-in-out;
  &:hover {
    transform: scale(1.03);
  }
`;
const ButtonTwo = styled(Button)`
  background-color: white;
  color: #101010;
  @media (min-width: 768px) {
    display: none;
  }
`;
