import React, { useRef, useState } from "react";
import styled from "styled-components";
import logo from "../images/logo-crisp.svg";
import background from "../images/footer/background.jpg";
import laptop from "../images/footer/illustration_laptop.png";
import { Link } from "react-router-dom";

function Sinscrire() {
  const inputs = useRef([]);
  const addInputs = (el) => {
    if (el && !inputs.current.includes(el)) {
      inputs.current.push(el);
    }
  };

  const handleForm = (e) => {
    e.preventDefault();
    console.log(inputs);
  };

  return (
    <Container>
      <Wrapper>
        <Menu>
          <Logo>
            <Link to="/">
              <img src={logo} alt="logo crisp chat" />
            </Link>
          </Logo>
          <HelpLanguage>
            <Aide>Besoin d'aide ?</Aide>
            <Langue>Français</Langue>
          </HelpLanguage>
        </Menu>
        <Formulaire onSubmit={handleForm}>
          <Entete>
            <Title>Commencez</Title>
            <Description>
              Créer votre compte gratuit Crisp pour continuer.
            </Description>
          </Entete>

          <Form>
            <LabelName>
              {" "}
              Votre prénom<span>*</span>
              <br />
              <input
                ref={addInputs}
                name="text"
                required
                type="text"
                placeholder="Prénom"
              />
            </LabelName>
            <LabelName>
              {" "}
              Votre nom de famille<span>*</span>
              <br />
              <input
                ref={addInputs}
                name="text"
                required
                type="text"
                placeholder="Nom de famille"
              />
            </LabelName>
          </Form>
          <LabelMail>
            {" "}
            Entrez votre e-mail<span>*</span>
            <br />
            <input
              ref={addInputs}
              name="email"
              required
              type="email"
              placeholder="Entrer votre email..."
            />
          </LabelMail>
          <LabelPass>
            {" "}
            Entrez votre mot de passe<span>*</span>
            <br />
            <input
              ref={addInputs}
              name="pwd"
              required
              type="password"
              placeholder="Entrez votre mot de passe..."
            />
          </LabelPass>
          <LabelPass>
            {" "}
            Entrez votre mot de passe de nouveau<span>*</span>
            <br />
            <input
              ref={addInputs}
              name="pwd"
              required
              type="password"
              placeholder="Entrez votre mot de passe..."
            />
          </LabelPass>
          <CheckBox>
            {" "}
            <input ref={addInputs} name="chk" required type="checkbox" />
            <p>
              J'ai lu et j'accepte les conditions d'utilisation de Crisp :{" "}
              <span href="#">les lire</span>
            </p>
          </CheckBox>
          <Bouton>Connexion à l'application</Bouton>
          <Footer>
            <Link to="/connexion">
              <Connecter>Vous avez déjà un compte ? Connectez-vous.</Connecter>
            </Link>
          </Footer>
        </Formulaire>
      </Wrapper>
      <Rigth>
        <Laptop src={laptop} />
        <Picture src={background} />
      </Rigth>
    </Container>
  );
}

export default Sinscrire;

const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`;
const Wrapper = styled.div`
  width: 70%;
  margin: 0 auto;
  padding: 30px 20px 0;
`;
const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 100px;
`;
const Logo = styled.div`
  img {
    width: 90px;
  }
`;
const HelpLanguage = styled.div``;
const Aide = styled.a`
  margin-right: 70px;
  font-size: 15px;
  color: #226ef2;
  cursor: pointer;
  font-weight: 500;
  &:hover {
    text-decoration: underline;
  }
`;
const Langue = styled(Aide)`
  margin-right: 0;
  color: rgba(0, 0, 0, 0.5);
`;
const Formulaire = styled.div`
  display: flex;
  flex-direction: column;
  width: 550px;
  margin: auto;
`;
const Entete = styled.div``;
const Title = styled.h2`
  margin-bottom: 20px;
`;
const Description = styled.p`
  font-size: 15px;
  font-weight: 400;
  margin-bottom: 40px;
`;
const LabelMail = styled.label`
  font-size: 15px;
  margin-bottom: 20px;
  font-weight: 500;
  span {
    color: #e0102b;
    font-size: 10px;
    padding-left: 5px;
  }

  input {
    margin-top: 10px;
    height: 50px;
    width: 100%;
    border-radius: 5px;
    outline: none;
    border: 1px solid #a8c6df;
    padding-left: 20px;
    font-weight: 600;

    :placeholder-shown {
      color: rgba(0, 0, 0, 0.5);
      font-weight: 500;
    }

    &:focus {
      border: 1px solid #2c405a;
    }
  }
`;

const Form = styled.div`
  display: flex;
  width: 100%;
`;
const LabelName = styled(LabelMail)`
  flex: 1;
  &:nth-last-child(1) {
    margin-left: 15px;
  }
`;
const LabelPass = styled(LabelMail)``;
const CheckBox = styled.label`
  display: flex;
  align-items: center;
  margin-bottom: 30px;

  p {
    font-size: 15px;
    color: rgba(0, 0, 0, 0.7);
    span {
      color: #226ef2;
      font-weight: 500;
      text-decoration: underline;
      cursor: pointer;
    }
  }

  input[type="checkbox"] {
    margin-right: 20px;
  }
`;
const Bouton = styled.button`
  margin-top: 10px;
  height: 50px;
  width: 100%;
  border-radius: 5px;
  border: 1px solid #a8c6df;
  padding-left: 20px;
  background-color: #226ef2;
  color: white;
  font-size: 15px;
  font-weight: 400;
  cursor: pointer;
`;
const Footer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
`;
const Connecter = styled.p`
  font-size: 15px;
  color: #101010;
  text-decoration: underline;
  cursor: pointer;
  font-weight: 500;
`;

const Rigth = styled.div`
  display: none;

  @media (min-width: 1000px) {
    position: relative;
    display: block;
    width: 30%;
    height: 100vh;
    background-color: black;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const Picture = styled.img`
  width: 100%;
  object-fit: contain;
`;
const Laptop = styled.img`
  position: absolute;
  top: 65%;
  width: 100%;
`;
