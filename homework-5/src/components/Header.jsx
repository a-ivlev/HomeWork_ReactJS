import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import { actionGetProfile } from '../actions/profileActions';


const styles = {
  root: {
    flexGrow: 1,
  },
  menuButton: {
    //marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    horizontal: 'center',
    justifyContent: 'center',
    display: 'flex',
  },
};

class Header extends React.Component {
  //const classes = useStyles();
  static propTypes = {
    chatId: PropTypes.number
  };

  static defaultProps = {
    chatId: 1
  };

  render() {
    const { chatId } = this.props;
       
    return (
      <div className={this.props.classes.root}>
        <AppBar position="fixit">
          <Toolbar>
            <IconButton edge="start" className={this.props.classes.menuButton} color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={this.props.classes.title}>
              Мессенджер
              <Route path='/chat/:chatId/'>
                {/*<span className={this.props.classes.title}>Чат {chatId} </span>*/}
                <span className={this.props.classes.title}>{this.props.chats[chatId].title} </span>
              </Route>
            </Typography>
            <Button color="inherit">Пользователь: {this.props.profile.name} {this.props.profile.lastName}</Button>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

const mapStateToProps = store => ({
  chats: store.chatsReducer,
  profile: store.profileReducer,
});

const mapDispatchToProps = {
  actionGetProfile,
};

export default compose(withStyles(styles), connect(mapStateToProps, mapDispatchToProps))(Header);