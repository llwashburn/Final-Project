import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import { Button, Modal,FormGroup, FormControl} from "react-bootstrap";
import "./index.css";


const LoginForm = ({
    onSubmit,
    onChange,
    errors,
    successMessage,
    user,
    toggleAuthenicateStatus
}) => (


<div className="static-modal">
<Modal.Dialog>
    <Modal.Header>
        <Modal.Title>Login</Modal.Title>
    </Modal.Header>


<Modal.Body>
<FormGroup>
    <form action = "/"onSubmit = {onSubmit}>
    {successMessage && < p className = "success-message" > {successMessage} </p>} 
    {errors.summary && < p className = "error-message" > {errors.summary} </p>}

<div className="field-line">
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

</form>
</FormGroup>
</Modal.Body>

<Modal.Footer>
<Button>CLOSE</Button>
<Button bsStyle="large">LOGIN</Button>
</Modal.Footer>
</Modal.Dialog>
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