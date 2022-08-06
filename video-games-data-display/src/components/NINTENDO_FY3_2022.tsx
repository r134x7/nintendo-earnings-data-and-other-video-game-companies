import { useState, useEffect } from "react";
import { Code, SegmentedControl } from "@mantine/core";

export default function NINTENDO_FY3_22() {

    // what should be done is render different data depending on what button is pressed
    // testing code output...

    const [data, setData] = useState("");
    const [value, setValue] = useState("");

    // console.log(value);
    

    useEffect(() => {
        (value === "WW Hardware/Sofware units, Mobile/IP related income")
            ? setData(nintendoHardwareSoftwareMobile)
            : setData("");

    }, [value])

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

    // function VALUE_BLOCKS() {

    //     return <SegmentedControl
    //     value={value}
    //     onChange={setValue}
    //     data={["Earnings", "WW Hardware/Sofware units, Mobile/IP related income", "Key/Digital Sales Indicator",
    //             "FY Million-Seller Titles", "Regional Hardware/Software units", "Top Selling Titles"]}
    //   />
    // }

    return (

        <div>  
            <SegmentedControl
                    fullWidth 
                    orientation="vertical"
                    value={value}
                    onChange={setValue}
                    data={[ "Earnings", 
                            "WW Hardware/Sofware units, Mobile/IP related income", 
                            "Key/Digital Sales Indicator", 
                            "FY Million-Seller Titles", 
                            "Regional Hardware/Software units", 
                            "Top Selling Titles",]}
            />
            <Code color="gray" block>{data}</Code>
        </div>
        
    );
}
