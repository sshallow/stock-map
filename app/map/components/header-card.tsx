import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

/**
 *  [
      {
        "title": "涨跌分布",
        "description": "涨跌家数分布",
        "content": ["1573","34","3490"],
 "prefix" = "";
 "suffix" = "";
        "sub_content": ["5300"],
 "sub_prefix" = "沪深京";
 "sub_suffix" = "只股票";
      },
      {
        "title": "成交额",
        "description": "全市场成交金额",
        "content": ["9830"],
 "prefix" = "";
 "suffix" = "亿";
        "sub_content": ["+19.1%"],
 "sub_prefix" = "";
 "sub_suffix" = "比昨日";
      },
  ],
    */

export interface HeaderCardProps {
    title: string;
    description: string;
    content: string[];
    prefix?: string;
    suffix?: string;
    sub_content?: string[];
    sub_prefix?: string;
    sub_suffix?: string;
}

// export function HeaderCard(marketData: HeaderCardProps[]) {
export function HeaderCard({ marketData }: { marketData: HeaderCardProps[] }) {
    return (
        <div className="grid gap-4  md:grid-cols-2 lg:grid-cols-4">
            <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                        {marketData[0].title}
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
                            {marketData[0].content[0]}
                            {/* <ArrowTopRightIcon className="h-4 w-4 text-secondary-foreground" /> */}
                        </div>
                        <div>:</div>
                        <div className=" text-gray-500">
                            {marketData[0].content[1]}
                            {/* <ArrowBottomRightIcon className="h-4 w-4 text-secondary-foreground" /> */}
                        </div>
                        <div>:</div>
                        <div className=" text-green-500">
                            {marketData[0].content[2]}
                            {/* <ArrowBottomRightIcon className="h-4 w-4 text-secondary-foreground" /> */}
                        </div>
                    </div>
                    <p className="pt-0.5 text-xs text-muted-foreground"> {marketData[0].sub_prefix} {marketData[0].sub_content}{marketData[0].sub_suffix} </p>
                </CardContent>
            </Card>
            <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">{marketData[1].title}</CardTitle>
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
                    <div className="text-2xl font-bold">{marketData[1].content}{marketData[1].suffix}</div>
                    <p className="text-xs text-muted-foreground">{marketData[1].sub_content}{marketData[1].sub_suffix}</p>
                </CardContent>
            </Card>
            {/* <Card>
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
            </Card> */}

        </div>

    )
}