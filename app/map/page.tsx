"use client"

import { Search } from "@/components/custom-ui/search";
import { Button } from "@/components/ui/button";

import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import requestClient from "@/request/request";
import { format } from "date-fns";
import { useEffect, useState } from "react";
import { useDebouncedCallback } from "use-debounce";
import { CheckView } from "./components/check-view";
import { DatePicker } from "./components/date-picker";
import { HeaderCard, HeaderCardProps } from "./components/header-card";
import { PresetSelector } from "./components/preset-selector";
import { Chart, Schema } from "./components/react-echarts";
import { SearchListTable, Stock } from './components/search-list-table';
import { Factor, defaultX, defaultY } from "./data/factors";
import {Separator} from "@/components/ui/separator";
import {constants} from "fs";
import {any} from "prop-types";
import ignore from "ignore";

const getTargetFA = async (fax: string,date: string | null) => {
    let url = `https://smartpayt.com/prod-api/factor/paper/sky?x=f1&y=f1&param=${fax}&transDt=${date}`

    try {
        const response = await requestClient({ url, method: "GET" });
        if (response.data.data.length === 0) {
            return null;
        }
        return { date, data: response.data.data, schema: response.data.schema };
    } catch (err) {
        console.error("请求 fax 数据失败", err);
        return null;
    }
}

function mergeDataAndSchema(originalData?: any, originalSchema?: any, dataToMerge?: any, column?: any) {
    debugger
    // 从原始数据和模式中移除之前添加的以 "fa" 开头的列和模式信息
    const faRegex = /^fa/;
    // @ts-ignore
    originalData = originalData.map((row) => row.filter((item, i) => !originalSchema[i].name.match(faRegex)));
    originalSchema = originalSchema.filter((item: Schema) => !item.name.match(faRegex));


    // 在 dataToMerge 中找到要合并的列索引
    const columnIndex = dataToMerge.schema.findIndex((item: Schema) => item.name === column);

    // 在 dataToMerge 中找到 sec_cd 列的索引
    const secCdIndex2 = dataToMerge.schema.findIndex((item: any) => item.name === 'sec_cd');

    // 在 originalData 中找到 sec_cd 列的索引
    const secCdIndex1 = originalSchema.findIndex((item: any) => item.name === 'sec_cd');

    // 提取出要合并的列数据
    const columnToMerge = dataToMerge.data.map((row: any) => row[columnIndex]);

    // 提取出要合并的模式信息
    const schemaToMerge = dataToMerge.schema.find((item: any) => item.name === column);

    // 遍历 originalData 的每一行
    // @ts-ignore
    originalData.forEach((row, i) => {
        const secCd = row[secCdIndex1];
        // 在 dataToMerge 中查找对应的值
        const mergeValue = dataToMerge.data.find((row2: any) => row2[secCdIndex2] === secCd)?.[columnIndex];
        // 如果找到了,就将值插入到 originalData 的这一行
        if (mergeValue !== undefined) {
            row.push(mergeValue);
        } else {
            // 如果没找到,插入一个空值
            row.push(null);
        }
    });

    // 将模式信息添加到 originalSchema 中
    originalSchema.push(schemaToMerge);

    return { data1: originalData, schema1: originalSchema };
}


const getMarketData = async (date: string | null) => {
    let url = `https://smartpayt.com/prod-api/factor/paper/market_sky`;
    if (date) {
        url += `?transDt=${date}`;
    }
    try {
        const response = await requestClient({ url, method: "GET" });
        return response.data;
    } catch (err) {
        console.error("请求大盘数据失败", err);
        return null;
    }
}

// x0,y1,code2,name3,...以下
const defaultParam: string[] = [
    "f1",// 上涨4
    "et2", // 新股5
    "TBL", // 涨跌停6
    "PBR30", // 30 日新高7
    "PBR60", // 60 日新高8
    "f1",// 上涨4
]

const getData = async (x: string, y: string, param: string[], date: string | null) => {
    let url = `https://smartpayt.com/prod-api/factor/paper/sky?x=${x}&y=${y}`;
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

export default function MapPage(message?: any) {
    const [onClear, setOnClear] = useState(false);
    const [selectedDate, setSelectedDate] = useState<string>();

    // 大盘数据
    const [marketData, setMarketData] = useState<HeaderCardProps[]>()
    const [marketDate, setMarketDate] = useState<string>("")

    // 搜索
    const [searchValue, setSearchValue] = useState("")

    // 数据, 数据单位%
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
    // 未来几日收益率
    const [fa_x, setFa_x] = useState("f1") // 默认为圆点

    const [hl_newStock_data, setHl_newStock_data] = useState<number[][]>([])
    const [hl_up_data, setHl_up_data] = useState<number[][]>([])
    const [hl_low_data, setHl_low_data] = useState<number[][]>([])
    const [hl_newHigh30_data, setHl_newHigh30_data] = useState<number[][]>([])
    const [hl_newLow30_data, setHl_newLow30_data] = useState<number[][]>([])
    const [hl_newHigh60_data, setHl_newHigh60_data] = useState<number[][]>([])
    const [hl_newLow60_data, setHl_newLow60_data] = useState<number[][]>([])

    // 高亮结果
    const [searchListData, setSearchListData] = useState<Stock[]>([])

    const onSearch = useDebouncedCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(event.target.value)
    }, 300
    )

    // 按钮方法
    const handleDateChange = (selectedDate: Date | undefined) => {
        if (selectedDate) {
            console.log(selectedDate)
            const formattedDate = format(selectedDate, 'yyyy-MM-dd'); // 格式化日期为 'yyyy-MM-dd' 格式
            console.log(formattedDate)
            setSelectedDate(formattedDate);
            setFa_x("f1")
        }
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

    const handleFAChange = (value: string) => {
        //
        if (value==="f1"){
            let originalData =data
            let originalSchema =schemaData

            // 从原始数据和模式中移除之前添加的以 "fa" 开头的列和模式信息
            const faRegex = /^fa/;
            originalData = originalData.map(row => row.filter((_, i) => !originalSchema[i].name.match(faRegex)));
            originalSchema = originalSchema.filter(item => !item.name.match(faRegex));

            console.log(originalData,originalSchema)

            setData(originalData);
            setSchemaData(originalSchema);
            setFa_x(value)
            return;
        }
        // 根据值，选择 x 日之后的日期
        const match = value.match(/\d+/);
        let days = 0;

        if (match) {
            days = parseInt(match[0], 10);
        }

        if (selectedDate) {
            // 将字符串转换为 Date 对象
            const date = new Date(selectedDate);

            // 添加指定天数
            date.setDate(date.getDate() + days);

            // 将 Date 对象转换回字符串
            const newDate = date.toISOString().slice(0, 10);

            console.log(newDate)
            // 获取昨天的日期
            const yesterday = new Date();
            yesterday.setDate(yesterday.getDate() - 1);
            yesterday.setHours(0, 0, 0, 0); // 将时间设置为当天的00:00:00

            const newDateObj = new Date(newDate);

            if (newDateObj > yesterday) {
                alert(selectedDate+'没有未来'+value);
                return
            }
            // 请求
            const getFa = async () => {
                const fadata = await getTargetFA(value,newDate);
                if (fadata) {
                    // 合并
                    debugger
                    const { data1, schema1 } = mergeDataAndSchema(data, schemaData, fadata,value);
                    console.log(data1,schema1)

                    setData(data1);
                    setSchemaData(schema1);
                }else {
                    alert(selectedDate+'没有未来'+value);
                    return
                }
            }
            getFa();
            setFa_x(value)

        } else {
            alert(selectedDate+'没有未来'+value);
            return
        }

    }

    // 高亮方法
    const handleCheckChange = (newSelectedChecks: Set<string>) => {
        setSelectedChecks(newSelectedChecks)
        // 过滤高亮状态数据
        // ET2 为 null 或者 0：新股；
        const filter_Hl_NewStock_Data = newSelectedChecks.has("hl_newStock")
            ? data.filter((item) => item[5] === null || item[5] === 0)
            : []
        setHl_newStock_data(filter_Hl_NewStock_Data)

        //  2：一字涨停；1：普通涨停；
        const filter_Hl_Up_Data = newSelectedChecks.has("hl_up")
            ? data.filter((item) => item[6] === 2 || item[6] === 1)
            : []
        setHl_up_data(filter_Hl_Up_Data)
        // -2一字跌停； -1：普通跌停；
        const filter_Hl_Low_Data = newSelectedChecks.has("hl_low")
            ? data.filter((item) => item[6] === -1 || item[6] === -2)
            : []
        setHl_low_data(filter_Hl_Low_Data)

        // 2: 30日新高
        const filter_Hl_NewHigh30_Data = newSelectedChecks.has("hl_newHigh30")
            ? data.filter((item) => item[7] === 2)
            : []
        setHl_newHigh30_data(filter_Hl_NewHigh30_Data)
        // 2: 30日新低
        const filter_Hl_NewLow30_Data = newSelectedChecks.has("hl_newLow30")
            ? data.filter((item) => item[7] === -2)
            : []
        setHl_newLow30_data(filter_Hl_NewLow30_Data)

        // 2: 60日新高
        const filter_Hl_NewHigh60_Data = newSelectedChecks.has("hl_newHigh60")
            ? data.filter((item) => item[8] === 2)
            : []
        setHl_newHigh60_data(filter_Hl_NewHigh60_Data)
        // 2: 60日新低
        const filter_Hl_NewLow60_Data = newSelectedChecks.has("hl_newLow60")
            ? data.filter((item) => item[8] === -2)
            : []
        setHl_newLow60_data(filter_Hl_NewLow60_Data)

        console.log("高亮数据", filter_Hl_NewStock_Data, filter_Hl_Up_Data, filter_Hl_Low_Data, filter_Hl_NewHigh30_Data, filter_Hl_NewLow30_Data, filter_Hl_NewHigh60_Data, filter_Hl_NewLow60_Data)

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
                first: item[0].toString(),
                second: item[1].toString(),
                third: "",
            }));
        };

        // 合并数组，同时添加 type 字段来区分不同的数据来源
        const combinedData: Stock[] = [
            ...mapDataWithType(filter_Hl_NewStock_Data || [], 'hl_newStock'),
            ...mapDataWithType(filter_Hl_Up_Data || [], 'hl_up'),
            ...mapDataWithType(filter_Hl_Low_Data || [], 'hl_low'),
            ...mapDataWithType(filter_Hl_NewHigh30_Data || [], 'hl_newHigh30'),
            ...mapDataWithType(filter_Hl_NewLow30_Data || [], 'hl_newLow30'),
            ...mapDataWithType(filter_Hl_NewHigh60_Data || [], 'hl_newHigh60'),
            ...mapDataWithType(filter_Hl_NewLow60_Data || [], 'hl_newLow60'),
        ];
        setSearchListData(combinedData)
    }

    // 重置/清空所有数据
    const handleClear = () => {
        // setSelectedDate(undefined)
        // setMarketData(undefined)
        // setData([])
        // setSchemaData([])
        // setXAxisSelected(defaultX)
        // setYAxisSelected(defaultY)
        // setSymbol("circle")
        // setLogAxis(false)
        setOnClear(true);
        setSelectedChecks(new Set<string>())
        setHl_newStock_data([])
        setHl_up_data([])
        setHl_low_data([])
        setHl_newHigh30_data([])
        setHl_newLow30_data([])
        setHl_newHigh60_data([])
        setHl_newLow60_data([])
        setSearchListData([])
    }


    const handleExternalClear = () => {
        // 外部清除逻辑
        console.log("外部清除逻辑")
    };

    useEffect(() => {
        // 请求大盘数据
        const fetchMarketData = async () => {
            const data = await getMarketData(selectedDate ? selectedDate : null);
            if (data) {
                setMarketData(data.data);
                setMarketDate(data.trans_dt)
            }
        }

        // 请求5000数据
        const fetchData = async () => {
            const data = await getData(
                xAxisSelected.factorSymbol,
                yAxisSelected.factorSymbol,
                defaultParam,
                selectedDate ? selectedDate : null
            );
            if (data) {
                handleClear()
                handleExternalClear()
                setData(data.data);
                setSchemaData(data.schema);
            }
            // 如果是默认的
            // if (xAxisSelected === defaultX && yAxisSelected === defaultY && (!marketData || marketData.length == 0)) {
            //     console.log("request market")
            // fetchMarketData()
            // }
        }
        fetchData();
        fetchMarketData()


    }, [xAxisSelected, yAxisSelected, selectedDate]);

    return (
        <div className="py-12">
            <div className="flex flex-col items-center">
                <div className="flex-1 space-y-4 container mx-auto">
                    <div className="flex items-center justify-between space-y-2 ">
                        <h2 className="text-3xl font-bold tracking-tight md:text-3xl">
                            ✨市场星图
                            {selectedDate && selectedDate.length > 8 && (<span className="pl-2 text-lg">{selectedDate}</span>)}
                        </h2>
                        {/* <div className="flex items-center space-x-2">
                            <Search onChange={onSearch} />
                            <Button>搜索</Button>
                        </div> */}
                    </div>
                    {marketData && marketData.length > 0 && (
                        <div className="space-y-4">
                            <HeaderCard marketData={marketData} />
                        </div>
                    )}
                    <div className="my-4">
                        <div className="hidden flex flex-wrap items-center gap-4">
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
                            <div>
                                <DatePicker onDateChange={handleDateChange} />
                            </div>
                            <div className="ml-auto">
                                <div className="flex items-center space-x-2">
                                    <Search onChange={onSearch} />
                                    <Button>搜索</Button>
                                </div>
                            </div>

                        </div>
                    </div>
                    {/* <Separator className="my-4" /> */}

                    <div className="grid h-full items-stretch gap-6 md:grid-cols-[1fr_250px]">
                        <div className="relative  w-full pb-[60%]">
                            <Card className="absolute inset-0 overflow-visible">
                                {/* {
                                (data && data.length > 0) ? ( */}
                                <Chart
                                    date={marketDate}
                                    data={data ? data : []}
                                    schemaData={schemaData}
                                    // searchValue={searchValue}
                                    symbol={symbol}
                                    logAxis={logAxis}
                                    hl_newStock_data={hl_newStock_data}
                                    hl_up_data={hl_up_data}
                                    hl_low_data={hl_low_data}
                                    hl_newHigh30_data={hl_newHigh30_data}
                                    hl_newLow30_data={hl_newLow30_data}
                                    hl_newHigh60_data={hl_newHigh60_data}
                                    hl_newLow60_data={hl_newLow60_data}
                                />
                                {/* ) :
                                    (
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div className="flex flex-col items-center space-y-4">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-12 w-12 text-gray-300 animate-spin"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M10 18a8 8 0 100-16 8 8 0 000 16z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                                <p className="text-sm text-gray-500">
                                                    加载中...
                                                </p>
                                            </div>
                                        </div>


                                    )
                            } */}

                            </Card>
                        </div>
                        <div>
                            <div className="hidden flex-col space-y-4 sm:flex md:order-2">
                                <div>
                                    <DatePicker onDateChange={handleDateChange} />
                                </div>
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

                                <Tabs
                                    defaultValue="normal"
                                    className="flex-1"
                                    onValueChange={handleTabChange}
                                >
                                    <TabsList className="grid grid-cols-2">
                                        <TabsTrigger value="normal">普通坐标</TabsTrigger>
                                        <TabsTrigger value="log">对数坐标</TabsTrigger>
                                    </TabsList>
                                </Tabs>
                                <Select
                                    defaultValue="circle"
                                    onValueChange={handleSymbolChange}
                                >
                                    <SelectTrigger className=" w-[110px]">
                                        <SelectValue placeholder="Select" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="rect">星星</SelectItem>
                                        <SelectItem value="circle">圆点</SelectItem>
                                    </SelectContent>
                                </Select>

                                <div >
                                    <CheckView
                                        title="高亮显示"
                                        onSelectedChange={handleCheckChange}
                                        onClear={onClear}
                                    />
                                </div>
                                <Separator/>
                                <div>圆点面积</div>
                                <div >
                                    <Select
                                        defaultValue="f1"
                                        value={fa_x}
                                        onValueChange={handleFAChange}
                                    >
                                        <SelectTrigger className=" flex-1">
                                            <SelectValue placeholder="Select" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="f1">当日涨幅</SelectItem>
                                            <SelectItem value="fa1">未来 1 日涨幅</SelectItem>
                                            <SelectItem value="fa3">未来 3 日涨幅</SelectItem>
                                            <SelectItem value="fa5">未来 5 日涨幅</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <Separator className="my-4" /> */}

                    <div className="mt-6 space-y-1">
                        <h2 className="text-xl font-semibold tracking-tight">
                            高亮结果
                        </h2>
                        <p className="text-sm text-muted-foreground">
                            高亮显示的股票
                        </p>
                    </div>
                    <CardContent className="p-0">
                        <SearchListTable data={searchListData} />
                    </CardContent>
                </div>
            </div>
        </div>
    )
}
