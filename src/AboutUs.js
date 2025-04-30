import React from 'react';
import './AboutUs.css';
import aboutUsImage from './pictures/Copy of FU008291.JPG';


function AboutUs() {

    return (

        <div className="AboutUs">

            <h1 class="title">ABOUT US</h1>
            <hr />
            <img src={aboutUsImage} id="about-us-image" alt="About Us" />
            <h2>More than BOBA.</h2>
            <p>Welcome to Yoka Tea—where we are more than just boba. We're a haven of unity in a world that often feels divided.</p>
            <p>Embark on a fulfilling journey with us in this temporary space. While we prepare for our official storefront, we will humbly share a glimpse of what Yoka has to offer. </p>
             <p>Join us on weekends, as we eagerly anticipate growing together with you.</p>
            <br></br>
        </div> 

            );
                                                                                    
}
      
    export default AboutUs;

