import React, { Component } from 'react'

export class Todo extends Component {

    constructor(){
        super();

        this.state = {
            tasks : [
                // {task: 'Get Milk', id: 1}, 
                // {task: 'Get Chocolate', id: 2},
            ],
            currTask: "",
        }
    }

    handleChange = (e) => {
        console.log(e.target.value);
        this.setState({
            currTask: e.target.value,
        })
    }

    handleAddTask = () =>{
        this.setState({
            //spread operator se humare purane tasks aa rahe hai aur next parameter mein naya task add kar rahe hai
            tasks: [...this.state.tasks, {task: this.state.currTask, id : this.state.tasks.length + 1}],
            //taki humare task add karne par input field khali ho jaye
            currTask : " "
        })
    }

    handleRemoveTask = (id) => {
        let newArr = this.state.tasks.filter((taskObj) => {
            return taskObj.id != id;
        });

        this.setState({
            tasks: [...newArr]
        })
    }

    //using () in callback statements automatically returns we dont have to write the return statement whereas if use {} in callback there will be no error but we have to write the return statement
    //() => this.handleRemoveTask(id) isme agar bina aroow function karte to voh function call ho jata hai aur voh function baar baar call hota rehta ... arrow function lagane se yeh hoga ki sirf arrow function call hoga aur bakio mein hum function call nhi kar rahe hai bas function state kar rahe hai
  render() {
    return (
      <div>
          <input type="text" value={this.state.currTask}
          onChange={this.handleChange}/>
          <button onClick={this.handleAddTask}>Add Task</button>
          <ul>
            
            {this.state.tasks.map((taskObj) => (
                <li>
                    <p>{taskObj.task}</p>
                    <button onClick={() => this.handleRemoveTask(taskObj.id)}>Delete</button>
                </li>
            ))}
          </ul>
      </div>
    )
  }
}

export default Todo