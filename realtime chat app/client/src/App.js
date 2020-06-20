import React from "react";

import { BrowserRouter as Router, Route } from "react-router-dom";

import Join from "./components/Join";
import Chat from "./components/Chat";

// Routing page first lands with message in {Join} then redirected to chat component
const App = () => (
  <Router>
    <Route path="/" exact component={Join} />
    <Route path="/chat" component={Chat} />
  </Router>
);

export default App;
