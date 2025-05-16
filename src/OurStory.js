import React from 'react'
import './OurStory.css'

export default function OurStory() {
    const images = [require("./pictures/Copy of FU008291.JPG"),
                    require("./pictures/Copy of IMG_1725.JPG"),
                    require("./pictures/Copy of IMG_2113.JPG"),
                    require("./pictures/Copy of IMG_2118.JPG"),
                    require("./pictures/Copy of IMG_2077.JPG")
    ]

    return (
        <div className="ourstory-wrapper">
            <div className="ourstory-title-container">
                <div className="ourstory-title-gradient"></div>
                <h2 className="ourstory-title">Our Story</h2>
            </div>

            <div className="ourstory-images-container">
                <div className="ourstory-image-grid">
                    {images.map((src, index) => (
                        <div key={index} className="ourstory-image-cell">
                        <img key={index} src={src} alt={`${index + 1}`} className="ourstory-images" />
                        </div> ))}
                        <div className="ourstory-gradient-overlay-left"></div>
                        <div className="ourstory-gradient-overlay-right"></div>
                </div>
                
            </div>

            <div className="ourstory-footer">
                <p className="ourstory-social">@yokateaofficial</p>
                <div className='ourstory-about-button-container '>
                    <a href="/about"><button className="ourstory-aboutUs">About Us</button> </a>
                </div>
            </div>
        </div>
    )
}