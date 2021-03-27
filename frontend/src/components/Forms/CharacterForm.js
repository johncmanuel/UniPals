import ApplyFlex from "components/ApplyFlex";
import React, { Component } from "react";
import { Grid, Segment, Container, Header } from "semantic-ui-react";
import ApplyPadding from "../ApplyPadding";
import RadioGroup from "./RadioGroup";
import MBTIQuestions from "./MBTIQuestions";
import MBTIQuestionsPartTwo from "./MBITQuestionsTwo";
import MBTIScoring from "./MBTIScoring";

// Credits: https://wedgworthleadership.com/wp-content/uploads/2016/08/Myers-Briggs-Personality-Test.pdf
// Store weights and where the weights apply

// Use the length to divide up the entire test equally
// const getLengthOfTest =
//   Object.keys(MyersBriggsTestPartOne).length +
// //   Object.keys(MyersBriggsTestPartTwo).length;
// console.log("message: " + getLengthOfTest.toString());

const CharacterForm = () => (
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
                Hey there! Thank you for signing up for UniPals! Before we get
                straight into the platform, we would like to know what kind of
                person you are. <span>Why? (clickable link here)</span>
              </p>
              <p>
                That way, we would be able to connect you with people with a
                similar mindset.
              </p>
              <RadioGroup questions={MBTIQuestions} />
            </Container>
          </Segment>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </ApplyFlex>
);

export default CharacterForm;
