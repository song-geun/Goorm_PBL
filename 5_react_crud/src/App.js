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


  const [listdata, setListData] = useState([]);
  const [value, setValue] = useState("");
  const [name, setName] = useState("");




  const handlesubmit = (e) => {
    e.preventDefault();

    let newlist = {
      id: Date.now(),
      title: name,
      val: value
    }
    //value.value = "";
    //name.value = "";
    //this.setState({ listdata: [...this.state.listdata, newlist] });

    setListData(prev => [...prev, newlist]);
    setValue("");
    setName("");
  }

  const handleedit = (e) => {
    e.preventDefault();

  }

  const totalvalue = ()=>{
    let totalvalue = 0;
    listdata.forEach((data)=>{
      totalvalue+=Number(data.val);
    })
    return totalvalue;
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

        <Main_list listdata={listdata} handleedit={handleedit}/>
      </div>
      <div>
        총지출 : {totalvalue()}
      </div>
    </div>
  )
}
