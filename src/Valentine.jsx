import React, { useRef, useState } from "react";
import "./style.css";
import Six from "../src/assets/6.jpeg";
import Seven from "../src/assets/7.jpeg";
import Eight from "../src/assets/8.jpeg";
import Nine from "../src/assets/9.jpeg";
import Ten from "../src/assets/10.jpeg";
import Song from "../src/assets/song.mp3";

const Valentine = () => {
    const audioRef = useRef(null);
    const [answered, setAnswered] = useState(false);
    const [loveAccepted, setLoveAccepted] = useState(false);
    const [showMessage, setShowMessage] = useState(false);
    const [showContent, setShowContent] = useState(false);
    const [animateUp, setAnimateUp] = useState(false);


    const handleYes = () => {
        setAnswered(true);
        setLoveAccepted(true);

        if (audioRef.current) {
            audioRef.current.play();
        }

        // First move wrapper smoothly
        setAnimateUp(true);

        // Then show content after wrapper animation completes
        setTimeout(() => {
            setShowContent(true);
        }, 1000); // match CSS transition time
    };


    const handleNo = () => {
        setShowMessage(true);
    };

    return (
        <>
            {/* QUESTION SCREEN */}
            {!answered && (
                <div className="question-screen">
                    <h1 className="love-question">Do You Love Me? 💖</h1>

                    <div className="btn-group">
                        <button className="yes-btn" onClick={handleYes}>
                            Yes 💕
                        </button>
                        <button className="no-btn" onClick={handleNo}>
                            No 😢
                        </button>
                    </div>
                </div>
            )}

            {/* LOVE ACCEPTED SCREEN */}
            {loveAccepted && (
                <>
                    {/* Floating Hearts */}
                    <div className="floating-hearts">
                        {Array.from({ length: 15 }).map((_, i) => (
                            <span key={i}>💖</span>
                        ))}
                    </div>

                    {/* Headline */}
                    <div id="hedlinecontainer">
                        <div id="shine">Happy Valentine's Day 💞</div>
                    </div>

                    {/* Gallery */}
                    <div className="gallery">
                        <img src={Six} alt="" />
                        <img src={Seven} alt="" />
                        <img src={Nine} alt="" />
                        <img src={Eight} alt="" />
                        <img src={Ten} alt="" />
                    </div>

                    {/* Love Message (Delayed Fade In) */}
                    {showContent && (
                        <div className={`love-container ${showContent ? "show" : ""}`}>
                            <div className="love-card">
                                <h2>My Forever Valentine 💞</h2>

                                <p>
                                    From the moment you entered my life, everything became more
                                    beautiful 🌸 <br />
                                    <br />
                                    Your smile is my peace, your love is my strength, and your
                                    presence is my happiness. 💖 <br />
                                    <br />
                                    I promise to stand by your side, today, tomorrow, and forever.
                                    You are my heart, my world, my everything ❤️
                                </p>

                                <div className="hearts">💖 💕 💗 💘 💞</div>
                            </div>
                        </div>
                    )}
                </>
            )}

            {/* NO BUTTON POPUP */}
            {showMessage && (
                <div className="love-popup">
                    <div className="love-box">
                        <h2>I know you love me 😏💖</h2>
                        <p>Don't act smart 😌💕</p>
                        <button onClick={() => setShowMessage(false)}>
                            Okay Fine 😅
                        </button>
                    </div>
                </div>
            )}

            {/* Background Music */}
            <audio ref={audioRef} src={Song} loop />
        </>
    );
};

export default Valentine;
