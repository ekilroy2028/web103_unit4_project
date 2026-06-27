keykilroy@keys-Mac-mini web103_unit4_project % cat client/src/components/Navigation.jsx
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
                <li><a onClick={() => handleNav('/')} role='button' style={{ cursor: 'pointer' }}>Customize</a></li>
                <li><a onClick={() => handleNav('/customcars')} role='button' style={{ cursor: 'pointer' }}>View Cars</a></li>
            </ul>
        </nav>
    )
}

export default Navigation%                                                                 