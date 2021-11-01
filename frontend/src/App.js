import React from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom"

import Header from './components/Header';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';


const App = () => {
  return (
    <Router>
      <Header />
      <main>
        <Route path="/" component={HomeScreen} exact/>
        <Route path="/login" component={LoginScreen}/>
      </main>
    </Router>
  );
}

export default App;
