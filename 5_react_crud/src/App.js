import React, { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import Main_list from "./components/Main_list";
export default function App() {
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
    const value1 = document.getElementById('value');
    const name1 = document.getElementById('name');
    value1.value = "";
    name1.value = "";

    setListData(prev => [...prev, newlist]);
    setValue("");
    setName("");
  }

  const handleedit = (e,id) => {
    e.preventDefault();

    let listdata1 = listdata.filter((data) => data.id !== id);
    const name = "name" + id;
    const e1 = document.getElementById(name);
    const value = "value" + id;
    const e2 = document.getElementById(value);
    let newlist ={
      id : id,
      title : e1.value,
      val : e2.value
    }
    listdata1.push(newlist);
    e1.value = "";
    e2.value = "";
    setListData(listdata1);
  }

  const totalvalue = () => {
    let totalvalue = 0;
    listdata.forEach((data) => {
      totalvalue += Number(data.val);
    })
    return totalvalue;
  }




  return (
    <div className="flex items-center justify-center w-screen h-screen bg-blue-100">
      <div className="w-ful p-6 m-4 bg-white rounded shadow lg:w-3/4 lg:max-w-lg">
        <div >

        </div>
        <div >
          <div >
            예산 계산기
          </div>
          <Form handlesubmit={handlesubmit} setName={setName} setValue={setValue} />

          <Main_list listdata={listdata} handleedit={handleedit} setListData={setListData} />
        </div>
        <div>
          총지출 : {totalvalue()}
        </div>
      </div>
    </div >
  )
}
