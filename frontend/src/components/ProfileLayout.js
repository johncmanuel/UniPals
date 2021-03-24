import React, { Component } from "react";
import { Grid, Menu, Segment } from "semantic-ui-react";
import { NAMES } from "../names.json";

export default class MenuExampleTabularOnLeft extends Component {
  state = { activeItem: "bio" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Grid stackable>
        <Grid.Column width={4}>
          <Menu fluid vertical tabular>
            <Menu.Item
              name="bio"
              active={activeItem === "bio"}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name="pictures"
              active={activeItem === "pictures"}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name="university"
              active={activeItem === "university"}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name="socials"
              active={activeItem === "socials"}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name="friends"
              active={activeItem === "friends"}
              onClick={this.handleItemClick}
            />
          </Menu>
        </Grid.Column>

        <Grid.Column stretched width={12}>
          <Segment>
            <p>
              Founder and CEO of Starting Ups, a company that specializes in
              automating start-ups. Currently a 4th year at UCLA as a Computer
              Science major with a concentration in artifical intelligence. I
              love to exercise and go hiking with my friends. My favorite drink
              is coffee-the best drink in the world. With {NAMES.name}, I hope
              to get to know people within my college who share the same
              interests as I. Feel free to add me and let's 'start up' a
              conversation :)
            </p>
          </Segment>
        </Grid.Column>
      </Grid>
    );
  }
}
