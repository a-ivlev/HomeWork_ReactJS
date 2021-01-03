import React from 'react';
import ReactDOM from 'react-dom';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Layout from  './components/Layout';

const theme = createMuiTheme({
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
});


ReactDOM.render(
    <ThemeProvider theme={theme}>
        <Layout />
    </ThemeProvider>,
document.getElementById('root'));