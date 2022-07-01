import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import { UsersTable } from '../components/UsersTable'
import './Home.css'
import { UserForm } from '../components/UserForm'

export const Home = () => {
  const [usersList, setUsersList] = useState([]);

  useEffect(() => {
  Axios.get('http://localhost:3001/readUsers').then((response) => {
      setUsersList(response.data)
    })
  }, [usersList])
  
  return (
    <div className='Home'>
        <div className='title'>Usuarios</div>
        <UserForm />
        <UsersTable data={usersList} />
    </div>
  )
}
