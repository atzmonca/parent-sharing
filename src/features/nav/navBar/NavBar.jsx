import React, { Component } from "react";
import { Menu, Container, Button } from "semantic-ui-react";
import { NavLink, Link, withRouter } from "react-router-dom";
import SignedOutMenu from "../menus/SignedOutMenu";
import SignedInMenu from "../menus/SignedInMenu";

class NavBar extends Component {
  state = {
    isAuthenticate: false
  };

  handleSignIn = () => {
    this.setState({
      authentication: true
    });
  };

  handleSignOut = () => {
    this.setState({
      authentication: false
    });
    this.props.history.push("/");
  };

  render() {
    const { authentication } = this.state;
    return (
      <Menu inverted fixed="top">
        <Container>
          <Menu.Item header as={Link} to="/">
            <img src="assets/logo.png" alt="logo" />
            Re-vents
          </Menu.Item>
          <Menu.Item as={Link} to="/test" name="Test" />
          <Menu.Item as={Link} to="/events" name="Events" />
          {authentication && (
            <Menu.Item as={NavLink} to="/people" name="People" />
          )}

          {authentication && (
            <Menu.Item>
              <Button
                floated="right"
                as={Link}
                to="/createEvent"
                positive
                inverted
                content="Create Event"
              />
            </Menu.Item>
          )}

          {authentication ? (
            <SignedInMenu signOut={this.handleSignOut} />
          ) : (
            <SignedOutMenu signIn={this.handleSignIn} />
          )}
        </Container>
      </Menu>
    );
  }
}
export default withRouter(NavBar);
