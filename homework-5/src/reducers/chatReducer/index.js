import { sendMessage } from "../../actions/chatActions";

const initialState = {
            1: {
                to: "/chat/1/",
                title: 'Чат 1',
                messages: [{ message: 'Привет! Я робот из первого чата', author: 'robot' }],
            },
            2: {
                to: "/chat/2/",
                title: 'Чат 2',
                messages: [{ message: 'Привет! Я робот из второго чата', author: 'robot' }],
            },
            3: {
                to: "/chat/3/",
                title: 'Чат 3',
                messages: [{ message: 'Привет! Я робот из третьего чата', author: 'robot' }],
            },
            4: {
                to: "/chat/4/",
                title: 'Чат 4',
                messages: [{ message: 'Привет! Я робот из четвёртого чата', author: 'robot' }],
            },
            5: {
                to: "/chat/5/",
                title: 'Чат 5',
                messages: [{ message: 'Привет! Я робот из пятого чата', author: 'robot' }],
            },
};

const chatReducer = (store = initialState, action) => {
  switch (action.type) {
    case sendMessage:
      return {...store, [action.payload.chatId]: { ...store[action.payload.chatId], messages: [...store[action.payload.chatId].messages, { message: action.payload.message, author: action.payload.author } ] } };
    default:
      return store;
  }
};

export default chatReducer;
