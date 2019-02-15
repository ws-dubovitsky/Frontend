import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import UserForm from "./auth/account/index";
import WeatherTable from "./weather/WeatherApp";
import HistoryApp from "./history/HistoryApp";
import { checkLogin } from "../utils/axios";
import Navbar from '../Navbar'

class AppProtected extends React.PureComponent {
  componentDidMount() {
    checkLogin().catch(() => {
      this.props.history.push(`/login`);
    });
  }

  render() {
    return (
      <>
        <Navbar />
        <Switch>
          <Route
            exact
            path="/main"
            render={() =>
              localStorage.length ? (
                <WeatherTable />
              ) : (
                <Redirect to={{ pathname: "/login" }} />
              )
            }
          />
          <Route
            exact
            path="/history"
            render={() =>
              localStorage.length ? (
                <HistoryApp />
              ) : (
                <Redirect
                  to={{
                    pathname: "/login"
                  }}
                />
              )
            }
          />
          <Route
            exact
            path="/profile"
            render={() =>
              localStorage.length ? (
                <UserForm />
              ) : (
                <Redirect
                  to={{
                    pathname: "/login"
                  }}
                />
              )
            }
          />
        </Switch>
      </>
    );
  }
}

export default AppProtected;
