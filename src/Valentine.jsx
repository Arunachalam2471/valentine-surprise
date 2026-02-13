import React, { useRef, useState, useEffect } from "react";
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

    // NEW STATES
    const [showCelebration, setShowCelebration] = useState(false);
    const [countdown, setCountdown] = useState(5);

    const handleYes = () => {
        setAnswered(true);
        setShowCelebration(true);

        if (audioRef.current) {
            audioRef.current.play();
        }
    };

    // Countdown Logic
    useEffect(() => {
        if (showCelebration && countdown > 0) {
            const timer = setTimeout(() => {
                setCountdown((prev) => prev - 1);
            }, 1000);
            return () => clearTimeout(timer);
        }

        if (countdown === 0 && showCelebration) {
            setTimeout(() => {
                setShowCelebration(false);
                setLoveAccepted(true);
                setShowContent(true);
            }, 800);
        }
    }, [showCelebration, countdown]);

    const handleNo = () => {
        setShowMessage(true);
    };

    return (
        <>
            {/* QUESTION SCREEN */}
            {!answered && (
                <div className="question-screen">
                    <h1 className="love-question">Do You Love Me? 💖</h1>

                    <p className="love-subtext">
                        My heart beats only for you 💞✨
                        You are my today and all of my tomorrows 💕
                    </p>

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

            {/* CELEBRATION SCREEN */}
            {showCelebration && (
                <div className="modern-celebration">
                    <div className="glow-bg"></div>

                    <div className="celebration-card">
                        <h1 className="modern-text">
                            💞 This Is Where Our Forever Begins 💞
                        </h1>
                        <h2 className="modern-count">{countdown}</h2>
                    </div>

                    <div className="light-particles">
                        {Array.from({ length: 30 }).map((_, i) => (
                            <span key={i}></span>
                        ))}
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

                    {/* Love Message */}
                    {showContent && (
                        <div className="love-container show">
                            <div className="love-card">
                                <h2>My Forever Valentine 💞</h2>

                                <p>
                                    From the moment you entered my life, everything became more
                                    beautiful 🌸✨ <br /><br />

                                    You didn’t just bring love into my world…
                                    you brought light, peace, and a reason to smile every single day 💞 <br /><br />

                                    Your smile is my comfort, your voice is my favorite sound,
                                    and your presence is my safest place 💖 <br /><br />

                                    I don’t just love you…
                                    I cherish you, I respect you, and I choose you — today, tomorrow,
                                    and for the rest of my life ❤️ <br /><br />

                                    Believe me, no matter what happens,
                                    I will always stand beside you, protect you, support you,
                                    and take care of you with all my heart 🤍 <br /><br />

                                    You are not just my love…
                                    You are my forever, my home, my everything 💍✨
                                </p>
                                <h2 className="couple-name">
                                    💖 Aishu ❤️ Arun 💖
                                </h2>
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

            <audio ref={audioRef} src={Song} loop />
        </>
    );
};

export default Valentine;
