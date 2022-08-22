import { useState } from "react";
import { Pagination, Group, Switch } from "@mantine/core";
import { useSelector } from "react-redux";
import { title1Difference,
         title2Difference,
         title3Difference,
         title4Difference,
         title5Difference,
         title6Difference,
         title7Difference,
         title8Difference,
         title9Difference,
         title10Difference,
         title11Difference, 
        } from "../../../data/nintendo/Nintendo-FY3-2022/topNSWswfy3-22";

import { Line, Bar } from "react-chartjs-2";
import { Chart, registerables } from 'chart.js'; // required to actually get chart.js with react-chartjs-2 to work
Chart.register(...registerables); // to get the package working, source: https://www.chartjs.org/docs/next/getting-started/integration.html

export default function GRAPH_NINTENDO_TOP_SELLING_TITLES_SWITCH_FY3_22() {


}