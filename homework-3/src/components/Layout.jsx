import React from 'react';
import Header from './Header';
import ChatList from './ChatList';
import SendMessage from './SendMessage';

import '../styles/Layout.css'

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles((theme) => ({
  root: {   
   flexGrow: 1,
  },
  paper: {
   padding: theme.spacing(2),
   textAlign: 'center',
   color: theme.palette.text.secondary,
 },
}));

export default function FullWidthGrid() {
   const classes = useStyles();
    
   return (
     <div className={classes.root}>
       <Grid container spacing={0}>
         <Grid item xs={12}>
           <Paper className={classes.paper}><Header /></Paper>
         </Grid>
         <Grid item xs={12} sm={2}>
           <Paper className={classes.paper}><ChatList /></Paper>
         </Grid>
         <Grid item xs={12} sm={10}>
           <Paper className={classes.paper}><SendMessage /></Paper>
         </Grid>
       </Grid>
     </div>
   );
 }
 

/*
export default class App extends React.Component {
   
   render() {
        return(
         <main>
            <Header />
            <ChatList />
            <SendMessage />
         </main>
      );  
   }
}
*/