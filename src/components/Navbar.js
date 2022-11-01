import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import logo from "../images/logo-crisp.svg";
import livechat from "../images/icons/livechat.svg";
import chatbot from "../images/icons/chatbot.svg";
import crm from "../images/icons/icon-crm.svg";
import messaging from "../images/icons/icon-messaging.svg";
import ticketing from "../images/icons/ticketing.svg";
import campagnes from "../images/icons/icon-campagnes.svg";
import connaissances from "../images/icons/icon-connaissances.svg";
import statut from "../images/icons/icon-statut.svg";
import aide from "../images/icons/icon-centre-aide.svg";
import crisp from "../images/icons/icon-crisp.svg";
import developer from "../images/icons/developer-hub.svg";
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";

function Navbar() {
  // changer couleur bar de navigation
  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 20) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  const [isOpen, setIsOpen] = useState(false);
  const toggling = () => setIsOpen(!isOpen);

  let menuRef = useRef();

  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  const [letOpen, setLetOpen] = useState(false);
  const toggle = () => setLetOpen(!letOpen);

  let menuRefTwo = useRef();

  useEffect(() => {
    let handler = (e) => {
      if (!menuRefTwo.current.contains(e.target)) {
        setLetOpen(false);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  return (
    <Container className={color ? "navcolor" : ""}>
      <MenuContainer>
        <Menu>
          <Wrapper>
            <Logo href="https://crisp.chat/fr/apps/">
              <Link to="/">
                <img src={logo} alt="logo crisp chat" />
              </Link>
            </Logo>
            <WrapperList>
              <li onClick={toggling}>
                <a>Fonctionalités</a>
              </li>

              <li>
                <a href="https://crisp.chat/fr/apps/">Apps</a>
              </li>
              <li>
                <a href="https://crisp.chat/fr/pricing/">Tarifs</a>
              </li>
              <li>
                <a href="https://crisp.chat/fr/pricing/">Intégrations</a>
              </li>
              <li onClick={toggle}>
                <a>Aide</a>
              </li>
            </WrapperList>
          </Wrapper>
          <MenuRigth>
            <Connexion>
              <Link to="/connexion">Connexion</Link>
            </Connexion>
            <Button>
              <Link to="/sinscrire">S'inscrire au Crisp</Link>
            </Button>
          </MenuRigth>

          {isOpen && (
            <DropdowMenu ref={menuRef}>
              <Dropdownitem
                href="https://crisp.chat/fr/livechat/"
                img={livechat}
                h3={"Livechat"}
                text={"Simplifiez votre relation client grâce à notre chat"}
              />
              <Dropdownitem
                href="https://crisp.chat/fr/chatbot/"
                img={chatbot}
                h3={"Chatbot"}
                text={"Créez des expériences conversationelles uniques"}
              />
              <Dropdownitem
                href="https://crisp.chat/fr/crm/"
                img={crm}
                h3={"CRM"}
                text={"Unifiez les données à propos de vos clients"}
              />
              <Dropdownitem
                href="https://crisp.chat/fr/shared-inbox/"
                img={messaging}
                h3={"Boîte de réception"}
                text={"Améliorez la collaboration au sein de vos équipes"}
              />
              <Dropdownitem
                href="https://crisp.chat/en/ticket/"
                img={ticketing}
                h3={"Ticketing"}
                text={"Optimisez votre support client de manière éfficace"}
              />
              <Dropdownitem
                href="https://crisp.chat/fr/campaigns/"
                img={campagnes}
                h3={"Campagnes"}
                text={"Créez des séquences de messages entièrement automatisés"}
              />
              <Dropdownitem
                href="https://crisp.chat/fr/knowledge/"
                img={connaissances}
                h3={"Connaissances"}
                text={
                  "Apportez les bonnes réponses à vos clients en utilisant notre base de connaissances"
                }
              />
              <Dropdownitem
                href="https://crisp.chat/fr/status/"
                img={statut}
                h3={"Page de Statut"}
                text={
                  "Monitorez votre système et alerté vos clients en cas de soucis"
                }
              />
            </DropdowMenu>
          )}
          {letOpen && (
            <DropdowMenusecond ref={menuRefTwo}>
              <Dropdownitems
                href="https://help.crisp.chat/en/"
                img={crisp}
                h3={"Centre d'aide"}
                text={"Pour apprendre à utiliser et configurer Crisp"}
              />

              <Dropdownitems
                href="https://crisp.chat/fr/unleash/"
                img={aide}
                h3={"Crisp Unleash"}
                text={
                  "Les vidéos avec les meilleures astuces pour utiliser Crisp"
                }
              />

              <Dropdownitems
                href="https://docs.crisp.chat/"
                img={developer}
                h3={"Developer Hub"}
                text={"Utiliser l'API pour adapter Crisp à votre utilisation"}
              />
            </DropdowMenusecond>
          )}
        </Menu>
      </MenuContainer>
    </Container>
  );
}

function Dropdownitem(props) {
  return (
    <li className="dropdownitem">
      <img src={props.img}></img>
      <a>
        {props.h3}
        <br />
        <span>{props.text}</span>
      </a>
    </li>
  );
}

function Dropdownitems(props) {
  return (
    <li className="dropdownitems">
      <img src={props.img}></img>
      <a>
        {props.h3}
        <br />
        <span>{props.text}</span>
      </a>
    </li>
  );
}

export default Navbar;

const Container = styled.div`
  position: fixed;
  z-index: 1000;
  width: 100%;
  padding-bottom: 20px;
  padding-top: 15px;
  transition: 0.3s ease-in-out;
  @media (min-width: 769px) {
    background-color: none;
  }
`;
const MenuContainer = styled.nav`
  position: relative;
  margin: auto;
  max-width: 1200px;
  width: 90%;
  display: flex;
  align-items: center;
`;
const Menu = styled.ul`
  width: 100%;
  display: flex;
  @media (min-width: 939px) {
    justify-content: space-between;
  }
`;

const Logo = styled.div`
  cursor: pointer;
  img {
    width: 90px;
    margin-bottom: 10px;
  }
  @media (min-width: 769px) {
    img {
      margin-bottom: 0;
      margin-right: 50px;
      margin-top: 8px;
    }
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;

  @media (min-width: 769px) {
    margin: 0;
    justify-content: center;
    flex-direction: row;
  }
`;
const WrapperList = styled.ul`
  display: flex;
  li {
    margin-right: 24px;
    &:nth-last-child(1) {
      margin-right: 0;
    }
  }

  a {
    cursor: pointer;
    font-size: 15px;
    color: #525252;
    &:hover {
      color: #1f1f1f;
    }
  }
`;

const MenuRigth = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 939px) {
    display: none;
  }
`;
const Connexion = styled.li`
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  margin-right: 40px;
  & > a {
    color: #101010;
  }
`;
const Button = styled.button`
  font-size: 16px;
  font-weight: 500;
  padding: 8px 0px;
  width: 160px;
  border: none;
  border-radius: 5px;
  background-color: #317fea;
  cursor: pointer;
  & > a {
    color: white;
  }
`;

const DropdowMenu = styled.div`
  display: block;
  position: absolute;
  top: 80px;
  left: -30px;
  padding: 50px 0 50px 70px;
  width: 100vw;
  height: 85vh;
  background-color: white;
  border-radius: 10px;
  transition: all 0.5s ease;
  filter: drop-shadow(0px 24px 13px rgba(0, 0, 0, 0.21));

  @media (min-width: 769px), (min-width: 940px) {
    display: grid;
    max-width: 714px;
    max-height: 600px;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(4, 1fr);
    top: 57px;
    left: 0;
  }

  li {
    display: flex;
    margin-bottom: 20px;
    list-style: none;
    padding-right: 40px;
    cursor: pointer;
    img {
      position: fixed;
      width: 25px;
      transition: 350ms ease-in-out;
    }
    a {
      color: #1f1f1f;
      font-size: 18px;
      font-weight: 500;
      margin-left: 50px;
    }
    span {
      font-size: 15px;
      font-weight: 400;
    }

    &:hover {
      img {
        width: 30px;
        transform: rotate(15deg);
      }
    }
  }
`;

const DropdowMenusecond = styled.ul`
  position: absolute;
  padding: 50px 0 50px 70px;
  display: block;
  flex-direction: column;
  top: 70px;
  left: 5%;
  width: 500px;
  height: 40vh;
  margin-top: 10px;
  background-color: white;
  border-radius: 10px;
  transition: 350ms ease-in-out;
  filter: drop-shadow(0px 24px 13px rgba(0, 0, 0, 0.21));
  @media (min-width: 769px), (min-width: 940px) {
    top: 47px;
  }
  li {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    list-style: none;
    padding-right: 40px;
    cursor: pointer;
    img {
      position: fixed;
      width: 25px;
      transition: 350ms ease-in-out;
    }
    a {
      color: #1f1f1f;
      font-size: 18px;
      font-weight: 500;
      margin-left: 50px;
    }
    span {
      font-size: 15px;
      font-weight: 400;
    }

    &:hover {
      img {
        width: 30px;
        transform: rotate(15deg);
      }
    }
  }
`;
