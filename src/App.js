import React, { Component } from 'react';
import logo from './logo.svg';
import _ from 'underscore';
import './App.css';
import { default as swal } from 'sweetalert2'
class BtnChange extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return(
      <div>
        <li className="list-group-item">{this.props.txt}<button className="btn btn-default" value={this.props.indexs} onClick={this.props.click} style={{
          marginLeft: '1em',
        }}> > </button></li>
      </div>
    );
  }
}
class DoneItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = { }
  }

  render() {
    return (
      <li className="list-group-item">{this.props.txt}</li>
    );
  }
}
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      'input' : '',
      'type':'todo',
      'todo' :[],
      'doing' : [],
      'done' :[],
    }
  }
  updateState(){
    this.setState({
      input : document.getElementById('inp').value
    });
  }
  Submit(e){
    e.preventDefault();
    if(this.state.input.length >2){
      this.state.todo.push({
        input:this.state.input,
        type:this.state.type,
      });
      this.setState({
        input:''
      });
    }
    else {
      const swal = require('sweetalert2')
      swal(
        'Oops...',
        'Input is too short!',
        'error'
      )
      this.setState({
        input:''
      });
    }
  }

  change(e){
    e.preventDefault();
    if(this.state.type ==='todo'){
      this.state.todo[e.target.value].type = 'doing'
      this.setState({
        todo: _.without(this.state.todo,this.state.todo[e.target.value]),
      })
      this.state.doing.push(this.state.todo[e.target.value]);
    }
    // else if(this.state.doing[e.target.value].type === 'doing'){
    //   this.state.doing[e.target.value].type = 'done'
    //   this.setState({
    //     doing: _.without(this.state.doing,this.state.doing[e.target.value]),
    //   })
    //   this.state.done.push(this.state.doing[e.target.value]);
    // }
  }
  change2(e){
    if(this.state.doing[e.target.value].type === 'doing'){
      this.state.doing[e.target.value].type = 'done'
      this.setState({
        doing: _.without(this.state.doing,this.state.doing[e.target.value]),
      })
      this.state.done.push(this.state.doing[e.target.value]);
    }
  }
  render() {
    let getTodo = this.state.todo.map((todo, i) => {
      if (todo.type === 'todo') {
        return <BtnChange key={i} indexs={i} txt={todo.input} click={this.change.bind(this)} />
      } else {
      }
    })
    let getDoing = this.state.doing.map((doing, i) => {
      if (doing.type === 'doing') {
        return <BtnChange key={i} indexs={i} txt={doing.input} click={this.change2.bind(this)} />
      } else {
      }
    })
    let getDone = this.state.done.map((done, i) => {
      if (done.type === 'done') {
        return <DoneItem key={i} txt={done.input}/>
      } else {
      }
    })

    return (
      <div>
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <form id="inputform" onSubmit={this.Submit.bind(this)}>
                <div className="input-group">
                  <input id="inp" type="text" placeholder="Coding" className="form-control" value={this.state.input} onChange={this.updateState.bind(this)} />
                  <span className="input-group-btn">
                    <input className="btn btn-default" value="Save" type="submit"/>
                  </span>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="container" style={{
          marginTop : '2em'
        }}>
          <div className="row">
            <div className="col-xs-4">
              <span className="label label-default" style={{marginBottom:'1em'}}>To do</span>
              <ul className="list-group">
                <div>{getTodo}</div>
              </ul>
            </div>
            <div className="col-xs-4">
              <span className="label label-warning" style={{marginBottom:'0.25em'}}>Doing</span>
              <ul>
                <div>{getDoing}</div>
              </ul>
            </div>
            <div className="col-xs-4">
              <span className="label label-success" style={{marginBottom:'0.25em'}}>Done</span>
              <ul>
                <div>{getDone}</div>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }

}
export default App;
