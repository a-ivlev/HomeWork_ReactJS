import React from 'react';
import MessageList from './MessageList';

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';

import '../styles/SendMessage.css'


export default class SendMessage extends React.Component {
    state = {
        text: '',
        messages: []
     };

    change = (event) => {
        this.setState({text: event.target.value});
     }
    
  send = () => {
        this.setState({messages: [...this.state.messages, {message: this.state.text, author: 'Александр'}]});
        this.state.text = '';
    };  

  componentDidUpdate(prevProps, prevState){
       if(prevState.messages.length < this.state.messages.length &&
        this.state.messages[this.state.messages.length - 1].author !== 'robot'){
           const timeout = setTimeout(() => {
                   this.setState({messages: [...this.state.messages, {message: 'Не приставай ко мне, я робот!', author: 'robot'}]});
               }, 2000);        
        }
   }
  
  componentWillUnmount(){
       clearTimeout(timeout);
       this.setState({timeout: null});
   }

  render() {
       return(
        <main>
           <MessageList messages={this.state.messages} />
            <TextField
               id="filled-textarea"
                label="Сообщение"
                placeholder="Введите текст"
                multiline
                rowsMax={5}
                fullWidth
                margin="normal"
                value={this.state.text}
                onChange={this.change}
                variant="filled"/>
            <Button onClick={this.send}><EmailOutlinedIcon />&nbsp;Отправить</Button>
        </main>
     );  
  }
}
