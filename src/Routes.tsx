import { IonRouterOutlet, IonSplitPane } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { Redirect, Route } from "react-router-dom";
import Menu from "./components/Menu";
import React from "react";
import Header from "./components/Header/Header";
import Main from "./pages/Main";
import CRUD from "./components/CRUD/CRUD";

const Routes: React.FC = (): JSX.Element => {
  return (
    <IonReactRouter>
      <IonSplitPane contentId="main">
        <Menu />

        <IonRouterOutlet id="main">
          <Route path="/" exact={true}>
            <Redirect to="/page/cards" />
          </Route>
          <Route path="/page/cards" exact={true}>
            <Header title="Cards" />
            <Main />
          </Route>
          <Route path="/page/crud" exact={true}>
            <Header title="CRUD" />
            <CRUD />
          </Route>
        </IonRouterOutlet>
      </IonSplitPane>
    </IonReactRouter>
  );
};

export default Routes;
