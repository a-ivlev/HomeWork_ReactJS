import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';
import SendIcon from '@material-ui/icons/Send';

import MessageList from './MessageList';
import { actionSendMessage } from '../actions/chatActions'

import '../styles/SendMessage.css'

class SendMessage extends React.Component {
    static propTypes = {
        chatId: PropTypes.number
    }

    static defaultProps = {
        chatId: 1
    }

    state = {
        chats: {
            1: {
                title: 'Чат 1',
                messages: [{ message: 'Привет! Я робот из первого чата', author: 'robot' }],
            },
            2: {
                title: 'Чат 2',
                messages: [{ message: 'Привет! Я робот из второго чата', author: 'robot' }],
            },
            3: {
                title: 'Чат 3',
                messages: [{ message: 'Привет! Я робот из третьего чата', author: 'robot' }],
            },
            4: {
                title: 'Чат 4',
                messages: [{ message: 'Привет! Я робот из четвёртого чата', author: 'robot' }],
            },
            5: {
                title: 'Чат 5',
                messages: [{ message: 'Привет! Я робот из пятого чата', author: 'robot' }],
            },
        },
        text: '',
    };


    change = (event) => {
        this.setState({ text: event.target.value });
    }

    send = () => {
        const { chats } = this.state;
        const { chatId } = this.props;
        this.setState(({ chats }) => ({ chats: { ...chats, [chatId]: { ...chats[chatId], messages: [...chats[chatId].messages, { message: this.state.text, author: 'Александр' } ] } } }));
        // Записываем сообщение в сторе.
        this.props.actionSendMessage(this.state.text, 'Александр', chatId);
               
        this.setState({ text: '' });    
    }

    timeout;

    componentDidUpdate(prevProps, prevState) {
        const { chats } = this.state;
        const { chatId } = this.props;
        clearTimeout(this.timeout);
        if (prevState.chats[chatId].messages.length < this.state.chats[chatId].messages.length &&
            this.state.chats[chatId].messages[this.state.chats[chatId].messages.length - 1].author !== "robot") {
            this.timeout = setTimeout(() =>
                this.setState(
                    ({ chats }) => (
                        { chats: { ...chats, [chatId]: { ...chats[chatId], messages: [...chats[chatId].messages, { message: `Не приставай ко мне, я робот ${chats[chatId].title}!`, author: 'robot' }] } } })
                ), 1000);
        }
    }

    componentWillUnmount() {
        clearTimeout(this.timeout);
    }

    render() {
        const { chats } = this.state;
        let { chatId } = this.props;

        return (
            <main>
                <MessageList messages={chats[chatId].messages} />
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
                    variant="filled" />
                <Button onClick={this.send} color="primary"><EmailOutlinedIcon />&nbsp;Отправить</Button>
            </main>
        );
    }
}

const mapStateToProps = store => ({
    sendMessageStore: store.chatsReducer,
});

const mapDispatchToProps = {
    actionSendMessage,
};

export default connect(mapStateToProps, mapDispatchToProps)(SendMessage);