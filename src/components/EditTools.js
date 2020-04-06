import React, { Component } from 'react'


export class EditTools extends Component {
    constructor(props) {
        super(props)
        this.state = {
            editing: false,
            name: "",
            text: "",
            img: ""
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
        this.setState({
            [e.target.name]: e.target.value,
        })
    }
    handleEditTool() {
        const updatedTool = {
            name: this.state.name,
            text: this.state.text,
            img: this.state.img
        }
        // We have to make sure the variable we pass into .props.editTool() is the same variable we did on our backend.
        this.props.editTool(this.props.tool.id, updatedTool)
        this.toggleEdit()
        console.log('WORKING!?!??!')
    }
    render() {
        return (
            <div>
                {this.state.editing ? (
                    <div>
                        <input
                            name="name"
                            value={this.state.name}
                            onChange={e => this.handleChange(e)}
                            placeholder="New Name" />
                        <input
                            name="text"
                            value={this.state.text}
                            onChange={e => this.handleChange(e)}
                            placeholder="New Description" />
                        <input
                            name="img"
                            value={this.state.img}
                            onChange={e => this.handleChange(e)}
                            placeholder="New Image URL" />
                        <button
                            className="cancel-addtool"
                            onClick={this.toggleEdit}>Cancel
                        </button>
                        <button
                            className="add-new-tool-button"
                            onClick={() => this.handleEditTool()}>EDIT TOOL NOW
                        </button>
                    </div>
                ) : (
                        <div className="edit-bottem">
                            <button
                                className="add-new-tool-button"
                                onClick={this.toggleEdit}>EDIT TOOL {this.props.tool.id}
                            </button>
                        </div>
                    )
                }
            </div>
        )
    }
}

export default EditTools
