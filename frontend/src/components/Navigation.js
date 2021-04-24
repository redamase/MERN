/** @format */

import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navigation extends Component {
  render() {
    return (
      <nav className='navbar navbar-expand-md navbar-dark bg-dark'>
        <div className='container'>
          <Link className='navbar-brand' to='/'>
            App de tareas
          </Link>
          <button
            className='navbar-toggler'
            type='button'
            data-toggle='collapse'
            data-target='#navbarNav'
            aria-controls='navbarNav'
            aria-expanded='false'
            aria-label='Toggle navigation'>
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarNav'>
            <ul className='navbar-nav ml-auto'>
              <li className='nav-item active'>
                <Link className='nav-link' to='/'>
                  Tareas
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='/create-notes'>
                  Crear Tarea
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='/create-user'>
                  Crear Usuario
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
