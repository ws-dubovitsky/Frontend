import React from 'react';
import { Redirect, Route, withRouter } from 'react-router-dom';
import { checkLogin } from '../utils/axios';
import Navbar from '../Navbar';
import Dashboard from './Dashboard';
import Settings from './Settings';

class AppProtected extends React.PureComponent {
  state = {
    isAuthenticated: false,
    loaded: false,
    user: null,
  };

  componentDidMount() {
    this.checkLogin();
  }

  checkLogin = () => checkLogin()
    .then((res) => {
      this.setState({
        loaded: true,
        isAuthenticated: !!res.data._id,
        user: res.data._id ? res.data : null,
      });
    })
    .catch(() => {
      this.setState({
        loaded: true,
        isAuthenticated: false,
      });
    });

  render() {
    const { loaded, isAuthenticated, user } = this.state;
    if (!loaded) return null;
    if (!isAuthenticated) return <Redirect to="/login" />;
    return (
      <>
        {/* <Navbar user={user} /> */}
        <div>
          <Route exact path="/" render={() => <Redirect to="/dashboard" />} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/settings" component={Settings} />
        </div>
        <h1>Footer</h1>
      </>
    );
  }
}

export default withRouter(AppProtected);
