import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonContent,
  IonImg,
  IonItem,
  IonLabel,
  IonThumbnail,
} from "@ionic/react";

import darkMagician from "../../assets/images/darkMagician.jpg";
import dark from "../../assets/images/Dark.png";
import level from "../../assets/images/Level.png";
import cards from "../../assets/cards.json";
import React from "react";

interface cardData {
  id: number;
  title: string;
  description: string;
  type: string;
  edition: string;
  code: string;
  hability: string;
  atk: number;
  def: number;
  numberCode: string;
  copyright: string;
  imageRoute: string;
}

const Cards:React.FC = () => {
  const cardItem = (cardData: cardData) => {
    return (
      <IonCard key={cardData.id}>
        <IonCardHeader>
          <IonCardTitle>
            {cardData.title}
            <IonItem>
              <IonThumbnail slot="start">
                <IonImg src={dark} />
              </IonThumbnail>
            </IonItem>
          </IonCardTitle>
        </IonCardHeader>
        <IonItem>
          <IonThumbnail slot="start">
            <IonImg src={level} />
          </IonThumbnail>
        </IonItem>

        <IonCardContent>
          <IonItem>
            <IonThumbnail slot="start">
              <IonImg src={darkMagician} />
            </IonThumbnail>
            <IonLabel></IonLabel>
          </IonItem>
          <p>{cardData.edition}</p>
          <p>{cardData.code}</p>
          <IonCard>
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
  return (
    <>
      <IonContent>
        {cards.items.map((item: any) => {
          return cardItem(item);
        })}
      </IonContent>
    </>
  );
};

export default Cards;
