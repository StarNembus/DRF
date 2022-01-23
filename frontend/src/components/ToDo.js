import React from 'react'



const ToDoItem = ({todo, delete_todo}) => {
    return(
        <tr>
            <td>{todo.project}</td>
            <td>{todo.todo_text}</td>
            <td>{todo.user}</td>
            <td><button onClick={() => delete_todo(todo.id)} type='button'>Delete</button></td>
        </tr>
    )
}

const ToDoList = ({todos, delete_todo}) => {
    return (
        <table>

            <th>
                Project
            </th>
            <th>
                Text
            </th>
            <th>
                User
            </th>
            <th>

            </th>
            {todos.map((todo) => <ToDoItem todo={todo} delete_todo={delete_todo}/>)}
            {/*{todos.map((todo) => <ToDoItem todo={todo}/>)}*/}

        </table>
    )
}

export default ToDoList;