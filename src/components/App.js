import React from "react";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";
import Footer from "./Footer";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [
        // { text: "Learning React", completed: true, active: false },
        // { text: "Learning Redux", completed: true, active: false },
        // { text: "Learning NodeJs", completed: false, active: true },
        // { text: "Coding Express", completed: false, active: true },
        // { text: "Coding Javascript", completed: false, active: true },
        // { text: "Coding Sass", completed: false, active: true },
        // { text: "Go to preservation ", completed: false, active: true }
      ],
      filterText: "All"
    };

    this.handleToggleTodo = this.handleToggleTodo.bind(this);
    this.handleFilterLinkChange = this.handleFilterLinkChange.bind(this);
    this.handelAddTodo = this.handelAddTodo.bind(this);
  }

  handleToggleTodo(item) {
    let todos = this.state.todos;
    todos = todos.map(todo => {
      if (todo === item) {
        todo.completed = !item.completed;
        todo.active = !todo.active;
      }
      return todo;
    });
    this.setState({
      todos: todos
    });
  }

  handleFilterLinkChange(filterText) {
    this.setState({
      filterText: filterText
    });
  }

  handelAddTodo(todo) {
    let todos = this.state.todos;
    todos.push({
      text: todo,
      completed: false,
      active: true
    });
    this.setState({
      todos: todos
    });
  }

  render() {
    return (
      <div>
        <AddTodo onAddTodo={this.handelAddTodo} />
        <TodoList
          onToggleTodo={this.handleToggleTodo}
          todos={this.state.todos}
          filterText={this.state.filterText}
        />
        <Footer
          onFilterLinkChange={this.handleFilterLinkChange}
          filterText={this.state.filterText}
        />
      </div>
    );
  }
}

export default App;
