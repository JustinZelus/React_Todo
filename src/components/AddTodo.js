import React from "react";

class AddTodo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      textInput: ""
    };
    this.handleAddTodo = this.handleAddTodo.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleAddTodo(e) {
    this.props.onAddTodo(e);
    this.setState({ textInput: "" });
  }

  handleInputChange(e) {
    this.setState({ textInput: e.target.value });
  }

  render() {
    return (
      <div>
        <form>
          <input type="text" onChange={this.handleInputChange} value={this.state.textInput}/>
          <button
            type="button"
            onClick={() => this.handleAddTodo(this.state.textInput)}
          >
            Add Todo
          </button>
        </form>
      </div>
    );
  }
}

export default AddTodo;
