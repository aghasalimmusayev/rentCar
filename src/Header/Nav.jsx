import React from 'react'
import "./nav.css"
import Logo from './Logo'

function Nav() {
    return (
        <>
            <div className="top_panel">
                <div className="container">
                    <div className="top_content">
                        <div className="left_site">
                            <div><i className="fa-solid fa-phone"></i> +994 77 399 78 11</div>
                            <div><i className="fa-solid fa-envelope"></i> aga77ams@gmail.com</div>
                            <i className="fa-brands fa-instagram"></i>
                            <i className="fa-brands fa-facebook"></i>
                        </div>
                        <div className="right_site">
                            <span>EN</span>
                            <span>AZ</span>
                            <span>RU</span>
                        </div>
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