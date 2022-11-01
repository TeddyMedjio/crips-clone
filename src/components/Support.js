import React from "react";
import styled from "styled-components";
import support from "../images/illustrations/illustration-support-client.jpg";
import marketing from "../images/illustrations/illustration-marketing.jpg";
import vente from "../images/illustrations/illustration-ventes.jpg";
import Fade from "react-reveal/Fade";

function Support() {
  return (
    <Container>
      <Wrapper>
        <Fade bottom cascade>
          <Title>
            Conçu pour le support client, le marketing et les ventes.{" "}
            <span>Tous ensemble.</span>
          </Title>
          <ContainItems>
            <Items
              img={support}
              h1={"Le support client"}
              text={
                "Offrez une expérience multi-canal exceptionnelle à vos clients"
              }
            ></Items>
            <Items
              img={vente}
              h1={"Les ventes"}
              text={
                "Vendez plus en automatisant votre pipeline de vente avec des bots"
              }
            ></Items>
            <Items
              img={marketing}
              h1={"Le marketing"}
              text={
                "Reciblez vos clients en envoyant des emails ciblés et des messages in-app"
              }
            ></Items>
          </ContainItems>
        </Fade>
      </Wrapper>
    </Container>
  );
}

function Items(props) {
  return (
    <div className="items">
      <img src={props.img}></img>
      <div>
        <h1>{props.h1}</h1>
        <p>{props.text}</p>
      </div>
    </div>
  );
}

export default Support;

const Container = styled.div`
  /* background-color: #f8fbff; */
  width: 100%;
  padding-bottom: 50px;
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
  position: relative;
  text-align: center;
  margin-top: 60px;
  margin-bottom: 50px;
  font-size: 27px;
  @media (min-width: 940px) {
    width: 650px;
    font-size: 31px;
    span::before {
      position: absolute;
      content: "";
      background-color: #62a9ff;
      width: 240px;
      height: 5px;
      top: 80px;
    }
  }
`;

const ContainItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  @media (min-width: 940px) {
    flex-direction: row;
  }

  .items {
    display: flex;
    flex-direction: row;
    background-color: white;
    margin-bottom: 20px;
    width: 100%;
    border-radius: 5px;
    filter: drop-shadow(0px 5px 5px rgba(0, 0, 0, 0.09));
    @media (min-width: 940px) {
      display: block;
      flex-direction: none;
      align-items: center;
      justify-content: center;
      width: 30%;
      margin-right: 20px;
    }

    img {
      width: 50%;
      object-fit: cover;
      @media (min-width: 940px) {
        width: 100%;
      }
    }

    div {
      padding: 35px 0;
      width: 100%;
      padding-right: 40px;
      margin-left: 20px;

      h1 {
        padding-bottom: 20px;
        font-size: 24px;
      }

      p {
        font-size: 15px;
        font-weight: 500;
      }
    }
  }
`;
