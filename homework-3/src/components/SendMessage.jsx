import React from 'react';
import MessageList from './MessageList';

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
    '& > *': {
        margin: theme.spacing(1),
      },
  },
}));

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

  componentDidUpdate(){
       if(this.state.messages.length % 2){
           const timeout = setTimeout(() => {
                   this.setState({messages: [...this.state.messages, {message: 'Не приставай ко мне, я робот!', author: 'robot'}]});
                   this.setState({timeout});
               }, 2000);        
        }
   }
  
  componentWillUnmount(){
       clearTimeout(this.state.timeout);
       this.setState({timeout: null});
   }

  render() {
       return(
        <>
           <MessageList messages={this.state.messages} />
            <TextField
               id="filled-textarea"
                label="Сообщение"
                placeholder="Введите текст"
                multiline
                rowsMax={4}
                fullWidth
                margin="normal"
                value={this.state.text}
                onChange={this.change}
                variant="filled"/>
            <Button onClick={this.send}><EmailOutlinedIcon />Отправить</Button>
        </>
     );  
  }
}