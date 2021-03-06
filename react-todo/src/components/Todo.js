import React, {Component} from 'react'

class Todo extends Component {
  render(){
    return(
      <p data-todos-index={this.props.todo.id}>
        <li>{this.props.todo.body}</li>
        <span className ='deleteButton'
        onClick={() => this.props.onDeleteTodo(this.props.todo)}>
          (X)
      </span>
      </p>
    )
  }
}

export default Todo
