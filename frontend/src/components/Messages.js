import React from "react";
import { Grid, Header, Comment } from "semantic-ui-react";
import FriendCard from "components/FriendCard";
import MessageForm from "components/MessageForm";
import ApplyPadding from "components/ApplyPadding";
import ApplyFlex from "./ApplyFlex";

// Example data
const FriendData = [
  {
    name: "Rick",
    surname: "Sanchez",
    meta: "University of California, Irvine",
    description: "4th year at UCI. A genius student in the making.",
  },
  {
    name: "Mike",
    surname: "Woz",
    meta: "San Francisco State University",
    description: "1st year at SFSU as business major.",
  },
];

const list = [];
function CreateFriendCard() {
  for (let i = 0; i < FriendData.length; i++) {
    let elem = FriendData[i];
    list.push(
      <FriendCard
        key={i}
        name={elem["name"]}
        surname={elem["surname"]}
        meta={elem["meta"]}
        description={elem["description"]}
      />
    );
  }
}
CreateFriendCard();

const MessageBox = () => (
  <Comment.Group size="large">
    <Header as="h2" dividing>
      Rick Sanchez
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
    <ApplyFlex>
      <ApplyPadding />
      <Grid stackable container columns={2}>
        <Grid.Row>
          <Grid.Column width="6">
            <Header>Friends List</Header>
            {list.map((component, key) => (
              <React.Fragment key={key}>{component}</React.Fragment>
            ))}
          </Grid.Column>
          <Grid.Column>
            <MessageBox />
            <MessageForm name="Rick Sanchez" />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </ApplyFlex>
  );
}

export default Messages;
