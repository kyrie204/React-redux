import React, { useState, useEffect } from "react";
import { testList, users } from "@/request/api";
import { Table, Spin, Avatar, Modal, Button, Form, Input } from "antd";

function List() {
    const columns = [
        {
            title: "ID",
            dataIndex: "id",
        },
        {
            title: "Name",
            dataIndex: "name",
        },
        {
            title: "Addr",
            dataIndex: "addr",
        },
        {
            title: "Sex",
            dataIndex: "sex",
            render: (flag) => (flag ? "男" : "女"),
        },
        {
            title: "Age",
            dataIndex: "age",
        },
        {
            title: "Avatar",
            dataIndex: "avatar",
            render: (src) => <Avatar size={30} src={src} />,
        },
        {
            title: "Action",
            key: "operation",
            width: 100,
            render: (data) => <a onClick={() => showModal(data)}>edit</a>,
        },
    ];

    const [log, setLog] = useState(!true);
    const [data, setData] = useState(null);

    const [load, setLoad] = useState(true);

    const [isModalVisible, setIsModalVisible] = useState(false);
    const [selectData, setSelectData] = useState();

    const [form] = Form.useForm();

    const showModal = (data) => {
        setSelectData(data);
        form.setFieldsValue(data);

        setIsModalVisible(true);
    };

    const handleOk = () => {
        form.submit();
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };
    const done = (obj) => {
        let temp = data.map((item) => {
            if (obj.id === item.id) item = obj;
            return item;
        });
        setData(temp);
    };
    const change = (e) => {
        console.log(e.target.value);
    };

    useEffect(() => {
        init();
    }, []);
    const actionFn = (data) => {
        console.log(data);
    };

    const init = () => {
        users().then((res) => {
            res = res.list.map((item, index) => {
                item.key = index + 1;
                return item;
            });
            setData(res);
            setLoad(false);
        });
    };
    if (log) {
        return !data ? (
            <Spin></Spin>
        ) : (
            <div>
                <Table columns={columns} dataSource={data}></Table>
            </div>
        );
    } else {
        return (
            <div>
                <Table
                    columns={columns}
                    dataSource={data}
                    loading={load}
                ></Table>
                <Modal
                    title="详情展示"
                    visible={isModalVisible}
                    onOk={handleOk}
                    onCancel={handleCancel}
                    cancelText={"取消"}
                    okText={"确认"}
                    // footer={null}
                >
                    <Form
                        form={form}
                        labelCol={{ span: 5 }}
                        wrapperCol={{ span: 16 }}
                        name="basic"
                        onFinish={done}
                        initialValues={selectData}
                    >
                        {selectData &&
                            Object.entries(selectData).map((item, i) => {
                                return (
                                    <Form.Item
                                        label={item[0]}
                                        name={item[0]}
                                        key={i}
                                        // onChange={change}
                                    >
                                        {item[0] === "id" ? (
                                            <Input disabled />
                                        ) : (
                                            <Input />
                                        )}
                                    </Form.Item>
                                );
                            })}
                        {/* <Form.Item wrapperCol={{ offset: 16, span: 24 }}>
                            <Button onClick={handleCancel}>取消</Button>
                            <Button
                                type="primary"
                                htmlType="submit"
                                style={{ marginLeft: 8 + "px" }}
                            >
                                提交
                            </Button>
                        </Form.Item> */}
                    </Form>
                </Modal>
            </div>
        );
    }
}

export default List;
