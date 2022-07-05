import React, { useState, useEffect} from 'react'
import Axios from 'axios';
import { UsersTable } from '../components/UsersTable'
import './Home.css'
import { UserForm } from '../components/UserForm'

export const Home = () => {
  const [usersList, setUsersList] = useState([]);
  const [load, setLoad] = useState(true);
  useEffect(() => {
  Axios.get('http://localhost:3001/readUsers').then((response) => {
      setUsersList(response.data)
      setLoad(false)
    })
  }, [load])
  
  return (
    <div className='Home'>
        <div className='title'>Usuarios</div>
        <UserForm setLoad={setLoad}/>
        <UsersTable usersList={usersList} setLoad={setLoad} />
    </div>
  )
}
