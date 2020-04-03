import './App.css';
import React, { Component } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import EditTools from './components/EditTools'
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

  }
  editTool(id, newName, newText, newImg) {

  }
  deleteTool(id) {

  }
  render() {
    const allTools = this.state.tools.map(tool => (
      <div key={tool.id}>
        <img className="display-image" src={tool.img}/>
        <h4>{tool.name}</h4>
        <p>{tool.text}</p>
        <h4>${tool.price}</h4>
      </div>
    ))
    return (
      <div className="App">
        <Header />
        {allTools}
        <EditTools />
        <Footer />
      </div>
    )
  }
}

export default App
