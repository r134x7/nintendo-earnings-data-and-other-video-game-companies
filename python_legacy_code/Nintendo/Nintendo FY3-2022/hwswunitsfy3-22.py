header_1 = [ " Switch (units)    ", "  Switch  ", "Switch Lite", "Switch OLED", "Hardware Total", "Software Total", " Mobile, IP related income, etc. ", ] #header
row_1 = [ " 1st Quarter       ", " 2nd Quarter       " ,  " 3rd Quarter       ",   " 4th Quarter       ", " First Half        ", " First 3 Quarters  ", " FY3/22 Cumulative ", " 1st Quarter YoY%  ", " 2nd Quarter YoY%  ", " 3rd Quarter YoY%  ", " 4th Quarter YoY%  ", " First Half YoY%   ", " First 3 Qtrs YoY% ", " FY3/22 Cml. YoY%  ", " Life-To-Date      ", " FY3/22 Forecast   ", " 1st FCST Revision ", " 2nd FCST Revision ", " 3rd FCST Revision ", " FY3/23 Forecast   ", ] # row names, array length 20
line_break_1 = "###" # line break

border_line = ["+" + "-"*84 + "+", "+" + "-"*33 + "+", "+" + "-"*23 + "+", "+" + "-"*30 + "+", "+" + "-"*27 + "+", "+" + "-"*35 + "+"]
border_line_double = ["+" + "-"*84 + "+", "+" + "="*33 + "+", "+" + "="*23 + "+", "+" + "="*30 + "+", "+" + "="*35 + "+"]

# border_line = ["+" + "-"*78 + "+", "+" + "-"*38 + "+", "+" + "-"*32 + "+", "+" + "-"*23 + "+", "+" + "-"*27 + "+"]
# border_line_double = ["+" + "-"*78 + "+", "+" + "="*38 + "+", "+" + "="*32 + "+", "+" + "="*23 + "+"]

current_quarter = 4 # Set to 1, 2, 3 or 4.
mobile_output = 1 # 1 = on, 0 = off

if mobile_output != 0:
    header_1 = [ " Switch (units)    ", 0, " Switch " + " "*5, 0, " Switch Lite ", 0, " Switch OLED ", 0, " Hardware    ", 0, " Software    ", 0, " Mobile, IP related income, etc.  ", 0, " "*2 + " Units ", "    YoY% ", " Total       ", ]
    row_1 = [" 1st Quarter ", " 2nd Quarter ",  " 3rd Quarter ",  " 4th Quarter ", " 1st Quarter YoY%  ", " 2nd Quarter YoY%  ", " 3rd Quarter YoY%  ", " 4th Quarter YoY%  ", " First Half  ", " 1st 3 Qtrs  ", " FY3/22 Cml. ", " First Half YoY%   ", " First 3 Qtrs YoY% ", " FY3/22 Cml. YoY%  ", " FY3/22 Forecast ", " FCST Revision 1 ", " FCST Revision 2 ", " FCST Revision 3 ", " FY3/23 Forecast ", " Life-To-Date"] # row names, array length = 20

nintendo_switch_original_model_1 = [331 / 100, 645 / 100, 1179 / 100, 1356 / 100, 6989 / 100] # input cumulative figures, [0] is Q1, [1] Q2, [2] Q3, [3] Q4, [4] LTD at end of last fy

nintendo_switch_original_model_last_fy_1 = [3.05, 5.31, 8.41, 3.55, 20.32] # [0] is Q1, [1] Q2, [2] Q3, [3] Q4, [4] last fy cumulative

nintendo_switch_lite_1 = [114 / 100, 182 / 100, 317 / 100, 370 / 100, 1470 / 100] # input cumulative figures, [0] is Q1, [1] Q2, [2] Q3, [3] Q4, [4] LTD at end of last fy

nintendo_switch_lite_last_fy_1 = [2.62, 1.55, 3.16, 1.18, 8.51] # [0] is Q1, [1] Q2, [2] Q3, [3] Q4, [4] last fy cumulative

nintendo_switch_oled_model_1 = [ 0 / 100, 0 / 100, 399 / 100, 580 / 100, 0 / 100] # input cumulative figures, [0] is Q1, [1] Q2, [2] Q3, [3] Q4, [4] LTD at end of last fy

nintendo_switch_oled_model_last_fy_1 = [0, 0, 0, 0, 0] # [0] is Q1, [1] Q2, [2] Q3, [3] Q4, [4] last fy cumulative

nintendo_switch_hardware_1 = [445 / 100, 828 / 100, 1895 / 100, 2306 / 100, 8459 / 100, 2550 / 100, 2100 / 100, 2400 / 100, 2300 / 100, 0] #input cumulative figures, [0] is Q1, [1] Q2, [2] Q3, [3] Q4, [4] LTD at end of last fy, [5] current fiscal year forecast, [6] next fiscal year forecast (you wouldn't expect to use this until Q4 results), [7] 1st forecast revision, [8] 2nd forecast revision, [9] 3rd forecast revision (unlikely but there just in case)

nintendo_switch_hardware_last_fy_1 = [5.68, 6.85, 11.57, 4.73, 28.83] # [0] is Q1, [1] Q2, [2] Q3, [3] Q4, [4] last fy cumulative

nintendo_switch_software_1 = [4529 / 100, 9389 / 100, 17929 / 100, 23507 / 100, 58712 / 100, 19000 / 100, 21000 / 100, 20000 / 100, 22000 / 100, 0] #input cumulative figures, [0] is Q1, [1] Q2, [2] Q3, [3] Q4, [4] LTD at end of last fy, [5] current fiscal year forecast, [6] next fiscal year forecast (you wouldn't expect to use this until Q4 results), [7] 1st forecast revision, [8] 2nd forecast revision, [9] 3rd forecast revision (unlikely but there just in case)

nintendo_switch_software_last_fy_1 = [50.43, 49.82, 75.85, 54.78, 230.88] # [0] is Q1, [1] Q2, [2] Q3, [3] Q4, [4] last fy cumulative

mobile_ip_etc_income_1 = [13199, 25501, 39825, 53342] # input cumulative figures, [0] is Q1, [1] Q2, [2] Q3, [3] Q4,

mobile_ip_etc_income_last_fy_1 = [13278, 13449, 15284, 15069, 57080] # [0] is Q1, [1] Q2, [2] Q3, [3] Q4, [4] last fy cumulative.

def quarterly_calculation (y): # y: input current fy variables

    y1 =[]

    for i in range(current_quarter):
        if i != 0:
            y1.append(y[i] - y[i-1]) # [0] Q1, [1] Q2, [2] Q3, [3] Q4
        else: y1.append(y[i])
    else:
        while len(y1) < 4: y1.append(0) # To simplify inputs
    
    def sum_a(x, i): #recursive function to get: fy first half y1[4], fy three quarters y1[5] fy cumulative y1[6], LTD [7]
        stop_function = [y1[0] + y1[1] + y1[2] + y1[3], 4]

        if x == y1[0] and i == 0: # Q1 alone is not needed
            i += 1
            return sum_a(x + y1[i], i)
        else:
            y1.append(x)
            i += 1
            if x == stop_function[0] and i == stop_function[1] and y != mobile_ip_etc_income_1:
                return y1.append(y[4] + y1[6])
            elif x == stop_function[0] and i == stop_function[1] and y == mobile_ip_etc_income_1:
                return
            else:
                return sum_a(x + y1[i], i)

    sum_a(y1[0], 0)

    if y == nintendo_switch_hardware_1 or y == nintendo_switch_software_1:
        for i in range(5): 
            y1.append(y[i+5]) # [8] current fiscal year forecast, [9] next fiscal year forecast (you wouldn't expect to use this until Q4 results), [10] 1st forecast revision, [11] 2nd forecast revision, [12] 3rd forecast revision (unlikely but there just in case)

    if y == nintendo_switch_original_model_1:
        return format_to_string_nintendo_switch_original_model(y1), year_on_year_calculation(y1, nintendo_switch_original_model_last_fy_1)
    elif y == nintendo_switch_lite_1:
        return format_to_string_nintendo_switch_lite_or_oled(y1), year_on_year_calculation(y1, nintendo_switch_lite_last_fy_1)
    elif y == nintendo_switch_oled_model_1:
        return format_to_string_nintendo_switch_lite_or_oled(y1), year_on_year_calculation(y1, nintendo_switch_oled_model_last_fy_1)
    elif y == nintendo_switch_hardware_1:
        return format_to_string_nintendo_switch_hardware_or_software(y1), year_on_year_calculation(y1, nintendo_switch_hardware_last_fy_1)
    elif y == nintendo_switch_software_1:
        return format_to_string_nintendo_switch_hardware_or_software(y1), year_on_year_calculation(y1, nintendo_switch_software_last_fy_1)
    elif y == mobile_ip_etc_income_1:
        return format_to_string_mobile_ip_etc(y1), year_on_year_calculation(y1, mobile_ip_etc_income_last_fy_1)

def format_to_string_nintendo_switch_original_model (y1):

    y2 = ['{:.2f}M '.format(elem) for elem in y1] #formats all integers to string to add ¥, M and commas
    if mobile_output == 0:
        y3 = ['{0: >10}'.format(elem) for elem in y2] #format width
    else:
        y3 =  ['{0: >9}'.format(elem) for elem in y2] #format width

    return y3

def format_to_string_nintendo_switch_lite_or_oled (y1):

    y2 = ['{:.2f}M '.format(elem) for elem in y1] #formats all integers to string to add ¥, M and commas
    if mobile_output == 0:
        y3 = ['{0: >11}'.format(elem) for elem in y2] #format width
    else:
        y3 =  ['{0: >9}'.format(elem) for elem in y2] #format width

    return y3

def format_to_string_nintendo_switch_hardware_or_software (y1):

    y2 = ['{:.2f}M '.format(elem) for elem in y1] #formats all integers to string to add ¥, M and commas
    if mobile_output == 0:
        y3 = ['{0: >14}'.format(elem) for elem in y2] #format width
    else:
        y3 = ['{0: >9}'.format(elem) for elem in y2] #format width

    return y3

def format_to_string_mobile_ip_etc (y1):

    y2 = ['¥{:,}M '.format(elem) for elem in y1] #formats all integers to string to add ¥, M and commas
    if mobile_output == 0:
        y3 = ['{0: >13}'.format(elem) for elem in y2] #format width
    else:
        y3 =  ['{0: >10}'.format(elem) for elem in y2] #format width

    return y3

def year_on_year_calculation (y1, z): # z: uses last fy variables

    z1 = []

    for i in range(4):
        if z[i] != 0:
            z1.append(((y1[i] / z[i]) - 1) * 100) # Calculates Year-on-Year percentages for each quarter, [0] is Q1, [1] Q2, [2] Q3, [3] Q4
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

    if z == nintendo_switch_original_model_last_fy_1:
        return format_to_string_year_on_year_nintendo_switch_original_model(z1)
    elif z == nintendo_switch_lite_last_fy_1 or z == nintendo_switch_oled_model_last_fy_1:
        return format_to_string_year_on_year_nintendo_switch_lite_or_oled(z1)
    elif z == nintendo_switch_hardware_last_fy_1 or z == nintendo_switch_software_last_fy_1:
        return format_to_string_year_on_year_nintendo_switch_hardware_or_software(z1)
    elif z == mobile_ip_etc_income_last_fy_1:
        return format_to_string_year_on_year_mobile_ip_etc (z1)

def format_to_string_year_on_year_nintendo_switch_original_model (z1):
    
    z2 = ['{:+.2f}% '.format(elem) for elem in z1] #format all integers to string to add % and + when needed
    if mobile_output == 0:
        z3 = ['{0: >10}'.format(elem) for elem in z2] #format width
    else:
        z3 = ['{0: >9}'.format(elem) for elem in z2] #format width

    return z3

def format_to_string_year_on_year_nintendo_switch_lite_or_oled (z1):
    
    z2 = ['{:+.2f}% '.format(elem) for elem in z1] #format all integers to string to add % and + when needed
    if mobile_output == 0:
        z3 = ['{0: >11}'.format(elem) for elem in z2] #format width
    else:
        z3 = ['{0: >9}'.format(elem) for elem in z2] #format width

    return z3

def format_to_string_year_on_year_nintendo_switch_hardware_or_software (z1):
    
    z2 = ['{:+.2f}% '.format(elem) for elem in z1] #format all integers to string to add % and + when needed
    z3 = ['{0: >9}'.format(elem) for elem in z2] #format width

    return z3

def format_to_string_year_on_year_mobile_ip_etc (z1):
    
    z2 = ['{:+.2f}% '.format(elem) for elem in z1] #format all integers to string to add % and + when needed
    if mobile_output == 0:
        z3 = ['{0: >13}'.format(elem) for elem in z2] #format width
    else:
        z3 = ['{0: >10}'.format(elem) for elem in z2] #format width

    return z3

nintendo_switch_original_model_2, nintendo_switch_original_model_last_fy_2 = quarterly_calculation(nintendo_switch_original_model_1)
nintendo_switch_lite_2, nintendo_switch_lite_last_fy_2 = quarterly_calculation(nintendo_switch_lite_1)
nintendo_switch_oled_model_2, nintendo_switch_oled_model_last_fy_2 = quarterly_calculation(nintendo_switch_oled_model_1)
nintendo_switch_hardware_2, nintendo_switch_hardware_last_fy_2 = quarterly_calculation(nintendo_switch_hardware_1)
nintendo_switch_software_2, nintendo_switch_software_last_fy_2 = quarterly_calculation(nintendo_switch_software_1)
mobile_ip_etc_income_2, mobile_ip_etc_income_last_fy_2 = quarterly_calculation(mobile_ip_etc_income_1)

for_loop_list = [nintendo_switch_original_model_2, nintendo_switch_original_model_last_fy_2, nintendo_switch_lite_2, nintendo_switch_lite_last_fy_2, nintendo_switch_oled_model_2, nintendo_switch_oled_model_last_fy_2, nintendo_switch_hardware_2, nintendo_switch_hardware_last_fy_2, nintendo_switch_software_2, nintendo_switch_software_last_fy_2, mobile_ip_etc_income_2, mobile_ip_etc_income_last_fy_2]

def print_original():
    print(border_line[0])
    print("|" + header_1[0] + "|" + header_1[1] + "|" +  header_1[2] +  "|" + header_1[3]  + "|" + header_1[4] +  "|" + header_1[5] + "|")

    for i in range(current_quarter): # printing quarters
        if nintendo_switch_oled_model_1[i] != 0: # because of Switch OLED
            print(border_line[0])
            print("|"  +  row_1[i] +  "|" + nintendo_switch_original_model_2[i] + "|" + nintendo_switch_lite_2[i] + "|" + nintendo_switch_oled_model_2[i] +  "|" +  nintendo_switch_hardware_2[i] + "|" + nintendo_switch_software_2[i] + "|" )
        else:
            print(border_line[0])
            print("|"  +  row_1[i] +  "|" + nintendo_switch_original_model_2[i] + "|" + nintendo_switch_lite_2[i] + "|" + "           " +  "|" +  nintendo_switch_hardware_2[i] + "|" + nintendo_switch_software_2[i] + "|" )
        if nintendo_switch_oled_model_last_fy_1[i] != 0: # because of Switch OLED
            print("|"  +  row_1[i+7] +  "|" + nintendo_switch_original_model_last_fy_2[i] + "|" + nintendo_switch_lite_last_fy_2[i] + "|" + nintendo_switch_oled_model_last_fy_2[i] +  "|" +  nintendo_switch_hardware_last_fy_2[i] + "|" + nintendo_switch_software_last_fy_2[i] + "|" )
        else:
            print("|"  +  row_1[i+7] +  "|" + nintendo_switch_original_model_last_fy_2[i] + "|" + nintendo_switch_lite_last_fy_2[i] + "|" + "           " +  "|" +  nintendo_switch_hardware_last_fy_2[i] + "|" + nintendo_switch_software_last_fy_2[i] + "|" )
    else:
        print(border_line_double[0])
        if current_quarter >= 2 and nintendo_switch_oled_model_1[0] != 0 and nintendo_switch_oled_model_1[1] != 0: # because of Switch OLED, # printing first half
            print("|"  +  row_1[4] +  "|" + nintendo_switch_original_model_2[4] + "|" + nintendo_switch_lite_2[4] + "|" + nintendo_switch_oled_model_2[4] +  "|" +  nintendo_switch_hardware_2[4] + "|" + nintendo_switch_software_2[4] + "|" )
        else:
            print("|"  +  row_1[4] +  "|" + nintendo_switch_original_model_2[4] + "|" + nintendo_switch_lite_2[4] + "|" + "           " +  "|" +  nintendo_switch_hardware_2[4] + "|" + nintendo_switch_software_2[4] + "|" )
        if current_quarter >= 2 and nintendo_switch_oled_model_1[0] != 0 and nintendo_switch_oled_model_1[1] != 0: # because of Switch OLED 
            print("|"  +  row_1[11] +  "|" + nintendo_switch_original_model_last_fy_2[4] + "|" + nintendo_switch_lite_last_fy_2[4] + "|" + nintendo_switch_oled_model_last_fy_2[4] +  "|" +  nintendo_switch_hardware_last_fy_2[4] + "|" + nintendo_switch_software_last_fy_2[4] + "|" )
        else:
            print("|"  +  row_1[11] +  "|" + nintendo_switch_original_model_last_fy_2[4] + "|" + nintendo_switch_lite_last_fy_2[4] + "|" + "           " +  "|" +  nintendo_switch_hardware_last_fy_2[4] + "|" + nintendo_switch_software_last_fy_2[4] + "|" )
        print(border_line[0])
        if current_quarter >= 3 and nintendo_switch_oled_model_1[2] != 0: # because of Switch OLED, # printing first three quarters
            print("|"  +  row_1[5] +  "|" + nintendo_switch_original_model_2[5] + "|" + nintendo_switch_lite_2[5] + "|" + nintendo_switch_oled_model_2[5] +  "|" +  nintendo_switch_hardware_2[5] + "|" + nintendo_switch_software_2[5] + "|" )
        else:
            print("|"  +  row_1[5] +  "|" + nintendo_switch_original_model_2[5] + "|" + nintendo_switch_lite_2[5] + "|" + "           " +  "|" +  nintendo_switch_hardware_2[5] + "|" + nintendo_switch_software_2[5] + "|" )
        if current_quarter >= 3 and nintendo_switch_oled_model_last_fy_1[2] != 0: # because of Switch OLED
            print("|"  +  row_1[12] +  "|" + nintendo_switch_original_model_last_fy_2[5] + "|" + nintendo_switch_lite_last_fy_2[5] + "|" + nintendo_switch_oled_model_last_fy_2[5] +  "|" +  nintendo_switch_hardware_last_fy_2[5] + "|" + nintendo_switch_software_last_fy_2[5] + "|" )
        else:
            print("|"  +  row_1[12] +  "|" + nintendo_switch_original_model_last_fy_2[5] + "|" + nintendo_switch_lite_last_fy_2[5] + "|" + "           " +  "|" +  nintendo_switch_hardware_last_fy_2[5] + "|" + nintendo_switch_software_last_fy_2[5] + "|" )
        print(border_line[0])
        if nintendo_switch_oled_model_1[3] != 0: # because of Switch OLED, # printing fy cumulative
            print("|"  +  row_1[6] +  "|" + nintendo_switch_original_model_2[6] + "|" + nintendo_switch_lite_2[6] + "|" + nintendo_switch_oled_model_2[6] +  "|" +  nintendo_switch_hardware_2[6] + "|" + nintendo_switch_software_2[6] + "|" )
        else:
            print("|"  +  row_1[6] +  "|" + nintendo_switch_original_model_2[6] + "|" + nintendo_switch_lite_2[6] + "|" + "           " +  "|" +  nintendo_switch_hardware_2[6] + "|" + nintendo_switch_software_2[6] + "|" )
        if current_quarter >= 4 and nintendo_switch_oled_model_last_fy_1[4] != 0: # because of Switch OLED, # printing fy cumulative YoY%
            print("|"  +  row_1[13] +  "|" + nintendo_switch_original_model_last_fy_2[6] + "|" + nintendo_switch_lite_last_fy_2[6] + "|" + nintendo_switch_oled_model_last_fy_2[6] +  "|" +  nintendo_switch_hardware_last_fy_2[6] + "|" + nintendo_switch_software_last_fy_2[6] + "|" )
        elif current_quarter >= 4 and nintendo_switch_oled_model_last_fy_1[4] == 0:
            print("|"  +  row_1[13] +  "|" + nintendo_switch_original_model_last_fy_2[6] + "|" + nintendo_switch_lite_last_fy_2[6] + "|" + "           " +  "|" +  nintendo_switch_hardware_last_fy_2[6] + "|" + nintendo_switch_software_last_fy_2[6] + "|" )
        print(border_line[0])
        print("|"  +  row_1[14] +  "|" + nintendo_switch_original_model_2[7] + "|" + nintendo_switch_lite_2[7] + "|" + nintendo_switch_oled_model_2[7] +  "|" +  nintendo_switch_hardware_2[7] + "|" + nintendo_switch_software_2[7] + "|" ) # print ltd
        print(border_line[0])
        print("|"  +  row_1[15] +  "|                                  " + "|" + nintendo_switch_hardware_2[8] +  "|" +  nintendo_switch_software_2[8] + "|"    ) # current fiscal year forecast
        if nintendo_switch_hardware_1[7] and nintendo_switch_software_1[7] != 0: # 1st forecast revision
            print("|"  +  row_1[16] +  "|                                  " + "|" + nintendo_switch_hardware_2[10] +  "|" +  nintendo_switch_software_2[10] + "|"    )
        if nintendo_switch_hardware_1[8] and nintendo_switch_software_1[8] != 0: # 2nd forecast revision
            print("|"  +  row_1[17] +  "|                                  " + "|" + nintendo_switch_hardware_2[11] +  "|" +  nintendo_switch_software_2[11] + "|"    )
        if nintendo_switch_hardware_1[9] and nintendo_switch_software_1[9] != 0: # 3rd forecast revision
            print("|"  +  row_1[18] +  "|                                  " + "|" + nintendo_switch_hardware_2[12] +  "|" +  nintendo_switch_software_2[12] + "|"    )
        if current_quarter >=4: # next fiscal year forecast
            print(border_line[0])
            print("|"  +  row_1[19] +  "|                                  " + "|" + nintendo_switch_hardware_2[9] +  "|" +  nintendo_switch_software_2[9] + "|"    )
        print(border_line[0])
        print("(Software sales units include both packaged and downloadable versions of software.)")
        print(line_break_1)

    print(border_line[1]) # printing
    print("|" + header_1[6] + "|")
    for i in range(current_quarter): # printing quarters
            print(border_line[1]) 
            print("|"  +  row_1[i] +  "|" + mobile_ip_etc_income_2[i] + "|" )
            print("|"  + row_1[i+7] +   "|" + mobile_ip_etc_income_last_fy_2[i] + "|"   )
    else:
        print(border_line_double[1])
        if current_quarter >= 2: # printing first half
            print("|"  +  row_1[4] +  "|" + mobile_ip_etc_income_2[4] + "|" )
            print("|"  +  row_1[11] +  "|" + mobile_ip_etc_income_last_fy_2[4] + "|" )
            print(border_line[1])
        if current_quarter >= 3: # printing first three quarters
            print("|"  +  row_1[5] +  "|" + mobile_ip_etc_income_2[5] + "|" )
            print("|"  +  row_1[12] +  "|" + mobile_ip_etc_income_last_fy_2[5] + "|" )
            print(border_line[1])
        print("|"  +  row_1[6] +  "|" + mobile_ip_etc_income_2[6] + "|" ) # printing fy cumulative
        if current_quarter >= 4: # printing fy cumulative YoY%
            print("|"  +  row_1[13] +  "|" + mobile_ip_etc_income_last_fy_2[6] + "|" )
        print(border_line[1])
        print("(Includes income from smart-device content and royalty income.)")    

    return

def print_mobile():

    print(border_line[3])
    print("| Nintendo Switch   | FY3/2022 |")
    print(border_line[3])
    print("| Sales Units and Forecast     |")
    print(border_line[3])
    
    for i in range(0, 12, 2):
        if i == 10:
            print("+------------------------+")
            print("| Mobile, IP related     |----------+")
            print("| income, etc.           |    YoY%  |")
        elif i == 6 or i == 8:
            print("+-------------+")
            print("|" + header_1[i+2] + "|-------------------+")
            print("|" + header_1[16] + "|" + header_1[14] + "|" + header_1[15] + "|")
        elif i == 4:
            print(border_line[2])
            print("|" + header_1[i+2] + "|" + header_1[14] + "|")
        else:
            print(border_line[1])
            print("|" + header_1[i+2] + "|" + header_1[14] + "|" + header_1[15] + "|")
        for j in range(current_quarter): #for loop for quarters
            if nintendo_switch_oled_model_1[j] != 0 and i == 4:
                print(border_line[2])
                print("|"  +  row_1[j] +  "|" + for_loop_list[i][j] + "|")
            elif i != 4:
                if i == 10:
                    print(border_line[5])
                    print("|"  +  row_1[j] +  "|" + for_loop_list[i][j] + "|" + for_loop_list[i+1][j] + "|")
                else:
                    print(border_line[1])
                    print("|"  +  row_1[j] +  "|" + for_loop_list[i][j] + "|" + for_loop_list[i+1][j] + "|")
        if i == 4:
            print(border_line_double[2])
        elif i == 10:
            print(border_line_double[4])
        else:
            print(border_line_double[1])
        if current_quarter >= 2 and i != 4: # first half
            if i == 10:
                print("|"  + row_1[8] + "|" + for_loop_list[i][4] + "|" + for_loop_list[i+1][4] + "|")
                print(border_line[5])
            elif i != 4:
                print("|"  + row_1[8] + "|" + for_loop_list[i][4] + "|" + for_loop_list[i+1][4] + "|")
                print(border_line[1])
            else:
                print("|"  + row_1[8] +  "|" + for_loop_list[i][4] + "|")
                print(border_line[2])
        if current_quarter >= 3: # first three quarters
            if i == 10:
                print("|"  + row_1[9] + "|" + for_loop_list[i][5] + "|" + for_loop_list[i+1][5] + "|")
                print(border_line[5])
            elif i != 4:
                print("|"  + row_1[9] + "|" + for_loop_list[i][5] + "|" + for_loop_list[i+1][5] + "|")
                print(border_line[1])
            else:
                print("|"  + row_1[9] +  "|" + for_loop_list[i][5] + "|")
                print(border_line[2])
        if current_quarter <= 3 and i !=4:
            print("|"  + row_1[10] +  "|" + for_loop_list[i][6] + "|") # fy cumulative
        elif current_quarter >= 4 and i !=4: 
            print("|"  + row_1[10] + "|" + for_loop_list[i][6] + "|" + for_loop_list[i+1][6] + "|")
        if i == 4:
            print("|"  + row_1[10] +  "|" + for_loop_list[i][6] + "|") # fy cumulative
        if i == 4:
            print(border_line[2])
        elif i == 10:
            print(border_line[5])
        else:
            print(border_line[1])
        if i != 10:
            print("|"  + row_1[19] +  "|" + for_loop_list[i][7] + "|") # LTD
        if i == 6 or i == 8:
            print(border_line[4])
        elif i != 10:
            print(border_line[2])
        if i == 6 or i == 8:
            print("|"  +  row_1[14] +  "|" + for_loop_list[i][8] + "|") # print current forecast
        for j in range(3): # print forecast revisions
            if nintendo_switch_hardware_1[j+7] != 0 and i == 6 or nintendo_switch_software_1[j+7] != 0 and i == 8:    
                print("|"  +  row_1[j+15] +  "|" + for_loop_list[i][j+10] + "|")
        if current_quarter >=4 and i == 6 or current_quarter >=4 and i == 8: #next fiscal year's forecast
            print(border_line[4])
            print("|"  +  row_1[18] +  "|" + for_loop_list[i][9] + "|")
        if i == 6 or i == 8:
            print(border_line[4])
        if i == 8:
            print("(Software sales units include both ")
            print("packaged and downloadable versions") 
            print("of software.)")
        elif i == 10:
            print("(Includes income from smart-device") 
            print("content and royalty income.)")  
        print(line_break_1)

    return

if mobile_output != 1:
    print_original()
else: print_mobile()

# def switch_print (y, z, a, b, delta, ly, lz, la, lb, theta): # y: use Switch OG, z: use Switch Lite, a: use Switch OLED, b: use Switch Hardware, delta: use Switch Software, ly: last fy Switch OG, lz; last fy Switch Lite, la: last fy Switch OLED, lb: last fy Switch Hardware, theta: last fy Switch Software

#     y1, z1, a1, b1, delta1 = [y[0], y[1] - y[0], y[2] - y[1], y[3] - y[2]], [z[0], z[1] - z[0], z[2] - z[1], z[3] - z[2]], [a[0], a[1] - a[0], a[2] - a[1], a[3] - a[2]], [b[0], b[1] - b[0], b[2] - b[1], b[3] - b[2]], [delta[0], delta[1] - delta[0], delta[2] - delta[1], delta[3] - delta[2]] #quarterly calculation

#     y1.append(y1[0] + y1[1]), y1.append(y1[0] + y1[1] + y1[2]), y1.append(y1[0] + y1[1] + y1[2] + y1[3]), y1.append(y1[0] + y1[1] + y1[2] + y1[3] + y[4]) # adds [4] first half, [5] first three quarters, [6] fy cumulative, [7] LTD 
#     z1.append(z1[0] + z1[1]), z1.append(z1[0] + z1[1] + z1[2]), z1.append(z1[0] + z1[1] + z1[2] + z1[3]), z1.append(z1[0] + z1[1] + z1[2] + z1[3] + z[4]) # adds [4] first half, [5] first three quarters, [6] fy cumulative, [7] LTD
#     a1.append(a1[0] + a1[1]), a1.append(a1[0] + a1[1] + a1[2]), a1.append(a1[0] + a1[1] + a1[2] + a1[3]), a1.append(a1[0] + a1[1] + a1[2] + a1[3] + a[4]) # adds [4] first half, [5] first three quarters, [6] fy cumulative, [7] LTD 
#     b1.append(b1[0] + b1[1]), b1.append(b1[0] + b1[1] + b1[2]), b1.append(b1[0] + b1[1] + b1[2] + b1[3]), b1.append(b1[0] + b1[1] + b1[2] + b1[3] + b[4]), b1.append(b[5]),b1.append(b[7]), b1.append(b[8]), b1.append(b[9]), b1.append(b[6]) # adds [4] first half, [5] first three quarters, [6] fy cumulative, [7] LTD, [8] current fiscal year forecast, [9] 1st forecast revision, [10] 2nd forecast revision, [11] 3rd forecast revision, [12] next fiscal year forecast 
#     delta1.append(delta1[0] + delta1[1]), delta1.append(delta1[0] + delta1[1] + delta1[2]), delta1.append(delta1[0] + delta1[1] + delta1[2] + delta1[3]), delta1.append(delta1[0] + delta1[1] + delta1[2] + delta1[3] + delta[4]), delta1.append(delta[5]),delta1.append(delta[7]), delta1.append(delta[8]), delta1.append(delta[9]), delta1.append(delta[6])  # adds [4] first half, [5] first three quarters, [6] fy cumulative, [7] LTD, [8] current fiscal year forecast, [9] 1st forecast revision, [10] 2nd forecast revision, [11] 3rd forecast revision, [12] next fiscal year forecast 

#     y2, z2, a2, b2, delta2 = ['{:.2f}M '.format(elem) for elem in y1], ['{:.2f}M '.format(elem) for elem in z1], ['{:.2f}M '.format(elem) for elem in a1], ['{:.2f}M '.format(elem) for elem in b1], ['{:.2f}M '.format(elem) for elem in delta1] # format

#     y3, z3, a3, b3, delta3 = ['{0: >10}'.format(elem) for elem in y2], ['{0: >11}'.format(elem) for elem in z2], ['{0: >11}'.format(elem) for elem in a2], ['{0: >14}'.format(elem) for elem in b2], ['{0: >14}'.format(elem) for elem in delta2] # format width

#     ly1, lz1, la1, lb1, theta1 = [], [], [], [], [] # empty arrays for calculating YoY percentages, [0] 1st quarter, [1] 2nd quarter, [2] 3rd quarter, [3] 4th quarter, [4] 1st half, [5] first three quarters, [6] fy cumulative

#     for i in range (5): #for dealing with divide by zeros
#             if range (i) == range (0):
#                 for i in range (4):
#                     if ly[i] != 0: 
#                         ly1.append(((y1[i] / ly[i]) - 1) * 100)
#                     else: ly1.append(0)
#                 if ly[0] + ly[1] != 0:
#                             ly1.append((((y1[0] + y1[1]) / (ly[0] + ly[1])) - 1) * 100)
#                 else: ly1.append(0)
#                 if ly[0] + ly[1] + ly[2] != 0:
#                             ly1.append((((y1[0] + y1[1] + y1[2]) / (ly[0] + ly[1] + ly[2])) - 1) * 100)
#                 else: ly1.append(0)
#                 if ly[4] != 0:
#                             ly1.append(((y1[6] / ly[4]) - 1) * 100)
#                 else: ly1.append(0)
#             elif range (i) == range (1):
#                 for i in range (4):
#                     if lz[i] != 0: 
#                         lz1.append(((z1[i] / lz[i]) - 1) * 100)
#                     else: lz1.append(0)
#                 if lz[0] + lz[1] != 0:
#                             lz1.append((((z1[0] + z1[1]) / (lz[0] + lz[1])) - 1) * 100)
#                 else: lz1.append(0)
#                 if lz[0] + lz[1] + lz[2] != 0:
#                             lz1.append((((z1[0] + z1[1] + z1[2]) / (lz[0] + lz[1] + lz[2])) - 1) * 100)
#                 else: lz1.append(0)
#                 if lz[4] != 0:
#                             lz1.append(((z1[6] / lz[4]) - 1) * 100)
#                 else: lz1.append(0)
#             elif range (i) == range (2):
#                 for i in range (4):
#                     if la[i] != 0: 
#                         la1.append(((a1[i] / la[i]) - 1) * 100)
#                     else: la1.append(0)
#                 if la[0] + la[1] != 0:
#                             la1.append((((a1[0] + a1[1]) / (la[0] + la[1])) - 1) * 100)
#                 else: la1.append(0)
#                 if la[0] + la[1] + la[2] != 0:
#                             la1.append((((a1[0] + a1[1] + a1[2]) / (la[0] + la[1] + la[2])) - 1) * 100)
#                 else: la1.append(0)
#                 if la[4] != 0:
#                             la1.append(((a1[6] / la[4]) - 1) * 100)
#                 else: la1.append(0)
#             elif range (i) == range (3):
#                 for i in range (4):
#                     if lb[i] != 0: 
#                         lb1.append(((b1[i] / lb[i]) - 1) * 100)
#                     else: lb1.append(0)
#                 if lb[0] + lb[1] != 0:
#                             lb1.append((((b1[0] + b1[1]) / (lb[0] + lb[1])) - 1) * 100)
#                 else: lb1.append(0)
#                 if lb[0] + lb[1] + lb[2] != 0:
#                             lb1.append((((b1[0] + b1[1] + b1[2]) / (lb[0] + lb[1] + lb[2])) - 1) * 100)
#                 else: lb1.append(0)
#                 if lb[4] != 0:
#                             lb1.append(((b1[6] / lb[4]) - 1) * 100)
#                 else: lb1.append(0)
#             elif range (i) == range (4):
#                 for i in range (4):
#                     if theta[i] != 0: 
#                         theta1.append(((delta1[i] / theta[i]) - 1) * 100)
#                     else: theta1.append(0)
#                 if theta[0] + theta[1] != 0:
#                             theta1.append((((delta1[0] + delta1[1]) / (theta[0] + theta[1])) - 1) * 100)
#                 else: theta1.append(0)
#                 if theta[0] + theta[1] + theta[2] != 0:
#                             theta1.append((((delta1[0] + delta1[1] + delta1[2]) / (theta[0] + theta[1] + theta[2])) - 1) * 100)
#                 else: theta1.append(0)
#                 if theta[4] != 0:
#                             theta1.append(((delta1[6] / theta[4]) - 1) * 100)
#                 else: theta1.append(0)

#     ly2, lz2, la2, lb2, theta2 = ['{:+.2f}% '.format(elem) for elem in ly1], ['{:+.2f}% '.format(elem) for elem in lz1], ['{:+.2f}% '.format(elem) for elem in la1], ['{:+.2f}% '.format(elem) for elem in lb1], ['{:+.2f}% '.format(elem) for elem in theta1] # format YoY percentages

#     ly3, lz3, la3, lb3, theta3 = ['{0: >10}'.format(elem) for elem in ly2], ['{0: >11}'.format(elem) for elem in lz2], ['{0: >11}'.format(elem) for elem in la2], ['{0: >14}'.format(elem) for elem in lb2], ['{0: >14}'.format(elem) for elem in theta2], # format width for YoY percentages

#     print("+------------------------------------------------------------------------------------+") # printing
#     print("|" + hd1[0] + "|" + hd1[1] + "|" +  hd1[2] +  "|" + hd1[3]  + "|" + hd1[4] +  "|" + hd1[5] + "|")

#     # print("+------------------------------------------------------------------------------------+") 
#     for i in range(x): # printing quarters
#         if a1[i] != 0: # because of Switch OLED
#             print("+------------------------------------------------------------------------------------+") 
#             print("|"  +  rw1[i] +  "|" + y3[i] + "|" + z3[i] + "|" + a3[i] +  "|" +  b3[i] + "|" + delta3[i] + "|" )
#         else:
#             print("+------------------------------------------------------------------------------------+") 
#             print("|"  +  rw1[i] +  "|" + y3[i] + "|" + z3[i] + "|" + "           " +  "|" +  b3[i] + "|" + delta3[i] + "|" )
#         if la1[i] != 0: # because of Switch OLED
#             print("|"  +  rw1[i+7] +  "|" + ly3[i] + "|" + lz3[i] + "|" + la3[i] +  "|" +  lb3[i] + "|" + theta3[i] + "|" )
#         else:
#             print("|"  +  rw1[i+7] +  "|" + ly3[i] + "|" + lz3[i] + "|" + "           " +  "|" +  lb3[i] + "|" + theta3[i] + "|" )
#     else:
#         print("+====================================================================================+") #border
#         if x >= 2 and a1[4] != 0: # because of Switch OLED, # printing first half
#             print("|"  +  rw1[4] +  "|" + y3[4] + "|" + z3[4] + "|" + a3[4] +  "|" +  b3[4] + "|" + delta3[4] + "|" )
#         else:
#             print("|"  +  rw1[4] +  "|" + y3[4] + "|" + z3[4] + "|" + "           " +  "|" +  b3[4] + "|" + delta3[4] + "|" )
#         if x >= 2 and la1[4] != 0: # because of Switch OLED 
#             print("|"  +  rw1[11] +  "|" + ly3[4] + "|" + lz3[4] + "|" + la3[4] +  "|" +  lb3[4] + "|" + theta3[4] + "|" )
#         else:
#             print("|"  +  rw1[11] +  "|" + ly3[4] + "|" + lz3[4] + "|" + "           " +  "|" +  lb3[4] + "|" + theta3[4] + "|" )
#         print("+------------------------------------------------------------------------------------+") #border
#         if x >= 3 and a1[5] != 0: # because of Switch OLED, # printing first three quarters
#             print("|"  +  rw1[5] +  "|" + y3[5] + "|" + z3[5] + "|" + a3[5] +  "|" +  b3[5] + "|" + delta3[5] + "|" )
#         else:
#             print("|"  +  rw1[5] +  "|" + y3[5] + "|" + z3[5] + "|" + "           " +  "|" +  b3[5] + "|" + delta3[5] + "|" )
#         if x >= 3 and la1[5] != 0: # because of Switch OLED
#             print("|"  +  rw1[12] +  "|" + ly3[5] + "|" + lz3[5] + "|" + la3[5] +  "|" +  lb3[5] + "|" + theta3[5] + "|" )
#         else:
#             print("|"  +  rw1[12] +  "|" + ly3[5] + "|" + lz3[5] + "|" + "           " +  "|" +  lb3[5] + "|" + theta3[5] + "|" )
#         print("+------------------------------------------------------------------------------------+") #border
#         if a1[6] != 0: # because of Switch OLED, # printing fy cumulative
#             print("|"  +  rw1[6] +  "|" + y3[6] + "|" + z3[6] + "|" + a3[6] +  "|" +  b3[6] + "|" + delta3[6] + "|" )
#         else:
#             print("|"  +  rw1[6] +  "|" + y3[6] + "|" + z3[6] + "|" + "           " +  "|" +  b3[6] + "|" + delta3[6] + "|" )
#         if x >= 4 and la1[6] != 0: # because of Switch OLED, # printing fy cumulative YoY%
#             print("|"  +  rw1[13] +  "|" + ly3[6] + "|" + lz3[6] + "|" + la3[6] +  "|" +  lb3[6] + "|" + theta3[6] + "|" )
#         else:
#             print("|"  +  rw1[13] +  "|" + ly3[6] + "|" + lz3[6] + "|" + "           " +  "|" +  lb3[6] + "|" + theta3[6] + "|" )
#         print("+------------------------------------------------------------------------------------+") #border
#         print("|"  +  rw1[14] +  "|" + y3[7] + "|" + z3[7] + "|" + a3[7] +  "|" +  b3[7] + "|" + delta3[7] + "|" ) # print ltd
#         print("+------------------------------------------------------------------------------------+") #border
#         print("|"  +  rw1[15] +  "|                                  " + "|" + b3[8] +  "|" +  delta3[8] + "|"    ) # current fiscal year forecast
#         if b1[9] and delta1[9] != 0: # 1st forecast revision
#             print("|"  +  rw1[16] +  "|                                  " + "|" + b3[9] +  "|" +  delta3[9] + "|"    )
#         if b1[10] and delta1[10] != 0: # 2nd forecast revision
#             print("|"  +  rw1[17] +  "|                                  " + "|" + b3[10] +  "|" +  delta3[10] + "|"    )
#         if b1[11] and delta1[11] != 0: # 3rd forecast revision
#             print("|"  +  rw1[18] +  "|                                  " + "|" + b3[11] +  "|" +  delta3[11] + "|"    )
#         if x >=4: # next fiscal year forecast
#             print("+------------------------------------------------------------------------------------+") #border
#             print("|"  +  rw1[19] +  "|                                  " + "|" + b3[12] +  "|" +  delta3[12] + "|"    )
#         print("+------------------------------------------------------------------------------------+") #border
#         print("(Software sales units include both packaged and downloadable versions of software.)")
#         print(linebreak)

#     return

# def mobile_ip_print (y, ly): # y: use Mobile, IP related income, etc., ly: last fy Mobile, IP related income, etc.

#     y1 = [y[0], y[1] - y[0], y[2] - y[1], y[3] - y[2]] #quarterly calculation

#     y1.append(y1[0] + y1[1]), y1.append(y1[0] + y1[1] + y1[2]), y1.append(y1[0] + y1[1] + y1[2] + y1[3]), # adds [4] first half, [5] first three quarters, [6] fy cumulative 

#     y2 = ['¥{:,}M '.format(elem) for elem in y1] # format

#     y3 = ['{0: >13}'.format(elem) for elem in y2] # format width

#     ly1 = [] # empty arrays for calculating YoY percentages, [0] 1st quarter, [1] 2nd quarter, [2] 3rd quarter, [3] 4th quarter, [4] 1st half, [5] first three quarters, [6] fy cumulative

#     for i in range (4): #for dealing with divide by zeros
#         if ly[i] != 0: 
#             ly1.append(((y1[i] / ly[i]) - 1) * 100)
#         else: ly1.append(0)
#     if ly[0] + ly[1] != 0:
#             ly1.append((((y1[0] + y1[1]) / (ly[0] + ly[1])) - 1) * 100)
#     else: ly1.append(0)
#     if ly[0] + ly[1] + ly[2] != 0:
#             ly1.append((((y1[0] + y1[1] + y1[2]) / (ly[0] + ly[1] + ly[2])) - 1) * 100)
#     else: ly1.append(0)
#     if ly[4] != 0:
#             ly1.append(((y1[6] / ly[4]) - 1) * 100)
#     else: ly1.append(0)

#     ly2 = ['{:+.2f}% '.format(elem) for elem in ly1] # format YoY percentages

#     ly3 = ['{0: >13}'.format(elem) for elem in ly2] # format width for YoY percentages

#     print("+---------------------------------+") # printing
#     print("|" + hd1[6] + "|")
#     for i in range(x): # printing quarters
#             print("+---------------------------------+") 
#             print("|"  +  rw1[i] +  "|" + y3[i] + "|" )
#             print("|"  + rw1[i+7] +   "|" + ly3[i] + "|"   )
#     else:
#         print("+=================================+")
#         if x >= 2: # printing first half
#             print("|"  +  rw1[4] +  "|" + y3[4] + "|" )
#             print("|"  +  rw1[11] +  "|" + ly3[4] + "|" )
#             print("+---------------------------------+")
#         if x >= 3: # printing first three quarters
#             print("|"  +  rw1[5] +  "|" + y3[5] + "|" )
#             print("|"  +  rw1[12] +  "|" + ly3[5] + "|" )
#             print("+---------------------------------+")
#         print("|"  +  rw1[6] +  "|" + y3[6] + "|" ) # printing fy cumulative
#         if x >= 4: # printing fy cumulative YoY%
#             print("|"  +  rw1[13] +  "|" + ly3[6] + "|" )
#         print("+---------------------------------+")
#         print("(Includes income from smart-device content and royalty income.)")    

#     return

# switch_print(nsw_og1, nsw_lite1, nsw_oled1, nsw_hw1, nsw_sw1, nsw_ogly1, nsw_litely1, nsw_oledly1, nsw_hwly1, nsw_swly1)
# mobile_ip_print(smp1, smply)

# Old code+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
#NSW OG model
# nsw_og1= [ 331 / 100, 645 / 100, 1179 / 100, 1179 / 100, 6989 / 100] # input cumulative figures, [0] is Q1, [1] Q2, [2] Q3, [3] Q4, [4] LTD at end of last fy
# #+++++++++++++++++++++++++++++
# nsw_og2 = [ nsw_og1[0], nsw_og1[1]  - nsw_og1[0], nsw_og1[2] - nsw_og1[1], nsw_og1[3] - nsw_og1[2]] #quarterly calculation 

# nsw_og3 = [ '{:.2f}M '.format(elem) for elem in nsw_og2 ] #format all integers to string to add  and M

# nsw_og4 = [ '{0: >10}'.format(elem) for elem in nsw_og3]
# #format width

# #fy + ltd + first half + first three quarters
# nsw_ogfyltd =  [nsw_og2[0] + nsw_og2[1] + nsw_og2[2] + nsw_og2[3] , nsw_og1[4] + nsw_og2[0] + nsw_og2[1] + nsw_og2[2] +nsw_og2[3], nsw_og2[0] + nsw_og2[1],  nsw_og2[0] + nsw_og2[1] + nsw_og2[2]] 
# #fiscal year cumulative, ltd, first half, first three quarters

# nsw_ogfyltd1 = [ '{:.2f}M '.format(elem) for elem in nsw_ogfyltd ] #format all integers to string to add  and M

# nsw_ogfyltd2 = [ '{0: >10}'.format(elem) for elem in nsw_ogfyltd1]
# #format width

# #last years numbers
# nsw_ogly1= [ 3.05, 5.31, 8.41, 3.55, 20.32 ] #Q1-4, fy.

# nsw_ogly2 = [ ((nsw_og2[0] / nsw_ogly1[0]) - 1) * 100, ((nsw_og2[1] / nsw_ogly1[1]) -1) *100, ((nsw_og2[2] / nsw_ogly1[2]) - 1) * 100,  ((nsw_og2[3] / nsw_ogly1[3]) - 1) * 100]

# nsw_ogly3 = [ '{:+.2f}% '.format(elem) for elem in nsw_ogly2 ] #format all integers to string to add  and M

# nsw_ogly4 = [ '{0: >10}'.format(elem) for elem in nsw_ogly3] #format width

# nsw_ogyoyfy1 = [  (((nsw_og2[0] + nsw_og2[1]) / (nsw_ogly1[0] + nsw_ogly1[1])) - 1) * 100, (((nsw_og2[0] + nsw_og2[1] + nsw_og2[2]) / (nsw_ogly1[0] + nsw_ogly1[1] + nsw_ogly1[2])) - 1) * 100, ((nsw_ogfyltd[0] / nsw_ogly1[4]) - 1) * 100] #Q2-4 fy cumulative

# nsw_ogyoyfy2 = [ '{:+.2f}% '.format(elem) for elem in nsw_ogyoyfy1 ] #format all integers to string to add  and M

# nsw_ogyoyfy3 = [ '{0: >10}'.format(elem) for elem in nsw_ogyoyfy2] #format width

# #NSW Lite
# nsw_lite1 = [ 114 / 100, 182 / 100, 317 / 100, 317 / 100, 1470 / 100]
# #Q1-4, LTD at end of last fy
# #+++++++++++++++++++++++++++++
# nsw_lite2 = [ nsw_lite1[0], nsw_lite1[1]  - nsw_lite1[0], nsw_lite1[2] - nsw_lite1[1], nsw_lite1[3] - nsw_lite1[2]] #quarterly calculation 

# nsw_lite3 = [ '{:.2f}M '.format(elem) for elem in nsw_lite2 ] #format all integers to string to add  and M

# nsw_lite4 = [ '{0: >11}'.format(elem) for elem in nsw_lite3]
# #format width

# #fy + ltd + first half + first three quarters
# nsw_litefyltd =  [ nsw_lite2[0] + nsw_lite2[1] + nsw_lite2[2] +nsw_lite2[3] , nsw_lite1[4] + nsw_lite2[0] + nsw_lite2[1] + nsw_lite2[2] +nsw_lite2[3], nsw_lite2[0] + nsw_lite2[1],  nsw_lite2[0] + nsw_lite2[1] + nsw_lite2[2] ] 
# #fiscal year cumulative, ltd,

# nsw_litefyltd1 = [ '{:.2f}M '.format(elem) for elem in nsw_litefyltd ] #format all integers to string to add  and M

# nsw_litefyltd2 = [ '{0: >11}'.format(elem) for elem in nsw_litefyltd1]
# #format width

# #last years numbers
# nsw_litely1= [ 2.62, 1.55, 3.16, 1.18, 8.51 ] #Q1-4, fy.

# nsw_litely2 = [ ((nsw_lite2[0] / nsw_litely1[0]) - 1) * 100, ((nsw_lite2[1] / nsw_litely1[1]) -1) *100, ((nsw_lite2[2] / nsw_litely1[2]) - 1) * 100,  ((nsw_lite2[3] / nsw_litely1[3]) - 1) * 100]

# nsw_litely3 = [ '{:+.2f}% '.format(elem) for elem in nsw_litely2 ] #format all integers to string to add  and M

# nsw_litely4 = [ '{0: >11}'.format(elem) for elem in nsw_litely3]
# #format width

# nsw_liteyoyfy1 = [  (((nsw_lite2[0] + nsw_lite2[1]) / (nsw_litely1[0] + nsw_litely1[1])) - 1) * 100, (((nsw_lite2[0] + nsw_lite2[1] + nsw_lite2[2]) / (nsw_litely1[0] + nsw_litely1[1] + nsw_litely1[2])) - 1) * 100, ((nsw_litefyltd[0] / nsw_litely1[4]) - 1) * 100] #Q2-4 fy cumulative

# nsw_liteyoyfy2 = [ '{:+.2f}% '.format(elem) for elem in nsw_liteyoyfy1 ] #format all integers to string to add  and M

# nsw_liteyoyfy3 = [ '{0: >11}'.format(elem) for elem in nsw_liteyoyfy2] #format width

# #NSW OLED
# nsw_oled1= [ 0 / 100, 0 / 100, 399 / 100, 399 / 100, 0 / 100]
# #Q1-4, LTD at end of last fy
# #+++++++++++++++++++++++++++++
# nsw_oled2 = [ nsw_oled1[0], nsw_oled1[1]  - nsw_oled1[0], nsw_oled1[2] - nsw_oled1[1], nsw_oled1[3] - nsw_oled1[2]] #quarterly calculation 

# nsw_oled3 = [ '{:.2f}M '.format(elem) for elem in nsw_oled2 ] #format all integers to string to add  and M

# nsw_oled4 = [ '{0: >11}'.format(elem) for elem in nsw_oled3]
# #format width

# #fy + ltd + first half + first three quarters
# nsw_oledfyltd =  [nsw_oled2[0] + nsw_oled2[1] + nsw_oled2[2] + nsw_oled2[3] , nsw_oled1[4] + nsw_oled2[0] + nsw_oled2[1] + nsw_oled2[2] +nsw_oled2[3], nsw_oled2[0] + nsw_oled2[1],  nsw_oled2[0] + nsw_oled2[1] + nsw_oled2[2]] 
# #fiscal year cumulative, ltd, first half, first three quarters

# nsw_oledfyltd1 = [ '{:.2f}M '.format(elem) for elem in nsw_oledfyltd ] #format all integers to string to add  and M

# nsw_oledfyltd2 = [ '{0: >11}'.format(elem) for elem in nsw_oledfyltd1]
# #format width

# #last years numbers
# nsw_oledly1= [ 3.05, 5.31, 8.41, 3.55, 20.32 ] #Q1-4, fy.

# nsw_oledly2 = [ ((nsw_oled2[0] / nsw_oledly1[0]) - 1) * 100, ((nsw_oled2[1] / nsw_oledly1[1]) -1) *100, ((nsw_oled2[2] / nsw_oledly1[2]) - 1) * 100,  ((nsw_oled2[3] / nsw_oledly1[3]) - 1) * 100]

# nsw_oledly3 = [ '{:+.2f}% '.format(elem) for elem in nsw_oledly2 ] #format all integers to string to add  and M

# nsw_oledly4 = [ '{0: >11}'.format(elem) for elem in nsw_oledly3] #format width

# nsw_oledyoyfy1 = [  (((nsw_oled2[0] + nsw_oled2[1]) / (nsw_oledly1[0] + nsw_oledly1[1])) - 1) * 100, (((nsw_oled2[0] + nsw_oled2[1] + nsw_oled2[2]) / (nsw_oledly1[0] + nsw_oledly1[1] + nsw_oledly1[2])) - 1) * 100, ((nsw_oledfyltd[0] / nsw_oledly1[4]) - 1) * 100] #Q2-4 fy cumulative

# nsw_oledyoyfy2 = [ '{:+.2f}% '.format(elem) for elem in nsw_oledyoyfy1 ] #format all integers to string to add  and M

# nsw_oledyoyfy3 = [ '{0: >11}'.format(elem) for elem in nsw_oledyoyfy2] #format width


# #NSW ALL Hardware
# nsw_hw1= [ 445 / 100, 828 / 100, 1895 / 100, 1895 / 100, 8459 / 100, 2550 / 100, 2550 / 100, 2400 / 100, 2300 / 100, 0] #input cumulative figures, [0] is Q1, [1] Q2, [2] Q3, [3] Q4, [4] LTD at end of last fy, [5] current fiscal year forecast, [6] next fiscal year forecast (you wouldn't expect to use this until Q4 results), [7] 1st forecast revision, [8] 2nd forecast revision, [9] 3rd forecast revision (unlikely but there just in case)
# #Q1-4, ltd at end of last fy, fyforecast1&2, + 3 revisions
# #+++++++++++++++++++++++++++++
# nsw_hw2 = [ nsw_hw1[0], nsw_hw1[1]  - nsw_hw1[0], nsw_hw1[2] - nsw_hw1[1], nsw_hw1[3] - nsw_hw1[2], nsw_hw1[5], nsw_hw1[6], nsw_hw1[7], nsw_hw1[8], nsw_hw1[9] ]  #quarterly calculation + fiscal year cumulative at end, ltd,

# nsw_hw3 = [ '{:.2f}M '.format(elem) for elem in nsw_hw2 ] #format all integers to string to add  and M

# nsw_hw4 = [ '{0: >14}'.format(elem) for elem in nsw_hw3]
# #format width

# #fy + ltd + first half + first three quarters
# nsw_hwfyltd = [ nsw_hw2[0] + nsw_hw2[1] + nsw_hw2[2] +nsw_hw2[3] , nsw_hw1[4] + nsw_hw2[0] + nsw_hw2[1] + nsw_hw2[2] +nsw_hw2[3], nsw_hw2[0] + nsw_hw2[1],  nsw_hw2[0] + nsw_hw2[1] + nsw_hw2[2]  ]

# nsw_hwfyltd1 = [ '{:.2f}M '.format(elem) for elem in nsw_hwfyltd ] #format all integers to string to add  and M

# nsw_hwfyltd2 = [ '{0: >14}'.format(elem) for elem in nsw_hwfyltd1]
# #format width

# #last years numbers
# nsw_hwly1= [ 5.68, 6.85, 11.57, 4.73, 28.83 ] #Q1-4, fy.

# nsw_hwly2 = [ ((nsw_hw2[0] / nsw_hwly1[0]) - 1) * 100, ((nsw_hw2[1] / nsw_hwly1[1]) -1) *100, ((nsw_hw2[2] / nsw_hwly1[2]) - 1) * 100,  ((nsw_hw2[3] / nsw_hwly1[3]) - 1) * 100]

# nsw_hwly3 = [ '{:+.2f}% '.format(elem) for elem in nsw_hwly2 ] #format all integers to string to add  and M

# nsw_hwly4 = [ '{0: >14}'.format(elem) for elem in nsw_hwly3]
# #format width

# nsw_hwyoyfy1 = [  (((nsw_hw2[0] + nsw_hw2[1]) / (nsw_hwly1[0] + nsw_hwly1[1])) - 1) * 100, (((nsw_hw2[0] + nsw_hw2[1] + nsw_hw2[2]) / (nsw_hwly1[0] + nsw_hwly1[1] + nsw_hwly1[2])) - 1) * 100, ((nsw_hwfyltd[0] / nsw_hwly1[4]) - 1) * 100] #Q2-4 fy cumulative

# nsw_hwyoyfy2 = [ '{:+.2f}% '.format(elem) for elem in nsw_hwyoyfy1 ] #format all integers to string to add  and M

# nsw_hwyoyfy3 = [ '{0: >14}'.format(elem) for elem in nsw_hwyoyfy2] #format width

# #NSW Software
# nsw_sw1= [ 4529 / 100, 9389 / 100, 17929 / 100, 17929 / 100, 58712 / 100, 19000 / 100, 20000 / 100, 20000 / 100, 22000 / 100, 0] #input cumulative figures, [0] is Q1, [1] Q2, [2] Q3, [3] Q4, [4] LTD at end of last fy, [5] current fiscal year forecast, [6] next fiscal year forecast (you wouldn't expect to use this until Q4 results), [7] 1st forecast revision, [8] 2nd forecast revision, [9] 3rd forecast revision (unlikely but there just in case)
# #Q1-4, ltd at end of last fy, fyforecast1&2
# #+++++++++++++++++++++++++++++
# nsw_sw2 = [ nsw_sw1[0], nsw_sw1[1]  - nsw_sw1[0], nsw_sw1[2] - nsw_sw1[1], nsw_sw1[3] - nsw_sw1[2],  nsw_sw1[5], nsw_sw1[6], nsw_sw1[7], nsw_sw1[8], nsw_sw1[9]] #quarterly calculation + fiscal year cumulative at end, ltd,

# nsw_sw3 = [ '{:.2f}M '.format(elem) for elem in nsw_sw2 ] #format all integers to string to add  and M

# nsw_sw4 = [ '{0: >14}'.format(elem) for elem in nsw_sw3]
# #format width

# #fy + ltd + first half + first three quarters
# nsw_swfyltd = [nsw_sw2[0] + nsw_sw2[1] + nsw_sw2[2] +nsw_sw2[3] , nsw_sw1[4] + nsw_sw2[0] + nsw_sw2[1] + nsw_sw2[2] +nsw_sw2[3], nsw_sw2[0] + nsw_sw2[1],  nsw_sw2[0] + nsw_sw2[1] + nsw_sw2[2]]

# nsw_swfyltd1 = [ '{:.2f}M '.format(elem) for elem in nsw_swfyltd ] #format all integers to string to add  and M

# nsw_swfyltd2 = [ '{0: >14}'.format(elem) for elem in nsw_swfyltd1]
# #format width

# #last years numbers
# nsw_swly1= [ 50.43, 49.82, 75.85, 54.78, 230.88 ] #Q1-4, fy.

# nsw_swly2 = [ ((nsw_sw2[0] / nsw_swly1[0]) - 1) * 100, ((nsw_sw2[1] / nsw_swly1[1]) -1) *100, ((nsw_sw2[2] / nsw_swly1[2]) - 1) * 100,  ((nsw_sw2[3] / nsw_swly1[3]) - 1) * 100]

# nsw_swly3 = [ '{:+.2f}% '.format(elem) for elem in nsw_swly2 ] #format all integers to string to add  and M

# nsw_swly4 = [ '{0: >14}'.format(elem) for elem in nsw_swly3] #format width

# nsw_swyoyfy1 = [  (((nsw_sw2[0] + nsw_sw2[1]) / (nsw_swly1[0] + nsw_swly1[1])) - 1) * 100, (((nsw_sw2[0] + nsw_sw2[1] + nsw_sw2[2]) / (nsw_swly1[0] + nsw_swly1[1] + nsw_swly1[2])) - 1) * 100, ((nsw_swfyltd[0] / nsw_swly1[4]) - 1) * 100] #Q2-4 fy cumulative

# nsw_swyoyfy2 = [ '{:+.2f}% '.format(elem) for elem in nsw_swyoyfy1 ] #format all integers to string to add  and M

# nsw_swyoyfy3 = [ '{0: >14}'.format(elem) for elem in nsw_swyoyfy2] #format width

# #Smartphone sales
# smp1= [ 13199, 25501, 39825, 39825, 39825 ]

# smp2 = [ smp1[0], smp1[1]  - smp1[0], smp1[2] - smp1[1], smp1[3] - smp1[2]] #quarterly calculation

# smp3 = [ '¥{:,}M '.format(elem) for elem in smp2 ] #format all integers to string to add  and M

# smp4 = [ '{0: >13}'.format(elem) for elem in smp3]
# #format width

# smpfy = [smp2[0] + smp2[1] + smp2[2] +smp2[3], smp2[0] + smp2[1], smp2[0] + smp2[1] + smp2[2] ]  #+ fiscal year cumulative, first half, first 3 quarters

# smpfy1 = [ '¥{:,}M '.format(elem) for elem in smpfy ] #format all integers to string to add  and M

# smpfy2 = [ '{0: >13}'.format(elem) for elem in smpfy1] #format width

# #last years numbers
# smply= [ 13278, 13449, 15284, 15069, 57080 ] #Q1-4, fy.

# smply2 = [ ((smp2[0] / smply[0]) - 1) * 100, ((smp2[1] / smply[1]) -1) *100, ((smp2[2] / smply[2]) - 1) * 100,  ((smp2[3] / smply[3]) - 1) * 100]

# smply3 = [ '{:+.2f}% '.format(elem) for elem in smply2 ] #format all integers to string to add  and M

# smply4 = [ '{0: >13}'.format(elem) for elem in smply3] #format width

# smpyoyfy1 = [  (((smp2[0] + smp2[1]) / (smply[0] + smply[1])) - 1) * 100, (((smp2[0] + smp2[1] + smp2[2]) / (smply[0] + smply[1] + smply[2])) - 1) * 100, ((smpfy[0] / smply[4]) - 1) * 100] #Q2-4 fy cumulative

# smpyoyfy2 = [ '{:+.2f}% '.format(elem) for elem in smpyoyfy1 ] #format all integers to string to add  and M

# smpyoyfy3 = [ '{0: >13}'.format(elem) for elem in smpyoyfy2] #format width


# print("+------------------------------------------------------------------------------------+") #border
# print("|" + hd1[0] + "|" + hd1[1] + "|" +  hd1[2] +  "|" + hd1[6]  + "|" + hd1[3] +  "|" + hd1[4] + "|")
# print("+------------------------------------------------------------------------------------+") #border

# #print first quarter
# if x >= 1:
#     print("|"  +  rw1[0] +  "|" + nsw_og4[0] + "|" + nsw_lite4[0] + "|" + "           " + "|" + nsw_hw4[0] +  "|" + nsw_sw4[0] + "|"   )
#     print("|"  + " 1st Quarter YoY%  " +   "|" + nsw_ogly4[0] + "|" + nsw_litely4[0] +  "|" + "           " + "|" + nsw_hwly4[0] + "|" + nsw_swly4[0] + "|"   )
    
# #print second quarter
# if x >=2:
#     print("+------------------------------------------------------------------------------------+") #border
#     print("|"  +  rw1[1] +  "|" + nsw_og4[1] + "|" + nsw_lite4[1]  + "|" + "           " + "|" + nsw_hw4[1] +  "|" + nsw_sw4[1] + "|"   )
#     print("|"  + " 2nd Quarter YoY%  " +   "|" + nsw_ogly4[1] + "|" + nsw_litely4[1] +  "|" + "           " + "|" + nsw_hwly4[1] + "|" + nsw_swly4[1] + "|"   )

# #print third quarter
# if x >=3:
#     print("+------------------------------------------------------------------------------------+") #border
#     print("|"  +  rw1[2] +  "|" + nsw_og4[2] + "|" + nsw_lite4[2] + "|" + nsw_oled4[2] + "|" + nsw_hw4[2] +  "|" +  nsw_sw4[2] + "|"  )
#     print("|"  + " 3rd Quarter YoY%  " +   "|" + nsw_ogly4[2] + "|" + nsw_litely4[2] +  "|" +  "           " + "|" + nsw_hwly4[2] + "|" + nsw_swly4[2] + "|"   )

# #print fourth quarter
# if x >=4:
#     print("+------------------------------------------------------------------------------------+") #border
#     print("|"  +  rw1[3] +  "|" + nsw_og4[3] + "|" + nsw_lite4[3] +  "|" + nsw_oled4[3] + "|" + nsw_hw4[3] +  "|" +  nsw_sw4[3] + "|"    )
#     print("|"  + " 4th Quarter YoY%  " +   "|" + nsw_ogly4[3] + "|" + nsw_litely4[3] +  "|" +  "           " + "|" + nsw_hwly4[3] + "|" + nsw_swly4[3] + "|"   )

# print("+====================================================================================+") #border

# #print fy cumulative

# if x >= 2:
#     print("|"  +  " First Half        " +  "|" + nsw_ogfyltd2[2] + "|" + nsw_litefyltd2[2] + "|" +  "           " + "|" + nsw_hwfyltd2[2] +  "|" +  nsw_swfyltd2[2] + "|"    )   
#     print("|"  +  " First Half YoY%   " +  "|" + nsw_ogyoyfy3[0] + "|" + nsw_liteyoyfy3[0] + "|" +  "           " + "|" + nsw_hwyoyfy3[0] +  "|" +  nsw_swyoyfy3[0] + "|"    )
#     print("+------------------------------------------------------------------------------------+") #border
    
# if x >= 3:
#     print("|"  +  " First 3 Quarters  " +  "|" + nsw_ogfyltd2[3] + "|" + nsw_litefyltd2[3] + "|" +  nsw_oledfyltd2[3] + "|" + nsw_hwfyltd2[3] +  "|" +  nsw_swfyltd2[3] + "|"    )   
#     print("|"  +  " First 3 Qtrs YoY% " +  "|" + nsw_ogyoyfy3[1] + "|" + nsw_liteyoyfy3[1] + "|" +  "           " + "|" + nsw_hwyoyfy3[1] +  "|" +  nsw_swyoyfy3[1] + "|"    )
#     print("+------------------------------------------------------------------------------------+") #border
    
# print("|"  +  rw1[4] +  "|" + nsw_ogfyltd2[0] + "|" + nsw_litefyltd2[0] +  "|" + nsw_oledfyltd2[0] + "|" + nsw_hwfyltd2[0] +  "|" +  nsw_swfyltd2[0] + "|"    )    
# if x >= 4:
#     print("|"  +  rw1[8] +  "|" + nsw_ogyoyfy3[2] + "|" + nsw_liteyoyfy3[2] + "|"  + "           " + "|" + nsw_hwyoyfy3[2] +  "|" +  nsw_swyoyfy3[2] + "|"    )
    
# print("+------------------------------------------------------------------------------------+") #border

# #print ltd
# print("|"  +  rw1[5] +  "|" + nsw_ogfyltd2[1] + "|" + nsw_litefyltd2[1] + "|" + nsw_oledfyltd2[1] + "|" + nsw_hwfyltd2[1] +  "|" +  nsw_swfyltd2[1] + "|"    )

# #print forecasts
# print("+------------------------------------------------------------------------------------+") #border
# print("|"  +  rw1[6] +  "|                                  " + "|" + nsw_hw4[4] +  "|" +  nsw_sw4[4] + "|"    )

# if x >= 2 and nsw_hw2[6] != 0:
#     print("|"  +  " 1st FCST Revision " + "|                                  " + "|" + nsw_hw4[6] + "|" + nsw_sw4[6]  + "|")
    
# if x >= 3 and nsw_hw2[7] != 0:
#     print("|"  +  " 2nd FCST Revision " + "|                                  " + "|" +  nsw_hw4[7] + "|" + nsw_sw4[7]  + "|")
    
# if x >= 4 and nsw_hw2[8] != 0:
#     print("|"  +  " 3rd FCST Revision " + "|                                  " + "|" + nsw_hw4[8] + "|" + nsw_sw4[8]  + "|")

# if x >=4:
#     print("+------------------------------------------------------------------------------------+") #border
#     print("|"  +  rw1[7] +  "|                                  " + "|" + nsw_hw4[5] +  "|" +  nsw_sw4[5] + "|"    )
# print("+------------------------------------------------------------------------------------+") #border
# print("(Software sales units include both packaged and downloadable versions of software.)")
# print(lb1)

# print("+---------------------------------+") #border
# print("|" + hd1[5] + "|")
# print("+---------------------------------+") #border

# #print first quarter
# if x >= 1:
#     print("|"  +  rw1[0] +  "|" + smp4[0] + "|" )
#     print("|"  + " 1st Quarter YoY%  " +   "|" + smply4[0] + "|"   )

# #print second quarter
# if x >=2:
#     print("+---------------------------------+") #border
#     print("|"  +  rw1[1] +  "|" + smp4[1] + "|" )
#     print("|"  + " 2nd Quarter YoY%  " +   "|" + smply4[1] + "|"   )

# #print third quarter
# if x >=3:
#     print("+---------------------------------+") #border
#     print("|"  +  rw1[2] +  "|" + smp4[2] + "|"   )
#     print("|"  + " 3rd Quarter YoY%  " +   "|" + smply4[2] + "|"   )

# #print fourth quarter
# if x >=4:
#     print("+---------------------------------+") #border
#     print("|"  +  rw1[3] +  "|" + smp4[3] + "|" )
#     print("|"  + " 4th Quarter YoY%  " +   "|" + smply4[3] + "|"   )
    
# print("+=================================+")    

# if x >= 2:
#     print("|"  +  " First Half        " +  "|" + smpfy2[1] + "|"    )    
#     print("|"  +  " First Half YoY%   " +  "|" + smpyoyfy3[0] + "|"    )
#     print("+---------------------------------+") #border

    
# if x >= 3:
#     print("|"  +  " First 3 Quarters  " +  "|" + smpfy2[2] + "|"    )    
#     print("|"  +  " First 3 Qtrs YoY% " +  "|" + smpyoyfy3[1] + "|"    )
#     print("+---------------------------------+") #border


# #print fy cumulative
# print("|"  +  rw1[4] +  "|" + smpfy2[0] + "|"  )

# if x >= 4:
#     print("|"  +  rw1[8] +  "|" + smpyoyfy3[2] + "|" )

# print("+---------------------------------+") #border
# print("(Includes income from smart-device content and royalty income.)")