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

interface marketDataProp {
    data: HeaderCardProps[],
    trans_dt: string
}

const getMarketData = async (date: string | null) => {
    let url = `http://smartpayt.com/prod-api/factor/paper/market_sky`;
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

export default function MapPage() {
    const [selectedDate, setSelectedDate] = useState<string>();

    // 大盘数据
    const [marketData, setMarketData] = useState<HeaderCardProps[]>()

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



    useEffect(() => {
        // 请求大盘数据
        const fetchMarketData = async () => {
            const data = await getMarketData(selectedDate ? selectedDate : null);
            if (data) {
                setMarketData(data.data);
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
                                    data={data ? data : []}
                                    schemaData={schemaData}
                                    searchValue={searchValue}
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
                                    />
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