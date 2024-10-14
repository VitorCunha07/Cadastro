import React, { useState } from 'react';

function RegisterForm({ onAddUser }) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.firstName && formData.email && formData.password) {
      onAddUser(formData);
      setFormData({ firstName: '', lastName: '', email: '', password: '' });
      alert('Usuário cadastrado com sucesso!');
    } else {
      alert('Preencha todos os campos obrigatórios!');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Primeiro Nome:</label>
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Sobrenome:</label>
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Senha:</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Cadastrar</button>
    </form>
  );
}

export default RegisterForm;
