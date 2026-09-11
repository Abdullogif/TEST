import React from 'react'
import Header from './components/Header'
import pilesos from './assets_clining/pilesos.png'
import grass from './assets_clining/grass.png'
import gloves from './assets_clining/gloves.png'
import chekmark from './assets_clining/chekmark.png'
import Card from './components/Card'
import bg_kitchen from './assets_clining/bg_kitсhen.jpg'

const App = () => {
  const cards = [
    {
      id: 1,
      description: "Немецкое и Американское оборудование",
      bg: "rgba(255,194,77,1)",
      img: pilesos
    },
    {
      id: 2,
      description: "Гипоаллергенные безопасные моющие",
      bg: "rgba(67, 170, 255, 1)",

      img: grass
    },
    {
      id: 3,
      description: "Соблюдаем санитарные нормы",
      bg: "rgba(255,194,77,1)",
      img: gloves
    },
    {
      id: 4,
      description: "Оплата по результату после уборки",
      bg: "rgba(67, 170, 255, 1)",
      img: chekmark
    },
  ]
  return (
    <div className='main'>
      <Header />
      <div className="cards flex justify-around items-center  w-[95%] m-auto my-[50px]">
        {cards.map((element) => (
          <Card
            key={element.id}
            description={element.description}
            img={element.img}
            bg={element.bg}
          />
        ))}
      </div>
      <div className="shadow-[0px_0px_20px_0px_rgba(29,31,33,0.12)] w-[90%] h-[80px] m-auto my-[50px] rounded-[50px] flex justify-around items-center gap-[20px]">
        <h1 className="">Услуги</h1>
        <h1 className="">Расчитать стоимость</h1>
        <div className="bg-blue-500 p-[28px_35px] flex justify-center items-center rounded-[50px]">
          <h1 className="text-white">Почему мы</h1>
        </div>
        <h1 className="">Как мы делаем уборку</h1>
        <h1 className="">Отзывы</h1>
        <h1 className="">Акции</h1>
      </div>
      <div className="flex flex-col justify-center items-center w-[85%] m-auto gap-[30px]">
        <h1 className="text-[35px] font-[700] text-gray-700">
          Калькулятор стоимости уборки с точностью до 98%
        </h1>
        <h3 className='m-[0_0_20px] text-[20px] text-gray-500'>
          Это бесплатно и ни к чему не обязывает!
        </h3>
        <div className="w-[90%] py-[350px] bg-no-repeat bg-cover bg-center rounded-[30px] mb-[100px] overflow-hidden relative  "
          style={{ backgroundImage: `url(${bg_kitchen})` }}
        >
          <div className="bg-blue-400/40 backdrop-blur-sm inset-0 absolute blur-md "></div>
          <div className="relative z-10 flex flex-col justify-center items-center border border-solid gap-[20px]">
            <h1 className='text-[30px] text-white font-[800]'>
              Олично! Ваши ответы получены,<br />
              Менеджер уже приступает к расчёту
            </h1>
            <p className="text-[20px] text-white font-semibold">
              Где вам удобнее получить рассчёт?
            </p>
            <div className=" flex justify-center items-center gap-[20px] ">
              <span className='bg-white w-[200px] h-[80px] flex justify-center items-center text-[40px] rounded-[15px]'>
                <i className="fa-brands fa-telegram text-blue-400"></i>
              </span>
              <span className="bg-white w-[200px] h-[80px] flex justify-center items-center text-[40px] rounded-[15px]">
                <i className="fa-brands fa-whatsapp text-green-500"></i>
              </span>
              </div>
              <input type="tel" className=" bg-white  w-[400px]  h-[70px] rounded-[40px] p-[20px] text-[18px] " placeholder='Введите ваш телефон' />
              <button className=" w-[400px]  h-[70px] rounded-[40px] p-[20px] text-[18px] bg-[rgba(255,194,77,1)] text-white font-semibold  ">
                ПОЛУЧИТЬ РАСЧЁТ И БОНУСЫ
              </button>
              <div className=" flex justify-center items-center flex-row gap-[10px] text-white">
                <label className=''>
                  <input type="checkbox" className='w-[15px] h-[15px] ' />
                </label>
                <p>Нажимая на кнопку вы соглашаетесь <br />
                  c условимя <a href="№" className='underline text-red-600 tel:text-[16px] transition-all duration-[]'>Политика конфиденциальности</a>
                  </p>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
