import React from 'react'
import logo from '../assets_clining/logo.png'
import background from '../assets_clining/background.png'

const Header = () => {
    return (
        <div className="w-[100%] h-[100vh] bg-no-repeat bg-cover bg-center m-[0_0_100px]"
            style={{ backgroundImage: `url(${background})` }}>
            <div className="flex items-center justify-around w-[80%] m-auto">
                <div className="flex gap-[20px]">
                    <img src={logo} alt="" className='' />
                    <div className="">
                        <h3 className='text-[20px] font-semibold text-blue-500'>
                            Soft Clean
                        </h3>
                        <p className='text-gray-500 text-[14px] font-semibold'>
                            Бережная уборка <br />
                            помещений СПБ
                        </p>
                    </div>
                </div>
                <div className="flex flex-col justify-center items-end">
                    <h3 className='text-[20px] font-semibold'>
                        8-800-700-60-50
                    </h3>
                    <p className='text-[14px] font-semibold text-gray-500'>
                        Пн-Вс: 9:00 - 21:00
                    </p>
                </div>
                <div className="flex justify-center items-center gap-[10px] ">
                    <p className='text-end text-gray-500 font-[600]'>
                        Быстрая связь с нами <br />
                        в мессенджерах:
                    </p>
                    <div className="flex justify-center items-center text-[35px] gap-[5px]">
                        <i className="fa-brands fa-telegram text-blue-400"></i>
                        <i className="fa-brands fa-whatsapp text-green-500"></i>
                    </div>
                </div>
                <div className="">
                    <button className="bg-white text-gray-600 border border-solid border-blue-500 text-[15px] p-[10px_30px] rounded-full cursor-pointer hover:bg-blue-500 hover:text-white transition duration-[400ms]">
                        Заказать Консультацию
                    </button>
                </div>
            </div>
            <div className="flex justify-start items-center w-[80%] m-auto">
                <div className='  flex justify-center items-start flex-col m-[100px_100px]  text-gray-700 gap-[60px]'>
                    <h1 className='text-[34px] font-[700]'>
                        Бережная уборка квартир и домов <br />
                        в СПБ по фиксированной стоимости <br />
                        от 80₽/м²
                    </h1>
                    <p className='text-[18px] font-[600]'>
                        Выберите вид уборки, получите точный расчёт <br /> стоимости и скидку 10% на первый заказ
                    </p>
                    <div className="flex justify-center items-center gap-[15px]">
                        <button className="w-[297px] h-[80px] rounded-[100px]  text-[15px] text-white font-semibold bg-[rgba(67,170,255,1)] shadow-[inset_0px_4px_10px_0px_rgba(255,255,255,0.3)] hover:translate-y-[-10px] transition duration-[400ms]">РАССЧИТАТЬ СТОИМОСТЬ</button>
                        <button className="w-[297px] h-[80px] rounded-[100px]  text-[15px] text-white font-semibold bg-[rgba(255,194,77,1)] shadow-[inset_0px_4px_10px_0px_rgba(255,255,255,0.3)] hover:translate-y-[-10px] transition duration-[400ms]">ВЫБРАТЬ ВИД УБОРКИ</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
