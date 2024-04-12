import React from 'react';
import { createRoot } from 'react-dom/client';
import { Button } from '@mui/material';
import "./scss/index.scss";

const App = () => (
    <div>
        <h1>Hello, React with MUI!</h1>
        <Button variant="contained">Hello World</Button>
    </div>
);

const AppEml = document.getElementById('app');
const AppRoot = createRoot(AppEml);
AppRoot.render(<App />);
console.log('test')