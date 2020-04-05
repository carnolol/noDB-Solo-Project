import React from 'react'
import '../App.css'
import EditTools from './EditTools'


function Footer (props){
    const toolList = props.tools.map(tool => {
        return (
            <EditTools
                key={tool.id}
                tool={tool}
                id={tool.id}
                editTool={props.editTool} />
        )
    })
    //this will destructure each object and get the price of each object, making an array with just the prices of each object in it. then .reduce will combine everything in that array. 

    const sum = props.tools.map(tool => {
        return tool.price
    }).reduce((total, price) => total + price, 0)
    
    return (
        <div>
            <h3 className="sum-of-price">
                 How much money do I need to buy these tools? DIS MUCH: ${sum}
            </h3>
        {toolList}
            <footer className="footer">
                Thank you for looking at my project! I LOVED slamming my head into a wall to get to this point. it really was fun :{')'}
            </footer>
        </div>
    )
}

export default Footer