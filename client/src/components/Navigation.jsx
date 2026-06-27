import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { playClank, toggleSound, isSoundEnabled } from '../utilities/sound.js'
import '../App.css'
import '../css/Navigation.css'

const Navigation = () => {
    const navigate = useNavigate()
    const [soundOn, setSoundOn] = useState(true)

    const handleNav = (path) => {
        playClank()
        navigate(path)
    }

    const handleToggleSound = () => {
        const newState = toggleSound()
        setSoundOn(newState)
    }

    return (
        <nav>
            <ul>
                <li><h1>Bolt Bucket 🏎️</h1></li>
            </ul>
            <ul>
                <li><button className='nav-btn' onClick={() => handleNav('/')}>Customize</button></li>
                <li><button className='nav-btn' onClick={() => handleNav('/customcars')}>View Cars</button></li>
                <li><button className='nav-btn' onClick={handleToggleSound}>{soundOn ? '🔊' : '🔇'}</button></li>
            </ul>
        </nav>
    )
}

export default Navigation