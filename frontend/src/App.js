/** @format */

//import logo from "./logo.svg";
import React from "react";
import { BrowserRouter as BR, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navigation from "./components/Navigation";
import CreateNote from "./components/CreateNote";
import CreateUser from "./components/CreateUser";
import NotesList from "./components/NotesList";
function App() {
  return (
    <BR>
      <Navigation />
      <div className='container p-4'>
        <Route path='/' component={NotesList} exact />
        <Route path='/edit:id' component={CreateNote} />
        <Route path='/create-notes' component={CreateNote} />
        <Route path='/create-user' component={CreateUser} />
      </div>
    </BR>
  );
}

export default App;
