import React, { useState } from 'react'
import { Button, Space, Table, Modal} from 'antd';
import Swal from 'sweetalert2'
import Axios from 'axios';
import { UserForm } from './UserForm';

export const UsersTable = ({ usersList, setLoad }) => {
  const [visible, setVisible] = useState(false);
  const [userId, setUserId] = useState(0);
  
  const updateUser = (id) => {
    showModal()
    setUserId(id)
  }
  
  const showModal = () => {
    setVisible(true);
  };
  const handleCancel = () => {
    setVisible(false);
  };

  const deleteUser = (userId) => {
    Swal.fire({
      title: 'Estas seguro?',
      text: "No podras revertir esto!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Eliminar',
      cancelButtonText: 'No, cancelar',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        Axios.delete(`http://localhost:3001/deleteUser/${userId}`)
          .then((response) => {
            if(response.status === 200){
              Swal.fire('Usuario eliminado con exito')
              setLoad(true)
            }
          });
      } else if (
        result.dismiss === Swal.DismissReason.cancel
      ) {
        Swal.fire(
          'Cancelado',
        )
      }
    })
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
              <Button type='default' onClick={() => {updateUser(record.id)}}>Editar</Button>
              <Button type='default' onClick={() => {deleteUser(record.id)}}>Borrar</Button>
            </Space>
          ),
        },
      ];
  return (
     <div>
        <Table columns={columns} pagination={{ pageSize: 5 }} dataSource={usersList} rowKey={usersList => usersList.id} />
        <Modal
        visible={visible}
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Volver
          </Button>
        ]}
      >
        <UserForm setLoad={setLoad} updateBtn={true} userId={userId} />
      </Modal>
    </div>
  )
}
