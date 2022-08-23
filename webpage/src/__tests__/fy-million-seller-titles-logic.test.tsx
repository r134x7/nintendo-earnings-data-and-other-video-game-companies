import { Header, Titles } from "../utils/fy-million-seller-titles-logic";



const title1: Titles[] = [
    {
        title: " Mario Kart 8 Deluxe ",
        period: " 1st Quarter  ",
        region: "   Japan ",
        value: 20
    },
    {
        title: " Mario Kart 8 Deluxe ",
        period: " 2nd Quarter  ",
        region: "   Japan ",
        value: 46
    },
    {
        title: " Mario Kart 8 Deluxe ",
        period: " 3rd Quarter  ",
        region: "   Japan ",
        value: 86
    },
    {
        title: " Mario Kart 8 Deluxe ",
        period: " 4th Quarter  ",
        region: "   Japan ",
        value: 116
    },
    {
        title: " Mario Kart 8 Deluxe ",
        period: " 1st Quarter  ",
        region: " Overseas",
        value: 150
    },
    {
        title: " Mario Kart 8 Deluxe ",
        period: " 2nd Quarter  ",
        region: " Overseas",
        value: 289
    },
    {
        title: " Mario Kart 8 Deluxe ",
        period: " 3rd Quarter  ",
        region: " Overseas",
        value: 710
    },
    {
        title: " Mario Kart 8 Deluxe ",
        period: " 4th Quarter  ",
        region: " Overseas",
        value: 878
    },
    {
        title: " Mario Kart 8 Deluxe ",
        period: " 1st Quarter  ",
        region: " WW FY   ",
        value: 169
    },
    {
        title: " Mario Kart 8 Deluxe ",
        period: " 2nd Quarter  ",
        region: " WW FY   ",
        value: 334
    },
    {
        title: " Mario Kart 8 Deluxe ",
        period: " 3rd Quarter  ",
        region: " WW FY   ",
        value: 796
    },
    {
        title: " Mario Kart 8 Deluxe ",
        period: " 4th Quarter  ",
        region: " WW FY   ",
        value: 994
    },
    {
        title: " Mario Kart 8 Deluxe ",
        period: " 1st Quarter  ",
        region: " WW LTD  ",
        value: 3708
    },
    {
        title: " Mario Kart 8 Deluxe ",
        period: " 2nd Quarter  ",
        region: " WW LTD  ",
        value: 3874
    },
    {
        title: " Mario Kart 8 Deluxe ",
        period: " 3rd Quarter  ",
        region: " WW LTD  ",
        value: 4335
    },
    {
        title: " Mario Kart 8 Deluxe ",
        period: " 4th Quarter  ",
        region: " WW LTD  ",
        value: 4533
    },
    {
        title: " Mario Kart 8 Deluxe ",
        period: " Last FY Total ",
        region: "   Japan ",
        value: 130
    },
    {
        title: " Mario Kart 8 Deluxe ",
        period: " Last FY Total ",
        region: " Overseas",
        value: 932
    },
    {
        title: " Mario Kart 8 Deluxe ",
        period: " Last FY Total ",
        region: " WW FY   ",
        value: 1062
    },
    {
        title: " Mario Kart 8 Deluxe ",
        period: " Last FY Total ",
        region: " WW LTD  ",
        value: 2477 
    },
]


const fyMillionSellersToMatch = `
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
+----------------------------------+`;