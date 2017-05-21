import React, {Component} from 'react'

class CreateTodo extends Component {
  constructor() {
    super()
    this.state = {
      todo: [], text:''
    };
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)

  }

  handleChange(e){
    this.setState({
      todo: e.target.value
    })
  }

  handleSubmit(e){
    e.preventDefault();
    console.log("this.state = ",this.state);
    let todo = this.state.todo.concat([todo]);
    console.log("let todo = ", todo);
    this.props.createTodo(todo)
    this.setState((prevState) => ({
      todo:prevState.todo.concat(todo),
      text: ''
    }));
  }
  render() {
    return (
      <div className='createForm todoForm'>
      <h2>Create a todo</h2>
      <form onSubmit={this.handleSubmit}>
      <input placeholder ="write stuff" type="text"
      value={this.state.value} onChange={this.handleChange}/>
      <button type='submit'>Submit</button>
      </form>
      </div>
    )
  }
}

export default CreateTodo
