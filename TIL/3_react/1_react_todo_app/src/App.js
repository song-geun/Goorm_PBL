import React, { Component } from "react";
import "./App.css";
export default class App extends Component {
  btnstyle = {
    color: "#fff",
    border: "none",
    padding: "5px 9px",
    borderRadius: "50%",
    cursor: "pointer",
    float: "right"
  }

  getStyle = () => {
    return {
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      TextDecoderation: 'none'
    }
  }

  todoData = [
    {
      id: "1",
      title: "공부하기",
      completed: true
    },
    {
      id: "2",
      title: "예압",
      completed: false
    }
  ]


  render() {
    return (
      <div className="container">
        <div className="todo">
          <div className="title">
            할 일 목록
          </div>
          {this.todoData.map((data) => (
            <div style={this.getStyle()} key={data.id}>
              <input type="checkbox" defaultChecked={data.completed} />
              {data.title}
              <button style={this.btnstyle}>x</button>
            </div>
          ))}
        </div>
      </div>
    )
  }
}