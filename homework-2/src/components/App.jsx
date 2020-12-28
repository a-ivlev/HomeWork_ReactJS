import React from 'react';
import Message from './Message';

export default class App extends React.Component {
   state = {
         count: 0,
         text: '',
         messages: []
      };
      
   change = (event) => {
         this.setState({text: event.target.value});
      }
     
   send = (event) => {
         this.setState({messages: [...this.state.messages, {text: this.state.text, author: 'Александр'}]});
         this.state.text = '';
     };   

   componentDidUpdate(){
        if(this.state.messages.length % 2 > 0){
            const timeout = setTimeout(
                () => {
                    this.setState({messages: [...this.state.messages, {text: 'Не приставай ко мне, я робот!', author: 'robot'}]});
                    this.setState({timeout});
                }, 2000);        
         }
    }

   componentWillUnmount(){
        clearTimeout(this.state.timeout);
        this.setState({timeout: null});
    }

   render() {
        console.log('render');
        return(
         <div>
            <h1>Начало разработки мессенджера!</h1>
            <div>
               {this.state.messages.map(({text, author}, id) => <Message text={`${text} ${author}`} key={`message_${id}`}/>)}
            </div>
            <br></br>
            <Message text={this.state.text}/>
            <input value={this.state.text} onChange={this.change}/>
            <button onClick={this.send}>Отправить</button>
         </div>
      );  
   }
}