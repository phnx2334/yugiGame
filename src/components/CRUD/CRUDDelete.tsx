import {
  IonContent,
  IonList,
  IonItem,
  IonLabel,
  IonPage,
  IonIcon,
  useIonToast
} from "@ionic/react";
import { trashBinSharp, trashBinOutline } from "ionicons/icons";
import React, { useState, useEffect } from "react";
import { IcardData } from "../../types/card";
import Header from "../Header/Header";

const CRUDDelete = () => {
  const [cards, setCards] = useState([]);
  const [present, dismiss] = useIonToast();

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

      setCards(data);
    } catch (error) {
      console.log("error obtaining cards", error);
    }
  };

  const deleteCard = async (card: IcardData) => {
    let response;

    const config = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      response = await fetch(
        `https://yugi-api.herokuapp.com/cards/${card._id}`,
        config
      );

      const data = await response;

      if (data.status === 202) {
        const filtered = cards.filter((c: IcardData) => {
          return c._id !== card._id;
        });

        setCards(filtered);
        present({
          position:"middle",
          message: 'The card was deleted!',
          duration:1000,
          cssClass:"toast"
        })
        setTimeout(() => {
          window.location.reload()
        }, 1000);
      }
    } catch (error) {
      console.log("error obtaining cards", error);
    }
  };

  useEffect(() => {
    getCards();
  }, []);

  return (
    <IonPage>
      <Header title={"Delete Cards"}></Header>
      <IonContent>
        <IonList>
          {cards.length > 0 &&
            cards.map((card: IcardData) => {
              return (
                <IonItem key={card._id}>
                  <IonLabel>{card.title}</IonLabel>
                  <IonIcon
                    slot="end"
                    ios={trashBinOutline}
                    md={trashBinSharp}
                    onClick={() => deleteCard(card)}
                  />
                </IonItem>
              );
            })}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default CRUDDelete;
