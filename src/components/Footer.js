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
            <footer>
                THIS IS MY FOOTER
            </footer>
        </div>
    )
}

export default Footer