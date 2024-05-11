import React from "react";
import Youtube from "../assets/Youtube.png";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Avatar from "@material-ui/core/Avatar";
import ExploreIcon from "@material-ui/icons/Explore";
import SubscriptionIcon from "@material-ui/icons/Subscriptions";
import Microphone from "@material-ui/icons/Mic";
import "./Header.css";
import Home from "@material-ui/icons/Home";
import SubcriptionIcon from "@material-ui/icons/Subscriptions";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import {
  History,
  OndemandVideo,
  WatchLater,
  ThumbUp,
  ExpandMoreOutlined,
  YouTube,
  Theaters,
  SportsEsports,
  Settings,
  Flag,
  Help,
  Feedback,
} from "@material-ui/icons";
import SidebarRow from "../components/SidebarRow";
import Subscriptions from "@material-ui/icons/Subscriptions";
import "../Sidebar.css";

function Header() {
  return (
    <div className="parent_header">
      <div className="header">
        <div className="header__left">
          <MenuIcon />
          <img className="header__logo" src={Youtube} />
        </div>
        <div className="header__input">
          <div className="header__middle">
            <input className="SearchInput" placeholder="Search" type="text" />
            <SearchIcon className="header_searchBtn" />
          </div>
          <Microphone className="header__icons" />
        </div>
        <div className="header__right">
          <VideoCallIcon className="header__icons" />
          <AppsIcon className="header__icons" />
          <NotificationsIcon className="header__icons" />
          <Avatar src="https://www.freeiconspng.com/img/46020" />
        </div>
      </div>
      <div className="sidebar">
        <SidebarRow icon={Home} title="Home" />
        <SidebarRow icon={ExploreIcon} title="Explore" />
        <SidebarRow icon={SubscriptionIcon} title="Subcriptions" />
      </div>
    </div>
  );
}

export default Header;
