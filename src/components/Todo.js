import React from "react";

class Todo extends React.Component {
  render() {
    const todo = this.props.todo;

    return (
      <li
        onClick={() => this.props.onToggleTodo(todo)}
        className={
          todo.completed === true ? "strikethrough" : "removestrikethrough"
        }
      >
        {todo.text}
      </li>
    );
  }
}

export default Todo;
