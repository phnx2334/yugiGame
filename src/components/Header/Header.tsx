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
}

const Header: React.FC<propsTypes> = (props) => {
  return (
    <IonHeader>
      <IonToolbar>
        <IonButtons slot="start">
          <IonMenuButton />
        </IonButtons>
        <IonButtons slot="end">
          {props.title === "Cards" && <IonButton
            onClick={() => {
              window.location.reload();
            }}
            shape="round"
            fill="outline"
            color="primary"
          >
            Shuffle
          </IonButton>}
        </IonButtons>
        <IonTitle>{props.title}</IonTitle>
      </IonToolbar>
    </IonHeader>
  );
};

export default Header;
