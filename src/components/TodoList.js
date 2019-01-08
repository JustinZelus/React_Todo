import React from "react";
import Todo from "./Todo";

class TodoList extends React.Component {
  constructor(props) {
    super(props);

    this.handleToggleTodo = this.handleToggleTodo.bind(this);
  }

  handleToggleTodo(e) {
    this.props.onToggleTodo(e);
  }

  render() {
    // const rows = [];
    // this.props.todos.map((todo, index) => {
    //   rows.push(<li key={index}>{todo.text}</li>);
    // });
    const filterText = this.props.filterText;
    const rows = this.props.todos.map((todo, index) => {
      if (filterText === "All") {
        return (
          <Todo onToggleTodo={this.handleToggleTodo} todo={todo} key={index} />
        );
      } else if (filterText === "Active" && todo.active) {
        return (
          <Todo onToggleTodo={this.handleToggleTodo} todo={todo} key={index} />
        );
      } else if (filterText === "Completed" && todo.completed) {
        return (
          <Todo onToggleTodo={this.handleToggleTodo} todo={todo} key={index} />
        );
      }
      return "";
    });

    return (
      <div>
        <ul>{rows}</ul>
      </div>
    );
  }
}

export default TodoList;
