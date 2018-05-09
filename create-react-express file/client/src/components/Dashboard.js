import React from "react";
import Proptypes from "prop-types";
import {  Form, FormControl} from "react-bootstrap";


const Dashboard = ({ secretData, user}) => (
    <Form className ="container">
    <FormControl
    title="Client Profile Page"
    subtitle="You should get access to this page only after authentication."
    />
    {/* {secretData && <Text style ={{ fontSize: "16px", color: "teal"}}>Welcome <strong>{user.name}</strong>!<br/>{secretData}</Text>} */}
    </Form>
);
    Dashboard.Proptypes= {
        secretData: Proptypes.string.isRequired
};



export default Dashboard;
