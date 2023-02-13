import { React } from "react";
import "./Navbar.css"
import Group6 from '../../Group6.svg'



function Navbar() {
    return (
        <>
        <header>
        <div className="logo">
            <div className="doglogo">
                <img src={Group6} alt="" />
            </div>
            <div><h2>DogHub</h2></div>
        </div>

        <div className="date">
            <h4>{new Date().toDateString()}</h4>
            
        </div>
        </header>
        <hr />

       
        
        </>
    )
}

export default Navbar