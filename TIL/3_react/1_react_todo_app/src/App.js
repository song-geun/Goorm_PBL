import React, {useState} from "react";
import "./App.css";
import Lists from "./components/lists";
import Form from "./components/Form";
export default function App(){
  let state = {
    todoData: [
      
    ],
    value: ""
  };

  const [todoData, setTodoData] = useState([]);
  const [value, setValue] = useState("");



  const handlesubmit = (e) => {

    e.preventDefault(); //리프레시 방지

    let newTodo = {
        id: Date.now(),
        title: value,
        completed: false
    }

    //this.setState({ todoData: [...todoData, newTodo], value:"" });
    setTodoData(prev => [...prev, newTodo]);
    setValue("");
}
  

    return (
      <div className="container">
        <div className="todo">
          <div className="title">
            할 일 목록
          </div>
          
          <Lists todoData={todoData} setTodoData={setTodoData} />


          <Form handlesubmit={handlesubmit} value={value} setValue={setValue}/>

          
        </div>
      </div>
    )
  
}