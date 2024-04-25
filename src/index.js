import React from 'react';
import ReactDOM from 'react-dom/client'; 
import { createRoot } from 'react-dom/client';
import { Button,TextField,Checkbox } from '@mui/material';
import React, { useState } from 'react';
import PasswordInput from './components/password';
import "../src/scss/index.scss";
import { Switch, styled } from '@mui/material';

const AppEml = document.getElementById('app');
const AppRoot = createRoot(AppEml);
AppRoot.render(<ToggleSwitch />);

import React, { useState } from 'react';
import { Switch, styled } from '@mui/material';



function ToggleSwitch() {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  return (
    <div className="toggle-switch">
      <input
        type="checkbox"
        id="switch"
        className="toggle-switch-checkbox"
        onChange={handleToggle}
        checked={isToggled}
      />
      <label className="toggle-switch-label" htmlFor="switch">
        <span className="toggle-switch-inner" />
        <span className="toggle-switch-switch" />
      </label>
    </div>
  );
}




export default ToggleSwitch;
