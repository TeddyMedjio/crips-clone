import React from "react";
import styled from "styled-components";
import logo from "../images/logo-crisp.svg";
import { Link } from "react-router-dom";

function Connexion() {
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
        <Formulaire>
          <Entete>
            <Title>Connexion</Title>
            <Description>
              Connectez-vous à votre compte et accéder à votre boîte de
              réception Crisp.
            </Description>
          </Entete>

          <LabelMail>
            {" "}
            Connectez-vous avec votre e-mail<span>*</span>
            <br />
            <input required type="text" placeholder="Entrer votre email..." />
          </LabelMail>
          <LabelPass>
            {" "}
            Mot de passe<span>*</span>
            <br />
            <input
              required
              type="password"
              placeholder="Entrer votre mot de passe..."
            />
          </LabelPass>
          <CheckBox>
            {" "}
            <input type="checkbox" /> Se souvenir de moi
          </CheckBox>
          <Bouton>Connexion à l'application</Bouton>
          <Footer>
            <Link to="/sinscrire">
              <Connecter>Pas encore de compte ?</Connecter>
            </Link>
            <ResetPass>Mot de passe oublié ?</ResetPass>
          </Footer>
        </Formulaire>
      </Wrapper>
      <Rigth>
        <Titre>Obtenez 2 fois plus de ventes en utilisant les Triggers</Titre>
        <Info>
          Envoyez des e-mails automatisés à messages pour créer un service
          client proactif qui convertit les visiteurs en opportunités.
        </Info>
        <Lien>En savoir plus</Lien>
        <Picture src="https://app.crisp.chat/images/components/initiate/InitiateLoginFeature/triggers.png" />
      </Rigth>
    </Container>
  );
}

export default Connexion;

const Container = styled.div`
  width: 100%;
  /* max-width: 1200px; */
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  /* align-items: center; */
`;
const Wrapper = styled.div`
  width: 70%;
  /* max-width: 1000px; */
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
  /* margin-top: 100px; */
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
const LabelPass = styled(LabelMail)``;
const CheckBox = styled.label`
  margin-bottom: 30px;
  font-size: 15px;
  color: rgba(0, 0, 0, 0.7);

  input {
    margin-right: 10px;
    cursor: pointer;
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
const ResetPass = styled.a`
  font-size: 15px;
  color: rgba(0, 0, 0, 0.5);
  cursor: pointer;
  font-weight: 500;
`;

const Rigth = styled.div`
  display: none;

  @media (min-width: 1000px) {
    display: block;
    width: 30%;
    height: 100vh;
    background-color: #226ef2;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const Titre = styled.h1`
  text-align: center;
  font-size: 21px;
  width: 90%;
  max-width: 310px;
  color: white;
  margin-top: 100px;
`;
const Info = styled.p`
  text-align: center;
  width: 90%;
  max-width: 350px;
  margin-top: 20px;
  color: white;
  font-size: 14px;
  font-weight: 300;
`;
const Lien = styled.a`
  font-size: 14px;
  color: white;
  margin-top: 20px;
  margin-bottom: 20px;
  text-decoration: underline;
  font-weight: 600;
  cursor: pointer;
`;
const Picture = styled.img`
  width: 300px;
  @media (min-width: 1100px) {
    width: 350px;
  }
`;
