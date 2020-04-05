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
    }
    toggleEdit() {
        this.setState({
            editing: !this.state.editing
        })
    }
    handleChange(e) {
        // console.log(this.state.text)
        // console.log(this.state.price)
        this.setState({
            [e.target.name]: e.target.value,
        })
    }
    handleAddTool() {
        console.log('hit')
        const newTool = {
            name: this.props.tool.name,
            text: this.props.tool.text,
            img: this.props.tool.img,
            price: this.props.tool.price
        }
        this.props.addTools(newTool)
        this.setState({
            name: "",
            text: "",
            img: "",
            price: ""
        })
    }
    handleEditTool(){
        this.props.editTool(this.props.tool.id, this.state.name, this.state.text, this.state.img, this.state.price)
        this.toggleEdit()
    }
    render() {
        console.log(this.props.tools)

        return (
            <div>
                {this.state.editing ? (
                    <div>
                        <input name="name" value={this.state.name} onChange={e => this.handleChange(e)} placeholder="Name" />
                        <input name="text" value={this.state.text} onChange={e => this.handleChange(e)} placeholder="Description" />
                        <input name="img" value={this.state.img} onChange={e => this.handleChange(e)} placeholder="Image URL" />
                        <input name="price" value={this.state.price} onChange={e => this.handleChange(e)} placeholder="Price" />
                        <button onClick={this.toggleEdit}>Cancel</button>
                        <button onClick={() => this.handleAddTool()}>ADD NEW TOOL</button>
                    </div>
                ) : <button onClick={this.toggleEdit}>ADD</button>
                }
                    <img className="display-image" src={this.props.tool.img} alt="tool" />
                    <h4>{this.props.tool.name}</h4>
                    <p>{this.props.tool.text}</p>
                    <h4>${this.props.tool.price}</h4>
                    <button onClick={() => this.props.deleteTool(this.props.tool.id)}>DELETE TOOL</button>
                    <button>EDIT TOOL</button>
            </div>
        )
    }
}

export default AddTools
