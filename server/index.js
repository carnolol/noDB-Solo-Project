const express = require('express')
const PORT = 4001
const addToolsController = require('./controllers/getTools')
const app = express()
app.use(express.json())



app.get('/api/tools/:id', addToolsController.getOneTool)
app.get('/api/tools', addToolsController.getAllTools)
app.post('/api/tools', addToolsController.addNewTool)
app.put('/api/tools/:id', addToolsController.updateTools)
app.delete('/api/tools/:id', addToolsController.deleteTool)

app.listen(PORT, () => console.log(`PULLING INTO PORT ${PORT}`))