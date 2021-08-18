import React from "react";
import NavMenuButton from "./../NavMenuButton/NavMenuButton";
import "./../NavMenuButton/navMenuButton.css";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import LanguageOutlinedIcon from "@material-ui/icons/LanguageOutlined";
import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined";
import AddOutlinedIcon from "@material-ui/icons/AddOutlined";
import SettingsOutlinedIcon from "@material-ui/icons/SettingsOutlined";

function NavMenu() {
  return (
    <div className="navMenu">
      <NavMenuButton icon={<HomeOutlinedIcon />}>Home</NavMenuButton>
      <NavMenuButton icon={<LanguageOutlinedIcon />}>Demo A</NavMenuButton>
      <NavMenuButton icon={<StarBorderOutlinedIcon />}>Demo B</NavMenuButton>
    </div>
  );
}

export default NavMenu;
