import React from 'react'
import '../App.css'

function Header (){
    return (
        <div>
            <h1 className="main-header"> 
                <img 
                    className="saw-stop" 
                    src="https://www.sawstop.com/images/uploads/product/for-educator.png" 
                    alt="best-tool"/>
                Mike's Tool Garage 
                <img
                    className="saw-stop" 
                    src="https://www.sawstop.com/images/uploads/product/for-educator.png"
                    alt="best-tool"
                />
            </h1>
        </div>
    )
}

export default Header