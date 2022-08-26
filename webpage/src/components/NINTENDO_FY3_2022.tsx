import { useState, useEffect } from "react";
import { Code, SegmentedControl, Anchor, Text, Stack, Space } from "@mantine/core";
import { useSelector } from "react-redux";
import { printEarnings } from "../data/nintendo/Nintendo-FY3-2022/earnings-fy3-22";
import { printKPI } from "../data/nintendo/Nintendo-FY3-2022/kpi-fy3-22";
import { printTopSellingSwitchTitles } from "../data/nintendo/Nintendo-FY3-2022/topNSWswfy3-22";
import { printFYMillionSellerTitles } from "../data/nintendo/Nintendo-FY3-2022/mst-fy3-22";
import GRAPH_NINTENDO_EARNINGS_FY3_22 from "../graphs/nintendo/Nintendo-FY3-2022/GRAPH_NINTENDO_EARNINGS_FY3_22";
import GRAPH_NINTENDO_KPI_FY3_22 from "../graphs/nintendo/Nintendo-FY3-2022/GRAPH_NINTENDO_KPI_FY3_22";
import GRAPH_NINTENDO_TOP_SELLING_TITLES_SWITCH_FY3_22 from "../graphs/nintendo/Nintendo-FY3-2022/GRAPH_NINTENDO_TOP_SELLING_TITLES_SWITCH_FY3_22";

export default function NINTENDO_FY3_22() {

    const [data, setData] = useState("");
    const [value, setValue] = useState("");
    const [sources, setSources] = useState(<></>)

    const state: any = useSelector(state => state);

    useEffect(() => {
        (value === "Consolidated Operating Results")
            ? setData(consolidatedOperatingResults)
            : (value === "WW Hardware/Software units, Mobile/IP related income")
            ? setData(nintendoHardwareSoftwareMobile)
            : (value === "Key/Digital Sales Indicator")
            ? setData(keyIndicators)
            : (value === "FY Million-Seller Titles")
            ? setData(fyMillionSellers)
            : (value === "Regional Hardware/Software units")
            ? setData(regionalHWSW)
            : (value === "Top Selling Titles")
            ? setData(topSellingTitles)
            : setData("");

        (value === "Data Sources")
            ? setSources(DATA_SOURCES)
            : setSources(<></>)

    }, [value])

    function DATA_SOURCES() {

        return (
            <Text>
                <Stack align="center">
                        1st Quarter Earnings Release: 
                    <Anchor mb="sm" href="https://www.nintendo.co.jp/ir/pdf/2021/210805e.pdf" target="_blank" >
                        https://www.nintendo.co.jp/ir/pdf/2021/210805e.pdf
                    </Anchor>
                        1st Quarter Financial Results Explanatory Material:
                    <Anchor mb="sm" href="https://www.nintendo.co.jp/ir/pdf/2021/210805_3e.pdf" target="_blank" >
                        https://www.nintendo.co.jp/ir/pdf/2021/210805_3e.pdf
                    </Anchor>
                
                        2nd Quarter Earnings Release: 
                    <Anchor mb="sm" href="https://www.nintendo.co.jp/ir/pdf/2021/211104e.pdf" target="_blank" >
                        https://www.nintendo.co.jp/ir/pdf/2021/211104e.pdf
                    </Anchor>
                        2nd Quarter Financial Results Explanatory Material:
                    <Anchor mb="sm" href="https://www.nintendo.co.jp/ir/pdf/2021/211104_4e.pdf" target="_blank" >
                        https://www.nintendo.co.jp/ir/pdf/2021/211104_4e.pdf
                    </Anchor>
                
                        3rd Quarter Earnings Release: 
                    <Anchor mb="sm" href="https://www.nintendo.co.jp/ir/pdf/2022/220203e.pdf" target="_blank" >
                        https://www.nintendo.co.jp/ir/pdf/2022/220203e.pdf
                    </Anchor>
                        3rd Quarter Financial Results Explanatory Material:
                    <Anchor mb="sm" href="https://www.nintendo.co.jp/ir/pdf/2022/220203_4e.pdf" target="_blank" >
                        https://www.nintendo.co.jp/ir/pdf/2022/220203_4e.pdf
                    </Anchor>
                
                        4th Quarter Earnings Release: 
                    <Anchor mb="sm" href="https://www.nintendo.co.jp/ir/pdf/2022/220510e.pdf" target="_blank" >
                        https://www.nintendo.co.jp/ir/pdf/2022/220510e.pdf
                    </Anchor>
                        4th Quarter Financial Results Explanatory Material:
                    <Anchor mb="sm" href="https://www.nintendo.co.jp/ir/pdf/2022/220510_7e.pdf" target="_blank" >
                        https://www.nintendo.co.jp/ir/pdf/2022/220510_7e.pdf
                    </Anchor>
                </Stack>  
            </Text> 
        )
    };

    const consolidatedOperatingResults = printEarnings;

    const topSellingTitles = printTopSellingSwitchTitles;

    const regionalHWSW = `
    +--------------------------------------------+
    | Nintendo Switch Regional Data   | FY3/2022 |
    +--------------------------------------------+
    +--------------------------------------------+
    | Switch | Japan  |The     | Europe | Other  |
    |        |        |Americas|        |        |
    +--------------------------------------------+
    |Q1 Units|  0.83M |  1.10M |  0.82M |  0.56M |
    |Q1 YoY% | +5.06% |+54.93% | -1.20% |-23.29% |
    |Q1 WW%  | 25.08% | 33.23% | 24.77% | 16.92% |
    +--------------------------------------------+
    |Q2 Units|  0.75M |  1.05M |  0.81M |  0.53M |
    |Q2 YoY% |-34.21% |-44.15% |-39.10% |-44.21% |
    |Q2 WW%  | 23.89% | 33.44% | 25.80% | 16.88% |
    +--------------------------------------------+
    |Q3 Units|  0.77M |  1.96M |  2.12M |  0.50M |
    |Q3 YoY% |-63.16% |-34.88% | +0.95% |-58.68% |
    |Q3 WW%  | 14.42% | 36.70% | 39.70% |  9.36% |
    +--------------------------------------------+
    |Q4 Units|  0.21M |  1.11M |  0.29M |  0.15M |
    |Q4 YoY% |-72.37% |-24.49% |-61.84% |-73.21% |
    |Q4 WW%  | 11.86% | 62.71% | 16.38% |  8.47% |
    +============================================+
    | First Half                                 |
    +--------------------------------------------+
    | Units  |  1.58M |  2.15M |  1.63M |  1.09M |
    | YoY%   |-18.13% |-16.99% |-24.54% |-35.12% |
    | WW%    | 24.50% | 33.33% | 25.27% | 16.90% |
    +--------------------------------------------+
    | First Three Quarters                       |
    +--------------------------------------------+
    | Units  |  2.35M |  4.11M |  3.75M |  1.59M |
    | YoY%   |-41.54% |-26.61% |-11.97% |-44.98% |
    | WW%    | 19.93% | 34.86% | 31.81% | 13.49% |
    +--------------------------------------------+
    | FY3/22 Cumulative                          |
    +--------------------------------------------+
    | Units  |  2.56M |  5.22M |  4.04M |  1.74M |
    | YoY%   |-46.44% |-26.17% |-19.52% |-49.57% |
    | WW%    | 18.88% | 38.50% | 29.79% | 12.83% |
    +--------------------------------------------+
    | Life-To-Date                               |
    +--------------------------------------------+
    | Units  | 18.78M | 32.08M | 22.15M | 10.44M |
    | WW%    | 22.50% | 38.44% | 26.54% | 12.51% |
    +--------------------------------------------+
    +--------------------------------------------+
    | Switch | Japan  |The     | Europe | Other  |
    | Lite   |        |Americas|        |        |
    +--------------------------------------------+
    |Q1 Units|  0.34M |  0.48M |  0.26M |  0.05M |
    |Q1 YoY% | -5.56% |-62.50% |-67.09% |-75.00% |
    |Q1 WW%  | 29.82% | 42.11% | 22.81% |  4.39% |
    +--------------------------------------------+
    |Q2 Units|  0.11M |  0.41M |  0.13M |  0.05M |
    |Q2 YoY% |-75.00% |-30.51% |-62.86% |-68.75% |
    |Q2 WW%  | 16.18% | 60.29% | 19.12% |  7.35% |
    +--------------------------------------------+
    |Q3 Units|  0.46M |  0.44M |  0.36M |  0.08M |
    |Q3 YoY% |-25.81% |-72.15% |-59.09% |-11.11% |
    |Q3 WW%  | 34.07% | 32.59% | 26.67% |  5.93% |
    +--------------------------------------------+
    |Q4 Units|  0.11M |  0.26M |  0.11M |  0.04M |
    |Q4 YoY% |-71.79% |-59.38% | -0.00% |+33.33% |
    |Q4 WW%  | 20.75% | 49.06% | 20.75% |  7.55% |
    +============================================+
    | First Half                                 |
    +--------------------------------------------+
    | Units  |  0.45M |  0.89M |  0.39M |  0.10M |
    | YoY%   |-43.75% |-52.41% |-65.79% |-72.22% |
    | WW%    | 24.73% | 48.90% | 21.43% |  5.49% |
    +--------------------------------------------+
    | First Three Quarters                       |
    +--------------------------------------------+
    | Units  |  0.91M |  1.33M |  0.75M |  0.18M |
    | YoY%   |-35.92% |-61.45% |-62.87% |-60.00% |
    | WW%    | 28.71% | 41.96% | 23.66% |  5.68% |
    +--------------------------------------------+
    | FY3/22 Cumulative                          |
    +--------------------------------------------+
    | Units  |  1.02M |  1.59M |  0.86M |  0.22M |
    | YoY%   |-43.65% |-61.12% |-59.62% |-54.17% |
    | WW%    | 27.57% | 42.97% | 23.24% |  5.95% |
    +--------------------------------------------+
    | Life-To-Date                               |
    +--------------------------------------------+
    | Units  |  4.83M |  8.00M |  4.33M |  1.23M |
    | WW%    | 26.25% | 43.48% | 23.53% |  6.68% |
    +--------------------------------------------+
    +--------------------------------------------+
    | Switch | Japan  |The     | Europe | Other  |
    | OLED   |        |Americas|        |        |
    +--------------------------------------------+
    |Q3 Units|  1.07M |  1.41M |  0.91M |  0.61M |
    |Q3 WW%  | 26.82% | 35.34% | 22.81% | 15.29% |
    +--------------------------------------------+
    |Q4 Units|  0.54M |  0.53M |  0.21M |  0.52M |
    |Q4 WW%  | 29.83% | 29.28% | 11.60% | 28.73% |
    +============================================+
    | First Three Quarters                       |
    +--------------------------------------------+
    | Units  |  1.07M |  1.41M |  0.91M |  0.61M |
    | WW%    | 26.82% | 35.34% | 22.81% | 15.29% |
    +--------------------------------------------+
    | FY3/22 Cumulative                          |
    +--------------------------------------------+
    | Units  |  1.61M |  1.94M |  1.12M |  1.13M |
    | WW%    | 27.76% | 33.45% | 19.31% | 19.48% |
    +--------------------------------------------+
    | Life-To-Date                               |
    +--------------------------------------------+
    | Units  |  1.61M |  1.94M |  1.12M |  1.13M |
    | WW%    | 27.76% | 33.45% | 19.31% | 19.48% |
    +--------------------------------------------+
    +--------------------------------------------+
    | Switch | Japan  |The     | Europe | Other  |
    |Hardware|        |Americas|        |        |
    +--------------------------------------------+
    |Q1 Units|  1.16M |  1.59M |  1.08M |  0.62M |
    |Q1 YoY% | +0.87% |-20.10% |-32.92% |-32.61% |
    |Q1 WW%  | 26.07% | 35.73% | 24.27% | 13.93% |
    +--------------------------------------------+
    |Q2 Units|  0.87M |  1.45M |  0.94M |  0.57M |
    |Q2 YoY% |-44.94% |-41.30% |-44.71% |-49.11% |
    |Q2 WW%  | 22.72% | 37.86% | 24.54% | 14.88% |
    +--------------------------------------------+
    |Q3 Units|  2.29M |  3.80M |  3.38M |  1.19M |
    |Q3 YoY% |-15.50% |-17.21% |+13.80% | -7.75% |
    |Q3 WW%  | 21.46% | 35.61% | 31.68% | 11.15% |
    +--------------------------------------------+
    |Q4 Units|  0.87M |  1.92M |  0.62M |  0.71M |
    |Q4 YoY% |-25.00% | -8.57% |-28.74% |+18.33% |
    |Q4 WW%  | 21.17% | 46.72% | 15.09% | 17.27% |
    +============================================+
    | First Half                                 |
    +--------------------------------------------+
    | Units  |  2.03M |  3.04M |  2.02M |  1.19M |
    | YoY%   |-25.64% |-31.84% |-38.97% |-41.67% |
    | WW%    | 24.52% | 36.71% | 24.40% | 14.37% |
    +--------------------------------------------+
    | First Three Quarters                       |
    +--------------------------------------------+
    | Units  |  4.32M |  6.84M |  5.40M |  2.38M |
    | YoY%   |-20.59% |-24.42% |-14.01% |-28.53% |
    | WW%    | 22.80% | 36.09% | 28.50% | 12.56% |
    +--------------------------------------------+
    | FY3/22 Cumulative                          |
    +--------------------------------------------+
    | Units  |  5.19M |  8.76M |  6.02M |  3.09M |
    | YoY%   |-21.36% |-21.43% |-15.80% |-21.37% |
    | WW%    | 22.51% | 37.99% | 26.11% | 13.40% |
    +--------------------------------------------+
    | Life-To-Date                               |
    +--------------------------------------------+
    | Units  | 25.23M | 42.03M | 27.60M | 12.80M |
    | WW%    | 23.44% | 39.04% | 25.64% | 11.89% |
    +--------------------------------------------+
    +--------------------------------------------+
    | Switch | Japan  |The     | Europe | Other  |
    |Software|        |Americas|        |        |
    +--------------------------------------------+
    |Q1 Units|  8.13M | 22.35M | 11.35M |  3.46M |
    |Q1 YoY% |-18.86% | +4.00% |-20.68% |-25.11% |
    |Q1 WW%  | 17.95% | 49.35% | 25.06% |  7.64% |
    +--------------------------------------------+
    |Q2 Units|  8.00M | 22.78M | 14.28M |  3.54M |
    |Q2 YoY% | +3.09% | -5.48% | +0.42% | -4.84% |
    |Q2 WW%  | 16.46% | 46.87% | 29.38% |  7.28% |
    +--------------------------------------------+
    |Q3 Units| 14.85M | 39.51M | 25.22M |  5.83M |
    |Q3 YoY% | +6.76% |+16.38% | +5.74% |+40.14% |
    |Q3 WW%  | 17.39% | 46.26% | 29.53% |  6.83% |
    +--------------------------------------------+
    |Q4 Units| 11.16M | 23.63M | 14.93M |  6.05M |
    |Q4 YoY% |-16.28% | +3.28% | +7.72% |+28.72% |
    |Q4 WW%  | 20.01% | 42.36% | 26.77% | 10.85% |
    +============================================+
    | First Half                                 |
    +--------------------------------------------+
    | Units  | 16.13M | 45.13M | 25.63M |  7.00M |
    | YoY%   | -9.28% | -1.01% |-10.16% |-16.07% |
    | WW%    | 17.18% | 48.07% | 27.30% |  7.46% |
    +--------------------------------------------+
    | First Three Quarters                       |
    +--------------------------------------------+
    | Units  | 30.98M | 84.64M | 50.85M | 12.83M |
    | YoY%   | -2.24% | +6.41% | -2.92% | +2.64% |
    | WW%    | 17.28% | 47.21% | 28.36% |  7.16% |
    +--------------------------------------------+
    | FY3/22 Cumulative                          |
    +--------------------------------------------+
    | Units  | 42.14M |108.27M | 65.78M | 18.88M |
    | YoY%   | -6.40% | +5.71% | -0.69% | +9.77% |
    | WW%    | 17.93% | 46.06% | 27.98% |  8.03% |
    +--------------------------------------------+
    | Life-To-Date                               |
    +--------------------------------------------+
    | Units  |154.36M |369.27M |237.93M | 60.62M |
    | WW%    | 18.77% | 44.91% | 28.94% |  7.37% |
    +--------------------------------------------+
    ###
    `;

    const fyMillionSellers = printFYMillionSellerTitles;

    const keyIndicators = printKPI;

    const nintendoHardwareSoftwareMobile = `
    +------------------------------+
    | Nintendo Switch   | FY3/2022 |   
    +------------------------------+   
    | Sales Units and Forecast     |   
    +------------------------------+   
    +---------------------------------+
    | Switch      |   Units |    YoY% |
    +---------------------------------+
    | 1st Quarter |   3.31M |  +8.52% |
    +---------------------------------+
    | 2nd Quarter |   3.14M | -40.87% |
    +---------------------------------+
    | 3rd Quarter |   5.34M | -36.50% |
    +---------------------------------+
    | 4th Quarter |   1.77M | -50.14% |
    +=================================+
    | First Half  |   6.45M | -22.85% |
    +---------------------------------+
    | 1st 3 Qtrs  |  11.79M | -29.70% |
    +---------------------------------+
    | FY3/22 Cml. |  13.56M | -33.27% |
    +---------------------------------+
    | Life-To-Date|  83.45M |
    +-----------------------+
    ###
    +---------------------------------+
    | Switch Lite |   Units |    YoY% |
    +---------------------------------+
    | 1st Quarter |   1.14M | -56.49% |
    +---------------------------------+
    | 2nd Quarter |   0.68M | -56.13% |
    +---------------------------------+
    | 3rd Quarter |   1.35M | -57.28% |
    +---------------------------------+
    | 4th Quarter |   0.53M | -55.08% |
    +=================================+
    | First Half  |   1.82M | -56.35% |
    +---------------------------------+
    | 1st 3 Qtrs  |   3.17M | -56.75% |
    +---------------------------------+
    | FY3/22 Cml. |   3.70M | -56.52% |
    +---------------------------------+
    | Life-To-Date|  18.40M |
    +-----------------------+
    ###
    +-----------------------+
    | Switch OLED |   Units |
    +-----------------------+
    | 3rd Quarter |   3.99M |
    +-----------------------+
    | 4th Quarter |   1.81M |
    +=======================+
    | 1st 3 Qtrs  |   3.99M |
    +-----------------------+
    | FY3/22 Cml. |   5.80M |
    +-----------------------+
    | Life-To-Date|   5.80M |
    +-----------------------+
    ###
    +-------------+
    | Hardware    |-------------------+
    | Total       |   Units |    YoY% |
    +---------------------------------+
    | 1st Quarter |   4.45M | -21.65% |
    +---------------------------------+
    | 2nd Quarter |   3.83M | -44.09% |
    +---------------------------------+
    | 3rd Quarter |  10.67M |  -7.78% |
    +---------------------------------+
    | 4th Quarter |   4.11M | -13.11% |
    +=================================+
    | First Half  |   8.28M | -33.92% |
    +---------------------------------+
    | 1st 3 Qtrs  |  18.95M | -21.37% |
    +---------------------------------+
    | FY3/22 Cml. |  23.06M | -20.01% |
    +---------------------------------+
    | Life-To-Date| 107.65M |
    +---------------------------+
    | FY3/22 Forecast |  25.50M |
    | FCST Revision 1 |  24.00M |
    | FCST Revision 2 |  23.00M |
    +---------------------------+
    | FY3/23 Forecast |  21.00M |
    +---------------------------+
    ###
    +-------------+
    | Software    |-------------------+
    | Total       |   Units |    YoY% |
    +---------------------------------+
    | 1st Quarter |  45.29M | -10.19% |
    +---------------------------------+
    | 2nd Quarter |  48.60M |  -2.45% |
    +---------------------------------+
    | 3rd Quarter |  85.40M | +12.59% |
    +---------------------------------+
    | 4th Quarter |  55.78M |  +1.83% |
    +=================================+
    | First Half  |  93.89M |  -6.34% |
    +---------------------------------+
    | 1st 3 Qtrs  | 179.29M |  +1.81% |
    +---------------------------------+
    | FY3/22 Cml. | 235.07M |  +1.81% |
    +---------------------------------+
    | Life-To-Date| 822.19M |
    +---------------------------+
    | FY3/22 Forecast | 190.00M |
    | FCST Revision 1 | 200.00M |
    | FCST Revision 2 | 220.00M |
    +---------------------------+
    | FY3/23 Forecast | 210.00M |
    +---------------------------+
    (Software sales units include both
    packaged and downloadable versions
    of software.)
    ###
    +------------------------+
    | Mobile, IP related     |----------+
    | income, etc.           |    YoY%  |
    +-----------------------------------+
    | 1st Quarter | ¥13,199M |   -0.59% |
    +-----------------------------------+
    | 2nd Quarter | ¥12,302M |   -8.53% |
    +-----------------------------------+
    | 3rd Quarter | ¥14,324M |   -6.28% |
    +-----------------------------------+
    | 4th Quarter | ¥13,517M |  -10.30% |
    +===================================+
    | First Half  | ¥25,501M |   -4.59% |
    +-----------------------------------+
    | 1st 3 Qtrs  | ¥39,825M |   -5.20% |
    +-----------------------------------+
    | FY3/22 Cml. | ¥53,342M |   -6.55% |
    +-----------------------------------+
    (Includes income from smart-device
    content and royalty income.)
    ###
    `;

    return (

        <div>  
            <SegmentedControl
                    fullWidth 
                    orientation="vertical"
                    value={value}
                    onChange={setValue}
                    data={[ "Data Sources",
                            "Consolidated Operating Results", 
                            "WW Hardware/Software units, Mobile/IP related income", 
                            "Key/Digital Sales Indicator", 
                            "FY Million-Seller Titles", 
                            "Regional Hardware/Software units", 
                            "Top Selling Titles",]}
            />
            
            {sources}
            <Code style={{backgroundColor: `${state.colour}`}} block>{data}</Code>
            {(value === "Consolidated Operating Results")
                ? <GRAPH_NINTENDO_EARNINGS_FY3_22 />
                : (value === "Key/Digital Sales Indicator")
                ? <GRAPH_NINTENDO_KPI_FY3_22 />
                : (value === "Top Selling Titles")
                ? <GRAPH_NINTENDO_TOP_SELLING_TITLES_SWITCH_FY3_22 />
                : null
            }
            <Space h="xl" />
            <Space h="xl" />
            <Space h="xl" />
            <Space h="xl" />
        </div>
        
    );
}
