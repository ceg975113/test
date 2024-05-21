import { Col, Form, Input, Modal, Popconfirm, Row, Space, Table, Typography } from 'antd';
import { ColumnsType } from 'antd/es/table';
import React, { useEffect, useState } from 'react';

interface IUserBase {
  name: string;
  email: string;
  id: number;
}

const ListPage: React.FC = () => {
  const [form] = Form.useForm();
  const [isUserInfoOpen, setIsUserInfoOpen] = useState(false);
  const [data, setData] = useState<IUserBase[]>([]);

  const handleEdit = (record: IUserBase) => {
    form.setFieldsValue({ ...record });
    setIsUserInfoOpen(true);
  };
  const handleDelete = async (record: IUserBase) => {
    console.log(record);
  };
  useEffect(() => {
    setData([
      { name: '564654', email: 'lkjlkj@55.com', id: 1 },
      { name: '564654', email: 'lkjlkj@55.com', id: 2 },
      { name: '564654', email: 'lkjlkj@55.com', id: 3 },
      { name: '564654', email: 'lkjlkj@55.com', id: 4 },
      { name: '564654', email: 'lkjlkj@55.com', id: 5 },
      { name: '564654', email: 'lkjlkj@55.com', id: 6 },
    ]);
  }, []);
  const columns: ColumnsType<IUserBase> = [
    {
      title: '昵称',
      dataIndex: 'name',
      ellipsis: true,
      width: 120,
    },
    {
      title: '邮箱',
      dataIndex: 'email',
      ellipsis: true,
      width: 100,
    },
    {
      title: '操作',
      key: 'operation',
      fixed: 'right',
      width: 120,
      render: (__, record) => (
        <Space>
          <Typography.Link
            onClick={() => {
              handleEdit(record);
            }}
          >
            编辑
          </Typography.Link>
          <Popconfirm
            placement="topRight"
            description="确认删除该用户？"
            okText="确认"
            cancelText="取消"
            title={undefined}
            okButtonProps={{
              onClick: () => {
                handleDelete(record);
              },
            }}
          >
            <Typography.Link
              onClick={e => {
                e.stopPropagation();
              }}
            >
              删除
            </Typography.Link>
          </Popconfirm>
        </Space>
      ),
    },
  ];

  return (
    <div>
      <Table columns={columns} rowKey={record => record.id} dataSource={data} />

      <Modal
        open={isUserInfoOpen}
        onCancel={() => {
          setIsUserInfoOpen(false);
        }}
        onOk={async () => {
          const formData = await form.validateFields();
          const params = {
            ...formData,
          };
          console.log(params);
          // 请求
          setIsUserInfoOpen(false);
        }}
      >
        <Form
          form={form}
          name="basic"
          layout="vertical"
          // onFinish={handleRegister}
          autoComplete="off"
        >
          <Row gutter={24}>
            <Col className="gutter-row" span={12}>
              <Form.Item
                label="昵称"
                name="name"
                rules={[{ required: true, message: '请输入您的昵称' }]}
              >
                <Input placeholder="请输入您的昵称" />
              </Form.Item>
            </Col>
            <Col className="gutter-row" span={12}>
              <Form.Item
                label="电子邮箱"
                name="email"
                rules={[
                  { required: true, message: '请输入您的电子邮箱' },
                  { type: 'email', message: '请输入正确的电子邮箱' },
                ]}
              >
                <Input placeholder="请输入您的电子邮箱" />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Modal>
    </div>
  );
};

export default ListPage;
