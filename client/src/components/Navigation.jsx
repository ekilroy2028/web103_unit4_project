import React from 'react'
import { useNavigate } from 'react-router-dom'
import { playClank } from '../utilities/sound.js'
import '../App.css'
import '../css/Navigation.css'

const Navigation = () => {
    const navigate = useNavigate()

    const handleNav = (path) => {
        playClank()
        navigate(path)
    }

    return (
        <nav>
            <ul>
                <li><h1>Bolt Bucket 🏎️</h1></li>
            </ul>
            <ul>
                <li><button className='nav-btn' onClick={() => handleNav('/')}>Customize</button></li>
                <li><button className='nav-btn' onClick={() => handleNav('/customcars')}>View Cars</button></li>
            </ul>
        </nav>
    )
}

export default Navigation