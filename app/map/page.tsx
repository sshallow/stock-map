"use client"

import { Search } from "@/components/custom-ui/search";
import { Button } from "@/components/ui/button";

import { Card } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import requestClient from "@/request/request";
import { useEffect, useState } from "react";
import { CheckView } from "./components/check-view";
import { HeaderCard } from "./components/header-card";
import { PresetSelector } from "./components/preset-selector";
import { Chart, Schema } from "./components/react-echarts";
import { Factor, defaultX, defaultY } from "./data/factors";

const defaultParam: string[] = [
    "f1",
    "TBL",
    "PBR60",
    "et2",
]

const getData = async (x: string, y: string, param: string[], date: string | null) => {
    let url = `http://smartpayt.com/prod-api/factor/paper/sky?x=${x}&y=${y}`;
    if (param.length > 0) {
        const paramStr = param.join(',')
        url += `&param=${paramStr}`;
    }
    if (date) {
        url += `&transDt=${date}`;
    }

    try {
        const response = await requestClient({ url, method: "GET" });
        if (response.data.data.length === 0) {
            return null;
        }
        return { date, data: response.data.data, schema: response.data.schema };
    } catch (err) {
        console.error("请求 5000 家数据失败", err);
        return null;
    }
};

export default function MapPage() {
    const [searchValue, setSearchValue] = useState("")

    // 数据, 单位
    const [data, setData] = useState<number[][]>([])
    const [schemaData, setSchemaData] = useState<Schema[]>([])
    // 选中的横轴,纵轴
    const [xAxisSelected, setXAxisSelected] = useState<Factor>(defaultX)
    const [yAxisSelected, setYAxisSelected] = useState<Factor>(defaultY)
    // 形状
    const [symbol, setSymbol] = useState("circle") // 默认为圆点
    // 对数
    const [logAxis, setLogAxis] = useState(false)
    // 高亮显示
    const [selectedChecks, setSelectedChecks] = useState(new Set<string>())
    const [hl_up_data, setHl_up_data] = useState<number[][]>([])
    const [hl_low_data, setHl_low_data] = useState<number[][]>([])
    const [hl_zero_data, setHl_zero_data] = useState<number[][]>([])
    const [hl_newHigh_data, setHl_newHigh_data] = useState<number[][]>([])
    const [hl_newLow_data, setHl_newLow_data] = useState<number[][]>([])
    const [hl_newStock_data, setHl_newStock_data] = useState<number[][]>([])

    const onSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event.target.value)
    }
    const handleXAxisSelect = (preset: Factor) => {
        setXAxisSelected(preset)
    }
    const handleYAxisSelect = (preset: Factor) => {
        setYAxisSelected(preset)
    }

    const handleTabChange = (value: string) => {
        setLogAxis(value === "log")
    }

    const handleSymbolChange = (value: string) => {
        setSymbol(value)
    }


    const handleCheckChange = (newSelectedChecks: Set<string>) => {
        setSelectedChecks(newSelectedChecks)
        // 高亮状态的数据 item[5]涨停标记  item[6]n日状态
        //  2：一字涨停；1：普通涨停；
        const filter_Hl_Up_Data = newSelectedChecks.has("hl_up")
            ? data.filter((item) => item[5] === 2 || item[5] === 1)
            : []
        setHl_up_data(filter_Hl_Up_Data)
        // -2一字跌停； -1：普通跌停；
        const filter_Hl_Low_Data = newSelectedChecks.has("hl_low")
            ? data.filter((item) => item[5] === -1 || item[5] === -2)
            : []
        setHl_low_data(filter_Hl_Low_Data)
        // 0：无涨跌停；
        // const filter_Hl_Zero_Data = newSelectedChecks.has("hl_zero")
        //   ? data.filter((item) => item[5] === 0)
        //   : []
        // setHl_zero_data(filter_Hl_Zero_Data)
        // 2：新高；
        const filter_Hl_NewHigh_Data = newSelectedChecks.has("hl_newHigh")
            ? data.filter((item) => item[6] === 2)
            : []
        setHl_newHigh_data(filter_Hl_NewHigh_Data)
        // 2：新高；
        const filter_Hl_NewLow_Data = newSelectedChecks.has("hl_newLow")
            ? data.filter((item) => item[6] === -2)
            : []
        setHl_newLow_data(filter_Hl_NewLow_Data)
        // ET2 为 null 或者 0：新股；
        const filter_Hl_NewStock_Data = newSelectedChecks.has("hl_newStock")
            ? data.filter((item) => item[7] === null || item[7] === 0)
            : []
        setHl_newStock_data(filter_Hl_NewStock_Data)


        // 为每个数组添加 type 字段
        const mapDataWithType = (data: number[][], type: string) => {
            return data.map((item, index) => ({
                id: index.toString(),
                type: type, // 设置数据来源类型
                sec_cd: item[2].toString(),
                sec_nm: item[3].toString(),
                x: item[0].toString(),
                y: item[1].toString(),
                open: "",
                close: "",
                high: "",
                low: "",
                first: item[4].toString(),
                second: item[5].toString(),
                third: "",
            }));
        };

        // // 合并数组，同时添加 type 字段来区分不同的数据来源
        // const combinedData: Stock[] = [
        //     ...mapDataWithType(filter_Hl_Up_Data || [], 'hl_up'),
        //     ...mapDataWithType(filter_Hl_Low_Data || [], 'hl_low'),
        //     ...mapDataWithType(filter_Hl_NewHigh_Data || [], 'hl_newHigh'),
        //     ...mapDataWithType(filter_Hl_NewLow_Data || [], 'hl_newLow'),
        //     ...mapDataWithType(filter_Hl_NewStock_Data || [], 'hl_newStock'),
        // ];

        // // 现在 combinedData 是包含 type 字段的完整数据集
        // console.log(combinedData);
        // setSearchListData(combinedData)
    }

    useEffect(() => {
        // 请求数据
        const fetchData = async () => {
            const data = await getData(
                xAxisSelected.factorSymbol,
                yAxisSelected.factorSymbol,
                defaultParam,
                null
            );
            if (data) {
                setData(data.data);
                setSchemaData(data.schema);
            }
        }
        fetchData();

    }, [xAxisSelected, yAxisSelected]);

    return (
        <div className="container py-12">
            <div className="flex flex-col items-center">
                <div className="flex-1 space-y-4">
                    <div className="flex items-center justify-between space-y-2 ">
                        <h2 className="text-3xl font-bold tracking-tight md:text-3xl">
                            ✨市场星图
                        </h2>
                        <div className="flex items-center space-x-2">
                            <Search onChange={onSearch} />
                            <Button>搜索</Button>
                        </div>
                    </div>

                    <div className="space-y-4 ">
                        <HeaderCard />
                    </div>
                    <div className="py-4 ">
                        <div className="flex flex-wrap items-center gap-4">
                            {/* <TeamSwitcher /> */}
                            {/* <div> */}
                            <PresetSelector
                                title="横轴"
                                onPresetSelect={handleXAxisSelect}
                                defaultFactor={defaultX}
                            />
                            <PresetSelector
                                title="纵轴"
                                onPresetSelect={handleYAxisSelect}
                                defaultFactor={defaultY}
                            />
                            <Select
                                defaultValue="circle"
                                onValueChange={handleSymbolChange}
                            >
                                <SelectTrigger className=" w-[110px]">
                                    <SelectValue placeholder="Select" />
                                </SelectTrigger>
                                <SelectContent>
                                    {/*<DropdownMenuLabel>点形状</DropdownMenuLabel>*/}
                                    {/*<DropdownMenuSeparator />*/}
                                    <SelectItem value="rect">星星</SelectItem>
                                    <SelectItem value="circle">圆点</SelectItem>
                                </SelectContent>
                            </Select>
                            <Tabs
                                defaultValue="normal"
                                className="space-y-4"
                                onValueChange={handleTabChange}
                            >
                                <TabsList>
                                    <TabsTrigger value="normal">普通坐标</TabsTrigger>
                                    <TabsTrigger value="log">对数坐标</TabsTrigger>
                                </TabsList>
                            </Tabs>
                            <div className="ml-auto">
                                <CheckView
                                    title="高亮显示"
                                    onSelectedChange={handleCheckChange}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="relative  w-full pb-[70%]">
                        <Card className="absolute inset-0 overflow-visible">
                            <Chart
                                data={data}
                                schemaData={schemaData}
                                searchValue={searchValue}
                                symbol={symbol}
                                logAxis={logAxis}
                                hl_up_data={hl_up_data}
                                hl_low_data={hl_low_data}
                                hl_zero_data={hl_zero_data}
                                hl_newHigh_data={hl_newHigh_data}
                                hl_newLow_data={hl_newLow_data}
                                hl_newStock_data={hl_newStock_data}
                            />
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    )
}