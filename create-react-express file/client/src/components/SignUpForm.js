import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import { Modal, Form, Button, FormGroup, FormControl, HelpBlock} from "react-bootstrap";
import "./index.css";


const SignUpForm = ({
    onSubmit,
    onChange,
    errors,
    user,
}) => (

<div className="static-modal">
<Modal.Dialog>
<Modal.Header>
<Modal.Title>Create a new Account</Modal.Title>
</Modal.Header>


<Modal.Body>

<FormGroup>
<form action="/" onSubmit={onSubmit}>
{errors.summary && <p className="error-message">{errors.summary}</p>}
<div className="field-line">
<FormControl
placeholder="Name"
type="name"
name="name"
errortext={errors.name}
onChange={onChange}
value={user.name}
/>
</div>

<div className="field-line">
<FormControl
placeholder="Email"
type="email"
name="email"
errortext={errors.email}
onChange={onChange}
value={user.email}
/>
</div>


<div className="field-line">
<FormControl
placeholder="Password"
type="password"
name="password"
onChange={onChange}
errortext={errors.password}
value={user.password}
/>
</div>

{/* < div className = "field-line" >
<FormControl
placeholder = "Phone"
type = "phone"
name = "phone"
onChange = {onChange}
errortext = {errors.phone}
value = {user.phone}
/> 
</div> */}



</form>
</FormGroup>
</Modal.Body>
<Modal.Footer>
    <Button bsStyle="primary" type="submit">CREATE A NEW ACCOUNT</Button>
   <Button bsStyle="default" active type="submit"><Link to={"/loginpage"}>Login</Link></Button>
    <HelpBlock>Already have an account?</HelpBlock>    
</Modal.Footer>





</Modal.Dialog>
</div>

);




export default SignUpForm; 