import { useState } from 'react'
import './App.scss'
import Item from './components/item';
import Comment from './components/comment';
import Layout from './layout/layout';

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

      
</div>


  </Layout>
  </>
);


}

export default App
