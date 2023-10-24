import React from 'react';
import './home.style.css';
import avatar from '../../assets/Avatar.svg';
import vk from '../../assets/vk.svg';
import whatsapp from '../../assets/whatsapp.svg';
import telegram from '../../assets/telegram.svg';
const Home = () => {
    return (
        <div className="home">
            <div className="info">
                <div className="tag">
                    <p>👋Салют!</p>
                </div>
                <div className="name">
                    Костяева Мария
                </div>
                <div className="spec">
                    <p>Фронтенд разработчик</p>
                </div>
            </div>
            <div className="avatar">
                <img src={avatar} alt=''/>
            </div>
            <div className="media_box">
                <div className="media">
                    <a className="vk" href="https://vk.me/id418541123">
                        <img src={vk}/>
                    </a>
                </div>
                <div className="media">
                    <a className="whatsapp" href="https://wa.me/89002803839">
                        <img src={whatsapp}/>
                    </a>
                </div>
                <div className="media">
                    <a className="telegram" href="https://telegram.im/@maria_kostyaeva">
                        <img src={telegram}/>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Home;