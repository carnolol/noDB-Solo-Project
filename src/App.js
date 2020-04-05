import './App.css';
import React, { Component } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import EditTools from './components/EditTools'
import AddTools from './components/AddTools'
import axios from 'axios'


export class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tools: [],
    }
    this.addTools = this.addTools.bind(this)
    this.editTool = this.editTool.bind(this)
    this.deleteTool = this.deleteTool.bind(this)
  }
  componentDidMount() {
    axios.get('/api/tools').then(res => {
      // console.log(res.data)
      this.setState({
        tools: res.data
      })
    })
  }
  addTools (tool){
    console.log(tool)
    axios.post('/api/tools', tool).then(res => {
      this.setState({
        tools: res.data
      })
      })
    }
  editTool(id, newName) {
    axios.put(`/api/tools${id}`, {newName}).then(res => {
      this.setState({
        tools: res.data
      })
    })
  }
  deleteTool(id) {
    axios.delete(`/api/tools/${id}`).then(res => {
      this.setState({
        tools: res.data
      })
    })
  }
  render() {
    const allTools = this.state.tools.map(tool => {
      return (
      <AddTools
        key={tool.id}
        tool={tool}
        deleteTool={this.deleteTool}
        addTools={this.addTools}
        tools={this.state.tools}
        editTool={this.editTool}
      />
        // <img className="display-image" src={tool.img} alt="tool" />
        // <h4>{tool.name}</h4>
        // <p>{tool.text}</p>
        // <h4>${tool.price}</h4>
        // <button onClick={() => this.deleteTool(tool.id)}>DELETE TOOL</button>
        // <button>EDIT</button>
      
    )})
    return (
      <div className="App">
        <Header />
        {allTools}
        <EditTools 
          tools={this.state.tools}
          editTool={this.editTool}
        />
        <Footer 
          tools={this.state.tools}
          editTool={this.editTool}/>
      </div>
    )
  }
}

export default App
