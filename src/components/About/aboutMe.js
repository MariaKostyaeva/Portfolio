import React from 'react';
import './aboutMe.styles.css'
import photo from '../../assets/photo.jpg';
const AboutMe = () => {
    return (
        <div className="aboutMeSection">
            <div className="profilePic">
                <img className="ava" src={photo} alt=""/>
            </div>
            <div className="aboutMeText">
                <div className="tag">
                    <p>🧐 Обо мне</p>
                </div>
                <div className="shortInfo">
                    <p>Мария, г. Краснодар</p>
                </div>
                <div className="longInfo">
                    <p><i>👋</i> Приветствую, меня зовут Костяева Мария Николаевна, но вы можете называть меня просто Машей. Очень приятно!
                    <br/><i>👩🏻💻</i> Это только начало моего увлекательного пути. В данном портфолио будут располагаться мои маленькие <i>🐶🦄</i> pet-проекты.
                    <br/><i>🎓</i> Выпускница Краснодарского колледжа электронного приборостроения.
                    <br/><i>💡</i> Планирую не стоять на месте и продвигаться в фронтенд-разработке, а именно изучить ближе React, React Native, VueJS, JQuery и многое другое.
                    <br/><i>🚀</i> Стараюсь быть немного лучше, чем вчера каждый день.
                    </p>
                </div>
            </div>

        </div>
    );
};

export default AboutMe;