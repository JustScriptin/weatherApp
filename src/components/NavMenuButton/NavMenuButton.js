import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMouseOver } from "../../state/ducks/navMenuButtonDucks";
import "./../NavMenuButton/navMenuButton.css";

function NavMenuButton(props) {
  const dispatch = useDispatch();
  const hoverState = useSelector((state) => state.navMenuButton.mouseOver);
  return (
    <button
      className="navMenuButton"
      onMouseEnter={() => dispatch(toggleMouseOver())}
      onMouseLeave={() => dispatch(toggleMouseOver())}
    >
      {props.icon}
      {hoverState && props.children}
    </button>
  );
}

export default NavMenuButton;
