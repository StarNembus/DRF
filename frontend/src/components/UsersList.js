import React from 'react'


const UsersItem = ({user}) => {
    return(
        <tr>
            <td>{user.first_name}</td>
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