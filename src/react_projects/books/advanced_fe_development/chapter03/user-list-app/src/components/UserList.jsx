import React from 'react';
import './UserList.css';
import User from './User';

const UserList = ({ users, toggleActivity }) => {
    return (
        <div className="user-list-container">
            <h1 className="user-list-title">User List</h1>
            {users.map( (user) => (
                <User
                    key={user.id}
                    id={user.id}
                    name={user.name}
                    email={user.email}
                    isActive={user.isActive}
                    toggleActivity={toggleActivity}
                />
            ))}
        </div>
    )
}

export default UserList;