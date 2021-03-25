import React from "react";
import { Card } from "semantic-ui-react";

const FriendCard = (props) => (
  <Card
    fluid
    link
    header={props.header}
    meta={props.meta}
    description={props.description}
  />
);

export default FriendCard;
