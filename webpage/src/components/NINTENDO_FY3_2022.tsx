import { useState, useEffect } from "react";
import { Code, SegmentedControl, Anchor, Text, Stack, Pagination, Group, Space, Switch } from "@mantine/core";
import { useSelector } from "react-redux";
import { printEarnings } from "../data/nintendo/Nintendo-FY3-2022/earnings-fy3-22";

import { Line, Bar } from "react-chartjs-2";
import { Chart, registerables } from 'chart.js'; // required to actually get chart.js with react-chartjs-2 to work
Chart.register(...registerables); // to get the package working, source: https://www.chartjs.org/docs/next/getting-started/integration.html

export default function NINTENDO_FY3_22() {

    const [data, setData] = useState("");
    const [value, setValue] = useState("");
    const [sources, setSources] = useState(<></>)

    const state: any = useSelector(state => state);

    const [activePage, setPage] = useState(1);
    const [secondDataRef, setSecondDataRef] = useState(2)
    const [checked, setChecked] = useState(false);
    const [barChecked, setBarChecked] = useState(false);

    

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

    const switchTopSellingTitles = [
        {
            title: "Mario Kart 8 Deluxe",
            ltdFigureLastFy: 35.39,
            firstQuarter: 37.08,
            secondQuarter: 38.74,
            thirdQuarter: 43.35,
            fourthQuarter: 45.33,    
        },
        {
            title: "Super Mario Odyssey",
            ltdFigureLastFy: 20.83,
            firstQuarter: 21.40,
            secondQuarter: 21.95,
            thirdQuarter: 23.02,
            fourthQuarter: 23.50, 
        },
        {
            title: "The Legend of Zelda: Breath of the Wild",
            ltdFigureLastFy: 22.28,
            firstQuarter: 23.20,
            secondQuarter: 24.13,
            thirdQuarter: 25.80,
            fourthQuarter: 26.55, 
        },
        {
            title: "Animal Crossing: New Horizons",
            ltdFigureLastFy: 32.63,
            firstQuarter: 33.89,
            secondQuarter: 34.85,
            thirdQuarter: 37.62,
            fourthQuarter: 38.64,   
        },
        {
            title: "Pokémon Sword / Pokémon Shield",
            ltdFigureLastFy: 21.10,
            firstQuarter: 21.85,
            secondQuarter: 22.64,
            thirdQuarter: 23.90,
            fourthQuarter: 24.27, 
        },
        {
            title: "Pokémon Let's Go Pikachu / Pokémon Let's Go Eevee",
            ltdFigureLastFy: 13.28,
            firstQuarter: 13.57,    
            secondQuarter: 13.83,
            thirdQuarter: 14.33,
            fourthQuarter: 14.65,
        },
        {
            title: "Ring Fit Adventure",
            ltdFigureLastFy: 10.11,
            firstQuarter: 11.26,        
            secondQuarter: 12.21,
            thirdQuarter: 13.53,
            fourthQuarter: 14.09,
        },
        {
            title: "Super Mario Party",
            ltdFigureLastFy: 14.79,
            firstQuarter: 15.72,            
            secondQuarter: 16.48,
            thirdQuarter: 17.39,
            fourthQuarter: 17.78,
        },
        {
            title: "Super Smash Bros. Ultimate",
            ltdFigureLastFy: 23.84,
            firstQuarter: 24.77,               
            secondQuarter: 25.71,
            thirdQuarter: 27.40,
            fourthQuarter: 28.17,
        },
        {
            title: "Pokémon Brilliant Diamond / Pokémon Shining Pearl",
            ltdFigureLastFy: 0,
            firstQuarter: 0,                    
            secondQuarter: 0,
            thirdQuarter: 13.97,
            fourthQuarter: 14.65,
        },
        {
            title: "Splatoon 2",
            ltdFigureLastFy: 12.21,
            firstQuarter: 12.45,                        
            secondQuarter: 12.68,
            thirdQuarter: 12.68,
            fourthQuarter: 12.68,
        },
    ];

    const topSellingTitles = `
    +--------------------------------+
    | Switch - Top Selling Titles    |
    +--------------------------------+
    +--------------------------------+
    | Units                          |        
    +--------------------------------+
    +-------------------------------------------+
    | Mario Kart 8 Deluxe            |   Rank 1 |
    +-------------------------------------------+
    | 1st Quarter         |    1.69M |
    | 2nd Quarter         |    1.66M |
    | 3rd Quarter         |    4.61M |
    | 4th Quarter         |    1.98M |
    +================================+
    | FY3/22 Cumulative   |    9.94M |
    | Life-To-Date        |   45.33M |
    +-------------------------------------------+
    | Animal Crossing: New Horizons  |   Rank 2 |
    +-------------------------------------------+
    | 1st Quarter         |    1.26M |
    | 2nd Quarter         |    0.96M |
    | 3rd Quarter         |    2.77M |
    | 4th Quarter         |    1.02M |
    +================================+
    | FY3/22 Cumulative   |    6.01M |
    | Life-To-Date        |   38.64M |
    +-------------------------------------------+
    | Super Smash Bros. Ultimate     |   Rank 3 |
    +-------------------------------------------+
    | 1st Quarter         |    0.93M |
    | 2nd Quarter         |    0.94M |
    | 3rd Quarter         |    1.69M |
    | 4th Quarter         |    0.77M |
    +================================+
    | FY3/22 Cumulative   |    4.33M |
    | Life-To-Date        |   28.17M |
    +-------------------------------------------+
    | The Legend of Zelda: Breath of |          |
    | the Wild                       |   Rank 4 |
    +-------------------------------------------+
    | 1st Quarter         |    0.92M |
    | 2nd Quarter         |    0.93M |
    | 3rd Quarter         |    1.67M |
    | 4th Quarter         |    0.75M |
    +================================+
    | FY3/22 Cumulative   |    4.27M |
    | Life-To-Date        |   26.55M |
    +-------------------------------------------+
    | Pokémon Sword / Pokémon Shield |   Rank 5 |
    +-------------------------------------------+
    | 1st Quarter         |    0.75M |
    | 2nd Quarter         |    0.79M |
    | 3rd Quarter         |    1.26M |
    | 4th Quarter         |    0.37M |
    +================================+
    | FY3/22 Cumulative   |    3.17M |
    | Life-To-Date        |   24.27M |
    +-------------------------------------------+
    | Super Mario Odyssey            |   Rank 6 |
    +-------------------------------------------+
    | 1st Quarter         |    0.57M |
    | 2nd Quarter         |    0.55M |
    | 3rd Quarter         |    1.07M |
    | 4th Quarter         |    0.48M |
    +================================+
    | FY3/22 Cumulative   |    2.67M |
    | Life-To-Date        |   23.50M |
    +-------------------------------------------+
    | Super Mario Party              |   Rank 7 |
    +-------------------------------------------+
    | 1st Quarter         |    0.93M |
    | 2nd Quarter         |    0.76M |
    | 3rd Quarter         |    0.91M |
    | 4th Quarter         |    0.39M |
    +================================+
    | FY3/22 Cumulative   |    2.99M |
    | Life-To-Date        |   17.78M |
    +-------------------------------------------+
    | Pokémon Let's Go Pikachu /     |          |
    | Pokémon Let's Go Eevee         |   Rank 8 |
    +-------------------------------------------+
    | 1st Quarter         |    0.29M |
    | 2nd Quarter         |    0.26M |
    | 3rd Quarter         |    0.50M |
    | 4th Quarter         |    0.32M |
    +================================+
    | FY3/22 Cumulative   |    1.37M |
    | Life-To-Date        |   14.65M |
    +-------------------------------------------+
    | Pokémon Brilliant Diamond /    |          |
    | Pokémon Shining Pearl          |   Rank 9 |
    +-------------------------------------------+
    | 3rd Quarter         |   13.97M |
    | 4th Quarter         |    0.68M |
    +================================+
    | FY3/22 Cumulative   |   14.65M |
    | Life-To-Date        |   14.65M |
    +-------------------------------------------+
    | Ring Fit Adventure             |  Rank 10 |
    +-------------------------------------------+
    | 1st Quarter         |    1.15M |
    | 2nd Quarter         |    0.95M |
    | 3rd Quarter         |    1.32M |
    | 4th Quarter         |    0.56M |
    +================================+
    | FY3/22 Cumulative   |    3.98M |
    | Life-To-Date        |   14.09M |
    +-------------------------------------------+
    | Splatoon 2                     |  Rank 11 |
    +-------------------------------------------+
    | 1st Quarter         |    0.24M |
    | 2nd Quarter         |    0.23M |
    +================================+
    | FY3/22 Cumulative   |    0.47M |
    | Life-To-Date        |   12.68M |
    +--------------------------------+
    `;

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

    const fyMillionSellers = `
    +------------------------------------------+
    | Nintendo Switch FY Million-Seller Titles |
    +------------------------------------------+
    +------------------------------------------+
    | Title and Rank                           |
    +------------------------------------------+
    | Units                                    |
    +------------------------------------------+
    +------------------------------------------+
    | Pokémon Brilliant Diamond /    |         |
    | Pokémon Shining Pearl          | Rank 1  |
    +------------------------------------------+
    | Area         |   Japan | Overseas|
    +----------------------------------+
    | 3rd Quarter  |   3.79M |  10.18M |
    | 4th Quarter  |   0.06M |   0.62M |
    +==================================+
    | FY3/22 Cml.  |   3.85M |  10.80M |
    | FY3/22 YoY%  |    New! |    New! |
    | Area/WW FY % |  26.28% |  73.72% |
    +----------------------------------+
    | Global       | WW FY   | WW LTD  |
    +----------------------------------+
    | 3rd Quarter  |  13.97M |  13.97M |
    | 4th Quarter  |   0.68M |  14.65M |
    +==================================+
    | FY3/22 Cml.  |  14.65M |  14.65M |
    | FY3/22 YoY%  |    New! |    New! |
    | WW FY/LTD %  | 100.00% |   0.00% |
    +----------------------------------+
    +------------------------------------------+
    | Pokémon Legends: Arceus        | Rank 2  |
    +------------------------------------------+
    | Area         |   Japan | Overseas|
    +----------------------------------+
    | 4th Quarter  |   3.46M |   9.17M |
    +==================================+
    | FY3/22 Cml.  |   3.46M |   9.17M |
    | FY3/22 YoY%  |    New! |    New! |
    | Area/WW FY % |  27.37% |  72.55% |
    +----------------------------------+
    | Global       | WW FY   | WW LTD  |
    +----------------------------------+
    | 4th Quarter  |  12.64M |  12.64M |
    +==================================+
    | FY3/22 Cml.  |  12.64M |  12.64M |
    | FY3/22 YoY%  |    New! |    New! |
    | WW FY/LTD %  | 100.00% |   0.00% |
    +----------------------------------+
    +------------------------------------------+
    | Mario Kart 8 Deluxe            | Rank 3  |
    +------------------------------------------+
    | Area         |   Japan | Overseas|
    +----------------------------------+
    | 1st Quarter  |   0.20M |   1.50M |
    | 2nd Quarter  |   0.26M |   1.39M |
    | 3rd Quarter  |   0.40M |   4.21M |
    | 4th Quarter  |   0.30M |   1.68M |
    +==================================+
    | FY3/22 Cml.  |   1.16M |   8.78M |
    | FY3/22 YoY%  | -10.77% |  -5.79% |
    | Area/WW FY % |  11.67% |  88.33% |
    +----------------------------------+
    | Global       | WW FY   | WW LTD  |
    +----------------------------------+
    | 1st Quarter  |   1.69M |  37.08M |
    | 2nd Quarter  |   1.65M |  38.74M |
    | 3rd Quarter  |   4.62M |  43.35M |
    | 4th Quarter  |   1.98M |  45.33M |
    +==================================+
    | FY3/22 Cml.  |   9.94M |  45.33M |
    | FY3/22 YoY%  |  -6.40% | +28.09% |
    | WW FY/LTD %  |  21.93% |  78.07% |
    +----------------------------------+
    +------------------------------------------+
    | Mario Party Superstars         | Rank 4  |
    +------------------------------------------+
    | Area         |   Japan | Overseas|
    +----------------------------------+
    | 3rd Quarter  |   1.13M |   4.30M |
    | 4th Quarter  |   0.20M |   1.25M |
    +==================================+
    | FY3/22 Cml.  |   1.33M |   5.55M |
    | FY3/22 YoY%  |    New! |    New! |
    | Area/WW FY % |  19.33% |  80.67% |
    +----------------------------------+
    | Global       | WW FY   | WW LTD  |
    +----------------------------------+
    | 3rd Quarter  |   5.43M |   5.43M |
    | 4th Quarter  |   1.45M |   6.88M |
    +==================================+
    | FY3/22 Cml.  |   6.88M |   6.88M |
    | FY3/22 YoY%  |    New! |    New! |
    | WW FY/LTD %  | 100.00% |   0.00% |
    +----------------------------------+
    +------------------------------------------+
    | Animal Crossing: New Horizons  | Rank 5  |
    +------------------------------------------+
    | Area         |   Japan | Overseas|
    +----------------------------------+
    | 1st Quarter  |   0.13M |   1.13M |
    | 2nd Quarter  |   0.12M |   0.84M |
    | 3rd Quarter  |   0.45M |   2.33M |
    | 4th Quarter  |   0.12M |   0.89M |
    +==================================+
    | FY3/22 Cml.  |   0.82M |   5.19M |
    | FY3/22 YoY%  | -85.17% | -66.12% |
    | Area/WW FY % |  13.64% |  86.36% |
    +----------------------------------+
    | Global       | WW FY   | WW LTD  |
    +----------------------------------+
    | 1st Quarter  |   1.26M |  33.89M |
    | 2nd Quarter  |   0.96M |  34.85M |
    | 3rd Quarter  |   2.77M |  37.62M |
    | 4th Quarter  |   1.02M |  38.64M |
    +==================================+
    | FY3/22 Cml.  |   6.01M |  38.64M |
    | FY3/22 YoY%  | -71.18% | +18.42% |
    | WW FY/LTD %  |  15.55% |  84.45% |
    +----------------------------------+
    +------------------------------------------+
    | Super Smash Bros. Ultimate     | Rank 6  |
    +------------------------------------------+
    | Area         |   Japan | Overseas|
    +----------------------------------+
    | 2nd Quarter  |   0.33M |   1.53M |
    | 3rd Quarter  |   0.44M |   1.26M |
    | 4th Quarter  |   0.19M |   0.57M |
    +==================================+
    | FY3/22 Cml.  |   0.96M |   3.36M |
    | FY3/22 YoY%  |  -2.04% | -16.63% |
    | Area/WW FY % |  22.17% |  77.60% |
    +----------------------------------+
    | Global       | WW FY   | WW LTD  |
    +----------------------------------+
    | 2nd Quarter  |   1.86M |  25.71M |
    | 3rd Quarter  |   1.70M |  27.40M |
    | 4th Quarter  |   0.77M |  28.17M |
    +==================================+
    | FY3/22 Cml.  |   4.33M |  28.17M |
    | FY3/22 YoY%  | -13.57% | +18.16% |
    | WW FY/LTD %  |  15.37% |  84.63% |
    +----------------------------------+
    +------------------------------------------+
    | The Legend of Zelda: Breath of |         |
    | the Wild                       | Rank 7  |
    +------------------------------------------+
    | Area         |   Japan | Overseas|
    +----------------------------------+
    | 2nd Quarter  |   0.16M |   1.70M |
    | 3rd Quarter  |   0.24M |   1.41M |
    | 4th Quarter  |   0.15M |   0.61M |
    +==================================+
    | FY3/22 Cml.  |   0.55M |   3.72M |
    | FY3/22 YoY%  | +12.24% | -14.87% |
    | Area/WW FY % |  12.85% |  86.92% |
    +----------------------------------+
    | Global       | WW FY   | WW LTD  |
    +----------------------------------+
    | 2nd Quarter  |   1.85M |  24.13M |
    | 3rd Quarter  |   1.67M |  25.80M |
    | 4th Quarter  |   0.76M |  26.55M |
    +==================================+
    | FY3/22 Cml.  |   4.28M |  26.55M |
    | FY3/22 YoY%  | -11.93% | +19.17% |
    | WW FY/LTD %  |  16.12% |  83.88% |
    +----------------------------------+
    +------------------------------------------+
    | Ring Fit Adventure             | Rank 8  |
    +------------------------------------------+
    | Area         |   Japan | Overseas|
    +----------------------------------+
    | 1st Quarter  |   0.25M |   0.89M |
    | 2nd Quarter  |   0.27M |   0.69M |
    | 3rd Quarter  |   0.28M |   1.04M |
    | 4th Quarter  |   0.10M |   0.46M |
    +==================================+
    | FY3/22 Cml.  |   0.90M |   3.08M |
    | FY3/22 YoY%  | -53.12% | -43.59% |
    | Area/WW FY % |  22.61% |  77.39% |
    +----------------------------------+
    | Global       | WW FY   | WW LTD  |
    +----------------------------------+
    | 1st Quarter  |   1.15M |  11.26M |
    | 2nd Quarter  |   0.95M |  12.21M |
    | 3rd Quarter  |   1.32M |  13.53M |
    | 4th Quarter  |   0.56M |  14.09M |
    +==================================+
    | FY3/22 Cml.  |   3.98M |  14.09M |
    | FY3/22 YoY%  | -46.07% | +39.37% |
    | WW FY/LTD %  |  28.25% |  71.75% |
    +----------------------------------+
    +------------------------------------------+
    | The Legend of Zelda: Skyward   |         |
    | Sword HD                       | Rank 9  |
    +------------------------------------------+
    | Area         |   Japan | Overseas|
    +----------------------------------+
    | 2nd Quarter  |   0.42M |   3.18M |
    | 3rd Quarter  |   0.02M |   0.22M |
    | 4th Quarter  |   0.01M |   0.06M |
    +==================================+
    | FY3/22 Cml.  |   0.45M |   3.46M |
    | FY3/22 YoY%  |    New! |    New! |
    | Area/WW FY % |  11.51% |  88.49% |
    +----------------------------------+
    | Global       | WW FY   | WW LTD  |
    +----------------------------------+
    | 2nd Quarter  |   3.60M |   3.60M |
    | 3rd Quarter  |   0.25M |   3.85M |
    | 4th Quarter  |   0.06M |   3.91M |
    +==================================+
    | FY3/22 Cml.  |   3.91M |   3.91M |
    | FY3/22 YoY%  |    New! |    New! |
    | WW FY/LTD %  | 100.00% |   0.00% |
    +----------------------------------+
    +------------------------------------------+
    | Super Mario 3D World +         |         |
    | Boswer's Fury                  | Rank 10 |
    +------------------------------------------+
    | Area         |   Japan | Overseas|
    +----------------------------------+
    | 1st Quarter  |   0.21M |   0.87M |
    | 2nd Quarter  |   0.15M |   0.63M |
    | 3rd Quarter  |   0.18M |   1.22M |
    | 4th Quarter  |   0.04M |   0.53M |
    +==================================+
    | FY3/22 Cml.  |   0.58M |   3.25M |
    | FY3/22 YoY%  | -32.56% | -31.29% |
    | Area/WW FY % |  15.10% |  84.64% |
    +----------------------------------+
    | Global       | WW FY   | WW LTD  |
    +----------------------------------+
    | 1st Quarter  |   1.09M |   6.68M |
    | 2nd Quarter  |   0.77M |   7.45M |
    | 3rd Quarter  |   1.40M |   8.85M |
    | 4th Quarter  |   0.58M |   9.43M |
    +==================================+
    | FY3/22 Cml.  |   3.84M |   9.43M |
    | FY3/22 YoY%  | -31.31% | +68.69% |
    | WW FY/LTD %  |  40.72% |  59.28% |
    +----------------------------------+
    +------------------------------------------+
    | Pokémon Sword / Pokémon Shield | Rank 11 |
    +------------------------------------------+
    | Area         |   Japan | Overseas|
    +----------------------------------+
    | 2nd Quarter  |   0.19M |   1.35M |
    | 3rd Quarter  |   0.23M |   1.03M |
    | 4th Quarter  |   0.08M |   0.30M |
    +==================================+
    | FY3/22 Cml.  |   0.50M |   2.68M |
    | FY3/22 YoY%  | -19.35% | -13.83% |
    | Area/WW FY % |  15.72% |  84.28% |
    +----------------------------------+
    | Global       | WW FY   | WW LTD  |
    +----------------------------------+
    | 2nd Quarter  |   1.54M |  22.64M |
    | 3rd Quarter  |   1.26M |  23.90M |
    | 4th Quarter  |   0.38M |  24.27M |
    +==================================+
    | FY3/22 Cml.  |   3.18M |  24.27M |
    | FY3/22 YoY%  | -14.75% | +15.02% |
    | WW FY/LTD %  |  13.10% |  86.90% |
    +----------------------------------+
    +------------------------------------------+
    | Super Mario Party              | Rank 12 |
    +------------------------------------------+
    | Area         |   Japan | Overseas|
    +----------------------------------+
    | 2nd Quarter  |   0.22M |   1.47M |
    | 3rd Quarter  |   0.07M |   0.83M |
    | 4th Quarter  |   0.04M |   0.36M |
    +==================================+
    | FY3/22 Cml.  |   0.33M |   2.66M |
    | FY3/22 YoY%  | -45.90% | -34.80% |
    | Area/WW FY % |  11.04% |  88.96% |
    +----------------------------------+
    | Global       | WW FY   | WW LTD  |
    +----------------------------------+
    | 2nd Quarter  |   1.68M |  16.48M |
    | 3rd Quarter  |   0.91M |  17.39M |
    | 4th Quarter  |   0.40M |  17.78M |
    +==================================+
    | FY3/22 Cml.  |   2.99M |  17.78M |
    | FY3/22 YoY%  | -36.25% | +20.22% |
    | WW FY/LTD %  |  16.82% |  83.18% |
    +----------------------------------+
    +------------------------------------------+
    | Metroid Dread                  | Rank 13 |
    +------------------------------------------+
    | Area         |   Japan | Overseas|
    +----------------------------------+
    | 3rd Quarter  |   0.26M |   2.48M |
    | 4th Quarter  |   0.01M |   0.15M |
    +==================================+
    | FY3/22 Cml.  |   0.27M |   2.63M |
    | FY3/22 YoY%  |    New! |    New! |
    | Area/WW FY % |   9.31% |  90.69% |
    +----------------------------------+
    | Global       | WW FY   | WW LTD  |
    +----------------------------------+
    | 3rd Quarter  |   2.74M |   2.74M |
    | 4th Quarter  |   0.16M |   2.90M |
    +==================================+
    | FY3/22 Cml.  |   2.90M |   2.90M |
    | FY3/22 YoY%  |    New! |    New! |
    | WW FY/LTD %  | 100.00% |   0.00% |
    +----------------------------------+
    +------------------------------------------+
    | New Super Mario Bros. U Deluxe | Rank 14 |
    +------------------------------------------+
    | Area         |   Japan | Overseas|
    +----------------------------------+
    | 2nd Quarter  |   0.08M |   0.96M |
    | 3rd Quarter  |   0.06M |   1.17M |
    | 4th Quarter  |   0.04M |   0.55M |
    +==================================+
    | FY3/22 Cml.  |   0.18M |   2.68M |
    | FY3/22 YoY%  | -37.93% | -24.51% |
    | Area/WW FY % |   6.29% |  93.71% |
    +----------------------------------+
    | Global       | WW FY   | WW LTD  |
    +----------------------------------+
    | 2nd Quarter  |   1.03M |  11.48M |
    | 3rd Quarter  |   1.25M |  12.72M |
    | 4th Quarter  |   0.58M |  13.31M |
    +==================================+
    | FY3/22 Cml.  |   2.86M |  13.31M |
    | FY3/22 YoY%  | -25.52% | +27.49% |
    | WW FY/LTD %  |  21.49% |  78.51% |
    +----------------------------------+
    +------------------------------------------+
    | Super Mario Odyssey            | Rank 15 |
    +------------------------------------------+
    | Area         |   Japan | Overseas|
    +----------------------------------+
    | 2nd Quarter  |   0.08M |   1.03M |
    | 3rd Quarter  |   0.07M |   1.01M |
    | 4th Quarter  |   0.04M |   0.44M |
    +==================================+
    | FY3/22 Cml.  |   0.19M |   2.48M |
    | FY3/22 YoY%  |  -5.00% | -22.98% |
    | Area/WW FY % |   7.12% |  92.88% |
    +----------------------------------+
    | Global       | WW FY   | WW LTD  |
    +----------------------------------+
    | 2nd Quarter  |   1.12M |  21.95M |
    | 3rd Quarter  |   1.07M |  23.02M |
    | 4th Quarter  |   0.48M |  23.50M |
    +==================================+
    | FY3/22 Cml.  |   2.67M |  23.50M |
    | FY3/22 YoY%  | -21.93% | +12.82% |
    | WW FY/LTD %  |  11.36% |  88.64% |
    +----------------------------------+
    +------------------------------------------+
    | Kirby and the Forgotten Land   | Rank 16 |
    +------------------------------------------+
    | Area         |   Japan | Overseas|
    +----------------------------------+
    | 4th Quarter  |   0.85M |   1.80M |
    +==================================+
    | FY3/22 Cml.  |   0.85M |   1.80M |
    | FY3/22 YoY%  |    New! |    New! |
    | Area/WW FY % |  32.08% |  67.92% |
    +----------------------------------+
    | Global       | WW FY   | WW LTD  |
    +----------------------------------+
    | 4th Quarter  |   2.65M |   2.65M |
    +==================================+
    | FY3/22 Cml.  |   2.65M |   2.65M |
    | FY3/22 YoY%  |    New! |    New! |
    | WW FY/LTD %  | 100.00% |   0.00% |
    +----------------------------------+
    +------------------------------------------+
    | New Pokémon Snap               | Rank 17 |
    +------------------------------------------+
    | Area         |   Japan | Overseas|
    +----------------------------------+
    | 1st Quarter  |   0.00M |   2.07M |
    | 2nd Quarter  |   0.00M |   0.12M |
    | 3rd Quarter  |   0.00M |   0.17M |
    | 4th Quarter  |   0.00M |   0.04M |
    +==================================+
    | FY3/22 Cml.  |   0.00M |   2.40M |
    | FY3/22 YoY%  |    New! |    New! |
    | Area/WW FY % |   0.00% | 100.00% |
    +----------------------------------+
    | Global       | WW FY   | WW LTD  |
    +----------------------------------+
    | 1st Quarter  |   2.07M |   2.07M |
    | 2nd Quarter  |   0.12M |   2.19M |
    | 3rd Quarter  |   0.17M |   2.36M |
    | 4th Quarter  |   0.04M |   2.40M |
    +==================================+
    | FY3/22 Cml.  |   2.40M |   2.40M |
    | FY3/22 YoY%  |    New! |    New! |
    | WW FY/LTD %  | 100.00% |   0.00% |
    +----------------------------------+
    +------------------------------------------+
    | Mario Golf: Super Rush         | Rank 18 |
    +------------------------------------------+
    | Area         |   Japan | Overseas|
    +----------------------------------+
    | 1st Quarter  |   0.21M |   1.13M |
    | 2nd Quarter  |   0.08M |   0.52M |
    | 3rd Quarter  |   0.01M |   0.31M |
    | 4th Quarter  |   0.01M |   0.07M |
    +==================================+
    | FY3/22 Cml.  |   0.31M |   2.03M |
    | FY3/22 YoY%  |    New! |    New! |
    | Area/WW FY % |  13.19% |  86.38% |
    +----------------------------------+
    | Global       | WW FY   | WW LTD  |
    +----------------------------------+
    | 1st Quarter  |   1.34M |   1.34M |
    | 2nd Quarter  |   0.60M |   1.94M |
    | 3rd Quarter  |   0.32M |   2.26M |
    | 4th Quarter  |   0.09M |   2.35M |
    +==================================+
    | FY3/22 Cml.  |   2.35M |   2.35M |
    | FY3/22 YoY%  |    New! |    New! |
    | WW FY/LTD %  | 100.00% |   0.00% |
    +----------------------------------+
    +------------------------------------------+
    | Luigi's Mansion 3              | Rank 19 |
    +------------------------------------------+
    | Area         |   Japan | Overseas|
    +----------------------------------+
    | 3rd Quarter  |   0.09M |   1.36M |
    | 4th Quarter  |   0.04M |   0.35M |
    +==================================+
    | FY3/22 Cml.  |   0.13M |   1.71M |
    | FY3/22 YoY%  | -23.53% | -44.66% |
    | Area/WW FY % |   7.10% |  93.44% |
    +----------------------------------+
    | Global       | WW FY   | WW LTD  |
    +----------------------------------+
    | 3rd Quarter  |   1.45M |  11.04M |
    | 4th Quarter  |   0.38M |  11.43M |
    +==================================+
    | FY3/22 Cml.  |   1.83M |  11.43M |
    | FY3/22 YoY%  | -43.87% | +19.19% |
    | WW FY/LTD %  |  16.01% |  83.99% |
    +----------------------------------+
    +------------------------------------------+
    | Miitopia                       | Rank 20 |
    +------------------------------------------+
    | Area         |   Japan | Overseas|
    +----------------------------------+
    | 1st Quarter  |   0.26M |   0.78M |
    | 2nd Quarter  |   0.09M |   0.24M |
    | 3rd Quarter  |   0.03M |   0.23M |
    | 4th Quarter  |   0.01M |   0.04M |
    +==================================+
    | FY3/22 Cml.  |   0.39M |   1.29M |
    | FY3/22 YoY%  |    New! |    New! |
    | Area/WW FY % |  23.21% |  76.79% |
    +----------------------------------+
    | Global       | WW FY   | WW LTD  |
    +----------------------------------+
    | 1st Quarter  |   1.04M |   1.04M |
    | 2nd Quarter  |   0.33M |   1.37M |
    | 3rd Quarter  |   0.26M |   1.63M |
    | 4th Quarter  |   0.05M |   1.68M |
    +==================================+
    | FY3/22 Cml.  |   1.68M |   1.68M |
    | FY3/22 YoY%  |    New! |    New! |
    | WW FY/LTD %  | 100.00% |   0.00% |
    +----------------------------------+
    +------------------------------------------+
    | Big Brain Academy: Brain vs    |         |
    | Brain                          | Rank 21 |
    +------------------------------------------+
    | Area         |   Japan | Overseas|
    +----------------------------------+
    | 3rd Quarter  |   0.38M |   0.90M |
    | 4th Quarter  |   0.07M |   0.24M |
    +==================================+
    | FY3/22 Cml.  |   0.45M |   1.14M |
    | FY3/22 YoY%  |    New! |    New! |
    | Area/WW FY % |  28.30% |  71.70% |
    +----------------------------------+
    | Global       | WW FY   | WW LTD  |
    +----------------------------------+
    | 3rd Quarter  |   1.28M |   1.28M |
    | 4th Quarter  |   0.31M |   1.59M |
    +==================================+
    | FY3/22 Cml.  |   1.59M |   1.59M |
    | FY3/22 YoY%  |    New! |    New! |
    | WW FY/LTD %  | 100.00% |   0.00% |
    +----------------------------------+
    +------------------------------------------+
    | WarioWare: Get It Together!    | Rank 22 |
    +------------------------------------------+
    | Area         |   Japan | Overseas|
    +----------------------------------+
    | 3rd Quarter  |   0.30M |   0.94M |
    | 4th Quarter  |   0.01M |   0.02M |
    +==================================+
    | FY3/22 Cml.  |   0.31M |   0.96M |
    | FY3/22 YoY%  |    New! |    New! |
    | Area/WW FY % |  24.41% |  75.59% |
    +----------------------------------+
    | Global       | WW FY   | WW LTD  |
    +----------------------------------+
    | 3rd Quarter  |   1.24M |   1.24M |
    | 4th Quarter  |   0.03M |   1.27M |
    +==================================+
    | FY3/22 Cml.  |   1.27M |   1.27M |
    | FY3/22 YoY%  |    New! |    New! |
    | WW FY/LTD %  | 100.00% |   0.00% |
    +----------------------------------+
    +------------------------------------------+
    | Pokémon: Let's Go, Pikachu! /  |         |
    | Pokémon: Let's Go, Eevee!      | Rank 23 |
    +------------------------------------------+
    | Area         |   Japan | Overseas|
    +----------------------------------+
    | 3rd Quarter  |   0.03M |   1.02M |
    | 4th Quarter  |   0.00M |   0.19M |
    +==================================+
    | FY3/22 Cml.  |   0.03M |   1.21M |
    | FY3/22 YoY%  | -62.50% |  -1.63% |
    | Area/WW FY % |   2.40% |  96.80% |
    +----------------------------------+
    | Global       | WW FY   | WW LTD  |
    +----------------------------------+
    | 3rd Quarter  |   1.05M |  14.33M |
    | 4th Quarter  |   0.20M |  14.53M |
    +==================================+
    | FY3/22 Cml.  |   1.25M |  14.53M |
    | FY3/22 YoY%  |  -4.58% |  +9.41% |
    | WW FY/LTD %  |   8.60% |  91.40% |
    +----------------------------------+
    +------------------------------------------+
    | Splatoon 2                     | Rank 24 |
    +------------------------------------------+
    | Area         |   Japan | Overseas|
    +----------------------------------+
    | 4th Quarter  |   0.42M |   0.67M |
    +==================================+
    | FY3/22 Cml.  |   0.42M |   0.67M |
    | FY3/22 YoY%  | -47.50% | -47.66% |
    | Area/WW FY % |  38.53% |  61.47% |
    +----------------------------------+
    | Global       | WW FY   | WW LTD  |
    +----------------------------------+
    | 4th Quarter  |   1.09M |  13.30M |
    +==================================+
    | FY3/22 Cml.  |   1.09M |  13.30M |
    | FY3/22 YoY%  | -47.60% |  +8.93% |
    | WW FY/LTD %  |   8.20% |  91.80% |
    +----------------------------------+
    +------------------------------------------+
    | Clubhouse Games: 51 Worldwide  |         |
    | Classics                       | Rank 25 |
    +------------------------------------------+
    | Area         |   Japan | Overseas|
    +----------------------------------+
    | 4th Quarter  |   0.52M |   0.56M |
    +==================================+
    | FY3/22 Cml.  |   0.52M |   0.56M |
    | FY3/22 YoY%  | -56.67% | -70.98% |
    | Area/WW FY % |  48.15% |  51.85% |
    +----------------------------------+
    | Global       | WW FY   | WW LTD  |
    +----------------------------------+
    | 4th Quarter  |   1.08M |   4.22M |
    +==================================+
    | FY3/22 Cml.  |   1.08M |   4.22M |
    | FY3/22 YoY%  | -65.61% | +34.39% |
    | WW FY/LTD %  |  25.59% |  74.41% |
    +----------------------------------+
    +------------------------------------------+
    | Game Builder Garage            | Rank 26 |
    +------------------------------------------+
    | Area         |   Japan | Overseas|
    +----------------------------------+
    | 3rd Quarter  |   0.44M |   0.58M |
    | 4th Quarter  |   0.01M |   0.03M |
    +==================================+
    | FY3/22 Cml.  |   0.45M |   0.61M |
    | FY3/22 YoY%  |    New! |    New! |
    | Area/WW FY % |  42.45% |  57.55% |
    +----------------------------------+
    | Global       | WW FY   | WW LTD  |
    +----------------------------------+
    | 3rd Quarter  |   1.01M |   1.01M |
    | 4th Quarter  |   0.05M |   1.06M |
    +==================================+
    | FY3/22 Cml.  |   1.06M |   1.06M |
    | FY3/22 YoY%  |    New! |    New! |
    | WW FY/LTD %  | 100.00% |   0.00% |
    +----------------------------------+
    ###
    +--------------------------------+
    | Nintendo Switch FY             |
    | Million-Seller Titles          |
    +--------------------------------+
    +--------------------------------+
    | Japan                          |
    +--------------------------------+
    | FY3/22 Cml. | Titles |   Units |
    +--------------------------------+
    | New!        |     12 |  12.12M |
    | Recurring   |     14 |   7.27M |
    +--------------------------------+
    | Total       |     26 |  19.39M |
    +--------------------------------+
    | Percentages | Titles |   Units |
    +--------------------------------+
    | New!        | 46.15% |  62.51% |
    | Recurring   | 53.85% |  37.49% |
    +--------------------------------+
    +--------------------------------+
    | Overseas                       |
    +--------------------------------+
    | FY3/22 Cml. | Titles |   Units |
    +--------------------------------+
    | New!        |     12 |  41.84M |
    | Recurring   |     14 |  42.03M |
    +--------------------------------+
    | Total       |     26 |  83.87M |
    +--------------------------------+
    | Percentages | Titles |   Units |
    +--------------------------------+
    | New!        | 46.15% |  49.89% |
    | Recurring   | 53.85% |  50.11% |
    +--------------------------------+
    +--------------------------------+
    | Global FY                      |
    +--------------------------------+
    | FY3/22 Cml. | Titles |   Units |
    +--------------------------------+
    | New!        |     12 |  53.98M |
    | Recurring   |     14 |  49.33M |
    +--------------------------------+
    | Total       |     26 | 103.31M |
    +--------------------------------+
    | Percentages | Titles |   Units |
    +--------------------------------+
    | New!        | 46.15% |  52.25% |
    | Recurring   | 53.85% |  47.75% |
    +--------------------------------+
    +--------------------------------+
    | Global LTD                     |
    +--------------------------------+
    | FY3/22 Cml. | Titles |   Units |
    +--------------------------------+
    | New!        |     12 |  53.98M |
    | Recurring   |     14 | 284.55M |
    +--------------------------------+
    | Total       |     26 | 338.53M |
    +--------------------------------+
    | Percentages | Titles |   Units |
    +--------------------------------+
    | New!        | 46.15% |  15.95% |
    | Recurring   | 53.85% |  84.05% |
    +--------------------------------+
    ###
    `;

    const keyIndicators = `
    +------------------------------+
    | Nintendo Co., Ltd.| FY3/2022 |
    +------------------------------+
    | Key/Digital Sales Indicators |
    +------------------------------+
    +------------------------------+
    | Proportion of overseas sales |
    +------------------------------+
    | 1st Quarter       |    77.9% |
    | 2nd Quarter       |    78.7% |
    | 3rd Quarter       |    79.6% |
    | 4th Quarter       |    78.2% |
    +==============================+
    | 1st Half          |    78.3% |
    | 1st Three Quarters|    79.0% |
    | FY3/22 Cumulative |    78.8% |
    +------------------------------+
    (※ Proportion of overseas (outside of Japan)
    sales to total sales)
    +------------------------------+
    | Proportion of hardware sales |
    +------------------------------+
    | 1st Quarter       |    47.6% |
    | 2nd Quarter       |    45.2% |
    | 3rd Quarter       |    53.9% |
    | 4th Quarter       |    41.5% |
    +==============================+
    | 1st Half          |    46.5% |
    | 1st Three Quarters|    50.4% |
    | FY3/22 Cumulative |    48.4% |
    +------------------------------+
    (※ Proportion of hardware
     (including accessories) sales
    to total dedicated video game platform sales)
    +------------------------------+
    | Proportion of first party    |
    | software sales               |
    +------------------------------+
    | 1st Quarter       |    72.3% |
    | 2nd Quarter       |    68.9% |
    | 3rd Quarter       |    84.1% |
    | 4th Quarter       |    82.3% |
    +==============================+
    | 1st Half          |    70.6% |
    | 1st Three Quarters|    77.7% |
    | FY3/22 Cumulative |    78.8% |
    +------------------------------+
    (※ Proportion of first-party software sales
    to total dedicated video game software sales)
    +------------------------------+
    | Digital Sales                |
    +------------------------------+
    | 1st Quarter       |   ¥75.9B |
    | 2nd Quarter       |   ¥68.2B |
    | 3rd Quarter       |  ¥110.8B |
    | 4th Quarter       |  ¥104.6B |
    +==============================+
    | 1st Half          |  ¥144.2B |
    | 1st Three Quarters|  ¥255.0B |
    | FY3/22 Cumulative |  ¥359.6B |
    +------------------------------+
    ("※ Digital sales include a) downloadable
    versions of packaged software,
    b) download-only software,
    c) add-on content and
    d) Nintendo Switch Online, etc.
    ＊"Downloadable versions of packaged software"
    indicates thedownloadable version of
    software that is offered both physically
    and digitally.")
    +------------------------------+
    | Proportion of Digital Sales  |
    +------------------------------+
    | 1st Quarter       |    46.9% |
    | 2nd Quarter       |    43.2% |
    | 3rd Quarter       |    35.3% |
    | 4th Quarter       |    49.5% |
    +==============================+
    | 1st Half          |    45.1% |
    | 1st Three Quarters|    40.2% |
    | FY3/22 Cumulative |    42.6% |
    +------------------------------+
    (※ Proportion of digital sales to total
    dedicated video game software sales )
    +-------------------------------------+
    | Proportion of downloadable versions |
    | of Packaged Software Sales          |
    +-------------------------------------+
    | 1st Quarter       |           52.1% |
    | 2nd Quarter       |           49.1% |
    | 3rd Quarter       |           56.3% |
    | 4th Quarter       |           63.9% |
    +=====================================+
    | 1st Half          |           50.7% |
    | 1st Three Quarters|           53.1% |
    | FY3/22 Cumulative |           56.2% |
    +-------------------------------------+
    (※ Proportion of downloadable versions of
    packaged software sales to total digital sales
    as indicated above: a/(a+b+c+d) )
    `;

    const consolidatedOperatingResults = printEarnings;

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
            <div className="chart">
            {(checked === false && barChecked === false)
                ? (
                    <Line
                    datasetIdKey="switchTopSellingTitles"
                    data={{
                        labels: ["Q4 Last FY" ,"1st Quarter", "2nd Quarter", "3rd Quarter", "4th Quarter",],//array x-axis
                        datasets: [
                            {
                                data: Object.values(switchTopSellingTitles[activePage-1]).slice(1),
                                label: switchTopSellingTitles[activePage-1].title,
                                borderColor: state.colour.split("").slice(0, -3).reduce((acc: string, curr: string) => {
                                    return (curr === ".")
                                            ? acc + "1)"
                                            : acc + curr;
                                }),

                            },
                        ], 
                    }}

                    options={{
                        scales: {
                            y: {
                                title: {
                                  display: true,
                                  text: "Units at Life-To-Date (M = 10^6 or M = million)",
                                },
                              },
                              x: {
                                  title: {
                                      display: true,
                                      text: "Q4 FY3/21 and Quarters for Fiscal Year Ending March 2022",
                                    },
                                },
                            }
                        }}
                     />
                  )
                : (checked === true && barChecked === false) ? (
                     
                <Line 
                    datasetIdKey="switchTopSellingTitles"
                    data={{
                        labels: ["Q4 Last FY" ,"1st Quarter", "2nd Quarter", "3rd Quarter", "4th Quarter",],//array x-axis
                        datasets: [
                            {
                                data: Object.values(switchTopSellingTitles[activePage-1]).slice(1),
                                label: switchTopSellingTitles[activePage-1].title,
                                borderColor: "indigo",
                                backgroundColor: "red",

                            },
                            {
                                data: Object.values(switchTopSellingTitles[secondDataRef-1]).slice(1),
                                label: switchTopSellingTitles[secondDataRef-1].title,
                                borderColor: "orange",
                                backgroundColor: "black",
                            },
                        ], 
                    }}

                    options={{
                        scales: {
                            y: {
                                title: {
                                  display: true,
                                  text: "Units at Life-To-Date (M = 10^6 or M = million)",
                                },
                              },
                              x: {
                                  title: {
                                      display: true,
                                      text: "Q4 FY3/21 and Quarters for Fiscal Year Ending March 2022",
                                    },
                                },
                            }
                        }}
                     />
                )
                : (checked === false && barChecked === true) ? (
                    <Bar 
                    datasetIdKey="switchTopSellingTitles"
                    data={{
                        labels: ["Q4 Last FY" ,"1st Quarter", "2nd Quarter", "3rd Quarter", "4th Quarter",],//array x-axis
                        datasets: [
                            {
                                data: Object.values(switchTopSellingTitles[activePage-1]).slice(1),
                                label: switchTopSellingTitles[activePage-1].title,
                                backgroundColor: state.colour.split("").slice(0, -3).reduce((acc: string, curr: string) => {
                                    return (curr === ".")
                                            ? acc + ".80)"
                                            : acc + curr;
                                }),
                                borderColor: "black",
                                borderWidth: 2,

                            },
                        ], 
                    }}

                    options={{
                        scales: {
                            y: {
                                title: {
                                  display: true,
                                  text: "Units at Life-To-Date (M = 10^6 or M = million)",
                                },
                              },
                              x: {
                                  title: {
                                      display: true,
                                      text: "Q4 FY3/21 and Quarters for Fiscal Year Ending March 2022",
                                    },
                                },
                            }
                        }}
                     />
                  )
                : (
                    <Bar 
                    datasetIdKey="switchTopSellingTitles"
                    data={{
                        labels: ["Q4 Last FY" ,"1st Quarter", "2nd Quarter", "3rd Quarter", "4th Quarter",],//array x-axis
                        datasets: [
                            {
                                data: Object.values(switchTopSellingTitles[activePage-1]).slice(1),
                                label: switchTopSellingTitles[activePage-1].title,
                                borderColor: "black",
                                backgroundColor: "indigo",
                                borderWidth: 2,
                            },
                            {
                                data: Object.values(switchTopSellingTitles[secondDataRef-1]).slice(1),
                                label: switchTopSellingTitles[secondDataRef-1].title,
                                borderColor: "black",
                                backgroundColor: "orange",
                                borderWidth: 2,
                            },
                        ], 
                    }}

                    options={{
                        scales: {
                            y: {
                                title: {
                                  display: true,
                                  text: "Units at Life-To-Date (M = 10^6 or M = million)",
                                },
                              },
                              x: {
                                  title: {
                                      display: true,
                                      text: "Q4 FY3/21 and Quarters for Fiscal Year Ending March 2022",
                                    },
                                },
                            }
                        }}
                     />
                  )}
                <Group mt="md" position="center">
                   <Pagination page={activePage} onChange={setPage} total={switchTopSellingTitles.length} color="teal" size="sm" radius="md" />
                   <Switch onLabel="BAR" offLabel="BAR" size="md" checked={barChecked} onChange={(event) => setBarChecked(event.currentTarget.checked)} />
                   <Switch onLabel="ON" offLabel="OFF" size="md" checked={checked} onChange={(event) => setChecked(event.currentTarget.checked)} />
                   {(checked === true) 
                        ? <Pagination mr="xl" page={secondDataRef} onChange={setSecondDataRef} total={switchTopSellingTitles.length} color="red" size="sm" radius="md" />
                        : null} 
                </Group>
            </div>
            <Space h="xl" />
            <Space h="xl" />
            <Space h="xl" />
            <Space h="xl" />
        </div>
        
    );
}
