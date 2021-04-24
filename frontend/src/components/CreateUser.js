/** @format */

import React, { Component } from "react";
import axios from "axios";

// function ValidaUsuarios(props) {
//   const usuarios = props.usuarios;
//   console.log(usuarios.length);
//   if (usuarios.length > 0) {
//     return props.usuarios.map((user) => (
//       <div className='col-md-8'>
//         <ul className='list-group'>
//           <li className='list-group-item list-group-item-action' key={user._id}>
//             {user.username}
//           </li>
//         </ul>
//       </div>
//     ));
//   } else {
//     return (
//       <div className='alert alert-danger col-md-4'>
//         No se han encontrado usuarios.
//       </div>
//     );
//   }
// }
export default class CreateUser extends Component {
  state = { users: [], username: "" };

  async componentDidMount() {
    this.getUsers();
  }
  onChangeUsername = (e) => {
    this.setState({ username: e.target.value });
  };

  getUsers = async () => {
    const res = await axios.get("http://localhost:4000/api/users");
    this.setState({ users: res.data });
    //console.log(res.data);
  };

  onSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post("http://localhost:4000/api/users", {
      username: this.state.username,
    });
    this.getUsers();
    this.setState({ username: "" });
  };

  deleteUser = async (id) => {
    const res = await axios.delete("http://localhost:4000/api/users/" + id);
    this.getUsers();
  };

  render() {
    return (
      <div className='row ml-auto'>
        <div className='col-md-4'>
          <div className='card card-body'>
            <h3>Crea un nuevo usuario</h3>
            <form onSubmit={this.onSubmit}>
              <div className='form-group'>
                <input
                  type='text'
                  className='form-control'
                  value={this.state.username}
                  onChange={this.onChangeUsername}
                />
              </div>
              <button type='submit' className='btn btn-primary'>
                Guardar
              </button>
            </form>
          </div>
        </div>
        {/* <ValidaUsuarios usuarios={this.state.users}></ValidaUsuarios> */}
        <div className='col-md-8'>
          <ul className='list-group'>
            {this.state.users.map((user) => (
              <li
                onDoubleClick={() => this.deleteUser(user._id)}
                className='list-group-item list-group-item-action'
                key={user._id}>
                {user.username}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
