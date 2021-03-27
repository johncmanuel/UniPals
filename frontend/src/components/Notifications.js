import React from "react";
import {
  Button,
  Card,
  Grid,
  Image,
  Header,
  Container,
} from "semantic-ui-react";
import ApplyFlex from "./ApplyFlex";
import ApplyPadding from "./ApplyPadding";

const NotificationCardGroup = () => (
  <Card.Group centered>
    <Card fluid>
      <Card.Content>
        <Image
          floated="right"
          size="mini"
          src="https://ui-avatars.com/api/?background=random&name=Steve+Sanders"
        />
        <Card.Header>Steve Sanders</Card.Header>
        <Card.Meta>New user</Card.Meta>
        <Card.Description>Steve wants to add you.</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className="ui two buttons">
          <Button basic color="green">
            Approve
          </Button>
          <Button basic color="red">
            Decline
          </Button>
        </div>
      </Card.Content>
    </Card>
    <Card fluid>
      <Card.Content>
        <Image
          floated="right"
          size="mini"
          src="https://ui-avatars.com/api/?background=random&name=Molly+Thomas"
        />
        <Card.Header>Molly Thomas</Card.Header>
        <Card.Meta>New User</Card.Meta>
        <Card.Description>Molly wants to add you.</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className="ui two buttons">
          <Button basic color="green">
            Approve
          </Button>
          <Button basic color="red">
            Decline
          </Button>
        </div>
      </Card.Content>
    </Card>
    <Card fluid>
      <Card.Content>
        <Image
          floated="right"
          size="mini"
          src="https://ui-avatars.com/api/?background=random&name=Jenny+Lawrence"
        />
        <Card.Header>Jenny Lawrence</Card.Header>
        <Card.Meta>New User</Card.Meta>
        <Card.Description>Jenny Lawrence wants to add you.</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className="ui two buttons">
          <Button basic color="green">
            Approve
          </Button>
          <Button basic color="red">
            Decline
          </Button>
        </div>
      </Card.Content>
    </Card>
  </Card.Group>
);

const Notifications = () => (
  <ApplyFlex>
    <ApplyPadding />
    <Grid stackable container centered>
      <Grid.Row>
        <Grid.Column>
          <Container text>
            <Header as="h1" textAlign="center">
              Notifications
            </Header>
            <NotificationCardGroup />
          </Container>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </ApplyFlex>
);

export default Notifications;
