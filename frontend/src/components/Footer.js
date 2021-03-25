import React from "react";
import { Grid, List, Segment, Menu } from "semantic-ui-react";

const WhiteText = (props) => (
  <span style={{ color: " white" }}>{props.children}</span>
);

const Footer = () => (
  <Segment vertical>
    <div style={{ background: "#202429" }}>
      <Grid stackable container>
        <Grid.Row>
          <Grid.Column>
            <List floated="right" horizontal>
              <List.Item disabled href="#">
                <WhiteText>
                  © {new Date().getFullYear()} UniPals, Inc.
                </WhiteText>
              </List.Item>
              <List.Item href="#">
                <WhiteText>Terms</WhiteText>
              </List.Item>
              <List.Item href="#">
                <WhiteText>Privacy</WhiteText>
              </List.Item>
              <List.Item href="#">
                <WhiteText>Contact</WhiteText>
              </List.Item>
            </List>

            <List horizontal>
              <List.Item href="#">
                <WhiteText>About Us</WhiteText>
              </List.Item>
              <List.Item href="#">
                <WhiteText>Jobs</WhiteText>
              </List.Item>
            </List>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  </Segment>
);

export default Footer;
