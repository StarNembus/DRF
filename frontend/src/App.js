import React from 'react'
import {BrowserRouter, Route, Routes, Link, Navigate} from 'react-router-dom'
// import {HashRouter, BrowserRouter, Route, Routes} from 'react-router-dom'
import UsersList from './components/UsersList.js'
import axios from 'axios'
import Footer from './components/Footer'
import Menu from './components/Menu';
import ProjectList from "./components/Project.js";
import ToDoList from "./components/ToDo.js";
import Login from "./components/Login.js";





class App extends  React.Component {
  constructor(prop) {
    super(prop);
    this.state ={
      'users': [],
      'projects': [],
      'todos': [],
      'token': ''
    }
  }

  get_token(login, password) {
      axios
          .post('http://127.0.0.1:8000/api-token-auth/', {'username': login, 'password': password})
          .then(response => {
              const token = response.data.token
              console.log(token)
              localStorage.setItem('token', token)
              this.setState({
                  'token': token
              }, this.get_data)
          })
          .catch(error => console.log(error))
  }

  logout() {
      localStorage.setItem('token', '')
      this.setState({
          'token': ''
      }, this.get_data)
  }


  is_authenticated() {
      return !!this.state.token
  }

  get_headers() {
      if (this.is_authenticated()) {
          return {
              'Authorization': 'Token ' + this.state.token
          }
      }
      return {}
  }

  componentDidMount() {
      let token = localStorage.getItem('token')
      this.setState({
          'token': token
      }, this.get_data)

  }


  get_data() {
      let headers = this.get_headers()
      axios
          .get('http://127.0.0.1:8000/api/users/', {headers})
          .then(response => {
              const users = response.data
              this.setState({
                'users': users
              })

          })
          .catch(error => {
              this.setState({
                  'users': []
              })
              console.log(error)
          })

      axios
          .get('http://127.0.0.1:8000/api/project/', {headers})
          .then(response => {
              const projects = response.data
              this.setState({
                'projects': projects
              })

          })
          .catch(error => {
              this.setState({
                  'projects': []
              })
              console.log(error)
          })

      axios
          .get('http://127.0.0.1:8000/api/todo/', {headers})
          .then(response => {
              const todos = response.data
              this.setState({
                'todos': todos
              })

          })
          .catch(error => {
              this.setState({
                  'todos': []
              })
              console.log(error)
          })

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
                        <li>
                            {this.is_authenticated() ? <button onClick={()=>this.logout()}>Logout</button> : <Link to='/login'>Login</Link>}
                        </li>
                    </ul>
                </nav>
                <Routes>
                  {/*<UsersList users={this.state.users} />*/}
                    <Route exact path='/' element={<UsersList users={this.state.users} />} />
                    <Route exact path='/projects' element={<ProjectList projects={this.state.projects} />} />
                    <Route exact path='/todos' element={<ToDoList todos={this.state.todos} />} />
                    <Route exact path='/login' element={<Login get_token={(login, password) => this.get_token(login, password)}/>} />
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

