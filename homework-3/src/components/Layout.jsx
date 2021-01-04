import React from 'react';
import Header from './Header';
import ChatList from './ChatList';
import React from 'react';
import Header from './Header';
import ChatList from './ChatList';
import SendMessage from './SendMessage';

import '../styles/Layout.css'


export default class Layout extends React.Component {
   
  render() {
       return(
          <>
            <Header />
            <chat>
              <ChatList />
              <SendMessage />
            </chat>                 
          </>
     );  
  }
}
