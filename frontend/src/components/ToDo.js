import React from 'react'



const ToDoItem = ({todo}) => {
    return(
        <tr>
            <td>{todo.project}</td>
            <td>{todo.todo_text}</td>
            <td>{todo.user}</td>
        </tr>
    )
}

const ToDoList = ({todos}) => {
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
            {todos.map((todo) => <ToDoItem todo={todo}/>)}

        </table>
    )
}

export default ToDoList;