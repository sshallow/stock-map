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

const getTBLData = async (date: string | null) => {
    let url = `https://smartpayt.com/python-api/data/`;
    // let url = `https://smartpayt.com/python-api/alldata/`;
    // let url = `http://localhost:5001/alldata/`;
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
        const fetchTBLData = async () => {
            const data = await getTBLData("2023-01-01");
            if (data) {

                // // 提取市值数据并排序
                // const filteredData = data.filter(item => item.MV_ratio >= 0.23 && item.MV_ratio <= 0.26);
                //
                // const cmvData = filteredData.map(item => Math.floor(item.TMV)); // 统一舍去小数部分
                // cmvData.sort((a, b) => a - b);
                //
                // //  计算去除极值后的数据范围
                // const startIndex = Math.floor(cmvData.length * 0.01);                 //  1%
                // const endIndex = Math.floor(cmvData.length * 0.99);                 //  99%
                //
                // //  获取保留的市值数据
                // const trimmedData = cmvData.slice(startIndex, endIndex + 1);
                //
                // //  获取最小值和最大值
                // const minValue = trimmedData[0];
                // const maxValue = trimmedData[trimmedData.length - 1];
                //
                // //  构造桶
                // const numBuckets = maxValue - minValue + 1;                 //  桶的数量为市值最大值减去最小值再加上1
                // const buckets = Array.from({ length: numBuckets }, () => 0);
                //
                // //  遍历数据，统计每个桶内的公司数量
                // trimmedData.forEach(cmv => {
                //     const index = cmv - minValue;
                //     buckets[index]++;
                // });
                //
                // //  构造柱状图数据
                // const series = buckets.map((count, index) => ({
                //     value: count
                // }));
                //
                // //  构造 x 轴标签
                // const xAxisData = Array.from({ length: numBuckets }, (_, index) => `${minValue + index}`);

                // 找出 MV_ratio 在 0.24 到 0.25 的数据，并计算做成集合，并添加 count为出现的次数

// 过滤出 MV_ratio 在 0.24 到 0.25 范围内的数据
                const filteredData = data.filter(item => item.MV_ratio >= 0.23 && item.MV_ratio <= 0.26);

// 构造集合并计算出现次数

                const mvRatioSet = {};
                filteredData.forEach(item => {
                    const mvRatio = item.MV_ratio;
                    if (mvRatioSet[mvRatio]) {
                        mvRatioSet[mvRatio].count++;
                        mvRatioSet[mvRatio].companies.push(item);
                    } else {
                        mvRatioSet[mvRatio] = { count: 1, companies: [item] };
                    }
                });

                console.log("mvRatioSet");
                console.log(mvRatioSet);

// 构造集合并计算每个公司在指定比例范围内的出现次数
                const companyCountMap = {};
                filteredData.forEach(item => {
                    const companyName = item.sec_cd; // 假设公司名存储在字段 companyName 中
                    if (companyCountMap[companyName]) {
                        companyCountMap[companyName]++;
                    } else {
                        companyCountMap[companyName] = 1;
                    }
                });

                console.log(companyCountMap);

                debugger
                // 提取 MV_ratio 数据并排序
                const mvRatioData = data.map(item => item.MV_ratio); // 获取 MV_ratio 数据
                mvRatioData.sort((a, b) => a - b); // 排序

// 计算去除极值后的数据范围
                const startIndex = Math.floor(mvRatioData.length * 0.01); // 1%
                const endIndex = Math.floor(mvRatioData.length * 0.99); // 99%

// 获取保留的 MV_ratio 数据
                const trimmedData = mvRatioData.slice(startIndex, endIndex + 1);

// 获取最小值和最大值
                const minValue = trimmedData[0];
                const maxValue = trimmedData[trimmedData.length - 1];

// 构造桶
                const numBuckets = 100; // 桶的数量
                const bucketSize = (maxValue - minValue) / numBuckets; // 计算每个桶的大小
                const buckets = Array.from({ length: numBuckets }, () => 0);

// 遍历数据，统计每个桶内的公司数量
                trimmedData.forEach(mvRatio => {
                    const index = Math.floor((mvRatio - minValue) / bucketSize); // 计算桶的索引
                    buckets[index]++;
                });

// 构造柱状图数据
                const series = buckets.map((count, index) => ({
                    value: count
                }));

// 构造 x 轴标签
                const xAxisData = Array.from({ length: numBuckets }, (_, index) => {
                    const bucketStart = minValue + index * bucketSize;
                    const bucketEnd = minValue + (index + 1) * bucketSize;
                    return `${bucketStart.toFixed(2)} - ${bucketEnd.toFixed(2)}`; // 桶的范围
                });
                setOption({
                    tooltip: {
                        trigger: 'axis'
                    },

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

        fetchTBLData();


    }, []);

    return <ReactECharts option={option} style={{ height: '600px', width: '100%' }} />;
};

export default BarChartPage;
