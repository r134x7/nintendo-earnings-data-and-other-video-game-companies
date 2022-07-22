header_0 = "| Nintendo Switch Regional Data   | FY3/2022 |"
header_1 = [  "  Japan   ", "The Americas",  "  Europe   ", "   Other   ", " Switch Lite              ", " Switch Hardware          ", " Switch Software          ", " Switch OLED              ", " Switch                   "] #header
row_1 = [ " 1st Quarter (Units)      ", " 2nd Quarter (Units)      " ,  " 3rd Quarter (Units)      ",   " 4th Quarter (Units)      ", " First Half (Units)       ", " First 3 Quarters (Units) ", " FY3/22 Cumulative (Units)", " 1st Quarter YoY%         ", " 2nd Quarter YoY%         ", " 3rd Quarter YoY%         ", " 4th Quarter YoY%         ", " First Half YoY%          ", " First 3 Qtrs YoY%        ", " FY3/22 Cumulative YoY%   ", " 1st Quarter WW%          ", " 2nd Quarter WW%          ", " 3rd Quarter WW%          ", " 4th Quarter WW%          ", " First Half WW%           ", " First 3 Qtrs WW%         ", " FY3/22 Cumulative WW%    ", " Life-To-Date (Units)     ", " Life-To-Date WW%         " ] # row names, array length 23, [0] to [22]
line_break_1 = "###" # line break

platform_headers = [" Switch " + " "*18, " Switch Lite " + " "*13, " Switch OLED " + " "*13, " Switch Hardware " + " "*9, " Switch Software " + " "*9]

current_quarter = 1 # set to 1, 2, 3 or 4.
mobile_output = 1 # 1 = on, 0 = off

border_line = ["+" + "-"*74 + "+", "+" + "-"*44 + "+"]
border_line_double = ["+" + "-"*74 + "+", "+" + "="*44 + "+"]

if mobile_output == 1:
    header_1 = [" Japan  ", "The     ", " Europe ", " Other  ", "Quarters", " First Half", " First Three Quarters", " FY3/22 Cumulative", " Life-To-Date"]
    header_2 = [" "*8, "Americas", " "*8, " "*8]
    row_1 = ["Q1", "Q2", "Q3", "Q4"]
    row_2 = [" Units", " YoY% ", " WW%  "]
    row_3 = [" Units  ", " YoY%   ", " WW%    "]
    platform_headers = [" Switch "]
    platform_headers_2 = [" "*8, " Lite   ", " OLED   ", "Hardware", "Software"]

# Worldwide figures
nintendo_switch_original_model_worldwide_1 = [
    # Input cumulative figures, Worldwide - Switch OG:
    331 / 100, # [0] 1st quarter
    645 / 100, # [1] 2nd quarter
    1179 / 100, # [2] 3rd quarter
    1356 / 100, # [3] 4th quarter
    8345 / 100, # [4] LTD at end of last fiscal year
    " Switch                   " # [5] header title
    ]

nintendo_switch_lite_worldwide_1 = [
    # Input cumulative figures, Worldwide - Switch Lite:
    114 / 100, # [0] 1st quarter
    182 / 100, # [1] 2nd quarter
    317 / 100, # [2] 3rd quarter
    370 / 100, # [3] 4th quarter
    1840 / 100, # [4] LTD at end of last fiscal year
    " Switch Lite              " # [5] header title
    ] 

nintendo_switch_oled_model_worldwide_1 = [
    # Input cumulative figures, Worldwide - Switch OLED:
    0 / 100, # [0] 1st quarter
    0 / 100, # [1] 2nd quarter
    399 / 100, # [2] 3rd quarter
    580 / 100, # [3] 4th quarter 
    580 / 100, # [4] LTD at end of last fiscal year
    " Switch OLED              " # [5] header title
    ] 

nintendo_switch_hardware_worldwide_1 = [
    # Input cumulative figures, Worldwide - Switch Hardware:
    445 / 100, # [0] 1st quarter
    828 / 100, # [1] 2nd quarter
    1895 / 100, # [2] 3rd quarter
    2306 / 100, # [3] 4th quarter
    10765 / 100, # [4] LTD at end of last fiscal year
    " Switch Hardware          " # [5] header title
    ] 

nintendo_switch_software_worldwide_1 = [
    # Input cumulative figures, Worldwide - Switch Software:
    4529 / 100, # [0] 1st quarter
    9389 / 100, # [1] 2nd quarter
    17929 / 100, # [2] 3rd quarter
    23507 / 100, # [3] 4th quarter
    82220 / 100, # [4] LTD at end of last fiscal year
    " Switch Software          " # [5] header title
    ] 


# Japan figures
nintendo_switch_original_model_japan_1 = [
    # Input cumulative figures, Japan - Switch OG
    83 / 100, # [0] 1st quarter
    158 / 100, # [1] 2nd quarter
    235 / 100, # [2] 3rd quarter
    256 / 100, # [3] 4th quarter
    1878 / 100 # [4] LTD at end of last fiscal year
    ] 

nintendo_switch_original_model_japan_last_fy = [
    # Input last fiscal year's quarterly calculated figures, Japan - Switch OG
    0.83, # [0] 1st quarter
    0.75, # [1] 2nd quarter
    0.77, # [2] 3rd quarter
    0.21, # [3] 4th quarter
    2.56 # [4] fy cumulative 
    ] 

nintendo_switch_lite_japan_1 = [
    # Input cumulative figures, Japan - Switch Lite:
    34 / 100, # [0] 1st quarter
    45 / 100, # [1] 2nd quarter
    91 / 100, # [2] 3rd quarter
    102 / 100, # [3] 4th quarter
    483 / 100 # [4] LTD at end of last fiscal year
    ] 

nintendo_switch_lite_japan_last_fy = [
    # Input last fiscal year's quarterly calculated figures, Japan - Switch Lite
    0.34, # [0] 1st quarter
    0.11, # [1] 2nd quarter
    0.46, # [2] 3rd quarter
    0.11, # [3] 4th quarter
    1.02  # [4] fy cumulative 
    ] 

nintendo_switch_oled_model_japan_1 = [
    # Input cumulative figures, Japan - Switch OLED:
    0 / 100, # [0] 1st quarter
    0 / 100, # [1] 2nd quarter
    107 / 100, # [2] 3rd quarter
    161 / 100, # [3] 4th quarter
    161 / 100 # [4] LTD at end of last fiscal year
    ] 

nintendo_switch_oled_model_japan_last_fy = [
    # Input last fiscal year's quarterly calculated figures, Japan - Switch OLED:
    0,# [0] 1st quarter
    0,# [1] 2nd quarter
    1.07,# [2] 3rd quarter
    0.54,# [3] 4th quarter
    1.61 # [4] fy cumulative 
    ] 

nintendo_switch_hardware_japan_1 = [
    # Input cumulative figures, Japan - Switch Hardware:
    116 / 100, # [0] 1st quarter
    203 / 100, # [1] 2nd quarter
    432 / 100, # [2] 3rd quarter
    519 / 100, # [3] 4th quarter
    2523 / 100 # [4] LTD at end of last fiscal year
    ] 

nintendo_switch_hardware_japan_last_fy = [
    # Input last fiscal year's quarterly calculated figures, Japan - Switch Hardware:
    1.16, # [0] 1st quarter
    0.87, # [1] 2nd quarter
    2.29, # [2] 3rd quarter
    0.87, # [3] 4th quarter
    5.19  # [4] fy cumulative 
    ] 

nintendo_switch_software_japan_1 = [
    # Input cumulative figures, Japan - Switch Software:
    813 / 100, # [0] 1st quarter
    1613 / 100, # [1] 2nd quarter
    3098 / 100, # [2] 3rd quarter
    4214 / 100, # [3] 4th quarter
    15436 / 100 # [4] LTD at end of last fiscal year
    ] 
    
nintendo_switch_software_japan_last_fy = [
    # Input last fiscal year's quarterly calculated figures, Japan - Switch Software:
    8.13, # [0] 1st quarter
    8.00, # [1] 2nd quarter
    14.85, # [2] 3rd quarter
    11.16, # [3] 4th quarter
    42.14 # [4] fy cumulative 
    ] 


# The Americas figures
nintendo_switch_original_model_the_americas_1 = [
    # Input cumulative figures, The Americas - Switch OG:
    110 / 100, # [0] 1st quarter
    215 / 100, # [1] 2nd quarter
    411 / 100, # [2] 3rd quarter
    522 / 100, # [3] 4th quarter
    3208 / 100 # [4] LTD at end of last fiscal year
    ] 

nintendo_switch_original_model_the_americas_last_fy = [
    # Input last fiscal year's quarterly calculated figures, The Americas - Switch OG:
    1.10, # [0] 1st quarter
    1.05, # [1] 2nd quarter
    1.96, # [2] 3rd quarter
    1.11, # [3] 4th quarter
    5.22 # [4] fy cumulative 
    ] 
    
nintendo_switch_lite_the_americas_1 = [
    # Input cumulative figures, The Americas - Switch Lite:
    48 / 100, # [0] 1st quarter
    89 / 100, # [1] 2nd quarter
    133 / 100, # [2] 3rd quarter
    159 / 100, # [3] 4th quarter
    800 / 100 # [4] LTD at end of last fiscal year
    ] 
    
nintendo_switch_lite_the_americas_last_fy = [
    # Input last fiscal year's quarterly calculated figures:
    0.48, # [0] 1st quarter
    0.41, # [1] 2nd quarter
    0.44, # [2] 3rd quarter
    0.26, # [3] 4th quarter
    1.59 # [4] fy cumulative 
    ] 
    
nintendo_switch_oled_model_the_americas_1 = [
    # Input cumulative figures, The Americas - Switch OLED:
    0 / 100, # [0] 1st quarter
    0 / 100, # [1] 2nd quarter
    141 / 100, # [2] 3rd quarter
    194 / 100, # [3] 4th quarter
    194 / 100 # [4] LTD at end of last fiscal year
    ] 
    
nintendo_switch_oled_model_the_americas_last_fy = [
    # Input cumulative figures, The Americas - Switch OLED:
    0, # [0] 1st quarter
    0, # [1] 2nd quarter
    1.41, # [2] 3rd quarter
    0.53, # [3] 4th quarter
    1.94 # [4] fy cumulative 
    ] 
    
nintendo_switch_hardware_the_americas_1 = [
    # Input cumulative figures, The Americas - Switch Hardware:
    159 / 100, # [0] 1st quarter
    304 / 100, # [1] 2nd quarter
    684 / 100, # [2] 3rd quarter
    876 / 100, # [3] 4th quarter
    4203 / 100 # [4] LTD at end of last fiscal year
    ] 
    
nintendo_switch_hardware_the_americas_last_fy = [
    # Input last fiscal year's quarterly calculated figures, The Americas - Switch Hardware:
    1.59, # [0] 1st quarter
    1.45, # [1] 2nd quarter
    3.80, # [2] 3rd quarter
    1.92, # [3] 4th quarter
    8.76  # [4] fy cumulative 
    ] 
    
nintendo_switch_software_the_americas_1 = [
    # Input cumulative figures, The Americas - Switch Software:
    2235 / 100, # [0] 1st quarter
    4513 / 100, # [1] 2nd quarter
    8464 / 100, # [2] 3rd quarter
    10827 / 100, # [3] 4th quarter
    36927 / 100 # [4] LTD at end of last fiscal year
    ] 
    
nintendo_switch_software_the_americas_last_fy = [
    # Input last fiscal year's quarterly calculated figures, The Americas - Switch Software:
    22.35, # [0] 1st quarter
    22.78, # [1] 2nd quarter
    39.51, # [2] 3rd quarter
    23.63, # [3] 4th quarter
    108.27 # [4] fy cumulative 
    ] 
    

# Europe figures
nintendo_switch_original_model_europe_1 = [
    # Input cumulative figures, Europe - Switch OG:
    82 / 100, # [0] 1st quarter
    163 / 100, # [1] 2nd quarter
    375 / 100, # [2] 3rd quarter
    404 / 100, # [3] 4th quarter
    2215 / 100 # [4] LTD at end of last fiscal year
    ] 
    
nintendo_switch_original_model_europe_last_fy = [
    # Input last fiscal year's quarterly calculated figures, Europe - Switch OG:
    0.82, # [0] 1st quarter
    0.81, # [1] 2nd quarter
    2.12, # [2] 3rd quarter
    0.29, # [3] 4th quarter
    4.04 # [4] fy cumulative 
    ] 
    
nintendo_switch_lite_europe_1 = [
    # Input cumulative figures, Europe - Switch Lite:
    26 / 100, # [0] 1st quarter
    39 / 100, # [1] 2nd quarter
    75 / 100, # [2] 3rd quarter
    86 / 100, # [3] 4th quarter
    433 / 100 # [4] LTD at end of last fiscal year
    ] 
    
nintendo_switch_lite_europe_last_fy = [
    # Input last fiscal year's quarterly calculated figures, Europe - Switch Lite:
    0.26, # [0] 1st quarter
    0.13, # [1] 2nd quarter
    0.36, # [2] 3rd quarter
    0.11, # [3] 4th quarter
    0.86 # [4] fy cumulative 
    ] 
    
nintendo_switch_oled_model_europe_1 = [
    # Input cumulative figures, Europe - Switch OLED:
    0 / 100, # [0] 1st quarter
    0 / 100, # [1] 2nd quarter
    91 / 100, # [2] 3rd quarter
    112 / 100, # [3] 4th quarter
    112 / 100 # [4] LTD at end of last fiscal year
    ] 
    
nintendo_switch_oled_model_europe_last_fy = [
    # Input cumulative figures, Europe - Switch OLED:
    0, # [0] 1st quarter
    0, # [1] 2nd quarter
    0.91, # [2] 3rd quarter
    0.21, # [3] 4th quarter
    1.12 # [4] fy cumulative 
    ] 
    
nintendo_switch_hardware_europe_1 = [
    # Input cumulative figures, Europe - Switch Hardware:
    108 / 100, # [0] 1st quarter
    202 / 100, # [1] 2nd quarter
    540 / 100, # [2] 3rd quarter
    602 / 100, # [3] 4th quarter
    2760 / 100 # [4] LTD at end of last fiscal year
    ] 
    
nintendo_switch_hardware_europe_last_fy = [
    # Input last fiscal year's quarterly calculated figures, Europe - Switch Hardware:
    1.08, # [0] 1st quarter
    0.94, # [1] 2nd quarter
    3.38, # [2] 3rd quarter
    0.62, # [3] 4th quarter
    6.02 # [4] fy cumulative 
    ] 
    
nintendo_switch_software_europe_1 = [
    # Input cumulative figures, Europe - Switch Software:
    1135 / 100, # [0] 1st quarter
    2563 / 100, # [1] 2nd quarter
    5085 / 100, # [2] 3rd quarter
    6578 / 100, # [3] 4th quarter
    23793 / 100 # [4] LTD at end of last fiscal year
    ] 
    
nintendo_switch_software_europe_last_fy = [
    # Input last fiscal year's quarterly calculated figures, Europe - Switch Software:
    11.35, # [0] 1st quarter
    14.28, # [1] 2nd quarter
    25.22, # [2] 3rd quarter
    14.93, # [3] 4th quarter
    65.78 # [4] fy cumulative 
    ] 
    

# Other figures
nintendo_switch_original_model_other_1 = [
    # Input cumulative figures, Other - Switch OG:
    56 / 100, # [0] 1st quarter
    109 / 100, # [1] 2nd quarter
    159 / 100, # [2] 3rd quarter
    174 / 100, # [3] 4th quarter
    1044 / 100 # [4] LTD at end of last fiscal year
    ] 
    
nintendo_switch_original_model_other_last_fy = [
    # Input last fiscal year's quarterly calculated figures, Other - Switch OG:
    0.56, # [0] 1st quarter
    0.53, # [1] 2nd quarter
    0.50, # [2] 3rd quarter
    0.15, # [3] 4th quarter
    1.74 # [4] fy cumulative 
    ] 
    
nintendo_switch_lite_other_1 = [
    # Input cumulative figures, Other - Switch Lite:
    5 / 100, # [0] 1st quarter
    10 / 100, # [1] 2nd quarter
    18 / 100, # [2] 3rd quarter
    22 / 100, # [3] 4th quarter
    123 / 100 # [4] LTD at end of last fiscal year
    ] 
    
nintendo_switch_lite_other_last_fy = [
    # Input last fiscal year's quarterly calculated figures, Other - Switch Lite:
    0.05, # [0] 1st quarter
    0.05, # [1] 2nd quarter
    0.08, # [2] 3rd quarter
    0.04, # [3] 4th quarter
    0.22 # [4] fy cumulative 
    ] 
    
nintendo_switch_oled_model_other_1 = [
    # Input cumulative figures, Other - Switch OLED:
    0 / 100, # [0] 1st quarter
    0 / 100, # [1] 2nd quarter
    61 / 100, # [2] 3rd quarter
    113 / 100, # [3] 4th quarter
    113 / 100 # [4] LTD at end of last fiscal year
    ] 
    
nintendo_switch_oled_model_other_last_fy = [
    # Input cumulative figures, Other - Switch OLED:
    0, # [0] 1st quarter
    0, # [1] 2nd quarter
    0.61, # [2] 3rd quarter
    0.52, # [3] 4th quarter
    1.13 # [4] fy cumulative 
    ] 
    
nintendo_switch_hardware_other_1 = [
    # Input cumulative figures, Other - Switch Hardware:
    62 / 100, # [0] 1st quarter
    119 / 100, # [1] 2nd quarter
    238 / 100, # [2] 3rd quarter
    309 / 100, # [3] 4th quarter
    1280 / 100 # [4] LTD at end of last fiscal year
    ] 
    
nintendo_switch_hardware_other_last_fy = [
    # Input last fiscal year's quarterly calculated figures, Other - Switch Hardware:
    0.62, # [0] 1st quarter
    0.57, # [1] 2nd quarter
    1.19, # [2] 3rd quarter
    0.71, # [3] 4th quarter
    3.09 # [4] fy cumulative 
    ] 
    
nintendo_switch_software_other_1 = [
    # Input cumulative figures, Other - Switch Software:
    346 / 100, # [0] 1st quarter
    700 / 100, # [1] 2nd quarter
    1283 / 100, # [2] 3rd quarter
    1888 / 100, # [3] 4th quarter
    6062 / 100 # [4] LTD at end of last fiscal year
    ] 
    
nintendo_switch_software_other_last_fy = [
    # Input last fiscal year's quarterly calculated figures, Other - Switch Software:
    3.46, # [0] 1st quarter
    3.54, # [1] 2nd quarter
    5.83, # [2] 3rd quarter
    6.05, # [3] 4th quarter
    18.88 # [4] fy cumulative 
    ] 
    

def quarterly_calculation (y, z, a, j): # region, region last fy, ww. corresponding category.

    y1 = []
    a1 = []

    for i in range(current_quarter):
        if i != 0:
            y1.append(y[i] - y[i-1]), a1.append(a[i] - a[i-1]) # [0] Q1, [1] Q2, [2] Q3, [3] Q4
        else: y1.append(y[i]), a1.append(a[i])
    else:
        while len(y1) < 4: 
            y1.append(0), a1.append(0) # To simplify inputs
    
    def sum_a(x, z, i): #recursive function to get: fy first half y1[4], fy three quarters y1[5] fy cumulative y1[6], LTD [7]
        stop_function = [y1[0] + y1[1] + y1[2] + y1[3], a1[0] + a1[1] + a1[2] + a1[3], 4]

        if x == y1[0] and z == a1[0] and i == 0: # Q1 alone is not needed
            i += 1
            return sum_a(x + y1[i], z + a1[i],  i)
        else:
            y1.append(x), a1.append(z)
            i += 1
            if x == stop_function[0] and z == stop_function[1] and i == stop_function[2]:
                return y1.append(y[4] + y1[6]), a1.append(a[4] + a1[6])
            else:
                return sum_a(x + y1[i], z + a1[i], i)

    sum_a(y1[0], a1[0], 0)

    return year_on_year_calculation(y1, z, a, a1, j)

def year_on_year_calculation (y1, z, a, a1, j): # z: uses last fy variables

    z1 = []

    for i in range(4):
        if z[i] != 0:
            z1.append(((y1[i] / z[i]) - 1) * 100) # [0] Q1, [1] Q2, [2] Q3, [3] Q4
        else: z1.append(0) # for dealing with divide by zeros

    def sum_b(x, b, i): #recursive function to get: fy first half y1[4], fy three quarters y1[5] fy cumulative y1[6]
        stop_function = [y1[0] + y1[1] + y1[2] + y1[3], z[0] + z[1] + z[2] + z[3], 4]

        if x == y1[0] and b == z[0] and i == 0: # Q1 alone is not needed
            i += 1
            return sum_b(x + y1[i], b + z[i], i)
        else:
            if b != 0:
                z1.append(((x / b) - 1) * 100)
                i += 1
            else:
                z1.append(0) # for dealing with divide by zeros
                i += 1
            
        if x == stop_function[0] and b == stop_function[1] and i == stop_function[2]:
            return
        else:
            return sum_b(x + y1[i], b + z[i], i)

    sum_b(y1[0], z[0], 0)

    return worldwide_percentages(y1, z1, a, a1, j)

def worldwide_percentages (y1, z1, a, a1, j):

    d1 = []

    for i in range (8): # [0] 1st quarter, [1] 2nd quarter, [2] 3rd quarter, [3] 4th quarter, [4] 1st half, [5] first three quarters, [6] fy cumulative, [7] LTD
        if a1[i] != 0:
            d1.append((y1[i] / a1[i]) * 100)
        else:  d1.append(0)

    return format_to_string(y1, z1, a, d1, j)


def format_to_string (y1, z1, a, d1, j):

    y2 = ['{:.2f}M '.format(elem) for elem in y1]
    z2 = ['{:+.2f}% '.format(elem) for elem in z1]
    d2 = ['{:.2f}% '.format(elem) for elem in d1]

    if j == 0 and mobile_output == 0:
        y3 = ['{0: >10}'.format(elem) for elem in y2]
        z3 = ['{0: >10}'.format(elem) for elem in z2]
        d3 = ['{0: >10}'.format(elem) for elem in d2]
    elif j == 2 and mobile_output == 0:
        y3 = ['{0: >12}'.format(elem) for elem in y2]
        z3 = ['{0: >12}'.format(elem) for elem in z2]
        d3 = ['{0: >12}'.format(elem) for elem in d2]
    elif j == 4 or j == 6 and mobile_output == 0:
        y3 = ['{0: >11}'.format(elem) for elem in y2]
        z3 = ['{0: >11}'.format(elem) for elem in z2]
        d3 = ['{0: >11}'.format(elem) for elem in d2]
    
    if mobile_output == 1:
        y3 = ['{0:>8}'.format(elem) for elem in y2]
        z3 = ['{0:>8}'.format(elem) for elem in z2]
        d3 = ['{0:>8}'.format(elem) for elem in d2]

    if a == nintendo_switch_original_model_worldwide_1:
        return return_a1.append(y3), return_a2.append(z3), return_a3.append(d3)
    elif a == nintendo_switch_lite_worldwide_1:
        return return_b1.append(y3), return_b2.append(z3), return_b3.append(d3)
    elif a == nintendo_switch_oled_model_worldwide_1:
        return return_c1.append(y3), return_c2.append(z3), return_c3.append(d3)
    elif a == nintendo_switch_hardware_worldwide_1:
        return return_d1.append(y3), return_d2.append(z3), return_d3.append(d3)
    elif a == nintendo_switch_software_worldwide_1:
        return return_e1.append(y3), return_e2.append(z3), return_e3.append(d3)

def to_print_original (region_units, region_yoy, region_ww, number):

    print(border_line[0])
    print("|" + platform_headers[number] + "|" + header_1[0] + "|" + header_1[1] +"|" + header_1[2] + "|" + header_1[3] + "|")
    for i in range(current_quarter):
        if "0.00M" not in region_units[0][i]:
            print(border_line[0])
            print("|"  +  row_1[i] +  "|" + region_units[0][i] + "|" + region_units[1][i] + "|" + region_units[2][i] +  "|" +  region_units[3][i] + "|" )
        if "+0.00%" not in (region_yoy[0][i] and region_yoy[1][i] and region_yoy[2][i] and region_yoy[3][i]):
            print("|"  +  row_1[i+7] +  "|" + region_yoy[0][i] + "|" + region_yoy[1][i] + "|" + region_yoy[2][i] +  "|" +  region_yoy[3][i] + "|")
        if "0.00M" not in region_units[0][i]:
            print("|"  + row_1[i+14] +   "|" + region_ww[0][i] + "|" + region_ww[1][i] + "|" + region_ww[2][i] + "|" + region_ww[3][i] + "|")
    else: 
        print(border_line_double[0])
        if current_quarter >= 2 and "0.00M" not in region_units[0][4]:
            print("|"  +  row_1[4] +  "|" + region_units[0][4] + "|" + region_units[1][4] + "|" + region_units[2][4] +  "|" +  region_units[3][4] + "|" )
        if current_quarter >= 2 and "+0.00%" not in (region_yoy[0][4] and region_yoy[1][4] and region_yoy[2][4] and region_yoy[3][4]):
            print("|"  +  row_1[11] +  "|" + region_yoy[0][4] + "|" + region_yoy[1][4] + "|" + region_yoy[2][4] +  "|" +  region_yoy[3][4] + "|")
        if current_quarter >= 2 and "0.00M" not in region_units[0][4]:    
            print("|"  + row_1[18] +   "|" + region_ww[0][4] + "|" + region_ww[1][4] + "|" + region_ww[2][4] + "|" + region_ww[3][4] + "|")
            print(border_line[0])
        if current_quarter >= 3 and "0.00M" not in region_units[0][5]:
            print("|"  +  row_1[5] +  "|" + region_units[0][5] + "|" + region_units[1][5] + "|" + region_units[2][5] +  "|" +  region_units[3][5] + "|" )
        if current_quarter >= 3 and "+0.00%" not in (region_yoy[0][5] and region_yoy[1][5] and region_yoy[2][5] and region_yoy[3][5]):
            print("|"  +  row_1[12] +  "|" + region_yoy[0][5] + "|" + region_yoy[1][5] + "|" + region_yoy[2][5] +  "|" +  region_yoy[3][5] + "|")
        if current_quarter >= 3 and "0.00M" not in region_units[0][5]:
            print("|"  + row_1[19] +   "|" + region_ww[0][5] + "|" + region_ww[1][5] + "|" + region_ww[2][5] + "|" + region_ww[3][5] + "|")
            print(border_line[0])
        print("|"  +  row_1[6] +  "|" + region_units[0][6] + "|" + region_units[1][6] + "|" + region_units[2][6] +  "|" +  region_units[3][6] + "|" ) # fy cumulative
        if current_quarter == 4 and "+0.00%" not in (region_yoy[0][6] and region_yoy[1][6] and region_yoy[2][6] and region_yoy[3][6]):
            print("|"  +  row_1[13] +  "|" + region_yoy[0][6] + "|" + region_yoy[1][6] + "|" + region_yoy[2][6] +  "|" +  region_yoy[3][6] + "|")    
        print("|"  + row_1[20] +   "|" + region_ww[0][6] + "|" + region_ww[1][6] + "|" + region_ww[2][6] + "|" + region_ww[3][6] + "|")
        print(border_line[0])
        print("|"  +  row_1[21] +  "|" + region_units[0][7] + "|" + region_units[1][7] + "|" + region_units[2][7] +  "|" +  region_units[3][7] + "|" ) # ltd
        print("|"  + row_1[22] +   "|" + region_ww[0][7] + "|" + region_ww[1][7] + "|" + region_ww[2][7] + "|" + region_ww[3][7] + "|")
        print(border_line[0])
        
    # print(line_break_1)

    return

def to_print_mobile (region_units, region_yoy, region_ww, number):

    print(border_line[1])
    print("|" + platform_headers[0] + "|" + header_1[0] + "|" + header_1[1] +"|" + header_1[2] + "|" + header_1[3] + "|")
    print("|" + platform_headers_2[number] + "|" + header_2[0] + "|" + header_2[1] +"|" + header_2[2] + "|" + header_2[3] + "|")
    # if "0.00M" not in region_units[0][0] and region_units[0][1] and region_units[0][2] and region_units[0][3]:
        # print(border_line[1])
        # print("|" + header_1[4] + "|" + " "*35 + "|")
    for i in range(current_quarter):
        if "0.00M" not in region_units[0][i]:
            print(border_line[1])
            print("|"  +  row_1[i] + row_2[0] +  "|" + region_units[0][i] + "|" + region_units[1][i] + "|" + region_units[2][i] +  "|" +  region_units[3][i] + "|" )
        if "+0.00%" not in (region_yoy[0][i] and region_yoy[1][i] and region_yoy[2][i] and region_yoy[3][i]):
            print("|"  +  row_1[i] + row_2[1] + "|" + region_yoy[0][i] + "|" + region_yoy[1][i] + "|" + region_yoy[2][i] +  "|" +  region_yoy[3][i] + "|")
        if "0.00M" not in region_units[0][i]:
            print("|"  + row_1[i] + row_2[2] +  "|" + region_ww[0][i] + "|" + region_ww[1][i] + "|" + region_ww[2][i] + "|" + region_ww[3][i] + "|")
    else: 
        print(border_line_double[1])
        if current_quarter >= 2 and "0.00M" not in region_units[0][4]:
            print("|" + header_1[5] + " "*33 + "|") # first half
            print(border_line[1])
            print("|"  +  row_3[0] +  "|" + region_units[0][4] + "|" + region_units[1][4] + "|" + region_units[2][4] +  "|" +  region_units[3][4] + "|" )
        if current_quarter >= 2 and "+0.00%" not in (region_yoy[0][4] and region_yoy[1][4] and region_yoy[2][4] and region_yoy[3][4]):
            print("|"  +  row_3[1] +  "|" + region_yoy[0][4] + "|" + region_yoy[1][4] + "|" + region_yoy[2][4] +  "|" +  region_yoy[3][4] + "|")
        if current_quarter >= 2 and "0.00M" not in region_units[0][4]:    
            print("|"  + row_3[2] +   "|" + region_ww[0][4] + "|" + region_ww[1][4] + "|" + region_ww[2][4] + "|" + region_ww[3][4] + "|")
            print(border_line[1])
        if current_quarter >= 3 and "0.00M" not in region_units[0][5]:
            print("|" + header_1[6] + " "*23 + "|") # first three quarters
            print(border_line[1])
            print("|"  +  row_3[0] +  "|" + region_units[0][5] + "|" + region_units[1][5] + "|" + region_units[2][5] +  "|" +  region_units[3][5] + "|" )
        if current_quarter >= 3 and "+0.00%" not in (region_yoy[0][5] and region_yoy[1][5] and region_yoy[2][5] and region_yoy[3][5]):
            print("|"  +  row_3[1] +  "|" + region_yoy[0][5] + "|" + region_yoy[1][5] + "|" + region_yoy[2][5] +  "|" +  region_yoy[3][5] + "|")
        if current_quarter >= 3 and "0.00M" not in region_units[0][5]:
            print("|"  + row_3[2] +   "|" + region_ww[0][5] + "|" + region_ww[1][5] + "|" + region_ww[2][5] + "|" + region_ww[3][5] + "|")
            print(border_line[1])
        print("|" + header_1[7] + " "*26 + "|") # fy cumulative
        print(border_line[1])
        print("|"  +  row_3[0] +  "|" + region_units[0][6] + "|" + region_units[1][6] + "|" + region_units[2][6] +  "|" +  region_units[3][6] + "|" ) 
        if current_quarter == 4 and "+0.00%" not in (region_yoy[0][6] and region_yoy[1][6] and region_yoy[2][6] and region_yoy[3][6]):
            print("|"  +  row_3[1] +  "|" + region_yoy[0][6] + "|" + region_yoy[1][6] + "|" + region_yoy[2][6] +  "|" +  region_yoy[3][6] + "|")    
        print("|"  + row_3[2] +   "|" + region_ww[0][6] + "|" + region_ww[1][6] + "|" + region_ww[2][6] + "|" + region_ww[3][6] + "|")
        print(border_line[1])
        print("|" + header_1[8] + " "*31 + "|") # ltd
        print(border_line[1])
        print("|"  +  row_3[0] +  "|" + region_units[0][7] + "|" + region_units[1][7] + "|" + region_units[2][7] +  "|" +  region_units[3][7] + "|" ) 
        print("|"  + row_3[2] +   "|" + region_ww[0][7] + "|" + region_ww[1][7] + "|" + region_ww[2][7] + "|" + region_ww[3][7] + "|")
        print(border_line[1])

    # print(line_break_1)

    return

print(border_line[1])
print(header_0)
print(border_line[1])

for_loop_list_a = [nintendo_switch_original_model_japan_1, nintendo_switch_original_model_japan_last_fy, nintendo_switch_original_model_the_americas_1, nintendo_switch_original_model_the_americas_last_fy, nintendo_switch_original_model_europe_1, nintendo_switch_original_model_europe_last_fy, nintendo_switch_original_model_other_1, nintendo_switch_original_model_other_last_fy, nintendo_switch_original_model_worldwide_1]

return_a1, return_a2, return_a3 = [], [], []

for_loop_list_b = [nintendo_switch_lite_japan_1, nintendo_switch_lite_japan_last_fy, nintendo_switch_lite_the_americas_1, nintendo_switch_lite_the_americas_last_fy, nintendo_switch_lite_europe_1, nintendo_switch_lite_europe_last_fy, nintendo_switch_lite_other_1, nintendo_switch_lite_other_last_fy, nintendo_switch_lite_worldwide_1]

return_b1, return_b2, return_b3 = [], [], []

for_loop_list_c = [nintendo_switch_oled_model_japan_1, nintendo_switch_oled_model_japan_last_fy, nintendo_switch_oled_model_the_americas_1, nintendo_switch_oled_model_the_americas_last_fy, nintendo_switch_oled_model_europe_1, nintendo_switch_oled_model_europe_last_fy, nintendo_switch_oled_model_other_1, nintendo_switch_oled_model_other_last_fy, nintendo_switch_oled_model_worldwide_1]

return_c1, return_c2, return_c3 = [], [], []

for_loop_list_d = [nintendo_switch_hardware_japan_1, nintendo_switch_hardware_japan_last_fy, nintendo_switch_hardware_the_americas_1, nintendo_switch_hardware_the_americas_last_fy, nintendo_switch_hardware_europe_1, nintendo_switch_hardware_europe_last_fy, nintendo_switch_hardware_other_1, nintendo_switch_hardware_other_last_fy, nintendo_switch_hardware_worldwide_1]

return_d1, return_d2, return_d3 = [], [], []

for_loop_list_e = [nintendo_switch_software_japan_1, nintendo_switch_software_japan_last_fy, nintendo_switch_software_the_americas_1, nintendo_switch_software_the_americas_last_fy, nintendo_switch_software_europe_1, nintendo_switch_software_europe_last_fy, nintendo_switch_software_other_1, nintendo_switch_software_other_last_fy, nintendo_switch_software_worldwide_1]

return_e1, return_e2, return_e3 = [], [], []

for j in range (0, 8, 2):
    quarterly_calculation(for_loop_list_a[j],for_loop_list_a[j+1],for_loop_list_a[8], j)
    quarterly_calculation(for_loop_list_b[j],for_loop_list_b[j+1],for_loop_list_b[8], j)
    quarterly_calculation(for_loop_list_c[j],for_loop_list_c[j+1],for_loop_list_c[8], j)
    quarterly_calculation(for_loop_list_d[j],for_loop_list_d[j+1],for_loop_list_d[8], j)
    quarterly_calculation(for_loop_list_e[j],for_loop_list_e[j+1],for_loop_list_e[8], j)

if mobile_output == 0:
    to_print_original(return_a1, return_a2, return_a3, 0) # original switch model
    to_print_original(return_b1, return_b2, return_b3, 1) # switch lite
    to_print_original(return_c1, return_c2, return_c3, 2) # switch oled
    to_print_original(return_d1, return_d2, return_d3, 3) # hardware
    to_print_original(return_e1, return_e2, return_e3, 4) # software
else:
    to_print_mobile(return_a1, return_a2, return_a3, 0) # original switch model
    to_print_mobile(return_b1, return_b2, return_b3, 1) # switch lite
    to_print_mobile(return_c1, return_c2, return_c3, 2) # switch oled
    to_print_mobile(return_d1, return_d2, return_d3, 3) # hardware
    to_print_mobile(return_e1, return_e2, return_e3, 4) # software

print(line_break_1)
