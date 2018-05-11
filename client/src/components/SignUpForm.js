import React from 'react';
// import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import { Modal, Button, FormGroup, FormControl, HelpBlock} from "react-bootstrap";
import Navbar from "../components/Navbar.js";
import "./index.css";


const SignUpForm = ({
    onSubmit,
    onChange,
    errors,
    user,
}) => (

<div>
    <Navbar/>

<div className="static-modal">
<Modal.Dialog>
<Modal.Header>
<Modal.Title>CREATE A NEW ACCOUNT</Modal.Title>
</Modal.Header>


<Modal.Body>

<FormGroup>
<form action="/">
{errors.summary && <p className="error-message">{errors.summary}</p>}
<div className="field-line">
<FormControl
placeholder="NAME"
type="name"
name="name"
errortext={errors.name}
onChange={onChange}
value={user.name}
/>
</div>
<br/>
<div className="field-line">
<FormControl
placeholder="EMAIL"
type="email"
name="email"
errortext={errors.email}
onChange={onChange}
value={user.email}
/>
</div>
<br/>

<div className="field-line">
<FormControl
placeholder="PASSWORD"
type="password"
name="password"
onChange={onChange}
errortext={errors.password}
value={user.password}
/>
</div>
<br/>

</form>
</FormGroup>
</Modal.Body>
<Modal.Footer>
    <Button bsStyle="primary" type="submit"  onClick={onSubmit}>CREATE A NEW ACCOUNT</Button>
   <Link to ={"/login"}><Button bsStyle="default" active type="submit">LOGIN</Button></Link>
   <br/>
  <br/>
    <HelpBlock>Already have an account? Login here.</HelpBlock>    
</Modal.Footer>

</Modal.Dialog>

</div>
</div>

);




export default SignUpForm; 