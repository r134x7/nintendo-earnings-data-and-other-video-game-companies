import { EarningsJSONV2, getData } from "./consolidated_earnings_general"
import { EarningsValue, EarningsV2, printValueQtrOrCml, numberType, printValuePrimitive } from "../../utils/general_earnings_logic"
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

const totalCollectionNintendo = new Map<number, EarningsJSONV2>();
    totalCollectionNintendo.set(totalCollectionNintendo.size, consolidatedEarningsNintendo1981)
    totalCollectionNintendo.set(totalCollectionNintendo.size, consolidatedEarningsNintendo1982)
    totalCollectionNintendo.set(totalCollectionNintendo.size, consolidatedEarningsNintendo1983)
    totalCollectionNintendo.set(totalCollectionNintendo.size, consolidatedEarningsNintendo1984)
    totalCollectionNintendo.set(totalCollectionNintendo.size, consolidatedEarningsNintendo1985)
    totalCollectionNintendo.set(totalCollectionNintendo.size, consolidatedEarningsNintendo1986)
    totalCollectionNintendo.set(totalCollectionNintendo.size, consolidatedEarningsNintendo1987)
    totalCollectionNintendo.set(totalCollectionNintendo.size, consolidatedEarningsNintendo1988)
    totalCollectionNintendo.set(totalCollectionNintendo.size, consolidatedEarningsNintendo1989)
    totalCollectionNintendo.set(totalCollectionNintendo.size, consolidatedEarningsNintendo1990)
    totalCollectionNintendo.set(totalCollectionNintendo.size, consolidatedEarningsNintendo1991)
    totalCollectionNintendo.set(totalCollectionNintendo.size, consolidatedEarningsNintendo1992)
    totalCollectionNintendo.set(totalCollectionNintendo.size, consolidatedEarningsNintendo1993)
    totalCollectionNintendo.set(totalCollectionNintendo.size, consolidatedEarningsNintendo1994)
    totalCollectionNintendo.set(totalCollectionNintendo.size, consolidatedEarningsNintendo1995)
    totalCollectionNintendo.set(totalCollectionNintendo.size, consolidatedEarningsNintendo1996)
    totalCollectionNintendo.set(totalCollectionNintendo.size, consolidatedEarningsNintendo1997)
    totalCollectionNintendo.set(totalCollectionNintendo.size, consolidatedEarningsNintendo1998)
    totalCollectionNintendo.set(totalCollectionNintendo.size, consolidatedEarningsNintendo1999)
    totalCollectionNintendo.set(totalCollectionNintendo.size, consolidatedEarningsNintendo2000)
    totalCollectionNintendo.set(totalCollectionNintendo.size, consolidatedEarningsNintendo2001)
    totalCollectionNintendo.set(totalCollectionNintendo.size, consolidatedEarningsNintendo2002)
    totalCollectionNintendo.set(totalCollectionNintendo.size, consolidatedEarningsNintendo2003)
    totalCollectionNintendo.set(totalCollectionNintendo.size, consolidatedEarningsNintendo2004)
    totalCollectionNintendo.set(totalCollectionNintendo.size, consolidatedEarningsNintendo2005)
    totalCollectionNintendo.set(totalCollectionNintendo.size, consolidatedEarningsNintendo2006)
    totalCollectionNintendo.set(totalCollectionNintendo.size, consolidatedEarningsNintendo2007)
    totalCollectionNintendo.set(totalCollectionNintendo.size, consolidatedEarningsNintendo2008)
    totalCollectionNintendo.set(totalCollectionNintendo.size, consolidatedEarningsNintendo2009)
    totalCollectionNintendo.set(totalCollectionNintendo.size, consolidatedEarningsNintendo2010)
    totalCollectionNintendo.set(totalCollectionNintendo.size, consolidatedEarningsNintendo2011)
    totalCollectionNintendo.set(totalCollectionNintendo.size, consolidatedEarningsNintendo2012)
    totalCollectionNintendo.set(totalCollectionNintendo.size, consolidatedEarningsNintendo2013)
    totalCollectionNintendo.set(totalCollectionNintendo.size, consolidatedEarningsNintendo2014)
    totalCollectionNintendo.set(totalCollectionNintendo.size, consolidatedEarningsNintendo2015)
    totalCollectionNintendo.set(totalCollectionNintendo.size, consolidatedEarningsNintendo2016)
    totalCollectionNintendo.set(totalCollectionNintendo.size, consolidatedEarningsNintendo2017)
    totalCollectionNintendo.set(totalCollectionNintendo.size, consolidatedEarningsNintendo2018)
    totalCollectionNintendo.set(totalCollectionNintendo.size, consolidatedEarningsNintendo2019)
    totalCollectionNintendo.set(totalCollectionNintendo.size, consolidatedEarningsNintendo2020)
    totalCollectionNintendo.set(totalCollectionNintendo.size, consolidatedEarningsNintendo2021)
    totalCollectionNintendo.set(totalCollectionNintendo.size, consolidatedEarningsNintendo2022)
    totalCollectionNintendo.set(totalCollectionNintendo.size, consolidatedEarningsNintendo2023)

const totalCollectionBandaiNamco = new Map<number, EarningsJSONV2>();
    totalCollectionBandaiNamco.set(totalCollectionBandaiNamco.size, consolidatedEarningsBandaiNamco2006)
    totalCollectionBandaiNamco.set(totalCollectionBandaiNamco.size, consolidatedEarningsBandaiNamco2007)
    totalCollectionBandaiNamco.set(totalCollectionBandaiNamco.size, consolidatedEarningsBandaiNamco2008)
    totalCollectionBandaiNamco.set(totalCollectionBandaiNamco.size, consolidatedEarningsBandaiNamco2009)
    totalCollectionBandaiNamco.set(totalCollectionBandaiNamco.size, consolidatedEarningsBandaiNamco2010)
    totalCollectionBandaiNamco.set(totalCollectionBandaiNamco.size, consolidatedEarningsBandaiNamco2011)
    totalCollectionBandaiNamco.set(totalCollectionBandaiNamco.size, consolidatedEarningsBandaiNamco2012)
    totalCollectionBandaiNamco.set(totalCollectionBandaiNamco.size, consolidatedEarningsBandaiNamco2013)
    totalCollectionBandaiNamco.set(totalCollectionBandaiNamco.size, consolidatedEarningsBandaiNamco2014)
    totalCollectionBandaiNamco.set(totalCollectionBandaiNamco.size, consolidatedEarningsBandaiNamco2015)
    totalCollectionBandaiNamco.set(totalCollectionBandaiNamco.size, consolidatedEarningsBandaiNamco2016)
    totalCollectionBandaiNamco.set(totalCollectionBandaiNamco.size, consolidatedEarningsBandaiNamco2017)
    totalCollectionBandaiNamco.set(totalCollectionBandaiNamco.size, consolidatedEarningsBandaiNamco2018)
    totalCollectionBandaiNamco.set(totalCollectionBandaiNamco.size, consolidatedEarningsBandaiNamco2019)
    totalCollectionBandaiNamco.set(totalCollectionBandaiNamco.size, consolidatedEarningsBandaiNamco2020)
    totalCollectionBandaiNamco.set(totalCollectionBandaiNamco.size, consolidatedEarningsBandaiNamco2021)
    totalCollectionBandaiNamco.set(totalCollectionBandaiNamco.size, consolidatedEarningsBandaiNamco2022)
    totalCollectionBandaiNamco.set(totalCollectionBandaiNamco.size, consolidatedEarningsBandaiNamco2023)

const totalCollectionCapcom = new Map<number, EarningsJSONV2>();
    totalCollectionCapcom.set(totalCollectionCapcom.size, consolidatedEarningsCapcom1998)
    totalCollectionCapcom.set(totalCollectionCapcom.size, consolidatedEarningsCapcom1999)
    totalCollectionCapcom.set(totalCollectionCapcom.size, consolidatedEarningsCapcom2000)
    totalCollectionCapcom.set(totalCollectionCapcom.size, consolidatedEarningsCapcom2001)
    totalCollectionCapcom.set(totalCollectionCapcom.size, consolidatedEarningsCapcom2002)
    totalCollectionCapcom.set(totalCollectionCapcom.size, consolidatedEarningsCapcom2003)
    totalCollectionCapcom.set(totalCollectionCapcom.size, consolidatedEarningsCapcom2004)
    totalCollectionCapcom.set(totalCollectionCapcom.size, consolidatedEarningsCapcom2005)
    totalCollectionCapcom.set(totalCollectionCapcom.size, consolidatedEarningsCapcom2006)
    totalCollectionCapcom.set(totalCollectionCapcom.size, consolidatedEarningsCapcom2007)
    totalCollectionCapcom.set(totalCollectionCapcom.size, consolidatedEarningsCapcom2008)
    totalCollectionCapcom.set(totalCollectionCapcom.size, consolidatedEarningsCapcom2009)
    totalCollectionCapcom.set(totalCollectionCapcom.size, consolidatedEarningsCapcom2010)
    totalCollectionCapcom.set(totalCollectionCapcom.size, consolidatedEarningsCapcom2011)
    totalCollectionCapcom.set(totalCollectionCapcom.size, consolidatedEarningsCapcom2012)
    totalCollectionCapcom.set(totalCollectionCapcom.size, consolidatedEarningsCapcom2013)
    totalCollectionCapcom.set(totalCollectionCapcom.size, consolidatedEarningsCapcom2014)
    totalCollectionCapcom.set(totalCollectionCapcom.size, consolidatedEarningsCapcom2015)
    totalCollectionCapcom.set(totalCollectionCapcom.size, consolidatedEarningsCapcom2016)
    totalCollectionCapcom.set(totalCollectionCapcom.size, consolidatedEarningsCapcom2017)
    totalCollectionCapcom.set(totalCollectionCapcom.size, consolidatedEarningsCapcom2018)
    totalCollectionCapcom.set(totalCollectionCapcom.size, consolidatedEarningsCapcom2019)
    totalCollectionCapcom.set(totalCollectionCapcom.size, consolidatedEarningsCapcom2020)
    totalCollectionCapcom.set(totalCollectionCapcom.size, consolidatedEarningsCapcom2021)
    totalCollectionCapcom.set(totalCollectionCapcom.size, consolidatedEarningsCapcom2022)
    totalCollectionCapcom.set(totalCollectionCapcom.size, consolidatedEarningsCapcom2023)

const totalCollectionKoeiTecmo = new Map<number, EarningsJSONV2>();
    totalCollectionKoeiTecmo.set(totalCollectionKoeiTecmo.size, consolidatedEarningsKoeiTecmo2010)
    totalCollectionKoeiTecmo.set(totalCollectionKoeiTecmo.size, consolidatedEarningsKoeiTecmo2011)
    totalCollectionKoeiTecmo.set(totalCollectionKoeiTecmo.size, consolidatedEarningsKoeiTecmo2012)
    totalCollectionKoeiTecmo.set(totalCollectionKoeiTecmo.size, consolidatedEarningsKoeiTecmo2013)
    totalCollectionKoeiTecmo.set(totalCollectionKoeiTecmo.size, consolidatedEarningsKoeiTecmo2014)
    totalCollectionKoeiTecmo.set(totalCollectionKoeiTecmo.size, consolidatedEarningsKoeiTecmo2015)
    totalCollectionKoeiTecmo.set(totalCollectionKoeiTecmo.size, consolidatedEarningsKoeiTecmo2016)
    totalCollectionKoeiTecmo.set(totalCollectionKoeiTecmo.size, consolidatedEarningsKoeiTecmo2017)
    totalCollectionKoeiTecmo.set(totalCollectionKoeiTecmo.size, consolidatedEarningsKoeiTecmo2018)
    totalCollectionKoeiTecmo.set(totalCollectionKoeiTecmo.size, consolidatedEarningsKoeiTecmo2019)
    totalCollectionKoeiTecmo.set(totalCollectionKoeiTecmo.size, consolidatedEarningsKoeiTecmo2020)
    totalCollectionKoeiTecmo.set(totalCollectionKoeiTecmo.size, consolidatedEarningsKoeiTecmo2021)
    totalCollectionKoeiTecmo.set(totalCollectionKoeiTecmo.size, consolidatedEarningsKoeiTecmo2022)
    totalCollectionKoeiTecmo.set(totalCollectionKoeiTecmo.size, consolidatedEarningsKoeiTecmo2023)

const totalCollectionSegaSammy = new Map<number, EarningsJSONV2>();
    totalCollectionSegaSammy.set(totalCollectionSegaSammy.size, consolidatedEarningsSegaSammy2005)
    totalCollectionSegaSammy.set(totalCollectionSegaSammy.size, consolidatedEarningsSegaSammy2006)
    totalCollectionSegaSammy.set(totalCollectionSegaSammy.size, consolidatedEarningsSegaSammy2007)
    totalCollectionSegaSammy.set(totalCollectionSegaSammy.size, consolidatedEarningsSegaSammy2008)
    totalCollectionSegaSammy.set(totalCollectionSegaSammy.size, consolidatedEarningsSegaSammy2009)
    totalCollectionSegaSammy.set(totalCollectionSegaSammy.size, consolidatedEarningsSegaSammy2010)
    totalCollectionSegaSammy.set(totalCollectionSegaSammy.size, consolidatedEarningsSegaSammy2011)
    totalCollectionSegaSammy.set(totalCollectionSegaSammy.size, consolidatedEarningsSegaSammy2012)
    totalCollectionSegaSammy.set(totalCollectionSegaSammy.size, consolidatedEarningsSegaSammy2013)
    totalCollectionSegaSammy.set(totalCollectionSegaSammy.size, consolidatedEarningsSegaSammy2014)
    totalCollectionSegaSammy.set(totalCollectionSegaSammy.size, consolidatedEarningsSegaSammy2015)
    totalCollectionSegaSammy.set(totalCollectionSegaSammy.size, consolidatedEarningsSegaSammy2016)
    totalCollectionSegaSammy.set(totalCollectionSegaSammy.size, consolidatedEarningsSegaSammy2017)
    totalCollectionSegaSammy.set(totalCollectionSegaSammy.size, consolidatedEarningsSegaSammy2018)
    totalCollectionSegaSammy.set(totalCollectionSegaSammy.size, consolidatedEarningsSegaSammy2019)
    totalCollectionSegaSammy.set(totalCollectionSegaSammy.size, consolidatedEarningsSegaSammy2020)
    totalCollectionSegaSammy.set(totalCollectionSegaSammy.size, consolidatedEarningsSegaSammy2021)
    totalCollectionSegaSammy.set(totalCollectionSegaSammy.size, consolidatedEarningsSegaSammy2022)
    totalCollectionSegaSammy.set(totalCollectionSegaSammy.size, consolidatedEarningsSegaSammy2023)

const totalCollectionSquareEnix = new Map<number, EarningsJSONV2>();
    totalCollectionSquareEnix.set(totalCollectionSquareEnix.size, consolidatedEarningsSquareEnix2004)
    totalCollectionSquareEnix.set(totalCollectionSquareEnix.size, consolidatedEarningsSquareEnix2005)
    totalCollectionSquareEnix.set(totalCollectionSquareEnix.size, consolidatedEarningsSquareEnix2006)
    totalCollectionSquareEnix.set(totalCollectionSquareEnix.size, consolidatedEarningsSquareEnix2007)
    totalCollectionSquareEnix.set(totalCollectionSquareEnix.size, consolidatedEarningsSquareEnix2008)
    totalCollectionSquareEnix.set(totalCollectionSquareEnix.size, consolidatedEarningsSquareEnix2009)
    totalCollectionSquareEnix.set(totalCollectionSquareEnix.size, consolidatedEarningsSquareEnix2010)
    totalCollectionSquareEnix.set(totalCollectionSquareEnix.size, consolidatedEarningsSquareEnix2011)
    totalCollectionSquareEnix.set(totalCollectionSquareEnix.size, consolidatedEarningsSquareEnix2012)
    totalCollectionSquareEnix.set(totalCollectionSquareEnix.size, consolidatedEarningsSquareEnix2013)
    totalCollectionSquareEnix.set(totalCollectionSquareEnix.size, consolidatedEarningsSquareEnix2014)
    totalCollectionSquareEnix.set(totalCollectionSquareEnix.size, consolidatedEarningsSquareEnix2015)
    totalCollectionSquareEnix.set(totalCollectionSquareEnix.size, consolidatedEarningsSquareEnix2016)
    totalCollectionSquareEnix.set(totalCollectionSquareEnix.size, consolidatedEarningsSquareEnix2017)
    totalCollectionSquareEnix.set(totalCollectionSquareEnix.size, consolidatedEarningsSquareEnix2018)
    totalCollectionSquareEnix.set(totalCollectionSquareEnix.size, consolidatedEarningsSquareEnix2019)
    totalCollectionSquareEnix.set(totalCollectionSquareEnix.size, consolidatedEarningsSquareEnix2020)
    totalCollectionSquareEnix.set(totalCollectionSquareEnix.size, consolidatedEarningsSquareEnix2021)
    totalCollectionSquareEnix.set(totalCollectionSquareEnix.size, consolidatedEarningsSquareEnix2022)
    totalCollectionSquareEnix.set(totalCollectionSquareEnix.size, consolidatedEarningsSquareEnix2023)

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

function operatingResultsMakerV2(completeCollection: Map<number, EarningsJSONV2>): string[] {

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

    let titleHeader = headerMaker(completeCollection.get(completeCollection.size -1) as EarningsJSONV2)

    let dateHeader = labelMaker(completeCollection.get(completeCollection.size -1) as EarningsJSONV2)

    let completeHeader = titleHeader + dateHeader;
    
    let get1 = printAllValues(netSales).map(elem => completeHeader + elem);

    let get2 = printAllValues(operatingIncome);

    let get3 = printAllValues(netIncome);

    let combine = get1.map((elem, index) => elem + get2[index] + get3[index])

    return combine
}

function printAllValues(list: Map<number, EarningsV2>): string[] {

    function sectionHeader(name: string | undefined, textLength: number): string {
        return liner(border([
        spacer(name ?? "Error", textLength,"left"),
    ]),"−","both",true)
    } 

    let toReturn = new Map<number, string[]>([
        [0, [sectionHeader(list.get(0)?.name, 35)]],
        [1, [sectionHeader(list.get(0)?.name, 35)]],
        [2, [sectionHeader(list.get(0)?.name, 35)]],
        [3, [sectionHeader(list.get(0)?.name, 35)]],
        [4, [sectionHeader(list.get(0)?.name, 34)]],
        [5, [sectionHeader(list.get(0)?.name, 44)]],
        [6, [sectionHeader(list.get(0)?.name, 37)]],
    ]); 

    let getValues = new Map<number, number[]>([
        [0, []],
        [1, []],
        [2, []],
        [3, []],
        [4, []],
        [5, []],
        [6, []],
    ])

    function valueMake(value: EarningsValue, fiscalYear: string): string {
        
        return (value.kind === "Quarter" || value.kind === "Cumulative")
            ? border([
                spacer(fiscalYear.slice(0, -4) + value.period,(10+value.period.length),"left"),
                spacer(`¥${value.value.toLocaleString("en")}M`,12,"right")
             ],true) 
            : ""
    }

    list.forEach((value, key, map) => {

        let thisFY = (value.Q4CmlValue.kind === "Cumulative") ? value.Q4CmlValue.thisFY : "Error";
        // toReturn.set(0, (toReturn.get(0) ?? "") + valueMake(value.Q1QtrValue))
        toReturn.set(0, (toReturn.get(0) ?? []).concat(valueMake(value.Q1QtrValue, thisFY)))
        toReturn.set(1, (toReturn.get(1) ?? []).concat(valueMake(value.Q2QtrValue, thisFY)))
        toReturn.set(2, (toReturn.get(2) ?? []).concat(valueMake(value.Q3QtrValue, thisFY)))
        toReturn.set(3, (toReturn.get(3) ?? []).concat(valueMake(value.Q4QtrValue, thisFY)))
        toReturn.set(4, (toReturn.get(4) ?? []).concat(valueMake(value.Q2CmlValue, thisFY)))
        toReturn.set(5, (toReturn.get(5) ?? []).concat(valueMake(value.Q3CmlValue, thisFY)))
        toReturn.set(6, (toReturn.get(6) ?? []).concat(valueMake(value.Q4CmlValue, thisFY)))

        getValues.set(0, (getValues.get(0) ?? []).concat(value.Q1QtrValue.kind === "Quarter" ? value.Q1QtrValue.value : []))
        getValues.set(1, (getValues.get(1) ?? []).concat(value.Q2QtrValue.kind === "Quarter" ? value.Q2QtrValue.value : []))
        getValues.set(2, (getValues.get(2) ?? []).concat(value.Q3QtrValue.kind === "Quarter" ? value.Q3QtrValue.value : []))
        getValues.set(3, (getValues.get(3) ?? []).concat(value.Q4QtrValue.kind === "Quarter" ? value.Q4QtrValue.value : []))
        getValues.set(4, (getValues.get(4) ?? []).concat(value.Q2CmlValue.kind === "Cumulative" ? value.Q2CmlValue.value : []))
        getValues.set(5, (getValues.get(5) ?? []).concat(value.Q3CmlValue.kind === "Cumulative" ? value.Q3CmlValue.value : []))
        getValues.set(6, (getValues.get(6) ?? []).concat(value.Q4CmlValue.kind === "Cumulative" ? value.Q4CmlValue.value : []))

    })

    toReturn.forEach((value, key, map) => {

        let getTextLength = (offset: number) => (map.get(key)?.at(-2)?.length === undefined)
            ? 0
            : (map.get(key)?.at(-2)?.length as number) - offset 
        
        map.set(key, (toReturn.get(key) ?? []).concat(
            printStats(
                printCount(getValues.get(key) ?? [0], getTextLength(21),15,true).concat(
                    printSum(getValues.get(key) ?? [0], getTextLength(21),15,"Million","¥",0,true),
                    printAverage(getValues.get(key) ?? [0], getTextLength(21), 15,"Million","¥",0,true),
                    printMedian(getValues.get(key) ?? [0], getTextLength(21), 15,"Million","¥",0,true),
                    printMininum(getValues.get(key) ?? [0], getTextLength(21), 15,"Million","¥",true),
                    printMaximum(getValues.get(key) ?? [0], getTextLength(21), 15,"Million","¥",true),
                )
            , getTextLength(3) ?? 0),
        ))
    })

    return [
        getConcat(toReturn.get(0)),
        getConcat(toReturn.get(1)),
        getConcat(toReturn.get(2)),
        getConcat(toReturn.get(3)),
        getConcat(toReturn.get(4)),
        getConcat(toReturn.get(5)),
        getConcat(toReturn.get(6)),
    ]
    
}

export function printStats(list: string[], textLength: number): string[] {

    let toPrint = list.reduce((acc, next) => acc + next,"")

    let toLiner = liner(toPrint, "−", "both", true, textLength)

    return [toLiner]
}

export function getCount(list: number[]): number {

    // let toFilter = list.filter(elem => elem.length !== 0)
    // let headerCount = 1;

    return (list.length)
}

export function getConcat(list: string[] | undefined): string {
    return (!list) 
        ? ""
        : list.reduce((acc, next) => acc + next, "");
}

export function getSum(list: number[], fixedLength: number): number {

    // let toReduce: number = list.reduce((acc, next) => {
    //     return (Number.isNaN(next) || next.length === 0)
    //         ? acc
    //         : acc + Number(next)
    // }, 0)

    let toReduce = list.reduce((acc, next) => acc + next, 0);
    
    return Number((toReduce).toFixed(fixedLength));
}

export function printCount(list: number[], textLength: number, valueLength: number, newLine: boolean, singleColumn?: boolean): string[] {

    let toPrint = (!singleColumn)
        ? border([
            spacer("Count",textLength,"left"),
            spacer(`${getCount(list)}`,/*15*/valueLength,"right"),
        ],newLine)
        : spacer(`${getCount(list)} |`,/*15*/valueLength,"right") + `${(!newLine) ? "" : "\n"}`;
        // : border([
        //     spacer(`${getCount(list)}`,/*15*/valueLength,"right"),
        // ],newLine)

    return [toPrint]
}

export function printSum(list: number[], textLength: number, valueLength: number, getNumberType: "Billion" | "Million" | "Thousand" | "None", getUnitsType: "¥" | "%" | "None", fixedLength: number, newLine: boolean, singleColumn?: boolean): string[] {

    const getValue = printValuePrimitive(getSum(list, fixedLength),numberType(getNumberType), getUnitsType) 

    let toPrint: string = (!singleColumn) 
    ? border([
        spacer("Sum",textLength,"left"),
        spacer(getValue,valueLength,"right"),
    ],newLine) 
    : spacer(getValue + " |",valueLength,"right") + `${(!newLine) ? "" : "\n"}`;
    // : border([
    //     spacer(getValue,/*15*/valueLength,"right"),
    // ],newLine)

    return [toPrint]
}

export function printAverage(list: number[], textLength: number, valueLength: number, getNumberType: "Billion" | "Million" | "Thousand" | "None", getUnitsType: "¥" | "%" | "None", fixedLength: number, newLine: boolean, singleColumn?: boolean): string[] {

    const calculateAverage = getSum(list, fixedLength) / getCount(list);

    const getRounding = Number(calculateAverage.toFixed(fixedLength));

    const printValue = printValuePrimitive(getRounding,numberType(getNumberType), getUnitsType) 

    let toPrint: string = (!singleColumn)
    ? border([
        spacer("Average",textLength,"left"),
        spacer(printValue,valueLength,"right"),
    ],newLine) 
    : spacer(printValue + " |",valueLength,"right") + `${(!newLine) ? "" : "\n"}`;
    // : border([
    //     spacer(printValue,valueLength,"right"),
    // ],newLine)

    return [toPrint]
}

export function printMininum(list: number[], textLength: number, valueLength: number, getNumberType: "Billion" | "Million" | "Thousand" | "None", getUnitsType: "¥" | "%" | "None", newLine: boolean, singleColumn?: boolean): string[] {

    const printValueMinimum = printValuePrimitive(Math.min(...list),numberType(getNumberType), getUnitsType) 

    let toPrint = (!singleColumn) 
    ? border([
        spacer("Minimum",textLength,"left"),
        spacer(printValueMinimum, valueLength,"right")
    ],newLine)
    : spacer(printValueMinimum + " |", valueLength,"right") + `${(!newLine) ? "" : "\n"}`;
    // : [border([
    //     spacer(printValueMinimum, valueLength,"right")
    // ],newLine)];

    return [toPrint]
}

export function printMaximum(list: number[], textLength: number, valueLength: number, getNumberType: "Billion" | "Million" | "Thousand" | "None", getUnitsType: "¥" | "%" | "None", newLine: boolean, singleColumn?: boolean): string[] {

    const printValueMax = printValuePrimitive(Math.max(...list),numberType(getNumberType), getUnitsType) 

    const toPrint = (!singleColumn) 
    ? border([
        spacer("Maximum",textLength,"left"),
        spacer(printValueMax, valueLength,"right"),
    ])
    : spacer(printValueMax + " |", valueLength,"right") + `${(!newLine) ? "" : "\n"}`;
    // : border([
    //     spacer(printValueMax, valueLength,"right")
    // ],newLine);

    return [toPrint]
}

export function printMedian(list: number[], textLength: number, valueLength: number, getNumberType: "Billion" | "Million" | "Thousand" | "None", getUnitsType: "¥" | "%" | "None", fixedLength: number, newLine: boolean, singleColumn?: boolean): string[] {

    const sortedList = list.sort((a, b) => {
        return a > b
            ? 1
            : a < b
                ? -1
                : 0
    })

    // const printValueMinimum = printValuePrimitive(sortedList[0],numberType(getNumberType), getUnitsType) 
    
    // const printValueMax = printValuePrimitive(sortedList[sortedList.length-1],numberType(getNumberType), getUnitsType) 

    // const printMininum = (!singleColumn) 
    // ? border([
    //     spacer("Minimum",textLength,"left"),
    //     spacer(printValueMinimum, valueLength,"right")
    // ],newLine)
    // : border([
    //     spacer(printValueMinimum, valueLength,"right")
    // ],newLine);

    // const printMaximum = (!singleColumn) 
    // ? border([
    //     spacer("Maximum",textLength,"left"),
    //     spacer(printValueMax, valueLength,"right"),
    // ])
    // : border([
    //     spacer(printValueMax, valueLength,"right")
    // ],newLine);

    let printMedian: string = ((sortedList.length % 2) !== 0) // odd number
            // median formula source: https://en.wikipedia.org/wiki/Median
            // odd number median(x) = x(n+1)/2 => index version => median(x) = (x(n+1)/2)-1
            ? printValuePrimitive(sortedList[((sortedList.length + 1)/2) -1],numberType(getNumberType), getUnitsType)
            // even number median(x) = (x(n/2) + x((n/2) + 1)) /2 => index version median(x) = (x((n/2)-1) + x((n/2))) /2
            : printValuePrimitive(
                Number(((sortedList[(sortedList.length/2) -1] + sortedList[(sortedList.length/2)])/2).toFixed(fixedLength))
                ,numberType(getNumberType), getUnitsType) // not fixed to 0 can lead to .5 values if not using decimals 

    let printMedianFixed: string = (!singleColumn) 
    ? border([
        spacer("Median",textLength,"left"),
        spacer(printMedian,valueLength,"right")
    ],newLine)
    : spacer(printMedian + " |", valueLength,"right") + `${(!newLine) ? "" : "\n"}`;
    // : border([
    //     spacer(printMedian, valueLength,"right")
    // ],newLine);

    return [
        printMedianFixed,
        // printMininum,
        // printMaximum,
    ]
}

// have to remember to put this in somehow... via footnotes most likely
let dataSourceNintendo = "Source: https://www.nintendo.co.jp/ir/en/finance/historical_data/index.html"

export const cumulativeEarningsListNintendo = operatingResultsMakerV2(totalCollectionNintendo).map(elem => elem + dataSourceNintendo);

export const cumulativeEarningsListBandaiNamco = operatingResultsMakerV2(totalCollectionBandaiNamco); 

export const cumulativeEarningsListCapcom = operatingResultsMakerV2(totalCollectionCapcom); 

export const cumulativeEarningsListKoeiTecmo = operatingResultsMakerV2(totalCollectionKoeiTecmo); 

export const cumulativeEarningsListSegaSammy = operatingResultsMakerV2(totalCollectionSegaSammy);

export const cumulativeEarningsListSquareEnix = operatingResultsMakerV2(totalCollectionSquareEnix)