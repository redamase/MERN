/** @format */

import React, { Component } from "react";
import axios from "axios";
import { format } from "timeago.js";
import { Link } from "react-router-dom";

export default class NotesList extends Component {
  state = { users: [], homeworks: [] };
  componentDidMount = async () => {
    this.getHomeworks();
    // const users = await axios.get(\"http://localhost:4000/api/")
  };

  deleteHomework = async (id) => {
    const res = await axios.delete("http://localhost:4000/api/notes/" + id);
    console.log(res);
    this.getHomeworks();
  };

  getHomeworks = async () => {
    const res = await axios.get("http://localhost:4000/api/notes");
    this.setState({ homeworks: res.data });
  };

  render() {
    return (
      <div className='row'>
        {this.state.homeworks.map((homework) => (
          <div className='col-md-4 p-2' key={homework._id}>
            <div className='card'>
              <div className='card-header d-flex justify-content-between'>
                <h5>{homework.title}</h5>
                <Link
                  className='btn btn-secondary'
                  to={"/edit/" + homework._id}>
                  Editar
                </Link>
              </div>
              <div className='card-body'>
                <p>{homework.content}</p>
                <p>{format(homework.date)}</p>
                <div className='card-footer'>
                  <button
                    className='btn btn-danger'
                    onClick={() => this.deleteHomework(homework._id)}>
                    Eliminar
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
