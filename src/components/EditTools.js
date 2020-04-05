import React, { Component } from 'react'


export class EditTools extends Component {
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
        this.handleEditTool = this.handleEditTool.bind(this)
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
    handleEditTool() {
        this.props.editTool(this.props.id, this.state.name)
        this.toggleEdit()
    }
    render() {
        return (
            <div>

                {this.state.editing ? (
                    <div>
                        <input name="name" onChange={e => this.handleChange(e)} placeholder="New Name" />
                        {/* <input name="text" onChange={e => this.handleChange(e)} placeholder="New Description" />
                        <input name="img" onChange={e => this.handleChange(e)} placeholder="New Image URL" /> */}
                        <button onClick={this.toggleEdit}>Cancel</button>
                        <button onClick={() => this.handleEditTool()}>EDIT TOOL NOW</button>
                    </div>
                ) : <button onClick={this.toggleEdit}>EDIT TOOL</button>
                }
            </div>
        )
    }
}

export default EditTools
