import React from "react";
import { Card, Icon, Divider, Image, Container } from "semantic-ui-react";

const description = [
  "Dogecoins are becoming more popular, as investors and traders are rushing to buy.",
  '"University and high school students are also investing all of their life savings into this once-in-a-lifetime opportunity!", says Joe.',
].join(" ");

const TrendingCard = () => (
  <Container>
    <Card>
      <Image
        src="https://www.businessinsider.in/thumb/msid-80920909,width-600,resizemode-4,imgsize-60876/stock-market/news/elon-musk-wants-major-holders-of-cryptocurrency-dogecoin-to-sell-most-of-their-coins/dogecoin-elon-musk.jpg"
        wrapped
        ui={false}
      />
      <Card.Content>
        <Card.Header>Dogecoin is skyrocketing into the moon!</Card.Header>
        <Card.Meta>6 hours ago</Card.Meta>
        <Divider />
        {description}
      </Card.Content>
      <Card.Content extra>
        <Icon name="comments" />
        453 comments
      </Card.Content>
    </Card>
  </Container>
);

export default TrendingCard;
