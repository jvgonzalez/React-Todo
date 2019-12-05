import React from "react";

class TodoForm extends React.Component {


  render() {
    return(
      <div>
        <h1>Todo App</h1>
        <form onSubmit={this.props.handleSubmit}>
          <input onChange={this.props.handleChange} placeholder="write your todo" value={this.props.todo}
          />
          <button> Submit </button>
          <button type="button"> Delete </button>
        </form>

      </div>
    )
  }
}

export default TodoForm;