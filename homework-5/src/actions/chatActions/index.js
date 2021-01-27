// Actions
export const sendMessage = '/chats/SEND_MESSAGE';

// Action Creators
export const actionSendMessage = (message, author, chatId) => ({
    type: sendMessage,
    payload: {message, author, chatId},
});