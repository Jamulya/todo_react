import React from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';
import ItemAddTodo from '../item-add-todo';

import './app.css';

class App extends React.Component {

  state = {
    todos: [
      { label: 'Drink Coffee', important: false, id: 1, done: false },
      { label: 'Make Awesome App', important: true, id: 2, done: false },
      { label: 'Have a lunch', important: false, id: 3, done: false }
    ],
    search: '',
    status: 'all'
  }

  onTodoAdd = (text) => {
    this.setState((oldState) => {
      const sortedIdsArr = oldState.todos.map((item) => item.id).sort((a, b) => a>b)
      const myNewId = sortedIdsArr[sortedIdsArr.length - 1] + 1;

      const myNewTodo = {
        label: text,
        important: false,
        id: myNewId
      }

      const newState = {
        todos: [...oldState.todos, myNewTodo]
      }

      return newState
    })
  }

  onImportantChange = (id) => {
    this.setState((oldState) => {
      const idx = oldState.todos.findIndex((item) => item.id === id)

      const oldTodo = oldState.todos[idx];
      const newTodo = {...oldTodo, important: !oldTodo.important}

      const prev = oldState.todos.slice(0, idx)
      const next = oldState.todos.slice(idx + 1)

      const newState = {
        todos: [...prev, newTodo, ...next]
      }

      return newState
    })
  }

  onTodoDelete = (id) => {
    this.setState((oldState) => {
      const idx = oldState.todos.findIndex((item) => item.id === id)  // 1

      const prev = oldState.todos.slice(0, idx)
      const next = oldState.todos.slice(idx + 1)

      const newState = {
        todos: [...prev, ...next]
      }

      return newState
    })
  }

  onSearch = (text) => {
    this.setState({
      search: text
    })
  }

  search = (todos, template) => {
    if (!template) {
      return todos
    }
    return todos.filter((item) => item.label.toLowerCase().includes(template.toLowerCase()))
  }

  status = (todos, status) => {
    this.setState({status:status})
    if (status === 'all') {

    }else if (status === 'active'){
      
    }else {
      return todos
    }
  }
  render() {
    const newTodos = this.search(this.state.todos, this.state.search)

    return (
      <div className="todo-app">

        <AppHeader toDo={this.state.todos.length} done={5} />

        <div className="top-panel d-flex">
          <SearchPanel onSearch={this.onSearch} />
          <ItemStatusFilter status={this.status} todos={this.state.todos} active={this.state.status}  />
        </div>

        <TodoList
          todos={newTodos}
          onImportantChange={this.onImportantChange}
          onTodoDelete={this.onTodoDelete}
        />

        <ItemAddTodo onTodoAdd={this.onTodoAdd} />

      </div>
    )
  }
}

export default App;
