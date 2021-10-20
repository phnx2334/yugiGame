import { IonRouterOutlet, IonSplitPane } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { Redirect, Route } from "react-router-dom";
import Menu from "./components/Menu";
import React from "react";
import Main from "./pages/Main";
import CRUD from "./components/CRUD/CRUD";
import CRUDDelete from "./components/CRUD/CRUDDelete";

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
            <Main />
          </Route>
          <Route path="/page/crud" exact={true}>
            <CRUD />
          </Route>
          <Route path="/page/crudDel" exact={true}>
            <CRUDDelete />
          </Route>
        </IonRouterOutlet>
      </IonSplitPane>
    </IonReactRouter>
  );
};

export default Routes;
