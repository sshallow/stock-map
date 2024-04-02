"use client"

import React, { useState, useEffect } from 'react';
import ReactECharts from 'echarts-for-react';
import requestClient from "@/request/request";

interface DataItem {
    CMV: number;
    MV_ratio: number;
    TBL: number;
    TMV: number;
    TOR: number;
    sec_cd: string;
    trans_dt: string;
}

interface ApiResponse {
    data: DataItem[];
    stats: any;
}

const getALLData = async (date: string | null) => {
    let url = `https://smartpayt.com/python-api/alldata/`;
    if (date) {
        url += date;
    }
    try {
        const response = await requestClient({ url, method: "GET" });
        return response.data;
    } catch (err) {
        console.error("请求TBL数据失败", err);
        return null;
    }
}

const BarChartPage: React.FC = () => {
    const [option, setOption] = useState({});

    useEffect(() => {

        // 请求TBL数据
        const fetchAllData = async () => {
            const data = await getALLData("2023-01-01");
            if (data) {

                // 提取市值数据并排序
                const cmvData = data.map(item => Math.floor(item.CMV)); // 统一舍去小数部分
                cmvData.sort((a, b) => a - b);

                //  计算去除极值后的数据范围
                const startIndex = Math.floor(cmvData.length * 0.01);                 //  1%
                const endIndex = Math.floor(cmvData.length * 0.99);                 //  99%

                //  获取保留的市值数据
                const trimmedData = cmvData.slice(startIndex, endIndex + 1);

                //  获取最小值和最大值
                const minValue = trimmedData[0];
                const maxValue = trimmedData[trimmedData.length - 1];

                //  构造桶
                const numBuckets = maxValue - minValue + 1;                 //  桶的数量为市值最大值减去最小值再加上1
                const buckets = Array.from({ length: numBuckets }, () => 0);

                //  遍历数据，统计每个桶内的公司数量
                trimmedData.forEach(cmv => {
                    const index = cmv - minValue;
                    buckets[index]++;
                });

                //  构造柱状图数据
                const series = buckets.map((count, index) => ({
                    value: count
                }));

                //  构造 x 轴标签
                const xAxisData = Array.from({ length: numBuckets }, (_, index) => `${minValue + index}`);

                setOption({
                    xAxis: {
                        type: 'category',
                        data: xAxisData
                    },
                    yAxis: {
                        type: 'value'
                    },
                    series: [
                        {
                            data: series,
                            type: 'bar'
                        }
                    ]
                });


            }
        }

        fetchAllData();


    }, []);

    return <ReactECharts option={option} style={{ height: '1000px', width: '100%' }} />;
};

export default BarChartPage;
