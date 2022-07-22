header_1 = [ " Nintendo Co., Ltd.", 0, " Net Sales " +" "*17, 0, " Operating Income " +" "*10, 0, " Operating Margin " +" "*5, 0, " Net Profit " +" "*16, 0, "    YoY% ", "FY3/2023 ", " Consolidated Operating Results   "]

row_1 = [" 1st Quarter ", " 2nd Quarter ",  " 3rd Quarter ",  " 4th Quarter ", " 1st Quarter YoY%  ", " 2nd Quarter YoY%  ", " 3rd Quarter YoY%  ", " 4th Quarter YoY%  ", " First Half  ", " 1st 3 Qtrs  ", " FY3/23 Cml. ", " First Half YoY%   ", " First 3 Qtrs YoY% ", " FY3/23 Cml. YoY%  ", " FY3/23 Forecast ", " FCST Revision 1 ", " FCST Revision 2 ", " FCST Revision 3 ", " FY3/24 Forecast ",   ] # row names, array length = 19

line_break_1 = "###" 

border_line = ["+" + "-"*78 + "+", "+" + "-"*38 + "+", "+" + "-"*32 + "+", "+" + "-"*23 + "+", "+" + "-"*27 + "+"]
border_line_double = ["+" + "-"*78 + "+", "+" + "="*38 + "+", "+" + "="*32 + "+", "+" + "="*23 + "+"]

current_quarter = 1 # Set to 1, 2, 3 or 4.

net_sales_1 = [ 
    # input cumulative figures:
    322647, # [0] Q1
    624272, # [1] Q2
    1320219, # [2] Q3
    1695344, # [3] Q4
    1600000, # [4] current fiscal year forecast
    0, # [5] next fiscal year forecast (you wouldn't expect to use this until Q4 results)
    0, # [6] 1st forecast revision
    0, # [7] 2nd forecast revision
    0 # [8] 3rd forecast revision (unlikely but there just in case)
    ]

net_sales_last_fy_1= [ 
    # input quarterly calculated figures:
    322647, # [0] last Q1
    301625, # [1] last Q2
    695947, # [2] last Q3
    375125, # [3] last Q4
    1695344 # [4] last fiscal year cumulative
    ]

operating_income_1 = [
    # input cumulative figures:
    119752, # [0] Q1
    219959, # [1] Q2
    472551, # [2] Q3
    592760, # [3] Q4
    500000, # [4] current fiscal year forecast
    0, # [5] next fiscal year forecast (you wouldn't expect to use this until Q4 results)
    0, # [6] 1st forecast revision
    0, # [7] 2nd forecast revision
    0 # [8] 3rd forecast revision (unlikely but there just in case)
    ]

operating_income_last_fy_1 = [ 
    # input quarterly calculated figures:
    119752, # [0] last Q1
    100207, # [1] last Q2
    252592, # [2] last Q3
    120209, # [3] last Q4
    592760 # [4] last fiscal year cumulative
    ]

net_income_1 = [ 
    # input cumulative figures
    92747, # [0] is Q1
    171834, # [1] Q2
    367387, # [2] Q3 
    477691, # [3] Q4
    340000, # [4] current fiscal year forecast
    0, # [5] next fiscal year forecast (you wouldn't expect to use this until Q4 results)
    0, # [6] 1st forecast revision
    0, # [7] 2nd forecast revision
    0 # [8] 3rd forecast revision (unlikely but there just in case)
    ]

net_income_last_fy_1= [ 
    # input quarterly calculated figures
    92747, # [0] last Q1
    79087, # [1] last Q2
    195553, # [2] last Q3
    110304, # [3] last Q4
    477691 # [4] last fiscal year cumulative
    ] # input quarterly calculated figures, [0] last Q1, [1] last Q2, [2] last Q3, [3] last Q4, [4] last fiscal year cumulative

net_sales_empty = []
operating_income_empty = []

def quarterly_calculation (y): # y: use net_sales_1, operating_income_1 or net_income_1.

    y1 =[]

    for i in range(current_quarter):
        if i != 0:
            y1.append(y[i] - y[i-1]) # [0] Q1, [1] Q2, [2] Q3, [3] Q4
        else: y1.append(y[i])
    else:
        while len(y1) < 4: y1.append(0) # To simplify inputs
    
    for i in range(5): 
        y1.append(y[i+4]) # [4] current fiscal year forecast, [5] next fiscal year forecast (you wouldn't expect to use this until Q4 results), [6] 1st forecast revision, [7] 2nd forecast revision, [8] 3rd forecast revision (unlikely but there just in case)

    def for_operating_margin(y1):
        return y1
    
    if not net_sales_empty or not operating_income_empty:
        return for_operating_margin(y1)

    def sum_a(x, i): #recursive function to get: fy first half y1[9], fy three quarters y1[10] fy cumulative y1[11]
        stop_function = [y1[0] + y1[1] + y1[2] + y1[3], 4]

        if x == y1[0] and i == 0: # Q1 alone is not needed
            i += 1
            return sum_a(x + y1[i], i)
        else:
            y1.append(x)
            i += 1
            if x == stop_function[0] and i == stop_function[1]:
                return
            else:
                return sum_a(x + y1[i], i)

    sum_a(y1[0], 0)

    if y == net_sales_1:
        return format_to_string_net_sales(y1), year_on_year_calculation(y1, net_sales_last_fy_1)
    elif y == operating_income_1:
        return format_to_string_operating_income(y1), year_on_year_calculation(y1, operating_income_last_fy_1)
    elif y == net_income_1:
        return format_to_string_net_income(y1), year_on_year_calculation(y1, net_income_last_fy_1)

def format_to_string_net_sales (y1):
    
    y2 = ['¥{:,}M '.format(elem) for elem in y1] #formats all integers to string to add ¥, M and commas
    
    y3 =  ['{0: >14}'.format(elem) for elem in y2] #format width

    return y3

def format_to_string_operating_income (y1):
    
    y2 = ['¥{:,}M '.format(elem) for elem in y1] #formats all integers to string to add ¥, M and commas
    
    y3 =  ['{0: >14}'.format(elem) for elem in y2] #format width

    return y3

def format_to_string_net_income (y1):
    
    y2 = ['¥{:,}M '.format(elem) for elem in y1] #formats all integers to string to add ¥, M and commas
    
    y3 =  ['{0: >14}'.format(elem) for elem in y2] #format width

    return y3

def year_on_year_calculation (y1, z): # z: use net_sales_last_fy_1, operating_income_last_fy_1 or net_income_last_fy_1.

    z1 = []

    for i in range(4):
        z1.append(((y1[i] / z[i]) - 1) * 100) # Calculates Year-on-Year percentages for each quarter, [0] is Q1, [1] Q2, [2] Q3, [3] Q4

    def sum_b(x, b, i): #recursive function to get: fy first half y1[4], fy three quarters y1[5] fy cumulative y1[6]
        stop_function = [y1[0] + y1[1] + y1[2] + y1[3], z[0] + z[1] + z[2] + z[3], 4]

        if x == y1[0] and b == z[0] and i == 0: # Q1 alone is not needed
            i += 1
            return sum_b(x + y1[i], b + z[i], i)
        else:
            z1.append(((x / b) - 1) * 100)
            i += 1
            if x == stop_function[0] and b == stop_function[1] and i == stop_function[2]:
                return
            else:
                return sum_b(x + y1[i], b + z[i], i)

    sum_b(y1[0], z[0], 0)

    if z == net_sales_last_fy_1:
        return format_to_string_year_on_year_net_sales(z1)
    elif z == operating_income_last_fy_1:
        return format_to_string_year_on_year_operating_income(z1)
    elif z == net_income_last_fy_1:
        return format_to_string_year_on_year_net_income (z1)

def format_to_string_year_on_year_net_sales (z1):
    
    z2 = ['{:+.2f}% '.format(elem) for elem in z1] #format all integers to string to add % and + when needed
    
    z3 = ['{0: >9}'.format(elem) for elem in z2] #format width

    return z3

def format_to_string_year_on_year_operating_income (z1):

    z2 = ['{:+.2f}% '.format(elem) for elem in z1 ] #format all integers to string to add % and + when needed
    
    z3 = ['{0: >9}'.format(elem) for elem in z2] #format width

    return z3

def format_to_string_year_on_year_net_income (z1):

    z2 = ['{:+.2f}% '.format(elem) for elem in z1] #format all integers to string to add % and + when needed
    
    z3 = ['{0: >9}'.format(elem) for elem in z2] #format width

    return z3

def operating_margin (a1, b1): # a = net_sales_1, b = operating_income_1

    d1 = []
    
    for i in range (4): 
        if a1[i] != 0:
            d1.append(((b1[i]) / (a1[i]))  * 100) # [0] to [3] quarterly figures
        else:  d1.append(0) # for dealing with divide by zeros

    for i in range(5):
        if b1[i+4] and a1[i+4] != 0:
            d1.append(((b1[i+4] / a1[i+4]) ) * 100) # [4] current fy forecast, [5] next fy forecast, [6] 1st forecast revision, [7] 2nd revision, [8] 3rd revision
        else: d1.append(0) # for dealing with divide by zeros

    def sum_c(x, y, i): #recursive function to get: fy first half y1[9], fy three quarters y1[10] fy cumulative y1[11]
        stop_function = [a1[0] + a1[1] + a1[2] + a1[3], b1[0] + b1[1] + b1[2] + b1[3], 4]

        if x == a1[0] and y == b1[0] and i == 0: # Q1 alone is not needed
            i += 1
            return sum_c(x + a1[i], y + b1[i], i)
        else:
            if x != 0:
                d1.append((y / x) * 100)
                i += 1
            else:
                d1.append(0) # for dealing with divide by zeros
                i += 1  

        if x == stop_function[0] and y == stop_function[1] and i == stop_function[2]:
            return
        else:
            return sum_c(x + a1[i], y + b1[i], i)

    sum_c(a1[0], b1[0], 0)

    return format_to_string_operating_margin(d1)

def format_to_string_operating_margin (d1):    

    d2 =  [ '{:.2f}% '.format(elem) for elem in d1 ] #format all integers to string to add %
    
    d3 =  [ '{0: >9}'.format(elem) for elem in d2] #format width

    return d3

net_sales_empty = quarterly_calculation(net_sales_1)
operating_income_empty = quarterly_calculation(operating_income_1)
operating_margin_1 = operating_margin(net_sales_empty, operating_income_empty)

net_sales_2, net_sales_last_fy_2 = quarterly_calculation(net_sales_1)
operating_income_2, operating_income_last_fy_2 = quarterly_calculation(operating_income_1)
net_income_2, net_income_last_fy_2 = quarterly_calculation(net_income_1)

for_loop_list = [net_sales_2, net_sales_last_fy_2, operating_income_2, operating_income_last_fy_2, operating_margin_1, "blank", net_income_2, net_income_last_fy_2]

def print_mobile():
    print("+" + "-"*34 + "+")
    print("|" + header_1[0] + " |" + " "*4 + header_1[11] + "|")
    print("+" + "-"*34 + "+")
    print("|" + header_1[12] + "|")
    print("+" + "-"*34 + "+")

    for i in range(0, 8, 2):
        if i !=4:
            print(border_line[1])
            print("|" + header_1[i+2] + "|" + header_1[10] + "|")
        else: # for operating margin
            print(border_line[3])
            print("|" + header_1[i+2] + "|")
        for j in range(current_quarter): #for loop for quarters
            if i !=4:
                print(border_line[1])
                print("|"  +  row_1[j] +  "|" + for_loop_list[i][j] + "|" + for_loop_list[i+1][j] + "|")
            else: # for operating margin
                print(border_line[3])
                print("|"  +  row_1[j] +   "|" + for_loop_list[i][j] + "|")
        if i != 4:
            print(border_line_double[1])
        else:
            print(border_line_double[3])
        if current_quarter >= 2: # first half
            if i != 4:
                print("|"  + row_1[8] +  "|" + for_loop_list[i][9] + "|" + for_loop_list[i+1][4] + "|")
                print(border_line[1])
            else: # for operating margin
                print("|"  + row_1[8] +  "|" + for_loop_list[i][9] + "|")
                print(border_line[3])
        if current_quarter >= 3: # first three quarters
            if i != 4:
                print("|"  + row_1[9] +  "|" + for_loop_list[i][10] + "|" + for_loop_list[i+1][5] + "|")
                print(border_line[1])
            else: # for operating margin
                print("|"  + row_1[9] +  "|" + for_loop_list[i][10] + "|")
                print(border_line[3])
        if current_quarter == 2 or current_quarter == 3 and i != 4:
            print("|"  + row_1[10] +  "|" + for_loop_list[i][11] + "|") # fy cumulative
        elif current_quarter == 4 and i != 4:
            print("|"  + row_1[10] +  "|" + for_loop_list[i][11] + "|" + for_loop_list[i+1][6] + "|") # fy cumulative
        if current_quarter >= 2 and i ==4: 
            print("|"  + row_1[10] +  "|" + for_loop_list[i][11] + "|") # fy cumulative
        if current_quarter <= 3 and i != 4:
            print(border_line[2])
        elif current_quarter == 4 and i != 4:
            print(border_line[1])
        else:
            print(border_line[4])
        print("|"  +  row_1[14] +  "|" + for_loop_list[i][4] + "|") # print current forecast
        for j in range(3): # print forecast revisions
            if net_sales_1[j+6] != 0:    
                print("|"  +  row_1[j+15] +  "|" + for_loop_list[i][j+6] + "|")
        if current_quarter >=4: #next fiscal year's forecast
            if i != 4:
                print(border_line[2])
            else:
                print(border_line[4])
            print("|"  +  row_1[18] +  "|" + for_loop_list[i][5] + "|")
        if i != 4:
            print(border_line[2])
        else:
            print(border_line[4])

        # print(line_break_1)
    
    print(line_break_1)


    return

print_mobile()
