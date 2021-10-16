import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonCol,
  IonImg,
} from "@ionic/react";

import darkMagician from "../../assets/images/darkMagician.jpg";
import dark from "../../assets/images/Dark.png";
import level from "../../assets/images/Level.png";
import React, { useState } from "react";
import "./Card.css";
import { cardData } from "../../types/card";

interface propsTypes {
  cardData: cardData;
}

const Cards: React.FC<propsTypes> = (props) => {
  const [flipped, setFlipped] = useState(true);

  const stars: HTMLIonImgElement[] = new Array(props.cardData.starCount).fill(
    <IonImg src={level} className="starImg" />
  );

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
          <div className="levelContainer">
            {stars.map((star) => {
              return star;
            })}
          </div>

          <IonImg src={darkMagician} className="mainImg" />

          <div className="imgLabels">
            <p className="edition">{cardData.edition}</p>
            <p className="code">{cardData.code}</p>
          </div>

          <IonCard className="cardDescription">
            <p className="descriptionType">{`[${cardData.descriptionType.toUpperCase()}]`}</p>
            <p className="description">{cardData.description}</p>

            <hr
              style={{
                backgroundColor: "black",
                height: "0.5px",
                margin: "1rem 0 0 0",
              }}
            ></hr>

            <div className="stats">
              <p>{`ATK/${cardData.atk} DEF/${cardData.def}`}</p>
            </div>
          </IonCard>

          <div className="imgFooters">
            <p>{cardData.numberCode}</p>
            <p>{cardData.copyright}</p>
          </div>
        </IonCardContent>
      </IonCard>
    );
  };

  const cardBack = () => {
    return <IonCard className="yugi-card-back"></IonCard>;
  };

  return (
    <>
      <IonCol size="6" style={{ padding: "0.5rem" }}>
        <div className={`yugi-card`} onClick={() => setFlipped(!flipped)}>
          <div className={`yugi-card-inner ${flipped ? "flipped" : ""}`}>
            {cardBack()}
            {cardFront(props.cardData)}
          </div>
        </div>
      </IonCol>
    </>
  );
};

export default Cards;
