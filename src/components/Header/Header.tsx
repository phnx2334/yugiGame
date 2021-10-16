import { IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle } from '@ionic/react'
import React from 'react'

interface propsTypes {
    title:string;
}

const Header:React.FC<propsTypes> = (props) => {
    return (
        <IonHeader>
              <IonToolbar>
                <IonButtons slot="start">
                  <IonMenuButton />
                </IonButtons>
                <IonTitle>{props.title}</IonTitle>
              </IonToolbar>
            </IonHeader>
    )
}

export default Header
