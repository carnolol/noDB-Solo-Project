import './App.css';
import React, { Component } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import EditTools from './components/EditTools'
// import axios from 'axios'

export class App extends Component {
  constructor(props){
    super(props)
    this.state ={
      tools: []
    }
    this.addTools = this.addTools.bind(this)
    this.editTool = this.editTool.bind(this)
    this.deleteTool = this.deleteTool.bind(this)
  }
  componentDidMount(){

  }
  addTools(tool){

  }
  editTool(id, newName, newText, newImg){

  }
  deleteTool(id){

  }
  render() {
    return (
      <div className="App">
        <Header/>
        <main>
        App.js MAIN BODY HERE
        <EditTools/>
        </main>
        <Footer/>
      </div>
    )
  }
}

export default App
