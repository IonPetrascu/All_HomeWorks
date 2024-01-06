import React, { useState } from 'react'
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { GiHamburgerMenu } from "react-icons/gi";
import { FaLightbulb } from "react-icons/fa";
import { FaRegLightbulb } from "react-icons/fa";

function Categorie({ value, onChageCategory, countryName, setCountryName, setSearch, inputActive, setInputActive }) {
    const [theme, setTheme] = useState(true)
    document.body.setAttribute('data-theme', theme)
    const search = (e) => {
        if (e.key === 'Enter') {
            setSearch(e.target.value)

        }
        if (e.target.value === '') {
            setSearch(e.target.value)
        }

    }
    const categories = [
        'business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology'
    ]
    const inputFocusEnter = () => {
        setInputActive(true)

    }
    const inputFocusOut = () => {
        setInputActive(false)

    }
    const openMobileMenu = () => {
        const nav = document.querySelector('.nav');
        nav.classList.add('nav-mobile');
    }
    const closeMobileMenu = () => {
        const nav = document.querySelector('.nav');
        nav.classList.remove('nav-mobile');
    }
    const changeTheme = () => {
        document.body.toggleAttribute('data-theme', !theme)
        setTheme(!theme)
    }


    return (
        <div className='categories'>
            <div onClick={openMobileMenu} className='burger-mobile'>
                <GiHamburgerMenu />
            </div>
            <div className='nav'>
                <div onClick={closeMobileMenu} className='burger-mobile-close'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="40px" height="40px"><path d="M 7.71875 6.28125 L 6.28125 7.71875 L 23.5625 25 L 6.28125 42.28125 L 7.71875 43.71875 L 25 26.4375 L 42.28125 43.71875 L 43.71875 42.28125 L 26.4375 25 L 43.71875 7.71875 L 42.28125 6.28125 L 25 23.5625 Z" /></svg></div>
                {!inputActive && <> <div>
                    <select value={countryName} className='select' onChange={(e) => setCountryName(e.target.value)}>
                        <option className='select-item' value="us">USA</option>
                        <option className='select-item' value="ru">Russian</option>
                        <option className='select-item' value="gb">Great Britain</option>
                        <option className='select-item' value="fr">French</option>
                        <option className='select-item' value="de">Germany</option>
                    </select>
                </div>

                    <ul>
                        {categories.map((category, i) => (
                            <li onClick={() => onChageCategory(category)} className={value === category ? 'active' : ''} key={i}>
                                {category}
                            </li>
                        ))}
                    </ul></>}
            </div>




            <div className='header-right'>
                <input onBlur={inputFocusOut} onFocus={inputFocusEnter} className='input' onChange={search} onKeyDown={(e) => search(e)} type="search" />
                <div onClick={changeTheme} className='btn-theme'>{theme ? <FaRegLightbulb /> : < FaLightbulb />}</div>
            </div>

        </div>
    )
}

export default Categorie