import React, { Component } from "react";
import AddTask from "./AddTask";
import TaskList from "./TaskList";
import "./App.css";

class App extends Component {
  counter = 9
  state = {
    tasks: [
      {
        id: 0,
        text: "Play Lost Ark",
        date: "2022-02-22",
        important: true,
        active: true,
        finishdate: null,
      },
      {
        id: 1,
        text: "Play Dead by Daylight",
        date: "2022-01-12",
        important: false,
        active: false,
        finishdate: null,
      },
      {
        id: 2,
        text: "Play Urf Mode",
        date: "2021-02-21",
        important: false,
        active: true,
        finishdate: null,
      },
      {
        id: 3,
        text: "Play ZombieLand",
        date: "2010-07-12",
        important: false,
        active: true,
        finishdate: null,
      },
      {
        id: 4,
        text: "Play Daying Light2",
        date: "2022-02-22",
        important: true,
        active: true,
        finishdate: null,
      },
    ],
  };
  addTask = (text, date, important) => {
    const task = {
      id: this.counter,
      text: text,
      date: date,
      important: important,
      active: true,
      finishdate: null,
    };
    this.counter++

    this.setState(prevState => ({
      tasks: [...prevState.tasks, task]
    }))
    return true;
  };
  deleteTask = (id) => {
    const tasks = [...this.state.tasks];
    const index = tasks.findIndex((task) => task.id === id);
    tasks.splice(index, 1);
    this.setState({
      tasks,
    });
  };
  changeTaskStatus = (id) => {
    const tasks = Array.from(this.state.tasks);
    tasks.forEach((task) => {
      if (task.id === id) {
        task.active = false;
        task.finishdate = new Date().getTime();
      }
    });
    this.setState({
      tasks,
    });
  };
  render() {
    return (
      <div className="App">
        <h1>ToDoApp</h1>
        <br />
        <hr></hr>
        <AddTask add={this.addTask} />
        <hr></hr>
        <TaskList
          tasks={this.state.tasks}
          delete={this.deleteTask}
          change={this.changeTaskStatus}
        />
      </div>
    );
  }
}

export default App;
