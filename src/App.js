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
      tools: []
    }
    this.addTools = this.addTools.bind(this)
    this.editTool = this.editTool.bind(this)
    this.deleteTool = this.deleteTool.bind(this)
    this.handleAddTool = this.handleAddTool.bind(this)
  }
  componentDidMount() {
    axios.get('/api/tools').then(res => {
      // console.log(res.data)
      this.setState({
        tools: res.data
      })
    })
  }
  addTools(tool) {
    axios.post('/api/tools', tool).then(res => {
      this.setState({
        tools: res.data
      })
    })
  }
  handleAddTool(e) {
    e.preventDefault()
    const newTool = {
      name: this.state.tools.name,
      text: this.state.tools.text,
      img: this.state.tools.img,
      price: this.state.tools.price
    }
    this.addTools(newTool)
    // this.setState({tools: [...this.state.tools, newTool]})
  }
  editTool(id, newName, newText, newImg) {

  }
  deleteTool(id) {
    axios.delete(`/api/tools/${id}`).then(res => {
      this.setState({
        tools: res.data
      })
    })
  }
  render() {
    console.log(this.state.tools)
    const allTools = this.state.tools.map(tool => (
      <div key={tool.id}>
        <img className="display-image" src={tool.img} alt="tool" />
        <h4>{tool.name}</h4>
        <p>{tool.text}</p>
        <h4>${tool.price}</h4>
        <button onClick={() => this.deleteTool(tool.id)}>DELETE TOOL</button>
        <button>EDIT</button>
      </div>
    ))
    return (
      <div className="App">
        <Header />
        {allTools}
        <AddTools
          addTools={this.addTools}
          handleAddTool={this.handleAddTool}
          tools={this.state.tools}
        />
        <EditTools />
        <Footer />
      </div>
    )
  }
}

export default App
