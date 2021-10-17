import { IonContent, IonGrid, IonPage, IonRow } from "@ionic/react";
import React, { useState, useEffect } from "react";
import cards from "../assets/cards.json";
import Card from "../components/Cards/Card";
import Header from "../components/Header/Header";
import { IcardData } from "../types/card";
import { shuffleArray } from "../Utils/Utils";

const Main: React.FC = () => {
  const [data, setData] = useState<IcardData[]>([]);

  useEffect(() => {
    /*  if (!data.length) {
      getCards();
    } */
    setData(cards.items);
  }, []);

  const getCards = async () => {
    let response;

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      response = await fetch("https://yugi-api.herokuapp.com/cards", config);

      const data = await response.json();

      const shuffled = shuffleArray(data);

      setData(shuffled);
    } catch (error) {
      console.log("error obtaining cards", error);
    }
  };

  return (
    <IonPage>
      <Header title={"Cards"}></Header>
      <IonContent>
        <IonGrid>
          <IonRow>
            {data.map((item: IcardData) => {
              return <Card key={item.id} cardData={item} />;
            })}
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Main;
