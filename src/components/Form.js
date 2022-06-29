import React, { useState } from "react";
import Axios from 'axios'

export const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    surName: "",
    dni: "",
    email: "",
    password: "",
  });

  const addUser = () => {
    Axios.post('http://localhost:3001/create', {
      name: formData.name,
      surName: formData.surName,
      dni: formData.dni,
      email: formData.email,
      password: formData.password
    }).then((response) => {
      console.log("success user created")
    })
  }

  const handleChange = (e) => {
    const value = e.target.value;
    setFormData({
      ...formData,
      [e.target.name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("formData:::", formData);
    addUser()
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <label>
        Nombre:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </label>
      <label>
        Apellido:
        <input
          type="text"
          name="surName"
          value={formData.surName}
          onChange={handleChange}
        />
      </label>
      <label>
        DNI:
        <input
          type="text"
          name="dni"
          value={formData.dni}
          onChange={handleChange}
        />
      </label>
      <label>
        Email:
        <input
          type="text"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </label>
      <label>
        Contraseña:
        <input
          type="text"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
      </label>

      <input type="submit" value="Enviar"/>
    </form>
  );
};
