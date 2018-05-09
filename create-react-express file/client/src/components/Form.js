import React, { Component } from "react";
import API from "../utils/API";
import "./index.css";

class Form extends Component {
  state = {
    name: "",
    email: "",
    subject: "",
    message: ""
  };

  // componentDidMount() {
  //   this.loadForm();
  // }

  // loadForm = () => {
  //   API.getForm()
  //     .then(res => this.setState({form: res.data, 
  //         name: "",
  //         email: "",
  //         subject: "",
  //         message: ""
  //     })
  //   )
  //     .catch(err => console.log(err));
  // };

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    const{name, value} = event.target;
    this.setState({
      [name]:value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (!this.state.name || !this.state.email || !this.state.subject || !this.state.message) {
      alert("All fields must be completed");
    }
    //console.log(this.state);
    API.sendForm(this.state)
      .then(res => {
        this.setState({
          name: "",
          email: "",
          subject: "",
          message: ""
        });
      })

    
  };

  render() {
    return  <div>
      {/* <p>Contact form {this.state.name}</p> */}
      <form className="form">
        <input
          value={this.state.name}
          onChange={this.handleInputChange}
          name = "name"
          type="text"
          placeholder="Name"
        />
        <input
          value={this.state.email}
          onChange={this.handleInputChange}
          name = "email"
          type="text"
          placeholder="Email"
        />
        <input
          value={this.state.subject}
          onChange={this.handleInputChange}
          name = "subject"
          type="text"
          placeholder="Subject"
        />
        <input
          value={this.state.message}
          onChange={this.handleInputChange}
          name = "message"
          type="text"
          placeholder="Message"
        />

        <button onClick={this.handleFormSubmit}>Submit</button>
      </form>
    </div>;
  }
}

export default Form;
