import React from 'react';

function UserTable({ users }) {
  return (
    <div>
      <h2>Usuários Cadastrados</h2>
      {users.length > 0 ? (
        <table border="1" cellPadding="10" style={{ marginTop: '10px' }}>
          <thead>
            <tr>
              <th>Primeiro Nome</th>
              <th>Sobrenome</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
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
