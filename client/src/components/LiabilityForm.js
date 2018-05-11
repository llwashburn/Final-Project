import React from "react";
import { Button } from "react-bootstrap";
import { Collapse } from "react-bootstrap";
import { Well } from "react-bootstrap";




class LiabilityForm extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      open: false
    };
  }

  render() {
    return <div>
        <Button onClick={() => this.setState({ open: !this.state.open })}>
         Liability Form
        </Button>
        <Collapse in={this.state.open}>
          <div>
            <Well>
              <div>
                <h3 className="text-center">Fitness Schedule</h3>
                 <p>
                    
                      Health & Fitness LiabilityWaiver / Informed Consent Form
“I, _______________________________, have enrolled in the health and fitness program offered through PE 4 Moms and Elizabeth Ricks. I recognize that the program may involve strenuous physical activity including, but not limited to, muscle strength and endurance training, cardiovascular conditioning and training, and other various fitness activities. I hereby affirm that I am in good physical condition and do not suffer from any known disability or condition which would prevent or limit my participation in this exercise program. I acknowledge that my enrollment and subsequent participation in purely voluntary and in no way mandated by Elizabeth Ricks.”
“In consideration of my participation in this program, I, _________________________, hereby release Elizabeth Ricks from any claims, demands, and causes of action as a result of my voluntary participation and enrollment.”
“ I fully understand that I may injure myself as a result of my enrollment and subsequent participation in this program and I, ___________________________________, hereby release Elizabeth Ricks from any liability now or in the future for conditions that I may obtain. These conditions may include, but are not limited to, heart attacks, muscle strains, muscle pulls, muscle tears, broken bones, shin splints, heat prostration, injuries to knees, injuries to back, injuries to foot, or any other illness or soreness that I may incur, including death.”
I HEREBY AFFIRM THAT I HAVE READ AND FULLY UNDERSTAND THE ABOVE STATEMENTS.
___________________________ (Participant Signature) 
___________________________ (Date)
                </p>
              </div>
            </Well>
          </div>
        </Collapse>
      </div>;
  }
}

export default LiabilityForm;







    


      