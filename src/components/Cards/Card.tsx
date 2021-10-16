import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonCol,
  IonImg,
} from "@ionic/react";

import darkMagician from "../../assets/images/darkMagician.jpg";
import level from "../../assets/images/Level.png";
import React, { useState } from "react";
import "./Card.css";
import { IcardData } from "../../types/card";
import imageType from "../../types/CardImageTypes";

interface propsTypes {
  cardData: IcardData;
}

const Cards: React.FC<propsTypes> = (props) => {
  const [flipped, setFlipped] = useState(false);

  const stars: HTMLIonImgElement[] = new Array(props.cardData.starCount).fill(
    <IonImg src={level} className="starImg" />
  );

  const cardFront = (cardData: IcardData) => {
    return (
      <IonCard className="yugi-card-front">
        <IonCardHeader style={{ margin: "0px", padding: "0.5rem" }}>
          <IonCardTitle className="card-header">
            {cardData.title}
            <IonImg src={imageType[props.cardData.type]} className="typeImg" />
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
            <p className="hability">{`[${cardData.hability.toUpperCase()}]`}</p>
            <p className="description">{cardData.description}</p>

            <div className="stats">
              <hr></hr>
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
