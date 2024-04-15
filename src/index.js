import React from 'react';
import ReactDOM from 'react-dom/client'; 
import { createRoot } from 'react-dom/client';
import { Button,TextField } from '@mui/material';
import PasswordInput from './components/password';
import "./scss/index.scss";

const App = () => (
    <React.Fragment>
        <div className='container'>

        <h1>Hello, React with MUI!</h1>
        <div>
          <TextField 
            label='test_input'
            variant='outlined'
            className='inputField' 
            fullWidth/>
        </div>
        <div>
          <PasswordInput  className="test_class"/>
        </div>
        <div>
        <Button variant="contained">Hello World</Button>
        </div>
        </div>
    </React.Fragment>
);

const AppEml = document.getElementById('app');
const AppRoot = createRoot(AppEml);
AppRoot.render(<App />);
console.log('test')


//パスワード
const paswordElm = document.getElementById('password');
const passwordRoot = ReactDOM.createRoot(paswordElm);
