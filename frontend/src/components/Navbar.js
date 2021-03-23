import React from "react";
import ResponsiveHeader from "dna-responsive-nav";
import "dna-responsive-nav/dist/dna-rn.css";
import { NAMES } from "../names.json";
import { Icon } from "semantic-ui-react";
import { isMobile } from "react-device-detect";

const linkCSS = {
  paddingLeft: "10px",
};

const links = (
  <ul>
    <li>
      <a className="" href="/" aria-label="profile" title="Profile">
        <Icon name="user"></Icon>
      </a>
    </li>
    <li>
      <a className="" href="/" aria-label="groups" title="Groups">
        <Icon name="group"></Icon>
      </a>
    </li>
    <li>
      <a className="" href="/" aria-label="messages" title="Messages">
        <Icon name="chat"></Icon>
      </a>
    </li>
    <li>
      <a className="" href="/" aria-label="notifications" title="Notifications">
        <Icon name="bell"></Icon>
      </a>
    </li>
  </ul>
);

const linksMobile = (
  <ul>
    <li>
      <a className="" href="/" aria-label="profile" title="Profile">
        <Icon name="user"></Icon>
        <span style={linkCSS}>User</span>
      </a>
    </li>
    <li>
      <a className="" href="/" aria-label="groups" title="Group">
        <Icon name="group"></Icon>
        <span style={linkCSS}>Groups</span>
      </a>
    </li>
    <li>
      <a className="" href="/" aria-label="messages" title="Messages">
        <Icon name="chat"></Icon>
        <span style={linkCSS}>Messages</span>
      </a>
    </li>
    <li>
      <a className="" href="/" aria-label="notifications" title="Notifications">
        <Icon name="bell"></Icon>
        <span style={linkCSS}>Notifications</span>
      </a>
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
