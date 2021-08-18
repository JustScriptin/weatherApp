import React, { useState } from "react";
import Switch from "@material-ui/core/Switch";

export default function Switches() {
  const [state, setState] = useState({
    checkedA: true,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <div>
      <Switch
        onChange={handleChange}
        defaultChecked
        name="checkedA"
        color="default"
      />
    </div>
  );
}
