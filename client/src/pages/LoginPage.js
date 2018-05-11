import React from "react";
import PropTypes from "prop-types";
import Auth from "../utils/Auth";
import LoginForm from "../components/LoginForm.js";
import API from "../utils/API";


class LoginPage extends React.Component {


    state ={
        errors: {},
        successMessage: "",
        user:{
            email: "",
            password: ""
        }
    }
    

componentDidMount() {
    const storedMessage = localStorage.getItem("successMessage");
    let successMessage = "";

    if (storedMessage) {
        successMessage = storedMessage;
        localStorage.removeItem("successMessage");
    }
    this.setState({ successMessage});
}
 /**Process the login form 
 *
 * 
* @param {object} event 
*/

processForm = event => {
    event.preventDefault();

    //create a string for the HTTP body message
    const {email, password } = this.state.user;

    //const formData = "email=${email"}&password=${password}";
    API.login({email, password}).then(res => {
        //change the component-container state
        //save the token
        console.log('loggedin', res.data.token)
        Auth.authenticateUser(res.data.token);

        //update authenticated state
        this.props.toggleAuthenticateStatus()

        //redirect signed in user to dashboard
        this.props.history.push("/dashboard");
        // this.setState({
        //     error: {}
        // });
    })
    .catch( ({response}) => {
        console.log('error', response)
        const errors = response.data.errors ? response.data.errors : {};
        errors.summary = response.data.message;

        this.setState({
            errors
        });
    });
}

/**change the user object
*
*
*@param {object} event
*/

changeUser = event => {
const field = event.target.name;
const user = this.state.user;
user[field] = event.target.value;

this.setState({
    user
});
}


//Render the component
    render() {
        return (
    <LoginForm
    onSubmit={this.processForm}
    onChange={this.changeUser}
    errors={this.state.errors}
    successMessage={this.state.successMessage}
    user={this.state.user}
    />
    );
}
}

LoginPage.contextTypes= {
    router: PropTypes.object.isRequired
};



export default LoginPage;


