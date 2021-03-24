import React from "react";
import {
  Grid,
  Segment,
  Header,
  Divider,
  Card,
  Comment,
} from "semantic-ui-react";
import ApplyPadding from "./ApplyPadding";
import MessageForm from "./MessageForm";

const items = [
  {
    header: "University of California, Los Angeles",
    // description:
    //   "Leverage agile frameworks to provide a robust synopsis for high level overviews.",
    // meta: "ROI: 30%",
    // image:
    //   "https://upload.wikimedia.org/wikipedia/commons/e/ed/UCLA_Bruins_script.svg",
    fluid: true,
  },
  {
    header: "University of California, Irvine",
    fluid: true,
  },
  {
    header: "University of California, San Diego",
    fluid: true,
  },
  {
    header: "University of California, Berkeley",
    fluid: true,
  },
  {
    header: "University of California, Davis",
    fluid: true,
  },
];

const UCLAGroupMessages = () => (
  <Comment.Group>
    <Header as="h3" dividing>
      University of California, Los Angeles
    </Header>

    <Comment>
      <Comment.Avatar src="https://react.semantic-ui.com/images/avatar/small/matt.jpg" />
      <Comment.Content>
        <Comment.Author as="a">Matt</Comment.Author>
        <Comment.Metadata>
          <div>Today at 5:42PM</div>
        </Comment.Metadata>
        <Comment.Text>How artistic!</Comment.Text>
        <Comment.Actions>
          <Comment.Action>Reply</Comment.Action>
        </Comment.Actions>
      </Comment.Content>
    </Comment>

    <Comment>
      <Comment.Avatar src="https://react.semantic-ui.com/images/avatar/small/elliot.jpg" />
      <Comment.Content>
        <Comment.Author as="a">Elliot Fu</Comment.Author>
        <Comment.Metadata>
          <div>Yesterday at 12:30AM</div>
        </Comment.Metadata>
        <Comment.Text>
          <p>This has been very useful for my research. Thanks as well!</p>
        </Comment.Text>
        <Comment.Actions>
          <Comment.Action>Reply</Comment.Action>
        </Comment.Actions>
      </Comment.Content>
      <Comment.Group>
        <Comment>
          <Comment.Avatar src="https://react.semantic-ui.com/images/avatar/small/jenny.jpg" />
          <Comment.Content>
            <Comment.Author as="a">Jenny Hess</Comment.Author>
            <Comment.Metadata>
              <div>Just now</div>
            </Comment.Metadata>
            <Comment.Text>Elliot you are always so right :)</Comment.Text>
            <Comment.Actions>
              <Comment.Action>Reply</Comment.Action>
            </Comment.Actions>
          </Comment.Content>
        </Comment>
      </Comment.Group>
    </Comment>

    <Comment>
      <Comment.Avatar src="https://react.semantic-ui.com/images/avatar/small/joe.jpg" />
      <Comment.Content>
        <Comment.Author as="a">Joe Henderson</Comment.Author>
        <Comment.Metadata>
          <div>5 days ago</div>
        </Comment.Metadata>
        <Comment.Text>Dude, this is awesome. Thanks so much</Comment.Text>
        <Comment.Actions>
          <Comment.Action>Reply</Comment.Action>
        </Comment.Actions>
      </Comment.Content>
    </Comment>
  </Comment.Group>
);

const ListOfGroups = () => <Card.Group centered stackable items={items} />;

function Groups() {
  return (
    <>
      <ApplyPadding />
      <Grid stackable container divided columns={2}>
        <Grid.Row>
          <Grid.Column width={5}>
            <Header>Group List</Header>
            <Divider />
            {/* Display the groups here */}
            <ListOfGroups />
          </Grid.Column>
          <Grid.Column>
            <Header>Messages</Header>
            <Divider />
            <Segment>
              <UCLAGroupMessages />
              {/* Temporary */}
              <MessageForm name={items[0]["header"]} />
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </>
  );
}

export default Groups;
