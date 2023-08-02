import React, { useState } from 'react'
import { usersData } from '../../usersData.js'
import UsersListItem from '../molecules/UsersListItem.jsx'
import styled from 'styled-components'

export const StyledWrapper = styled.div`
    background: ${({ theme }) => theme.colors.black100};
    width: 500px;
    border-radius: 12px;
    padding: 8px 32px 32px 32px;
    ul {
        padding: 0;
        margin: 0;
        display: flex;
        flex-direction: column;
        gap: 16px;
    }
`

const UsersList = () => {
    const [users, setUsers] = useState(usersData)

    const deleteUser = (name) => {
        const filteredUsers = users.filter((user) => user.name !== name)
        setUsers(filteredUsers)
    }

    return (
        <StyledWrapper>
            <h1>students list</h1>
            <ul>
                {users.map((user) => (
                    <UsersListItem
                        deleteUser={deleteUser}
                        key={user.name}
                        user={user}
                    />
                ))}
            </ul>
        </StyledWrapper>
    )
}

export default UsersList
