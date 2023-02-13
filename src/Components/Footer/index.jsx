import React from 'react'
import "./Footer.css"
import Group6 from "../../Group6.svg"
import tele from "../../tele.svg"
import insta from "../../insta.svg"
import Vector2 from "../../Vector2.svg"
import Vector1 from "../../Vector1.svg"

const Footer = () => {
    return (
        <>
            <div className="footerCont">
                <div className="innerCont">
                    <div className="logo">
                        <div className="doglogo">
                            <img src={Group6} alt="" />
                        </div>
                        <div className='para'><h2>DogHub</h2>
                        <div className="pop">
                        <p>The Dogs API was made by dog.ceo, you could
                                buy the author a dog treat via this link https://www.paypal.com/paypalme/dogapi, 
                                you could also view the project on Github
                                via this link https://github.com/ElliottLandsborough/dog-ceo-api
                            </p>
                        </div>
                        </div>
                        
                    </div>
                    <div><h2>Popular</h2>
                    <div className='pop'>
                        <h4>Categories</h4>
                        <h4>New Arrivals</h4>
                        <h4>Popular</h4>
                    </div>
                       
                    </div>
                    <div><h2>Breeds</h2>
                    <div className='pop'>
                        <h4>About Us</h4>
                        <h4>Contact Us</h4>
                        <h4>FAQ</h4>
                    </div>
                       
                    </div>
                    <div><h2>Join Newsletter</h2>
                        <div className="pop">
                        <p>To learn more and get major updates,<br /> subscribe to our newsletter</p>
                        </div>
                        <div className='emailCont'>
                        <div className='email'><input type="email" placeholder='enter your email address' /></div>
                        <div className='tele'><img src={tele} alt="" /></div>
                        </div>
                        
                    </div>
                    
                </div>
                <hr/>
                <div className="copywriteCont">
                    <div className="policy">
                    <h4>&copy; 2023 Candy</h4>
                    <h4 className='deco'>Privacy Policy</h4>
                    <h4 className='deco'>Terms of service</h4>
                    </div>
                    <div className="langCont">
                        <div className="lang">
                            <div><h4>Language</h4></div>
                            <select name="" id=""><option value="">English</option></select>
                        </div>
                        <div className="social">
                            <div><h4>Follow Us</h4></div>
                            <div className="handles">
                                <img src={Vector2} alt="" />
                                <img className='img' src={insta} alt="" />
                                <img className='img'src={Vector1} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                    
            </div>
        </>
    )
}

export default Footer