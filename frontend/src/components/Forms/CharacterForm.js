import ApplyFlex from "components/ApplyFlex";
import React, { Component } from "react";
import { Grid, Segment, Container, Header } from "semantic-ui-react";
import ApplyPadding from "../ApplyPadding";
import RadioGroup from "./RadioGroup";
import MBTIQuestions from "./MBTIQuestions";
import MBTIQuestionsPartTwo from "./MBTIQuestionsTwo";
import MBTIScoring from "./MBTIScoring";

// Credits: https://wedgworthleadership.com/wp-content/uploads/2016/08/Myers-Briggs-Personality-Test.pdf
const STEP_ORDER = ["PartOne", "PartTwo", "Success"];

class CharacterForm extends Component {
  state = {
    step: "PartOne",
    prevSteps: [],
  };

  CharacterFormContents = (formPart) => {
    const { step } = this.state;
    return (
      <ApplyFlex>
        <ApplyPadding />
        <Grid
          stackable
          container
          // textAlign="center"
          style={{ height: "50vh" }}
          verticalAlign="middle"
        >
          <Grid.Row>
            <Grid.Column>
              <Segment>
                <Container text>
                  <Header as="h1" textAlign="center">
                    Personality Test
                  </Header>
                  <p>
                    Hey there! Thank you for signing up for UniPals! Before we
                    get straight into the platform, we would like to know what
                    kind of person you are.{" "}
                    <span>Why? (clickable link here)</span>
                  </p>
                  <p>
                    That way, we would be able to connect you with people with a
                    similar mindset.
                  </p>
                  {this.renderFormPart(formPart)}
                </Container>
              </Segment>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            {this.getPrevStep(step) !== null && <button>PREVIOUS</button>}
            {this.getNextStep(step) !== null && (
              <button onClick={this.nextStep}>NEXT</button>
            )}
          </Grid.Row>
        </Grid>
      </ApplyFlex>
    );
  };

  getPrevStep = (currStep) => {
    let currStepInd = STEP_ORDER.indexOf(currStep);
    if (currStepInd > 0) {
      return STEP_ORDER[currStepInd - 1];
    } else {
      return null;
    }
  };

  getNextStep = (currStep) => {
    let currStepInd = STEP_ORDER.indexOf(currStep);
    if (currStepInd < STEP_ORDER.length - 1) {
      return STEP_ORDER[currStepInd + 1];
    } else {
      return null;
    }
  };

  prevStep = () => {
    const { prevSteps, step } = this.state;
    const reversedPrevSteps = [...prevSteps].reverse();
    this.setState({
      step: this.getPrevStep(step),
      prevSteps: reversedPrevSteps.slice(1),
    });
  };

  nextStep = () => {
    this.setState((prev) => ({
      step: this.getNextStep(prev.step),
      prevSteps: [...prev.prevSteps, prev.step],
    }));
  };

  renderFormPart = (formPart) => {
    if (formPart === "PartOne") {
      return <RadioGroup questions={MBTIQuestions} />;
    } else if (formPart === "PartTwo") {
      return <RadioGroup questions={MBTIQuestionsPartTwo} />;
    } else if (formPart === "Success") {
      return <h2>Success</h2>;
    }
  };

  render() {
    const { step } = this.state;
    return this.CharacterFormContents(step);
  }
}

export default CharacterForm;
