import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import SendIcon from '@material-ui/icons/Send';
import ReorderIcon from '@material-ui/icons/Reorder';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';

import { actionGetChats } from '../actions/chatActions'

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

function ChatList({chats}) {
  const propTypes = {
    chatId: PropTypes.number
  };

  const defaultProps = {
    chatId: 1
  };
  const classes = useStyles();
  
  return (
    <div className={classes.root}>
      <List
        component="nav"
        aria-label="main mailbox folders"
      >
        <Toolbar>
          <Typography variant="h6" color="primary">Список чатов</Typography>
        </Toolbar>
        { Object.values(chats).map(({to, title}) => (
        <Link to={to} style={{textDecoration: 'none'}}>
          <ListItemLink>
            <ListItemIcon>
              <ReorderIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary={title} />
          </ListItemLink>
          </Link>) )
        }
      </List>
    </div>
  );
}

const mapStateToProps = store => ({
  chats: store.chatsReducer,
});

const mapDispatchToProps = {
  actionGetChats,
};

export default connect(mapStateToProps, mapDispatchToProps)(ChatList);