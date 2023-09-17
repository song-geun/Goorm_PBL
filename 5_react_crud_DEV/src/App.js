import React, { useCallback, useState } from "react";
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

  const handleClick = useCallback((id) => {

    let listdata1 = listdata.filter((data) => data.id !== id);
    setListData(listdata1);
    localStorage.setItem("listdata", JSON.stringify(listdata1));
  }, [listdata])
  const handleedit = useCallback((e, id) => {
    e.preventDefault();

    let listdata1 = listdata.filter((data) => data.id !== id);
    const name = "name" + id;
    const e1 = document.getElementById(name);
    const value = "value" + id;
    const e2 = document.getElementById(value);
    let newlist = {
      id: id,
      title: e1.value,
      val: e2.value
    }
    listdata1.push(newlist);
    e1.value = "";
    e2.value = "";
    setListData(listdata1);
  }, [listdata])

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
          <div>
            <Form handlesubmit={handlesubmit} setName={setName} setValue={setValue} />
          </div>
          <div>
            {
              listdata.map((data) =>
              (
                <div className="flex items-center" key={data.id}>
                <Main_list id={data.id} title={data.title} val = {data.val} handleClick={handleClick} handleedit={handleedit} />
                </div>
              ))
            }
          </div>
        </div>
        <div className="float-right">
          총지출 : {totalvalue()}
        </div>
      </div>
    </div >
  )
}
