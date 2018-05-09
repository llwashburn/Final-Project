import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import { Button, FormGroup, FormControl} from "react-bootstrap";
import "./index.css";



const LoginForm = ({
    onSubmit,
    onChange,
    errors,
    successMessage,
    user,
    toggleAuthenicateStatus
}) => (
<FormGroup className="container">
<form action="/" onSubmit={onSubmit}>
<h2 className ="card-title">Login</h2>

{successMessage && <p className="success-message">{successMessage}</p>}
{errors.summary && <p className ="error-message">{errors.summary}</p>}
       
       
<div className ="field-line">
<FormControl
placeholder="Email"
name="email"
errortext={errors.email}
onChange={onChange}
value={user.email}
/>
</div>

< div className = "field-line" >
<FormControl
placeholder = "Password"
name = "password"
errortext = {errors.password}
onChange = {onChange}
value = {user.password}
/> 
</div>


<div className="button">
<Button type="submit" label= "Login" primary ="true"/>
</div>

<div>Don't have an account? <Link to={"/signup"}>Create one</Link></div>
</form>
</FormGroup>
);

    

LoginForm.propTypes= {
    onSubmit: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired,
    successMessage: PropTypes.string.isRequired,
    user: PropTypes.object.isRequired
}; 



export default LoginForm;