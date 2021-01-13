import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import SendIcon from '@material-ui/icons/Send';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 200,
    backgroundColor: theme.palette.background.paper,
  },
}));

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

export default function SimpleList() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <List
      component="nav"
      aria-label="main mailbox folders"
      >
        <ListItemLink href="#chat-id_1">
          <ListItemIcon>
            <SendIcon />
          </ListItemIcon>
          <ListItemText primary="Чат 1" />
        </ListItemLink>
        <ListItemLink href="#chat-id_2">
          <ListItemIcon>
            <SendIcon />
          </ListItemIcon>
          <ListItemText primary="Чат 2" />
        </ListItemLink>
        <ListItemLink href="#chat-id_3">
          <ListItemIcon>
            <SendIcon />
          </ListItemIcon>
          <ListItemText primary="Чат 3" />
        </ListItemLink>
        <ListItemLink href="#chat-id_4">
          <ListItemIcon>
            <SendIcon />
          </ListItemIcon>
          <ListItemText primary="Чат 4" />
        </ListItemLink>
        <ListItemLink href="#chat-id_5">
          <ListItemIcon>
            <SendIcon />
          </ListItemIcon>
          <ListItemText primary="Чат 5" />
        </ListItemLink>
      </List>
    </div>
  );
}