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
import Comments from "../Comments";
import Trending from "./Trending";
import MessageForm from "../MessageForm";
// import ApplyFlex from "components/ApplyFlex";
import FriendData from "../DummyData";
import CreateFriendCard from "../CreateFriendCard";
import ApplyPadding from "components/ApplyPadding";

const list = [];
const list2 = [];
CreateFriendCard(list, FriendData);

const RecommendationsData = [
  {
    name: "Tai",
    surname: "Flores",
    meta: "San Jose State University",
    description: "2nd year at SJSU. I love tech.",
  },
  {
    name: "Kaeden",
    surname: "Chambers",
    meta: "University of Nevada, Las Vegas",
    description: "Aspiring scientist.",
  },
];

CreateFriendCard(list2, RecommendationsData);

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
        <Segment style={{ overflow: "auto", maxHeight: 600 }}>
          <Container fluid centered>
            <Card.Group stackable itemsPerRow="1">
              {list.map((component, key) => (
                <React.Fragment key={key}>{component}</React.Fragment>
              ))}
            </Card.Group>
          </Container>
        </Segment>
        <Header>Recommendations</Header>
        <Segment>
          <Header as="h3">Based on your personality...</Header>
          <Container fluid centered>
            <Card.Group stackable itemsPerRow="1">
              {list2.map((component, key) => (
                <React.Fragment key={key}>{component}</React.Fragment>
              ))}
            </Card.Group>
          </Container>
        </Segment>
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
      <ApplyPadding paddingTop="15vh" />
      {/* <div style={{ paddingTop: "50px", paddingBottom: "50px" }}></div> */}
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
