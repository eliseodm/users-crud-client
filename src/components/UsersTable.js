import React from 'react'
import { Button, Space, Table} from 'antd';
import Swal from 'sweetalert2'
import Axios from 'axios';

export const UsersTable = ({data}) => {

  const deleteUser = (userId) => {
    Axios.delete(`http://localhost:3001/deleteUser/${userId}`)
      .then((response) => {
        if(response.status === 200){
          Swal.fire('Usuario eliminado con exito')
        }
      });
  }

    const columns = [
        {
          title: 'Nombre',
          dataIndex: 'name',
          key: 'name'
        },
        {
          title: 'Apellido',
          dataIndex: 'surName',
          key: 'surName',
        },
        {
          title: 'DNI',
          dataIndex: 'dni',
          key: 'dni',
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email'
        },
        {
            title: 'Contraseña',
            dataIndex: 'password',
            key: 'password'
        },
        {
          title: 'Accion',
          key: 'action',
          render: (record) => (
            <Space size="small">
              <Button type='default' onClick={() => {}}>Editar</Button>
              <Button type='default' onClick={() => {deleteUser(record.id)}}>Borrar</Button>
            </Space>
          ),
        },
      ];
  return (
     <div>
        <Table columns={columns} pagination={{ pageSize: 5 }} dataSource={data} />
    </div>
  )
}
