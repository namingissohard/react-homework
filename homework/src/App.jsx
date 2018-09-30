import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import List from './components/List';
import Editor from './components/Editor';
import $ from 'jquery';
import ListView from './components/ListView';
import { observer } from 'mobx-react'


@observer
class App extends React.Component {
  componentWillMount() {
    this.getData()
  }

  getData() {
    const option = {
      url: 'http://localhost:3000/get',
      type: 'get',
      success: (res) => {
        this.update(res)
      }
    }
    $.ajax(option)
  }

  update(newData) {
    this.props.list.update(newData)
  }

  delete(id) {
    $.ajax({
      url: 'http://localhost:3000/delete',
      type: 'post',
      data: {
        id: id
      },
      success: (res) => {
        this.getData()
      }
    })
  }

  add(content) {
    $.ajax({
      url: 'http://localhost:3000/add',
      type: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      data: JSON.stringify({
        content: content,
        status: false
      })
      ,
      success: (res) => {
        this.getData()
      }
    })
  }

  complete(id, status) {
    $.ajax({
      url: 'http://localhost:3000/update',
      type: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      data: JSON.stringify({
        id: id,
        status: status
      }),
      success: (res) => {
        this.getData()
      }
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>


        <List deletefunc={(id) => this.delete(id)} complete={(id, status) => this.complete(id, status)} data={this.props.list.data}></List>
        <Editor add={(content) => this.add(content)} text={this.props.list.text}></Editor>
        <div>总共{this.props.list.data.length}件，已完成{this.props.list.finished}件</div>
      </div>
    )
  }
}


export default App;
