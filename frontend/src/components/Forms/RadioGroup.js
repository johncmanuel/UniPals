import React, { Component } from "react";
import { Form, Radio } from "semantic-ui-react";

function titleCase(string) {
  return string[0].toUpperCase() + string.slice(1).toLowerCase();
}

class RadioGroup extends Component {
  state = {
    1: "",
    2: "",
    3: "",
    4: "",
    5: "",
    6: "",
    7: "",
    8: "",
    9: "",
    10: "",
    11: "",
    12: "",
    13: "",
    14: "",
    15: "",
    16: "",
    17: "",
    18: "",
    19: "",
    20: "",
    21: "",
    22: "",
    23: "",
    24: "",
    25: "",
    26: "",
  };
  handleChange = (questionNum, questionAns) => {
    this.setState(
      (prev) => ({ [questionNum]: questionAns }),
      () => console.log(this.state)
    );
  };

  renderQuestions = (questions) => {
    return Object.keys(questions).map((questionNum, i) => {
      return this.renderQuestion(questions[questionNum], questionNum);
    });
  };

  renderQuestion = (questionObj, questionNum) => {
    const getQuestionText = questionObj.question;
    const questionTextWithProperCasing = titleCase(getQuestionText) + "...";
    return (
      <>
        <Form.Field key={questionNum}>
          <p>{questionNum + ". " + questionTextWithProperCasing}</p>
        </Form.Field>
        {Object.keys(questionObj).map((key, i) => {
          if (key !== "question") {
            return (
              <>
                <Form.Field key={i}>
                  <Radio
                    label={titleCase(questionObj[key])}
                    name={questionNum + key}
                    checked={this.state[questionNum] === key}
                    onChange={() => this.handleChange(questionNum, key)}
                  />
                </Form.Field>
              </>
            );
          }
        })}
      </>
    );
  };

  render() {
    const { questions } = this.props;
    return <Form>{this.renderQuestions(this.props.questions)}</Form>;
  }
}

export default RadioGroup;
