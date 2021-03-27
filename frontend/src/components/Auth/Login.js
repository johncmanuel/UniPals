import ApplyFlex from "components/ApplyFlex";
import React, { Component } from "react";
import {
  Button,
  Form,
  Grid,
  Header,
  Image,
  Message,
  Segment,
} from "semantic-ui-react";
import axios from "axios";
import { Link } from "react-router-dom";
const BACKEND_URL = "http://127.0.0.1:8000/";

class LoginForm extends Component {
  state = {
    username: "",
    password: "",
  };
  handleChange = (e, { name, value }) => this.setState({ [name]: value });

  handleLogin = (e) => {
    const { username, password } = this.state;
    let user = {
      username: username,
      password: password,
    };

    e.preventDefault();
    axios
      .post(BACKEND_URL + "auth/", user, {
        headers: { "Content-Type": "application/json" },
      })
      .then((data) => this.props.onLogin(data.token))
      .catch((err) => {
        // Check for 4xx or 5xx errors
        if (err.response) {
          console.log("error! " + err.response);
        } else if (err.request) {
          // check for errors during request
          console.log(err.request);
        } else {
          // check for anything else
          console.log(err);
        }
      });
  };
  render() {
    const { username, password } = this.state;
    return (
      <ApplyFlex>
        <Grid
          textAlign="center"
          style={{ height: "100vh" }}
          verticalAlign="middle"
        >
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as="h2" color="blue" textAlign="center">
              <Image src="/android-chrome-512x512.png" /> Login to your account
            </Header>
            <Form size="large">
              <Segment stacked>
                <Form.Input
                  fluid
                  icon="user"
                  iconPosition="left"
                  placeholder="Username"
                  name="username"
                  onChange={this.handleChange}
                  value={username}
                />
                <Form.Input
                  fluid
                  icon="lock"
                  iconPosition="left"
                  placeholder="Password"
                  type="password"
                  name="password"
                  onChange={this.handleChange}
                  value={password}
                />

                <Button
                  color="blue"
                  fluid
                  size="large"
                  onClick={(e) => {
                    this.handleLogin(e);
                  }}
                >
                  Login
                </Button>
              </Segment>
            </Form>
            <Message>
              New to us? <Link to="/signup">Sign Up</Link>
            </Message>
          </Grid.Column>
        </Grid>
      </ApplyFlex>
    );
  }
}

export default LoginForm;
