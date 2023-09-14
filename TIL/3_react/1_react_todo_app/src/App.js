import React, {useState} from "react";
import "./App.css";
import Lists from "./lists";
export default function App(){
  let state = {
    todoData: [
      
    ],
    value: ""
  };

  const [todoData, setTodoData] = useState([]);
  const [value, setValue] = useState("");



  const handleChange = (e) => {
    // this.setState({ value: e.target.value });
    setValue(e.target.value);
  }
  const handlesubmit = (e) => {

    e.preventDefault(); //리프레시 방지

    let newTodo = {
      id: Date.now(),
      title: value,
      completed: false
    }

    //this.setState({ todoData: [...todoData, newTodo], value:"" });
    setTodoData(prev=> [...prev, newTodo]);
    setValue("");
  }

  

    return (
      <div className="container">
        <div className="todo">
          <div className="title">
            할 일 목록
          </div>
          
          <Lists todoData={todoData} setTodoData={setTodoData} />




          <form style={{ display: 'flex' }} onSubmit={handlesubmit}>
            <input type="text" name="value" style={{ flex: '10', padding: '5px' }}
              placeholder="해야 할 일을 입력하세요." value={value} onChange={handleChange} />
            <input type="submit" value="입력" className="btn" style={{ flex: '1' }} />
          </form>
        </div>
      </div>
    )
  
}