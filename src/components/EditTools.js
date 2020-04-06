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
    // handleEditTool() {
    //     this.props.editTool(this.props.tool.id, this.state.name) // leaving here. .props.tool.id throws and error but .props.id does not. not sure why. 
    //     this.toggleEdit()
    // }
    handleEditTool() {
        const newTool = {
            name: this.state.name,
            text: this.state.text,
            img: this.state.img
        }
        this.props.editTool(this.props.tool.id, newTool)
        this.toggleEdit()
        console.log('WORKING!?!??!')
    }
    render() {
        //LEAVING OFF HERE FOR NOW, WHEN TRYING TO EDIT TOOLS IS SAYS "CANNOT READ PROP OF ID OF UNDEFINED"
        // console.log('Name:', this.state.name)
        // console.log('Text:', this.state.text)
        // console.log('Img:', this.state.img)
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
                ) : <button      
                        className="add-new-tool-button"
                        onClick={this.toggleEdit}>EDIT TOOL
                    </button>
                }
            </div>
        )
    }
}

export default EditTools
