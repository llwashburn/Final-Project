import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import { Button, Modal,FormGroup, FormControl} from "react-bootstrap";
import Navbar from "../components/Navbar.js";
import "./index.css";


const LoginForm = ({
    onSubmit,
    onChange,
    errors,
    successMessage,
    user,
    toggleAuthenicateStatus
}) => (
<div>
    <Navbar/>

<div className="static-modal">
<Modal.Dialog>
    <Modal.Header>
        <Modal.Title>LOGIN</Modal.Title>
    </Modal.Header>


<Modal.Body>
<FormGroup>
    <form action = "/">
    {successMessage && < p className = "success-message" > {successMessage} </p>} 
    {errors.summary && < p className = "error-message" > {errors.summary} </p>}

<div className="field-line">
<FormControl
placeholder="EMAIL"
name="email"
errortext={errors.email}
onChange={onChange}
value={user.email}
/>
</div>
<br/>
< div className = "field-line" >
<FormControl
placeholder = "PASSWORD"
name = "password"
errortext = {errors.password}
onChange = {onChange}
value = {user.password}
/> 
</div>

</form>
</FormGroup>
</Modal.Body>

<Modal.Footer>
<Button bsstyle="primary" type="button" label="close">CLOSE</Button>
<Button bsstyle="primary" type="submit" label="login" onClick={onSubmit}>LOGIN</Button>
<Link to={"/signUp"}><Button bstyle="primary" type="button" label="signup">SIGN UP</Button></Link>
</Modal.Footer>
</Modal.Dialog>
</div>

 


</div>
);


LoginForm.propTypes= {
    onSubmit: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired,
    successMessage: PropTypes.string.isRequired,
    user: PropTypes.object.isRequired
}; 



export default LoginForm;