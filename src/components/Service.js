import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";
import messaging from "../images/hero-banner/screenshot_messaging.png";
import crm from "../images/hero-banner/screenshot_crm.png";
import cobrowsing from "../images/hero-banner/screenshot_cobrowsing.png";
import campaigns from "../images/hero-banner/screenshot_campaigns.png";
import chatbot from "../images/hero-banner/screenshot_chatbot.png";
import livechat from "../images/hero-banner/screenshot_livechat.png";
import helpdesk from "../images/hero-banner/screenshot_helpdesk.png";

function Service() {
  return (
    <Container>
      <Fade bottom cascade>
        <Title>
          Découvrez l'application qui met les entreprises en lien avec leurs
          clients
        </Title>
        <WrapperContainer>
          <STabs
            selectedTabClassName="is-selected"
            selectedTabPanelClassName="is-selected"
          >
            <STabList>
              <STab>Boites de réception Collaborative</STab>
              <STab>CRM</STab>
              <STab>Co-Browsing</STab>
              <STab>Campagnes</STab>
              <STab>Chatbot</STab>
              <STab>Livechat</STab>
              <STab>Base de connaissances</STab>
            </STabList>
            <STabPanel>
              <Description>
                La boîte de réception collaborative de Crisp centralise toutes
                vos conversations. Du Live Chat à l'email en passant par
                Facebook Messenger , Twitter DM, SMS... Collaborez sans effort
                dans une seule boîte de réception, pour offrir le meilleur
                service à vos clients.
              </Description>
              <Link>En savoir plus</Link>
              <ScreenShot src={messaging} />
            </STabPanel>

            <STabPanel>
              <Description>
                Crisp est doté de fonctionnalités qui aideront les entreprises à
                automatiser les tâches répétitives et à conclure davantage
                d'affaires. Développez une base de données illimitée de contacts
                et d'organisations, consultez l'historique complet de l'activité
                des contacts, l'historique de navigation et bien plus encore...
              </Description>
              <Link>En savoir plus</Link>
              <ScreenShot src={crm} />
            </STabPanel>

            <STabPanel>
              <Description>
                Notre logiciel de co-navigation fournit une assistance en temps
                réel avec la navigation partagée et le chat en direct. Crisp
                vous permet de co-naviguer avec vos clients sans autre plugin
                que notre solution de chat en direct.
              </Description>
              <Link>En savoir plus</Link>
              <ScreenShot src={cobrowsing} />
            </STabPanel>

            <STabPanel>
              <Description>
                Notre logiciel d'engagement client peut être utilisé pour
                recibler vos prospects ou clients manuellement ou
                automatiquement. Notre logiciel d'engagement client vous permet
                de cibler les personnes en fonction de ce qu'elles font et de
                l'endroit où elles se trouvent dans votre produit.
              </Description>
              <Link>En savoir plus</Link>
              <ScreenShot src={campaigns} />
            </STabPanel>

            <STabPanel>
              <Description>
                Notre constructeur de chatbot est doté d'un éditeur visuel qui
                vous permet de créer des flux de travail grâce à notre
                constructeur sans code. Il suffit de cliquer sur 'publier' et
                votre scénario est en ligne, prêt à aider votre entreprise à
                développer des conversations illimitées et personnalisées 24
                heures sur 24 et 7 jours sur 7.
              </Description>
              <Link>En savoir plus</Link>
              <ScreenShot src={chatbot} />
            </STabPanel>

            <STabPanel>
              <Description>
                Rapprochez-vous de vos prospects et de vos clients grâce à un
                logiciel de chat en direct. L'ajout d'un chat à votre site web
                rendra l'expérience de votre service clientèle encore plus
                exceptionnelle.
              </Description>
              <Link>En savoir plus</Link>
              <ScreenShot src={livechat} />
            </STabPanel>

            <STabPanel>
              <Description>
                Rendez vos clients plus autonomes grâce à une base de
                connaissances. Oubliez les réponses répétitives, les contenus
                d'aide cachés ou non indexables, les réponses lentes ou les
                clients non autonomes.
              </Description>
              <Link>En savoir plus</Link>
              <ScreenShot src={helpdesk} />
            </STabPanel>
          </STabs>
        </WrapperContainer>
      </Fade>
    </Container>
  );
}

export default Service;

const Container = styled.div`
  display: none;
  @media (min-width: 940px) {
    background-color: #f8fbff;
    padding-bottom: 100px;
    display: block;
  }
`;
const Title = styled.h1`
  color: #101010;
  font-size: 27px;
  font-weight: 700;
  text-align: center;
  margin: auto;
  width: 80%;
  max-width: 600px;
  @media (min-width: 740px) {
    font-size: 31px;
    width: 65%;
  }

  @media (min-width: 940px) {
    font-size: 31px;
    width: 100%;
    max-width: 700px;
  }
`;

const WrapperContainer = styled.div`
  margin: auto;
  max-width: 1200px;
  width: 90%;
`;

const STabs = styled(Tabs)`
  font-size: 18px;
  font-weight: 600;
  width: 100%;
  margin: auto;
`;
const STabList = styled(TabList)`
  list-style-type: none;
  padding: 20px 0 0;
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

STabList.tabsRole = "TabList";
const STab = styled(Tab)`
  position: relative;
  font-weight: 700;
  text-align: center;
  /* margin-right: 10px; */
  margin-bottom: 30px;
  margin-top: 50px;
  padding: 0 12px;
  user-select: none;
  cursor: pointer;
  z-index: 3;
  color: rgba(0, 0, 0, 0.5);

  &.is-selected {
    color: black;
    &::before {
      z-index: -1;
      position: absolute;
      content: "";
      margin-left: auto;
      margin-right: auto;
      left: 0;
      right: 0;
      padding-top: 5px;
      padding-bottom: 30px;
      height: 100%;
      top: -5px;
      background-color: white;
      border-top-left-radius: 5px;
      border-top-right-radius: 5px;
      filter: drop-shadow(0px -3px 10px rgba(0, 0, 0, 0.09));
    }
  }

  &:focus {
    outline: none;
    border-color: none;
  }
`;

STab.tabsRole = "Tab";
const STabPanel = styled(TabPanel)`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  filter: drop-shadow(0px 13px 10px rgba(0, 0, 0, 0.11));
`;
STabPanel.tabsRole = "TabPanel";
const Description = styled.p`
  font-weight: 500;
  margin-top: 50px;
  margin-bottom: 20px;
  text-align: center;
  color: rgba(0, 0, 0, 0.5);
  padding: 0 50px 0;
`;
const Link = styled.a`
  position: relative;
  font-weight: 700;
  color: black;
  margin-bottom: 40px;
  cursor: pointer;
  transition: 350ms ease-in-out;
  &::before {
    position: absolute;
    content: "";
    top: 23px;
    height: 3px;
    width: 100%;
    background-color: #377fea;
  }
  &:hover {
    color: #377fea;
  }
`;
const ScreenShot = styled.img`
  width: 90%;
  padding-bottom: 60px;
`;
