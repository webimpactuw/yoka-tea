import React from "react";
import './FeatureDrink.css';
import haloVid from './pictures/halo-vid.mov';
const FeatureDrink = () => {
    return (
        <div className="feature-drink-page">
            <video className="feature-video" src={haloVid} autoPlay loop muted playsInline />
            <div className="description">
                <h2 className="drink-name">Yoka’s Halo Halo</h2>
                <p>
                    Lychee jelly, boba, red bean, coconut smoothie,<br />
                    topped with ube ice cream and house made flan.
                </p>
            </div>
        </div>
    );
};
export default FeatureDrink;