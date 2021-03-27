import React from "react";
import { Card, Feed } from "semantic-ui-react";

const RecentActivity = () => (
  <Card>
    <Card.Content>
      <Card.Header>Recent Activity</Card.Header>
    </Card.Content>
    <Card.Content>
      <Feed>
        <Feed.Event>
          <Feed.Label image="https://ui-avatars.com/api/?background=random&name=Bob+Schneider" />
          <Feed.Content>
            <Feed.Date content="1 day ago" />
            <Feed.Summary>
              You added <a>Bob Schneider</a> to your <a>CS majors</a> group.
            </Feed.Summary>
          </Feed.Content>
        </Feed.Event>

        <Feed.Event>
          <Feed.Label image="https://ui-avatars.com/api/?background=random&name=Anaiya+Hope" />
          <Feed.Content>
            <Feed.Date content="3 days ago" />
            <Feed.Summary>
              You added <a>Anaiya Hope</a> as a friend.
            </Feed.Summary>
          </Feed.Content>
        </Feed.Event>

        <Feed.Event>
          <Feed.Label image="https://ui-avatars.com/api/?background=random&name=Rick+Sanchez" />
          <Feed.Content>
            <Feed.Date content="4 days ago" />
            <Feed.Summary>
              You added <a>Rick Sanchez</a> to your <a>cool people</a> group.
            </Feed.Summary>
          </Feed.Content>
        </Feed.Event>
      </Feed>
    </Card.Content>
  </Card>
);

export default RecentActivity;
