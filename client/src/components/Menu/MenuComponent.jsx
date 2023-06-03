import React from 'react';
import './MenuComponent.css'
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const MenuComponent = () => {
    return (
        <div>
            <Header />
            <div className="menu__text">
                <h1>Меню</h1>
            </div>
            <div className="main-container">
                <div className="drinks__text">
                <h2>Какао</h2>
                </div>
                <div className="drinks">
                <span className="name__drink">Какао классический</span>
                <div className="price">
                    <span className="ml__drink">350мл</span>
                    <span className="price__drink">160р</span>
                </div>
                </div>
                <div className="drinks">
                <span className="name__drink">Клубничный спутник</span>
                <div className="price">
                    <span className="ml__drink">350мл</span>
                    <span className="price__drink">190р</span>
                </div>
                </div>
                <div className="drinks">
                <span className="name__drink">Созвездие кокоса</span>
                <div className="price">
                    <span className="ml__drink">350мл</span>
                    <span className="price__drink">190р</span>
                </div>
                </div>
                <div className="drinks__text">
                <h2>Чай</h2>
                </div>
                <div className="drinks">
                <span className="name__drink">Черный / Сенча / Улун</span>
                <div className="price">
                    <span className="ml__drink">350мл</span>
                    <span className="price__drink">130р / </span>
                    <span className="ml__drink">1л</span>
                    <span className="price__drink">230р</span>
                </div>
                </div>
                <div className="drinks">
                <span className="name__drink">Грейпфрут-Вишня</span>
                <div className="price">
                    <span className="ml__drink">350мл</span>
                    <span className="price__drink">180р / </span>
                    <span className="ml__drink">1л</span>
                    <span className="price__drink">330р</span>
                </div>
                </div>
                <div className="drinks">
                <span className="name__drink">Сладкая облепиха</span>
                <div className="price">
                    <span className="ml__drink">350мл</span>
                    <span className="price__drink">160р / </span>
                    <span className="ml__drink">1л</span>
                    <span className="price__drink">290р</span>
                </div>
                </div>
                <div className="drinks">
                <span className="name__drink">Имбирь-Малина</span>
                <div className="price">
                    <span className="ml__drink">350мл</span>
                    <span className="price__drink">170р / </span>
                    <span className="ml__drink">1л</span>
                    <span className="price__drink">310р</span>
                </div>
                </div>
                <div className="drinks__text">
                <h2>Молочные коктейли</h2>
                </div>
                <div className="drinks">
                <span className="name__drink">Классический</span>
                <div className="price">
                    <span className="ml__drink">400мл</span>
                    <span className="price__drink">210р</span>
                </div>
                </div>
                <div className="drinks">
                <span className="name__drink">Банановый</span>
                <div className="price">
                    <span className="ml__drink">400мл</span>
                    <span className="price__drink">240р</span>
                </div>
                </div>
                <div className="drinks">
                <span className="name__drink">Клубничный</span>
                <div className="price">
                    <span className="ml__drink">400мл</span>
                    <span className="price__drink">240р</span>
                </div>
                </div>
                <div className="drinks__text">
                <h2>Фреш</h2>
                </div>
                <div className="drinks">
                <span className="name__drink">Апельсин-Грейпфрут</span>
                <div className="price">
                    <span className="ml__drink">200мл</span>
                    <span className="price__drink">240р</span>
                </div>
                </div>
                <div className="drinks__text">
                <h2>Просто космос</h2>
                </div>
                <div className="drinks">
                <span className="name__drink">Эспрессо</span>
                <div className="price">
                    <span className="ml__drink">20мл</span>
                    <span className="price__drink">80р / </span>
                    <span className="ml__drink">40мл</span>
                    <span className="price__drink">110р</span>
                </div>
                </div>
                <div className="drinks">
                <span className="name__drink">Американо</span>
                <div className="price">
                    <span className="ml__drink">250мл</span>
                    <span className="price__drink">120р / </span>
                    <span className="ml__drink">350мл</span>
                    <span className="price__drink">140р</span>
                </div>
                </div>
                <div className="drinks">
                <span className="name__drink">Латте</span>
                <div className="price">
                    <span className="ml__drink">350мл</span>
                    <span className="price__drink">180р</span>
                </div>
                </div>
                <div className="drinks">
                <span className="name__drink">Флет Уайт</span>
                <div className="price">
                    <span className="ml__drink">250мл</span>
                    <span className="price__drink">170р</span>
                </div>
                </div>
                <div className="drinks">
                <span className="name__drink">Воронка</span>
                <div className="price">
                    <span className="ml__drink">250мл</span>
                    <span className="price__drink">180р / </span>
                    <span className="ml__drink">350мл</span>
                    <span className="price__drink">200р</span>
                </div>
                </div>
                <div className="drinks">
                <span className="name__drink">Горячий шоколад</span>
                <div className="price">
                    <span className="ml__drink">250мл</span>
                    <span className="price__drink">180р</span>
                </div>
                </div>
                <div className="drinks__text">
                <h2>Авторский космос</h2>
                </div>
                <div className="drinks">
                <span className="name__drink">Латте Чизкейк</span>
                <div className="price">
                    <span className="ml__drink">350мл</span>
                    <span className="price__drink">230р</span>
                </div>
                </div>
                <div className="drinks">
                <span className="name__drink">Планета Мокко</span>
                <div className="price">
                    <span className="ml__drink">350мл</span>
                    <span className="price__drink">220р</span>
                </div>
                </div>
                <div className="drinks">
                <span className="name__drink">Капитан Банан</span>
                <div className="price">
                    <span className="ml__drink">350мл</span>
                    <span className="price__drink">220р</span>
                </div>
                </div>
                <div className="drinks">
                <span className="name__drink">Брусничный Американо</span>
                <div className="price">
                    <span className="ml__drink">350мл</span>
                    <span className="price__drink">200р</span>
                </div>
                </div>
                <div className="drinks">
                <div className="div__drinks">
                    <span className="name__drink">Раф</span>
                    <span className="description__drink">Ваниль / Мед / Шоколад-Мята</span>
                </div>
                <div className="price">
                    <span className="ml__drink">350мл</span>
                    <span className="price__drink">220р</span>
                </div>
                </div>
                <div className="drinks">
                <div className="div__drinks">
                    <span className="name__drink">Кофе Джедая</span>
                    <span className="description__drink">(Ореховая паста и халва)</span>
                </div>
                <div className="price">
                    <span className="ml__drink">350мл</span>
                    <span className="price__drink">220р</span>
                </div>
                </div>
                <div className="drinks">
                <div className="div__drinks">
                    <span className="name__drink">Кофе Героя</span>
                    <span className="description__drink">(С секретным ингридиентом)</span>
                </div>
                <div className="price">
                    <span className="ml__drink">350мл</span>
                    <span className="price__drink">260р</span>
                </div>
                </div>
                <div className="drinks__text">
                <h2>Сэндвичи</h2>
                </div>
                <div className="snacks">
                <span className="name__snacks">С карбонадом</span>
                <div className="description__div">
                    <span className="description__snacks">
                    Соус сырный / Карбонад / Лук / Перец болгарский / Помидор / Салат
                    </span>
                    <span className="price__snacks">270р</span>
                </div>
                </div>
                <div className="snacks">
                <span className="name__snacks">С курицей</span>
                <div className="description__div">
                    <span className="description__snacks">
                    Соус сырный / Курица / Помидор / Салат
                    </span>
                    <span className="price__snacks">240р</span>
                </div>
                </div>
                <div className="snacks">
                <span className="name__snacks">С красной рыбой</span>
                <div className="description__div">
                    <span className="description__snacks">
                    Сыр сливочный / Красная рыба / Лук / Огурец / Салат
                    </span>
                    <span className="price__snacks">310р</span>
                </div>
                </div>
                <div className="snacks">
                <span className="name__snacks">С тунцом</span>
                <div className="description__div">
                    <span className="description__snacks">
                    Сыр сливочный / Тунец / Лук / Огурец / Салат
                    </span>
                    <span className="price__snacks">310р</span>
                </div>
                </div>
                <div className="snacks">
                <span className="name__snacks">С яйцом</span>
                <div className="description__div">
                    <span className="description__snacks">
                    Сыр сливочный / Огурец / Лук / Яйцо / Помидор / Салат
                    </span>
                    <span className="price__snacks">220р</span>
                </div>
                </div>
                <div className="drinks__text">
                <h2>Салаты</h2>
                </div>
                <div className="snacks">
                <span className="name__snacks">С карбонадом</span>
                <div className="description__div">
                    <span className="description__snacks">
                    Соус сырный / Карбонад / Лук / Перец болгарский / Помидор / Салат /
                    Кунжут
                    </span>
                    <span className="price__snacks">230р</span>
                </div>
                </div>
                <div className="snacks">
                <span className="name__snacks">С курицей</span>
                <div className="description__div">
                    <span className="description__snacks">
                    Соус сырный / Курица / Огурец / Лук / Перец болгарский / Помидор /
                    Салат / Кунжут / Фирменная заправка
                    </span>
                    <span className="price__snacks">200р</span>
                </div>
                </div>
                <div className="snacks">
                <span className="name__snacks">С красной рыбой</span>
                <div className="description__div">
                    <span className="description__snacks">
                    Сыр сливочный / Красная рыба / Соус апельсино-медовый / Салат
                    </span>
                    <span className="price__snacks">260р</span>
                </div>
                </div>
                <div className="snacks">
                <span className="name__snacks">С тунцом</span>
                <div className="description__div">
                    <span className="description__snacks">
                    Салат / Тунец / Яйцо / Огурец / Соус фирменный / Кунжут
                    </span>
                    <span className="price__snacks">260р</span>
                </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default MenuComponent;