import React from "react";
import Proptypes from "prop-types";
import {   ButtonToolbar, Modal, Button, Form, FormControl} from "react-bootstrap";
import FitnessProgram from "../components/Schedule.js";
import Schedule from "../components/Schedule.js";


const Dashboard = ({ secretData, user}) => (
    
    <div className="static-modal">
    <Modal.Dialog>
    <Modal.Header>
    <Modal.Title>Client Profile Page</Modal.Title>
    </Modal.Header>
    
    <Modal.Body>
    <div className ="container">
    <FormControl
    title="Client Profile Page"
    subtitle="You should get access to this page only after authentication."
    />
    {/* {secretData && <h5 style ={{ fontSize: "16px", color: "gray"}}>Welcome <strong>{user.name}</strong>!<br/>{secretData}</h5>} */}

    {/* <FitnessProgram/><Schedule/> */}
   
   </div>
    </Modal.Body>

    <Modal.Footer>
        <ButtonToolbar>
        < Button href = "https://venmo.com/Leslie-Washburn-3">PAY HERE</Button>
        <Button>LOGOUT</Button>
        </ButtonToolbar>
    </Modal.Footer>
    </Modal.Dialog>
    </div>
);
    Dashboard.Proptypes= {
        secretData: Proptypes.string.isRequired
};


export default Dashboard;
