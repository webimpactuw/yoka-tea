import React from 'react';
import './Merch.css';
import merchImage from './pictures/merch.JPG';
import smiley from './pictures/smiley-face.png';

export default function Merch() {
    return (
        <div className="merch-wrapper">
                <div className="merch-title-container">
                    <div className="merch-title">Check out our Merch & More!</div>
                    <img src ={merchImage} className="merch-image" alt="Yoka Graphic T-Shirt"></img>
                </div>
                <div className="merch-link">Yoka Graphic T-Shirt- $34</div>
                <div/>

                <img src={smiley} className="smiley" id="merch-smiley1" alt="smiley face"></img>
                <img src={smiley} className="smiley" id="merch-smiley2" alt="smiley face"></img>
                <img src={smiley} className="smiley" id="merch-smiley3" alt="smiley face"></img>
                <img src={smiley} className="smiley" id="merch-smiley4" alt="smiley face"></img>

        </div>
    )

}