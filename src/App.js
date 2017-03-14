import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
class BtnChange extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return(
      <div>
        <li className="list-group-item">{this.props.txt}<button className="btn btn-default" onClick={this.props.click} style={{
          marginLeft: '1em',
        }}> > </button></li>
      </div>
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

  change(e){
    e.preventDefault();
    if(this.state.type ==='todo'){
      this.setState({
        type:'doing'
      });
      this.state.todo[e.target.key].
    }
    else if(this.state.type === 'doing'){

    }

  }
  render() {
    let getTodo = this.state.todo.map((todo, i) => {
      if (todo.type === 'todo') {
        return <BtnChange key={i} txt={todo.input} click={this.change.bind(this)} />
      } else {
        return <div>error</div>
      }
    })
    let getDoing = this.state.todo.map((todo, i) => {
      if (todo.type === 'doing') {
        return <BtnChange key={i} txt={todo.input} click={this.change.bind(this)} />
      } else {
        return <div>error</div>
      }
    })
    let getDone = this.state.todo.map((todo, i) => {
      if (todo.type === 'done') {
        return <BtnChange key={i} txt={todo.input} click={this.change.bind(this)} />
      } else {
        return <div>error</div>
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
                <div></div>
              </ul>
            </div>
            <div className="col-xs-4">
              <span className="label label-success" style={{marginBottom:'0.25em'}}>Done</span>
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
