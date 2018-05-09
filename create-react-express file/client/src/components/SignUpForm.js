import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {Form, Button, FormGroup, FormControl, HelpBlock} from "react-bootstrap";
import "./index.css";


const SignUpForm = ({
    onSubmit,
    onChange,
    errors,
    user,
}) => (

<FormGroup>
<form action="/" onSubmit={onSubmit}>
<h2 className="card-heading">Sign Up</h2>

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

<div className="button-line">
<Button type="submit" label="Create New Account" primary='true'/>
</div>


<HelpBlock>Already have an account? <Link to={"/loginpage"}>Login</Link></HelpBlock>


</form>
</FormGroup>

);




export default SignUpForm; 