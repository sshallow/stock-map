"use client"

import { Search } from "@/components/custom-ui/search";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";




export default function MapPage() {

    const onSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event.target.value)
    }

    return (
        <div className="container relative">
            <div className="flex flex-col items-center">
                <div className="flex-1 space-y-4 pt-12">
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
                        <div className="grid gap-4  md:grid-cols-2 lg:grid-cols-4">
                            <Card>
                                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                    <CardTitle className="text-sm font-medium">
                                        涨跌分布
                                    </CardTitle>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        className="h-4 w-4 text-muted-foreground"
                                    >
                                        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                                    </svg>
                                </CardHeader>
                                <CardContent>
                                    <div className="flex items-center space-x-0.5 text-2xl font-bold ">
                                        <div className=" text-red-500">
                                            1573
                                            {/* <ArrowTopRightIcon className="h-4 w-4 text-secondary-foreground" /> */}
                                        </div>
                                        <div>:</div>
                                        <div className=" text-gray-500">
                                            34
                                            {/* <ArrowBottomRightIcon className="h-4 w-4 text-secondary-foreground" /> */}
                                        </div>
                                        <div>:</div>
                                        <div className=" text-green-500">
                                            3490
                                            {/* <ArrowBottomRightIcon className="h-4 w-4 text-secondary-foreground" /> */}
                                        </div>
                                    </div>
                                    <p className="pt-0.5 text-xs text-muted-foreground">沪深京 5300 只股票</p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                    <CardTitle className="text-sm font-medium">
                                        沪深 300
                                    </CardTitle>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        className="h-4 w-4 text-muted-foreground"
                                    >
                                        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                                    </svg>
                                </CardHeader>
                                <CardContent className="">
                                    <div className="text-2xl font-bold">3020</div>
                                    <p className="text-xs text-muted-foreground">+20 +0.24%</p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                    <CardTitle className="text-sm font-medium">成交额</CardTitle>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        className="h-4 w-4 text-muted-foreground"
                                    >
                                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                                        <circle cx="9" cy="7" r="4" />
                                        <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                                    </svg>
                                </CardHeader>
                                <CardContent>
                                    <div className="text-2xl font-bold">8350亿</div>
                                    <p className="text-xs text-muted-foreground">+18.1% 比昨日</p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                    <CardTitle className="text-sm font-medium">
                                        市场体积
                                    </CardTitle>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        className="h-4 w-4 text-muted-foreground"
                                    >
                                        <rect width="20" height="14" x="2" y="5" rx="2" />
                                        <path d="M2 10h20" />
                                    </svg>
                                </CardHeader>
                                <CardContent>
                                    <div className="text-2xl font-bold">+1,234亿</div>
                                    <p className="text-xs text-muted-foreground">+19% 比昨日</p>
                                </CardContent>
                            </Card>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}