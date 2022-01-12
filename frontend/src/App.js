import React from 'react'
import {BrowserRouter, Route, Routes, Link, Navigate} from 'react-router-dom'
// import {HashRouter, BrowserRouter, Route, Routes} from 'react-router-dom'
import UsersList from './components/UsersList.js'
import axios from 'axios'
import Footer from './components/Footer'
import Menu from './components/Menu';
import ProjectList from "./components/Project.js";
import ToDoList from "./components/ToDo.js";





class App extends  React.Component {
  constructor(prop) {
    super(prop);
    this.state ={
      'users': [],
      'projects': [],
      'todos': [],
    }
  }


  componentDidMount() {
      axios
          .get('http://127.0.0.1:8000/api/users/')
          .then(response => {
              const users = response.data
              this.setState({
                'users': users
              })

          })
          .catch(error => console.log(error))

      axios
          .get('http://127.0.0.1:8000/api/project/')
          .then(response => {
              const projects = response.data
              this.setState({
                'projects': projects
              })

          })
          .catch(error => console.log(error))

      axios
          .get('http://127.0.0.1:8000/api/todo/')
          .then(response => {
              const todos = response.data
              this.setState({
                'todos': todos
              })

          })
          .catch(error => console.log(error))
  }


  render () {
    return (
        <div>
            <BrowserRouter>
                <Menu />
                <nav>
                    <ul>
                        {/*<li><Link to='/'>Users</Link></li>*/}
                        <li><Link to='/projects'>Projects</Link></li>
                        <li><Link to='/todos'>ToDos</Link></li>
                    </ul>
                </nav>
                <Routes>
                  {/*<UsersList users={this.state.users} />*/}
                    <Route exact path='/' element={<UsersList users={this.state.users} />} />
                    <Route exact path='/projects' element={<ProjectList projects={this.state.projects} />} />
                    <Route exact path='/todos' element={<ToDoList todos={this.state.todos} />} />
                    <Route path='/users' element={<Navigate to='/' />} />
                  {/*<ProjectList projects={this.state.projects} />*/}
                  {/*<ToDoList todos={this.state.todos} />*/}
                </Routes>
                <Footer />
            </BrowserRouter>
        </div>

    )
  }

}


export default App;

