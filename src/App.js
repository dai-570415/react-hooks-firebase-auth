import React from 'react';
import './assets/css/App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import PrivateRoute from './auth/PrivateRoute';
import { AuthProvider } from './auth/AuthProvider';
import Home from './components/Home';
import Signin from './auth/Signin';
import Signup from './auth/Signup';
  
const App = () => {
  return (
    <div className="container">
      <AuthProvider>
        <Router>
          <PrivateRoute exact path="/" component={ Home } />
          <Route exact path="/signin" component={ Signin } />
          <Route exact path="/signup" component={ Signup } />
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
