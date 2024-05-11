import React from "react";
import PropTypes from "prop-types"; // Import PropTypes
import "./SidebarRow.css";
import { PinDropSharp } from "@material-ui/icons";

function SidebarRow(props) {
  return (
    <div className="sidebar_row">
      <props.icon className="sidebarRow_icon" />
      <h2 className="sidebarRow_title">{props.title}</h2>
    </div>
  );
}

SidebarRow.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.elementType.isRequired,
};

export default SidebarRow;
