import React from "react";
import { Comment, Image } from "semantic-ui-react";

// Recursive component YEYEYE
function CreateReply({ replies }) {
  // Get base case
  const hasMoreReplies = replies && replies.length;
  return replies.map((component, key) => (
    <Comment.Group key={key}>
      <Comment>
        <Comment.Avatar as="a" src={component.avatar} />
        <Comment.Content>
          <Comment.Author as="a">{component.name}</Comment.Author>
          <Comment.Metadata>
            <span>{component.metadata}</span>
          </Comment.Metadata>
          <Comment.Text>{component.text}</Comment.Text>
          <Comment.Actions>
            <a>Reply</a>
          </Comment.Actions>
        </Comment.Content>
        {/* More replies here. if any */}
        {hasMoreReplies && <CreateReply replies={component.replies} />}
      </Comment>
    </Comment.Group>
  ));
}

function CreateComment(props) {
  return (
    <Comment>
      <Comment.Avatar as="a" src={props.avatar} />
      <Comment.Content>
        <Comment.Author as="a">{props.name}</Comment.Author>
        <Comment.Metadata>
          <span>{props.metadata}</span>
        </Comment.Metadata>
        <Comment.Text>
          <Image fluid src={props.image} />
          {props.text}
        </Comment.Text>
        <Comment.Actions>
          <Comment.Action>Reply</Comment.Action>
        </Comment.Actions>
      </Comment.Content>
      <CreateReply replies={props.replies} />
    </Comment>
  );
}

export default CreateComment;
