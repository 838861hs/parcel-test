import React from 'react';
import ReactDOM from 'react-dom/client'; 
import { createRoot } from 'react-dom/client';
import React, { useState } from 'react';
import "../src/scss/index.scss";
import { Switch, styled } from '@mui/material';
import { SimpleTabs } from './components/SimpleTabs';
import { NestedTabs } from './components/NestedTabs';  // ネストされたタブをインポート


const AppEml = document.getElementById('app');
const AppRoot = createRoot(AppEml);
AppRoot.render(<App />);



function App() {
  const tabsData = [
    { label: 'Tab 1', content: <NestedTabs /> },
    { label: 'Tab 2', content: 'Content of Tab 2' },
    { label: 'Tab 3', content: 'Content of Tab 3' }
  ];

  return <SimpleTabs tabsData={tabsData} />;
}


function ToggleSwitch() {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  return (
    <>
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
    <SimpleTabs />
    </>
  );
}




export default ToggleSwitch;
