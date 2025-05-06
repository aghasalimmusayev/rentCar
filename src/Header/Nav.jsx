import React from 'react'
import "./nav.css"
import Logo from './Logo'
import DarkMode from './DarkMode'
import MenuToggle from './MenuToggle'

function Nav() {
    return (
        <>
            <div className="top_panel">
                <div className="container">
                    <div className="top_content">
                        <div className="left_site">
                            <a href="tel:+994773997811"><i className="fa-solid fa-phone"></i>+994773997811</a>
                            <a href="mailto:aga77ams@gmail.com"><i className="fa-solid fa-envelope"></i>aga77ams@gmail.com</a>
                            <a href=""><i className="fa-brands fa-instagram"></i></a>
                            <a href=""><i className="fa-brands fa-facebook"></i></a>
                        </div>
                        <div className="right_site">
                            <a href="">EN</a>
                            <a href="">AZ</a>
                            <a href="">RU</a>
                        </div>
                        <DarkMode />
                        <MenuToggle />
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="navlinks">
                    <Logo />
                    <ul className='links'>
                        <li><a href="">Homepage</a></li>
                        <li><a href="">Our cars</a></li>
                        <li><a href="">Airport transfer</a></li>
                        <li><a href="">Discover Azerbaijan</a></li>
                        <li><a href="">Contacts</a></li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Nav