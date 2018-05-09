import React from "react";
import { Button } from "react-bootstrap";
import { Collapse } from "react-bootstrap";
import { Well } from "react-bootstrap";
import { Table } from "react-bootstrap";


class FitnessProgram extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      open: false
    };
  }

  render() {
    return <div>
        <Button onClick={() => this.setState({ open: !this.state.open })}>
          Fitness Program
        </Button>
        <Collapse in={this.state.open}>
          <div>
            <Well>
              <div>
                <h3 className="text-center">Fitness Program</h3>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a
                  type specimen book. It has survived not only five
                </p>
                <Table>
                  <thead>
                    <tr>
                      <th>Fitness </th>
                      <th>Nutrition</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Weekly Workout Routine</td>
                      <td>Put something here</td>
                    </tr>
                    <tr>
                      <td>Cardio</td>
                      <td>Put something here</td>
                    </tr>
                    <tr>
                      <td>Strength Training</td>
                      <td>Put something here</td>
                    </tr>
                  </tbody>
                </Table>
                
              </div>
            </Well>
          </div>
        </Collapse>
      </div>
  }
}

export default FitnessProgram;
