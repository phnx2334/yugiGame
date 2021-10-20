import { IonContent, IonGrid, IonRow } from "@ionic/react";
import React, { useState,useEffect } from "react";
import cards from "../assets/cards.json";
import Card from "../components/Cards/Card";
import { IcardData } from "../types/card";
import { shuffleArray } from "../Utils/Utils";

const Main: React.FC = () => {

  useEffect(() => {
    const mixed = shuffleArray(cards.items);
    setData(mixed)
  }, [])



  const [data, setData] = useState<IcardData[]>([])
 

  return (
    <IonContent style={{ padding: "0px", margin: "0px", overflowY: true }}>
      <IonGrid style={{ padding: "0px", margin: "0px" }}>
        <IonRow>
          {data.map((item: IcardData) => {
            return <Card key={item.id} cardData={item} />;
          })}
        </IonRow>
      </IonGrid>
    </IonContent>
  );
};

export default Main;
