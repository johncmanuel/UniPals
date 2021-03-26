import ApplyPadding from "components/ApplyPadding";
import React, { Component } from "react";
import { Form, Grid, Icon, Message } from "semantic-ui-react";
import { NAMES } from "../../names.json";

class SignUp extends Component {
  state = {
    // Set up needed variables
    name: "",
    surname: "",
    username: "",
    email: "",
    password: "",
    // Store results here
    submittedName: "",
    submittedSurname: "",
    submittedUsername: "",
    submittedEmail: "",
    submittedPassword: "",
    // Handle errors
    nameError: false,
    surnameError: false,
    usernameError: false,
    emailError: false,
    passwordError: false,
    // formError is used for sending to the backend while
    // createUserError is for letting the user know if their
    // user exists in the database or not.
    formError: false,
    createUserError: false,
  };

  handleChange = (e, { name, value }) => this.setState({ [name]: value });

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, surname, username, email, password } = this.state;
    let error = false;

    // Manually check each input field
    if (name === "") {
      this.setState({ nameError: true });
      error = true;
    } else {
      // If it looks good, add it to the state.
      this.setState({ submittedName: name });
    }

    if (surname === "") {
      this.setState({ surnameError: true });
      error = true;
    } else {
      this.setState({ submittedSurname: surname });
    }

    if (username === "") {
      this.setState({ usernameError: true });
      error = true;
    } else {
      this.setState({ submittedUsername: username });
    }

    // Test email against this regular expression
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(email)) {
      this.setState({ emailError: true });
      error = true;
    } else {
      this.setState({ submittedEmail: email });
    }

    // Check if password is larger than 8 characters
    let minimumPasswordLength = 8;
    if (password.length < minimumPasswordLength) {
      this.setState({ passwordError: true });
      error = true;
    } else {
      this.setState({ submittedPassword: password });
    }

    if (error) {
      this.setState({ formError: true });
      return;
    }
  };

  render() {
    // For testing
    // const {
    //   name,
    //   surname,
    //   username,
    //   password,
    //   email,
    //   submittedName,
    //   submittedSurname,
    //   submittedUsername,
    //   submittedEmail,
    //   submittedPassword,
    //   nameError,
    //   surnameError,
    //   usernameError,
    //   emailError,
    //   passwordError,
    //   formError,
    //   createUserError,
    // } = this.state;
    return (
      <>
        <ApplyPadding />
        <Grid stackable container>
          <Grid.Row>
            <Grid.Column>
              <Message
                attached
                header={`Welcome to ${NAMES.name}!`}
                content="Fill out the form below to sign-up for a new account!"
              />
              <Form
                className="attached fluid segment"
                onSubmit={(e) => {
                  this.handleSubmit(e);
                }}
                error={this.state.createUserError || this.state.formError}
              >
                {this.state.createUserError ? (
                  <Message
                    error
                    header="Account Already Exists"
                    content="An account already exists for this email, please log in or confirm that your email address is correct."
                  />
                ) : null}
                <Form.Group widths="equal">
                  <Form.Input
                    fluid
                    label="First Name"
                    placeholder="Elon"
                    type="text"
                    name="name"
                    value={this.state.name}
                    onChange={this.handleChange}
                    error={this.state.nameError}
                  />
                  <Form.Input
                    fluid
                    label="Last Name"
                    placeholder="Musk"
                    type="text"
                    name="surname"
                    value={this.state.surname}
                    onChange={this.handleChange}
                    error={this.state.surnameError}
                  />
                </Form.Group>
                <Form.Input
                  label="Username"
                  placeholder="dogeuser0385"
                  type="text"
                  name="username"
                  value={this.state.username}
                  onChange={this.handleChange}
                  error={this.state.usernameError}
                />
                <Form.Input
                  label="Email"
                  placeholder="dogecoinsarecool@gmail.com"
                  type="text"
                  name="email"
                  value={this.state.email}
                  onChange={this.handleChange}
                  error={
                    this.state.emailError && {
                      content: "Please enter a valid email address.",
                      pointing: "below",
                    }
                  }
                />
                <Form.Input
                  label="Password"
                  type="password"
                  name="password"
                  value={this.state.password}
                  onChange={this.handleChange}
                  error={
                    this.state.passwordError && {
                      content: "Password must be bigger than 8 characters.",
                      pointing: "below",
                    }
                  }
                />
                <Form.Button
                  fluid
                  color="blue"
                  // Ensure that the user completes ALL the required fields.
                  disabled={
                    !this.state.name ||
                    !this.state.surname ||
                    !this.state.username ||
                    !this.state.email ||
                    !this.state.password
                  }
                >
                  Submit
                </Form.Button>
              </Form>
              {/* For testing */}
              {/* <strong>onChange:</strong>
              <pre>
                {JSON.stringify(
                  { name, surname, username, email, password },
                  null,
                  2
                )}
              </pre>
              <strong>onSubmit:</strong>
              <pre>
                {JSON.stringify(
                  {
                    submittedName,
                    submittedSurname,
                    submittedUsername,
                    submittedEmail,
                    submittedPassword,
                    nameError,
                    surnameError,
                    usernameError,
                    emailError,
                    passwordError,
                    formError,
                    createUserError,
                  },
                  null,
                  2
                )}
              </pre> */}
              <Message attached="bottom" warning>
                <Icon name="help" />
                Already signed up?&nbsp;<a href="#">Login here</a>&nbsp;instead.
              </Message>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </>
    );
  }
}

export default SignUp;
