import React from "react";
import { useState } from "react";
import '../scss/index.scss'

function ToggleSwitch() {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  return (
    <>
    <div className="toggle-switch">
      <label className="toggle-switch-label" htmlFor="switch">
        <span className="toggle-switch-inner" />
        <span className="toggle-switch-switch" />
      </label>
    </div>
    {/* <SimpleTabs /> */}
    </>
  );
}




export default ToggleSwitch;
