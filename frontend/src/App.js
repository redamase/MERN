/** @format */

import logo from "./logo.svg";
import React from "react";
import { BrowserRouter as BR, Route } from "react-router-dom";
import "./App.css";
import Navigation from "./components/Navigation";
import CreateNote from "./components/CreateNote";
import CreateUser from "./components/CreateUser";
import NotesList from "./components/NotesList";
function App() {
  return (
    <BR>
      <Navigation />
      <Route path='/' component={NotesList} exact />
      <Route path='/edit:id' component={CreateNote} />
      <Route path='/create' component={CreateNote} />
      <Route path='/user' component={CreateUser} />
    </BR>
  );
}

export default App;
