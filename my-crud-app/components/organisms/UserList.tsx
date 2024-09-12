import { Table, Button } from "antd";

const UserList = ({
  users,
  onEdit,
  onDelete,
}: {
  users: any[];
  onEdit: (user: any) => void;
  onDelete: (id: number) => void;
}) => {
  const columns = [
    { title: "ID", dataIndex: "id", key: "id" },
    { title: "Name", dataIndex: "name", key: "name" },
    {
      title: "Actions",
      render: (text: string, record: any) => (
        <>
          <Button onClick={() => onEdit(record)}>Edit</Button>
          <Button onClick={() => onDelete(record.id)} danger>
            Delete
          </Button>
        </>
      ),
    },
  ];

  return <Table dataSource={users} columns={columns} rowKey="id" />;
};

export default UserList;
