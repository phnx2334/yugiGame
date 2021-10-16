import { IonContent, IonGrid, IonRow } from '@ionic/react';
import React from 'react'
import cards from "../assets/cards.json";
import Card from '../components/Cards/Card';
import { cardData } from '../types/card';


const Main:React.FC = () => {
    return (
        <IonContent style={{ padding: "0px", margin: "0px",overflowY:true }}>
        <IonGrid style={{ padding: "0px", margin: "0px" }}>
          <IonRow>
            {cards.items.map((item: cardData) => {
              return <Card key={item.id} cardData={item}/>
            })}
          </IonRow>
        </IonGrid>
      </IonContent>
    )
}

export default Main
