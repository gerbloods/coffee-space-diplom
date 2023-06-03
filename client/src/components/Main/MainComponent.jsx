import React from 'react';
import './MainComponent.css';
import Header from '../Header/Header';
import hero_dog from '../../img/hero-dog-sample.webp';
import firstimg from '../../img/work/1.webp';
import fiveimg from '../../img/work/5.webp';
import eightimg from '../../img/work/8.webp';
import secondimg from '../../img/work/2.webp';
import thirdimg from '../../img/work/3.webp';
import Footer from '../Footer/Footer';


const MainComponent = () => {
    return (
        <div>
            <Header />
            <main className="container">
                <section className="hero-section">
                    <h1 className="main-header main-title">Кофейня Космос</h1>
                    <img className="hero-dog" src={hero_dog} alt="" />
                </section>
                <section className="gallery">
                <div className="gallery-left">
                    <img className="gallery-item" id="about" src={firstimg} alt=""/>
                    <p className="text-block-p-left">
                    Мы с любовью подходим к созданию каждого напитка, используя только
                    натуральные ингредиенты. Не боимся новых сочетаний, которые отправляют
                    в неизведанную вкусовую Вселенную. Потому и команда у нас не от мира
                    сего – собранная с разных планет и галактик. Каждый «падаван» со своим
                    уникальным видением.
                    </p>
                    <img className="gallery-item" src={fiveimg} alt="" />
                    <p className="text-block-p-left">
                    Мы накормим только свежеприготовленными сэндвичами и салатами. И,
                    конечно, космические сладости. Десерты и кофе – наши сочетания вас
                    покорят. Для юных «косможан» - особые предложения и свой вариант
                    досуга.
                    </p>
                    <img className="gallery-item" src={eightimg} alt="" />
                </div>
                <div className="gallery-right">
                    <h2 className="text-block-head">Что мы знаем о космосе?</h2>
                    <p className="text-block-p-right">
                    Калуга – «колыбель космонавтики», родина известных умов. Земля с
                    большим историческим наследием. Эти факты мы учитывали, создавая для
                    вас что-то неподвластное гравитации. Идея в том, что мы рассматриваем
                    отдельно взятого человека как космос. И кофе в Калуге должен быть
                    космическим – многогранным, бесконечным в качествах и экспериментах.
                    </p>
                    <img className="gallery-item" src={secondimg} alt="" />
                    <p className="text-block-p-right">
                    Классические линейки, авторские позиции, разработанные специально для
                    вас. Уникальная возможность создать свой рецепт вместе с нашим
                    мастером. И речь не только о кофе. Чай, какао, лимонады, секретные
                    рецепты, собранные с разных планет.{" "}
                    </p>
                    <img className="gallery-item" src={thirdimg} alt="" />
                    <p className="text-block-p-right">
                    К примеру, наш герой «Галактик» прибыл к нам с секретным ингредиентом
                    с планеты «Глизе». Вы можете это оценить в фирменном «Напитке героя».
                    Кроме того, покорители вселенной всегда должны быть полны сил.
                    </p>
                </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default MainComponent;