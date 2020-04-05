import React from 'react'
import '../App.css'
import EditTools from './EditTools'


function Footer (props){
    const toolList = props.tools.map(tool => {
        return (
            <EditTools
                key={tool.id}
                tool={tool}
                editTool={props.editTool} />
        )
    })
    return (
        <div>
            {toolList}
        </div>
    )
}

export default Footer