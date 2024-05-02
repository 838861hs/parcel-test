// NestedTabs.js

import React, { useState } from 'react';
import { Tabs, Tab, Box } from '@mui/material';
import NestedTabContent1 from './NestedTabContent1';

function NestedTabPanel({ children, value, index }) {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`nested-tabpanel-${index}`}
      aria-labelledby={`nested-tab-${index}`}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </div>
  );
}

export function NestedTabs() {
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Tabs value={value} onChange={handleChange} aria-label="nested tabs example">
        <Tab label="Nested Tab 1" />
        <Tab label="Nested Tab 2" />
      </Tabs>
      <NestedTabPanel value={value} index={0}>
        <NestedTabContent1 />
      </NestedTabPanel>
      <NestedTabPanel value={value} index={1}>
        Content of Nested Tab 2
      </NestedTabPanel>
    </Box>
  );
}
