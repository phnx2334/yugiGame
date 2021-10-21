import {
  IonContent,
  IonItem,
  IonInput,
  IonItemDivider,
  IonList,
  IonPage,
  IonImg,
  IonButton,
  IonTextarea,
} from "@ionic/react";
import React, { useState } from "react";
import Header from "../Header/Header";
import imgTypes from "../../types/CardImageTypes";
import "./CRUD.css";
import { addCard } from "../../api/mongo";
import { IcardData } from "../../types/card";

interface image {
  image: null | string;
  base: string | ArrayBuffer | null;
}

const CRUD: React.FC = () => {
  const [title, setTitle] = useState<string>();
  const [type, setType] = useState<string>();
  const [difficulty, setDifficulty] = useState<number>();
  const [image, setImage] = useState<image>({
    image: null,
    base: null,
  });
  const [hability, setHability] = useState<string>();
  const [description, setDescription] = useState<string>();
  const [attack, setAttack] = useState<number>();
  const [defense, setDefense] = useState<number>();
  const [copyright, setCopyright] = useState<string>();

  const keys = Object.keys(imgTypes);

  const onFileUpload = (event: any) => {
    if (event.target.files && event.target.files[0]) {
      const img = event.target.files[0];

      const reader = new FileReader();

      reader.onloadend = function () {
        setImage({
          ...image,
          image: URL.createObjectURL(img),
          base: reader.result,
        });
      };
      reader.readAsDataURL(img);
    }
  };

  const onSubmit = async () => {
    if (
      title &&
      type &&
      difficulty &&
      image &&
      hability &&
      description &&
      attack &&
      defense &&
      copyright
    ) {
      const body: IcardData = {
        title: title,
        type: type,
        starCount: difficulty,
        imageRoute: image.base,
        edition: "1st Edition",
        code: "SDY-006",
        hability: hability,
        description: description,
        atk: attack,
        def: defense,
        numberCode: Date.now().toString(),
        copyright: `©2021 ${copyright}`,
      };
      await addCard(body);

      setTitle("");
      setType("");
      setDifficulty(undefined);
      setImage({ image: null, base: null });
      setHability("");
      setDescription("");
      setAttack(undefined);
      setDefense(undefined);
      setCopyright("");
    }
  };

  return (
    <IonPage>
      <Header title={"CRUD"}></Header>
      <IonContent className="crud-container">
        <IonList>
          <IonItemDivider>Title</IonItemDivider>
          <IonItem>
            <IonInput
              clearInput
              value={title}
              placeholder="Place a cool title for the challenge!"
              onIonChange={(e) => setTitle(e.detail.value!)}
            ></IonInput>
          </IonItem>
          <IonItemDivider>Type</IonItemDivider>

          <div className="card-types-list">
            {keys.map((key, index) => {
              return (
                <IonButton
                  key={key}
                  className="type-button"
                  fill={key === type ? "outline" : "clear"}
                  onClick={() => setType(key)}
                >
                  <IonImg src={imgTypes[key]} className="img-type" />
                </IonButton>
              );
            })}
          </div>

          <IonItemDivider>Difficulty</IonItemDivider>
          <IonItem>
            <IonInput
              clearInput
              type="number"
              value={difficulty}
              placeholder="How hard is this gonna be?"
              onIonChange={(e) => setDifficulty(parseInt(e.detail.value!, 10))}
            ></IonInput>
          </IonItem>

          <IonItemDivider>Image</IonItemDivider>
          <div className="image-load">
            <div>
              {image.image ? (
                <object
                  id="svgimg"
                  data={image.image}
                  type="image/svg+xml"
                >CardImage</object>
              ) : (
                <div className="img-frame" role="img"></div>
              )}
            </div>

            <>
              <input
                id="inputFile"
                hidden
                type="file"
                accept="image/*"
                onChange={(e) => onFileUpload(e)}
              />
              <IonButton
                color="primary"
                onClick={() => {
                  document.getElementById("inputFile")?.click();
                }}
              >
                Upload image
              </IonButton>
            </>
          </div>

          <IonItemDivider>Hability</IonItemDivider>
          <IonItem>
            <IonInput
              clearInput
              value={hability}
              placeholder="What kind of challenge is this?"
              onIonChange={(e) => setHability(e.detail.value!)}
            ></IonInput>
          </IonItem>

          <IonItemDivider>Description</IonItemDivider>
          <IonItem>
            <IonTextarea
              value={description}
              placeholder="Describe the challenge"
              onIonChange={(e) => setDescription(e.detail.value!)}
            ></IonTextarea>
          </IonItem>

          <IonItemDivider>Attack</IonItemDivider>
          <IonItem>
            <IonInput
              clearInput
              type="number"
              value={attack}
              placeholder="Enter Number"
              onIonChange={(e) => setAttack(parseInt(e.detail.value!, 10))}
            ></IonInput>
          </IonItem>

          <IonItemDivider>Defense</IonItemDivider>
          <IonItem>
            <IonInput
              clearInput
              type="number"
              value={defense}
              placeholder="Enter Number"
              onIonChange={(e) => setDefense(parseInt(e.detail.value!, 10))}
            ></IonInput>
          </IonItem>

          <IonItemDivider>Copyright</IonItemDivider>
          <IonItem>
            <IonInput
              value={copyright}
              placeholder="Place your name here"
              onIonChange={(e) => setCopyright(e.detail.value!)}
            ></IonInput>
          </IonItem>
        </IonList>

        <IonButton id="submitButton" onClick={() => onSubmit()}>
          Save Challenge
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default CRUD;
