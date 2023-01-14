import { liner, border, spacer, headerPrint } from "../../utils/table_design_logic";

import annualReportBandaiNamco2019 from "../bandaiNamco/Annual_Report/annual_report_fy3_2019.json";
import annualReportBandaiNamco2020 from "../bandaiNamco/Annual_Report/annual_report_fy3_2020.json";
import annualReportBandaiNamco2021 from "../bandaiNamco/Annual_Report/annual_report_fy3_2021.json";
import annualReportBandaiNamco2022 from "../bandaiNamco/Annual_Report/annual_report_fy3_2022.json";

import annualReportSquareEnix2010 from "../squareEnix/Annual_Report/annual_report_fy3_2010.json";
import annualReportSquareEnix2011 from "../squareEnix/Annual_Report/annual_report_fy3_2011.json";
import annualReportSquareEnix2012 from "../squareEnix/Annual_Report/annual_report_fy3_2012.json";
import annualReportSquareEnix2013 from "../squareEnix/Annual_Report/annual_report_fy3_2013.json";
import annualReportSquareEnix2014 from "../squareEnix/Annual_Report/annual_report_fy3_2014.json";
import annualReportSquareEnix2015 from "../squareEnix/Annual_Report/annual_report_fy3_2015.json";
import annualReportSquareEnix2016 from "../squareEnix/Annual_Report/annual_report_fy3_2016.json";
import annualReportSquareEnix2017 from "../squareEnix/Annual_Report/annual_report_fy3_2017.json";
import annualReportSquareEnix2018 from "../squareEnix/Annual_Report/annual_report_fy3_2018.json";
import annualReportSquareEnix2019 from "../squareEnix/Annual_Report/annual_report_fy3_2019.json";
import annualReportSquareEnix2020 from "../squareEnix/Annual_Report/annual_report_fy3_2020.json";
import annualReportSquareEnix2021 from "../squareEnix/Annual_Report/annual_report_fy3_2021.json";
import annualReportSquareEnix2022 from "../squareEnix/Annual_Report/annual_report_fy3_2022.json";

type annualReport = {
    fiscalYear: string,
    series: {
            title: string,
            releaseDate: string,
            fyEndMonth: string,
            value: number,
            valueLastFY: number,
            valueLastTwoFYs: number,
            miscellaneous?: string,
        }[]
};

const collectionBandaiNamco: annualReport[] = [
    annualReportBandaiNamco2019,
    annualReportBandaiNamco2020,
    annualReportBandaiNamco2021,
    annualReportBandaiNamco2022,
];

const collectionSquareEnix: annualReport[] = [
    annualReportSquareEnix2010,
    annualReportSquareEnix2011,
    annualReportSquareEnix2012,
    annualReportSquareEnix2013,
    annualReportSquareEnix2014,
    annualReportSquareEnix2015,
    annualReportSquareEnix2016,
    annualReportSquareEnix2017,
    annualReportSquareEnix2018,
    annualReportSquareEnix2019,
    annualReportSquareEnix2020,
    annualReportSquareEnix2021,
    annualReportSquareEnix2022,
];

const dateLabel = liner(border([spacer("Data as of March 31st, 2022", "Data as of March 31st, 2022".length+1, "left")]),"−", "bottom",true)

function annualReportMaker (collection: annualReport[], companyName: string) {

    let headerMake = liner(border([
        spacer(companyName, companyName.length+1, "left")
        ]),"−","top",true) +
        liner(border([
            spacer("IP Series Data", "IP Series Data".length+2, "left")
        ]), "−", "both",true)

    
}