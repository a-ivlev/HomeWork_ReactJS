import React, {Component} from 'react';
import Message from './Message';

export default class Example extends Component {
    state = {
       count: 0,
       text: ''
    };

 click = (event) => {
    this.setState({count: this.state.count + 1});
 }

 change = (event) => {
     this.setState({text: event.target.value});
 }

 render() {   
    return <div>
          <h1>Наш первый React-компонент!</h1>
          <Message text={`${this.state.count} Количество лайков на странице`} />
          <button onClick={this.click}>Отправить</button>
          <br></br>
          <Message text={this.state.text}/>
          <input value={this.state.text} onChange={this.change}/>
       </div>;
 }
}