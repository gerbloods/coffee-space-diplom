import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import firstimg from '../../img/work/1.webp';
import thirdimg from '../../img/work/3.webp';
import './NewsComponent.css';


const NewsComponent = () => {
    return (
        <div>
            <Header />
            <main className="main-container">
                <div className="newstext">
                    <h1>Новости кофейни</h1>
                </div>
                <div className="posts">
                    <div className="header-post">
                    <h1>Lorem</h1>
                    </div>
                    <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui, ea! Ea iure
                    repudiandae tempora consectetur vel voluptatibus sequi cumque, unde eos
                    fugiat explicabo quis voluptates eligendi consequatur, hic, excepturi
                    quod?
                    </p>
                    <div className="time__div">
                    <span>xx.xx.xx</span>
                    </div>
                    <div className="photoes">
                    <img className="img" src={firstimg} alt="" />
                    <img className="img" src={thirdimg} alt="" />
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default NewsComponent;