import React from 'react'
import './OurStory.css'

export default function OurStory() {
    const images = [require("./pictures/Copy of FU008291.JPG"),
                    require("./pictures/Copy of IMG_1725.JPG"),
                    require("./pictures/Copy of IMG_2113.JPG"),
                    require("./pictures/Copy of IMG_2118.JPG"),
                    require("./pictures/Copy of IMG_2077.JPG"),
                    require("./pictures/Copy of IMG_2077.JPG"),
                    require("./pictures/Copy of IMG_2077.JPG"),
                    require("./pictures/Copy of IMG_2077.JPG"),
    ]

    return (
        <div className="wrapper">
            <div className="title-container">
                <h2 className="title">Our Story</h2>
            </div>

            <div className="images-container">
                <div className="image-grid">
                    {images.map((src, index) => (
                        <div key={index} className="image-cell">
                        <img key={index} src={src} alt={`${index + 1}`} className="images" />
                        </div> ))}
                </div>
            </div>

            <div className="footer">
                <p className="social">@yokateaofficial</p>
                <button className="aboutUs">View Gallery</button>
            </div>
        </div>
    )
}