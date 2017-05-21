import React, {Component} from 'react'
import TodoModel from '../models/TodoModel'
import Todos from '../components/Todos'
import CreateTodo from '../components/CreateTodo'

class TodosContainer extends Component {
  constructor(){
    super()
    this.state = {
      todos: []
    }
  }
  componentDidMount(){
     this.fetchData()
  }
  fetchData(){
    TodoModel.all().then( (res) => {
      this.setState ({
        todos: res.data.todo,
        todo: ''
      })
    })
  }

  // componentDidUpdate(){
  //     this.fetchData()
  // }

  createTodo(todo){
    let newTodo = {body: todo, completed:false}
    TodoModel.create(newTodo).then( (res) => {
      let todos = res.data
      this.setState({todos})
    })
  }

  deleteTodo(todo){
    TodoModel.delete(todo).then( (res) => {
      let todos = res.data
      this.setState({todos})
    })
  }
  render(){
    return (
      <div className="todosComponent">
      <Todos
        todos={this.state.todos}
        onDeleteTodo={this.deleteTodo.bind(this)}/>
        <CreateTodo
          createTodo={this.createTodo.bind(this)} />

      </div>
    )
  }
}

export default TodosContainer
