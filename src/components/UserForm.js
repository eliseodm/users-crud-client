import React, { useState } from "react";
import { Input, Button } from 'antd';
import Axios from 'axios'

export const UserForm = ({  setLoad, updateBtn, userId }) => {
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
      setLoad(true)
    })
  }

  const updateUser = () => {
    Axios.put('http://localhost:3001/updateUser', {
      id: userId,
      name: formData.name,
      surName: formData.surName,
      dni: formData.dni,
      email: formData.email,
      password: formData.password
    }).then((response) => {
      console.log("success user updated")
      setLoad(true)
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
    if(updateBtn){
      updateUser()
      console.log("actualizarUsuario: ", userId )
    } else {
      addUser()
    }
    setFormData({
      name: "",
      surName: "",
      dni: "",
      email: "",
      password: "",
    })
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <Input
        placeholder="Nombre"
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
      />
      <Input
        placeholder="Apellido"
        type="text"
        name="surName"
        value={formData.surName}
        onChange={handleChange}
      />
      <Input
        placeholder="DNI"
        type="text"
        name="dni"
        value={formData.dni}
        onChange={handleChange}
      />
      <Input
        placeholder="Email"
        type="text"
        name="email"
        value={formData.email}
        onChange={handleChange}
      />
      <Input
        placeholder="Contrasenia"
        type="text"
        name="password"
        value={formData.password}
        onChange={handleChange}
      />

      <Button type="default" htmlType="submit">
        {
          updateBtn ? "Actualizar" : "Nuevo Usuario"
        }
      </Button>

      
    </form>
  );
};
