import React from 'react';
import ReactDOM from 'react-dom/client'; 
import { createRoot } from 'react-dom/client';
import React, { useState } from 'react';
import { Switch, styled } from '@mui/material';
import { SimpleTabs } from './components/SimpleTabs';
import { NestedTabs } from './components/NestedTabs';  // ネストされたタブをインポート
import PractisComponent from './components/test';
// import ToggleSwitch from '../components/switch';
import DatePicker from './components/DatePicker';

 
const testval = 0;
console.log(testval)
const AppEml = document.getElementById('app');
const AppRoot = createRoot(AppEml);
AppRoot.render(<TestDatePicker />)


function InputValue() {
  const [clickValue, setClickValue] = useState(false);

  const toggleButton = () => {
    setClickValue(!clickValue)
  }
  const buttonClass = clickValue ? 'button-on': 'button-off';
  return (
    <>
      <button className={buttonClass}  onClick={toggleButton}>
        {clickValue ? 'on': 'off'}
      </button>
    </>
  )
}




function App() {
  const tabsData = [
    { label: 'Tab 1', content: <NestedTabs /> },
    { label: 'Tab 2', content: 'Content of Tab 2' },
    { label: 'Tab 3', content: 'Content of Tab 3' }
  ];

  return (
    <React.Fragment>
        <SimpleTabs  tabsData ={tabsData} />
        <DatePicker />
    </React.Fragment>
  )
}

import React from 'react';
import TestDatePicker from './components/testDatapicker';

const TestDatePicker = () => {
  return (
    <div>
      <h1>Date Picker Example</h1>
      <SimpleDatePicker />
    </div>
  );
};

export default TestDatePicker;
