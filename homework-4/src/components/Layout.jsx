import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import ChatList from './ChatList';
import SendMessage from './SendMessage';

import '../styles/Layout.css'


export default class Layout extends React.Component {
  static propTypes = {
    chatId: PropTypes.number
  };

  static defaultProps = {
    chatId: 1
  };
   
  render() {
       return(
        <>
         <Header chatId={ this.props.chatId }/>
         <chat>
           <ChatList />
           <SendMessage chatId={ this.props.chatId }/>
         </chat>
        </>
     );  
  }
}