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
    return (
        <div>
            {toolList}
            <footer className="footer">
                Thank you for looking at my project! I LOVED slamming my head into a wall to get to this point. it really was fun :{')'}
            </footer>
        </div>
    )
}

export default Footer