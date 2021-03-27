import ApplyFlex from "components/ApplyFlex";
import ApplyPadding from "components/ApplyPadding";
import React from "react";
import { Image, Grid, Header, Divider } from "semantic-ui-react";
import ProfileLayout from "./ProfileLayout";

// Have a one column layout with multiple links (about, their interests, university)
const Profile = () => (
  <ApplyFlex>
    <ApplyPadding />
    <Grid stackable container>
      <Grid.Row>
        <Grid.Column>
          {/* Example profile pic */}
          <Image
            src="https://ui-avatars.com/api/?background=random&name=Benett+Watts"
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
  </ApplyFlex>
);

export default Profile;
