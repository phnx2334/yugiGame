import {
  IonHeader,
  IonToolbar,
  IonButtons,
  IonMenuButton,
  IonTitle,
  IonButton,
} from "@ionic/react";
import React from "react";

interface propsTypes {
  title: string;
  shuffle?: () => void;
}

const Header: React.FC<propsTypes> = (props) => {
  return (
    <IonHeader>
      <IonToolbar>
        <IonButtons slot="start">
          <IonMenuButton />
        </IonButtons>
        <IonButtons slot="end">
          {props.title === "Cards" && (
            <IonButton
              onClick={() => props.shuffle && props.shuffle()}
              shape="round"
              fill="solid"
              color="warning"
            >
              Shuffle
            </IonButton>
          )}
        </IonButtons>
        <IonTitle>{props.title}</IonTitle>
      </IonToolbar>
    </IonHeader>
  );
};

export default Header;
