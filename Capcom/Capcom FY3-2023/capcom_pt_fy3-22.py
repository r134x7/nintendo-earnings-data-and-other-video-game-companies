from operator import itemgetter

header_names0 = [  " Capcom - Platinum Titles ", " Title ", " Release Date and Rank ", " Platform ", " Units ", ] #header
header_names1 = ['{0: <32}'.format(elem) for elem in header_names0] # format width
row_names0 = [" 1st Quarter ", " 2nd Quarter ", " 3rd Quarter ", " 4th Quarter ", " FY3/23 Cumulative ", " FY3/23 Cml. YoY% ", " Life-To-Date "] # row names
row_names1 = ['{0: <20}'.format(elem) for elem in row_names0] # format width
special_0 = ["| FY3/23 Cml. | Titles |   Units |", "| New!        |", "| Recurring   |", "| Sporadic    |", "| Total       |", "| Percentages | Titles |   Units |"]

current_quarter = 1 # set to 1, 2, 3, or 4
print_all_or_fy_only = 1 # all titles set to 0, titles that sold this fy set to 1.

border_line = "+" + "-"*32 + "+"
border_line_double = "+" + "="*32 + "+"

#Input the cumulative figure for each quarter, [0] release date, [1] title name, [2] platforms, [3] Quarter 1, [4] Quarter 2, [5] Quarter 3, [6] Quarter 4, [7] LTD figure at end of the last fiscal year, [8] LTD figure at end of two fiscal years prior, [9] miscellaneous
title_1   = [" Jan 2018 ", " Monster Hunter: World ", " PS4, Xbox One, PC, DL ",
             17.3,  # [3] Quarter 1
             17.5,  # [4] Quarter 2
             17.80, # [5] Quarter 3
             18.00, # [6] Quarter 4
             18.00, # [7] LTD figure at end of the last fiscal year
             17.10, # [8] LTD figure at end of two fiscal years prior
             1,     # [9] miscellaneous
            ]
title_2   = [" Jan 2017 ", " RESIDENT EVIL 7 biohazard ", " PS4, Xbox One, PC, DL ", 
             9.8, # [3] Quarter 1
             10.2, # [4] Quarter 2
             10.60, # [5] Quarter 3
             10.80, # [6] Quarter 4
             10.80, # [7] LTD figure at end of the last fiscal year
             9.0, # [8] LTD figure at end of two fiscal years prior
             0, # [9] miscellaneous
            ]
title_3   = [" Jan 2019 ", " Resident Evil 2 ", " PS4, Xbox One, PC, DL ", 
             8.6, # [3] Quarter 1
             8.9, # [4] Quarter 2
             9.30, # [5] Quarter 3
             9.60, # [6] Quarter 4
             9.60, # [7] LTD figure at end of the last fiscal year
             8.1, # [8] LTD figure at end of two fiscal years prior
             0, # [9] miscellaneous
            ]
title_4   = [" Sep 2019 ", " Monster Hunter World: Iceborne ", " PS4, Xbox One, PC, DL ", 
             8.2, # [3] Quarter 1
             8.5, # [4] Quarter 2
             8.80, # [5] Quarter 3
             9.20, # [6] Quarter 4
             9.20, # [7] LTD figure at end of the last fiscal year
             7.7, # [8] LTD figure at end of two fiscal years prior
             0, # [9] miscellaneous
            ]
title_5   = [" Mar 2009 ", " Resident Evil 5 ", " PS3, Xbox 360, DL ", 
             7.9, # [3] Quarter 1
             8.0, # [4] Quarter 2
             8.10, # [5] Quarter 3
             8.20, # [6] Quarter 4
             8.20, # [7] LTD figure at end of the last fiscal year
             7.8, # [8] LTD figure at end of two fiscal years prior
             0, # [9] miscellaneous
            ]
title_6   = [" Oct 2012 ", " Resident Evil 6 ", " PS3, Xbox 360, DL ", 
             7.9, # [3] Quarter 1
             8.0, # [4] Quarter 2
             8.10, # [5] Quarter 3
             8.20, # [6] Quarter 4
             8.20, # [7] LTD figure at end of the last fiscal year
             7.8, # [8] LTD figure at end of two fiscal years prior
             0, # [9] miscellaneous
            ]
title_7   = [" Mar 2021 ", " Monster Hunter Rise ", " NSW, PC, DL ", 
             7.3, # [3] Quarter 1
             7.5, # [4] Quarter 2
             7.70, # [5] Quarter 3
             9.0, # [6] Quarter 4
             9.0, # [7] LTD figure at end of the last fiscal year
             4.8, # [8] LTD figure at end of two fiscal years prior
             0, # [9] miscellaneous
            ]
title_9   = [" Feb 2016 ", " Street Fighter V ", " PS4, PC, DL ", 
             5.8, # [3] Quarter 1
             6.0, # [4] Quarter 2
             6.10, # [5] Quarter 3
             6.20, # [6] Quarter 4
             6.20, # [7] LTD figure at end of the last fiscal year
             5.5, # [8] LTD figure at end of two fiscal years prior
             0, # [9] miscellaneous
            ]
title_10  = [" May 2021 ", " Resident Evil Village ", " PS4, PS5, Xbox One, XSX, PC, DL ", 
             4.5, # [3] Quarter 1
             4.8, # [4] Quarter 2
             5.70, # [5] Quarter 3
             6.10, # [6] Quarter 4
             6.10, # [7] LTD figure at end of the last fiscal year
             0, # [8] LTD figure at end of two fiscal years prior
             0, # [9] miscellaneous
            ]
title_12  = [" Apr 2020 ", " Resident Evil 3 ", " PS4, Xbox One, PC, DL ", 
             4.4, # [3] Quarter 1
             4.6, # [4] Quarter 2
             4.90, # [5] Quarter 3
             5.20, # [6] Quarter 4
             5.20, # [7] LTD figure at end of the last fiscal year
             4.0, # [8] LTD figure at end of two fiscal years prior
             0, # [9] miscellaneous
            ]
title_13  = [" Dec 2010 ", " Monster Hunter Freedom 3 ", " PSP, DL ", 
             4.90, # [3] Quarter 1
             4.90, # [4] Quarter 2
             4.90, # [5] Quarter 3
             4.90, # [6] Quarter 4
             4.90, # [7] LTD figure at end of the last fiscal year
             4.90, # [8] LTD figure at end of two fiscal years prior
             0, # [9] miscellaneous
            ]
title_14  = [" Mar 2019 ", " Devil May Cry 5 ", " PS4, Xbox One, PC, DL ", 
             4.5, # [3] Quarter 1
             4.7, # [4] Quarter 2
             4.80, # [5] Quarter 3
             5.00, # [6] Quarter 4
             5.00, # [7] LTD figure at end of the last fiscal year
             4.30, # [8] LTD figure at end of two fiscal years prior
             0, # [9] miscellaneous
            ]
title_15  = [" Mar 2017 ", " Monster Hunter Generations Ultimate ", " 3DS, NSW, DL ", 
             4.3, # [3] Quarter 1
             4.3, # [4] Quarter 2
             4.40, # [5] Quarter 3
             4.40, # [6] Quarter 4
             4.40, # [7] LTD figure at end of the last fiscal year
             4.30, # [8] LTD figure at end of two fiscal years prior
             0, # [9] miscellaneous
            ]
title_16  = [" Nov 2015 ", " Monster Hunter Generations ", " 3DS, DL ", 
             4.30, # [3] Quarter 1
             4.30, # [4] Quarter 2
             4.30, # [5] Quarter 3
             4.30, # [6] Quarter 4
             4.30, # [7] LTD figure at end of the last fiscal year
             4.30, # [8] LTD figure at end of two fiscal years prior
             0, # [9] miscellaneous
            ]
title_17  = [" Oct 2014 ", " Monster Hunter 4 Ultimate ", " 3DS, DL ", 
             4.20, # [3] Quarter 1
             4.20, # [4] Quarter 2
             4.20, # [5] Quarter 3
             4.20, # [6] Quarter 4
             4.20, # [7] LTD figure at end of the last fiscal year
             4.20, # [8] LTD figure at end of two fiscal years prior
             0, # [9] miscellaneous
            ]
title_18  = [" Sep 2013 ", " Monster Hunter 4 ", " 3DS, DL ", 
             4.10, # [3] Quarter 1
             4.10, # [4] Quarter 2
             4.10, # [5] Quarter 3
             4.10, # [6] Quarter 4
             4.10, # [7] LTD figure at end of the last fiscal year
             4.10, # [8] LTD figure at end of two fiscal years prior
             0, # [9] miscellaneous
            ]
title_20  = [" Mar 2008 ", " Monster Hunter Freedom Unite ", " PSP, DL ", 
             3.80, # [3] Quarter 1
             3.80, # [4] Quarter 2
             3.80, # [5] Quarter 3
             3.80, # [6] Quarter 4
             3.80, # [7] LTD figure at end of the last fiscal year
             3.80, # [8] LTD figure at end of two fiscal years prior
             0, # [9] miscellaneous
            ]
title_22  = [" Feb 2009 ", " Street Fighter IV ", " PS3, Xbox 360, DL ", 
             3.40, # [3] Quarter 1
             3.40, # [4] Quarter 2
             3.40, # [5] Quarter 3
             3.40, # [6] Quarter 4
             3.40, # [7] LTD figure at end of the last fiscal year
             3.40, # [8] LTD figure at end of two fiscal years prior
             0, # [9] miscellaneous
            ]
title_23  = [" Nov 2014 ", " Resident Evil ", " PS3, DL ", 
             3.1, # [3] Quarter 1
             3.2, # [4] Quarter 2
             3.30, # [5] Quarter 3
             3.40, # [6] Quarter 4
             3.40, # [7] LTD figure at end of the last fiscal year
             3.0, # [8] LTD figure at end of two fiscal years prior
             0, # [9] miscellaneous
            ]
title_24  = [" Jan 2016 ", " Resident Evil 0: HD Remaster ", " PS3, PS4, Xbox One, PC, DL ", 
             3.0, # [3] Quarter 1
             3.1, # [4] Quarter 2
             3.20, # [5] Quarter 3
             3.30, # [6] Quarter 4
             3.30, # [7] LTD figure at end of the last fiscal year
             2.9, # [8] LTD figure at end of two fiscal years prior
             0, # [9] miscellaneous
            ]
title_25  = [" Sep 2010 ", " Dead Rising 2 ", " PS3, Xbox 360, PC, DL ", 
             3.10, # [3] Quarter 1
             3.10, # [4] Quarter 2
             3.10, # [5] Quarter 3
             3.10, # [6] Quarter 4
             3.10, # [7] LTD figure at end of the last fiscal year
             3.10, # [8] LTD figure at end of two fiscal years prior
             0, # [9] miscellaneous
            ]
title_26  = [" Jan 2008 ", " Devil May Cry 4 ", " PS3, Xbox 360, DL ", 
             3.0, # [3] Quarter 1
             3.0, # [4] Quarter 2
             3.0, # [5] Quarter 3
             3.0, # [6] Quarter 4
             3.0, # [7] LTD figure at end of the last fiscal year
             3.0, # [8] LTD figure at end of two fiscal years prior
             0, # [9] miscellaneous
            ]
title_27  = [" Nov 2013 ", " Dead Rising 3 ", " Xbox One, DL ", 
             2.9, # [3] Quarter 1
             3.0, # [4] Quarter 2
             3.00, # [5] Quarter 3
             3.00, # [6] Quarter 4
             3.00, # [7] LTD figure at end of the last fiscal year
             2.9, # [8] LTD figure at end of two fiscal years prior
             0, # [9] miscellaneous
            ]
title_28  = [" Mar 2015 ", " Resident Evil Revelations 2 ", " PS3, PS4, Xbox 360, Xbox One, PC, DL ", 
             2.8, # [3] Quarter 1
             2.8, # [4] Quarter 2
             2.90, # [5] Quarter 3
             2.90, # [6] Quarter 4
             2.90, # [7] LTD figure at end of the last fiscal year
             2.7, # [8] LTD figure at end of two fiscal years prior
             0, # [9] miscellaneous
            ]
title_30  = [" Dec 2011 ", " Monster Hunter 3 Ultimate ", " 3DS, DL ", 
             2.60, # [3] Quarter 1
             2.60, # [4] Quarter 2
             2.60, # [5] Quarter 3
             2.60, # [6] Quarter 4
             2.60, # [7] LTD figure at end of the last fiscal year
             2.60, # [8] LTD figure at end of two fiscal years prior
             0, # [9] miscellaneous
            ]
title_31  = [" Mar 2012 ", " Resident Evil: Operation Raccoon City ", " PS3, Xbox 360, DL ", 
             2.6, # [3] Quarter 1
             2.60, # [4] Quarter 2
             2.60, # [5] Quarter 3
             2.60, # [6] Quarter 4
             2.60, # [7] LTD figure at end of the last fiscal year
             2.5, # [8] LTD figure at end of two fiscal years prior
             0, # [9] miscellaneous
            ]
title_32  = [" Jan 2013 ", " DmC Devil May Cry ", " PS3, Xbox 360, DL ", 
             2.50, # [3] Quarter 1
             2.50, # [4] Quarter 2
             2.60, # [5] Quarter 3
             2.60, # [6] Quarter 4
             2.60, # [7] LTD figure at end of the last fiscal year
             2.50, # [8] LTD figure at end of two fiscal years prior
             0, # [9] miscellaneous
            ]
title_33  = [" Aug 2016 ", " Resident Evil 4 ", " PS4, Xbox One, DL ", 
             2.30, # [3] Quarter 1
             2.4, # [4] Quarter 2
             2.50, # [5] Quarter 3
             2.60, # [6] Quarter 4
             2.60, # [7] LTD figure at end of the last fiscal year
             2.20, # [8] LTD figure at end of two fiscal years prior
             0, # [9] miscellaneous
            ]
title_35  = [" Jun 2016 ", " Resident Evil 5 ", " PS4, Xbox One, DL ", 
             2.20, # [3] Quarter 1
             2.3, # [4] Quarter 2
             2.40, # [5] Quarter 3
             2.40, # [6] Quarter 4
             2.40, # [7] LTD figure at end of the last fiscal year
             2.10, # [8] LTD figure at end of two fiscal years prior
             0, # [9] miscellaneous
            ]
title_37  = [" Mar 2016 ", " Resident Evil 6 ", " PS4, Xbox One, DL ", 
             2.30, # [3] Quarter 1
             2.30, # [4] Quarter 2
             2.30, # [5] Quarter 3
             2.30, # [6] Quarter 4
             2.30, # [7] LTD figure at end of the last fiscal year
             2.30, # [8] LTD figure at end of two fiscal years prior
             0, # [9] miscellaneous
            ]
title_38  = [" Feb 2010 ", " Resident Evil 5: Gold Edition ", " PS3, Xbox 360, DL ", 
             2.30, # [3] Quarter 1
             2.30, # [4] Quarter 2
             2.30, # [5] Quarter 3
             2.30, # [6] Quarter 4
             2.30, # [7] LTD figure at end of the last fiscal year
             2.30, # [8] LTD figure at end of two fiscal years prior
             0, # [9] miscellaneous
            ]
title_40  = [" Apr 2013 ", " Dragon’s Dogma: Dark Arisen ", " PS3, Xbox 360, DL ", 
             2.20, # [3] Quarter 1
             2.20, # [4] Quarter 2
             2.20, # [5] Quarter 3
             2.30, # [6] Quarter 4
             2.30, # [7] LTD figure at end of the last fiscal year
             2.10, # [8] LTD figure at end of two fiscal years prior
             0, # [9] miscellaneous
            ]
title_42  = [" May 2013 ", " Resident Evil Revelations ", " PS3, Xbox 360, Wii U, PC, DL ", 
             2.10, # [3] Quarter 1
             2.10, # [4] Quarter 2
             2.20, # [5] Quarter 3
             2.20, # [6] Quarter 4
             2.20, # [7] LTD figure at end of the last fiscal year
             2.10, # [8] LTD figure at end of two fiscal years prior
             0, # [9] miscellaneous
            ]
title_45  = [" May 2018 ", " Street Fighter 30th Anniversary Collection ", " PS4, Xbox One, NSW, PC, DL ", 
             1.9, # [3] Quarter 1
             2.0, # [4] Quarter 2
             2.10, # [5] Quarter 3
             2.20, # [6] Quarter 4
             2.20, # [7] LTD figure at end of the last fiscal year
             1.8, # [8] LTD figure at end of two fiscal years prior
             0, # [9] miscellaneous
            ]
title_46  = [" May 2010 ", " Lost Planet 2 ", " PS3, Xbox 360, DL ", 
             2.10, # [3] Quarter 1
             2.10, # [4] Quarter 2
             2.10, # [5] Quarter 3
             2.10, # [6] Quarter 4
             2.10, # [7] LTD figure at end of the last fiscal year
             2.0, # [8] LTD figure at end of two fiscal years prior
             0, # [9] miscellaneous
            ]
title_48  = [" May 2007 ", " Resident Evil 4 Wii edition ", " Wii, DL ", 
             2.00, # [3] Quarter 1
             2.00, # [4] Quarter 2
             2.00, # [5] Quarter 3
             2.00, # [6] Quarter 4
             2.00, # [7] LTD figure at end of the last fiscal year
             2.00, # [8] LTD figure at end of two fiscal years prior
             0, # [9] miscellaneous
            ]
title_51  = [" Apr 2010 ", " Super Street Fighter IV ", " PS3, Xbox 360, DL ", 
             1.90, # [3] Quarter 1
             1.90, # [4] Quarter 2
             1.90, # [5] Quarter 3
             1.90, # [6] Quarter 4
             1.90, # [7] LTD figure at end of the last fiscal year
             1.90, # [8] LTD figure at end of two fiscal years prior
             0, # [9] miscellaneous
            ]
title_52  = [" Mar 2012 ", " Street Fighter X Tekken ", " PS3, Xbox 360, DL ", 
             1.90, # [3] Quarter 1
             1.90, # [4] Quarter 2
             1.90, # [5] Quarter 3
             1.90, # [6] Quarter 4
             1.90, # [7] LTD figure at end of the last fiscal year
             1.80, # [8] LTD figure at end of two fiscal years prior
             0, # [9] miscellaneous
            ]
title_53  = [" Aug 2006 ", " Dead Rising ", " Xbox 360, DL ", 
             1.80, # [3] Quarter 1
             1.80, # [4] Quarter 2
             1.80, # [5] Quarter 3
             1.80, # [6] Quarter 4
             1.80, # [7] LTD figure at end of the last fiscal year
             1.80, # [8] LTD figure at end of two fiscal years prior
             0, # [9] miscellaneous
            ]
title_54  = [" Jun 2015 ", " Devil May Cry 4 Special Edition ", " PS4, Xbox One, DL ",
             1.70, # [3] Quarter 1
             1.80, # [4] Quarter 2
             1.80, # [5] Quarter 3
             1.90, # [6] Quarter 4
             1.90, # [7] LTD figure at end of the last fiscal year
             1.60, # [8] LTD figure at end of two fiscal years prior
             0, # [9] miscellaneous
            ]
title_55  = [" Sep 2017 ", " Marvel vs. Capcom: Infinite ", " PS4, Xbox One, PC, DL ",
             1.70, # [3] Quarter 1
             1.70, # [4] Quarter 2
             1.80, # [5] Quarter 3
             1.90, # [6] Quarter 4
             1.90, # [7] LTD figure at end of the last fiscal year
             1.70, # [8] LTD figure at end of two fiscal years prior
             0, # [9] miscellaneous
            ]
title_56  = [" Dec 2017 ", " Okami HD ", " PS4, Xbox One, NSW, DL ",
             1.70, # [3] Quarter 1
             1.70, # [4] Quarter 2
             1.80, # [5] Quarter 3
             1.90, # [6] Quarter 4
             1.90, # [7] LTD figure at end of the last fiscal year
             1.60, # [8] LTD figure at end of two fiscal years prior
             0, # [9] miscellaneous
            ]
title_57  = [" Feb 2014 ", " Resident Evil 4: Ultimate HD Edition ", " PC, DL ",
             1.60, # [3] Quarter 1
             1.70, # [4] Quarter 2
             1.80, # [5] Quarter 3
             1.90, # [6] Quarter 4
             1.90, # [7] LTD figure at end of the last fiscal year
             1.40, # [8] LTD figure at end of two fiscal years prior
             0, # [9] miscellaneous
            ]
title_58  = [" Oct 2017 ", " Dragon’s Dogma: Dark Arisen ", " PS4, Xbox One, DL ",
             1.60, # [3] Quarter 1
             1.60, # [4] Quarter 2
             1.70, # [5] Quarter 3
             1.70, # [6] Quarter 4
             1.70, # [7] LTD figure at end of the last fiscal year
             1.60, # [8] LTD figure at end of two fiscal years prior
             0, # [9] miscellaneous
            ]
title_62  = [" Dec 2006 ", " Lost Planet Extreme Condition ", " Xbox 360, DL ",
             1.60, # [3] Quarter 1
             1.60, # [4] Quarter 2
             1.60, # [5] Quarter 3
             1.70, # [6] Quarter 4
             1.70, # [7] LTD figure at end of the last fiscal year
             1.60, # [8] LTD figure at end of two fiscal years prior
             0, # [9] miscellaneous
            ]
title_66  = [" Aug 2014 ", " Ultra Street Fighter IV ", " PS3, Xbox 360, PC, DL ",
             1.50, # [3] Quarter 1
             1.50, # [4] Quarter 2
             1.50, # [5] Quarter 3
             1.60, # [6] Quarter 4
             1.60, # [7] LTD figure at end of the last fiscal year
             1.50, # [8] LTD figure at end of two fiscal years prior
             0, # [9] miscellaneous
            ]
title_67  = [" Nov 2013 ", " DuckTales: Remastered ", " PS3, Xbox 360, Wii U, DL ",
             1.40, # [3] Quarter 1
             1.40, # [4] Quarter 2
             1.50, # [5] Quarter 3
             1.50, # [6] Quarter 4
             1.50, # [7] LTD figure at end of the last fiscal year
             1.40, # [8] LTD figure at end of two fiscal years prior
             0, # [9] miscellaneous
            ]
title_70  = [" Jul 2021 ", " Monster Hunter Stories 2: Wings of Ruin ", " NSW, PC, DL ",
             0, # [3] Quarter 1
             1.30, # [4] Quarter 2
             1.40, # [5] Quarter 3
             1.50, # [6] Quarter 4
             1.50, # [7] LTD figure at end of the last fiscal year
             0, # [8] LTD figure at end of two fiscal years prior
             0, # [9] miscellaneous
            ]
title_71  = [" Oct 2010 ", " Dead Rising 2 Off The Record ", " PS3, Xbox 360, DL ",
             1.40, # [3] Quarter 1
             1.40, # [4] Quarter 2
             1.40, # [5] Quarter 3
             1.40, # [6] Quarter 4
             1.40, # [7] LTD figure at end of the last fiscal year
             1.40, # [8] LTD figure at end of two fiscal years prior
             0, # [9] miscellaneous
            ]
title_72  = [" Oct 2018 ", " Mega Man 11 ", " PS4, Xbox One, NSW, DL ",
             1.30, # [3] Quarter 1
             1.40, # [4] Quarter 2
             1.40, # [5] Quarter 3
             1.50, # [6] Quarter 4
             1.50, # [7] LTD figure at end of the last fiscal year
             1.30, # [8] LTD figure at end of two fiscal years prior
             0, # [9] miscellaneous
            ]
title_73  = [" Feb 2019 ", " Phoenix Wright: Ace Attorney Trilogy ", " PS4, NSW, DL ",
             1.20, # [3] Quarter 1
             1.30, # [4] Quarter 2
             1.40, # [5] Quarter 3
             1.60, # [6] Quarter 4
             1.60, # [7] LTD figure at end of the last fiscal year
             1.10, # [8] LTD figure at end of two fiscal years prior
             0, # [9] miscellaneous
            ]
title_74  = [" Jul 2009 ", " Marvel vs. Capcom 2: New Age Of Heroes ", " DL (PS3, Xbox 360) ",
             1.40, # [3] Quarter 1
             1.40, # [4] Quarter 2
             1.40, # [5] Quarter 3
             1.40, # [6] Quarter 4
             1.40, # [7] LTD figure at end of the last fiscal year
             1.4, # [8] LTD figure at end of two fiscal years prior
             0, # [9] miscellaneous
            ]
title_79  = [" Dec 2005 ", " Monster Hunter Freedom ", " PSP, DL ",
             1.30, # [3] Quarter 1
             1.30, # [4] Quarter 2
             1.30, # [5] Quarter 3
             1.30, # [6] Quarter 4
             1.30, # [7] LTD figure at end of the last fiscal year
             1.30, # [8] LTD figure at end of two fiscal years prior
             0, # [9] miscellaneous
            ]
title_80  = [" Jun 2013 ", " Remember Me ", " PS3, Xbox 360, PC, DL ",
             1.30, # [3] Quarter 1
             1.30, # [4] Quarter 2
             1.30, # [5] Quarter 3
             1.30, # [6] Quarter 4
             1.30, # [7] LTD figure at end of the last fiscal year
             1.30, # [8] LTD figure at end of two fiscal years prior
             0, # [9] miscellaneous
            ]
title_81  = [" Feb 2011 ", " Super Street Fighter IV 3D Edition ", " 3DS, DL ",
             1.30, # [3] Quarter 1
             1.30, # [4] Quarter 2
             1.30, # [5] Quarter 3
             1.30, # [6] Quarter 4
             1.30, # [7] LTD figure at end of the last fiscal year
             1.30, # [8] LTD figure at end of two fiscal years prior
             0, # [9] miscellaneous
            ]
title_83  = [" Mar 2017 ", " Ultimate Marvel vs. Capcom 3 ", " PS4, Xbox One, DL ",
             1.20, # [3] Quarter 1
             1.20, # [4] Quarter 2
             1.30, # [5] Quarter 3
             1.30, # [6] Quarter 4
             1.30, # [7] LTD figure at end of the last fiscal year
             1.10, # [8] LTD figure at end of two fiscal years prior
             0, # [9] miscellaneous
            ]
title_86  = [" Dec 2016 ", " Dead Rising 4 ", " Xbox One, PC, DL ",
             1.20, # [3] Quarter 1
             1.20, # [4] Quarter 2
             1.20, # [5] Quarter 3
             1.30, # [6] Quarter 4
             1.30, # [7] LTD figure at end of the last fiscal year
             1.20, # [8] LTD figure at end of two fiscal years prior
             0, # [9] miscellaneous
            ]
title_87  = [" Mar 2012 ", " Resident Evil 4 ", " DL (PS3, Xbox 360) ",
             1.20, # [3] Quarter 1
             1.20, # [4] Quarter 2
             1.20, # [5] Quarter 3
             1.20, # [6] Quarter 4
             1.20, # [7] LTD figure at end of the last fiscal year
             1.20, # [8] LTD figure at end of two fiscal years prior
             0, # [9] miscellaneous
            ]
title_88  = [" Aug 2015 ", " Mega Man Legacy Collection ", " PS4, Xbox One, DL ",
             1.20, # [3] Quarter 1
             1.20, # [4] Quarter 2
             1.20, # [5] Quarter 3
             1.20, # [6] Quarter 4
             1.20, # [7] LTD figure at end of the last fiscal year
             1.20, # [8] LTD figure at end of two fiscal years prior
             0, # [9] miscellaneous
            ]
title_90  = [" Nov 2011 ", " Ultimate Marvel vs. Capcom 3 ", " PS3, Xbox 360, DL ",
             1.20, # [3] Quarter 1
             1.20, # [4] Quarter 2
             1.20, # [5] Quarter 3
             1.20, # [6] Quarter 4
             1.20, # [7] LTD figure at end of the last fiscal year
             1.20, # [8] LTD figure at end of two fiscal years prior
             0, # [9] miscellaneous
            ]
title_91  = [" Sep 2016 ", " Dead Rising ", " PS4, Xbox One, DL ",
             1.20, # [3] Quarter 1
             1.20, # [4] Quarter 2
             1.20, # [5] Quarter 3
             1.20, # [6] Quarter 4
             1.20, # [7] LTD figure at end of the last fiscal year
             1.10, # [8] LTD figure at end of two fiscal years prior
             0, # [9] miscellaneous
            ]
title_92  = [" Mar 2015 ", " DMC Devil May Cry Definitive Edition ", " PS4, Xbox One, DL ",
             1.20, # [3] Quarter 1
             1.20, # [4] Quarter 2
             1.20, # [5] Quarter 3
             1.20, # [6] Quarter 4
             1.20, # [7] LTD figure at end of the last fiscal year
             1.10, # [8] LTD figure at end of two fiscal years prior
             0, # [9] miscellaneous
            ]
title_93  = [" Mar 2012 ", " Devil May Cry HD Collection ", " PS3, Xbox 360, DL ",
             1.20, # [3] Quarter 1
             1.20, # [4] Quarter 2
             1.20, # [5] Quarter 3
             1.20, # [6] Quarter 4
             1.20, # [7] LTD figure at end of the last fiscal year
             1.20, # [8] LTD figure at end of two fiscal years prior
             0, # [9] miscellaneous
            ]
title_99  = [" Jun 2011 ", " Super Street Fighter IV Arcade Edition ", " PS3, Xbox 360, DL ",
             1.10, # [3] Quarter 1
             1.10, # [4] Quarter 2
             1.10, # [5] Quarter 3
             1.10, # [6] Quarter 4
             1.10, # [7] LTD figure at end of the last fiscal year
             1.10, # [8] LTD figure at end of two fiscal years prior
             0, # [9] miscellaneous
            ]
title_100 = [" Jun 2009 ", " Bionic Commando ", " PS3, Xbox 360, PC, DL ",
             1.10, # [3] Quarter 1
             1.10, # [4] Quarter 2
             1.10, # [5] Quarter 3
             1.10, # [6] Quarter 4
             1.10, # [7] LTD figure at end of the last fiscal year
             1.10, # [8] LTD figure at end of two fiscal years prior
             0, # [9] miscellaneous
            ]
title_101 = [" Nov 2017 ", " Resident Evil Revelations Collection ", " NSW, DL ",
             1.0, # [3] Quarter 1
             1.0, # [4] Quarter 2
             1.10, # [5] Quarter 3
             1.10, # [6] Quarter 4
             1.10, # [7] LTD figure at end of the last fiscal year
             0, # [8] LTD figure at end of two fiscal years prior
             0, # [9] miscellaneous
            ]
title_105 = [" Feb 2014 ", " Strider ", " DL (PS3, PS4, Xbox 360, Xbox One, PC) ",
             1.00, # [3] Quarter 1
             1.00, # [4] Quarter 2
             1.00, # [5] Quarter 3
             1.10, # [6] Quarter 4
             1.10, # [7] LTD figure at end of the last fiscal year
             1.00, # [8] LTD figure at end of two fiscal years prior
             0, # [9] miscellaneous
            ]

# Non-digital titles separated from rest for easier sorting and input
title_112 = [" Jun 1990 ", " Chip'n Dale Rescue Rangers ", " NES ", 1.20, 1.20, 1.20, 1.20, 1.20, 1.20, 0,]
title_111 = [" Nov 1992 ", " Magical Quest Starring Mickey ", " SNES ", 1.21, 1.21, 1.21, 1.21, 1.21, 1.21, 0,]
title_110 = [" Sep 1990 ", " Duck Tales ", " GB ", 1.43, 1.43, 1.43, 1.43, 1.43, 1.43, 0,]
title_109 = [" Jan 1990 ", " Duck Tales ", " NES ", 1.67, 1.67, 1.67, 1.67, 1.67, 1.67, 0,]
title_108 = [" Nov 1993 ", " Aladdin ", " SNES ", 1.75, 1.75, 1.75, 1.75, 1.75, 1.75, 0,]
title_107 = [" Feb 2006 ", " Devil May Cry 3 Special Edition ", " PS2 ", 1.00, 1.00, 1.00, 1.00, 1.00, 1.00, 0,]
title_106 = [" Dec 1998 ", " Street Fighter Alpha 3 ", " PS ", 1.00, 1.00, 1.00, 1.00, 1.00, 1.00, 0,]
title_104 = [" May 1993 ", " Final Fight 2 ", " SNES ", 1.03, 1.03, 1.03, 1.03, 1.03, 1.03, 0,]
title_103 = [" Sep 1990 ", " Mega Man 3 ", " NES ", 1.08, 1.08, 1.08, 1.08, 1.08, 1.08, 0,]
title_102 = [" Oct 1991 ", " Super Ghouls’n Ghosts ", " SNES ", 1.09, 1.09, 1.09, 1.09, 1.09, 1.09, 0,]
title_98  = [" Sep 1997 ", " Resident Evil Director’s Cut ", " PS ", 1.13, 1.13, 1.13, 1.13, 1.13, 1.13, 0,]
title_97  = [" Sep 1986 ", " Commando ", " NES ", 1.14, 1.14, 1.14, 1.14, 1.14, 1.14, 0,]
title_96  = [" Feb 2000 ", " Resident Evil Code: Veronica ", " DC ", 1.14, 1.14, 1.14, 1.14, 1.14, 1.14, 0,]
title_95  = [" Dec 1993 ", " Mega Man X ", " SNES ", 1.16, 1.16, 1.16, 1.16, 1.16, 1.16, 0,]
title_94  = [" Aug 1998 ", " Resident Evil Director’s Cut Dual Shock ", " PS ", 1.20, 1.20, 1.20, 1.20, 1.20, 1.20, 0,]
title_89  = [" Sep 2000 ", " Dino Crisis 2 ", " PS ", 1.20, 1.20, 1.20, 1.20, 1.20, 1.20, 0,]
title_85  = [" Nov 2002 ", " Resident Evil 0 ", " GC ", 1.25, 1.25, 1.25, 1.25, 1.25, 1.25, 0,]
title_84  = [" Feb 2005 ", " Devil May Cry 3 ", " PS2 ", 1.30, 1.30, 1.30, 1.30, 1.30, 1.30, 0,]
title_82  = [" Nov 2007 ", " Resident Evil: The Umbrella Chronicles ", " Wii ", 1.30, 1.30, 1.30, 1.30, 1.30, 1.30, 0,]
title_78  = [" May 2012 ", " Dragon’s Dogma ", " PS3, Xbox 360 ", 1.30, 1.30, 1.30, 1.30, 1.30, 1.30, 0,]
title_77  = [" Dec 2003 ", " Mega Man Battle Network 4 ", " GBA ", 1.35, 1.35, 1.35, 1.35, 1.35, 1.35, 0,]
title_76  = [" Mar 2002 ", " Resident Evil ", " GC ", 1.35, 1.35, 1.35, 1.35, 1.35, 1.35, 0,]
title_75  = [" Mar 2001 ", " Resident Evil Code: Veronica X ", " PS2 ", 1.40, 1.40, 1.40, 1.40, 1.40, 1.40, 0,]
title_69  = [" Dec 2003 ", " Resident Evil Outbreak ", " PS2 ", 1.45, 1.45, 1.45, 1.45, 1.45, 1.45, 0,]
title_68  = [" Dec 1990 ", " Final Fight ", " SNES ", 1.48, 1.48, 1.48, 1.48, 1.48, 1.48, 0,]
title_65  = [" Dec 1988 ", " Mega Man 2 ", " NES ", 1.51, 1.51, 1.51, 1.51, 1.51, 1.51, 0,]
title_64  = [" Feb 2004 ", " Onimusha 3: Demon Siege ", " PS2 ", 1.52, 1.52, 1.52, 1.52, 1.52, 1.52, 0,]
title_63  = [" Jan 2005 ", " Resident Evil 4 ", " GC ", 1.60, 1.60, 1.60, 1.60, 1.60, 1.60, 0,]
title_61  = [" Jun 1986 ", " Ghosts’n Goblins ", " NES ", 1.64, 1.64, 1.64, 1.64, 1.64, 1.64, 0,]
title_60  = [" Sep 1993 ", " Street Fighter II’ Special Champion Edition ", " MD ", 1.65, 1.65, 1.65, 1.65, 1.65, 1.65, 0,]
title_59  = [" Jan 2003 ", " Devil May Cry 2 ", " PS2 ", 1.70, 1.70, 1.70, 1.70, 1.70, 1.70, 0,]
title_50  = [" Aug 2009 ", " Monster Hunter Tri ", " Wii ", 1.90, 1.90, 1.90, 1.90, 1.90, 1.90, 0,]
title_49  = [" Jun 1994 ", " Super Street Fighter II ", " SNES ", 2.00, 2.00, 2.00, 2.00, 2.00, 2.00, 0,]
title_47  = [" Jan 2001 ", " Onimusha: Warlords ", " PS2 ", 2.02, 2.02, 2.02, 2.02, 2.02, 2.02, 0,]
title_44  = [" Mar 2002 ", " Onimusha 2: Samurai’s Destiny ", " PS2 ", 2.10, 2.10, 2.10, 2.10, 2.10, 2.10, 0,]
title_43  = [" Aug 2001 ", " Devil May Cry ", " PS2 ", 2.16, 2.16, 2.16, 2.16, 2.16, 2.16, 0,]
title_41  = [" Feb 2011 ", " Marvel vs. Capcom 3: Fate of Two Worlds ", " PS3, Xbox 360 ", 2.20, 2.20, 2.20, 2.20, 2.20, 2.20, 0,]
title_39  = [" Dec 2005 ", " Resident Evil 4 ", " PS2 ", 2.30, 2.30, 2.30, 2.30, 2.30, 2.30, 0,]
title_36  = [" Jul 1999 ", " Dino Crisis ", " PS ", 2.40, 2.40, 2.40, 2.40, 2.40, 2.40, 0,]
title_34  = [" Feb 2007 ", " Monster Hunter Freedom 2 ", " PSP ", 2.40, 2.40, 2.40, 2.40, 2.40, 2.40, 0,]
title_29  = [" Mar 1996 ", " Resident Evil ", " PS ", 2.75, 2.75, 2.75, 2.75, 2.75, 2.75, 0,]
title_21  = [" Sep 1999 ", " Resident Evil 3 Nemesis ", " PS ", 3.50, 3.50, 3.50, 3.50, 3.50, 3.50, 0,]
title_19  = [" Jul 1993 ", " Street Fighter II Turbo ", " SNES ", 4.10, 4.10, 4.10, 4.10, 4.10, 4.10, 0,]
title_11  = [" Jan 1998 ", " Resident Evil 2 ", " PS ", 4.96, 4.96, 4.96, 4.96, 4.96, 4.96, 0,]
title_8   = [" Jun 1992 ", " Street Fighter II ", " SNES ", 6.30, 6.30, 6.30, 6.30, 6.30, 6.30, 0,]



misc_1 = "(* Excludes shipments of \n Monster Hunter World: \n Iceborne Master Edition)"

misc_2 = "NES: Nintendo Entertainment System, \nGB: Game Boy, \nSNES: Super Nintendo Entertainment System,"
misc_3 = "GBA: Game Boy Advance, \n3DS: Nintendo 3DS, \nGC: Nintendo GameCube, \nMD: Mega Drive/Genesis,"
misc_4 = "DC: DreamCast, \nPS: PlayStation®, \nPS2: PlayStation®2, \nPS3: PlayStation®3, \nPS4: PlayStation®4,"
misc_5 = "PSP: PSP® (PlayStation®Portable), \nPSV: PlayStation®Vita, \nDL: Full-game download, \nNSW: Nintendo Switch"

misc_6 = "\n[DL (Full-game download) includes all \ndigital download units for each platform.]"

line_break_1 = "###" # line break

for_loop_list_1 = [] # empty array

for i in range(112): # number of titles
    take_1 = "title_" + str(i+1) # convert to string
    take_2 = globals()[take_1] # changes the string to a variable
    for_loop_list_1.append(take_2) # puts the variable into the array

for_loop_list_2 = sorted(for_loop_list_1, reverse=True, key=itemgetter(6)) # the titles are sorted by the global fy number of the 4th quarter.

for i in range (len(for_loop_list_2)): # for adding in ranks after sorting
    rank_1 = " Rank " + str(i+1) + " "
    rank_2 = '{0: <11}'.format(rank_1)
    for_loop_list_2[i].append(rank_2) # goes to [10] of each title

def quarterly_calculation (y):

    y1 = []
    z1 = [y[0], y[10], y[9]] # release date, rank, misc
    a1 = []

    for i in range(current_quarter):
        if i != 0:
            y1.append(y[i+3] - y[i+2]) # [0] Q1, [1] Q2, [2] Q3, [3] Q4
        else: y1.append(y[i+3] - y[7])
    else:
        while len(y1) < 4: y1.append(0) # To simplify inputs

    y1.append(y1[0] + y1[1] + y1[2] + y1[3] ) # fy cumulative y1[4]
    y1.append(y[7] + y1[0] + y1[1] + y1[2] + y1[3]) # LTD y1[5]

    if y1[4] != 0 and y[7] != 0 and y[7] != y[8]: # has to check that last fy number isn't 0 but if it isn't, has to check that it's not the same number as the fy prior to that one   
        a1.append(((y1[4] / (y[7] - y[8])) - 1) * 100) # to calculate yoy percentage, y1[6]
    elif y1[4] != 0 and y[7] != 0 and y[7] == y[8]:
        a1.append("+Infinity%") # to calculate yoy percentage, y1[6]
    else: a1.append("New!") # for dealing with divide by zeros

    z2 = str.split(y[1]) # title
    z3 = str.split(y[2]) # platforms
    
    first_line_title = []
    first_line_title_check = []
    second_line_title = []
    line_join_title = ""

    for i in z2:
        first_line_title_check.append((len(i + " ")))
        if sum(first_line_title_check) > 31:
            second_line_title.append(i + " ")
        else: first_line_title.append(i + " ")

    if second_line_title:
        line_join_title = line_join_title.join(first_line_title) + " "*(31-len(line_join_title.join(first_line_title))) + "|" + "\n" + "| " + line_join_title.join(second_line_title) + " "*(31-len(line_join_title.join(second_line_title)))
    else: line_join_title = line_join_title.join(first_line_title) + " "*(31-sum(first_line_title_check))

    first_line_platforms = []
    first_line_platforms_check = []
    second_line_platforms = []
    line_join_platforms = ""

    for i in z3:
        first_line_platforms_check.append((len(i + " ")))
        if sum(first_line_platforms_check) > 31:
            second_line_platforms.append(i + " ")
        else: first_line_platforms.append(i + " ")

    if second_line_platforms:
        line_join_platforms = line_join_platforms.join(first_line_platforms) + " "*(31-len(line_join_platforms.join(first_line_platforms))) + "|" + "\n" + "| " + line_join_platforms.join(second_line_platforms) + " "*(31-len(line_join_platforms.join(second_line_platforms)))
    else: line_join_platforms = line_join_platforms.join(first_line_platforms) + " "*(31-sum(first_line_platforms_check))

    if y1[4] != 0 and current_quarter == 4:
        if "New!" == a1[0]:
            new.append(y1[4])
        elif "+Infinity%" == a1[0]:
            inf.append(y1[4])
        else: old.append(y1[4])

    return format_to_string (y1, z1, line_join_title, line_join_platforms, a1)

def format_to_string (y1, z1, line_join_title, line_join_platforms, a1):

    y2 = ['{:.2f}M '.format(elem) for elem in y1]
    y3 = ['{0: >11}'.format(elem) for elem in y2]

    if "New!" != a1[0] and "+Infinity%" != a1[0]:
        a2 = ['{:+.2f}% '.format(elem) for elem in a1]
        a3 = ['{0: >11}'.format(elem) for elem in a2]
    else: a3 = ['{0:>10} '.format(elem) for elem in a1]

    if print_all_or_fy_only == 0:
        return to_print_all (y1, z1, y3, line_join_title, line_join_platforms, a3)
    else:
        return to_print_fy (y1, z1, y3, line_join_title, line_join_platforms, a3)

def to_print_all (y1, z1, y3, line_join_title, line_join_platforms, a3):

    print(border_line)
    print("| " + line_join_title + "|")
    print(border_line)
    print("| " + line_join_platforms + "|")
    print(border_line)
    print("|" + z1[0] + " "*10 + "|" + z1[1] + "|") # release date and rank
    if y1[4] != 0:
        print(border_line)
    for i in range(current_quarter):
        if y1[i] != 0:
            print("|"  +  row_names1[i] +  "|" + y3[i] + "|"   )
    else:   #print fy cumulative
        print(border_line_double) #border
        if y1[4] != 0:
            print("|"  +  row_names1[4] +  "|" + y3[4] + "|"   )
            if current_quarter == 4:
                print("|"  +  row_names1[5] +  "|" + a3[0] + "|"   )
        print("|"  +  row_names1[6] +  "|" + y3[5] + "|"   ) # print ltd
        print(border_line)
        if z1[2] != 0:
            print(misc_1)
            print(border_line)

    return

def to_print_fy (y1, z1, y3, line_join_title, line_join_platforms, a3):

    if y1[4] != 0:
        print(border_line)
        print("| " + line_join_title + "|")
        print(border_line)
        print("| " + line_join_platforms + "|")
        print(border_line)
        print("|" + z1[0] + " "*10 + "|" + z1[1] + "|") # release date and rank
        if y1[4] != 0:
            print(border_line)
        for i in range(current_quarter):
            if y1[i] != 0:
                print("|"  +  row_names1[i] +  "|" + y3[i] + "|"   )
        else:   #print fy cumulative
            print(border_line_double) #border
            if y1[4] != 0:
                print("|"  +  row_names1[4] +  "|" + y3[4] + "|"   )
                if current_quarter == 4:
                    print("|"  +  row_names1[5] +  "|" + a3[0] + "|"   )
            print("|"  +  row_names1[6] +  "|" + y3[5] + "|"   ) # print ltd
            print(border_line)
            if z1[2] != 0:
                print(misc_1)
                print(border_line)

    return

print(border_line)
print("|" + header_names1[0] + "|")
print(border_line)
print("|" + header_names1[1] + "|")
print(border_line)
print("|" + header_names1[3] + "|")
print(border_line)
print("|" + header_names1[2] + "|")
print(border_line)
print("|" + header_names1[4] + "|")
print(border_line)

new = []
old = []
inf = []

for i in range (len(for_loop_list_2)):
    quarterly_calculation(for_loop_list_2[i])

print(line_break_1)
print(misc_2)
print(misc_3)
print(misc_4)
print(misc_5)
print(misc_6)
print(line_break_1)

if current_quarter == 4:

    fy_title_length = [len(new), len(old), len(inf)]
    fy_title_length.append(sum(fy_title_length[:]))

    fy_title_length_percentages = [(fy_title_length[0]/fy_title_length[3]) * 100, (fy_title_length[1]/fy_title_length[3]) * 100, (fy_title_length[2]/fy_title_length[3]) * 100]

    fy_title_unit = [sum(new), sum(old), sum(inf)]
    fy_title_unit.append(sum(fy_title_unit[:]))

    fy_title_unit_percentages = [(fy_title_unit[0] / fy_title_unit[3]) * 100, (fy_title_unit[1] / fy_title_unit[3]) * 100, (fy_title_unit[2] / fy_title_unit[3]) * 100]

    fy_title_length_1 = ['{0:>7} '.format(elem) for elem in fy_title_length]

    fy_title_unit_1 = ['{:.2f}M '.format(elem) for elem in fy_title_unit]
    fy_title_unit_2 = ['{0:>9}'.format(elem) for elem in fy_title_unit_1]

    fy_title_length_percentages_1 = ['{:.2f}% '.format(elem) for elem in fy_title_length_percentages]
    fy_title_unit_percentages_1 = ['{:.2f}% '.format(elem) for elem in fy_title_unit_percentages]

    fy_title_length_percentages_2, fy_title_unit_percentages_2 = ['{0:>8}'.format(elem) for elem in fy_title_length_percentages_1], ['{0:>9}'.format(elem) for elem in fy_title_unit_percentages_1]

    print(border_line)
    print("|" + header_names1[0] + "|")
    print(border_line)
    print(special_0[0])
    print(border_line)
    print(special_0[1] + fy_title_length_1[0] + "|" + fy_title_unit_2[0] + "|")
    print(special_0[2] + fy_title_length_1[1] + "|" + fy_title_unit_2[1] + "|")
    print(special_0[3] + fy_title_length_1[2] + "|" + fy_title_unit_2[2] + "|")
    print(border_line_double)
    print(special_0[4] + fy_title_length_1[3] + "|" + fy_title_unit_2[3] + "|")
    print(border_line)
    print(special_0[5])
    print(border_line)
    print(special_0[1] + fy_title_length_percentages_2[0] + "|" + fy_title_unit_percentages_2[0] + "|")
    print(special_0[2] + fy_title_length_percentages_2[1] + "|" + fy_title_unit_percentages_2[1] + "|")
    print(special_0[3] + fy_title_length_percentages_2[2] + "|" + fy_title_unit_percentages_2[2] + "|")
    print(border_line)
