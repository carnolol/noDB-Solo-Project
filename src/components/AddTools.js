import React, { Component } from 'react'

export class AddTools extends Component {
    constructor(props) {
        super(props)
        this.state = {
            editing: false,
            name: "",
            text:"",
            img:"",
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
        console.log(this.state.text)
        console.log(this.state.price)
        this.setState({
            [e.target.name]: e.target.value,
            // text: e.target.value,
            // img: e.target.value,
            // price: +e.target.value
        })
    }
    sumThePrice() {

    }
    render() {
        return (
            <div>
                {this.state.editing ? (
                    <form>
                        <input name="name" onChange={e => this.handleChange(e)} placeholder="Name"/>
                        <input name="text" onChange={e => this.handleChange(e)} placeholder="Description"/>
                        <input name="img" onChange={e => this.handleChange(e)} placeholder="Image URL"/>
                        <input name="price" onChange={e => this.handleChange(e)} placeholder="Price"/>
                        <button onClick={this.toggleEdit}>Cancel</button>
                        <button type="submit" onClick={this.props.handleAddTool}>ADD NEW TOOL</button>
                    </form>
                ) : <button onClick={this.toggleEdit}>ADD</button>
                
                }


                {/* <button onClick={this.props.handleAddTool}>
                    ADD
                </button> */}
                {/* <button onClick={this.handleAddTool}>ADD</button> */}
            </div>
        )
    }
}

export default AddTools
