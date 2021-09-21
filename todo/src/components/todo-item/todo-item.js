import React from 'react'

const ToDoItem = (props) => {
    const my_title = props.action + ' ' + props.target;
    return <p>{my_title}</p>;
  };
  export default ToDoItem