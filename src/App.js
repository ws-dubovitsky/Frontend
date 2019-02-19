import React from "react";
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import AppProtected from "./pages/AppProtected";

export default class App extends React.Component {
 
  render() {
    return (
      <BrowserRouter>
        <Switch>
           <Route
            path="/"
            component={AppProtected}
          />
        </Switch>
      </BrowserRouter>
    ) 
  }
}
