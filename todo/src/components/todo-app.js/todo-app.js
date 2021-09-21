import React from 'react';
import ToDoTitle from '../todo-title';
import ToDoSearch from '../todo-search';
import ToDoList from '../todo-list';

const ToDoApp = () => {
    return (
      <div>
        <ToDoTitle />
        <ToDoSearch />
        <div>
          <h1> My Todo </h1>
          <ToDoList />
        </div>
      </div>
    );
  };
  export default ToDoApp;