import React from "react";
import { Grid, Header, Message } from "semantic-ui-react";

const MBTISuccess = () => (
  <Grid textAlign="center" style={{ height: "100vh" }} verticalAlign="middle">
    <Grid.Column style={{ maxWidth: 450 }}>
      <Header as="h2" color="blue" textAlign="center">
        Success! Your personality is: INFJ
      </Header>

      <Message>
        New to us? <a href="#">Sign Up</a>
      </Message>
    </Grid.Column>
  </Grid>
);

export default MBTISuccess;
