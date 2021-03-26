import React from "react";
import { Card, Image } from "semantic-ui-react";

function FriendCard(props) {
  const header = props.name + " " + props.surname;
  const avatarUrl = `https://ui-avatars.com/api/?background=random&name=${props.name}+${props.surname}`;
  if (props.src === undefined) {
    return (
      <Card fluid link>
        <Card.Content>
          <Image floated="right" size="mini" src={avatarUrl} rounded />
          <Card.Header>{header}</Card.Header>
          <Card.Meta>{props.meta}</Card.Meta>
          <Card.Description>{props.description}</Card.Description>
        </Card.Content>
      </Card>
    );
  }
  return (
    <Card fluid link>
      <Card.Content>
        <Image src={props.src} floated="right" size="mini" rounded />
        <Card.Header>{header}</Card.Header>
        <Card.Meta>{props.meta}</Card.Meta>
        <Card.Description>{props.description}</Card.Description>
      </Card.Content>
    </Card>
  );
}

export default FriendCard;
