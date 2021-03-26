import React from "react";
import {
  Grid,
  Segment,
  Container,
  Rail,
  Header,
  Divider,
  Card,
} from "semantic-ui-react";
import { isMobile } from "react-device-detect";
import RecentActivity from "./RecentActivity";
import FriendCard from "../FriendCard";
import Comments from "../Comments";
import Trending from "./Trending";
import MessageForm from "../MessageForm";

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

// Only render feed and hide the additional features on mobile
function MobileOnlyFeed() {
  return (
    <>
      <Header>My Feed</Header>
      <MessageForm />
      <Comments />
    </>
  );
}

// Only render feed and additional features on desktop
function DesktopOnlyFeed() {
  return (
    <>
      <Header>My Feed</Header>
      <MessageForm />
      <Comments />
      {/* Friend layout */}
      <Rail size="large" position="left">
        <Header>Friends List</Header>
        <div style={{ overflow: "auto" }}>
          <Container fluid centered>
            {/* <FriendCard></FriendCard> */}
            <Card.Group stackable itemsPerRow="1">
              {list.map((component, key) => (
                <React.Fragment key={key}>{component}</React.Fragment>
              ))}
            </Card.Group>
          </Container>
        </div>
      </Rail>
      {/* Trending, Ads, Search, Recommendations, all those goodies. */}
      <Rail size="large" position="right">
        <Container fluid>
          <Segment>
            <Header>Trending</Header>
            <Divider />
            <Trending />
          </Segment>
          <RecentActivity />
          {/* <Segment>
            <Header>Recommendations</Header>

            <RecommendationCard />
          </Segment> */}
          {/* <Segment>Ads</Segment> */}
        </Container>
      </Rail>
    </>
  );
}

// Render based on the view. If you want to check the changes on
// computer, enable mobile view and refresh.
function RenderFeed() {
  if (isMobile) {
    return <MobileOnlyFeed />;
  }
  return <DesktopOnlyFeed />;
}

export default function Main() {
  return (
    <>
      <div style={{ paddingTop: "50px", paddingBottom: "50px" }}></div>
      <Grid stackable centered columns={3} padded>
        <Grid.Row>
          <Grid.Column>
            <Segment>
              <RenderFeed />
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </>
  );
}
