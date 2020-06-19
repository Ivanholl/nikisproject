import React from 'react';
import {Container} from 'react-bootstrap';

export default function SecondSlide() {
    return (<div id="about" className="secondSlide content-slide">
        <Container>
            <h2>ЗА
                <span> НАС</span>
            </h2>
        </Container>
        <Container className="second-container">
            <div className="about-text">
                <div className="left-side animated bounceInRight">
                    <p>Ние ви предлагаме<span>Новаторски и оригинални бизнес решения, които дават редица предимства при формиране на конкурентноспособност.</span>
                    </p>
                </div>
                <div className={`right-side animated bounceInLeft  `}>
                    <p>
                        <strong>ПроАкт Акаунтинг енд Файненс ЕООД </strong>
                        е една от утвърдилите се компании в България, предоставяща външни услуги в областта на фирмено управление, финансово-счетоводни услуги, подбор и управление на персонал, правни и данъчни консултации. Компанията осигурява новаторски и оригинални бизнес решения, които дават на клиентите редица предимства при формиране на тяхната конкурентноспособност.</p>
                    <p>ПроАкт е учредена през 2000 година от специалисти с дългогодишен опит в изучаването и прилагането на правила и принципи на фирменото управление. Първоначално компанията се занимава със счетоводно обслужване и други административни услуги, свързани с нормалното функциониране на една фирма, но от създаването до сега непрекъснато се развива и расте.</p>
                    <p>Днес фирмата прилага натрупания си опит, придобива нови познания и ежедневно доказва своята квалификация и лоялност към клиентите си, за да може като консултантско дружество да предлага широк спектър услуги в областта на фирменото управление.</p>
                </div>
            </div>
        </Container>
    </div>);

}