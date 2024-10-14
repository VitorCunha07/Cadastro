import './App.css'; 
import React, { useState } from 'react';
import RegisterForm from './pages/RegisterForm';
import UserTable from './pages/UserTable';

function App() {
  const [currentPage, setCurrentPage] = useState('register');
  const [users, setUsers] = useState([]);

  const handleAddUser = (newUser) => {
    setUsers([...users, newUser]);
  };

  return (
    <div style={{ padding: '20px' }}>
      <nav style={{ marginBottom: '20px' }}>
        <button onClick={() => setCurrentPage('register')}>Cadastro</button>
        <button onClick={() => setCurrentPage('users')}>Usuários</button>
      </nav>

      {currentPage === 'register' ? (
        <RegisterForm onAddUser={handleAddUser} />
      ) : (
        <UserTable users={users} />
      )}
    </div>
  );
}

export default App;
