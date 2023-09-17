import React, { useCallback, useState } from "react";
import "./App.css";
import Form from "./components/Form";
import Main_list from "./components/Main_list";


const initaillistdata = localStorage.getItem("listdata")
  ? JSON.parse(localStorage.getItem("listdata"))  : [];

export default function App() {
  const state = {
    listdata: [

    ],
    name: "",
    value: "",
    selectable: false
  };


  const [listdata, setListData] = useState(initaillistdata);
  const [value, setValue] = useState("");
  const [name, setName] = useState("");

  const handleClick = useCallback((id) => {

    let listdata1 = listdata.filter((data) => data.id !== id);
    setListData(listdata1);
    localStorage.setItem("listdata", JSON.stringify(listdata1));
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
    localStorage.setItem("listdata", JSON.stringify([...listdata, newlist]));
    setValue("");
    setName("");
  }
  
  const handleEditSubmit = useCallback((e,id,editedTitle, editedvalue, setIsEditing) => {

    e.preventDefault();
    let newlist = listdata.map(data => {
        if (data.id === id) {
            data.title = editedTitle;
            data.val = editedvalue;
        }
        return data;
    })
    setListData(newlist);
    localStorage.setItem("listdata", JSON.stringify(newlist));
    setIsEditing(false);
},[listdata])

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
                <Main_list handleEditSubmit={handleEditSubmit} id={data.id} title={data.title} val = {data.val} handleClick={handleClick} />
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
