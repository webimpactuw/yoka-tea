import React from 'react';
import "./Gallery.css";
import drink1 from "./pictures/drink1.png";
import drink2 from "./pictures/drink2.png";
import drink3 from "./pictures/drink3.png";
import cafe from "./pictures/gallery-cafe.png"
import img1 from "./pictures/Copy of IMG_1725.JPG";
import popup from "./pictures/popup.png";
import img2 from "./pictures/Copy of IMG_0760.JPG";
import img3 from "./pictures/Copy of IMG_2077.JPG";
import img4 from "./pictures/Copy of A&M.jpg";
import tt from "./pictures/tik-tok.png";
import ig from "./pictures/instagram.png";


export default function Gallery() {

    return (

        <div className="gallery-wrapper"> 
            <div className="gallery-title-container">
                <h1 className="gallery-title">GALLERY</h1>
                <div className="gallery-divider"></div>
            </div>

            <div className="gallery-container">
                <div className="imgs-container"> 
                    <img src={drink2} alt= "img1" className="gal-img gal-img1"></img>
                    <img src={drink1} alt= "img2" className="gal-img gal-img2"></img>
                    <img src={cafe} alt= "cafe" className="gal-img gal-img3"></img>
                    <img src={drink3} alt= "drink3" className="gal-img gal-img4"></img>
                    <img src={img1} alt= "img" className="gal-img gal-img5"></img>
                
                    <img src={popup} alt= "img1" className="gal-img gal-img6"></img>
                    <img src={img2} alt= "img2" className="gal-img gal-img7"></img>
                    <img src={img3} alt= "img3" className="gal-img gal-img8"></img>
                    <img src={img4} alt= "img4" className="gal-img gal-img9"></img>
                    <img src={cafe} alt= "cafe" className="gal-img gal-img10"></img>

                    <div className = "cheri-review">
                        <h3 className="gal-review-title">cheri <br></br>★★★★★</h3>
                        <h4 className="gal-review-text">flavors are so unique and well made! 
                            every thing i've tried is delicious! 
                            and the owners are so kind and humble as well. 
                            10/10 recommend to anyone and everyone, i rave about yoka to all my friends.</h4>

                    </div>

                    <div className = "louie-review">
                        <h3 className="gal-review-title">Louie Guerrero<br></br>★★★★★</h3>
                        <h4 className="gal-review-text">The creativity and attention to detail at this pop-up boba shop were unmatched! 
                            Every drink felt like a work of art, with unique flavors and perfectly balanced sweetness. 
                            The team was friendly and made the whole experience so enjoyable. 
                            I can&#39;t wait to visit again and try more of their special menu items!</h4>

                    </div>

                    <div className = "filmore-review">
                        <h3 className="gal-review-title">Filmore Bouldes<br></br>★★★★★</h3>
                        <h4 className="gal-review-text">Incredible product, kind staff.</h4>

                    </div>

                    <div className = "jayson-review">
                        <h3 className="gal-review-title">Jayson Vcortez<br></br>★★★★★</h3>
                        <h4 className="gal-review-text">I was blown away by the flavors at this pop-up boba shop! 
                            The matcha latte was one of the best I&#39;ve ever had—smooth, earthy, and not overly sweet. 
                            The staff was so kind and made personalized recommendations that I absolutely loved. 
                            If you&#39;re a boba lover, you don&#39;t want to miss this place!.</h4>

                    </div>
                </div>
            </div>
        <h3 className="gal-socials-title">View more!<br/></h3>
        <div className="gal-socials">
            <div className="gal-socials-div">
                <img className="gal-socials-img" src={ig} alt="ig"></img>
                <a href="https://www.instagram.com/yokateaofficial/"> <p className="gal-socials-text">@yokateaofficial </p></a>
            </div>
            <div className="gal-socials-div">
                <img className="gal-socials-img" src={tt} alt="tt"></img>
                <a href="https://www.tiktok.com/@yokaseattle"><p className="gal-socials-text">@yokaseattle </p></a>
            </div>


        </div>
        
        
        </div>


)}
