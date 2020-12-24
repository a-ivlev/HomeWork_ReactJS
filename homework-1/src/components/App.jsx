import React from 'react';
import Message from './Message';


export default class App extends React.Component {
 
   state = {
      message: ['']
      };

send = (event) => {
   this.setState({message: [...this.state.message, 'Нормально']});
}

render(){   
   return(
      <div>
         <h1>Моё первое приложение на ReactJS</h1>
         <div>
            { this.state.message.map((value, id) => <Message text={value} key={`message_${id}`} />)}
         </div> 
         <button onClick={this.send}>Отправить</button>
      </div>
   );
}
}