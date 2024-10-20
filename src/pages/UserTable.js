import React from 'react';

function UserTable({ users }) {
  return (
    <div>
      <h2>Usuários Cadastrados</h2>
      {users.length > 0 ? (
        <table border="1" cellPadding="10" style={{ marginTop: '10px' }}>
          <thead>
            <tr>
              <th>Nome de usuário</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <td>{user.username}</td>
                <td>{user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>Nenhum usuário cadastrado.</p>
      )}
    </div>
  );
}

export default UserTable;
