import { useState } from 'react'
import './App.scss'
import Item from './components/item';
import Comment from './components/comment';
import Layout from './layout/layout';
import Option from './components/option';

function App() {

  const items = [
    { img: "/images/item1.png", text: "Медный чайник с фарфоровой ручкой" , price: "1 953 грн" },
    { img: "/images/item2.png", text: "Медный чайник с фарфоровой ручкой" , price: "1 953 грн" },
    { img: "/images/item3.png", text: "Медный чайник с фарфоровой ручкой" , price: "1 953 грн" },
    { img: "/images/item4.png", text: "Медный чайник с фарфоровой ручкой" , price: "1 953 грн" },
    { img: "/images/iitem5WTF.png", text: "Медный чайник с фарфоровой ручкой" , price: "1 953 грн" },
    { img: "/images/item6.png", text: "Медный чайник с фарфоровой ручкой" , price: "1 953 грн" },
  ];

  const comments = [
    {img: "/images/people.svg", name: "Иван Иванов", text: "Наше оборудование прозводится вручную. Мы постоянно производим контроль качества произведенной продукции. В то же время, если в ходе транспортировки или эксплуатации в течении первых 2 лет происходят поломки, мы всегда находим с клиентом наиболее удобный вариант решения вопроса.", date: "20.10.21"},
    {img: "/images/people.svg", name: "Иван Иванов", text: "Наше оборудование прозводится вручную. Мы постоянно производим контроль качества произведенной продукции. В то же время, если в ходе транспортировки или эксплуатации в течении первых 2 лет происходят поломки, мы всегда находим с клиентом наиболее удобный вариант решения вопроса.", date: "20.10.21"},
    {img: "/images/people.svg", name: "Иван Иванов", text: "Наше оборудование прозводится вручную. Мы постоянно производим контроль качества произведенной продукции. В то же время, если в ходе транспортировки или эксплуатации в течении первых 2 лет происходят поломки, мы всегда находим с клиентом наиболее удобный вариант решения вопроса.", date: "20.10.21"},
  ]

  const options = [
    {img: "/images/1.jpg", title: "Аутентичность", text: "Медное перегонное оборудование используется для получения эфирных масел с незапамятных времен.", },
    {img: "/images/2.jpg", title: "Изысканность", text: "Наши изделия из меди являются очень практичными. В то же время они наполнят особой магией ваш дом или рабочее....", },
    {img: "/images/3.jpg", title: "Честная оплата", text: "Мы стремимся предоставить лучший товар по лучшей цене с сервисом высокого уровня. Но все начинается c....", },
    {img: "/images/4.jpg", title: "Большой ассортимент", text: "У нас есть все от миниатюрных настольных паровых дистилляторов эфирных масел до крупногабаритного оборудования...", },
    {img: "/images/5.jpg", title: "Доставка по всему миру", text: "Вы можете получить нашу продукцию в кратчайшие сроки в любую точку земного шара.", },
    {img: "/images/6.jpg", title: "Гарантия качества", text: "Наше оборудование прозводится вручную. Мы постоянно производим контроль качества произведенной продукции.", },
    {img: "/images/7.jpg", title: "Удобство в использовании", text: "Наши изделия из меди имеют уникальный дизайн, который разрабатывался нами с целью получения максимальной...", },
    {img: "/images/8.jpg", title: "Забота об окружающей среде", text: "От 2 до 5% от стоимости каждого приобретенного товара в нашем магазине мы направляем на защиту....", },
  ]

return(
<>
  <Layout>
  

<div className="container">
  <section className='our'>
    <h1>Наша продукция</h1>
    <div className="our-box">
      {items.map((item, index) => (
        <Item key={index} img={item.img} text={item.text}  />
      ))}
    </div>
  </section>

  <section className='best'>
    <h1>Лучшие продажи</h1>
    <div className="best-box">
      {items.slice(0, 3).map((item, index) => (
        <Item key={index} img={item.img} text={item.text} price={item.price}/>
      ))}
    </div>
    <button>Перейти в каталог</button>
  </section>

  <section className='new'>
    <h1>Новинки</h1>
    <div className="new-box">
      {items.slice(0, 3).map((item, index) => (
        <Item key={index} img={item.img} text={item.text} price={item.price}/>
      ))}
    </div>
    <button>Перейти в каталог</button>
  </section>

  
</div>
<section className="oneplus">
  <div className="container">
    <img id='item1' src="/images/stupid.png" alt="" />
    <img id='item2' src="/images/stupid2.png" alt="" />
    <img id='item3' src="/images/stupid3.png" alt="" />
    <img id='item4' src="/images/COPPER PRO.png" alt="" />
    <img id='item5' src="/images/Ellipse 5.png" alt="" />
    <div className="oneplus-txt">
      <h1>1 + 1 = 3</h1>
      <h2>Закажите два товара и <br /> получите третий бесплатно</h2>
      <button>Перейти в каталог</button>
    </div>
  </div>
</section>

<div className="container">

<section className='recomend'>
    <h1>Мы рекомендуем</h1>
    <div className="recomend-box">
      {items.slice(0, 3).map((item, index) => (
        <Item key={index} img={item.img} text={item.text} price={item.price}/>
      ))}
    </div>
    <button>Перейти в каталог</button>
  </section>

  <section className="about">
        <h1>Что думают о нас</h1>
        <div className="about-box">
          {comments.map((item, index) => (
            <Comment key={index} img={item.img} text={item.text} name={item.name} date={item.date} />
          ))}
        </div>
      </section>

  <section className="us">
    <h1>Почему выбирают нас</h1>
    <div className="us-box">
      {options.map((item, index) => (
        <Option key={index} img={item.img} title={item.title} text={item.text} />
      ))}
    </div>
  </section>
  
</div>


  </Layout>
  </>
);


}

export default App
