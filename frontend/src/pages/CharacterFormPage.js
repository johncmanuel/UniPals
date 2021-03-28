import { Component } from "react";
import CharacterForm from "../components/Forms/CharacterForm";
import Navbar from "../components/Navbar";
import { Redirect } from "react-router-dom";
import { isLoggedIn } from "../AuthHelper";

class CharacterFormPage extends Component {
  render() {
    if (isLoggedIn) {
      return (
        <>
          <CharacterForm />
        </>
      );
    } else {
      return <Redirect to="/login" />;
    }
  }
}

export default CharacterFormPage;
