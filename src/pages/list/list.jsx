import React, { useState, useEffect } from "react";
import { testList, users } from "@/request/api";
import { Table, Spin, Avatar } from "antd";

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
            render: (data) => <a onClick={() => actionFn(data)}>edit</a>,
        },
    ];

    const [log, setLog] = useState(!true);
    const [data, setData] = useState(null);

    const [load, setLoad] = useState(true);

    useEffect(() => {
        init();
    }, []);
    const actionFn = (data) => {
        console.log(data);
    };

    const init = () => {
        users().then((res) => {
            res = res.map((item, index) => {
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
            </div>
        );
    }
}

export default List;
