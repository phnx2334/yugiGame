import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonImg,
  IonItem,
  IonLabel,
  IonThumbnail,
} from "@ionic/react";

import darkMagician from "../../assets/images/darkMagician.jpg";
import dark from "../../assets/images/Dark.png";
import level from "../../assets/images/Level.png";
import React from "react";

const Cards = () => {
  return (
    <div>
      <IonCard>
        <IonCardHeader>
          <IonCardTitle>
            Dark magician
            <IonItem>
              <IonThumbnail slot="start">
                <IonImg src={dark} />
              </IonThumbnail>
              <IonLabel></IonLabel>
            </IonItem>
          </IonCardTitle>
        </IonCardHeader>
        <IonItem>
          <IonThumbnail slot="start">
            <IonImg src={level} />
          </IonThumbnail>
          <IonLabel></IonLabel>
        </IonItem>

        <IonCardContent>
          <IonItem>
            <IonThumbnail slot="start">
              <IonImg src={darkMagician} />
            </IonThumbnail>
            <IonLabel></IonLabel>
          </IonItem>
          <p>1st edition</p>
          <p>SDY 006</p>
          <IonCard>
            Keep close to Nature's heart... and break clear away, once in
            awhile, and climb a mountain or spend a week in the woods. Wash your
            spirit clean.
            <hr></hr>
            <p>ATK/2500</p>
            <p>DEF/2500</p>
          </IonCard>
          <p>23489234</p>
            <p>c 1996 KAZUKI TAKAHASHI</p>
        </IonCardContent>
      </IonCard>
    </div>
  );
};

export default Cards;
