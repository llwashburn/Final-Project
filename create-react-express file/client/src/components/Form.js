import React, { Component } from "react";
import API from "../utils/API";
import "./index.css";
import {Button, FormGroup, FormControl} from "react-bootstrap";
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
      <FormGroup>
        <FormControl input
          value={this.state.name}
          onChange={this.handleInputChange}
          name = "name"
          type="text"
          placeholder="Name"
        />
        <FormControl input
          value={this.state.email}
          onChange={this.handleInputChange}
          name = "email"
          type="text"
          placeholder="Email"
        />
        <FormControl input
          value={this.state.subject}
          onChange={this.handleInputChange}
          name = "subject"
          type="text"
          placeholder="Subject"
        />
        <FormControl input
          value={this.state.message}
          onChange={this.handleInputChange}
          name = "message"
          type="text"
          placeholder="Message"
        />

        <Button bsStyle="primary" onClick={this.handleFormSubmit}>Submit</Button>
        </FormGroup>
      </form>
    </div>;
  }
}

export default Form;
