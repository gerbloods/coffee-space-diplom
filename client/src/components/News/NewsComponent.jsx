import React, { useContext, useEffect, useState } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import firstimg from '../../img/work/1.webp';
import thirdimg from '../../img/work/3.webp';
import './NewsComponent.css';
import { Context } from '../..';
import { getAllPosts } from '../../queries/mainQuery';
import Posts from './Posts';


const NewsComponent = () => {

    const [post, setPosts] = useState([])
    const {posts} = useContext(Context)


    useEffect(() => {
        getAllPosts().then((data) => {
          setPosts(data);
        });
      }, [posts]);

    return (
        <div>
            <Header />
            <main className="main-container">
                <div className="newstext">
                    <h1>Новости кофейни</h1>
                </div>
                <div className='posts'>
                    {post.map((news) => (
                        <Posts news={news} key={news.id_post} />
                    ))}
                </div>
                <div className="posts">
                    <div className="header-post">
                    <h1>Скидки!</h1>
                    </div>
                    <p>
                    Ближайшую неделю в кофейне проходят скидки на кофе! При покупке 2 чашек латте, на выбор покупатель может выбрать
                    что возьмет, к выбору представлены: все виды сендвичей и салатов, кофе и фреш. Акция продлится до 16 июня.
                    </p>
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