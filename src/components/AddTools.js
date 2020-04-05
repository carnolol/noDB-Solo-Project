import React, { Component } from 'react'

export class AddTools extends Component {
    constructor(props) {
        super(props)
        this.state = {
            editing: false,
            name: "",
            text: "",
            img: "",
            price: "",
        }
        this.toggleEdit = this.toggleEdit.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleAddTool = this.handleAddTool.bind(this)
    }
    //toggles out state to be "off" & "on" when it is off it displays nothing, when turned on by double clicking anywhere on the <div></div> that contains our tools it opens up to display new input boxes
    toggleEdit() {
        this.setState({
            editing: !this.state.editing
        })
    }
    //this will take info that the user inputs and shoves it into the newly created object. it uses [e.target.name] to target each name="" on all the inputs
    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }
    //this will create a new tool with these properties and shove them into our orginal tool array, the 2nd setState will clear all the input boxes after you type. 
    handleAddTool() {
        const newTool = {
            name: this.state.name,
            text: this.state.text,
            img: this.state.img,
            price: this.state.price
        }
        this.props.addTools(newTool)
        this.setState({
            name: "",
            text: "",
            img: "",
            price: ""
        })
    }
    render() {

        return (
            <div 
                className="tool-container"
                onDoubleClick={this.toggleEdit}>

                {/* This will open up a new menu when the ADD button is clicked, allowing the user to add a new tool..  */}
                {this.state.editing ? (
                    <div onSubmit={this.handleAddTool}>
                        <input
                             name="name" 
                             value={this.state.name} onChange={e => this.handleChange(e)} placeholder="Name" />
                        <input
                             name="text" 
                             value={this.state.text} onChange={e => this.handleChange(e)} placeholder="Description" />
                        <input
                             name="img" 
                             value={this.state.img} onChange={e => this.handleChange(e)} placeholder="Image URL" />
                        <input 
                             name="price" 
                            value={this.state.price} onChange={e => this.handleChange(e)} placeholder="Price" />
                        <button 
                             className="cancel-addtool"
                             onClick={this.toggleEdit}>CANCEL
                        </button>
                        <button 
                            className="add-new-tool-button"
                            onClick={() => this.handleAddTool()}>ADD NEW TOOL
                        </button>
                    </div>
                ) : null
                }
                
                    {/* This is rendering all tools added. */}

                    <img className="display-image" src={this.props.tool.img} alt="tool" />
                    <h2>{this.props.tool.name}</h2>
                    <p>{this.props.tool.text}</p>
                    <h3>${this.props.tool.price}</h3>
                    <button
                        className="delete-tool-button" 
                        onClick={() => this.props.deleteTool(this.props.tool.id)}>DELETE TOOL</button>
            </div>
        )
    }
}

export default AddTools
