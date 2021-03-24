import React from "react";
import { Form } from "semantic-ui-react";

function NewPost(props) {
  if (props.name === undefined) {
    return (
      <Form>
        <Form.Field>
          {/* <label>New Post</label> */}
          <Form.Input
            fluid
            // label="New Post"
            placeholder={"Message"}
          ></Form.Input>
        </Form.Field>
      </Form>
    );
  } else {
    return (
      <Form>
        <Form.Field>
          {/* <label>New Post</label> */}
          <Form.Input
            fluid
            // label="New Post"
            placeholder={"Message " + props.name}
          ></Form.Input>
        </Form.Field>
      </Form>
    );
  }
}

export default NewPost;
