import React, { Component } from "react";
import "./App.css";
export default class App extends Component {
  state = {
    listdata: [

    ],
    name: "",
    value: "",
    selectable: false
  }
  input =
    { flex: '10', padding: 'px' }
  main_add = {
    display: "flex",
    flex: 4,
    flexDirection: "row"
  }

  total
  handleChange = (e) => {
    const id = e.target.id;
    if (id === "name")
      this.setState({ name: e.target.value });

    else
      this.setState({ value: e.target.value });


  }
  handlesubmit = (e) => {
    e.preventDefault();

    let newlist = {
      id: Date.now(),
      title: this.state.name,
      value: this.state.value
    }
    const value = document.getElementById("value");
    const name = document.getElementById("name");
    value.value = "";
    name.value = "";
    this.setState({ listdata: [...this.state.listdata, newlist] });
    this.total = 0;
  }

  handleedit = (e) => {
    e.preventDefault();

  }




  render() {
    this.total = 0;
    this.state.listdata.forEach((data) => {
      if (data.value !== undefined)
        this.total += Number(data.value);
    })
    return (
      <div className='wrep'>
        <div className='message'>

        </div>
        <div className="main_wrep">
          <div className="main_title">
            예산 계산기
          </div>
          <form className="main_add" style={this.main_add} onSubmit={this.handlesubmit}>
            <div className="list_add_left">
              <div>지출 항목</div>
              <input className="input1" type="text" id="name" style={this.input} onChange={this.handleChange} />
              <div className="btn">
              <input type="submit" value="제출" className="btn"/>
              </div>
            </div>
            <div className="list_add_right">
              <div>지출 비용</div>
              <input className="input1" type="number" id="value" style={this.input} onChange={this.handleChange} />
            </div>
            
          </form>

          <div className="main_list">
            {
              this.state.listdata.map((data) =>
              (
                <div className="lists" key={data.id}>
                  <div className="main_list_left">
                    {data.title}
                  </div>
                  <div className="main_list_middle">
                    {data.value}
                  </div>
                  <div className="main_list_right">

                  </div>
                </div>
              )
              )
            }
          </div>
        </div>
        <div>
          총지출 : {this.total}
        </div>
      </div>
    );
  }
}
