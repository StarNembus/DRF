import React from 'react'
// import {Link} from "react-router-dom";

const UsersItem = ({user}) => {
    return(
        <tr>
            <td>{user.first_name}</td>
            {/*/!*<td><Link to={`/user/${user.id}`}>{user.last_name}</Link></td>*!/ Для перехода по id на страницу пользователя*/}
            <td>{user.last_name}</td>
            <td>{user.email}</td>
        </tr>
    )
}

const UsersList = ({users}) => {
    return (
        <table>

            <th>
                Firstname
            </th>
            <th>
                Lastname
            </th>
            <th>
                Email
            </th>
            {users.map((user) => <UsersItem user={user}/>)}

        </table>
    )
}
export default UsersList;



