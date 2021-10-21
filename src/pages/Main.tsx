import { IonContent, IonGrid, IonPage, IonRow } from "@ionic/react";
import React, { useState, useEffect } from "react";
import Card from "../components/Cards/Card";
import Header from "../components/Header/Header";
import { IcardData } from "../types/card";
import { shuffleArray } from "../Utils/Utils";

const Main: React.FC = () => {
  const [data, setData] = useState<IcardData[]>([]);

  useEffect(() => {
    getCards();
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

      shuffle(data);
    } catch (error) {
      console.log("error obtaining cards", error);
    }
  };

  const shuffle = (cards?: IcardData[]) => {
    const shuffled = shuffleArray(cards ?? data);
    setData(shuffled);
  };

  return (
    <IonPage>
      <Header title={"Cards"} shuffle={shuffle}></Header>
      <IonContent>
        <IonGrid>
          <IonRow>
            {data.map((item: IcardData) => {
              return <Card key={item._id} cardData={item} />;
            })}
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Main;
