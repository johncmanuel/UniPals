import React from "react";
import { Grid, Header, Segment, Comment } from "semantic-ui-react";
import FriendCard from "components/FriendCard";

const classes = {};

const MessageBox = () => (
  <Comment.Group size="large">
    <Header as="h2" dividing>
      @Rick Sanchez
    </Header>

    <Comment>
      <Comment.Avatar
        as="a"
        src="https://e7.pngegg.com/pngimages/814/977/png-clipart-rick-sanchez-pocket-mortys-morty-smith-rick-and-morty-season-3-meeseeks-and-destroy-others-white-face.png"
      />
      <Comment.Content>
        <Comment.Author as="a">Rick Sanchez</Comment.Author>
        <Comment.Metadata>
          <span>1 day ago</span>
        </Comment.Metadata>
        <Comment.Text>Yo, you trying to play League?</Comment.Text>
      </Comment.Content>
    </Comment>

    <Comment className="">
      <Comment.Avatar
        as="a"
        src="https://e7.pngegg.com/pngimages/814/977/png-clipart-rick-sanchez-pocket-mortys-morty-smith-rick-and-morty-season-3-meeseeks-and-destroy-others-white-face.png"
      />
      <Comment.Content>
        <Comment.Author as="a">Rick Sanchez</Comment.Author>
        <Comment.Metadata>
          <span>Today at 5:42PM</span>
        </Comment.Metadata>
        <Comment.Text>Yo are you there?</Comment.Text>
      </Comment.Content>
    </Comment>
  </Comment.Group>
);

function Messages() {
  return (
    <>
      <div style={{ paddingTop: "20vh" }}></div>
      <Grid stackable container columns={2}>
        <Grid.Row>
          <Grid.Column width="6">
            <Header>Friends List</Header>
            <FriendCard />
          </Grid.Column>
          <Grid.Column>
            <MessageBox />
            <Segment>Message @Rick Sanchez</Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </>
  );
}

export default Messages;
