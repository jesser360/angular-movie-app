
import axios from 'axios'

class TodoModel {
  static all(){
    let request = axios.get(`https://super-crud.herokuapp.com/todos`)
    console.log("request is ", request);
    return request
  }

  static create(todo) {
    let request = axios.post(`https://super-crud.herokuapp.com/todos`, todo)
    console.log("created todo", request);
    return request
    }


  static delete(todo) {
    let request =axios.delete(`https://super-crud.herokuapp.com/todos/${todo._id}`)
    console.log("deleted ", request);
    return request
  }

}

export default TodoModel
