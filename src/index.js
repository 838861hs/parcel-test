import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from '@mui/material';
import "./scss/index.scss";

const App = () => (
    <div>
        <h1>Hello, React with MUI!</h1>
        <Button variant="contained">Hello World</Button>
    </div>
);

ReactDOM.render(<App />, document.getElementById('app'));
