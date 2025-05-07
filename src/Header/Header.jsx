import React from 'react'
import Nav from './Nav'
import "./header.css"
import headerImg from "../img/cars-bg.webp"
import CarLogo from './CarLogo'
import Cart from './Cart'

function Header({ text, setText }) {
    return (
        <header>
            <Nav text={text} setText={setText} />
            <div className="container">
                <div className="header_content">
                    <div className='booking'>
                        <a href="tel:+994773997811" className='whatsapp'>
                            <i className="fa-brands fa-whatsapp"></i>
                            <span>Book by Whatsapp</span>
                        </a>
                        <a href="" className='telegram'>
                            <i className="fa-brands fa-telegram"></i>
                            <span>Book by Telegram</span>
                        </a>
                        <a href="" className='fast_booking'>
                            <i className="fa-solid fa-car"></i>
                            <span>Click to fast Booking</span>
                        </a>
                    </div>
                    <div className='heading'>
                        <div className="heading_content">
                            <h1>Rental Cars From Just 50₼/Day without Deposit</h1>
                            <p>Our cars are matching all required standards and we are offering you car
                                rental on most profitable conditions in Azerbaijan Republic area.</p>
                            <button className='book_btn'>BOOK NOW</button>
                        </div>
                        <div className="heading_img">
                            <img src={headerImg} alt="" />
                        </div>
                        <div className="example_cars_img">
                            <CarLogo />
                        </div>
                    </div>
                </div>
                <div className='cart_box'>
                    <Cart />
                </div>
            </div>
        </header>
    )
}

export default Header