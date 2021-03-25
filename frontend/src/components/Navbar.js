import React from "react";
import ResponsiveHeader from "dna-responsive-nav";
import "dna-responsive-nav/dist/dna-rn.css";
import { NAMES } from "../names.json";
import { Icon } from "semantic-ui-react";
import { isMobile } from "react-device-detect";
import { Link } from "react-router-dom";

const linkCSS = {
  paddingLeft: "10px",
};

const links = (
  <ul>
    <li key="user">
      <Link to="/profile" aria-label="profile" title="Profile">
        <Icon name="user"></Icon>
      </Link>
    </li>
    <li key="groups">
      <Link to="/groups" aria-label="groups" title="Groups">
        <Icon name="group"></Icon>
      </Link>
    </li>
    <li key="messages">
      <Link to="/messages" aria-label="messages" title="Messages">
        <Icon name="chat"></Icon>
      </Link>
    </li>
    <li key="notifications">
      <Link
        to="/notifications"
        aria-label="notifications"
        title="Notifications"
      >
        <Icon name="bell"></Icon>
      </Link>
    </li>
    <li key="signout">
      <a style={{ cursor: "pointer" }}>Sign Out</a>
    </li>
  </ul>
);

const linksMobile = (
  <ul>
    <li key="user">
      <Link to="/profile" aria-label="profile" title="Profile">
        <Icon name="user"></Icon>
        <span style={linkCSS}>User</span>
      </Link>
    </li>
    <li key="groups">
      <Link to="/groups" aria-label="groups" title="Groups">
        <Icon name="group"></Icon>
        <span style={linkCSS}>Groups</span>
      </Link>
    </li>
    <li key="messages">
      <Link to="/messages" aria-label="messages" title="Messages">
        <Icon name="chat"></Icon>
        <span style={linkCSS}>Messages</span>
      </Link>
    </li>
    <li key="notifications">
      <Link
        to="/notifications"
        aria-label="notifications"
        title="Notifications"
      >
        <Icon name="bell"></Icon>
        <span style={linkCSS}>Notifications</span>
      </Link>
    </li>
    <li key="signout">
      <a style={{ cursor: "pointer" }}>Sign Out</a>
    </li>
  </ul>
);

const handleSearch = (q) => {
  if (q) {
    // I'll come up with a way to search the website, or disable
    // any searching to save more time.
    // const url = "https://google.com/search?q=" + encodeURIComponent(q);
    // window.open(url, "_blank");
    console.log("search");
  }
};

const Navbar = () => {
  if (isMobile) {
    return (
      <ResponsiveHeader
        siteName={NAMES.name}
        links={linksMobile}
        logo="/favicon-32x32.png"
        handleSearch={handleSearch}
      />
    );
  }
  return (
    <ResponsiveHeader
      siteName={NAMES.name}
      links={links}
      logo="/favicon-32x32.png"
      handleSearch={handleSearch}
    />
  );
};

export default Navbar;
