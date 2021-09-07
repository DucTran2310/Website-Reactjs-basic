import { Button } from 'components/Button/Button';
import React from 'react';
import './Hero.css';
import '../../App.css';

function Hero() {
    return (
        <div>
            <div className="hero-container">
            <video src={"/src/assets/video/video-1.mp4"} autoPlay loop muted />
            <h1>ADVENTURE AWAITS</h1>
            <p>What are you waiting for?</p>
            <div className="hero-btns">
                <Button 
                    className="btns" 
                    buttonStyle="btn--outline"
                    buttonSize="btn--large"
                >
                    GET STARTED
                </Button>
                <Button 
                    className="btns" 
                    buttonStyle="btn--primary"
                    buttonSize="btn--large"
                >
                    WATCH TRAILER <i className="far fa-play-circle" />
                </Button>
            </div>
        </div>
        </div>
    )
}

export default Hero;
