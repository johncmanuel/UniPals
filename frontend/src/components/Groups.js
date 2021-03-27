import React from "react";
import {
  Grid,
  Segment,
  Header,
  Divider,
  Card,
  Comment,
} from "semantic-ui-react";
import ApplyFlex from "./ApplyFlex";
import ApplyPadding from "./ApplyPadding";
import MessageForm from "./MessageForm";
import CreateComment from "./CreateComment";

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
    header: "Skyline Community College",
    fluid: true,
  },
  {
    header: "University of California, San Diego",
    fluid: true,
  },
  {
    header: "San Francisco State University",
    fluid: true,
  },
  {
    header: "San Jose State University",
    fluid: true,
  },
];

const dummyData = [
  {
    avatar: "https://ui-avatars.com/api/?background=random&name=Hashim+Cano",
    name: "Hashim Cano",
    metadata: "Today at 3:46 PM",
    text: "Hey everyone! Nice to meet you all!",
    replies: [
      {
        avatar: "https://ui-avatars.com/api/?background=random&name=Mila+Wood",
        name: "Mila Wood",
        metadata: "Today at 3:47 PM",
        text: "Hey Hashim!",
        replies: [],
      },
      {
        avatar:
          "https://ui-avatars.com/api/?background=random&name=Paloma+Sparrow",
        name: "Paloma Sparrow",
        metadata: "Today at 3:47 PM",
        text: "Hi Hashim!",

        replies: [],
      },
    ],
  },
  {
    avatar: "https://ui-avatars.com/api/?background=random&name=Ezra+Meyer",
    name: "Ezra Meyer",
    metadata: "Today at 8:36 AM",
    text: "Anyone like cookies?",
    replies: [
      {
        avatar:
          "https://ui-avatars.com/api/?background=random&name=Anaiya+Hope",
        name: "Sahara Stafford",
        metadata: "Today at 9:12 AM",
        text: "Me!",
        replies: [
          {
            avatar:
              "https://ui-avatars.com/api/?background=random&name=Ezra+Meyer",
            name: "Ezra Meyer",
            metadata: "Today at 8:36 AM",
            text: "Nice, that's awesome!",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    avatar: "https://ui-avatars.com/api/?background=random&name=Harlen+Hough",
    name: "Harlen Hough",
    metadata: "Today at 8:36 AM",
    text: "Wooo more testing...",
    replies: [],
  },
];

const UCLAGroupMessages = () => (
  <Comment.Group>
    <Header as="h3" dividing>
      {items[0]["header"]}
    </Header>
    {dummyData.map((component, key) => (
      <CreateComment
        key={key}
        avatar={component.avatar}
        name={component.name}
        metadata={component.metadata}
        image={component.image}
        text={component.text}
        replies={component.replies}
      />
    ))}
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
