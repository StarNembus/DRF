import React from 'react'



class TodoForm extends  React.Component {
  constructor(prop) {
    super(prop);
    this.state = {
      'todo_text': '',
      'user': [], 'project': []
    }
  }

  handleChange(event) {
      this.setState({
          [event.target.name]: event.target.value
      })
  }

  handleUserChange(event) {
      if(!event.target.selectedOptions) {
          return;
      }
      let user = []
      for (let i =0; i < event.target.selectedOptions.length; i ++) {
          user.push(parseInt(event.target.selectedOptions.item(i).value))
      }

      this.setState({
          'user': user
      })
  }
    handleProjectChange(event) {
      if(!event.target.selectedOptions) {
          return;
      }
      let project = []
      for (let i =0; i < event.target.selectedOptions.length; i ++) {
          project.push(parseInt(event.target.selectedOptions.item(i).value))
      }

      this.setState({
          'project': project
      })
  }

  handleSubmit(event) {
        this.props.create_todo(this.state.todo_text, this.state.user, this.state.project)
        event.preventDefault()
  }

  render() {
    return(
        <form onSubmit={(event) => this.handleSubmit(event)} >
          <input type="todo_text" name="todo_text" placeholder="todo_text" value={this.state.todo_text}
                 onChange={(event) => this.handleChange(event) }/>
            <select  name= 'user' onChange={(event) => this.handleUserChange(event)}>
                {this.props.user.map((user) => <option value={user.id}>{user.first_name}{user.last_name}</option> )}
                </select>
            <select  name= 'project' onChange={(event) => this.handleProjectChange(event)}>
                {this.props.project.map((project) => <option value={project.id}> {project.id}</option> )}
            </select>
          <input type="submit" value="Create"/>
        </form>
    )
  }
}

export default TodoForm;