import {
  IonContent,
  IonItem,
  IonLabel,
  IonInput,
  IonItemDivider,
  IonList,
} from "@ionic/react";
import React, { useState } from "react";

const CRUD: React.FC = () => {
  const [text, setText] = useState<string>();
  const [number, setNumber] = useState<number>();
  return (
    <IonContent>
      <IonList>
        <IonItemDivider>Title</IonItemDivider>
        <IonItem>
          <IonInput
            clearInput
            value={text}
            placeholder="Enter Input"
            onIonChange={(e) => setText(e.detail.value!)}
          ></IonInput>
        </IonItem>
        <IonItemDivider>Type</IonItemDivider>
        <IonItem>
          <IonInput
            clearInput
            value={text}
            placeholder="Enter Input"
            onIonChange={(e) => setText(e.detail.value!)}
          ></IonInput>
        </IonItem>

        <IonItemDivider>Difficulty</IonItemDivider>
        <IonItem>
          <IonInput
            clearInput
            type="number"
            value={number}
            placeholder="Enter Number"
            onIonChange={(e) => setNumber(parseInt(e.detail.value!, 10))}
          ></IonInput>
        </IonItem>

        <IonItemDivider>Image</IonItemDivider>
        <IonItem>
          <IonInput
            clearInput
            value={text}
            placeholder="Enter Input"
            onIonChange={(e) => setText(e.detail.value!)}
          ></IonInput>
        </IonItem>

        <IonItemDivider>Edition</IonItemDivider>
        <IonItem>
          <IonInput
            disabled
            value={text}
            placeholder="Enter Input"
            onIonChange={(e) => setText(e.detail.value!)}
          ></IonInput>
        </IonItem>

        <IonItemDivider>Code</IonItemDivider>
        <IonItem>
          <IonInput
            disabled
            value={text}
            placeholder="Enter Input"
            onIonChange={(e) => setText(e.detail.value!)}
          ></IonInput>
        </IonItem>

        <IonItemDivider>Hability</IonItemDivider>
        <IonItem>
          <IonInput
            clearInput
            value={text}
            placeholder="Enter Input"
            onIonChange={(e) => setText(e.detail.value!)}
          ></IonInput>
        </IonItem>

        <IonItemDivider>Description</IonItemDivider>
        <IonItem>
          <IonInput
            clearInput
            value={text}
            placeholder="Enter Input"
            onIonChange={(e) => setText(e.detail.value!)}
          ></IonInput>
        </IonItem>

        <IonItemDivider>Attack</IonItemDivider>
        <IonItem>
          <IonInput
            clearInput
            type="number"
            value={number}
            placeholder="Enter Number"
            onIonChange={(e) => setNumber(parseInt(e.detail.value!, 10))}
          ></IonInput>
        </IonItem>

        <IonItemDivider>Defense</IonItemDivider>
        <IonItem>
          <IonInput
            clearInput
            type="number"
            value={number}
            placeholder="Enter Number"
            onIonChange={(e) => setNumber(parseInt(e.detail.value!, 10))}
          ></IonInput>
        </IonItem>

        <IonItemDivider>Number</IonItemDivider>
        <IonItem>
          <IonInput
            disabled
            value={text}
            placeholder="Enter Input"
            onIonChange={(e) => setText(e.detail.value!)}
          ></IonInput>
        </IonItem>

        <IonItemDivider>Copyright</IonItemDivider>
        <IonItem>
          <IonInput
            disabled
            value={text}
            placeholder="Enter Input"
            onIonChange={(e) => setText(e.detail.value!)}
          ></IonInput>
        </IonItem>
      </IonList>
    </IonContent>
  );
};

export default CRUD;
