import React from "react";
import { Image, Grid, Header, Divider, Segment } from "semantic-ui-react";
import Navbar from "./Navbar";
import ProfileLayout from "./ProfileLayout";

// Have a one column layout with multiple links (about, their interests, university)
const Profile = () => (
  <>
    {/* <Navbar /> */}
    <div style={{ paddingTop: "20vh" }}></div>
    <Grid stackable container>
      <Grid.Row>
        <Grid.Column>
          {/* Example profile pic */}
          <Image
            src="https://react.semantic-ui.com/images/wireframe/square-image.png"
            size="small"
            circular
            centered
          ></Image>
          <Header as="h1" textAlign="center">
            {" "}
            Benett Watts
          </Header>
          <Header as="h2" textAlign="center">
            University of California, Los Angeles
          </Header>
        </Grid.Column>
      </Grid.Row>
      <Divider />
      <Grid.Row>
        <Grid.Column>
          {/* Show info about user */}
          <ProfileLayout />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </>
);

export default Profile;
