import React, { useRef, useState } from 'react';
import './style.css';
import Six from '../src/assets/6.jpeg';
import Seven from '../src/assets/7.jpeg';
import Eight from '../src/assets/8.jpeg';
import Nine from '../src/assets/9.jpeg';
import Ten from '../src/assets/10.jpeg';
import Song from "../src/assets/song.mp3";

const Valentine = () => {

    const audioRef = useRef(null);
    const [started, setStarted] = useState(false);

    const startExperience = () => {
        setStarted(true);
        if (audioRef.current) {
            audioRef.current.play();
        }
    };

    return (
        <>
            {!started && (
                <div className="start-screen" onClick={startExperience}>
                    <h1 className='fname'>💖 Aishu For U Please Click 💖</h1>
                </div>
            )}

            {started && (
                <>
                    <div id="hedlinecontainer">
                        <div id="shine">Happy Valentine's Day💞</div>
                    </div>

                    <div className="gallery">
                        <img src={Six} alt="a girl" />
                        <img src={Seven} alt="a girl" />
                        <img src={Nine} alt="a girl" />
                        <img src={Eight} alt="a girl" />
                        <img src={Ten} alt="a girl" />
                    </div>
                </>
            )}

            <audio ref={audioRef} src={Song} loop />
        </>
    )
}

export default Valentine;
