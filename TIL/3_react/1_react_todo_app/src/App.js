import React, { Component } from "react";
import "./App.css";
export default class App extends Component {
  state = {
    todoData: [
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
    ],
    value : ""
  }
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


  handleClick = (id) => {
    let newTodoData = this.state.todoData.filter((data) => data.id !== id);
    this.setState({ todoData: newTodoData });
  }

  handleChange = (e) =>{
    this.setState({value : e.target.value});
  }
  handlesubmit = (e) =>{

    e.preventDefault(); //리프레시 방지

    let newTodo = {
      id : Date.now(),
      title: this.state.value,
      completed : false
    }

    this.setState({todoData : [...this.state.todoData, newTodo]});
  } 
  render() {
    return (
      <div className="container">
        <div className="todo">
          <div className="title">
            할 일 목록
          </div>
          {this.state.todoData.map((data) => (
            <div style={this.getStyle()} key={data.id}>
              <input type="checkbox" defaultChecked={data.completed} />
              {data.title}
              <button style={this.btnstyle} onClick={() => this.handleClick(data.id)}>x</button>
            </div>
          ))}

          <form style={{ display: 'flex' }} onSubmit={this.handlesubmit}>
            <input type="teext" name="value" style={{ flex: '10', padding: '5px' }}
              placeholder="해야 할 일을 입력하세요." value={this.state.value} onChange={this.handleChange}/>
            <input type="submit" value="입력" className="btn" style={{flex : '1'}}/>
          </form>
        </div>
      </div>
    )
  }
}