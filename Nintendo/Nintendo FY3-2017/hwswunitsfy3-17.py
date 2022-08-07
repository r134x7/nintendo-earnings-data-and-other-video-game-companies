header_1 = [ " Switch (units)    ", 0, " Switch " + " "*5, 0, " Switch Lite ", 0, " Switch OLED ", 0, " Hardware    ", 0, " Software    ", 0, " Mobile, IP related income, etc.  ", 0, " "*2 + " Units ", "    YoY% ", " Total       ", ]

row_1 = [" 1st Quarter ", " 2nd Quarter ",  " 3rd Quarter ",  " 4th Quarter ", " 1st Quarter YoY%  ", " 2nd Quarter YoY%  ", " 3rd Quarter YoY%  ", " 4th Quarter YoY%  ", " First Half  ", " 1st 3 Qtrs  ", " FY3/23 Cml. ", " First Half YoY%   ", " First 3 Qtrs YoY% ", " FY3/23 Cml. YoY%  ", " FY3/23 Forecast ", " FCST Revision 1 ", " FCST Revision 2 ", " FCST Revision 3 ", " FY3/24 Forecast ", " Life-To-Date"] # row names, array length = 20

line_break_1 = "###" # line break

border_line = ["+" + "-"*84 + "+", "+" + "-"*33 + "+", "+" + "-"*23 + "+", "+" + "-"*30 + "+", "+" + "-"*27 + "+", "+" + "-"*35 + "+"]
border_line_double = ["+" + "-"*84 + "+", "+" + "="*33 + "+", "+" + "="*23 + "+", "+" + "="*30 + "+", "+" + "="*35 + "+"]

mobile_headers_rows = ["| Nintendo Switch   | FY3/2023 |", "| Sales Units and Forecast     |", "+------------------------+", "| Mobile, IP related     |----------+", "| income, etc.           |    YoY%  |", "+-------------+", "|-------------------+"]

footer = ["(Software sales units include both ", "packaged and downloadable versions", "of software.)", "(Includes income from smart-device", "content and royalty income.)"]

current_quarter = 4 # Set to 1, 2, 3 or 4.

nintendo_switch_original_model_1 = [
    # input cumulative figures
    0 / 100, # [0] Q1
    0 / 100, # [1] Q2
    0 / 100, # [2] Q3
    274 / 100, # [3] Q4
    0 / 100 # [4] LTD at end of last fy
    ]

nintendo_switch_original_model_last_fy_1 = [
    0, # [0] Q1
    0, # [1] Q2
    0, # [2] Q3
    0, # [3] Q4
    0 # [4] last fy cumulative
    ] 

nintendo_switch_lite_1 = [
    # input cumulative figures
    0 / 100, # [0] Q1
    0 / 100, # [1] Q2
    0 / 100, # [2] Q3
    0 / 100, # [3] Q4
    0 / 100 # [4] LTD at end of last fy
    ]

nintendo_switch_lite_last_fy_1 = [
    0, # [0] Q1 
    0, # [1] Q2
    0, # [2] Q3
    0, # [3] Q4
    0 # [4] last fy cumulative
    ]

nintendo_switch_oled_model_1 = [ 
    # input cumulative figures
    0 / 100, # [0] Q1
    0 / 100, # [1] Q2
    0 / 100, # [2] Q3
    0 / 100, # [3] Q4
    0 / 100 # [4] LTD at end of last fy
    ]

nintendo_switch_oled_model_last_fy_1 = [
    0, # [0] Q1
    0, # [1] Q2
    0, # [2] Q3
    0, # [3] Q4
    0 # [4] last fy cumulative
    ] 

nintendo_switch_hardware_1 = [
    # input cumulative figures
    0 / 100, # [0] Q1
    0 / 100, # [1] Q2
    0 / 100, # [2] Q3
    274 / 100, # [3] Q4
    0 / 100, # [4] LTD at end of last fy
    0 / 100, # [5] current fiscal year forecast
    1000 / 100, # [6] next fiscal year forecast (you wouldn't expect to use this until Q4 results) 
    0 / 100, # [7] 1st forecast revision
    0 / 100, # [8] 2nd forecast revision 
    0 # [9] 3rd forecast revision (unlikely but there just in case)
    ] 

nintendo_switch_hardware_last_fy_1 = [
    0, # [0] Q1
    0, # [1] Q2
    0, # [2] Q3
    0, # [3] Q4
    0 # [4] last fy cumulative
    ] 

nintendo_switch_software_1 = [
    # input cumulative figures
    0 / 100, # [0] Q1
    0 / 100, # [1] Q2
    0 / 100, # [2] Q3
    5.46 / 100, # [3] Q4
    0 / 100, # [4] LTD at end of last fy
    0 / 100, # [5] current fiscal year forecast
    3500 / 100, # [6] next fiscal year forecast (you wouldn't expect to use this until Q4 results) 
    0 / 100, # [7] 1st forecast revision
    0 / 100, # [8] 2nd forecast revision 
    0 # [9] 3rd forecast revision (unlikely but there just in case)
    ] 

nintendo_switch_software_last_fy_1 = [
    0, # [0] Q1
    0, # [1] Q2
    0, # [2] Q3
    0, # [3] Q4
    0 # [4] last fy cumulative
    ] 

mobile_ip_etc_income_1 = [
    # input cumulative figures
    1649, # [0] Q1
    3408, # [1] Q2
    10683, # [2] Q3
    24250 # [3] Q4
    ] 

mobile_ip_etc_income_last_fy_1 = [
    0, # [0] Q1 
    0, # [1] Q2
    0, # [2] Q3
    0, # [3] Q4
    0 # [4] last fy cumulative
    ] 

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
    
    y3 =  ['{0: >9}'.format(elem) for elem in y2] #format width

    return y3

def format_to_string_nintendo_switch_lite_or_oled (y1):

    y2 = ['{:.2f}M '.format(elem) for elem in y1] #formats all integers to string to add ¥, M and commas
    
    y3 =  ['{0: >9}'.format(elem) for elem in y2] #format width

    return y3

def format_to_string_nintendo_switch_hardware_or_software (y1):

    y2 = ['{:.2f}M '.format(elem) for elem in y1] #formats all integers to string to add ¥, M and commas
    
    y3 = ['{0: >9}'.format(elem) for elem in y2] #format width

    return y3

def format_to_string_mobile_ip_etc (y1):

    y2 = ['¥{:,}M '.format(elem) for elem in y1] #formats all integers to string to add ¥, M and commas
    
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
    
    z3 = ['{0: >9}'.format(elem) for elem in z2] #format width

    return z3

def format_to_string_year_on_year_nintendo_switch_lite_or_oled (z1):
    
    z2 = ['{:+.2f}% '.format(elem) for elem in z1] #format all integers to string to add % and + when needed
    
    z3 = ['{0: >9}'.format(elem) for elem in z2] #format width

    return z3

def format_to_string_year_on_year_nintendo_switch_hardware_or_software (z1):
    
    z2 = ['{:+.2f}% '.format(elem) for elem in z1] #format all integers to string to add % and + when needed
    z3 = ['{0: >9}'.format(elem) for elem in z2] #format width

    return z3

def format_to_string_year_on_year_mobile_ip_etc (z1):
    
    z2 = ['{:+.2f}% '.format(elem) for elem in z1] #format all integers to string to add % and + when needed
    
    z3 = ['{0: >10}'.format(elem) for elem in z2] #format width

    return z3

nintendo_switch_original_model_2, nintendo_switch_original_model_last_fy_2 = quarterly_calculation(nintendo_switch_original_model_1) # taking the output from quarterly_calculation and storing it into the two variables

nintendo_switch_lite_2, nintendo_switch_lite_last_fy_2 = quarterly_calculation(nintendo_switch_lite_1)

nintendo_switch_oled_model_2, nintendo_switch_oled_model_last_fy_2 = quarterly_calculation(nintendo_switch_oled_model_1)

nintendo_switch_hardware_2, nintendo_switch_hardware_last_fy_2 = quarterly_calculation(nintendo_switch_hardware_1)

nintendo_switch_software_2, nintendo_switch_software_last_fy_2 = quarterly_calculation(nintendo_switch_software_1)

mobile_ip_etc_income_2, mobile_ip_etc_income_last_fy_2 = quarterly_calculation(mobile_ip_etc_income_1)

for_loop_list = [
    nintendo_switch_original_model_2, 
    nintendo_switch_original_model_last_fy_2, 
    nintendo_switch_lite_2, 
    nintendo_switch_lite_last_fy_2, 
    nintendo_switch_oled_model_2, 
    nintendo_switch_oled_model_last_fy_2, 
    nintendo_switch_hardware_2, 
    nintendo_switch_hardware_last_fy_2, 
    nintendo_switch_software_2, 
    nintendo_switch_software_last_fy_2, 
    mobile_ip_etc_income_2, 
    mobile_ip_etc_income_last_fy_2
    ]

def print_mobile():

    print(border_line[3])
    print(mobile_headers_rows[0])
    print(border_line[3])
    print(mobile_headers_rows[1])
    print(border_line[3])
    
    for i in range(0, 12, 2):
        if i == 10:
            print(mobile_headers_rows[2])
            print(mobile_headers_rows[3])
            print(mobile_headers_rows[4])
        elif i == 6 or i == 8:
            print(mobile_headers_rows[5])
            print("|" + header_1[i+2] + mobile_headers_rows[6])
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
            if current_quarter == 4:
                print(border_line[5])
            else: print(mobile_headers_rows[2])
        else:
            if current_quarter == 4:
                print(border_line[1])
            else: print(border_line[2])
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
            print(footer[0])
            print(footer[1]) 
            print(footer[2])
        elif i == 10:
            print(footer[3]) 
            print(footer[4])  
        print(line_break_1)

    return

print_mobile()
