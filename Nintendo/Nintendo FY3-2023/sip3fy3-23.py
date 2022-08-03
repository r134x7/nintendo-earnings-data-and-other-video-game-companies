from operator import itemgetter

header_0 = ["|" + " Nintendo Switch FY   " + "          |", "|" + " Million-Seller Titles" + "          |"]
header_1 = [" Nintendo Switch FY Million-Seller Titles ", "   Japan ", " Overseas", " WW FY   ", " WW LTD  ", " Area " +" "*8, " Global " +" "*6] # " Area (Units) "
row_1 = [" 1st Quarter  ", " 2nd Quarter  ", " 3rd Quarter  ", " 4th Quarter  ", " FY3/23 Cml.  ", " Area/WW FY % ", " WW FY/LTD %  ", " FY3/23 YoY%  "]
special_0 = ["| FY3/23 Cml. | Titles |   Units |", "| New!        |", "| Recurring   |", "| Sporadic    |", "| Total       |", "| Percentages | Titles |   Units |"]
line_break_1 = "###" # line break

# reset each title_x_worldwide_fy numbers to 0 / 100 at the start of each FY.

current_quarter = 1 # set to 1, 2, 3 or 4

border_line = ["+" + "-"*91 + "+", "+" + "-"*42 + "+", "+" + "-"*32 + "+"]
border_line_double = ["+" + "="*91 + "+", "+" + "="*34 + "+", "+" + "-"*32 + "+"]
border_line_middle = ["+" + "-"*34 + "+"]

#Million-seller titles for the FY

    # Input cumulative figures
title_1_japan = [
    # Input cumulative figures
    26 / 100, # Japan: [0] 1st quarter
    35 / 100, # [1] second quarter
    38 / 100, # [2] third quarter
    39 / 100, # [3] fourth quarter
    " Miitopia " + " "*31 # [4] title
    ] 

title_1_overseas = [
    # Input cumulative figures
    78 / 100, # Overseas:  [0] 1st quarter  
    102 / 100, # [1] second quarter
    125 / 100, # [2] third quarter
    129 / 100 # [3] fourth quarter
    ] 

title_1_worldwide_fy = [
    # Input cumulative figures
    0 / 100, # Global FY: [0] 1st quarter 
    0 / 100, # [1] second quarter
    0 / 100, # [2] third quarter
    0 / 100 # [3] fourth quarter
    ] 

title_1_worldwide_ltd = [
    # Input cumulative figures
    104 / 100, # Global LTD: [0] 1st quarter 
    137 / 100, # [1] second quarter
    163 / 100, # [2] third quarter
    168 / 100 # [3] fourth quarter
    ] 

title_1_last_fy_totals = [
    # Input last fy totals if defined
    39 / 100, # Japan [0]
    129 / 100, # Overseas [1]
    168 / 100, # Global FY [2]
    168 / 100, # Global LTD [3]
    0 / 100 # [4] Global LTD for the FY before last_fy
    ] 

title_2_japan = [ 
    # Input cumulative figures
    30 / 100, # Japan: [0] 1st quarter
    46 / 100, # [1] second quarter
    86 / 100, # [2] third quarter
    116 / 100, # [3] fourth quarter
    " Mario Kart 8 Deluxe " + " "*20 # [4] title
    ] 

title_2_overseas = [ 
    # Input cumulative figures
    118 / 100, # Overseas:  [0] 1st quarter 
    289 / 100, # [1] second quarter
    710 / 100, # [2] third quarter
    878 / 100 # [3] fourth quarter
    ] 

title_2_worldwide_fy = [ 
    # Input cumulative figures
    148 / 100, # Global FY: [0] 1st quarter 
    0 / 100, # [1] second quarter
    0 / 100, # [2] third quarter
    0 / 100 # [3] fourth quarter
    ] 

title_2_worldwide_ltd = [ 
    # Input cumulative figures
    4682 / 100, # Global LTD: [0] 1st quarter 
    3708 / 100, # [1] second quarter
    4335 / 100, # [2] third quarter
    4533 / 100 # [3] fourth quarter
    ] 

title_2_last_fy_totals = [
    # Input last fy totals if defined
    116 / 100, # Japan [0]      
    878 / 100, # Overseas [1]      
    994 / 100, # Global FY [2]     
    4533 / 100, # Global LTD [3]     
    3539 / 100 # [4] Global LTD for the FY before last_fy
    ]  

title_3_japan = [ 
    # Input cumulative figures
    0 / 100, # Japan: [0] 1st quarter
    16 / 100, # [1] second quarter
    40 / 100, # [2] third quarter
    55 / 100, # [3] fourth quarter
    " The Legend of Zelda: Breath of the Wild " # [4] title
    ] 

title_3_overseas = [ 
    # Input cumulative figures
    0 / 100, # Overseas:  [0] 1st quarter 
    170 / 100, # [1] second quarter
    311 / 100, # [2] third quarter
    372 / 100 # [3] fourth quarter
    ] 

title_3_worldwide_fy = [ 
    # Input cumulative figures
    0 / 100, # Global FY: [0] 1st quarter 
    0 / 100, # [1] second quarter
    0 / 100, # [2] third quarter
    0 / 100 # [3] fourth quarter
    ] 

title_3_worldwide_ltd = [ 
    # Input cumulative figures
    0 / 100, # Global LTD: [0] 1st quarter 
    2413 / 100, # [1] second quarter
    2580 / 100, # [2] third quarter
    2655 / 100 # [3] fourth quarter
    ] 

title_3_last_fy_totals = [
    # Input last fy totals if defined
    55 / 100, # Japan [0]      
    372 / 100, # Overseas [1]      
    428 / 100, # Global FY [2]     
    2655 / 100, # Global LTD [3]     
    2228 / 100 # [4] Global LTD for the FY before last_fy
    ]  

title_4_japan = [ 
    0 / 100, # Japan: [0] 1st quarter
    8 / 100, # [1] second quarter
    14 / 100, # [2] third quarter
    18 / 100, # [3] fourth quarter
    " New Super Mario Bros. U Deluxe " + " "*9 # [4] title
    ] 

title_4_overseas = [ 
    0 / 100, # Overseas:  [0] 1st quarter 
    96 / 100, # [1] second quarter
    213 / 100, # [2] third quarter
    268 / 100 # [3] fourth quarter
    ] 

title_4_worldwide_fy = [ 
    0 / 100, # Global FY: [0] 1st quarter 
    0 / 100, # [1] second quarter
    0 / 100, # [2] third quarter
    0 / 100 # [3] fourth quarter
    ] 

title_4_worldwide_ltd = [ 
    0 / 100, # Global LTD: [0] 1st quarter 
    1148 / 100, # [1] second quarter
    1272 / 100, # [2] third quarter
    1331 / 100 # [3] fourth quarter
    ] 

title_4_last_fy_totals = [
    18 / 100, # Japan [0]      
    268 / 100, # Overseas [1]      
    286 / 100, # Global FY [2]     
    1331 / 100, # Global LTD [3]     
    1044 / 100 # [4] Global LTD for the FY before last_fy
    ]  

title_5_japan = [ 
    21 / 100, # Japan: [0] 1st quarter
    29 / 100, # [1] second quarter
    30 / 100, # [2] third quarter
    31 / 100, # [3] fourth quarter
    " Mario Golf: Super Rush "  + " "*17 # [4] title
    ] 

title_5_overseas = [ 
    113 / 100, # Overseas:  [0] 1st quarter 
    165 / 100, # [1] second quarter
    196 / 100, # [2] third quarter
    203 / 100 # [3] fourth quarter
    ] 

title_5_worldwide_fy = [ 
    0 / 100, # Global FY: [0] 1st quarter 
    0 / 100, # [1] second quarter
    0 / 100, # [2] third quarter
    0 / 100 # [3] fourth quarter
    ] 

title_5_worldwide_ltd = [ 
    134 / 100, # Global LTD: [0] 1st quarter 
    194 / 100, # [1] second quarter
    226 / 100, # [2] third quarter
    235 / 100 # [3] fourth quarter
    ] 

title_5_last_fy_totals = [
    31 / 100, # Japan [0]      
    203 / 100, # Overseas [1]      
    235 / 100, # Global FY [2]     
    235 / 100, # Global LTD [3]     
    0 / 100 # [4] Global LTD for the FY before last_fy
    ]  

title_6_japan = [ 
    25 / 100, # Japan: [0] 1st quarter
    52 / 100, # [1] second quarter
    80 / 100, # [2] third quarter
    90 / 100, # [3] fourth quarter
    " Ring Fit Adventure " + " "*21 # [4] title
    ] 

title_6_overseas = [ 
    89 / 100, # Overseas:  [0] 1st quarter 
    158 / 100, # [1] second quarter
    262 / 100, # [2] third quarter
    308 / 100 # [3] fourth quarter
    ] 

title_6_worldwide_fy = [ 
    0 / 100, # Global FY: [0] 1st quarter 
    0 / 100, # [1] second quarter
    0 / 100, # [2] third quarter
    0 / 100 # [3] fourth quarter
    ] 

title_6_worldwide_ltd = [ 
    1126 / 100, # Global LTD: [0] 1st quarter 
    1221 / 100, # [1] second quarter
    1353 / 100, # [2] third quarter
    1409 / 100 # [3] fourth quarter
    ] 

title_6_last_fy_totals = [
    90 / 100, # Japan [0]      
    308 / 100, # Overseas [1]      
    398 / 100, # Global FY [2]     
    1409 / 100, # Global LTD [3]     
    1011 / 100 # [4] Global LTD for the FY before last_fy
    ]  

title_7_japan = [ 
    0 / 100, # Japan: [0] 1st quarter
    22 / 100, # [1] second quarter
    29 / 100, # [2] third quarter
    33 / 100, # [3] fourth quarter
    " Super Mario Party " + " "*22 # [4] title
    ]

title_7_overseas = [ 
    0 / 100, # Overseas:  [0] 1st quarter 
    147 / 100, # [1] second quarter
    230 / 100, # [2] third quarter
    266 / 100 # [3] fourth quarter
    ]

title_7_worldwide_fy = [ 
    0 / 100, # Global FY: [0] 1st quarter 
    0 / 100, # [1] second quarter
    0 / 100, # [2] third quarter
    0 / 100 # [3] fourth quarter
    ]

title_7_worldwide_ltd = [ 
    0 / 100, # Global LTD: [0] 1st quarter 
    1648 / 100, # [1] second quarter
    1739 / 100, # [2] third quarter
    1778 / 100 # [3] fourth quarter
    ]

title_7_last_fy_totals = [
    33 / 100, # Japan [0]      
    266 / 100, # Overseas [1]      
    299 / 100, # Global FY [2]     
    1778 / 100, # Global LTD [3]     
    1479 / 100 # [4] Global LTD for the FY before last_fy
    ]  

title_8_japan = [ 
    0 / 100, # Japan: [0] 1st quarter
    19 / 100, # [1] second quarter
    42 / 100, # [2] third quarter
    50 / 100, # [3] fourth quarter
    " Pokémon Sword / Pokémon Shield  " + " "*8 # [4] title
    ]

title_8_overseas = [ 
    0 / 100, # Overseas:  [0] 1st quarter 
    135 / 100, # [1] second quarter
    238 / 100, # [2] third quarter
    268 / 100 # [3] fourth quarter
    ]

title_8_worldwide_fy = [ 
    0 / 100, # Global FY: [0] 1st quarter 
    0 / 100, # [1] second quarter
    0 / 100, # [2] third quarter
    0 / 100 # [3] fourth quarter
    ]

title_8_worldwide_ltd = [ 
    0 / 100, # Global LTD: [0] 1st quarter 
    2264 / 100, # [1] second quarter
    2390 / 100, # [2] third quarter
    2427 / 100 # [3] fourth quarter
    ]

title_8_last_fy_totals = [
    50 / 100, # Japan [0]      
    268 / 100, # Overseas [1]      
    318 / 100, # Global FY [2]     
    2427 / 100,# Global LTD [3]     
    2110 / 100 # [4] Global LTD for the FY before last_fy
    ]  

title_9_japan = [ 
    0 / 100, # Japan: [0] 1st quarter
    33 / 100, # [1] second quarter
    77 / 100, # [2] third quarter
    96 / 100, # [3] fourth quarter
    " Super Smash Bros. Ultimate " + " "*13 # [4] title
    ]

title_9_overseas = [ 
    0 / 100, # Overseas:  [0] 1st quarter 
    153 / 100, # [1] second quarter
    279 / 100, # [2] third quarter
    336 / 100 # [3] fourth quarter
    ]

title_9_worldwide_fy = [ 
    0 / 100, # Global FY: [0] 1st quarter 
    0 / 100, # [1] second quarter
    0 / 100, # [2] third quarter
    0 / 100 # [3] fourth quarter
    ]

title_9_worldwide_ltd = [ 
    0 / 100, # Global LTD: [0] 1st quarter 
    2571 / 100, # [1] second quarter
    2740 / 100, # [2] third quarter
    2817 / 100 # [3] fourth quarter
    ]

title_9_last_fy_totals = [
    96 / 100, # Japan [0]      
    336 / 100, # Overseas [1]      
    433 / 100, # Global FY [2]     
    2817 / 100, # Global LTD [3]     
    2384 / 100 # [4] Global LTD for the FY before last_fy
    ]  

title_10_japan = [ 
    0 / 100, # Japan: [0] 1st quarter
    8 / 100, # [1] second quarter
    15 / 100, # [2] third quarter
    19 / 100, # [3] fourth quarter
    " Super Mario Odyssey " + " "*20 # [4] title
    ]

title_10_overseas = [ 
    0 / 100, # Overseas:  [0] 1st quarter 
    103 / 100, # [1] second quarter
    204 / 100, # [2] third quarter
    248 / 100 # [3] fourth quarter
    ]

title_10_worldwide_fy = [ 
    0 / 100, # Global FY: [0] 1st quarter 
    0 / 100, # [1] second quarter
    0 / 100, # [2] third quarter
    0 / 100 # [3] fourth quarter
    ]

title_10_worldwide_ltd = [ 
    0 / 100, # Global LTD: [0] 1st quarter 
    2195 / 100, # [1] second quarter
    2302 / 100, # [2] third quarter
    2350 / 100 # [3] fourth quarter
    ]

title_10_last_fy_totals = [
    19 / 100, # Japan [0]      
    248 / 100, # Overseas [1]      
    267 / 100, # Global FY [2]     
    2350 / 100, # Global LTD [3]     
    2083 / 100 # [4] Global LTD for the FY before last_fy
    ]  

title_11_japan = [ 
    13 / 100, # Japan: [0] 1st quarter
    25 / 100, # [1] second quarter
    70 / 100, # [2] third quarter
    82 / 100, # [3] fourth quarter
    " Animal Crossing: New Horizons " + " "*10 # [4] title
    ]

title_11_overseas = [ 
    113 / 100, # Overseas:  [0] 1st quarter 
    197 / 100, # [1] second quarter
    430 / 100, # [2] third quarter
    519 / 100 # [3] fourth quarter
    ]

title_11_worldwide_fy = [ 
    0 / 100, # Global FY: [0] 1st quarter 
    0 / 100, # [1] second quarter
    0 / 100, # [2] third quarter
    0 / 100 # [3] fourth quarter
    ]

title_11_worldwide_ltd = [
    3389 / 100, # Global LTD: [0] 1st quarter 
    3485 / 100, # [1] second quarter
    3762 / 100, # [2] third quarter
    3864 / 100 # [3] fourth quarter
    ]

title_11_last_fy_totals = [
    82 / 100, # Japan [0]      
    519 / 100, # Overseas [1]      
    601 / 100, # Global FY [2]     
    3864 / 100, # Global LTD [3]     
    3263 / 100 # [4] Global LTD for the FY before last_fy
    ]  

title_12_japan = [ 
    0 / 100, # Japan: [0] 1st quarter
    42 / 100, # [1] second quarter
    44 / 100, # [2] third quarter
    45 / 100, # [3] fourth quarter
    " The Legend of Zelda: Skyward Sword HD   " # [4] title
    ]

title_12_overseas = [ 
    0 / 100, # Overseas:  [0] 1st quarter 
    318 / 100, # [1] second quarter
    340 / 100, # [2] third quarter
    346 / 100 # [3] fourth quarter
    ]

title_12_worldwide_fy = [ 
    0 / 100, # Global FY: [0] 1st quarter 
    0 / 100, # [1] second quarter
    0 / 100, # [2] third quarter
    0 / 100 # [3] fourth quarter
    ]

title_12_worldwide_ltd = [ 
    0 / 100, # Global LTD: [0] 1st quarter 
    360 / 100, # [1] second quarter
    385 / 100, # [2] third quarter
    391 / 100 # [3] fourth quarter
    ]

title_12_last_fy_totals = [
    45 / 100, # Japan [0]      
    346 / 100, # Overseas [1]      
    391 / 100, # Global FY [2]     
    391 / 100, # Global LTD [3]     
    0 / 100 # [4] Global LTD for the FY before last_fy
    ]  

title_13_japan = [ 
    21 / 100, # Japan: [0] 1st quarter
    36 / 100, # [1] second quarter
    54 / 100, # [2] third quarter
    58 / 100, # [3] fourth quarter
    " Super Mario 3D World + Boswer's Fury    " # [4] title
    ]

title_13_overseas = [ 
    87 / 100, # Overseas:  [0] 1st quarter 
    150 / 100, # [1] second quarter
    272 / 100, # [2] third quarter
    325 / 100 # [3] fourth quarter
    ]

title_13_worldwide_fy = [ 
    0 / 100, # Global FY: [0] 1st quarter 
    0 / 100, # [1] second quarter
    0 / 100, # [2] third quarter
    0 / 100 # [3] fourth quarter
    ]

title_13_worldwide_ltd = [ 
    668 / 100, # Global LTD: [0] 1st quarter 
    745 / 100, # [1] second quarter
    885 / 100, # [2] third quarter
    943 / 100 # [3] fourth quarter
    ]

title_13_last_fy_totals = [
    58 / 100, # Japan [0]      
    325 / 100, # Overseas [1]      
    384 / 100, # Global FY [2]     
    943 / 100, # Global LTD [3]     
    559 / 100 # [4] Global LTD for the FY before last_fy
    ]  

title_14_japan = [ 
    0 / 100, # Japan: [0] 1st quarter
    0 / 100, # [1] second quarter
    0 / 100, # [2] third quarter
    0 / 100, # [3] fourth quarter
    " New Pokémon Snap " + " "*23 # [4] title
    ]

title_14_overseas = [ 
    207 / 100, # Overseas:  [0] 1st quarter 
    219 / 100, # [1] second quarter
    236 / 100, # [2] third quarter
    240 / 100 # [3] fourth quarter
    ]

title_14_worldwide_fy = [ 
    0 / 100, # Global FY: [0] 1st quarter 
    0 / 100, # [1] second quarter
    0 / 100, # [2] third quarter
    0 / 100 # [3] fourth quarter
    ]

title_14_worldwide_ltd = [
    207 / 100, # Global LTD: [0] 1st quarter 
    219 / 100, # [1] second quarter
    236 / 100, # [2] third quarter
    240 / 100 # [3] fourth quarter
    ]

title_14_last_fy_totals = [
    0 / 100, # Japan [0]      
    240 / 100, # Overseas [1]      
    240 / 100, # Global FY [2]     
    240 / 100, # Global LTD [3]     
    0 / 100 # [4] Global LTD for the FY before last_fy
    ]  

title_15_japan = [ 
    0 / 100, # Japan: [0] 1st quarter
    0 / 100, # [1] second quarter
    26 / 100, # [2] third quarter
    27 / 100, # [3] fourth quarter
    " Metroid Dread " + " "*26 # [4] title
    ]

title_15_overseas = [ 
    0 / 100, # Overseas:  [0] 1st quarter 
    0 / 100, # [1] second quarter
    248 / 100, # [2] third quarter
    263 / 100 # [3] fourth quarter
    ]

title_15_worldwide_fy = [ 
    0 / 100, # Global FY: [0] 1st quarter 
    0 / 100, # [1] second quarter
    0 / 100, # [2] third quarter
    0 / 100 # [3] fourth quarter
    ]

title_15_worldwide_ltd = [
    0 / 100, # Global LTD: [0] 1st quarter 
    0 / 100, # [1] second quarter
    274 / 100, # [2] third quarter
    290 / 100 # [3] fourth quarter
    ]

title_15_last_fy_totals = [
    27 / 100, # Japan [0]      
    263 / 100, # Overseas [1]      
    290 / 100, # Global FY [2]     
    290 / 100, # Global LTD [3]     
    0 / 100 # [4] Global LTD for the FY before last_fy
    ]  

title_16_japan = [ 
    0 / 100, # Japan: [0] 1st quarter
    0 / 100, # [1] second quarter
    113 / 100, # [2] third quarter
    133 / 100, # [3] fourth quarter
    " Mario Party Superstars " + " "*17 # [4] title
    ]

title_16_overseas = [ 
    0 / 100, # Overseas:  [0] 1st quarter 
    0 / 100, # [1] second quarter
    430 / 100, # [2] third quarter
    555 / 100 # [3] fourth quarter
    ]

title_16_worldwide_fy = [ 
    0 / 100, # Global FY: [0] 1st quarter 
    0 / 100, # [1] second quarter
    0 / 100, # [2] third quarter
    0 / 100 # [3] fourth quarter
    ]

title_16_worldwide_ltd = [ 
    0 / 100, # Global LTD: [0] 1st quarter 
    0 / 100, # [1] second quarter
    543 / 100, # [2] third quarter
    688 / 100 # [3] fourth quarter
    ]

title_16_last_fy_totals = [
    133 / 100, # Japan [0]      
    555 / 100, # Overseas [1]      
    688 / 100, # Global FY [2]     
    688 / 100, # Global LTD [3]     
    0 / 100 # [4] Global LTD for the FY before last_fy
    ]  

title_17_japan = [ 
    0 / 100, # Japan: [0] 1st quarter
    0 / 100, # [1] second quarter
    379 / 100, # [2] third quarter
    385 / 100,# [3] fourth quarter
    " Pokémon Brilliant Diamond / Pokémon Shining Pearl " # [4] title
    ] 

title_17_overseas = [ 
    0 / 100, # Overseas:  [0] 1st quarter 
    0 / 100, # [1] second quarter
    1018 / 100, # [2] third quarter
    1080 / 100 # [3] fourth quarter
    ]

title_17_worldwide_fy = [ 
    0 / 100, # Global FY: [0] 1st quarter 
    0 / 100, # [1] second quarter
    0 / 100, # [2] third quarter
    0 / 100 # [3] fourth quarter
    ]

title_17_worldwide_ltd = [
    0 / 100, # Global LTD: [0] 1st quarter 
    0 / 100, # [1] second quarter
    1397 / 100, # [2] third quarter
    1465 / 100 # [3] fourth quarter
    ]

title_17_last_fy_totals = [
    385 / 100, # Japan [0]      
    1080 / 100, # Overseas [1]      
    1465 / 100, # Global FY [2]     
    1465 / 100, # Global LTD [3]     
    0 / 100 # [4] Global LTD for the FY before last_fy
    ]  

title_18_japan = [ 
    0 / 100, # Japan: [0] 1st quarter
    0 / 100, # [1] second quarter
    38 / 100, # [2] third quarter
    45 / 100, # [3] fourth quarter
    " Big Brain Academy: Brain vs Brain " + " "*6 # [4] title
    ]

title_18_overseas = [ 
    0 / 100, # Overseas:  [0] 1st quarter 
    0 / 100, # [1] second quarter
    90 / 100, # [2] third quarter
    114 / 100 # [3] fourth quarter
    ]

title_18_worldwide_fy = [ 
    0 / 100, # Global FY: [0] 1st quarter 
    0 / 100, # [1] second quarter
    0 / 100, # [2] third quarter
    0 / 100 # [3] fourth quarter
    ]

title_18_worldwide_ltd = [
    0 / 100, # Global LTD: [0] 1st quarter 
    0 / 100, # [1] second quarter
    128 / 100, # [2] third quarter
    159 / 100 # [3] fourth quarter
    ]

title_18_last_fy_totals = [
    45 / 100, # Japan [0]      
    114 / 100, # Overseas [1]      
    159 / 100, # Global FY [2]     
    159 / 100, # Global LTD [3]     
    0 / 100 # [4] Global LTD for the FY before last_fy
    ]  

title_19_japan = [ 
    0 / 100, # Japan: [0] 1st quarter
    0 / 100, # [1] second quarter
    9 / 100, # [2] third quarter
    13 / 100, # [3] fourth quarter
    " Luigi's Mansion 3 " + " "*22 # [4] title
    ]

title_19_overseas = [ 
    0 / 100, # Overseas:  [0] 1st quarter 
    0 / 100, # [1] second quarter
    136 / 100, # [2] third quarter
    171 / 100 # [3] fourth quarter
    ]

title_19_worldwide_fy = [ 
    0 / 100, # Global FY: [0] 1st quarter 
    0 / 100, # [1] second quarter
    0 / 100, # [2] third quarter
    0 / 100 # [3] fourth quarter
    ]

title_19_worldwide_ltd = [
    0 / 100, # Global LTD: [0] 1st quarter 
    0 / 100, # [1] second quarter
    1104 / 100, # [2] third quarter
    1143 / 100 # [3] fourth quarter
    ]

title_19_last_fy_totals = [
    13 / 100, # Japan [0]      
    171 / 100, # Overseas [1]      
    183 / 100, # Global FY [2]     
    1143 / 100, # Global LTD [3]     
    959 / 100 # [4] Global LTD for the FY before last_fy
    ]  

title_20_japan = [ 
    0 / 100, # Japan: [0] 1st quarter
    0 / 100, # [1] second quarter
    30 / 100, # [2] third quarter
    31 / 100, # [3] fourth quarter
    " WarioWare: Get It Together! " + " "*12 # [4] title
    ]

title_20_overseas = [ 
    0 / 100, # Overseas:  [0] 1st quarter 
    0 / 100, # [1] second quarter
    94 / 100, # [2] third quarter
    96 / 100 # [3] fourth quarter
    ]

title_20_worldwide_fy = [ 
    0 / 100, # Global FY: [0] 1st quarter 
    0 / 100, # [1] second quarter
    0 / 100, # [2] third quarter
    0 / 100 # [3] fourth quarter
    ]

title_20_worldwide_ltd = [
    0 / 100, # Global LTD: [0] 1st quarter 
    0 / 100, # [1] second quarter
    124 / 100, # [2] third quarter
    127 / 100 # [3] fourth quarter
    ]

title_20_last_fy_totals = [
    31 / 100, # Japan [0]      
    96 / 100, # Overseas [1]      
    127 / 100, # Global FY [2]     
    127 / 100, # Global LTD [3]     
    0 / 100 # [4] Global LTD for the FY before last_fy
    ]  

title_21_japan = [ 
    0 / 100, # Japan: [0] 1st quarter
    0 / 100, # [1] second quarter
    3 / 100, # [2] third quarter
    3 / 100,# [3] fourth quarter
    " Pokémon: Let's Go, Pikachu! / Pokémon: Let's Go, Eevee! " # [4] title
    ] 

title_21_overseas = [ 
    0 / 100, # Overseas:  [0] 1st quarter 
    0 / 100, # [1] second quarter
    102 / 100, # [2] third quarter
    121 / 100 # [3] fourth quarter
    ]

title_21_worldwide_fy = [ 
    0 / 100, # Global FY: [0] 1st quarter 
    0 / 100, # [1] second quarter
    0 / 100, # [2] third quarter
    0 / 100 # [3] fourth quarter
    ]

title_21_worldwide_ltd = [
    0 / 100, # Global LTD: [0] 1st quarter 
    0 / 100, # [1] second quarter
    1433 / 100, # [2] third quarter
    1453 / 100 # [3] fourth quarter
    ]

title_21_last_fy_totals = [
    3 / 100, # Japan [0]      
    121 / 100, # Overseas [1]      
    125 / 100, # Global FY [2]     
    1453 / 100, # Global LTD [3]     
    1328 / 100 # [4] Global LTD for the FY before last_fy
    ]  

title_22_japan = [ 
    0 / 100, # Japan: [0] 1st quarter
    0 / 100, # [1] second quarter
    44 / 100, # [2] third quarter
    45 / 100, # [3] fourth quarter
    " Game Builder Garage " + " "*20 # [4] title
    ]

title_22_overseas = [ 
    0 / 100, # Overseas:  [0] 1st quarter 
    0 / 100, # [1] second quarter
    58 / 100, # [2] third quarter
    61 / 100 # [3] fourth quarter
    ]

title_22_worldwide_fy = [ 
    0 / 100, # Global FY: [0] 1st quarter 
    0 / 100, # [1] second quarter
    0 / 100, # [2] third quarter
    0 / 100 # [3] fourth quarter
    ]

title_22_worldwide_ltd = [
    0 / 100, # Global LTD: [0] 1st quarter 
    0 / 100, # [1] second quarter
    101 / 100, # [2] third quarter
    106 / 100 # [3] fourth quarter
    ]

title_22_last_fy_totals = [
    45 / 100, # Japan [0]      
    61 / 100, # Overseas [1]      
    106 / 100, # Global FY [2]     
    106 / 100, # Global LTD [3]     
    0 / 100 # [4] Global LTD for the FY before last_fy
    ]  

title_23_japan = [ 
    0 / 100, # Japan: [0] 1st quarter
    0 / 100, # [1] second quarter
    0 / 100, # [2] third quarter
    346 / 100, # [3] fourth quarter
    " Pokémon Legends: Arceus " + " "*16 # [4] title
    ]

title_23_overseas = [ 
    0 / 100, # Overseas:  [0] 1st quarter 
    0 / 100, # [1] second quarter
    0 / 100, # [2] third quarter
    917 / 100 # [3] fourth quarter
    ]

title_23_worldwide_fy = [ 
    0 / 100, # Global FY: [0] 1st quarter 
    0 / 100, # [1] second quarter
    0 / 100, # [2] third quarter
    0 / 100 # [3] fourth quarter
    ]

title_23_worldwide_ltd = [
    0 / 100, # Global LTD: [0] 1st quarter 
    0 / 100, # [1] second quarter
    0 / 100, # [2] third quarter
    1264 / 100 # [3] fourth quarter
    ]

title_23_last_fy_totals = [
    346 / 100, # Japan [0]      
    917 / 100, # Overseas [1]      
    1264 / 100, # Global FY [2]     
    1264 / 100, # Global LTD [3]     
    0 / 100 # [4] Global LTD for the FY before last_fy
    ]  

title_24_japan = [ 
    41 / 100, # Japan: [0] 1st quarter
    41 / 100, # [1] second quarter
    41 / 100, # [2] third quarter
    41 / 100, # [3] fourth quarter
    " Kirby and the Forgotten Land " + " "*11 # [4] title
    ]

title_24_overseas = [ 
    147 / 100, # Overseas:  [0] 1st quarter 
    147 / 100, # [1] second quarter
    147 / 100, # [2] third quarter
    147 / 100 # [3] fourth quarter
    ]

title_24_worldwide_fy = [ 
    188 / 100, # Global FY: [0] 1st quarter 
    188 / 100, # [1] second quarter
    188 / 100, # [2] third quarter
    188 / 100 # [3] fourth quarter
    ]

title_24_worldwide_ltd = [
    453 / 100, # Global LTD: [0] 1st quarter 
    453 / 100, # [1] second quarter
    453 / 100, # [2] third quarter
    453 / 100 # [3] fourth quarter
    ]

title_24_last_fy_totals = [
    85 / 100, # Japan [0]      
    180 / 100, # Overseas [1]      
    265 / 100, # Global FY [2]     
    265 / 100, # Global LTD [3]     
    0 / 100 # [4] Global LTD for the FY before last_fy
    ]  

title_25_japan = [ 
    0 / 100, # Japan: [0] 1st quarter
    0 / 100, # [1] second quarter
    0 / 100, # [2] third quarter
    52 / 100, # [3] fourth quarter
    " Clubhouse Games: 51 Worldwide Classics " + " "*11 # [4] title
    ]

title_25_overseas = [ 
    0 / 100, # Overseas:  [0] 1st quarter 
    0 / 100, # [1] second quarter
    0 / 100, # [2] third quarter
    56 / 100 # [3] fourth quarter
    ]

title_25_worldwide_fy = [ 
    0 / 100, # Global FY: [0] 1st quarter 
    0 / 100, # [1] second quarter
    0 / 100, # [2] third quarter
    0 / 100 # [3] fourth quarter
    ]

title_25_worldwide_ltd = [
    0 / 100, # Global LTD: [0] 1st quarter 
    0 / 100, # [1] second quarter
    0 / 100, # [2] third quarter
    422 / 100 # [3] fourth quarter
    ]

title_25_last_fy_totals = [
    52 / 100, # Japan [0]      
    56 / 100, # Overseas [1]      
    108 / 100, # Global FY [2]     
    422 / 100, # Global LTD [3]     
    314 / 100 # [4] Global LTD for the FY before last_fy
    ]  

title_26_japan = [ 
    0 / 100, # Japan: [0] 1st quarter
    0 / 100, # [1] second quarter
    0 / 100, # [2] third quarter
    42 / 100, # [3] fourth quarter
    " Splatoon 2 " + " "*11 # [4] title
    ]

title_26_overseas = [ 
    0 / 100, # Overseas:  [0] 1st quarter 
    0 / 100, # [1] second quarter
    0 / 100, # [2] third quarter
    67 / 100 # [3] fourth quarter
    ]

title_26_worldwide_fy = [ 
    0 / 100, # Global FY: [0] 1st quarter 
    0 / 100, # [1] second quarter
    0 / 100, # [2] third quarter
    0 / 100 # [3] fourth quarter
    ]

title_26_worldwide_ltd = [
    0 / 100, # Global LTD: [0] 1st quarter 
    0 / 100, # [1] second quarter
    0 / 100, # [2] third quarter
    1330 / 100 # [3] fourth quarter
    ]

title_26_last_fy_totals = [
    42 / 100, # Japan [0]      
    67 / 100, # Overseas [1]      
    109 / 100, # Global FY [2]     
    1330 / 100, # Global LTD [3]     
    1221 / 100 # [4] Global LTD for the FY before last_fy
    ]  

title_27_japan = [ 
    90 / 100, # Japan: [0] 1st quarter
    0 / 100, # [1] second quarter
    0 / 100, # [2] third quarter
    0 / 100, # [3] fourth quarter
    " Nintendo Switch Sports " + " "*11 # [4] title
    ]

title_27_overseas = [ 
    394 / 100, # Overseas:  [0] 1st quarter 
    0 / 100, # [1] second quarter
    0 / 100, # [2] third quarter
    0 / 100 # [3] fourth quarter
    ]

title_27_worldwide_fy = [ 
    484 / 100, # Global FY: [0] 1st quarter 
    0 / 100, # [1] second quarter
    0 / 100, # [2] third quarter
    0 / 100 # [3] fourth quarter
    ]

title_27_worldwide_ltd = [
    484 / 100, # Global LTD: [0] 1st quarter 
    0 / 100, # [1] second quarter
    0 / 100, # [2] third quarter
    0 / 100 # [3] fourth quarter
    ]

title_27_last_fy_totals = [
    0 / 100, # Japan [0]      
    0 / 100, # Overseas [1]      
    0 / 100, # Global FY [2]     
    0 / 100, # Global LTD [3]     
    0 / 100 # [4] Global LTD for the FY before last_fy
    ]  

title_28_japan = [ 
    13 / 100, # Japan: [0] 1st quarter
    0 / 100, # [1] second quarter
    0 / 100, # [2] third quarter
    0 / 100, # [3] fourth quarter
    " Mario Strikers: Battle League " + " "*11 # [4] title
    ]

title_28_overseas = [ 
    179 / 100, # Overseas:  [0] 1st quarter 
    0 / 100, # [1] second quarter
    0 / 100, # [2] third quarter
    0 / 100 # [3] fourth quarter
    ]

title_28_worldwide_fy = [ 
    191 / 100, # Global FY: [0] 1st quarter 
    0 / 100, # [1] second quarter
    0 / 100, # [2] third quarter
    0 / 100 # [3] fourth quarter
    ]

title_28_worldwide_ltd = [
    191 / 100, # Global LTD: [0] 1st quarter 
    0 / 100, # [1] second quarter
    0 / 100, # [2] third quarter
    0 / 100 # [3] fourth quarter
    ]

title_28_last_fy_totals = [
    0 / 100, # Japan [0]      
    0 / 100, # Overseas [1]      
    0 / 100, # Global FY [2]     
    0 / 100, # Global LTD [3]     
    0 / 100 # [4] Global LTD for the FY before last_fy
    ]

title_29_japan = [ 
    0 / 100, # Japan: [0] 1st quarter
    0 / 100, # [1] second quarter
    0 / 100, # [2] third quarter
    0 / 100, # [3] fourth quarter
    " Fire Emblem Warriors: Three Hopes " + " "*11 # [4] title
    ]

title_29_overseas = [ 
    0 / 100, # Overseas:  [0] 1st quarter 
    0 / 100, # [1] second quarter
    0 / 100, # [2] third quarter
    0 / 100 # [3] fourth quarter
    ]

title_29_worldwide_fy = [ 
    0 / 100, # Global FY: [0] 1st quarter 
    0 / 100, # [1] second quarter
    0 / 100, # [2] third quarter
    0 / 100 # [3] fourth quarter
    ]

title_29_worldwide_ltd = [
    0 / 100, # Global LTD: [0] 1st quarter 
    0 / 100, # [1] second quarter
    0 / 100, # [2] third quarter
    0 / 100 # [3] fourth quarter
    ]

title_29_last_fy_totals = [
    0 / 100, # Japan [0]      
    0 / 100, # Overseas [1]      
    0 / 100, # Global FY [2]     
    0 / 100, # Global LTD [3]     
    0 / 100 # [4] Global LTD for the FY before last_fy
    ]

title_30_japan = [ 
    0 / 100, # Japan: [0] 1st quarter
    0 / 100, # [1] second quarter
    0 / 100, # [2] third quarter
    0 / 100, # [3] fourth quarter
    " placeholder " + " "*11 # [4] title
    ]

title_30_overseas = [ 
    0 / 100, # Overseas:  [0] 1st quarter 
    0 / 100, # [1] second quarter
    0 / 100, # [2] third quarter
    0 / 100 # [3] fourth quarter
    ]

title_30_worldwide_fy = [ 
    0 / 100, # Global FY: [0] 1st quarter 
    0 / 100, # [1] second quarter
    0 / 100, # [2] third quarter
    0 / 100 # [3] fourth quarter
    ]

title_30_worldwide_ltd = [
    0 / 100, # Global LTD: [0] 1st quarter 
    0 / 100, # [1] second quarter
    0 / 100, # [2] third quarter
    0 / 100 # [3] fourth quarter
    ]

title_30_last_fy_totals = [
    0 / 100, # Japan [0]      
    0 / 100, # Overseas [1]      
    0 / 100, # Global FY [2]     
    0 / 100, # Global LTD [3]     
    0 / 100 # [4] Global LTD for the FY before last_fy
    ]

title_31_japan = [ 
    0 / 100, # Japan: [0] 1st quarter
    0 / 100, # [1] second quarter
    0 / 100, # [2] third quarter
    0 / 100, # [3] fourth quarter
    " placeholder " + " "*11 # [4] title
    ]

title_31_overseas = [ 
    0 / 100, # Overseas:  [0] 1st quarter 
    0 / 100, # [1] second quarter
    0 / 100, # [2] third quarter
    0 / 100 # [3] fourth quarter
    ]

title_31_worldwide_fy = [ 
    0 / 100, # Global FY: [0] 1st quarter 
    0 / 100, # [1] second quarter
    0 / 100, # [2] third quarter
    0 / 100 # [3] fourth quarter
    ]

title_31_worldwide_ltd = [
    0 / 100, # Global LTD: [0] 1st quarter 
    0 / 100, # [1] second quarter
    0 / 100, # [2] third quarter
    0 / 100 # [3] fourth quarter
    ]

title_31_last_fy_totals = [
    0 / 100, # Japan [0]      
    0 / 100, # Overseas [1]      
    0 / 100, # Global FY [2]     
    0 / 100, # Global LTD [3]     
    0 / 100 # [4] Global LTD for the FY before last_fy
    ]

for_loop_list_1 = []

for i in range(30): # for loop to get 4 variables for each title into an array
    japan_list_1 = "title_" + str(i+1) + "_japan" # convert to string
    japan_list_2 = globals()[japan_list_1] # changes the string to a variable
    overseas_list_1 = "title_" + str(i+1) + "_overseas" # convert to string
    overseas_list_2 = globals()[overseas_list_1] # changes the string to a variable
    worldwide_fy_list_1 = "title_" + str(i+1) +"_worldwide_fy" # convert to string
    worldwide_fy_list_2 = globals()[worldwide_fy_list_1] # changes the string to a variable
    worldwide_ltd_list_1 = "title_" + str(i+1) +"_worldwide_ltd" # convert to string
    worldwide_ltd_list_2 = globals()[worldwide_ltd_list_1] # changes the string to a variable
    last_fy_totals_1 = "title_" + str(i+1) +"_last_fy_totals" # convert to string
    last_fy_totals_2 = globals()[last_fy_totals_1] # changes the string to a variable
    if sum(worldwide_fy_list_2) != 0: # to prevent adding titles not actually listed for current fy
        for_loop_list_1.append(japan_list_2 + overseas_list_2 + worldwide_fy_list_2 + worldwide_ltd_list_2 + last_fy_totals_2) # puts the variables together into one index of the array by combining its arrays

for_loop_list_2 = sorted(for_loop_list_1, reverse=True, key=itemgetter(12)) # the titles are sorted by the global fy number of the 4th quarter.

for i in range (len(for_loop_list_2)): # for adding in title numbers to keep track after sorting
        rank_1 = " Rank " + str(i+1)
        rank_2 = '{0: <9}'.format(rank_1)
        for_loop_list_2[i].append(rank_2)

def quarterly_calculation (y, z, a, b, c): # y: japan z: overseas a: worldwide fy b: worldwide ltd c: last fy totals

    y1, z1, a1, b1, c1 = [], [], [], [], []
    
    title_y = y[4]
    rank_c = c[5]

    for i in range(current_quarter):
        if i != 0:
            y1.append(y[i] - y[i-1]), z1.append(z[i] - z[i-1]), a1.append(a[i] - a[i-1]), b1.append(b[i])  # [0] Q1, [1] Q2, [2] Q3, [3] Q4
        else: y1.append(y[i]), z1.append(z[i]), a1.append(a[i]), b1.append(b[i])
    else:
        while len(y1) < 4: 
            y1.append(0), z1.append(0), a1.append(0), b1.append(0)  # To simplify inputs

    y1.append(y1[0] + y1[1] + y1[2] + y1[3]), z1.append(z1[0] + z1[1] + z1[2] + z1[3]), a1.append(a1[0] + a1[1] + a1[2] + a1[3]), b1.append(b1[current_quarter-1]) # fy cumulative y1[4], z1[4], a1[4], b1[4]

    d1 = [(y1[4] / a1[4]) * 100 , (z1[4] / a1[4]) * 100, (a1[4] / b1[4]) * 100] # [0] fiscal year comparison percentage Japan/WW, [1] fiscal year comparison percentage Overseas/WW, [2] fiscal year comparison percentage WW FY/LTD 

    d1.append((100 - (d1[2]))) # d1[3] WW LTD comparison percentage to WW FY
    
    if current_quarter == 4 and c[3] != 0 and c[3] != c[4]:
        c1.append(((y1[4] / c[0]) - 1) * 100)
        c1.append(((z1[4] / c[1]) - 1) * 100)
        c1.append(((a1[4] / c[2]) - 1) * 100)
        c1.append(((b1[4] / c[3]) - 1) * 100)
    elif current_quarter == 4 and c[3] != 0 and c[3] == c[4]:
        c1.append("+Infinity%"), c1.append("+Infinity%"), c1.append("+Infinity%"), c1.append("+Infinity%")
    elif current_quarter == 4:
        c1.append("New! "), c1.append("New! "), c1.append("New! "), c1.append("New! ")

    if current_quarter == 4:
        if "New! " == c1[0]:
            japan_new.append(y1[4])
            overseas_new.append(z1[4])
            global_fy_new.append(a1[4])
            global_ltd_new.append(b1[4])
        elif "+Infinity%" == c1[0]:
            japan_inf.append(y1[4])
            overseas_inf.append(z1[4])
            global_fy_inf.append(a1[4])
            global_ltd_inf.append(b1[4])
        else:
            japan_old.append(y1[4])
            overseas_old.append(z1[4])
            global_fy_old.append(a1[4])
            global_ltd_old.append(b1[4])
    
    return mobile_format (y1, z1, a1, b1, d1, title_y, rank_c, c1)

def format_to_string (y1, z1, a1, b1, d1, title_y, rank_c, c1):
    
    y2, z2, a2, b2 = ['{:.2f}M '.format(elem) for elem in y1], ['{:.2f}M '.format(elem) for elem in z1], ['{:.2f}M '.format(elem) for elem in a1], ['{:.2f}M '.format(elem) for elem in b1]

    if current_quarter == 4:
        if "New! " != c1[0] and "+Infinity%" != c1[0]:
            c2 = ['{:+.2f}% '.format(elem) for elem in c1]
        else: c2 = c1

    y3, z3, a3, b3 = ['{0: >9}'.format(elem) for elem in y2], ['{0: >9}'.format(elem) for elem in z2], ['{0: >9}'.format(elem) for elem in a2], ['{0: >9}'.format(elem) for elem in b2]

    if current_quarter == 4:
        c2 = ['{0: >9}'.format(elem) for elem in c2]

    d2 = ['{:.2f}% '.format(elem) for elem in d1]

    d2 = ['{0: >9}'.format(elem) for elem in d2] #format width

    if current_quarter == 4:
        return to_print_mobile (y3, z3, a3, b3, d2, a1, title_y, rank_c, c2)
    else:
        c2 = ["new", "new", "new", "new" ]    
        return to_print_mobile (y3, z3, a3, b3, d2, a1, title_y, rank_c, c2)

def mobile_format (y1, z1, a1, b1, d1, title_y, rank_c, c1):

    z2 = str.split(title_y) # title
    
    first_line = []
    first_line_check = []
    second_line = []
    line_join = ""

    for i in z2:
        first_line_check.append((len(i + " ")))
        if sum(first_line_check) > 31:
            second_line.append(i + " ")
        else: first_line.append(i + " ")

    if second_line:
        line_join = line_join.join(first_line) + " "*(31-len(line_join.join(first_line))) + "|" + " "*9 + "|" + "\n" + "| " + line_join.join(second_line) + " "*(31-len(line_join.join(second_line)))
    else: line_join = line_join.join(first_line) + " "*(31-sum(first_line_check))
    
    return format_to_string (y1, z1, a1, b1, d1, line_join, rank_c, c1)

def to_print_mobile (y3, z3, a3, b3, d2, a1, title_y, rank_c, c2):

    for_loop_list_local = [y3, z3, a3, b3]
    
    if a1 != 0:
        print(border_line[1])
        print("| " + title_y + "|" + rank_c + "|")
        print(border_line[1])
        for i in range(0, 4, 2):
            if i == 0:
                print("|" + header_1[5] + "|" + header_1[1] + "|" + header_1[2] + "|") # japan, overseas
            else:
                print("|" + header_1[6] + "|" + header_1[3] + "|" + header_1[4] + "|") # global fy, global ltd
            # print(border_line[1])
            print(border_line_middle[0])
            #print quarters
            for j in range(4):        
                if a1[j] != 0:
                    print("|"  +  row_1[j] +  "|" + for_loop_list_local[i][j] + "|" + for_loop_list_local[i+1][j] + "|")
            #print fy cumulative
            if a1 != 0:
                print(border_line_double[1])
                print("|"  +  row_1[4] +  "|" + for_loop_list_local[i][4] + "|" + for_loop_list_local[i+1][4] + "|")
                if current_quarter == 4 and i == 0:
                    print("|"  +  row_1[7] +  "|" + c2[0] + "|" + c2[1] + "|")
                elif current_quarter == 4:
                    print("|"  +  row_1[7] +  "|" + c2[2] + "|" + c2[3] + "|")
            #print percentages
            if a1 != 0:
                if i == 0:
                    print("|"  +  row_1[5] +  "|" + d2[0] + "|" + d2[1] + "|")
                else:
                    print("|"  +  row_1[6] +  "|" + d2[2] + "|" + d2[3] + "|")
                print(border_line_middle[0])
                # print(border_line[1])

    return

#printing+++++++++++++++++++++++++++
print(border_line[1])
print("|" + header_1[0] + "|")
print(border_line[1])
print(border_line[1])
print("|" + " Title and Rank " + " "*26 + "|")
print(border_line[1])
print("|" + " Units " + " "*35 + "|")
print(border_line[1])

japan_new, overseas_new, global_fy_new, global_ltd_new = [], [], [], []
japan_old, overseas_old, global_fy_old, global_ltd_old = [], [], [], []
japan_inf, overseas_inf, global_fy_inf, global_ltd_inf = [], [], [], []

for i in range(len(for_loop_list_2)):
    list_1 = for_loop_list_2[i][0:5] # to recreate a(i)_jp1
    list_2 = for_loop_list_2[i][5:9] # to recreate a(i)_os1
    list_3 = for_loop_list_2[i][9:13] # to recreate a(i)_wwfy1
    list_4 = for_loop_list_2[i][13:17] # to recreate a(i)_wwltd1
    list_5 = for_loop_list_2[i][17:24] # to recreate a(i)_last_fy_totals
    quarterly_calculation(list_1, list_2, list_3, list_4, list_5)

print(line_break_1)

def to_sum (new, old, inf, area):

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

    print(border_line[2])
    print("|" + area + "|")
    print(border_line[2])
    print(special_0[0])
    print(border_line[2])
    print(special_0[1] + fy_title_length_1[0] + "|" + fy_title_unit_2[0] + "|")
    print(special_0[2] + fy_title_length_1[1] + "|" + fy_title_unit_2[1] + "|")
    if fy_title_length[2] != 0:
        print(special_0[3] + fy_title_length_1[2] + "|" + fy_title_unit_2[2] + "|")
    print(border_line_double[2])
    print(special_0[4] + fy_title_length_1[3] + "|" + fy_title_unit_2[3] + "|")
    print(border_line[2])
    print(special_0[5])
    print(border_line[2])
    print(special_0[1] + fy_title_length_percentages_2[0] + "|" + fy_title_unit_percentages_2[0] + "|")
    print(special_0[2] + fy_title_length_percentages_2[1] + "|" + fy_title_unit_percentages_2[1] + "|")
    if fy_title_length[2] != 0:
        print(special_0[3] + fy_title_length_percentages_2[2] + "|" + fy_title_unit_percentages_2[2] + "|")
    print(border_line[2])

if current_quarter == 4:
    print(border_line[2])
    print(header_0[0])
    print(header_0[1])
    print(border_line[2])
    to_sum(japan_new, japan_old, japan_inf, " Japan"+" "*26)
    to_sum(overseas_new, overseas_old, overseas_inf, " Overseas"+" "*23)
    to_sum(global_fy_new, global_fy_old, global_fy_inf, " Global FY"+" "*22)
    to_sum(global_ltd_new, global_ltd_old, global_ltd_inf, " Global LTD"+" "*21)
    print(line_break_1)
