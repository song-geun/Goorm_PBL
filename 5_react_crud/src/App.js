import React, { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import Main_list from "./components/Main_list";
export default function App(){
  const state = {
    listdata: [

    ],
    name: "",
    value: "",
    selectable: false
  };

  let total = 0;

  const [listdata, setListData] = useState([]);
  const [value, setValue] = useState("");
  const [name, setName] = useState("");




  const handlesubmit = (e) => {
    e.preventDefault();

    let newlist = {
      id: Date.now(),
      title: name,
      value: value
    }
    //value.value = "";
    //name.value = "";
    total += Number(value.value);
    //this.setState({ listdata: [...this.state.listdata, newlist] });

    setListData(prev => [...prev, newlist]);
    setValue("");
    setName("");
  }

  const handleedit = (e) => {
    e.preventDefault();

  }





  return (
    <div >
      <div >

      </div>
      <div >
        <div >
          예산 계산기
        </div>
        <Form handlesubmit={handlesubmit} setName = {setName} setValue = {setValue}/>

        <Main_list listdata={listdata}/>
      </div>
      <div>
        총지출 : {total}
      </div>
    </div>
  )
}
