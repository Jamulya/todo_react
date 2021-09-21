import React from 'react';


class ItemAddTodo extends React.Component {
  state = {
    text: ''
  }


  onSubmit = (event) => {
    event.preventDefault()
    this.props.onTodoAdd(this.state.text)
    this.setState(
      {
        text: ''
      }
    )
  }


  onChange = (event) => {
    this.setState(
      {
        text: event.target.value
      }
    )
  }


  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input type='text' value={this.state.text} onChange={this.onChange} />
        <input type='submit' />
      </form>
    )
  }
}

export default ItemAddTodo;
