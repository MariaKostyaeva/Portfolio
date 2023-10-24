import './header.styles.css';
import logo from '../../assets/Logo.svg';

const Header = () => {
    return (
        <header>
            <div className="header_container">
                <div className="logo_box">
                    <img className="logo" src={logo} alt=""/>
                </div>
                <div className="list_box">
                    <ul className="list">
                        <li className="list_item">
                            <a className="menu_link" href="#">Главная</a>
                        </li>
                        <li className="list_item">
                            <a className="menu_link" href="#">О себе</a>
                        </li>
                        <li className="list_item">
                            <a className="menu_link" href="#">Проекты</a>
                        </li>
                        <li className="list_item">
                            <a className="menu_link" href="#">Контакты</a>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
};

export default Header;