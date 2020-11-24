import React from 'react'
import Container from '../../components/Align/Container/Container'
import './Footer.css'

export default function Footer(props) {
    return (
        <footer>
            <Container >
                <div className="footer-top">
                    <div className="foo-sec">
                        <h4>Разделы</h4>
                        <ul>
                            <li>Фильмы</li>
                            <li>Сериалы</li>
                            <li>Подборки</li>
                            <li>Титр</li>
                            <li>Трейлеры</li>
                        </ul>
                    </div>
                    <div className="foo-sec">
                        <h4>Устройства</h4>
                        <ul>
                            <li>Android</li>
                            <li>iPhone/iPad/iPod</li>
                            <li>LG Smart TV</li>
                            <li>Samsung Smart TV</li>
                            <li>Sony Smart TV</li>
                            <li>Philips Smart TV</li>
                            <li>Toshiba Smart TV</li>
                            <li>Apple TV</li>
                        </ul>
                    </div>
                    <div className="foo-sec">
                        <h4>О нас</h4>
                        <ul>
                            <li>О компании</li>
                            <li>Размещение рекламы</li>
                            <li>Активация сертификата</li>
                            <li>Вакансии</li>
                            <li>Партнерам</li>
                            <li>Партнёрская программа</li>
                            <li>Пользовательское соглашение</li>
                            <li>Политика конфиденциальности</li>
                            <li>Программа бета-тестирования</li>
                        </ul>
                    </div>
                    <div className="foo-sec">
                        <h4>Поддержка</h4>
                        <ul>
                            <li>support@kino.ru</li>
                            <li>8 800 235-49-23</li>
                            <li>Вопросы и ответы — ask.kino.ru</li>
                            <li>Telegram</li>
                            <li>Messenger</li>
                        </ul>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="subscribe">Присоединяйтесь к нам:
                    <i className="fab fa-vk"></i>
                        <i className="fab fa-facebook-f"></i>
                        <i className="fab fa-instagram"></i>
                        <i className="fab fa-twitter"></i>
                    </div>
                    <div className="copyright"><i className="far fa-copyright"></i> 2020 ООО «Кино.ру»</div>
                </div>
            </Container>
        </footer>
    )
}