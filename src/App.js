import './App.css';
import React, { Component } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
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
    // console.log(tool)
    axios.post('/api/tools', tool).then(res => {
      this.setState({
        tools: res.data
      })
      }).catch(error => console.log(error))
    }
  editTool(id, newTool) {
    axios.put(`/api/tools/${id}`, {newTool}).then(res => {
      this.setState({
        tools: res.data
      })
    }).catch(error => console.log(error))
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
      />
    )})
    return (
      <div className="main-body">
        <Header />
        {allTools}
        <Footer 
          tools={this.state.tools}
          editTool={this.editTool}/>
      </div>
    )
  }
}

export default App
