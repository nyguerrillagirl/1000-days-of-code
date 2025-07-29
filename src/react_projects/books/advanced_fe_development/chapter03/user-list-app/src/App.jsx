import { useState } from 'react';
import React from 'react';
import UserList from './components/UserList';

function App() {
  const [users, setUsers] = useState([
    { id: 1, name: 'John Doe', email: 'john_doe@brainycode.com', isActive: true },
    { id: 2, name: 'Jane Smith', email: 'jane_smith@brainycode.com', isActive: false },
    { id: 3, name: 'Alice Johnson', email: 'alice_johnson@brainycode.com', isActive: true }
  ]);

  const toggleUserActivity = (id) => {
    setUsers( (prevUsers) =>
      prevUsers.map(user =>
        user.id === id ? { ...user, isActive: !user.isActive } : user
      )
    );
  };

  return (
    <div>
      <UserList users={users} toggleActivity={toggleUserActivity} />
    </div>
  )
}

export default App
