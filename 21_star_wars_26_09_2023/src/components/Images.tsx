import React from 'react';
import style from './Alles.module.css'

import mainImage from '../images/main.jpg';

import friend1Image from '../images/friend1.jpg';
import friend2Image from '../images/friend2.jpg';
import friend3Image from '../images/friend3.jpg';
import friend4Image from '../images/friend4.jpg';
import friend5Image from '../images/friend5.jpg';
import friend6Image from '../images/friend6.jpg';
import friend7Image from '../images/friend7.jpg';
import friend8Image from '../images/friend8.jpg';
import friend9Image from '../images/friend9.jpg';

const Images: React.FC = () => {
  return (
<main>
    <section className={style.left}>
    <img src={mainImage} alt="hero" />
</section>
    <section className={style.right}>
                <h2>Dream Team</h2>
                <img className={style.img}src={friend1Image} alt="friend1" />
                <img className={style.img}src={friend2Image} alt="friend2" />
                <img className={style.img}src={friend3Image} alt="friend3" />
                <img className={style.img}src={friend4Image} alt="friend4" />
                <img className={style.img}src={friend5Image} alt="friend5" />
                <img className={style.img}src={friend6Image} alt="friend6" />
                <img className= {style.bottomLeft} src={friend7Image} alt="friend7" />
                <img className={style.img}src={friend8Image} alt="friend8" />
                <img className={style.bottomRight} src={friend9Image} alt="friend9" />
            </section>

             <p className={style.farGalaxy}>
                Давным-давно в далекой Галактике... Старая Республика пала. На
                ее руинах Орден ситов создал галактическую Империю, подчиняющую
                одну за другой планетные системы. Силы Альянса стремятся
                свергнуть Темного Императора и восстановить свободное правление
                в Галактике. Генерал Оби-Ван Кеноби возвращается после
                многолетнего уединения, чтобы снова сойтись в поединке с
                Повелителем Тьмы Дартом Вейдером. Вместе с ним на светлой
                стороне Силы – юный пилот Люк, сын Анакина Скайуокера,
                принцесса-сенатор Лейя Органа, легендарный коррелианский
                контрабандист Хан Соло и его друг вуки Чубакка.
            </p>
        </main>
  );
}

export default Images;
