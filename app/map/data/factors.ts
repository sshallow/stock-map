// factorId: 50001001,
// factorName: "A股价总市值因子",
// parentId: 50001,
// parentName: "估值指标",
// factorSymbol: "TMV",
// children: [],
export interface Factor {
  factorId: number
  factorName: string
  parentId: number
  parentName: string
  factorSymbol: string
  children: Factor[]
}

// 用作默认值的 Factor 对象
export const defaultX: Factor = {
  factorId: 50001002,
  factorName: "A股流通市值",
  parentId: 50001,
  parentName: "估值指标",
  factorSymbol: "CMV",
  children: [],
}

export const defaultY: Factor = {
  factorId: 60001009,
  factorName: "本征换手率",
  parentId: 60001,
  parentName: "量价指标",
  factorSymbol: "real_turnover_rate",
  children: [],
}

export const factors: Factor[] = [
  {
    "factorId": 50001,
    "factorName": "估值指标",
    "parentId": 500,
    "parentName": "估值指标",
    "factorSymbol": "",
    "children": [
      {
        "factorId": 50001001,
        "factorName": "A股价总市值因子",
        "parentId": 50001,
        "parentName": "估值指标",
        "factorSymbol": "TMV",
        "children": [

        ]
      },
      {
        "factorId": 50001002,
        "factorName": "A股流通市值",
        "parentId": 50001,
        "parentName": "估值指标",
        "factorSymbol": "CMV",
        "children": [

        ]
      },
      {
        "factorId": 50001003,
        "factorName": "本征流通市值",
        "parentId": 50001,
        "parentName": "估值指标",
        "factorSymbol": "RCMV",
        "children": [

        ]
      },
      {
        "factorId": 50001004,
        "factorName": "滚动TTM盈市率",
        "parentId": 50001,
        "parentName": "风控指标",
        "factorSymbol": "tep",
        "children": [

        ]
      },
      {
        "factorId": 50001005,
        "factorName": "3年平均收益盈市率",
        "parentId": 50001,
        "parentName": "风控指标",
        "factorSymbol": "ape3",
        "children": [

        ]
      },
      {
        "factorId": 50001006,
        "factorName": "滚动TTM净市率",
        "parentId": 50001,
        "parentName": "风控指标",
        "factorSymbol": "bp",
        "children": [

        ]
      },
      {
        "factorId": 50001007,
        "factorName": "盈长系数",
        "parentId": 50001,
        "parentName": "风控指标",
        "factorSymbol": "gep",
        "children": [

        ]
      },
      {
        "factorId": 50001008,
        "factorName": "股息率",
        "parentId": 50001,
        "parentName": "风控指标",
        "factorSymbol": "ld",
        "children": [

        ]
      },
      {
        "factorId": 50001009,
        "factorName": "3年平均派息股息率",
        "parentId": 50001,
        "parentName": "风控指标",
        "factorSymbol": "ld3",
        "children": [

        ]
      }
    ]
  },
  {
    "factorId": 70001,
    "factorName": "单K线特征",
    "parentId": 700,
    "parentName": "形态指标",
    "factorSymbol": "",
    "children": [
      {
        "factorId": 70001001,
        "factorName": "单日上影线",
        "parentId": 70001,
        "parentName": "单K线特征",
        "factorSymbol": "HGY",
        "children": [

        ]
      },
      {
        "factorId": 70001002,
        "factorName": "单日下影线",
        "parentId": 70001,
        "parentName": "单K线特征",
        "factorSymbol": "LY",
        "children": [

        ]
      },
      {
        "factorId": 70001003,
        "factorName": "单日实体长度",
        "parentId": 70001,
        "parentName": "单K线特征",
        "factorSymbol": "BR",
        "children": [

        ]
      },
      {
        "factorId": 70001004,
        "factorName": "单日内振幅",
        "parentId": 70001,
        "parentName": "单K线特征",
        "factorSymbol": "PHL",
        "children": [

        ]
      },
      {
        "factorId": 70001005,
        "factorName": "单日实体占比",
        "parentId": 70001,
        "parentName": "单K线特征",
        "factorSymbol": "BRP",
        "children": [

        ]
      }
    ]
  },
  {
    "factorId": 70002,
    "factorName": "2日复合K线",
    "parentId": 700,
    "parentName": "形态指标",
    "factorSymbol": "",
    "children": [
      {
        "factorId": 70002001,
        "factorName": "2日开盘价",
        "parentId": 70002,
        "parentName": "2日复合K线",
        "factorSymbol": "po2",
        "children": [

        ]
      },
      {
        "factorId": 70002002,
        "factorName": "2日最高价",
        "parentId": 70002,
        "parentName": "2日复合K线",
        "factorSymbol": "ph2",
        "children": [

        ]
      },
      {
        "factorId": 70002003,
        "factorName": "2日最低价",
        "parentId": 70002,
        "parentName": "2日复合K线",
        "factorSymbol": "pl2",
        "children": [

        ]
      },
      {
        "factorId": 70002004,
        "factorName": "2日收盘价",
        "parentId": 70002,
        "parentName": "2日复合K线",
        "factorSymbol": "pc2",
        "children": [

        ]
      },
      {
        "factorId": 70002005,
        "factorName": "2日上影线",
        "parentId": 70002,
        "parentName": "2日复合K线",
        "factorSymbol": "hgy2",
        "children": [

        ]
      },
      {
        "factorId": 70002006,
        "factorName": "2日下影线",
        "parentId": 70002,
        "parentName": "2日复合K线",
        "factorSymbol": "ly2",
        "children": [

        ]
      },
      {
        "factorId": 70002007,
        "factorName": "2日实体长度",
        "parentId": 70002,
        "parentName": "2日复合K线",
        "factorSymbol": "br2",
        "children": [

        ]
      },
      {
        "factorId": 70002008,
        "factorName": "2日内振幅",
        "parentId": 70002,
        "parentName": "2日复合K线",
        "factorSymbol": "phl2",
        "children": [

        ]
      },
      {
        "factorId": 70002009,
        "factorName": "2日实体占比",
        "parentId": 70002,
        "parentName": "2日复合K线",
        "factorSymbol": "brp2",
        "children": [

        ]
      }
    ]
  },
  {
    "factorId": 70003,
    "factorName": "3日复合K线",
    "parentId": 700,
    "parentName": "形态指标",
    "factorSymbol": "",
    "children": [
      {
        "factorId": 70003001,
        "factorName": "3日开盘价",
        "parentId": 70003,
        "parentName": "3日复合K线",
        "factorSymbol": "po3",
        "children": [

        ]
      },
      {
        "factorId": 70003002,
        "factorName": "3日最高价",
        "parentId": 70003,
        "parentName": "3日复合K线",
        "factorSymbol": "ph3",
        "children": [

        ]
      },
      {
        "factorId": 70003003,
        "factorName": "3日最低价",
        "parentId": 70003,
        "parentName": "3日复合K线",
        "factorSymbol": "pl3",
        "children": [

        ]
      },
      {
        "factorId": 70003004,
        "factorName": "3日收盘价",
        "parentId": 70003,
        "parentName": "3日复合K线",
        "factorSymbol": "pc3",
        "children": [

        ]
      },
      {
        "factorId": 70003005,
        "factorName": "3日上影线",
        "parentId": 70003,
        "parentName": "3日复合K线",
        "factorSymbol": "hgy3",
        "children": [

        ]
      },
      {
        "factorId": 70003006,
        "factorName": "3日下影线",
        "parentId": 70003,
        "parentName": "3日复合K线",
        "factorSymbol": "ly3",
        "children": [

        ]
      },
      {
        "factorId": 70003007,
        "factorName": "3日实体长度",
        "parentId": 70003,
        "parentName": "3日复合K线",
        "factorSymbol": "br3",
        "children": [

        ]
      },
      {
        "factorId": 70003008,
        "factorName": "3日内振幅",
        "parentId": 70003,
        "parentName": "3日复合K线",
        "factorSymbol": "phl3",
        "children": [

        ]
      },
      {
        "factorId": 70003009,
        "factorName": "3日实体占比",
        "parentId": 70003,
        "parentName": "3日复合K线",
        "factorSymbol": "brp3",
        "children": [

        ]
      }
    ]
  },
  {
    "factorId": 70004,
    "factorName": "均线隙宽",
    "parentId": 700,
    "parentName": "形态指标",
    "factorSymbol": "",
    "children": [
      {
        "factorId": 60002022,
        "factorName": "5-10弱权隙比",
        "parentId": 70004,
        "parentName": "均线系统",
        "factorSymbol": "G5PWS10",
        "children": [

        ]
      },
      {
        "factorId": 60002023,
        "factorName": "10-20弱权隙比",
        "parentId": 70004,
        "parentName": "均线系统",
        "factorSymbol": "G10PWS20",
        "children": [

        ]
      },
      {
        "factorId": 60002024,
        "factorName": "20-30弱权隙比",
        "parentId": 70004,
        "parentName": "均线系统",
        "factorSymbol": "G20PWS30",
        "children": [

        ]
      },
      {
        "factorId": 60002025,
        "factorName": "5-10强权隙比",
        "parentId": 70004,
        "parentName": "均线系统",
        "factorSymbol": "G5PWH10",
        "children": [

        ]
      },
      {
        "factorId": 60002026,
        "factorName": "10-20强权隙比",
        "parentId": 70004,
        "parentName": "均线系统",
        "factorSymbol": "G10PWH20",
        "children": [

        ]
      },
      {
        "factorId": 60002027,
        "factorName": "20-30强权隙比",
        "parentId": 70004,
        "parentName": "均线系统",
        "factorSymbol": "G20PWH30",
        "children": [

        ]
      },
      {
        "factorId": 60003011,
        "factorName": "5-10量权隙比",
        "parentId": 70004,
        "parentName": "均线系统",
        "factorSymbol": "G5PWE10",
        "children": [

        ]
      },
      {
        "factorId": 60003012,
        "factorName": "10-20量权隙比",
        "parentId": 70004,
        "parentName": "均线系统",
        "factorSymbol": "G10PWE20",
        "children": [

        ]
      },
      {
        "factorId": 60003013,
        "factorName": "20-30量权隙比",
        "parentId": 70004,
        "parentName": "均线系统",
        "factorSymbol": "G20PWE30",
        "children": [

        ]
      },
      {
        "factorId": 70004001,
        "factorName": "5-10收价隙比",
        "parentId": 70004,
        "parentName": "均线隙宽",
        "factorSymbol": "G5P10",
        "children": [

        ]
      },
      {
        "factorId": 70004002,
        "factorName": "5-20收价隙比",
        "parentId": 70004,
        "parentName": "均线隙宽",
        "factorSymbol": "G5P20",
        "children": [

        ]
      },
      {
        "factorId": 70004003,
        "factorName": "10-20收价隙比",
        "parentId": 70004,
        "parentName": "均线隙宽",
        "factorSymbol": "G10P20",
        "children": [

        ]
      },
      {
        "factorId": 70004004,
        "factorName": "5-10均价隙比",
        "parentId": 70004,
        "parentName": "均线隙宽",
        "factorSymbol": "G5PA10",
        "children": [

        ]
      },
      {
        "factorId": 70004005,
        "factorName": "5-20均价隙比",
        "parentId": 70004,
        "parentName": "均线隙宽",
        "factorSymbol": "G5PA20",
        "children": [

        ]
      },
      {
        "factorId": 70004006,
        "factorName": "10-20均价隙比",
        "parentId": 70004,
        "parentName": "均线隙宽",
        "factorSymbol": "G10PA20",
        "children": [

        ]
      },
      {
        "factorId": 70004012,
        "factorName": "收盘价相对5日均线位置",
        "parentId": 70004,
        "parentName": "均线隙宽",
        "factorSymbol": "PK5",
        "children": [

        ]
      },
      {
        "factorId": 70004013,
        "factorName": "收盘价相对10日均线位置",
        "parentId": 70004,
        "parentName": "均线隙宽",
        "factorSymbol": "PK10",
        "children": [

        ]
      },
      {
        "factorId": 70004014,
        "factorName": "收盘价相对15日均线位置",
        "parentId": 70004,
        "parentName": "均线隙宽",
        "factorSymbol": "PK20",
        "children": [

        ]
      },
      {
        "factorId": 70004015,
        "factorName": "收盘价相对30日均线位置",
        "parentId": 70004,
        "parentName": "均线隙宽",
        "factorSymbol": "PK30",
        "children": [

        ]
      },
      {
        "factorId": 70004016,
        "factorName": "收盘价相对60日均线位置",
        "parentId": 70004,
        "parentName": "均线隙宽",
        "factorSymbol": "PK60",
        "children": [

        ]
      },
      {
        "factorId": 70004017,
        "factorName": "收盘价相对120日均线位置",
        "parentId": 70004,
        "parentName": "均线隙宽",
        "factorSymbol": "PK120",
        "children": [

        ]
      },
      {
        "factorId": 70004018,
        "factorName": "收盘价相对180日均线位置",
        "parentId": 70004,
        "parentName": "均线隙宽",
        "factorSymbol": "PK180",
        "children": [

        ]
      },
      {
        "factorId": 70004019,
        "factorName": "收盘价相对250日均线位置",
        "parentId": 70004,
        "parentName": "均线隙宽",
        "factorSymbol": "PK250",
        "children": [

        ]
      },
      {
        "factorId": 70004020,
        "factorName": "3-5收价隙比",
        "parentId": 70004,
        "parentName": "均线隙宽",
        "factorSymbol": "G3P5",
        "children": [

        ]
      },
      {
        "factorId": 70004021,
        "factorName": "20-30收价隙比",
        "parentId": 70004,
        "parentName": "均线隙宽",
        "factorSymbol": "G20P30",
        "children": [

        ]
      },
      {
        "factorId": 70004022,
        "factorName": "30-60收价隙比",
        "parentId": 70004,
        "parentName": "均线隙宽",
        "factorSymbol": "G30P60",
        "children": [

        ]
      },
      {
        "factorId": 70004023,
        "factorName": "60-90收价隙比",
        "parentId": 70004,
        "parentName": "均线隙宽",
        "factorSymbol": "G60P90",
        "children": [

        ]
      },
      {
        "factorId": 70004024,
        "factorName": "90-120收价隙比",
        "parentId": 70004,
        "parentName": "均线隙宽",
        "factorSymbol": "G90P120",
        "children": [

        ]
      },
      {
        "factorId": 70004025,
        "factorName": "120-180收价隙比",
        "parentId": 70004,
        "parentName": "均线隙宽",
        "factorSymbol": "G120P180",
        "children": [

        ]
      },
      {
        "factorId": 70004026,
        "factorName": "180-250收价隙比",
        "parentId": 70004,
        "parentName": "均线隙宽",
        "factorSymbol": "G180P250",
        "children": [

        ]
      },
      {
        "factorId": 70004027,
        "factorName": "收盘价相对15日均线位置",
        "parentId": 70004,
        "parentName": "均线隙宽",
        "factorSymbol": "PK15",
        "children": [

        ]
      },
      {
        "factorId": 70004028,
        "factorName": "收盘价相对90日均线位置",
        "parentId": 70004,
        "parentName": "均线隙宽",
        "factorSymbol": "PK90",
        "children": [

        ]
      },
      {
        "factorId": 70004029,
        "factorName": "3-5均价隙比",
        "parentId": 70004,
        "parentName": "均线隙宽",
        "factorSymbol": "G3PA5",
        "children": [

        ]
      },
      {
        "factorId": 70004030,
        "factorName": "20-30均价隙比",
        "parentId": 70004,
        "parentName": "均线隙宽",
        "factorSymbol": "G20PA30",
        "children": [

        ]
      },
      {
        "factorId": 70004031,
        "factorName": "30-60均价隙比",
        "parentId": 70004,
        "parentName": "均线隙宽",
        "factorSymbol": "G30PA60",
        "children": [

        ]
      },
      {
        "factorId": 70004032,
        "factorName": "60-90均价隙比",
        "parentId": 70004,
        "parentName": "均线隙宽",
        "factorSymbol": "G60PA90",
        "children": [

        ]
      },
      {
        "factorId": 70004033,
        "factorName": "90-120均价隙比",
        "parentId": 70004,
        "parentName": "均线隙宽",
        "factorSymbol": "G90PA120",
        "children": [

        ]
      },
      {
        "factorId": 70004034,
        "factorName": "120-180均价隙比",
        "parentId": 70004,
        "parentName": "均线隙宽",
        "factorSymbol": "G120PA180",
        "children": [

        ]
      },
      {
        "factorId": 70004035,
        "factorName": "180-250均价隙比",
        "parentId": 70004,
        "parentName": "均线隙宽",
        "factorSymbol": "G180PA250",
        "children": [

        ]
      },
      {
        "factorId": 70004036,
        "factorName": "日内均价相对5日均线位置",
        "parentId": 70004,
        "parentName": "均线隙宽",
        "factorSymbol": "PAK5",
        "children": [

        ]
      },
      {
        "factorId": 70004037,
        "factorName": "日内均价相对10日均线位置",
        "parentId": 70004,
        "parentName": "均线隙宽",
        "factorSymbol": "PAK10",
        "children": [

        ]
      },
      {
        "factorId": 70004038,
        "factorName": "日内均价相对15日均线位置",
        "parentId": 70004,
        "parentName": "均线隙宽",
        "factorSymbol": "PAK15",
        "children": [

        ]
      },
      {
        "factorId": 70004039,
        "factorName": "日内均价相对20日均线位置",
        "parentId": 70004,
        "parentName": "均线隙宽",
        "factorSymbol": "PAK20",
        "children": [

        ]
      },
      {
        "factorId": 70004040,
        "factorName": "日内均价相对30日均线位置",
        "parentId": 70004,
        "parentName": "均线隙宽",
        "factorSymbol": "PAK30",
        "children": [

        ]
      },
      {
        "factorId": 70004041,
        "factorName": "日内均价相对60日均线位置",
        "parentId": 70004,
        "parentName": "均线隙宽",
        "factorSymbol": "PAK60",
        "children": [

        ]
      },
      {
        "factorId": 70004042,
        "factorName": "日内均价相对90日均线位置",
        "parentId": 70004,
        "parentName": "均线隙宽",
        "factorSymbol": "PAK90",
        "children": [

        ]
      },
      {
        "factorId": 70004043,
        "factorName": "日内均价相对120日均线位置",
        "parentId": 70004,
        "parentName": "均线隙宽",
        "factorSymbol": "PAK120",
        "children": [

        ]
      },
      {
        "factorId": 70004044,
        "factorName": "日内均价相对180日均线位置",
        "parentId": 70004,
        "parentName": "均线隙宽",
        "factorSymbol": "PAK180",
        "children": [

        ]
      },
      {
        "factorId": 70004045,
        "factorName": "日内均价相对250日均均线位置",
        "parentId": 70004,
        "parentName": "均线隙宽",
        "factorSymbol": "PAK250",
        "children": [

        ]
      }
    ]
  },
  {
    "factorId": 70005,
    "factorName": "区间统计指标",
    "parentId": 700,
    "parentName": "形态指标",
    "factorSymbol": "",
    "children": [
      {
        "factorId": 70005001,
        "factorName": "日内净买入换手率",
        "parentId": 70005,
        "parentName": "区间统计指标",
        "factorSymbol": "WAD",
        "children": [

        ]
      },
      {
        "factorId": 70005002,
        "factorName": "2日净买入换手率累积",
        "parentId": 70005,
        "parentName": "区间统计指标",
        "factorSymbol": "WAD2",
        "children": [

        ]
      },
      {
        "factorId": 70005003,
        "factorName": "3日净买入换手率累积",
        "parentId": 70005,
        "parentName": "区间统计指标",
        "factorSymbol": "WAD3",
        "children": [

        ]
      },
      {
        "factorId": 70005004,
        "factorName": "5日净买入换手率累积",
        "parentId": 70005,
        "parentName": "区间统计指标",
        "factorSymbol": "WAD5",
        "children": [

        ]
      },
      {
        "factorId": 70005005,
        "factorName": "10日净买入换手率累积",
        "parentId": 70005,
        "parentName": "区间统计指标",
        "factorSymbol": "WAD10",
        "children": [

        ]
      },
      {
        "factorId": 70005006,
        "factorName": "15日净买入换手率累积",
        "parentId": 70005,
        "parentName": "区间统计指标",
        "factorSymbol": "WAD15",
        "children": [

        ]
      },
      {
        "factorId": 70005007,
        "factorName": "20日净买入换手率累积",
        "parentId": 70005,
        "parentName": "区间统计指标",
        "factorSymbol": "WAD20",
        "children": [

        ]
      },
      {
        "factorId": 70005008,
        "factorName": "30日净买入换手率累积",
        "parentId": 70005,
        "parentName": "区间统计指标",
        "factorSymbol": "WAD30",
        "children": [

        ]
      },
      {
        "factorId": 70006001,
        "factorName": "单日区间强势系数",
        "parentId": 70005,
        "parentName": "区间统计指标",
        "factorSymbol": "KS",
        "children": [

        ]
      },
      {
        "factorId": 70006002,
        "factorName": "2日强势系数",
        "parentId": 70005,
        "parentName": "区间统计指标",
        "factorSymbol": "KS2",
        "children": [

        ]
      },
      {
        "factorId": 70006003,
        "factorName": "3日强势系数",
        "parentId": 70005,
        "parentName": "区间统计指标",
        "factorSymbol": "KS3",
        "children": [

        ]
      },
      {
        "factorId": 70006004,
        "factorName": "5日强势系数",
        "parentId": 70005,
        "parentName": "区间统计指标",
        "factorSymbol": "KS5",
        "children": [

        ]
      },
      {
        "factorId": 70006005,
        "factorName": "10日强势系数",
        "parentId": 70005,
        "parentName": "区间统计指标",
        "factorSymbol": "KS10",
        "children": [

        ]
      },
      {
        "factorId": 70006006,
        "factorName": "15日强势系数",
        "parentId": 70005,
        "parentName": "区间统计指标",
        "factorSymbol": "KS15",
        "children": [

        ]
      },
      {
        "factorId": 70006007,
        "factorName": "20日强势系数",
        "parentId": 70005,
        "parentName": "区间统计指标",
        "factorSymbol": "KS20",
        "children": [

        ]
      },
      {
        "factorId": 70006008,
        "factorName": "30日强势系数",
        "parentId": 70005,
        "parentName": "区间统计指标",
        "factorSymbol": "KS30",
        "children": [

        ]
      },
      {
        "factorId": 70007001,
        "factorName": "5日日内上涨天数占比",
        "parentId": 70005,
        "parentName": "区间统计指标",
        "factorSymbol": "PSX5",
        "children": [

        ]
      },
      {
        "factorId": 70007002,
        "factorName": "7日日内上涨天数占比",
        "parentId": 70005,
        "parentName": "区间统计指标",
        "factorSymbol": "PSX7",
        "children": [

        ]
      },
      {
        "factorId": 70007003,
        "factorName": "10日日内上涨天数占比",
        "parentId": 70005,
        "parentName": "区间统计指标",
        "factorSymbol": "PSX10",
        "children": [

        ]
      },
      {
        "factorId": 70007004,
        "factorName": "15日日内上涨天数占比",
        "parentId": 70005,
        "parentName": "区间统计指标",
        "factorSymbol": "PSX15",
        "children": [

        ]
      },
      {
        "factorId": 70007005,
        "factorName": "20日日内上涨天数占比",
        "parentId": 70005,
        "parentName": "区间统计指标",
        "factorSymbol": "PSX20",
        "children": [

        ]
      },
      {
        "factorId": 70007006,
        "factorName": "5日上涨天数占比",
        "parentId": 70005,
        "parentName": "区间统计指标",
        "factorSymbol": "PSY5",
        "children": [

        ]
      },
      {
        "factorId": 70007007,
        "factorName": "7日上涨天数占比",
        "parentId": 70005,
        "parentName": "区间统计指标",
        "factorSymbol": "PSY7",
        "children": [

        ]
      },
      {
        "factorId": 70007008,
        "factorName": "10日上涨天数占比",
        "parentId": 70005,
        "parentName": "区间统计指标",
        "factorSymbol": "PSY10",
        "children": [

        ]
      },
      {
        "factorId": 70007009,
        "factorName": "15日上涨天数占比",
        "parentId": 70005,
        "parentName": "区间统计指标",
        "factorSymbol": "PSY15",
        "children": [

        ]
      },
      {
        "factorId": 70007010,
        "factorName": "20日上涨天数占比",
        "parentId": 70005,
        "parentName": "区间统计指标",
        "factorSymbol": "PSY20",
        "children": [

        ]
      },
      {
        "factorId": 70007011,
        "factorName": "5日同环上涨天数占比",
        "parentId": 70005,
        "parentName": "区间统计指标",
        "factorSymbol": "PSZ5",
        "children": [

        ]
      },
      {
        "factorId": 70007012,
        "factorName": "7日同环上涨天数占比",
        "parentId": 70005,
        "parentName": "区间统计指标",
        "factorSymbol": "PSZ7",
        "children": [

        ]
      },
      {
        "factorId": 70007013,
        "factorName": "10日同环上涨天数占比",
        "parentId": 70005,
        "parentName": "区间统计指标",
        "factorSymbol": "PSZ10",
        "children": [

        ]
      },
      {
        "factorId": 70007014,
        "factorName": "15日同环上涨天数占比",
        "parentId": 70005,
        "parentName": "区间统计指标",
        "factorSymbol": "PSZ15",
        "children": [

        ]
      },
      {
        "factorId": 70007015,
        "factorName": "20日同环上涨天数占比",
        "parentId": 70005,
        "parentName": "区间统计指标",
        "factorSymbol": "PSZ20",
        "children": [

        ]
      }
    ]
  },
  {
    "factorId": 70006,
    "factorName": "布林线指标",
    "parentId": 700,
    "parentName": "形态指标",
    "factorSymbol": "",
    "children": [
      {
        "factorId": 70008001,
        "factorName": "BBI布林线中值",
        "parentId": 70006,
        "parentName": "布林线指标",
        "factorSymbol": "BBI",
        "children": [

        ]
      },
      {
        "factorId": 70008002,
        "factorName": "BBI标准差",
        "parentId": 70006,
        "parentName": "布林线指标",
        "factorSymbol": "bbi_stdd",
        "children": [

        ]
      },
      {
        "factorId": 70008003,
        "factorName": "收盘价布林线中值",
        "parentId": 70006,
        "parentName": "布林线指标",
        "factorSymbol": "MID",
        "children": [

        ]
      },
      {
        "factorId": 70008004,
        "factorName": "MID标准差",
        "parentId": 70006,
        "parentName": "布林线指标",
        "factorSymbol": "stdd",
        "children": [

        ]
      }
    ]
  },
  {
    "factorId": 70010,
    "factorName": "特殊价位标签",
    "parentId": 700,
    "parentName": "形态指标",
    "factorSymbol": "",
    "children": [
      {
        "factorId": 70012002,
        "factorName": "股价30日特征",
        "parentId": 70010,
        "parentName": "特殊价位标签",
        "factorSymbol": "PBR30",
        "children": [

        ]
      },
      {
        "factorId": 70012003,
        "factorName": "股价60日特征",
        "parentId": 70010,
        "parentName": "特殊价位标签",
        "factorSymbol": "PBR60",
        "children": [

        ]
      },
      {
        "factorId": 70012004,
        "factorName": "股价120日特征",
        "parentId": 70010,
        "parentName": "特殊价位标签",
        "factorSymbol": "PBR120",
        "children": [

        ]
      },
      {
        "factorId": 70012005,
        "factorName": "股价250日特征",
        "parentId": 70010,
        "parentName": "特殊价位标签",
        "factorSymbol": "PBR250",
        "children": [

        ]
      },
      {
        "factorId": 70012006,
        "factorName": "换手率30日特征",
        "parentId": 70010,
        "parentName": "特殊价位标签",
        "factorSymbol": "ETBR30",
        "children": [

        ]
      },
      {
        "factorId": 70012007,
        "factorName": "换手率60日特征",
        "parentId": 70010,
        "parentName": "特殊价位标签",
        "factorSymbol": "ETBR60",
        "children": [

        ]
      },
      {
        "factorId": 70012008,
        "factorName": "换手率120日特征",
        "parentId": 70010,
        "parentName": "特殊价位标签",
        "factorSymbol": "ETBR120",
        "children": [

        ]
      },
      {
        "factorId": 70012009,
        "factorName": "换手率250日特征",
        "parentId": 70010,
        "parentName": "特殊价位标签",
        "factorSymbol": "ETBR250",
        "children": [

        ]
      }
    ]
  },
  {
    "factorId": 60001,
    "factorName": "量价指标",
    "parentId": 600,
    "parentName": "量价指标",
    "factorSymbol": "",
    "children": [
      {
        "factorId": 60001001,
        "factorName": "开盘价",
        "parentId": 60001,
        "parentName": "量价指标",
        "factorSymbol": "today_open_price",
        "children": [

        ]
      },
      {
        "factorId": 60001002,
        "factorName": "收盘价",
        "parentId": 60001,
        "parentName": "量价指标",
        "factorSymbol": "recently_deal_price",
        "children": [

        ]
      },
      {
        "factorId": 60001003,
        "factorName": "最低价",
        "parentId": 60001,
        "parentName": "量价指标",
        "factorSymbol": "lowest_price",
        "children": [

        ]
      },
      {
        "factorId": 60001004,
        "factorName": "最高价",
        "parentId": 60001,
        "parentName": "量价指标",
        "factorSymbol": "highest_price",
        "children": [

        ]
      },
      {
        "factorId": 60001006,
        "factorName": "交易金额因子",
        "parentId": 60001,
        "parentName": "量价指标",
        "factorSymbol": "trans_amnt",
        "children": [

        ]
      },
      {
        "factorId": 60001007,
        "factorName": "成交数量",
        "parentId": 60001,
        "parentName": "量价指标",
        "factorSymbol": "trans_qt",
        "children": [

        ]
      },
      {
        "factorId": 60001008,
        "factorName": "复权日内均价",
        "parentId": 60001,
        "parentName": "量价指标",
        "factorSymbol": "average_price",
        "children": [

        ]
      },
      {
        "factorId": 60001009,
        "factorName": "本征换手率",
        "parentId": 60001,
        "parentName": "量价指标",
        "factorSymbol": "real_turnover_rate",
        "children": [

        ]
      }
    ]
  },
  {
    "factorId": 60002,
    "factorName": "均线系统",
    "parentId": 600,
    "parentName": "量价指标",
    "factorSymbol": "",
    "children": [
      {
        "factorId": 60002001,
        "factorName": "收盘价3日均价",
        "parentId": 60002,
        "parentName": "均线系统",
        "factorSymbol": "a_3_price",
        "children": [

        ]
      },
      {
        "factorId": 60002002,
        "factorName": "收盘价5日均价",
        "parentId": 60002,
        "parentName": "均线系统",
        "factorSymbol": "a_5_price",
        "children": [

        ]
      },
      {
        "factorId": 60002003,
        "factorName": "收盘价10日均价",
        "parentId": 60002,
        "parentName": "均线系统",
        "factorSymbol": "a_10_price",
        "children": [

        ]
      },
      {
        "factorId": 60002004,
        "factorName": "收盘价15日均价",
        "parentId": 60002,
        "parentName": "均线系统",
        "factorSymbol": "a_15_price",
        "children": [

        ]
      },
      {
        "factorId": 60002005,
        "factorName": "收盘价20日均价",
        "parentId": 60002,
        "parentName": "均线系统",
        "factorSymbol": "a_20_price",
        "children": [

        ]
      },
      {
        "factorId": 60002006,
        "factorName": "收盘价30日均价",
        "parentId": 60002,
        "parentName": "均线系统",
        "factorSymbol": "a_30_price",
        "children": [

        ]
      },
      {
        "factorId": 60002007,
        "factorName": "收盘价60日均价",
        "parentId": 60002,
        "parentName": "均线系统",
        "factorSymbol": "a_60_price",
        "children": [

        ]
      },
      {
        "factorId": 60002008,
        "factorName": "收盘价90日均价",
        "parentId": 60002,
        "parentName": "均线系统",
        "factorSymbol": "a_90_price",
        "children": [

        ]
      },
      {
        "factorId": 60002009,
        "factorName": "收盘价120日均价",
        "parentId": 60002,
        "parentName": "均线系统",
        "factorSymbol": "a_120_price",
        "children": [

        ]
      },
      {
        "factorId": 60002010,
        "factorName": "收盘价250日均价",
        "parentId": 60002,
        "parentName": "均线系统",
        "factorSymbol": "a_250_price",
        "children": [

        ]
      },
      {
        "factorId": 60002011,
        "factorName": "弱衰减加权5日均价",
        "parentId": 60002,
        "parentName": "均线系统",
        "factorSymbol": "PWS5",
        "children": [

        ]
      },
      {
        "factorId": 60002012,
        "factorName": "弱衰减加权10日均价",
        "parentId": 60002,
        "parentName": "均线系统",
        "factorSymbol": "PWS10",
        "children": [

        ]
      },
      {
        "factorId": 60002013,
        "factorName": "弱衰减加权20日均价",
        "parentId": 60002,
        "parentName": "均线系统",
        "factorSymbol": "PWS20",
        "children": [

        ]
      },
      {
        "factorId": 60002014,
        "factorName": "强衰减加权5日均价",
        "parentId": 60002,
        "parentName": "均线系统",
        "factorSymbol": "PWH5",
        "children": [

        ]
      },
      {
        "factorId": 60002015,
        "factorName": "强衰减加权10日均价",
        "parentId": 60002,
        "parentName": "均线系统",
        "factorSymbol": "PWH10",
        "children": [

        ]
      },
      {
        "factorId": 60002016,
        "factorName": "强衰减加权20日均价",
        "parentId": 60002,
        "parentName": "均线系统",
        "factorSymbol": "PWH20",
        "children": [

        ]
      },
      {
        "factorId": 60002017,
        "factorName": "换手率加权5日均价",
        "parentId": 60002,
        "parentName": "均线系统",
        "factorSymbol": "PWE5",
        "children": [

        ]
      },
      {
        "factorId": 60002018,
        "factorName": "换手率加权10日均价",
        "parentId": 60002,
        "parentName": "均线系统",
        "factorSymbol": "PWE10",
        "children": [

        ]
      },
      {
        "factorId": 60002019,
        "factorName": "换手率加权20日均价",
        "parentId": 60002,
        "parentName": "均线系统",
        "factorSymbol": "PWE20",
        "children": [

        ]
      },
      {
        "factorId": 60002020,
        "factorName": "弱衰减加权30日均价",
        "parentId": 60002,
        "parentName": "均线系统",
        "factorSymbol": "PWS30",
        "children": [

        ]
      },
      {
        "factorId": 60002021,
        "factorName": "强衰减加权均价30日",
        "parentId": 60002,
        "parentName": "均线系统",
        "factorSymbol": "PWH30",
        "children": [

        ]
      },
      {
        "factorId": 60002028,
        "factorName": "相对5日弱权均价位置",
        "parentId": 60002,
        "parentName": "均线系统",
        "factorSymbol": "PWSK5",
        "children": [

        ]
      },
      {
        "factorId": 60002029,
        "factorName": "相对10日弱权均价位置",
        "parentId": 60002,
        "parentName": "均线系统",
        "factorSymbol": "PWSK10",
        "children": [

        ]
      },
      {
        "factorId": 60002030,
        "factorName": "相对20日弱权均价位置",
        "parentId": 60002,
        "parentName": "均线系统",
        "factorSymbol": "PWSK20",
        "children": [

        ]
      },
      {
        "factorId": 60002031,
        "factorName": "相对30日弱权均价位置",
        "parentId": 60002,
        "parentName": "均线系统",
        "factorSymbol": "PWSK30",
        "children": [

        ]
      },
      {
        "factorId": 60002032,
        "factorName": "相对5日强权均价位置",
        "parentId": 60002,
        "parentName": "均线系统",
        "factorSymbol": "PWHK5",
        "children": [

        ]
      },
      {
        "factorId": 60002033,
        "factorName": "相对10日强权均价位置",
        "parentId": 60002,
        "parentName": "均线系统",
        "factorSymbol": "PWHK10",
        "children": [

        ]
      },
      {
        "factorId": 60002034,
        "factorName": "相对20日强权均价位置",
        "parentId": 60002,
        "parentName": "均线系统",
        "factorSymbol": "PWHK20",
        "children": [

        ]
      },
      {
        "factorId": 60002035,
        "factorName": "相对30日强权均价位置",
        "parentId": 60002,
        "parentName": "均线系统",
        "factorSymbol": "PWHK30",
        "children": [

        ]
      },
      {
        "factorId": 60003001,
        "factorName": "3日平均换手率",
        "parentId": 60002,
        "parentName": "均线系统",
        "factorSymbol": "et3",
        "children": [

        ]
      },
      {
        "factorId": 60003002,
        "factorName": "5日平均换手率",
        "parentId": 60002,
        "parentName": "均线系统",
        "factorSymbol": "et5",
        "children": [

        ]
      },
      {
        "factorId": 60003003,
        "factorName": "10日平均换手率",
        "parentId": 60002,
        "parentName": "均线系统",
        "factorSymbol": "et10",
        "children": [

        ]
      },
      {
        "factorId": 60003004,
        "factorName": "15日平均换手率",
        "parentId": 60002,
        "parentName": "均线系统",
        "factorSymbol": "et15",
        "children": [

        ]
      },
      {
        "factorId": 60003005,
        "factorName": "20日平均换手率",
        "parentId": 60002,
        "parentName": "均线系统",
        "factorSymbol": "et20",
        "children": [

        ]
      },
      {
        "factorId": 60003006,
        "factorName": "30日平均换手率",
        "parentId": 60002,
        "parentName": "均线系统",
        "factorSymbol": "et30",
        "children": [

        ]
      },
      {
        "factorId": 60003007,
        "factorName": "60日平均换手率",
        "parentId": 60002,
        "parentName": "均线系统",
        "factorSymbol": "et60",
        "children": [

        ]
      },
      {
        "factorId": 60003008,
        "factorName": "换手率加权均价10日",
        "parentId": 60002,
        "parentName": "均线系统",
        "factorSymbol": "PWE10",
        "children": [

        ]
      },
      {
        "factorId": 60003009,
        "factorName": "换手率加权均价20日",
        "parentId": 60002,
        "parentName": "均线系统",
        "factorSymbol": "PWE20",
        "children": [

        ]
      },
      {
        "factorId": 60003010,
        "factorName": "换手率加权均价30日",
        "parentId": 60002,
        "parentName": "均线系统",
        "factorSymbol": "PWE30",
        "children": [

        ]
      },
      {
        "factorId": 60003014,
        "factorName": "相对5日量权均价位置",
        "parentId": 60002,
        "parentName": "均线系统",
        "factorSymbol": "PWEK5",
        "children": [

        ]
      },
      {
        "factorId": 60003015,
        "factorName": "相对10日量权均价位置",
        "parentId": 60002,
        "parentName": "均线系统",
        "factorSymbol": "PWEK10",
        "children": [

        ]
      },
      {
        "factorId": 60003016,
        "factorName": "相对20日量权均价位置",
        "parentId": 60002,
        "parentName": "均线系统",
        "factorSymbol": "PWEK20",
        "children": [

        ]
      },
      {
        "factorId": 60003017,
        "factorName": "相对30日量权均价位置",
        "parentId": 60002,
        "parentName": "均线系统",
        "factorSymbol": "PWEK30",
        "children": [

        ]
      },
      {
        "factorId": 60003018,
        "factorName": "换手率加权均价5日",
        "parentId": 60002,
        "parentName": "均线系统",
        "factorSymbol": "PWE5",
        "children": [

        ]
      },
      {
        "factorId": 60003019,
        "factorName": "2日平均换手率",
        "parentId": 60002,
        "parentName": "均线系统",
        "factorSymbol": "et2",
        "children": [

        ]
      },
      {
        "factorId": 60004001,
        "factorName": "日内均价3日均价",
        "parentId": 60002,
        "parentName": "均线系统",
        "factorSymbol": "PA3",
        "children": [

        ]
      },
      {
        "factorId": 60004002,
        "factorName": "日内均价5日均价",
        "parentId": 60002,
        "parentName": "均线系统",
        "factorSymbol": "PA5",
        "children": [

        ]
      },
      {
        "factorId": 60004003,
        "factorName": "日内均价10日均价",
        "parentId": 60002,
        "parentName": "均线系统",
        "factorSymbol": "PA10",
        "children": [

        ]
      },
      {
        "factorId": 60004004,
        "factorName": "日内均价15日均价",
        "parentId": 60002,
        "parentName": "均线系统",
        "factorSymbol": "PA15",
        "children": [

        ]
      },
      {
        "factorId": 60004005,
        "factorName": "日内均价20日均价",
        "parentId": 60002,
        "parentName": "均线系统",
        "factorSymbol": "PA20",
        "children": [

        ]
      },
      {
        "factorId": 60004006,
        "factorName": "日内均价30日均价",
        "parentId": 60002,
        "parentName": "均线系统",
        "factorSymbol": "PA30",
        "children": [

        ]
      },
      {
        "factorId": 60004007,
        "factorName": "日内均价60日均价",
        "parentId": 60002,
        "parentName": "均线系统",
        "factorSymbol": "PA60",
        "children": [

        ]
      },
      {
        "factorId": 60004008,
        "factorName": "日内均价90日均价",
        "parentId": 60002,
        "parentName": "均线系统",
        "factorSymbol": "PA90",
        "children": [

        ]
      },
      {
        "factorId": 60004009,
        "factorName": "日内均价120日均价",
        "parentId": 60002,
        "parentName": "均线系统",
        "factorSymbol": "PA120",
        "children": [

        ]
      },
      {
        "factorId": 60004010,
        "factorName": "日内均价250日均价",
        "parentId": 60002,
        "parentName": "均线系统",
        "factorSymbol": "PA250",
        "children": [

        ]
      }
    ]
  },
  {
    "factorId": 60003,
    "factorName": "交易金额",
    "parentId": 600,
    "parentName": "量价指标",
    "factorSymbol": "",
    "children": [
      {
        "factorId": 60006001,
        "factorName": "日内交易金额因子",
        "parentId": 60003,
        "parentName": "交易金额",
        "factorSymbol": "TRA",
        "children": [

        ]
      },
      {
        "factorId": 60006002,
        "factorName": "3日平均交易金额因子",
        "parentId": 60003,
        "parentName": "交易金额",
        "factorSymbol": "TRA3",
        "children": [

        ]
      },
      {
        "factorId": 60006003,
        "factorName": "5日平均交易金额因子",
        "parentId": 60003,
        "parentName": "交易金额",
        "factorSymbol": "TRA5",
        "children": [

        ]
      },
      {
        "factorId": 60006004,
        "factorName": "10日平均交易金额因子",
        "parentId": 60003,
        "parentName": "交易金额",
        "factorSymbol": "TRA10",
        "children": [

        ]
      },
      {
        "factorId": 60006005,
        "factorName": "20日平均交易金额因子",
        "parentId": 60003,
        "parentName": "交易金额",
        "factorSymbol": "TRA20",
        "children": [

        ]
      },
      {
        "factorId": 60006006,
        "factorName": "30日平均交易金额因子",
        "parentId": 60003,
        "parentName": "交易金额",
        "factorSymbol": "TRA30",
        "children": [

        ]
      },
      {
        "factorId": 60006007,
        "factorName": "60日平均交易金额因子",
        "parentId": 60003,
        "parentName": "交易金额",
        "factorSymbol": "TRA60",
        "children": [

        ]
      }
    ]
  },
  {
    "factorId": 60004,
    "factorName": "涨幅指标",
    "parentId": 600,
    "parentName": "量价指标",
    "factorSymbol": "",
    "children": [
      {
        "factorId": 60007001,
        "factorName": "收盘价涨幅",
        "parentId": 60004,
        "parentName": "涨幅指标",
        "factorSymbol": "f1",
        "children": [

        ]
      },
      {
        "factorId": 60007002,
        "factorName": "收盘价2日涨幅",
        "parentId": 60004,
        "parentName": "涨幅指标",
        "factorSymbol": "f2",
        "children": [

        ]
      },
      {
        "factorId": 60007003,
        "factorName": "收盘价3日涨幅",
        "parentId": 60004,
        "parentName": "涨幅指标",
        "factorSymbol": "f3",
        "children": [

        ]
      },
      {
        "factorId": 60007004,
        "factorName": "收盘价5日涨幅",
        "parentId": 60004,
        "parentName": "涨幅指标",
        "factorSymbol": "f5",
        "children": [

        ]
      },
      {
        "factorId": 60007005,
        "factorName": "收盘价10日涨幅",
        "parentId": 60004,
        "parentName": "涨幅指标",
        "factorSymbol": "f10",
        "children": [

        ]
      },
      {
        "factorId": 60007006,
        "factorName": "收盘价20日涨幅",
        "parentId": 60004,
        "parentName": "涨幅指标",
        "factorSymbol": "f20",
        "children": [

        ]
      },
      {
        "factorId": 60007007,
        "factorName": "收盘价30日涨幅",
        "parentId": 60004,
        "parentName": "涨幅指标",
        "factorSymbol": "f30",
        "children": [

        ]
      },
      {
        "factorId": 60007008,
        "factorName": "收盘价60日涨幅",
        "parentId": 60004,
        "parentName": "涨幅指标",
        "factorSymbol": "f60",
        "children": [

        ]
      },
      {
        "factorId": 60007009,
        "factorName": "收盘价90日涨幅",
        "parentId": 60004,
        "parentName": "涨幅指标",
        "factorSymbol": "f90",
        "children": [

        ]
      },
      {
        "factorId": 60007010,
        "factorName": "收盘价120日涨幅",
        "parentId": 60004,
        "parentName": "涨幅指标",
        "factorSymbol": "f120",
        "children": [

        ]
      },
      {
        "factorId": 60007012,
        "factorName": "收盘价10日涨幅",
        "parentId": 60004,
        "parentName": "涨幅指标",
        "factorSymbol": "f15",
        "children": [

        ]
      },
      {
        "factorId": 60007013,
        "factorName": "开盘涨幅",
        "parentId": 60004,
        "parentName": "涨幅指标",
        "factorSymbol": "FO",
        "children": [

        ]
      },
      {
        "factorId": 60007014,
        "factorName": "最高涨幅",
        "parentId": 60004,
        "parentName": "涨幅指标",
        "factorSymbol": "FH",
        "children": [

        ]
      },
      {
        "factorId": 60007015,
        "factorName": "最低涨幅",
        "parentId": 60004,
        "parentName": "涨幅指标",
        "factorSymbol": "FL",
        "children": [

        ]
      },
      {
        "factorId": 60007016,
        "factorName": "跳空高开盘幅度",
        "parentId": 60004,
        "parentName": "涨幅指标",
        "factorSymbol": "FOU",
        "children": [

        ]
      },
      {
        "factorId": 60007017,
        "factorName": "跳空低开盘幅度",
        "parentId": 60004,
        "parentName": "涨幅指标",
        "factorSymbol": "FOD",
        "children": [

        ]
      },
      {
        "factorId": 60007018,
        "factorName": "收均偏差率",
        "parentId": 60004,
        "parentName": "涨幅指标",
        "factorSymbol": "CAB",
        "children": [

        ]
      },
      {
        "factorId": 60007019,
        "factorName": "开盘5分钟涨幅",
        "parentId": 60004,
        "parentName": "涨幅指标",
        "factorSymbol": "FO5M",
        "children": [

        ]
      },
      {
        "factorId": 60008001,
        "factorName": "日内均价涨幅",
        "parentId": 60004,
        "parentName": "涨幅指标",
        "factorSymbol": "fa1",
        "children": [

        ]
      },
      {
        "factorId": 60008002,
        "factorName": "日内均价3日涨幅",
        "parentId": 60004,
        "parentName": "涨幅指标",
        "factorSymbol": "fa3",
        "children": [

        ]
      },
      {
        "factorId": 60008003,
        "factorName": "日内均价5日涨幅",
        "parentId": 60004,
        "parentName": "涨幅指标",
        "factorSymbol": "fa5",
        "children": [

        ]
      },
      {
        "factorId": 60008004,
        "factorName": "日内均价10日涨幅",
        "parentId": 60004,
        "parentName": "涨幅指标",
        "factorSymbol": "fa10",
        "children": [

        ]
      },
      {
        "factorId": 60008005,
        "factorName": "日内均价20日涨幅",
        "parentId": 60004,
        "parentName": "涨幅指标",
        "factorSymbol": "fa20",
        "children": [

        ]
      },
      {
        "factorId": 60008006,
        "factorName": "日内均价30日涨幅",
        "parentId": 60004,
        "parentName": "涨幅指标",
        "factorSymbol": "fa30",
        "children": [

        ]
      },
      {
        "factorId": 60008007,
        "factorName": "日内均价60日涨幅",
        "parentId": 60004,
        "parentName": "涨幅指标",
        "factorSymbol": "fa60",
        "children": [

        ]
      },
      {
        "factorId": 60008008,
        "factorName": "日内均价90日涨幅",
        "parentId": 60004,
        "parentName": "涨幅指标",
        "factorSymbol": "fa90",
        "children": [

        ]
      },
      {
        "factorId": 60008009,
        "factorName": "日内均价120日涨幅",
        "parentId": 60004,
        "parentName": "涨幅指标",
        "factorSymbol": "fa120",
        "children": [

        ]
      },
      {
        "factorId": 60008011,
        "factorName": "日内均价10日涨幅",
        "parentId": 60004,
        "parentName": "涨幅指标",
        "factorSymbol": "fa15",
        "children": [

        ]
      }
    ]
  },
  {
    "factorId": 60006,
    "factorName": "交易分解指标",
    "parentId": 600,
    "parentName": "量价指标",
    "factorSymbol": "",
    "children": [
      {
        "factorId": 60011001,
        "factorName": "单日交易笔数",
        "parentId": 60006,
        "parentName": "交易分解指标",
        "factorSymbol": "TN1",
        "children": [

        ]
      },
      {
        "factorId": 60011002,
        "factorName": "3日平均交易笔数",
        "parentId": 60006,
        "parentName": "交易分解指标",
        "factorSymbol": "TN3",
        "children": [

        ]
      },
      {
        "factorId": 60011003,
        "factorName": "5日平均交易笔数",
        "parentId": 60006,
        "parentName": "交易分解指标",
        "factorSymbol": "TN5",
        "children": [

        ]
      },
      {
        "factorId": 60011004,
        "factorName": "10日平均交易笔数",
        "parentId": 60006,
        "parentName": "交易分解指标",
        "factorSymbol": "TN10",
        "children": [

        ]
      },
      {
        "factorId": 60011005,
        "factorName": "15日平均交易笔数",
        "parentId": 60006,
        "parentName": "交易分解指标",
        "factorSymbol": "TN15",
        "children": [

        ]
      },
      {
        "factorId": 60011006,
        "factorName": "20日平均交易笔数",
        "parentId": 60006,
        "parentName": "交易分解指标",
        "factorSymbol": "TN20",
        "children": [

        ]
      },
      {
        "factorId": 60011007,
        "factorName": "30日平均交易笔数",
        "parentId": 60006,
        "parentName": "交易分解指标",
        "factorSymbol": "TN30",
        "children": [

        ]
      },
      {
        "factorId": 60012001,
        "factorName": "平均每单交易量",
        "parentId": 60006,
        "parentName": "交易分解指标",
        "factorSymbol": "QT1",
        "children": [

        ]
      },
      {
        "factorId": 60012002,
        "factorName": "3日平均每单交易量",
        "parentId": 60006,
        "parentName": "交易分解指标",
        "factorSymbol": "QT3",
        "children": [

        ]
      },
      {
        "factorId": 60012003,
        "factorName": "5日平均每单交易量",
        "parentId": 60006,
        "parentName": "交易分解指标",
        "factorSymbol": "QT5",
        "children": [

        ]
      },
      {
        "factorId": 60012004,
        "factorName": "10日平均每单交易量",
        "parentId": 60006,
        "parentName": "交易分解指标",
        "factorSymbol": "QT10",
        "children": [

        ]
      },
      {
        "factorId": 60012005,
        "factorName": "15日平均每单交易量",
        "parentId": 60006,
        "parentName": "交易分解指标",
        "factorSymbol": "QT15",
        "children": [

        ]
      },
      {
        "factorId": 60012006,
        "factorName": "20日平均每单交易量",
        "parentId": 60006,
        "parentName": "交易分解指标",
        "factorSymbol": "QT20",
        "children": [

        ]
      },
      {
        "factorId": 60012007,
        "factorName": "30日平均每单交易量",
        "parentId": 60006,
        "parentName": "交易分解指标",
        "factorSymbol": "QT30",
        "children": [

        ]
      }
    ]
  },
  {
    "factorId": 60007,
    "factorName": "比例指标",
    "parentId": 600,
    "parentName": "量价指标",
    "factorSymbol": "",
    "children": [
      {
        "factorId": 60013001,
        "factorName": "单日量能放大",
        "parentId": 60007,
        "parentName": "比例指标",
        "factorSymbol": "KV1",
        "children": [

        ]
      },
      {
        "factorId": 60013002,
        "factorName": "单日对3日平均放量",
        "parentId": 60007,
        "parentName": "比例指标",
        "factorSymbol": "KV3",
        "children": [

        ]
      },
      {
        "factorId": 60013003,
        "factorName": "单日对5日平均放量",
        "parentId": 60007,
        "parentName": "比例指标",
        "factorSymbol": "KV5",
        "children": [

        ]
      },
      {
        "factorId": 60013004,
        "factorName": "单日对10日平均放量",
        "parentId": 60007,
        "parentName": "比例指标",
        "factorSymbol": "KV10",
        "children": [

        ]
      },
      {
        "factorId": 60013005,
        "factorName": "单日对20日平均放量",
        "parentId": 60007,
        "parentName": "比例指标",
        "factorSymbol": "KV20",
        "children": [

        ]
      },
      {
        "factorId": 60013006,
        "factorName": "单日对30日平均放量",
        "parentId": 60007,
        "parentName": "比例指标",
        "factorSymbol": "KV30",
        "children": [

        ]
      },
      {
        "factorId": 60013007,
        "factorName": "单日对60日平均放量",
        "parentId": 60007,
        "parentName": "比例指标",
        "factorSymbol": "KV60",
        "children": [

        ]
      },
      {
        "factorId": 60013008,
        "factorName": "3日对5日平均放量",
        "parentId": 60007,
        "parentName": "比例指标",
        "factorSymbol": "K3V5",
        "children": [

        ]
      },
      {
        "factorId": 60013009,
        "factorName": "3日对10日平均放量",
        "parentId": 60007,
        "parentName": "比例指标",
        "factorSymbol": "K3V10",
        "children": [

        ]
      },
      {
        "factorId": 60013010,
        "factorName": "3日对20日平均放量",
        "parentId": 60007,
        "parentName": "比例指标",
        "factorSymbol": "K3V20",
        "children": [

        ]
      },
      {
        "factorId": 60013011,
        "factorName": "3日对30日平均放量",
        "parentId": 60007,
        "parentName": "比例指标",
        "factorSymbol": "K3V30",
        "children": [

        ]
      },
      {
        "factorId": 60013012,
        "factorName": "3日对60日平均放量",
        "parentId": 60007,
        "parentName": "比例指标",
        "factorSymbol": "K3V60",
        "children": [

        ]
      },
      {
        "factorId": 60013013,
        "factorName": "5日对5日平均放量",
        "parentId": 60007,
        "parentName": "比例指标",
        "factorSymbol": "K5V5",
        "children": [

        ]
      },
      {
        "factorId": 60013014,
        "factorName": "5日对10日平均放量",
        "parentId": 60007,
        "parentName": "比例指标",
        "factorSymbol": "K5V10",
        "children": [

        ]
      },
      {
        "factorId": 60013015,
        "factorName": "5日对20日平均放量",
        "parentId": 60007,
        "parentName": "比例指标",
        "factorSymbol": "K5V20",
        "children": [

        ]
      },
      {
        "factorId": 60013016,
        "factorName": "5日对30日平均放量",
        "parentId": 60007,
        "parentName": "比例指标",
        "factorSymbol": "K5V30",
        "children": [

        ]
      },
      {
        "factorId": 60013017,
        "factorName": "5日对60日平均放量",
        "parentId": 60007,
        "parentName": "比例指标",
        "factorSymbol": "K5V60",
        "children": [

        ]
      },
      {
        "factorId": 60014001,
        "factorName": "趋势系数",
        "parentId": 60007,
        "parentName": "比例指标",
        "factorSymbol": "pd1",
        "children": [

        ]
      },
      {
        "factorId": 60014002,
        "factorName": "3日趋势系数",
        "parentId": 60007,
        "parentName": "比例指标",
        "factorSymbol": "PD3",
        "children": [

        ]
      },
      {
        "factorId": 60014003,
        "factorName": "5日趋势系数",
        "parentId": 60007,
        "parentName": "比例指标",
        "factorSymbol": "PD5",
        "children": [

        ]
      },
      {
        "factorId": 60014004,
        "factorName": "10日趋势系数",
        "parentId": 60007,
        "parentName": "比例指标",
        "factorSymbol": "PD10",
        "children": [

        ]
      },
      {
        "factorId": 60014005,
        "factorName": "15日趋势系数",
        "parentId": 60007,
        "parentName": "比例指标",
        "factorSymbol": "PD15",
        "children": [

        ]
      },
      {
        "factorId": 60014006,
        "factorName": "20日趋势系数",
        "parentId": 60007,
        "parentName": "比例指标",
        "factorSymbol": "PD20",
        "children": [

        ]
      },
      {
        "factorId": 60014007,
        "factorName": "30日趋势系数",
        "parentId": 60007,
        "parentName": "比例指标",
        "factorSymbol": "PD30",
        "children": [

        ]
      },
      {
        "factorId": 60014009,
        "factorName": "60日趋势系数",
        "parentId": 60007,
        "parentName": "比例指标",
        "factorSymbol": "PD60",
        "children": [

        ]
      },
      {
        "factorId": 60015001,
        "factorName": "1日对10日动量比",
        "parentId": 60007,
        "parentName": "比例指标",
        "factorSymbol": "KE",
        "children": [

        ]
      },
      {
        "factorId": 60015002,
        "factorName": "2日对10日动量比",
        "parentId": 60007,
        "parentName": "比例指标",
        "factorSymbol": "KE2",
        "children": [

        ]
      },
      {
        "factorId": 60015003,
        "factorName": "3日对10日动量比",
        "parentId": 60007,
        "parentName": "比例指标",
        "factorSymbol": "KE3",
        "children": [

        ]
      },
      {
        "factorId": 60016001,
        "factorName": "1日对10日笔数量比",
        "parentId": 60007,
        "parentName": "比例指标",
        "factorSymbol": "KT",
        "children": [

        ]
      },
      {
        "factorId": 60016002,
        "factorName": "2日对10日笔数量比",
        "parentId": 60007,
        "parentName": "比例指标",
        "factorSymbol": "KT2",
        "children": [

        ]
      },
      {
        "factorId": 60016003,
        "factorName": "3日对10日笔数量比",
        "parentId": 60007,
        "parentName": "比例指标",
        "factorSymbol": "KT3",
        "children": [

        ]
      },
      {
        "factorId": 60017001,
        "factorName": "1日对10日笔均手数比",
        "parentId": 60007,
        "parentName": "比例指标",
        "factorSymbol": "KQ",
        "children": [

        ]
      },
      {
        "factorId": 60017002,
        "factorName": "2日对10日笔均手数比",
        "parentId": 60007,
        "parentName": "比例指标",
        "factorSymbol": "KQ2",
        "children": [

        ]
      },
      {
        "factorId": 60017003,
        "factorName": "3日对10日笔均手数比",
        "parentId": 60007,
        "parentName": "比例指标",
        "factorSymbol": "KQ3",
        "children": [

        ]
      }
    ]
  },
  {
    "factorId": 60008,
    "factorName": "短期结构",
    "parentId": 600,
    "parentName": "量价指标",
    "factorSymbol": "",
    "children": [
      {
        "factorId": 60018001,
        "factorName": "量价相对失衡因子",
        "parentId": 60008,
        "parentName": "短期结构",
        "factorSymbol": "fz",
        "children": [

        ]
      },
      {
        "factorId": 60018002,
        "factorName": "量价失衡因子",
        "parentId": 60008,
        "parentName": "短期结构",
        "factorSymbol": "fr_true",
        "children": [

        ]
      },
      {
        "factorId": 60018003,
        "factorName": "日内强弱势因子",
        "parentId": 60008,
        "parentName": "短期结构",
        "factorSymbol": "fad",
        "children": [

        ]
      },
      {
        "factorId": 60018004,
        "factorName": "日初抢筹因子",
        "parentId": 60008,
        "parentName": "短期结构",
        "factorSymbol": "KV945",
        "children": [

        ]
      },
      {
        "factorId": 60018005,
        "factorName": "日末抢筹因子",
        "parentId": 60008,
        "parentName": "短期结构",
        "factorSymbol": "KV1500",
        "children": [

        ]
      },
      {
        "factorId": 60018006,
        "factorName": "日初量增加权涨幅",
        "parentId": 60008,
        "parentName": "短期结构",
        "factorSymbol": "KVT935",
        "children": [

        ]
      },
      {
        "factorId": 60018007,
        "factorName": "日末量增加权涨幅",
        "parentId": 60008,
        "parentName": "短期结构",
        "factorSymbol": "KVT1500",
        "children": [

        ]
      },
      {
        "factorId": 60018008,
        "factorName": "日内5分钟价格变异系数",
        "parentId": 60008,
        "parentName": "短期结构",
        "factorSymbol": "STDT",
        "children": [

        ]
      },
      {
        "factorId": 60018009,
        "factorName": "价格高点时序位置系数",
        "parentId": 60008,
        "parentName": "短期结构",
        "factorSymbol": "PTHH",
        "children": [

        ]
      },
      {
        "factorId": 60018010,
        "factorName": "价格低点时序位置系数",
        "parentId": 60008,
        "parentName": "短期结构",
        "factorSymbol": "PTLL",
        "children": [

        ]
      },
      {
        "factorId": 60018011,
        "factorName": "扰动资金占比",
        "parentId": 60008,
        "parentName": "短期结构",
        "factorSymbol": "DKBS",
        "children": [

        ]
      },
      {
        "factorId": 60018012,
        "factorName": "净买入资金占比",
        "parentId": 60008,
        "parentName": "短期结构",
        "factorSymbol": "SKBS",
        "children": [

        ]
      },
      {
        "factorId": 60018013,
        "factorName": "最大上涨速率",
        "parentId": 60008,
        "parentName": "短期结构",
        "factorSymbol": "FT5X",
        "children": [

        ]
      },
      {
        "factorId": 60018014,
        "factorName": "最大下跌速率",
        "parentId": 60008,
        "parentName": "短期结构",
        "factorSymbol": "FT5N",
        "children": [

        ]
      },
      {
        "factorId": 60018015,
        "factorName": "买涨资金占比",
        "parentId": 60008,
        "parentName": "短期结构",
        "factorSymbol": "KBU",
        "children": [

        ]
      },
      {
        "factorId": 60018016,
        "factorName": "卖跌资金占比",
        "parentId": 60008,
        "parentName": "短期结构",
        "factorSymbol": "KSD",
        "children": [

        ]
      }
    ]
  },
  {
    "factorId": 60019,
    "factorName": "量价形态特征",
    "parentId": 600,
    "parentName": "量价指标",
    "factorSymbol": "",
    "children": [
      {
        "factorId": 60019001,
        "factorName": "10日周期内收价变异系数",
        "parentId": 60019,
        "parentName": "量价形态特征",
        "factorSymbol": "STD10",
        "children": [

        ]
      },
      {
        "factorId": 60019002,
        "factorName": "20日周期内收价变异系数",
        "parentId": 60019,
        "parentName": "量价形态特征",
        "factorSymbol": "STD20",
        "children": [

        ]
      },
      {
        "factorId": 60019003,
        "factorName": "30日周期内收价变异系数",
        "parentId": 60019,
        "parentName": "量价形态特征",
        "factorSymbol": "STD30",
        "children": [

        ]
      },
      {
        "factorId": 60019004,
        "factorName": "10日极值大位置",
        "parentId": 60019,
        "parentName": "量价形态特征",
        "factorSymbol": "PHH10",
        "children": [

        ]
      },
      {
        "factorId": 60019005,
        "factorName": "10日极小值位置",
        "parentId": 60019,
        "parentName": "量价形态特征",
        "factorSymbol": "PLL10",
        "children": [

        ]
      },
      {
        "factorId": 60019006,
        "factorName": "20日极值大位置",
        "parentId": 60019,
        "parentName": "量价形态特征",
        "factorSymbol": "PHH20",
        "children": [

        ]
      },
      {
        "factorId": 60019007,
        "factorName": "20日极小值位置",
        "parentId": 60019,
        "parentName": "量价形态特征",
        "factorSymbol": "PLL20",
        "children": [

        ]
      },
      {
        "factorId": 60019008,
        "factorName": "30日极值大位置",
        "parentId": 60019,
        "parentName": "量价形态特征",
        "factorSymbol": "PHH30",
        "children": [

        ]
      },
      {
        "factorId": 60019009,
        "factorName": "30日极小值位置",
        "parentId": 60019,
        "parentName": "量价形态特征",
        "factorSymbol": "PLL30",
        "children": [

        ]
      },
      {
        "factorId": 60019010,
        "factorName": "5日高收比",
        "parentId": 60019,
        "parentName": "量价形态特征",
        "factorSymbol": "KHC5",
        "children": [

        ]
      },
      {
        "factorId": 60019011,
        "factorName": "10日高收比",
        "parentId": 60019,
        "parentName": "量价形态特征",
        "factorSymbol": "KHC10",
        "children": [

        ]
      },
      {
        "factorId": 60019012,
        "factorName": "20日高收比",
        "parentId": 60019,
        "parentName": "量价形态特征",
        "factorSymbol": "KHC20",
        "children": [

        ]
      },
      {
        "factorId": 60019013,
        "factorName": "30日高收比",
        "parentId": 60019,
        "parentName": "量价形态特征",
        "factorSymbol": "KHC30",
        "children": [

        ]
      },
      {
        "factorId": 60019014,
        "factorName": "5日低收比",
        "parentId": 60019,
        "parentName": "量价形态特征",
        "factorSymbol": "KLC5",
        "children": [

        ]
      },
      {
        "factorId": 60019015,
        "factorName": "10日低收比",
        "parentId": 60019,
        "parentName": "量价形态特征",
        "factorSymbol": "KLC10",
        "children": [

        ]
      },
      {
        "factorId": 60019016,
        "factorName": "20日低收比",
        "parentId": 60019,
        "parentName": "量价形态特征",
        "factorSymbol": "KLC20",
        "children": [

        ]
      },
      {
        "factorId": 60019017,
        "factorName": "30日低收比",
        "parentId": 60019,
        "parentName": "量价形态特征",
        "factorSymbol": "KLC30",
        "children": [

        ]
      },
      {
        "factorId": 60019018,
        "factorName": "5日收价分位数",
        "parentId": 60019,
        "parentName": "量价形态特征",
        "factorSymbol": "PRSV5",
        "children": [

        ]
      },
      {
        "factorId": 60019019,
        "factorName": "10日收价分位数",
        "parentId": 60019,
        "parentName": "量价形态特征",
        "factorSymbol": "PRSV10",
        "children": [

        ]
      },
      {
        "factorId": 60019020,
        "factorName": "20日收价分位数",
        "parentId": 60019,
        "parentName": "量价形态特征",
        "factorSymbol": "PRSV20",
        "children": [

        ]
      },
      {
        "factorId": 60019021,
        "factorName": "30日收价分位数",
        "parentId": 60019,
        "parentName": "量价形态特征",
        "factorSymbol": "PRSV30",
        "children": [

        ]
      },
      {
        "factorId": 60019022,
        "factorName": "10日涨跌日拉锯",
        "parentId": 60019,
        "parentName": "量价形态特征",
        "factorSymbol": "KDPN10",
        "children": [

        ]
      },
      {
        "factorId": 60019023,
        "factorName": "20日涨跌日拉锯",
        "parentId": 60019,
        "parentName": "量价形态特征",
        "factorSymbol": "KDPN20",
        "children": [

        ]
      },
      {
        "factorId": 60019024,
        "factorName": "30日涨跌日拉锯",
        "parentId": 60019,
        "parentName": "量价形态特征",
        "factorSymbol": "KDPN30",
        "children": [

        ]
      },
      {
        "factorId": 60019025,
        "factorName": "10日量能增占比",
        "parentId": 60019,
        "parentName": "量价形态特征",
        "factorSymbol": "VRP10",
        "children": [

        ]
      },
      {
        "factorId": 60019026,
        "factorName": "20日量能增占比",
        "parentId": 60019,
        "parentName": "量价形态特征",
        "factorSymbol": "VRP20",
        "children": [

        ]
      },
      {
        "factorId": 60019027,
        "factorName": "30日量能增占比",
        "parentId": 60019,
        "parentName": "量价形态特征",
        "factorSymbol": "VRP30",
        "children": [

        ]
      },
      {
        "factorId": 60019028,
        "factorName": "10日多方情绪余度",
        "parentId": 60019,
        "parentName": "量价形态特征",
        "factorSymbol": "ERSP10",
        "children": [

        ]
      },
      {
        "factorId": 60019029,
        "factorName": "10日空方情绪余度",
        "parentId": 60019,
        "parentName": "量价形态特征",
        "factorSymbol": "ERSN10",
        "children": [

        ]
      },
      {
        "factorId": 60019030,
        "factorName": "20日多方情绪余度",
        "parentId": 60019,
        "parentName": "量价形态特征",
        "factorSymbol": "ERSP20",
        "children": [

        ]
      },
      {
        "factorId": 60019031,
        "factorName": "20日空方情绪余度",
        "parentId": 60019,
        "parentName": "量价形态特征",
        "factorSymbol": "ERSN20",
        "children": [

        ]
      },
      {
        "factorId": 60019032,
        "factorName": "30日多方情绪余度",
        "parentId": 60019,
        "parentName": "量价形态特征",
        "factorSymbol": "ERSP30",
        "children": [

        ]
      },
      {
        "factorId": 60019033,
        "factorName": "30日空方情绪余度",
        "parentId": 60019,
        "parentName": "量价形态特征",
        "factorSymbol": "ERSN30",
        "children": [

        ]
      },
      {
        "factorId": 60019034,
        "factorName": "60日多方情绪余度",
        "parentId": 60019,
        "parentName": "量价形态特征",
        "factorSymbol": "ERSP60",
        "children": [

        ]
      },
      {
        "factorId": 60019035,
        "factorName": "60日空方情绪余度",
        "parentId": 60019,
        "parentName": "量价形态特征",
        "factorSymbol": "ERSN60",
        "children": [

        ]
      },
      {
        "factorId": 60019036,
        "factorName": "10日周期内全日变异系数",
        "parentId": 60019,
        "parentName": "量价形态特征",
        "factorSymbol": "STDQ10",
        "children": [

        ]
      },
      {
        "factorId": 60019037,
        "factorName": "20日周期内全日变异系数",
        "parentId": 60019,
        "parentName": "量价形态特征",
        "factorSymbol": "STDQ20",
        "children": [

        ]
      },
      {
        "factorId": 60019038,
        "factorName": "30日周期内全日变异系数",
        "parentId": 60019,
        "parentName": "量价形态特征",
        "factorSymbol": "STDQ30",
        "children": [

        ]
      }
    ]
  },
  {
    "factorId": 60020,
    "factorName": "5分钟数据构造长周期因子",
    "parentId": 600,
    "parentName": "量价指标",
    "factorSymbol": "",
    "children": [
      {
        "factorId": 60018017,
        "factorName": "日内收盘价价位系数",
        "parentId": 60020,
        "parentName": "5分钟数据构造长周期因子",
        "factorSymbol": "rsvt",
        "children": [

        ]
      },
      {
        "factorId": 60020001,
        "factorName": "3日买涨资金占比",
        "parentId": 60020,
        "parentName": "5分钟数据构造长周期因子",
        "factorSymbol": "KBTRA3",
        "children": [

        ]
      },
      {
        "factorId": 60020002,
        "factorName": "5日买涨资金占比",
        "parentId": 60020,
        "parentName": "5分钟数据构造长周期因子",
        "factorSymbol": "KBTRA5",
        "children": [

        ]
      },
      {
        "factorId": 60020003,
        "factorName": "10日买涨资金占比",
        "parentId": 60020,
        "parentName": "5分钟数据构造长周期因子",
        "factorSymbol": "KBTRA10",
        "children": [

        ]
      },
      {
        "factorId": 60020004,
        "factorName": "20日买涨资金占比",
        "parentId": 60020,
        "parentName": "5分钟数据构造长周期因子",
        "factorSymbol": "KBTRA20",
        "children": [

        ]
      },
      {
        "factorId": 60020005,
        "factorName": "30日买涨资金占比",
        "parentId": 60020,
        "parentName": "5分钟数据构造长周期因子",
        "factorSymbol": "KBTRA30",
        "children": [

        ]
      },
      {
        "factorId": 60020006,
        "factorName": "3日卖跌资金占比",
        "parentId": 60020,
        "parentName": "5分钟数据构造长周期因子",
        "factorSymbol": "KSTRA3",
        "children": [

        ]
      },
      {
        "factorId": 60020007,
        "factorName": "5日卖跌资金占比",
        "parentId": 60020,
        "parentName": "5分钟数据构造长周期因子",
        "factorSymbol": "KSTRA5",
        "children": [

        ]
      },
      {
        "factorId": 60020008,
        "factorName": "10日卖跌资金占比",
        "parentId": 60020,
        "parentName": "5分钟数据构造长周期因子",
        "factorSymbol": "KSTRA10",
        "children": [

        ]
      },
      {
        "factorId": 60020009,
        "factorName": "20日卖跌资金占比",
        "parentId": 60020,
        "parentName": "5分钟数据构造长周期因子",
        "factorSymbol": "KSTRA20",
        "children": [

        ]
      },
      {
        "factorId": 60020010,
        "factorName": "30日卖跌资金占比",
        "parentId": 60020,
        "parentName": "5分钟数据构造长周期因子",
        "factorSymbol": "KSTRA30",
        "children": [

        ]
      },
      {
        "factorId": 60020011,
        "factorName": "3日净买入资金占比",
        "parentId": 60020,
        "parentName": "5分钟数据构造长周期因子",
        "factorSymbol": "KNTRA3",
        "children": [

        ]
      },
      {
        "factorId": 60020012,
        "factorName": "5日净买入资金占比",
        "parentId": 60020,
        "parentName": "5分钟数据构造长周期因子",
        "factorSymbol": "KNTRA5",
        "children": [

        ]
      },
      {
        "factorId": 60020013,
        "factorName": "10日净买入资金占比",
        "parentId": 60020,
        "parentName": "5分钟数据构造长周期因子",
        "factorSymbol": "KNTRA10",
        "children": [

        ]
      },
      {
        "factorId": 60020014,
        "factorName": "20日净买入资金占比",
        "parentId": 60020,
        "parentName": "5分钟数据构造长周期因子",
        "factorSymbol": "KNTRA20",
        "children": [

        ]
      },
      {
        "factorId": 60020015,
        "factorName": "30日净买入资金占比",
        "parentId": 60020,
        "parentName": "5分钟数据构造长周期因子",
        "factorSymbol": "KNTRA30",
        "children": [

        ]
      },
      {
        "factorId": 60020016,
        "factorName": "今日收盘价位的3日概率",
        "parentId": 60020,
        "parentName": "5分钟数据构造长周期因子",
        "factorSymbol": "PP3C",
        "children": [

        ]
      },
      {
        "factorId": 60020017,
        "factorName": "今日收盘价位的5日概率",
        "parentId": 60020,
        "parentName": "5分钟数据构造长周期因子",
        "factorSymbol": "PP5C",
        "children": [

        ]
      },
      {
        "factorId": 60020018,
        "factorName": "今日收盘价位的10日概率",
        "parentId": 60020,
        "parentName": "5分钟数据构造长周期因子",
        "factorSymbol": "PP10C",
        "children": [

        ]
      },
      {
        "factorId": 60020019,
        "factorName": "今日收盘价位的20日概率",
        "parentId": 60020,
        "parentName": "5分钟数据构造长周期因子",
        "factorSymbol": "PP20C",
        "children": [

        ]
      },
      {
        "factorId": 60020020,
        "factorName": "今日收盘价位的30日概率",
        "parentId": 60020,
        "parentName": "5分钟数据构造长周期因子",
        "factorSymbol": "PP30C",
        "children": [

        ]
      }
    ]
  },
  {
    "factorId": 60021,
    "factorName": "线性预测偏差 ",
    "parentId": 600,
    "parentName": "量价指标",
    "factorSymbol": "",
    "children": [
      {
        "factorId": 60021001,
        "factorName": "5日收盘价预测偏差",
        "parentId": 60021,
        "parentName": "线性预测偏差 ",
        "factorSymbol": "DPPC5",
        "children": [

        ]
      },
      {
        "factorId": 60021002,
        "factorName": "5日最高价预测偏差",
        "parentId": 60021,
        "parentName": "线性预测偏差 ",
        "factorSymbol": "DPPH5",
        "children": [

        ]
      },
      {
        "factorId": 60021003,
        "factorName": "5日最高低预测偏差",
        "parentId": 60021,
        "parentName": "线性预测偏差 ",
        "factorSymbol": "DPPL5",
        "children": [

        ]
      },
      {
        "factorId": 60021004,
        "factorName": "5日均价预测偏差",
        "parentId": 60021,
        "parentName": "线性预测偏差 ",
        "factorSymbol": "DPPA5",
        "children": [

        ]
      },
      {
        "factorId": 60021005,
        "factorName": "5日预测高低位缝隙",
        "parentId": 60021,
        "parentName": "线性预测偏差 ",
        "factorSymbol": "GPHL5",
        "children": [

        ]
      },
      {
        "factorId": 60021006,
        "factorName": "5日预测高收位缝隙",
        "parentId": 60021,
        "parentName": "线性预测偏差 ",
        "factorSymbol": "GPHC5",
        "children": [

        ]
      },
      {
        "factorId": 60021007,
        "factorName": "5日预测收低位缝隙",
        "parentId": 60021,
        "parentName": "线性预测偏差 ",
        "factorSymbol": "GPCL5",
        "children": [

        ]
      },
      {
        "factorId": 60021008,
        "factorName": "10日收盘价预测偏差",
        "parentId": 60021,
        "parentName": "线性预测偏差 ",
        "factorSymbol": "DPPC10",
        "children": [

        ]
      },
      {
        "factorId": 60021009,
        "factorName": "10日最高价预测偏差",
        "parentId": 60021,
        "parentName": "线性预测偏差 ",
        "factorSymbol": "DPPH10",
        "children": [

        ]
      },
      {
        "factorId": 60021010,
        "factorName": "10日最高低预测偏差",
        "parentId": 60021,
        "parentName": "线性预测偏差 ",
        "factorSymbol": "DPPL10",
        "children": [

        ]
      },
      {
        "factorId": 60021011,
        "factorName": "10日均价预测偏差",
        "parentId": 60021,
        "parentName": "线性预测偏差 ",
        "factorSymbol": "DPPA10",
        "children": [

        ]
      },
      {
        "factorId": 60021012,
        "factorName": "10日预测高低位缝隙",
        "parentId": 60021,
        "parentName": "线性预测偏差 ",
        "factorSymbol": "GPHL10",
        "children": [

        ]
      },
      {
        "factorId": 60021013,
        "factorName": "10日预测高收位缝隙",
        "parentId": 60021,
        "parentName": "线性预测偏差 ",
        "factorSymbol": "GPHC10",
        "children": [

        ]
      },
      {
        "factorId": 60021014,
        "factorName": "10日预测收低位缝隙",
        "parentId": 60021,
        "parentName": "线性预测偏差 ",
        "factorSymbol": "GPCL10",
        "children": [

        ]
      },
      {
        "factorId": 60021015,
        "factorName": "20日收盘价预测偏差",
        "parentId": 60021,
        "parentName": "线性预测偏差 ",
        "factorSymbol": "DPPC20",
        "children": [

        ]
      },
      {
        "factorId": 60021016,
        "factorName": "20日最高价预测偏差",
        "parentId": 60021,
        "parentName": "线性预测偏差 ",
        "factorSymbol": "DPPH20",
        "children": [

        ]
      },
      {
        "factorId": 60021017,
        "factorName": "20日最高低预测偏差",
        "parentId": 60021,
        "parentName": "线性预测偏差 ",
        "factorSymbol": "DPPL20",
        "children": [

        ]
      },
      {
        "factorId": 60021018,
        "factorName": "20日均价预测偏差",
        "parentId": 60021,
        "parentName": "线性预测偏差 ",
        "factorSymbol": "DPPA20",
        "children": [

        ]
      },
      {
        "factorId": 60021019,
        "factorName": "20日预测高低位缝隙",
        "parentId": 60021,
        "parentName": "线性预测偏差 ",
        "factorSymbol": "GPHL20",
        "children": [

        ]
      },
      {
        "factorId": 60021020,
        "factorName": "20日预测高收位缝隙",
        "parentId": 60021,
        "parentName": "线性预测偏差 ",
        "factorSymbol": "GPHC20",
        "children": [

        ]
      },
      {
        "factorId": 60021021,
        "factorName": "20日预测收低位缝隙",
        "parentId": 60021,
        "parentName": "线性预测偏差 ",
        "factorSymbol": "GPCL20",
        "children": [

        ]
      },
      {
        "factorId": 60021022,
        "factorName": "5-10日预测收价差异系数",
        "parentId": 60021,
        "parentName": "线性预测偏差 ",
        "factorSymbol": "D5P10C",
        "children": [

        ]
      },
      {
        "factorId": 60021023,
        "factorName": "10-20日预测收价差异系数",
        "parentId": 60021,
        "parentName": "线性预测偏差 ",
        "factorSymbol": "D10P20C",
        "children": [

        ]
      },
      {
        "factorId": 60021024,
        "factorName": "5-10日预测高价差异系数",
        "parentId": 60021,
        "parentName": "线性预测偏差 ",
        "factorSymbol": "D5P10H",
        "children": [

        ]
      },
      {
        "factorId": 60021025,
        "factorName": "10-20日预测高价差异系数",
        "parentId": 60021,
        "parentName": "线性预测偏差 ",
        "factorSymbol": "D10P20H",
        "children": [

        ]
      },
      {
        "factorId": 60021026,
        "factorName": "5-10日预测低价差异系数",
        "parentId": 60021,
        "parentName": "线性预测偏差 ",
        "factorSymbol": "D5P10L",
        "children": [

        ]
      },
      {
        "factorId": 60021027,
        "factorName": "10-20日预测低价差异系数",
        "parentId": 60021,
        "parentName": "线性预测偏差 ",
        "factorSymbol": "D10P20L",
        "children": [

        ]
      },
      {
        "factorId": 60021028,
        "factorName": "5-10日预测均价差异系数",
        "parentId": 60021,
        "parentName": "线性预测偏差 ",
        "factorSymbol": "D5P10A",
        "children": [

        ]
      },
      {
        "factorId": 60021029,
        "factorName": "10-20日预测均价差异系数",
        "parentId": 60021,
        "parentName": "线性预测偏差 ",
        "factorSymbol": "D10P20A",
        "children": [

        ]
      }
    ]
  }
]