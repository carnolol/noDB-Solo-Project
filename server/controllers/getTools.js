const tools = require('../../tools.json')
let id = tools[tools.length -1].id+1

module.exports = {
    getAllTools: (req, res) => {
     res.status(200).send(tools)
    },
    getOneTool: (req, res) => {
        const tool = tools.find(tool => {
            return tools.id === +req.params.id
        })
        if(tool){
            res.status(200).send(tool)
        } else {
            res.status(404).send('Tool not Found')
        }
    },
    addNewTool: (req, res) => {
        const {name, text, img, price} = req.body
        const newTool = {
            id,
            name,
            text,
            img,
            price
        }
        tools.push(newTool)
        id++
        res.status(200).send(tools)
        console.log(req.body, 'Added tool')
 },
    updateTools: (req,res) => {
        const {id} = req.params
        const {updatedTool} = req.body
        console.log(req.body)
        const index = tools.findIndex(tool => tool.id === +id)
        if(index === -1){
            return res.status(404).send('Tool not found')
        }
        // the ...updatedTool will overide any pre existing keyvalues on the tools object, specificly if they share a property name. if we only want to update the price we can do that without affecting the other key values. 
        tools[index] = {...tools[index], ...updatedTool}
        res.status(200).send(tools)
    },
    deleteTool: (req, res) => {
        const {id} = req.params
        const index = tools.findIndex(tool => {
            return tool.id === + id
        })
        if( index === -1){
            return res.status(404).send('TOOL NOT FOUND')
        }
        tools.splice(index, 1)
        res.status(200).send(tools)
        
    }
}