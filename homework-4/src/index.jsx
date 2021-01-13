import React from 'react';
import ReactDOM from 'react-dom';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter } from 'react-router-dom';
import Messages from './components/pages/Messages'

const theme = createMuiTheme({
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
});

ReactDOM.render(
    <BrowserRouter>
        <ThemeProvider theme={theme}>
            <Messages />    
        </ThemeProvider>
    </BrowserRouter>,
document.getElementById('root'));