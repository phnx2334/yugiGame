import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonCol,
  IonContent,
  IonGrid,
  IonImg,
  IonItem,
  IonLabel,
  IonRow,
  IonThumbnail,
} from "@ionic/react";

import darkMagician from "../../assets/images/darkMagician.jpg";
import dark from "../../assets/images/Dark.png";
import level from "../../assets/images/Level.png";
import cards from "../../assets/cards.json";
import React, { useState } from "react";
import "./Cards.css";

interface cardData {
  id: number;
  title: string;
  description: string;
  type: string;
  starCount: number;
  edition: string;
  code: string;
  hability: string;
  atk: number;
  def: number;
  numberCode: string;
  copyright: string;
  imageRoute: string;
}

const Cards: React.FC = () => {
  const [flipped, setFlipped] = useState(false);

  const cardContainer = (cardData: any) => {
    return (
      <IonCol size="3" style={{ marginRight: "6rem" }}>
        <div className={`yugi-card`} onClick={() => setFlipped(!flipped)}>
          <div className={`yugi-card-inner ${flipped ? "flipped" : ""}`}>
            {cardBack()}
            {cardFront(cardData)}
          </div>
        </div>
      </IonCol>
    );
  };

  const cardFront = (cardData: cardData) => {
    return (
      <IonCard className="yugi-card-front">
        <IonCardHeader style={{ margin: "0px", padding: "0.5rem" }}>
          <IonCardTitle className="card-header">
            {cardData.title}
            <IonImg src={dark} className="typeImg" />
          </IonCardTitle>
        </IonCardHeader>

        <IonCardContent className="card-content">
          <IonImg src={level} className="starImg" />
          <IonImg src={darkMagician} className="mainImg" />

          <div className="imgLabels">
            <p className="edition">{cardData.edition}</p>
            <p className="code">{cardData.code}</p>
          </div>

          <IonCard className="cardDescription">
            {cardData.description}
            <hr></hr>
            <p>{`ATK/${cardData.atk}`}</p>
            <p>{`DEF/${cardData.def}`}</p>
          </IonCard>
          <p>{cardData.numberCode}</p>
          <p>{cardData.copyright}</p>
        </IonCardContent>
      </IonCard>
    );
  };

  const cardBack = () => {
    return <IonCard className="yugi-card-back"></IonCard>;
  };

  return (
    <>
      <IonContent style={{ padding: "0px", margin: "0px" }}>
        <IonGrid style={{ padding: "0px", margin: "0px" }}>
          <IonRow>
            {cards.items.map((item: any) => {
              return cardContainer(item);
            })}
          </IonRow>
        </IonGrid>
      </IonContent>
    </>
  );
};

export default Cards;
