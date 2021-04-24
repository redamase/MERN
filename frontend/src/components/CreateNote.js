/** @format */

import React, { Component } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default class CreateNote extends Component {
  state = {
    users: [],
    userSelected: "",
    title: "",
    content: "",
    date: new Date(),
  };

  componentDidMount = async () => {
    const res = await axios.get("http://localhost:4000/api/users");
    this.setState({ users: res.data, userSelected: res.data[0]._id });
  };
  onSubmit = async (e) => {
    //console.log(this.state.title, this.state.content);
    e.preventDefault();
    const newNote = {
      title: this.state.title,
      content: this.state.content,
      date: this.state.date,
      author: this.state.userSelected,
    };
    await axios.post("http://localhost:4000/api/notes", newNote);
    window.location.href = "/";
    //console.log(res);
  };

  onInputChange = (e) => {
    //console.log(e.target.value, e.target.value);
    this.setState({ [e.target.name]: e.target.value });
  };

  onChangeDate = (date) => {
    this.setState({ date });
  };

  render() {
    return (
      <div className='col-md-6 offset-md-3'>
        <div className='card card-body'>
          <h4>Crea una tarea</h4>
          <form onSubmit={this.onSubmit}>
            {/* select user */}
            <div className='form-group'>
              <select
                className='form-control'
                name='userSelected'
                onChange={this.onInputChange}>
                {this.state.users.map((user) => (
                  <option key={user._id} value={user._id}>
                    {user.username}
                  </option>
                ))}
              </select>
            </div>
            <div className='form-group'>
              <input
                type='text'
                className='form-control'
                placeholder='Titulo'
                name='title'
                onChange={this.onInputChange}
                required
              />
            </div>
            <div className='form-group'>
              <textarea
                name='content'
                className='form-control'
                placeholder='Contenido'
                onChange={this.onInputChange}
                required></textarea>
            </div>
            <div className='form-group'>
              <DatePicker
                className='form-control'
                selected={this.state.date}
                onChange={this.onChangeDate}></DatePicker>
            </div>
            <button type='submit' className='btn btn-primary'>
              Guardar
            </button>
          </form>
        </div>
      </div>
    );
  }
}
