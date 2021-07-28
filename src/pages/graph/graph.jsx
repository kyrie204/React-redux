import React, { useEffect, useRef } from "react";
import "./graph.scss";

import { Card, Space } from "antd";
import { DualAxes, Pie } from "@ant-design/charts";

function Graph() {
    let pie2 = useRef();

    let data = [
        {
            time: "2019-03",
            value: 350,
            count: 800,
        },
        {
            time: "2019-04",
            value: 900,
            count: 600,
        },
        {
            time: "2019-05",
            value: 300,
            count: 400,
        },
        {
            time: "2019-06",
            value: 450,
            count: 380,
        },
        {
            time: "2019-07",
            value: 470,
            count: 220,
        },
    ];
    let data1 = [
        {
            time: "2019-03",
            count: 350,
            type: "a",
        },
        {
            time: "2019-04",
            count: 900,
            type: "a",
        },
        {
            time: "2019-05",
            count: 300,
            type: "a",
        },
        {
            time: "2019-06",
            count: 450,
            type: "a",
        },
        {
            time: "2019-07",
            count: 470,
            type: "a",
        },
        {
            time: "2019-03",
            count: 150,
            type: "b",
        },
        {
            time: "2019-04",
            count: 400,
            type: "b",
        },
        {
            time: "2019-05",
            count: 100,
            type: "b",
        },
        {
            time: "2019-06",
            count: 750,
            type: "b",
        },
        {
            time: "2019-07",
            count: 970,
            type: "b",
        },
    ];

    var config = {
        autoFit: true,
        data: [data, data1],
        xField: "time",
        yField: ["value","count"],
        geometryOptions: [
            { geometry: "column" },
            {
                geometry: "line",
                lineStyle: { lineWidth: 2 },
                seriesField: "type",
                color: ({ type }) => {
                    if (type === "a") {
                        return "red";
                    }
                    return "yellow";
                },
            },
        ],
    };

    var dataPie = [
        {
            type: "分类一",
            value: 27,
        },
        {
            type: "分类二",
            value: 25,
        },
        {
            type: "分类三",
            value: 18,
        },
        {
            type: "分类四",
            value: 15,
        },
        {
            type: "分类五",
            value: 10,
        },
        {
            type: "其他",
            value: 5,
        },
    ];
    var configPie = {
        autoFit: true,
        appendPadding: 10,
        data: dataPie,
        angleField: "value",
        colorField: "type",
        radius: 0.8,
        label: {
            type: "outer",
            content: "{name} {percentage}",
        },
        interactions: [
            { type: "pie-legend-active" },
            { type: "element-active" },
        ],
    };

    var dataPie2 = [
        {
            type: "分类一",
            value: 27,
        },
        {
            type: "分类二",
            value: 25,
        },
        {
            type: "分类三",
            value: 18,
        },
        {
            type: "分类四",
            value: 15,
        },
        {
            type: "分类五",
            value: 10,
        },
        {
            type: "其他",
            value: 5,
        },
    ];
    var configPie2 = {
        appendPadding: 10,
        data: dataPie2,
        angleField: "value",
        colorField: "type",
        radius: 0.8,
        innerRadius: 0.64,
        meta: {
            value: {
                formatter: function formatter(v) {
                    return `${v + 1}`;
                },
            },
        },
        label: {
            type: "inner",
            offset: "-50%",
            style: { textAlign: "center" },
            autoRotate: false,
            content: "{value} ge",
        },
        interactions: [
            // { type: "element-selected" },
            // { type: "pie-legend-active" },
            { type: "element-active" },
            { type: "pie-statistic-active" },
        ],
        tooltip: {
            formatter: (datum) => {
                // console.log(datum);
                return { name: datum.type, value: datum.value + "%" };
            },
        },
        statistic: {
            title: {
                customHtml: (container, view, datum) => {
                    return datum ? `${datum.type}` : "title总计";
                },
            },
            content: {
                style: {
                    textAlign: "center",
                    fontWeight: "normal",
                    fontSize: 16,
                },
                customHtml: (con, view, datum, data) => {
                    //优先级高于formatter
                    // console.log(con, view, datum, data);
                    // return datum ? `${data[1].type} \n ${data[1].value + 1}` : '10000'
                    return datum ? `${datum.value}` : "1000";
                },
                // formatter: (v, data)=> {
                //     // console.log(v, data);
                //     return v ?` ${v.value+1}` : `10000`;
                // },
            },
        },
    };

    const initPie2Event = () => {
        if (pie2.current) {
            // element 添加点击事件， element 代表图形元素，
            // pie2.current.on("element:click", (...args) => {
            //     console.log(...args);
            // });
            // 图例名称添加点击事件
            pie2.current.on("legend-item-name:click", (...args) => {
                console.log(...args);
            });
            // label 添加点击事件
            pie2.current.on("label:click", (...args) => {
                console.log(...args);
            });
        }
    };
    const ready = (ev) => {
        console.log("初始化回调", ev);
    };
    const onEvent = (chart, event) => {
        if (event.type == "click") console.log(chart, event);
    };
    useEffect(() => {
        initPie2Event();
    }, []);

    return (
        <div>
            <h3 className="header">Graph 页面</h3>
            <Space direction="vertical">
                <Card title={"Ant Design Charts"} hoverable={true}>
                    <DualAxes {...config} />
                </Card>
                <div>
                    <Space>
                        <Card hoverable={true}>
                            <Pie {...configPie} />
                        </Card>
                        <Card hoverable={true}>
                            <Pie
                                {...configPie2}
                                chartRef={pie2}
                                onReady={ready}
                                onEvent={onEvent}
                            />
                        </Card>
                    </Space>
                </div>
            </Space>
        </div>
    );
}

export default Graph;
