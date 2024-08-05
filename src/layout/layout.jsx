const Layout = ({children}) => {
    return(
        <>
            <section className='first'>
                <div className="container">
                    <header>
                      <div className="left">
                        <img src="/public/images/logo.svg" alt="logo" />
                      </div>
                      <div className="center">
                        <a href="#">Каталог</a>
                        <a href="#">Новости</a>
                        <a href="#">Доставка</a>
                        <a href="#">О нас</a>
                        <a href="#">Контакты</a>
                      </div>
                      <div className="right">
                        <div className="header-item">
                          <img src="/public/images/heart (5) 1.svg" alt="heart" />
                        </div>
                        <div className="header-item">
                          <img src="/public/images/user (12) 1.svg" alt="user" />
                        </div>
                        <div className="header-item">
                          <img src="/public/images/shopping-cart (6) 1.svg" alt="cart" />
                        </div>
                      </div>
                    </header>
                    <div className="first-title">
                      <h1>Хит продаж</h1>
                      <h2>Дистиллятор для <br /> эфирных масел</h2>
                      <div className="price-box">
                        <p>Цена <span>4 906 грн</span></p>
                        <button>Купить</button>
                      </div>
                    </div>
                </div>
            </section>
            {children}
            <section className="last">
              <div className="container">
              <footer>
                <div className="left">
                  <img src="/public/images/logo.svg" alt="logo" />
                  <a href="#"> © 2021 “Copper Pro” Все права защищенны</a>
                  <a href="#">Политика конфиденциальности</a>
                </div>
                <div className="right">
                  <nav>
                    <p>Навигация</p>
                    <a href="#">Каталог</a>
                    <a href="#">Каталог</a>
                    <a href="#">Каталог</a>
                    <a href="#">Каталог</a>
                    <a href="#">Каталог</a>
                  </nav>

                  <nav>
                    <p>Каталог</p>
                    <a href="#">Для эфирных масел</a>
                    <a href="#">Для эфирных масел</a>
                    <a href="#">Для эфирных масел</a>
                    <a href="#">Для эфирных масел</a>
                    <a href="#">Для эфирных масел</a>
                    <a href="#">Для эфирных масел</a>
                  </nav>

                  <div className="contact">
                    <p>Контакты</p>
                    <a href="#">Бажана 8-Б, Киев, 02132 Украина</a>
                    <a href="#">Бажана 8-Б, Киев, 02132 Украина</a>
                    <a href="#">Бажана 8-Б, Киев, 02132 Украина</a>
                  </div>
                </div>
              </footer>
              </div>
            </section>
        </>
    )
}
export default Layout