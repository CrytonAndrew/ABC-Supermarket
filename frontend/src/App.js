import React from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom"

import HomeScreen from './screens/HomeScreen';

const App = () => {
  return (
    <Router>
      <main>
        <Route path="/" component={HomeScreen} exact/>
      </main>
    </Router>
  );
}

export default App;
