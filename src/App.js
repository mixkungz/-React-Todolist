import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      'input' : '',
      'type':'todo',
      'todo' :[],
      'doing' : [],
      'done' :[]
    }
  }
  updateState(){
    this.setState({
      input : document.getElementById('inp').value
    });
  }
  Submit(e){
    e.preventDefault();
    this.state.todo.push({
      input:this.state.input,
      type:this.state.type,
    });
    this.setState({
      input:''
    });
  }
  getTodo(){
    let outp='';
    for (let i = 0; i < this.state.todo.length; i++) {
      outp += '<div class="alert alert-danger">'+this.state.todo[i].input+'</div>'
    }
    return outp
  }
  render() {
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
                  <input id="inp" type="text" className="form-control" placeholder="Coding" onChange={this.updateState.bind(this)} />
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
              <span className="label label-default">To do</span>
                <div dangerouslySetInnerHTML={{ __html: this.getTodo() }}></div>
            </div>
            <div className="col-xs-4">
              <span className="label label-warning">Doing</span>

              <ul>

              </ul>
            </div>
            <div className="col-xs-4">
              <span className="label label-success">Done</span>

              <ul>

              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
