import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './fonts/MYRIADPRO-REGULAR.OTF';
import './index.css';
import PostStore from './store/postStore';
import UserStore from './store/userStore';
import BookingStore from './store/bookingStore';
import OrderStore from './store/orderStore';

const root = ReactDOM.createRoot(document.getElementById('root'));

export const Context = createContext(null)

root.render(
    <Context.Provider value={{
        user: new UserStore(),
        post: new PostStore(),
        booking: new BookingStore(),
        order: new OrderStore()
    }}>
        <App />
    </Context.Provider>

);

