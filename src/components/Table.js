import React from 'react'
import { Space, Table} from 'antd';

export const TableComponent = ({data}) => {

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
          render: (_, record) => (
            <Space size="middle">
              <a>Editar</a>
              <a>Eliminar</a>
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
