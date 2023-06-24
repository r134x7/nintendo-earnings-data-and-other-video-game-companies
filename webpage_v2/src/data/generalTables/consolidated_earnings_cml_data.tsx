import { EarningsJSONV2, getData } from "./consolidated_earnings_general"
import { EarningsValue, EarningsV2 } from "../../utils/general_earnings_logic"
import { liner, spacer, border, dateLabel } from "../../utils/table_design_logic"

import consolidatedEarningsNintendo1981 from "../nintendo/Consolidated_Earnings/consolidated_earnings_fy8_1981.json" 
import consolidatedEarningsNintendo1982 from "../nintendo/Consolidated_Earnings/consolidated_earnings_fy8_1982.json" 
import consolidatedEarningsNintendo1983 from "../nintendo/Consolidated_Earnings/consolidated_earnings_fy8_1983.json" 
import consolidatedEarningsNintendo1984 from "../nintendo/Consolidated_Earnings/consolidated_earnings_fy8_1984.json" 
import consolidatedEarningsNintendo1985 from "../nintendo/Consolidated_Earnings/consolidated_earnings_fy8_1985.json" 
import consolidatedEarningsNintendo1986 from "../nintendo/Consolidated_Earnings/consolidated_earnings_fy8_1986.json" 
import consolidatedEarningsNintendo1987 from "../nintendo/Consolidated_Earnings/consolidated_earnings_fy8_1987.json" 
import consolidatedEarningsNintendo1988 from "../nintendo/Consolidated_Earnings/consolidated_earnings_fy8_1988.json" 
import consolidatedEarningsNintendo1989 from "../nintendo/Consolidated_Earnings/consolidated_earnings_fy8_1989.json" 
import consolidatedEarningsNintendo1990 from "../nintendo/Consolidated_Earnings/consolidated_earnings_fy3_1990.json" 
import consolidatedEarningsNintendo1991 from "../nintendo/Consolidated_Earnings/consolidated_earnings_fy3_1991.json" 
import consolidatedEarningsNintendo1992 from "../nintendo/Consolidated_Earnings/consolidated_earnings_fy3_1992.json" 
import consolidatedEarningsNintendo1993 from "../nintendo/Consolidated_Earnings/consolidated_earnings_fy3_1993.json" 
import consolidatedEarningsNintendo1994 from "../nintendo/Consolidated_Earnings/consolidated_earnings_fy3_1994.json" 
import consolidatedEarningsNintendo1995 from "../nintendo/Consolidated_Earnings/consolidated_earnings_fy3_1995.json" 
import consolidatedEarningsNintendo1996 from "../nintendo/Consolidated_Earnings/consolidated_earnings_fy3_1996.json" 
import consolidatedEarningsNintendo1997 from "../nintendo/Consolidated_Earnings/consolidated_earnings_fy3_1997.json" 
import consolidatedEarningsNintendo1998 from "../nintendo/Consolidated_Earnings/consolidated_earnings_fy3_1998.json" 
import consolidatedEarningsNintendo1999 from "../nintendo/Consolidated_Earnings/consolidated_earnings_fy3_1999.json" 
import consolidatedEarningsNintendo2000 from "../nintendo/Consolidated_Earnings/consolidated_earnings_fy3_2000.json" 
import consolidatedEarningsNintendo2001 from "../nintendo/Consolidated_Earnings/consolidated_earnings_fy3_2001.json" 
import consolidatedEarningsNintendo2002 from "../nintendo/Consolidated_Earnings/consolidated_earnings_fy3_2002.json" 
import consolidatedEarningsNintendo2003 from "../nintendo/Consolidated_Earnings/consolidated_earnings_fy3_2003.json" 
import consolidatedEarningsNintendo2004 from "../nintendo/Consolidated_Earnings/consolidated_earnings_fy3_2004.json" 
import consolidatedEarningsNintendo2005 from "../nintendo/Consolidated_Earnings/consolidated_earnings_fy3_2005.json" 
import consolidatedEarningsNintendo2006 from "../nintendo/Consolidated_Earnings/consolidated_earnings_fy3_2006.json" 
import consolidatedEarningsNintendo2007 from "../nintendo/Consolidated_Earnings/consolidated_earnings_fy3_2007.json" 
import consolidatedEarningsNintendo2008 from "../nintendo/Consolidated_Earnings/consolidated_earnings_fy3_2008.json" 
import consolidatedEarningsNintendo2009 from "../nintendo/Consolidated_Earnings/consolidated_earnings_fy3_2009.json" 
import consolidatedEarningsNintendo2010 from "../nintendo/Consolidated_Earnings/consolidated_earnings_fy3_2010.json" 
import consolidatedEarningsNintendo2011 from "../nintendo/Consolidated_Earnings/consolidated_earnings_fy3_2011.json" 
import consolidatedEarningsNintendo2012 from "../nintendo/Consolidated_Earnings/consolidated_earnings_fy3_2012.json" 
import consolidatedEarningsNintendo2013 from "../nintendo/Consolidated_Earnings/consolidated_earnings_fy3_2013.json" 
import consolidatedEarningsNintendo2014 from "../nintendo/Consolidated_Earnings/consolidated_earnings_fy3_2014.json" 
import consolidatedEarningsNintendo2015 from "../nintendo/Consolidated_Earnings/consolidated_earnings_fy3_2015.json" 
import consolidatedEarningsNintendo2016 from "../nintendo/Consolidated_Earnings/consolidated_earnings_fy3_2016.json" 
import consolidatedEarningsNintendo2017 from "../nintendo/Consolidated_Earnings/consolidated_earnings_fy3_2017.json" 
import consolidatedEarningsNintendo2018 from "../nintendo/Consolidated_Earnings/consolidated_earnings_fy3_2018.json" 
import consolidatedEarningsNintendo2019 from "../nintendo/Consolidated_Earnings/consolidated_earnings_fy3_2019.json" 
import consolidatedEarningsNintendo2020 from "../nintendo/Consolidated_Earnings/consolidated_earnings_fy3_2020.json" 
import consolidatedEarningsNintendo2021 from "../nintendo/Consolidated_Earnings/consolidated_earnings_fy3_2021.json" 
import consolidatedEarningsNintendo2022 from "../nintendo/Consolidated_Earnings/consolidated_earnings_fy3_2022.json" 
import consolidatedEarningsNintendo2023 from "../nintendo/Consolidated_Earnings/consolidated_earnings_fy3_2023.json"

import consolidatedEarningsBandaiNamco2006 from "../bandaiNamco/Consolidated_Earnings/consolidated_earnings_fy3_2006.json";
import consolidatedEarningsBandaiNamco2007 from "../bandaiNamco/Consolidated_Earnings/consolidated_earnings_fy3_2007.json";
import consolidatedEarningsBandaiNamco2008 from "../bandaiNamco/Consolidated_Earnings/consolidated_earnings_fy3_2008.json";
import consolidatedEarningsBandaiNamco2009 from "../bandaiNamco/Consolidated_Earnings/consolidated_earnings_fy3_2009.json";
import consolidatedEarningsBandaiNamco2010 from "../bandaiNamco/Consolidated_Earnings/consolidated_earnings_fy3_2010.json";
import consolidatedEarningsBandaiNamco2011 from "../bandaiNamco/Consolidated_Earnings/consolidated_earnings_fy3_2011.json";
import consolidatedEarningsBandaiNamco2012 from "../bandaiNamco/Consolidated_Earnings/consolidated_earnings_fy3_2012.json";
import consolidatedEarningsBandaiNamco2013 from "../bandaiNamco/Consolidated_Earnings/consolidated_earnings_fy3_2013.json";
import consolidatedEarningsBandaiNamco2014 from "../bandaiNamco/Consolidated_Earnings/consolidated_earnings_fy3_2014.json";
import consolidatedEarningsBandaiNamco2015 from "../bandaiNamco/Consolidated_Earnings/consolidated_earnings_fy3_2015.json";
import consolidatedEarningsBandaiNamco2016 from "../bandaiNamco/Consolidated_Earnings/consolidated_earnings_fy3_2016.json";
import consolidatedEarningsBandaiNamco2017 from "../bandaiNamco/Consolidated_Earnings/consolidated_earnings_fy3_2017.json";
import consolidatedEarningsBandaiNamco2018 from "../bandaiNamco/Consolidated_Earnings/consolidated_earnings_fy3_2018.json"
import consolidatedEarningsBandaiNamco2019 from "../bandaiNamco/Consolidated_Earnings/consolidated_earnings_fy3_2019.json"
import consolidatedEarningsBandaiNamco2020 from "../bandaiNamco/Consolidated_Earnings/consolidated_earnings_fy3_2020.json"
import consolidatedEarningsBandaiNamco2021 from "../bandaiNamco/Consolidated_Earnings/consolidated_earnings_fy3_2021.json"
import consolidatedEarningsBandaiNamco2022 from "../bandaiNamco/Consolidated_Earnings/consolidated_earnings_fy3_2022.json"
import consolidatedEarningsBandaiNamco2023 from "../bandaiNamco/Consolidated_Earnings/consolidated_earnings_fy3_2023.json"

import consolidatedEarningsCapcom1998 from "../capcom/Consolidated_Earnings/consolidated_earnings_fy3_1998.json"
import consolidatedEarningsCapcom1999 from "../capcom/Consolidated_Earnings/consolidated_earnings_fy3_1999.json"
import consolidatedEarningsCapcom2000 from "../capcom/Consolidated_Earnings/consolidated_earnings_fy3_2000.json"
import consolidatedEarningsCapcom2001 from "../capcom/Consolidated_Earnings/consolidated_earnings_fy3_2001.json"
import consolidatedEarningsCapcom2002 from "../capcom/Consolidated_Earnings/consolidated_earnings_fy3_2002.json"
import consolidatedEarningsCapcom2003 from "../capcom/Consolidated_Earnings/consolidated_earnings_fy3_2003.json"
import consolidatedEarningsCapcom2004 from "../capcom/Consolidated_Earnings/consolidated_earnings_fy3_2004.json"
import consolidatedEarningsCapcom2005 from "../capcom/Consolidated_Earnings/consolidated_earnings_fy3_2005.json"
import consolidatedEarningsCapcom2006 from "../capcom/Consolidated_Earnings/consolidated_earnings_fy3_2006.json"
import consolidatedEarningsCapcom2007 from "../capcom/Consolidated_Earnings/consolidated_earnings_fy3_2007.json"
import consolidatedEarningsCapcom2008 from "../capcom/Consolidated_Earnings/consolidated_earnings_fy3_2008.json"
import consolidatedEarningsCapcom2009 from "../capcom/Consolidated_Earnings/consolidated_earnings_fy3_2009.json"
import consolidatedEarningsCapcom2010 from "../capcom/Consolidated_Earnings/consolidated_earnings_fy3_2010.json"
import consolidatedEarningsCapcom2011 from "../capcom/Consolidated_Earnings/consolidated_earnings_fy3_2011.json"
import consolidatedEarningsCapcom2012 from "../capcom/Consolidated_Earnings/consolidated_earnings_fy3_2012.json"
import consolidatedEarningsCapcom2013 from "../capcom/Consolidated_Earnings/consolidated_earnings_fy3_2013.json"
import consolidatedEarningsCapcom2014 from "../capcom/Consolidated_Earnings/consolidated_earnings_fy3_2014.json"
import consolidatedEarningsCapcom2015 from "../capcom/Consolidated_Earnings/consolidated_earnings_fy3_2015.json"
import consolidatedEarningsCapcom2016 from "../capcom/Consolidated_Earnings/consolidated_earnings_fy3_2016.json"
import consolidatedEarningsCapcom2017 from "../capcom/Consolidated_Earnings/consolidated_earnings_fy3_2017.json"
import consolidatedEarningsCapcom2018 from "../capcom/Consolidated_Earnings/consolidated_earnings_fy3_2018.json"
import consolidatedEarningsCapcom2019 from "../capcom/Consolidated_Earnings/consolidated_earnings_fy3_2019.json"
import consolidatedEarningsCapcom2020 from "../capcom/Consolidated_Earnings/consolidated_earnings_fy3_2020.json"
import consolidatedEarningsCapcom2021 from "../capcom/Consolidated_Earnings/consolidated_earnings_fy3_2021.json"
import consolidatedEarningsCapcom2022 from "../capcom/Consolidated_Earnings/consolidated_earnings_fy3_2022.json"
import consolidatedEarningsCapcom2023 from "../capcom/Consolidated_Earnings/consolidated_earnings_fy3_2023.json"

import consolidatedEarningsKoeiTecmo2010 from "../koeiTecmo/Consolidated_Earnings/consolidated_earnings_fy3_2010.json"
import consolidatedEarningsKoeiTecmo2011 from "../koeiTecmo/Consolidated_Earnings/consolidated_earnings_fy3_2011.json"
import consolidatedEarningsKoeiTecmo2012 from "../koeiTecmo/Consolidated_Earnings/consolidated_earnings_fy3_2012.json"
import consolidatedEarningsKoeiTecmo2013 from "../koeiTecmo/Consolidated_Earnings/consolidated_earnings_fy3_2013.json"
import consolidatedEarningsKoeiTecmo2014 from "../koeiTecmo/Consolidated_Earnings/consolidated_earnings_fy3_2014.json"
import consolidatedEarningsKoeiTecmo2015 from "../koeiTecmo/Consolidated_Earnings/consolidated_earnings_fy3_2015.json"
import consolidatedEarningsKoeiTecmo2016 from "../koeiTecmo/Consolidated_Earnings/consolidated_earnings_fy3_2016.json"
import consolidatedEarningsKoeiTecmo2017 from "../koeiTecmo/Consolidated_Earnings/consolidated_earnings_fy3_2017.json"
import consolidatedEarningsKoeiTecmo2018 from "../koeiTecmo/Consolidated_Earnings/consolidated_earnings_fy3_2018.json"
import consolidatedEarningsKoeiTecmo2019 from "../koeiTecmo/Consolidated_Earnings/consolidated_earnings_fy3_2019.json"
import consolidatedEarningsKoeiTecmo2020 from "../koeiTecmo/Consolidated_Earnings/consolidated_earnings_fy3_2020.json"
import consolidatedEarningsKoeiTecmo2021 from "../koeiTecmo/Consolidated_Earnings/consolidated_earnings_fy3_2021.json"
import consolidatedEarningsKoeiTecmo2022 from "../koeiTecmo/Consolidated_Earnings/consolidated_earnings_fy3_2022.json"
import consolidatedEarningsKoeiTecmo2023 from "../koeiTecmo/Consolidated_Earnings/consolidated_earnings_fy3_2023.json"

import consolidatedEarningsSegaSammy2005 from "../sega/Consolidated_Earnings/consolidated_earnings_fy3_2005.json"
import consolidatedEarningsSegaSammy2006 from "../sega/Consolidated_Earnings/consolidated_earnings_fy3_2006.json"
import consolidatedEarningsSegaSammy2007 from "../sega/Consolidated_Earnings/consolidated_earnings_fy3_2007.json"
import consolidatedEarningsSegaSammy2008 from "../sega/Consolidated_Earnings/consolidated_earnings_fy3_2008.json"
import consolidatedEarningsSegaSammy2009 from "../sega/Consolidated_Earnings/consolidated_earnings_fy3_2009.json"
import consolidatedEarningsSegaSammy2010 from "../sega/Consolidated_Earnings/consolidated_earnings_fy3_2010.json"
import consolidatedEarningsSegaSammy2011 from "../sega/Consolidated_Earnings/consolidated_earnings_fy3_2011.json"
import consolidatedEarningsSegaSammy2012 from "../sega/Consolidated_Earnings/consolidated_earnings_fy3_2012.json"
import consolidatedEarningsSegaSammy2013 from "../sega/Consolidated_Earnings/consolidated_earnings_fy3_2013.json"
import consolidatedEarningsSegaSammy2014 from "../sega/Consolidated_Earnings/consolidated_earnings_fy3_2014.json"
import consolidatedEarningsSegaSammy2015 from "../sega/Consolidated_Earnings/consolidated_earnings_fy3_2015.json"
import consolidatedEarningsSegaSammy2016 from "../sega/Consolidated_Earnings/consolidated_earnings_fy3_2016.json"
import consolidatedEarningsSegaSammy2017 from "../sega/Consolidated_Earnings/consolidated_earnings_fy3_2017.json"
import consolidatedEarningsSegaSammy2018 from "../sega/Consolidated_Earnings/consolidated_earnings_fy3_2018.json"
import consolidatedEarningsSegaSammy2019 from "../sega/Consolidated_Earnings/consolidated_earnings_fy3_2019.json"
import consolidatedEarningsSegaSammy2020 from "../sega/Consolidated_Earnings/consolidated_earnings_fy3_2020.json"
import consolidatedEarningsSegaSammy2021 from "../sega/Consolidated_Earnings/consolidated_earnings_fy3_2021.json"
import consolidatedEarningsSegaSammy2022 from "../sega/Consolidated_Earnings/consolidated_earnings_fy3_2022.json"
import consolidatedEarningsSegaSammy2023 from "../sega/Consolidated_Earnings/consolidated_earnings_fy3_2023.json"

import consolidatedEarningsSquareEnix2004 from "../squareEnix/Consolidated_Earnings/consolidated_earnings_fy3_2004.json"
import consolidatedEarningsSquareEnix2005 from "../squareEnix/Consolidated_Earnings/consolidated_earnings_fy3_2005.json"
import consolidatedEarningsSquareEnix2006 from "../squareEnix/Consolidated_Earnings/consolidated_earnings_fy3_2006.json"
import consolidatedEarningsSquareEnix2007 from "../squareEnix/Consolidated_Earnings/consolidated_earnings_fy3_2007.json"
import consolidatedEarningsSquareEnix2008 from "../squareEnix/Consolidated_Earnings/consolidated_earnings_fy3_2008.json"
import consolidatedEarningsSquareEnix2009 from "../squareEnix/Consolidated_Earnings/consolidated_earnings_fy3_2009.json"
import consolidatedEarningsSquareEnix2010 from "../squareEnix/Consolidated_Earnings/consolidated_earnings_fy3_2010.json"
import consolidatedEarningsSquareEnix2011 from "../squareEnix/Consolidated_Earnings/consolidated_earnings_fy3_2011.json"
import consolidatedEarningsSquareEnix2012 from "../squareEnix/Consolidated_Earnings/consolidated_earnings_fy3_2012.json"
import consolidatedEarningsSquareEnix2013 from "../squareEnix/Consolidated_Earnings/consolidated_earnings_fy3_2013.json"
import consolidatedEarningsSquareEnix2014 from "../squareEnix/Consolidated_Earnings/consolidated_earnings_fy3_2014.json"
import consolidatedEarningsSquareEnix2015 from "../squareEnix/Consolidated_Earnings/consolidated_earnings_fy3_2015.json"
import consolidatedEarningsSquareEnix2016 from "../squareEnix/Consolidated_Earnings/consolidated_earnings_fy3_2016.json"
import consolidatedEarningsSquareEnix2017 from "../squareEnix/Consolidated_Earnings/consolidated_earnings_fy3_2017.json"
import consolidatedEarningsSquareEnix2018 from "../squareEnix/Consolidated_Earnings/consolidated_earnings_fy3_2018.json"
import consolidatedEarningsSquareEnix2019 from "../squareEnix/Consolidated_Earnings/consolidated_earnings_fy3_2019.json"
import consolidatedEarningsSquareEnix2020 from "../squareEnix/Consolidated_Earnings/consolidated_earnings_fy3_2020.json"
import consolidatedEarningsSquareEnix2021 from "../squareEnix/Consolidated_Earnings/consolidated_earnings_fy3_2021.json"
import consolidatedEarningsSquareEnix2022 from "../squareEnix/Consolidated_Earnings/consolidated_earnings_fy3_2022.json"
import consolidatedEarningsSquareEnix2023 from "../squareEnix/Consolidated_Earnings/consolidated_earnings_fy3_2023.json"

const totalCollectionNintendo = new Map<number, EarningsJSONV2>([
    [0, consolidatedEarningsNintendo1981],
    [1, consolidatedEarningsNintendo1982],
    [2, consolidatedEarningsNintendo1983],
    [3, consolidatedEarningsNintendo1984],
    [4, consolidatedEarningsNintendo1985],
    [5, consolidatedEarningsNintendo1986],
    [6, consolidatedEarningsNintendo1987],
    [7, consolidatedEarningsNintendo1988],
    [8, consolidatedEarningsNintendo1989],
    [9, consolidatedEarningsNintendo1990],
    [10, consolidatedEarningsNintendo1991],
    [11, consolidatedEarningsNintendo1992],
    [12, consolidatedEarningsNintendo1993],
    [13, consolidatedEarningsNintendo1994],
    [14, consolidatedEarningsNintendo1995],
    [15, consolidatedEarningsNintendo1996],
    [16, consolidatedEarningsNintendo1997],
    [17, consolidatedEarningsNintendo1998],
    [18, consolidatedEarningsNintendo1999],
    [19, consolidatedEarningsNintendo2000],
    [20, consolidatedEarningsNintendo2001],
    [21, consolidatedEarningsNintendo2002],
    [22, consolidatedEarningsNintendo2003],
    [23, consolidatedEarningsNintendo2004],
    [24, consolidatedEarningsNintendo2005],
    [25, consolidatedEarningsNintendo2006],
    [26, consolidatedEarningsNintendo2007],
    [27, consolidatedEarningsNintendo2008],
    [28, consolidatedEarningsNintendo2009],
    [29, consolidatedEarningsNintendo2010],
    [30, consolidatedEarningsNintendo2011],
    [31, consolidatedEarningsNintendo2012],
    [32, consolidatedEarningsNintendo2013],
    [33, consolidatedEarningsNintendo2014],
    [34, consolidatedEarningsNintendo2015],
    [35, consolidatedEarningsNintendo2016],
    [36, consolidatedEarningsNintendo2017],
    [37, consolidatedEarningsNintendo2018],
    [38, consolidatedEarningsNintendo2019],
    [39, consolidatedEarningsNintendo2020],
    [40, consolidatedEarningsNintendo2021],
    [41, consolidatedEarningsNintendo2022],
    [42, consolidatedEarningsNintendo2023],
]);

const totalCollectionBandaiNamco = new Map<number, EarningsJSONV2>([
    [0, consolidatedEarningsBandaiNamco2006],
    [1, consolidatedEarningsBandaiNamco2007],
    [2, consolidatedEarningsBandaiNamco2008],
    [3, consolidatedEarningsBandaiNamco2009],
    [4, consolidatedEarningsBandaiNamco2010],
    [5, consolidatedEarningsBandaiNamco2011],
    [6, consolidatedEarningsBandaiNamco2012],
    [7, consolidatedEarningsBandaiNamco2013],
    [8, consolidatedEarningsBandaiNamco2014],
    [9, consolidatedEarningsBandaiNamco2015],
    [10, consolidatedEarningsBandaiNamco2016],
    [11, consolidatedEarningsBandaiNamco2017],
    [12, consolidatedEarningsBandaiNamco2018],
    [13, consolidatedEarningsBandaiNamco2019],
    [14, consolidatedEarningsBandaiNamco2020],
    [15, consolidatedEarningsBandaiNamco2021],
    [16, consolidatedEarningsBandaiNamco2022],
    [17, consolidatedEarningsBandaiNamco2023],
]);

const totalCollectionCapcom = new Map<number, EarningsJSONV2>([
    [0, consolidatedEarningsCapcom1998],
    [1, consolidatedEarningsCapcom1999],
    [2, consolidatedEarningsCapcom2000],
    [3, consolidatedEarningsCapcom2001],
    [4, consolidatedEarningsCapcom2002],
    [5, consolidatedEarningsCapcom2003],
    [6, consolidatedEarningsCapcom2004],
    [7, consolidatedEarningsCapcom2005],
    [8, consolidatedEarningsCapcom2006],
    [9, consolidatedEarningsCapcom2007],
    [10, consolidatedEarningsCapcom2008],
    [11, consolidatedEarningsCapcom2009],
    [12, consolidatedEarningsCapcom2010],
    [13, consolidatedEarningsCapcom2011],
    [14, consolidatedEarningsCapcom2012],
    [15, consolidatedEarningsCapcom2013],
    [16, consolidatedEarningsCapcom2014],
    [17, consolidatedEarningsCapcom2015],
    [18, consolidatedEarningsCapcom2016],
    [19, consolidatedEarningsCapcom2017],
    [20, consolidatedEarningsCapcom2018],
    [21, consolidatedEarningsCapcom2019],
    [22, consolidatedEarningsCapcom2020],
    [23, consolidatedEarningsCapcom2021],
    [24, consolidatedEarningsCapcom2022],
    [25, consolidatedEarningsCapcom2023],
]);

const totalCollectionKoeiTecmo = new Map<number, EarningsJSONV2>([
    [0, consolidatedEarningsKoeiTecmo2010],
    [1, consolidatedEarningsKoeiTecmo2011],
    [2, consolidatedEarningsKoeiTecmo2012],
    [3, consolidatedEarningsKoeiTecmo2013],
    [4, consolidatedEarningsKoeiTecmo2014],
    [5, consolidatedEarningsKoeiTecmo2015],
    [6, consolidatedEarningsKoeiTecmo2016],
    [7, consolidatedEarningsKoeiTecmo2017],
    [8, consolidatedEarningsKoeiTecmo2018],
    [9, consolidatedEarningsKoeiTecmo2019],
    [10, consolidatedEarningsKoeiTecmo2020],
    [11, consolidatedEarningsKoeiTecmo2021],
    [12, consolidatedEarningsKoeiTecmo2022],
    [13, consolidatedEarningsKoeiTecmo2023],
]);

const totalCollectionSegaSammy = new Map<number, EarningsJSONV2>([
    [0, consolidatedEarningsSegaSammy2005],
    [1, consolidatedEarningsSegaSammy2006],
    [2, consolidatedEarningsSegaSammy2007],
    [3, consolidatedEarningsSegaSammy2008],
    [4, consolidatedEarningsSegaSammy2009],
    [5, consolidatedEarningsSegaSammy2010],
    [6, consolidatedEarningsSegaSammy2011],
    [7, consolidatedEarningsSegaSammy2012],
    [8, consolidatedEarningsSegaSammy2013],
    [9, consolidatedEarningsSegaSammy2014],
    [10, consolidatedEarningsSegaSammy2015],
    [11, consolidatedEarningsSegaSammy2016],
    [12, consolidatedEarningsSegaSammy2017],
    [13, consolidatedEarningsSegaSammy2018],
    [14, consolidatedEarningsSegaSammy2019],
    [15, consolidatedEarningsSegaSammy2020],
    [16, consolidatedEarningsSegaSammy2021],
    [17, consolidatedEarningsSegaSammy2022],
    [18, consolidatedEarningsSegaSammy2023],
]);

const totalCollectionSquareEnix = new Map<number, EarningsJSONV2>([
    [0, consolidatedEarningsSquareEnix2004],
    [1, consolidatedEarningsSquareEnix2005],
    [2, consolidatedEarningsSquareEnix2006],
    [3, consolidatedEarningsSquareEnix2007],
    [4, consolidatedEarningsSquareEnix2008],
    [5, consolidatedEarningsSquareEnix2009],
    [6, consolidatedEarningsSquareEnix2010],
    [7, consolidatedEarningsSquareEnix2011],
    [8, consolidatedEarningsSquareEnix2012],
    [9, consolidatedEarningsSquareEnix2013],
    [10, consolidatedEarningsSquareEnix2014],
    [11, consolidatedEarningsSquareEnix2015],
    [12, consolidatedEarningsSquareEnix2016],
    [13, consolidatedEarningsSquareEnix2017],
    [14, consolidatedEarningsSquareEnix2018],
    [15, consolidatedEarningsSquareEnix2019],
    [16, consolidatedEarningsSquareEnix2020],
    [17, consolidatedEarningsSquareEnix2021],
    [18, consolidatedEarningsSquareEnix2022],
    [19, consolidatedEarningsSquareEnix2023],
]);

const operatingResultsNintendoV2 = new Map<number, EarningsV2[]>();
totalCollectionNintendo.forEach((value, key, map) => operatingResultsNintendoV2.set(key, [...getData(value, value.data.length).values()]))


function labelMaker (collection: EarningsJSONV2): string {

    // const makeDateLabel = dateLabel(collection.at(-1)?.fiscalYear ?? "N/A", collection.at(-1)?.currentQuarter ?? 4);
    const makeDateLabel = dateLabel(collection?.fiscalYear ?? "N/A", collection?.currentQuarter ?? 4);

    return liner(border([spacer(makeDateLabel, makeDateLabel.length+1, "left")]),"−", "bottom",true)
}

function headerMaker(collection: EarningsJSONV2): string {
    let subHeader = (collection.companyName === "CAPCOM Co., Ltd." || collection.companyName === "SQUARE ENIX HOLDINGS CO., LTD.") ? "Consolidated Financial Results" : "Consolidated Operating Results";

    let headerMake = liner(border([
        spacer(collection.companyName, collection.companyName.length+1, "left")
        ]),"−","top",true) +
        liner(border([
            spacer(subHeader, subHeader.length+2, "left")
        ]), "−", "both",true)

    return headerMake
}

// function operatingResultsMakerV2(collection: EarningsJSONV2) {

// }

let x = operatingResultsMakerV2(totalCollectionNintendo);

function operatingResultsMakerV2(completeCollection: Map<number, EarningsJSONV2>) {


    const makeData = new Map<number, EarningsV2[]>();
    completeCollection.forEach((value, key, map) => makeData.set(key, [...getData(value, value.data.length).values()]))

    const netSales = new Map<number, EarningsV2>();
    const operatingIncome = new Map<number, EarningsV2>();
    const netIncome = new Map<number, EarningsV2>();

    makeData.forEach((value, key, map) => {
        netSales.set(key, value[0])
        operatingIncome.set(key, value[1])
        netIncome.set(key, value[2])
    })
    // console.log(netSales);
    console.log(netSales);
    
    let x = printAllValues(netSales)
    console.log(x);
    

}

function printAllValues(list: Map<number, EarningsV2>): string[] {

    let header = liner(border([
        spacer(list.get(0)?.name ?? "Error",34,"left"),
    ]),"−","both",true)

    let toReturn = new Map<number, string[]>(); 

    function valueMake(value: EarningsValue): string {
        return (value.kind === "Quarter" || value.kind === "Cumulative")
            ? value.value.toString() + "\n"
            : ""
    }

    list.forEach((value, key, map) => {

        // toReturn.set(0, (toReturn.get(0) ?? "") + valueMake(value.Q1QtrValue))
        toReturn.set(0, (toReturn.get(0) ?? []).concat(valueMake(value.Q1QtrValue)))
        toReturn.set(1, (toReturn.get(1) ?? []).concat(valueMake(value.Q2QtrValue)))
        toReturn.set(2, (toReturn.get(2) ?? []).concat(valueMake(value.Q3QtrValue)))
        toReturn.set(3, (toReturn.get(3) ?? []).concat(valueMake(value.Q4QtrValue)))
        toReturn.set(4, (toReturn.get(4) ?? []).concat(valueMake(value.Q2CmlValue)))
        toReturn.set(5, (toReturn.get(5) ?? []).concat(valueMake(value.Q3CmlValue)))
        toReturn.set(6, (toReturn.get(6) ?? []).concat(valueMake(value.Q4CmlValue)))

    })

    console.log(toReturn);
    
    // let printList = list.map(elem => {
    //     return border([
    //         spacer(elem.fiscalYear + " Cumulative",20,"left"),
    //         spacer(`¥${elem.value.toLocaleString("en")}M`,12,"right")
    //     ],true) 
    // });
}

function operatingResultsMaker (collection: EarningsJSON[]): {
    header: string, netSales: string[], operatingIncome: string[], netIncome: string[]
} {

    let subHeader = (collection[0].companyName === "CAPCOM Co., Ltd." || collection[0].companyName === "SQUARE ENIX HOLDINGS CO., LTD.") ? "Consolidated Financial Results" : "Consolidated Operating Results";

    let headerMake = liner(border([
        spacer(collection[0].companyName, collection[0].companyName.length+1, "left")
        ]),"−","top",true) +
        liner(border([
            spacer(subHeader, subHeader.length+2, "left")
        ]), "−", "both",true)

    let netSalesSet = collection.map(elem => {
        return {
            fiscalYear: elem.fiscalYear,
            value: elem.data[0].Q4CmlValue
        };
    });

    let operatingIncomeSet = collection.map(elem => {
        return {
            fiscalYear: elem.fiscalYear,
            value: elem.data[1].Q4CmlValue
        };
    });

    let netIncomeSet = collection.map(elem => {
        return {
            fiscalYear: elem.fiscalYear,
            value: elem.data[2].Q4CmlValue
        };
    });

    const sortedNetSales = sortList(netSalesSet);
    const sortedOperatingIncome = sortList(operatingIncomeSet);
    const sortedNetIncome = sortList(netIncomeSet);

    const printNetSales = printCumulativeValues(netSalesSet, sortedNetSales, "Net Sales");

    const printOperatingIncome = printCumulativeValues(operatingIncomeSet, sortedOperatingIncome, "Operating Income");

    const printNetIncome = printCumulativeValues(netIncomeSet, sortedNetIncome, "Net Income");

    return {
        header: headerMake,
        netSales: printNetSales,
        operatingIncome: printOperatingIncome,
        netIncome: printNetIncome,
    }
};

// let netSalesSet = totalCollectionNintendo.map(elem => {
//     return {
//         fiscalYear: elem.fiscalYear,
//         value: elem.data[0].Q4CmlValue
//     };
// });

// let operatingIncomeSet = totalCollectionNintendo.map(elem => {
//     return {
//         fiscalYear: elem.fiscalYear,
//         value: elem.data[1].Q4CmlValue
//     };
// });

// let netIncomeSet = totalCollectionNintendo.map(elem => {
//     return {
//         fiscalYear: elem.fiscalYear,
//         value: elem.data[2].Q4CmlValue
//     };
// });

function sortList(list: {fiscalYear: string, value: number}[]) {

    const sortList = list.map((elem, index, array) => {
            return elem // we need to create a new array that is identical to the original due to sort's mutating properties.
    }).sort((a, b) => { // (b,a) is descending order, (a,b) sorts in ascending order
        return (a.value > b.value)
            ? 1
            : (a.value < b.value)
            ? -1
            : 0 
    });

    return sortList
};

// const sortedNetSales = sortList(netSalesSet);
// const sortedOperatingIncome = sortList(operatingIncomeSet);
// const sortedNetIncome = sortList(netIncomeSet);


const printCumulativeValues = (list: {fiscalYear: string, value: number}[], sortedList: {fiscalYear: string, value: number}[], valueType: string): string[] => {

    let header = liner(border([
        spacer(valueType,34,"left"),
    ]),"−","both",true)

    let printList = list.map(elem => {
        return border([
            spacer(elem.fiscalYear + " Cumulative",20,"left"),
            spacer(`¥${elem.value.toLocaleString("en")}M`,12,"right")
        ],true) 
    });

    let printCount: string = border([
        spacer("Count",17,"left"),
        spacer(`${sortedList.length}`,15,"right"),
    ],true);

    let printSum: string = border([
        spacer("Sum",17,"left"),
        spacer(`¥${(sortedList.map(value => value.value).reduce((acc, next) => acc + next)).toLocaleString("en")}M`,15,"right"),
    ],true) 
     
    let printAverage: string = border([
        spacer("Average",17,"left"),
        spacer(`¥${Number(((sortedList.map(value => value.value).reduce((acc, next) => acc + next)) / sortedList.length).toFixed(0)).toLocaleString("en")}M`,15,"right"),
    ],true) 

    let printMedian: string = ((sortedList.length % 2) !== 0) // odd number
            // median formula source: https://en.wikipedia.org/wiki/Median
            // odd number median(x) = x(n+1)/2 => index version => median(x) = (x(n+1)/2)-1
            ? `¥${sortedList[((sortedList.length + 1)/2) -1].value.toLocaleString("en")}M`
            // even number median(x) = (x(n/2) + x((n/2) + 1)) /2 => index version median(x) = (x((n/2)-1) + x((n/2))) /2
            : `¥${Number(((sortedList[(sortedList.length/2) -1].value + sortedList[(sortedList.length/2)].value)/2).toFixed(0)).toLocaleString("en")}M`;

    let printMedianFixed: string = border([
        spacer("Median",17,"left"),
        spacer(printMedian,15,"right")
    ],true);

    let printMinimum: string = border([
        spacer("Minimum",17,"left"),
        spacer(`¥${sortedList[0].value.toLocaleString("en")}M`,15,"right")
    ],true);

    let printMaximum: string = border([
        spacer("Maximum",17,"left"),
        spacer(`¥${sortedList[sortedList.length-1].value.toLocaleString("en")}M`,15,"right"),
    ]);

    let printStats = liner(
        printCount + printSum + printAverage + printMedianFixed + printMinimum + printMaximum, "−", "both",true,35);
     
    return [
        header, 
        ...printList, 
        printStats
    ] 
};

// const printNetSales = printCumulativeValues(netSalesSet, sortedNetSales, "Net Sales");

// const printOperatingIncome = printCumulativeValues(operatingIncomeSet, sortedOperatingIncome, "Operating Income");

// const printNetIncome = printCumulativeValues(netIncomeSet, sortedNetIncome, "Net Income");

let dataSourceNintendo = "Source: https://www.nintendo.co.jp/ir/en/finance/historical_data/index.html"

const operatingResultsNintendo = operatingResultsMaker(totalCollectionNintendo);

const operatingResultsBandaiNamco = operatingResultsMaker(totalCollectionBandaiNamco);

const operatingResultsSquareEnix = operatingResultsMaker(totalCollectionSquareEnix);

const operatingResultsSegaSammy = operatingResultsMaker(totalCollectionSegaSammy);

const operatingResultsCapcom = operatingResultsMaker(totalCollectionCapcom);

const operatingResultsKoeiTecmo = operatingResultsMaker(totalCollectionKoeiTecmo);

export const cumulativeEarningsListNintendo = [
    operatingResultsNintendo.header,
    labelMaker(totalCollectionNintendo),
    ...operatingResultsNintendo.netSales,
    ...operatingResultsNintendo.operatingIncome,
    ...operatingResultsNintendo.netIncome,
    "###\n",
    dataSourceNintendo,
].reduce((prev, next) => prev + next);

export const cumulativeEarningsListBandaiNamco = [
    operatingResultsBandaiNamco.header,
    labelMaker(totalCollectionBandaiNamco),
    ...operatingResultsBandaiNamco.netSales,
    ...operatingResultsBandaiNamco.operatingIncome,
    ...operatingResultsBandaiNamco.netIncome,
    "###\n",
].reduce((prev, next) => prev + next);

export const cumulativeEarningsListSquareEnix = [
    operatingResultsSquareEnix.header,
    labelMaker(totalCollectionSquareEnix),
    ...operatingResultsSquareEnix.netSales,
    ...operatingResultsSquareEnix.operatingIncome,
    ...operatingResultsSquareEnix.netIncome,
    "###\n",
].reduce((prev, next) => prev + next);

export const cumulativeEarningsListSegaSammy = [
    operatingResultsSegaSammy.header,
    labelMaker(totalCollectionSegaSammy),
    ...operatingResultsSegaSammy.netSales,
    ...operatingResultsSegaSammy.operatingIncome,
    ...operatingResultsSegaSammy.netIncome,
    "###\n",
].reduce((prev, next) => prev + next);

export const cumulativeEarningsListCapcom = [
    operatingResultsCapcom.header,
    labelMaker(totalCollectionCapcom),
    ...operatingResultsCapcom.netSales,
    ...operatingResultsCapcom.operatingIncome,
    ...operatingResultsCapcom.netIncome,
    "###\n",
].reduce((prev, next) => prev + next);

export const cumulativeEarningsListKoeiTecmo = [
    operatingResultsKoeiTecmo.header,
    labelMaker(totalCollectionKoeiTecmo),
    ...operatingResultsKoeiTecmo.netSales,
    ...operatingResultsKoeiTecmo.operatingIncome,
    ...operatingResultsKoeiTecmo.netIncome,
    "###\n",
].reduce((prev, next) => prev + next);