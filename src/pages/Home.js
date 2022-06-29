import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import { Form } from '../components/Form'
import { Table, TableComponent } from '../components/Table'
import './Home.css'

export const Home = () => {
  const [usersList, setUsersList] = useState([]);

  useEffect(() => {
  
  Axios.get('http://localhost:3001/readUsers').then((response) => {
      setUsersList(response.data)
    })
  }, [])
  
    
  

  return (
    <div className='Home'>
        <div className='title'>Usuarios</div>
        <Form />
        <TableComponent data={usersList} />
        {/* <button onClick={getAllUsers}>Listar Usuarios</button> */}
    </div>
  )
}
