import React, { Component } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

export default class UpData extends Component {
 

  render() {
    // {console.log(this.props.selectedInfo)}
    return (
    
      <div>
        <form onSubmit={this.props.saveInfo}>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              name="name"
              defaultValue={this.props.selectedInfo.name}
              />
          </div>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              name="email"
               defaultValue={this.props.selectedInfo.email}/>
             
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              name="password"
              defaultValue={this.props.selectedInfo.password}

              />
          </div>
          <div className="mb-3">
            <label className="form-label">Role</label>
            <input
              type="text"
              className="form-control"
              name="role"
              defaultValue={this.props.selectedInfo.role}

              />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
  
}