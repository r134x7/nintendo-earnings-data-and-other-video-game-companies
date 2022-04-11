header_1 = [ " Nintendo Co., Ltd.", " Net Sales   ", " Operating Income ", " Op. Margin ", " Net Profit "] #header names
row_1 = [" 1st Quarter       ", " 2nd Quarter       ",  " 3rd Quarter       ",  " 4th Quarter       ", " 1st Quarter YoY%  ", " 2nd Quarter YoY%  ", " 3rd Quarter YoY%  ", " 4th Quarter YoY%  ", " First Half        ", " First 3 Quarters  ", " FY3/22 Cumulative ", " First Half YoY%   ", " First 3 Qtrs YoY% ", " FY3/22 Cml. YoY%  ", " FY3/22 Forecast   ", " 1st FCST Revision ", " 2nd FCST Revision ", " 3rd FCST Revision ", " FY3/23 Forecast   ",   ] # row names, array length = 19
line_break_1 = "###" 

current_quarter = 3 # Set to 1, 2, 3 or 4.
mobile_output = 1 # 1 = on, 0 = off

if mobile_output != 0:
    header_1 = [ " Nintendo Co., Ltd.", 0, " Net Sales         ", 0, " Operating Income  ", 0, " Operating Margin  ", 0, " Net Profit        ", 0]

net_sales_1 = [ 322647, 624272, 1320219, 1320219, 1600000, 1600000, 1600000,  1650000, 0] #input cumulative figures, [0] is Q1, [1] Q2, [2] Q3, [3] Q4, [4] current fiscal year forecast, [5] next fiscal year forecast (you wouldn't expect to use this until Q4 results), [6] 1st forecast revision, [7] 2nd forecast revision, [8] 3rd forecast revision (unlikely but there just in case)

net_sales_last_fy_1= [ 358106, 411418, 634939, 354447, 1758910 ] # input quarterly calculated figures, [0] last Q1, [1] last Q2, [2] last Q3, [3] last Q4, [4] last fiscal year cumulative 

operating_income_1 = [ 119752, 219959, 472551, 472551, 500000, 520000, 520000,  560000, 0] #input cumulative figures, [0] is Q1, [1] Q2, [2] Q3, [3] Q4, [4] current fiscal year forecast, [5] next fiscal year forecast (you wouldn't expect to use this until Q4 results), [6] 1st forecast revision, [7] 2nd forecast revision, [8] 3rd forecast revision (unlikely but there just in case)

operating_income_last_fy_1= [ 144737, 146687, 229684, 119526, 640634] # input quarterly calculated figures, [0] last Q1, [1] last Q2, [2] last Q3, [3] last Q4, [4] last fiscal year cumulative 

net_income_1 = [ 92747, 171834, 367387, 367387, 340000, 350000,  350000,  400000, 0] #input cumulative figures, [0] is Q1, [1] Q2, [2] Q3, [3] Q4, [4] current fiscal year forecast, [5] next fiscal year forecast (you wouldn't expect to use this until Q4 results), [6] 1st forecast revision, [7] 2nd forecast revision, [8] 3rd forecast revision (unlikely but there just in case)

net_income_last_fy_1= [ 106482, 106641, 163542, 103711, 480376] # input quarterly calculated figures, [0] last Q1, [1] last Q2, [2] last Q3, [3] last Q4, [4] last fiscal year cumulative

net_sales_empty = []
operating_income_empty = []

def quarterly_calculation (y): # y: use net_sales_1, operating_income_1 or net_income_1.

    y1 =[]

    for i in range(4):
        if i != 0:
            y1.append(y[i] - y[i-1]) # [0] Q1, [1] Q2, [2] Q3, [3] Q4
        else: y1.append(y[i])
    
    for i in range(5): 
        y1.append(y[i+4]) # [4] current fiscal year forecast, [5] next fiscal year forecast (you wouldn't expect to use this until Q4 results), [6] 1st forecast revision, [7] 2nd forecast revision, [8] 3rd forecast revision (unlikely but there just in case)

    def for_operating_margin(y1):
        return y1
    
    if not net_sales_empty or not operating_income_empty:
        return for_operating_margin(y1)

    def sum_a(x, i): #recursive function to get: fy first half y1[9], fy three quarters y1[10] fy cumulative y1[11]
        stop_function = [y1[0] + y1[1] + y1[2] + y1[3], 4]

        if x == y1[0]: # Q1 alone is not needed
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
    if mobile_output == 0:
        y3 = ['{0: >13}'.format(elem) for elem in y2] #format width
    else:
        y3 =  ['{0: >18}'.format(elem) for elem in y2] #format width

    return y3

def format_to_string_operating_income (y1):

    y2 = ['¥{:,}M '.format(elem) for elem in y1] #formats all integers to string to add ¥, M and commas
    y3 =  ['{0: >18}'.format(elem) for elem in y2] #format width

    return y3

def format_to_string_net_income (y1):

    y2 = ['¥{:,}M '.format(elem) for elem in y1] #formats all integers to string to add ¥, M and commas
    if mobile_output == 0:
        y3 =  ['{0: >12}'.format(elem) for elem in y2] #format width
    else:
        y3 =  ['{0: >18}'.format(elem) for elem in y2] #format width

    return y3

def year_on_year_calculation (y1, z): # z: use net_sales_last_fy_1, operating_income_last_fy_1 or net_income_last_fy_1.

    z1 = []

    for i in range(4):
        z1.append(((y1[i] / z[i]) - 1) * 100) # Calculates Year-on-Year percentages for each quarter, [0] is Q1, [1] Q2, [2] Q3, [3] Q4

    def sum_b(x, b, i): #recursive function to get: fy first half y1[4], fy three quarters y1[5] fy cumulative y1[6]
        stop_function = [y1[0] + y1[1] + y1[2] + y1[3], z[0] + z[1] + z[2] + z[3], 4]

        if x == y1[0] and b == z[0]: # Q1 alone is not needed
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
    if mobile_output == 0:
        z3 = ['{0: >13}'.format(elem) for elem in z2] #format width
    else:
        z3 = ['{0: >18}'.format(elem) for elem in z2] #format width

    return z3

def format_to_string_year_on_year_operating_income (z1):

    z2 = ['{:+.2f}% '.format(elem) for elem in z1 ] #format all integers to string to add % and + when needed
    z3 = ['{0: >18}'.format(elem) for elem in z2] #format width

    return z3

def format_to_string_year_on_year_net_income (z1):

    z2 = ['{:+.2f}% '.format(elem) for elem in z1] #format all integers to string to add % and + when needed
    if mobile_output == 0:
        z3 = ['{0: >12}'.format(elem) for elem in z2] #format width
    else:
        z3 = ['{0: >18}'.format(elem) for elem in z2] #format width

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

        if x == a1[0] and y == b1[0]: # Q1 alone is not needed
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
    if mobile_output == 0:
        d3 =  [ '{0: >12}'.format(elem) for elem in d2] #format width
    else:
        d3 =  [ '{0: >18}'.format(elem) for elem in d2] #format width

    return d3

net_sales_empty = quarterly_calculation(net_sales_1)
operating_income_empty = quarterly_calculation(operating_income_1)
operating_margin_1 = operating_margin(net_sales_empty, operating_income_empty)

net_sales_2, net_sales_last_fy_2 = quarterly_calculation(net_sales_1)
operating_income_2, operating_income_last_fy_2 = quarterly_calculation(operating_income_1)
net_income_2, net_income_last_fy_2 = quarterly_calculation(net_income_1)

for_loop_list = [net_sales_2, net_sales_last_fy_2, operating_income_2, operating_income_last_fy_2, operating_margin_1, "blank", net_income_2, net_income_last_fy_2]

def print_desktop():

    print("+------------------------------------------------------------------------------+") # printing
    print("|" + header_1[0] + "|" + header_1[1] + "|" + header_1[2] + "|" + header_1[3] + "|" +  header_1[4] + "|")
    for i in range(current_quarter): #for loop for quarters
        print("+------------------------------------------------------------------------------+") #border
        print("|"  +  row_1[i] +  "|" + net_sales_2[i] + "|" + operating_income_2[i] + "|" + operating_margin_1[i] + "|" + net_income_2[i]+  "|" )
        print("|"  +  row_1[i+4] +   "|" + net_sales_last_fy_2[i] + "|" + operating_income_last_fy_2[i] +  "|" + "            " + "|" + net_income_last_fy_2[i] + "|"   )
    print("+==============================================================================+") #border
    if current_quarter >= 2: # first half
        print("|"  + row_1[8] +  "|" + net_sales_2[9] + "|" + operating_income_2[9] + "|" + operating_margin_1[9] + "|" + net_income_2[9] +  "|" )
        print("|"  + row_1[11] +   "|" + net_sales_last_fy_2[4] + "|" + operating_income_last_fy_2[4] + "|" + "            "  + "|" + net_income_last_fy_2[4] + "|"  )
        print("+------------------------------------------------------------------------------+")
    if current_quarter >= 3: # first three quarters
        print("|"  + row_1[9] +  "|" + net_sales_2[10] + "|" + operating_income_2[10] + "|" + operating_margin_1[10] + "|" + net_income_2[10] +  "|" )
        print("|"  + row_1[12] +   "|" + net_sales_last_fy_2[5] + "|" + operating_income_last_fy_2[5] + "|" + "            "  + "|" + net_income_last_fy_2[5] + "|"  )
        print("+------------------------------------------------------------------------------+")
    print("|"  +  row_1[10] +  "|" + net_sales_2[11] + "|" + operating_income_2[11] + "|" + operating_margin_1[11] + "|" + net_income_2[11] +  "|" ) # fy cumulative
    if current_quarter >= 4:
        print("|"  + row_1[13] +   "|" + net_sales_last_fy_2[6] + "|" + operating_income_last_fy_2[6] + "|" + "            "  + "|" + net_income_last_fy_2[6] + "|"  )
    print("+------------------------------------------------------------------------------+") #border
    print("|"  +  row_1[14] +  "|" + net_sales_2[4] + "|" + operating_income_2[4] + "|" + operating_margin_1[4] + "|" + net_income_2[4] + "|") # print current forecast
    for i in range(current_quarter): #print forecast revisions
        if net_sales_1[i+6] != 0:
            print("|"  +  row_1[i+15] +  "|" + net_sales_2[i+6] + "|" + operating_income_2[i+6] + "|" + operating_margin_1[i+6] + "|" + net_income_2[i+6] + "|")
    if current_quarter >=4: #next fiscal year's forecast
        print("+------------------------------------------------------------------------------+") #border
        print("|"  +  row_1[18] +  "|" + net_sales_2[5] + "|" + operating_income_2[5] + "|" + operating_margin_1[5] + "|" + net_income_2[5] + "|")
    print("+------------------------------------------------------------------------------+") #border

    return

def print_mobile():
    print("+--------------------------------------+")
    print("|" + header_1[0] + "|" + "                  " + "|")
    
    for i in range(0, 8, 2):
        print("+--------------------------------------+")
        print("|" + header_1[i+2] + "|" + "                  " + "|")
        for j in range(current_quarter): #for loop for quarters
            print("+--------------------------------------+")
            print("|"  +  row_1[j] +  "|" + for_loop_list[i][j] + "|")
            if i !=4:
                print("|"  +  row_1[j+4] +   "|" + for_loop_list[i+1][j] + "|")
        print("+======================================+")
        if current_quarter >= 2: # first half
            print("|"  + row_1[8] +  "|" + for_loop_list[i][9] + "|")
            if i != 4:
                print("|"  + row_1[11] +   "|" + for_loop_list[i+1][4] + "|")
            print("+--------------------------------------+")
        if current_quarter >= 3: # first three quarters
            print("|"  + row_1[9] +  "|" + for_loop_list[i][10] + "|")
            if i != 4:
                print("|"  + row_1[12] +   "|" + for_loop_list[i+1][5] + "|")
            print("+--------------------------------------+")
            print("|"  + row_1[10] +  "|" + for_loop_list[i][11] + "|")
        if current_quarter >= 4 and i !=4: # fy cumulative
            print("|"  + row_1[13] +   "|" + for_loop_list[i+1][6])
        print("+--------------------------------------+")
        print("|"  +  row_1[14] +  "|" + for_loop_list[i][4] + "|") # print current forecast
        for j in range(current_quarter): #print forecast revisions
            if net_sales_1[j+6] != 0:    
                print("|"  +  row_1[j+15] +  "|" + for_loop_list[i][j+6] + "|")
        if current_quarter >=4: #next fiscal year's forecast
            print("+--------------------------------------+")
            print("|"  +  row_1[18] +  "|" + for_loop_list[i][5] + "|")
        print("+--------------------------------------+")
        print(line_break_1)

    return

if mobile_output != 1:
    print_desktop()
else: print_mobile()

# discarded method involving how list indexes go to last index when i = -1
    # y1 =[]

    # for i in range (12):
        # y1.append(0) # creates an array of length 12, must use 0 integers

    # for i in range(4):
        # if i != 0:
            # y1[i] = y[i] - y[i-1] # [0] Q1, [1] Q2, [2] Q3, [3] Q4
        # else:
            # y1[i] = y[i]
    
    # for i in range(5): 
        # y1[i+4] = y[i+4] # [4] current fiscal year forecast, [5] next fiscal year forecast (you wouldn't expect to use this until Q4 results), [6] 1st forecast revision, [7] 2nd forecast revision, [8] 3rd forecast revision (unlikely but there just in case)

    # for i in range(3):
        # y1[i+9] = y1[i+1] + y1[i] + y1[i-1] + y1[i-2] # adds fy first half to array y1[9], fy three quarters to array y1[10], fy cumulative to array becomes y1[11]

# def convert (y, z): # y: use net_sales_1, operating_income_1 or net_income_1. z: use net_sales_last_fy_1, operating_income_last_fy_1 or net_income_last_fy_1. 

#     y1 = [y[0], y[1] - y[0], y[2] - y[1], y[3] - y[2], y[4], y[5], y[6], y[7], y[8]]  #creates new net sales array which has to calculate quarterly figures, [0] is Q1, [1] Q2, [2] Q3, [3] Q4, [4] current fiscal year forecast, [5] next fiscal year forecast (you wouldn't expect to use this until Q4 results), [6] 1st forecast revision, [7] 2nd forecast revision, [8] 3rd forecast revision (unlikely but there just in case)

#     y1.append(y1[0] + y1[1]) #adds fy first half to array y1[9]
#     y1.append(y1[0] + y1[1] + y1[2]) #adds fy three quarters to array y1[10]
#     y1.append(y1[0] + y1[1] + y1[2] +y1[3]) #adds fy cumulative to array becomes y1[11]

#     y2 = [ '¥{:,}M '.format(elem) for elem in y1] #formats all integers to string to add ¥ and M
#     if y == net_sales_1: #net sales
#         y3 = [ '{0: >13}'.format(elem) for elem in y2] #format width
#     elif y == operating_income_1: #operating income
#         y3 =  [ '{0: >18}'.format(elem) for elem in y2] #format width
#     elif y == net_income_1: #net profit       
#         y3 =  [ '{0: >12}'.format(elem) for elem in y2] #format width

#     z1 = [ ((y1[0] / z[0]) - 1) * 100, ((y1[1] / z[1]) -1) *100, ((y1[2] / z[2]) - 1) * 100,  ((y1[3] / z[3]) - 1) * 100] #Calculates Year-on-Year percentages for each quarter

#     z1.append((((y1[0] + y1[1]) / (z[0] + z[1])) - 1) * 100) #Calculates Year-on-Year percentages: fy first half, z1[4]
#     z1.append((((y1[0] + y1[1] + y1[2]) / (z[0] + z[1] + z[2])) - 1) * 100) #Calculates Year-on-Year percentages: fy 1st 3 quarters, z1[5]
#     z1.append(((y1[11] / z[4]) - 1) * 100) #Calculates Year-on-Year percentages: fiscal year cumulative, z1[6]

#     z2 = [ '{:+.2f}% '.format(elem) for elem in z1 ] #format all integers to string to add % and + when needed
#     if z == net_sales_last_fy_1: #last fiscal year's net sales
#         z3 = [ '{0: >13}'.format(elem) for elem in z2] #format width
#     elif z == operating_income_last_fy_1: #last fiscal year's operating profit
#         z3 = [ '{0: >18}'.format(elem) for elem in z2] #format width
#     elif z == net_income_last_fy_1: #last fiscal year's net profit
#         z3 = [ '{0: >12}'.format(elem) for elem in z2] #format width

#     return y3, z3

# def op_margin (a, b): # a = net_sales_1, b = operating_income_1

#     a1 = [a[0], a[1] - a[0], a[2] - a[1], a[3] - a[2], a[4], a[5], a[6], a[7], a[8]]  #creates new net sales array which has to calculate quarterly figures, [0] is Q1, [1] Q2, [2] Q3, [3] Q4, [4] current fiscal year forecast, [5] next fiscal year forecast (you wouldn't expect to use this until Q4 results), [6] 1st forecast revision, [7] 2nd forecast revision, [8] 3rd forecast revision (unlikely but there just in case)

#     b1 = [b[0], b[1] - b[0], b[2] - b[1], b[3] - b[2], b[4], b[5], b[6], b[7], b[8]]  #creates new operating income array which has to calculate quarterly figures, [0] is Q1, [1] Q2, [2] Q3, [3] Q4, [4] current fiscal year forecast, [5] next fiscal year forecast (you wouldn't expect to use this until Q4 results), [6] 1st forecast revision, [7] 2nd forecast revision, [8] 3rd forecast revision (unlikely but there just in case)

#     d1 = [] # # empty arrays for calculating operating margins, [0] 1st quarter, [1] 2nd quarter, [2] 3rd quarter, [3] 4th quarter, [4] 1st half, [5] first three quarters, [6] fy cumulative

#     for i in range (4): #for dealing with divide by zeros
#         if a1[i] != 0:
#             d1.append(((b1[i]) / (a1[i]))  * 100) # [0] to [3] quarterly figures
#         else:  d1.append(0)
#     if a1[0] + a1[1] != 0:
#         d1.append(((b1[0] + b1[1]) / (a1[0] + a1[1])) * 100) # [4] fy first half
#     else: d1.append(0)
#     if a1[0] + a1[1] + a1[2] != 0:
#         d1.append(((b1[0] + b1[1] + b1[2]) / (a1[0] + a1[1] + a1[2]) ) * 100) # [5] fy first three quarters
#     else: d1.append(0)
#     if a1[0] + a1[1] + a1[2] + a1[3] != 0:
#         d1.append(((b1[0] + b1[1] + b1[2] + b1[3]) / (a1[0] + a1[1] + a1[2] +a1[3]) ) * 100) # [6] fy cumulative
#     else: d1.append(0)
#     if b[4] and a[4] != 0:
#         d1.append(((b[4] / a[4]) ) * 100) # [7] current fy forecast
#     else: d1.append(0) 
#     if b[5] and a[5] != 0:
#         d1.append(((b[5] / a[5]) ) * 100) # [8] next fy forecast 
#     else: d1.append(0) 
#     if b[6] and a[6] != 0:
#         d1.append(((b[6] / a[6]) ) * 100) # [9] 1st forecast revision
#     else: d1.append(0) #[9] 1st forecast revision
#     if b[7] and a[7] != 0:
#         d1.append(((b[7] / a[7]) ) * 100) # [10] 2nd revision
#     else: d1.append(0) #[10] 2nd revision
#     if b[8] and a[8] != 0:
#         d1.append(((b[8] / a[8]) ) * 100) # [11] 3rd revision
#     else: d1.append(0) #[11] 3rd revision

#     d2 =  [ '{:.2f}% '.format(elem) for elem in d1 ] #format all integers to string to add %
#     d3 =  [ '{0: >12}'.format(elem) for elem in d2] #format width

#     return d3

# ns9,nsly9 = convert(net_sales_1, net_sales_last_fy_1)
# op9,oply9 = convert(operating_income_1, operating_income_last_fy_1)
# np9, nply9 = convert(net_income_1, net_income_last_fy_1)
# opmgx9 = op_margin(net_sales_1, operating_income_1)

# print("+------------------------------------------------------------------------------+") # printing
# print("|" + header_1[0] + "|" + header_1[1] + "|" + header_1[2] + "|" + header_1[3] + "|" +  header_1[4] + "|")
# for i in range(current_quarter): #for loop for quarters
#     print("+------------------------------------------------------------------------------+") #border
#     print("|"  +  row_1[i] +  "|" + ns9[i] + "|" + op9[i] + "|" + opmgx9[i] + "|" + np9[i]+  "|" )
#     print("|"  +  row_1[i+4] +   "|" + nsly9[i] + "|" + oply9[i] +  "|" + "            " + "|" + nply9[i] + "|"   )
# print("+==============================================================================+") #border
# if current_quarter >= 2: # first half
#     print("|"  + row_1[8] +  "|" + ns9[9] + "|" + op9[9] + "|" + opmgx9[4] + "|" + np9[9] +  "|" )
#     print("|"  + row_1[11] +   "|" + nsly9[4] + "|" + oply9[4] + "|" + "            "  + "|" + nply9[4] + "|"  )
#     print("+------------------------------------------------------------------------------+")
# if current_quarter >= 3: # first three quarters
#     print("|"  + row_1[9] +  "|" + ns9[10] + "|" + op9[10] + "|" + opmgx9[5] + "|" + np9[10] +  "|" )
#     print("|"  + row_1[12] +   "|" + nsly9[5] + "|" + oply9[5] + "|" + "            "  + "|" + nply9[5] + "|"  )
#     print("+------------------------------------------------------------------------------+")
# print("|"  +  row_1[10] +  "|" + ns9[11] + "|" + op9[11] + "|" + opmgx9[6] + "|" + np9[11] +  "|" ) # fy cumulative
# if current_quarter >= 4:
#     print("|"  + row_1[13] +   "|" + nsly9[6] + "|" + oply9[6] + "|" + "            "  + "|" + nply9[6] + "|"  )
# print("+------------------------------------------------------------------------------+") #border
# print("|"  +  row1[14] +  "|" + ns9[4] + "|" + op9[4] + "|" + opmgx9[7] + "|" + np9[4] + "|") # print current forecast
# for i in range(current_quarter): #print forecast revisions
#     if ns1[i+6] != 0:
#         print("|"  +  row1[i+15] +  "|" + ns9[i+6] + "|" + op9[i+6] + "|" + opmgx9[i+9] + "|" + np9[i+6] + "|")
# if current_quarter >=4: #next fiscal year's forecast
#     print("+------------------------------------------------------------------------------+") #border
#     print("|"  +  row1[18] +  "|" + ns9[5] + "|" + op9[5] + "|" + opmgx9[8] + "|" + np9[5] + "|")
# print("+------------------------------------------------------------------------------+") #border

###################################################################################################################
#old code
# ns2 = [ ns1[0], ns1[1]  - ns1[0], ns1[2] - ns1[1], ns1[3] - ns1[2], ns1[4], ns1[5], ns1[6], ns1[7], ns1[8]] #creates new net sales array which has to calculate quarterly figures

# ns3 = [ '¥{:,}M '.format(elem) for elem in ns2 ] #formats all integers to string to add ¥ and M
# ns4 = [ '{0: >13}'.format(elem) for elem in ns3] #format width
# #-----------------------------
# nsfy = [ ns2[0] + ns2[1] + ns2[2] +ns2[3], ns2[0] + ns2[1], ns2[0] + ns2[1] + ns2[2] ] #Net sales cumulative array, [0] fiscal year cumulative figure, [1] 1st half cumulative figure, [2] 1st 3 quarters cumulative figure

# nsfy1 = [ '¥{:,}M '.format(elem) for elem in nsfy ] #format all integers to string to add ¥ and M
# nsfy2 = [ '{0: >13}'.format(elem) for elem in nsfy1] #format width
# #-----------------------------

# # experiment - create function
# # this year's numbers 
# # def convert (y):
# #     # variables created inside a function are local and cannot be used outside a function
# #     y1 = [ y[0], y[1]  - y[0], y[2] - y[1], y[3] - y[2], y[4], y[5], y[6], y[7], y[8]]  #creates new net sales array which has to calculate quarterly figures

# #     y2 = [ '¥{:,}M '.format(elem) for elem in y1 ] #formats all integers to string to add ¥ and M
# #     if y == ns1:
# #         y3 = [ '{0: >13}'.format(elem) for elem in y2] #format width
# #     elif y == op1:
# #         y3 =  [ '{0: >18}'.format(elem) for elem in op3] #format width
# #     elif y == np1:        
# #         y3 =  [ '{0: >12}'.format(elem) for elem in np3] #format width

# #     return y3
# ### end

# #+++++++++++++++++++++++++++++ Input
# #Net sales array for last fiscal year's numbers
# nsly1= [ 358106, 411418, 634939, 354447, 1758910 ] #[0] last Q1, [1] last Q2, [2] last Q3, [3] last Q4, [4] last fiscal year cumulative 
# #-----------------------------
# nsly2 = [ ((ns2[0] / nsly1[0]) - 1) * 100, ((ns2[1] / nsly1[1]) -1) *100, ((ns2[2] / nsly1[2]) - 1) * 100,  ((ns2[3] / nsly1[3]) - 1) * 100] #Calculates Year-on-Year percentages for each quarter

# nsly3 = [ '{:+.2f}% '.format(elem) for elem in nsly2 ] #format all integers to string to add  and M
# nsly4 = [ '{0: >13}'.format(elem) for elem in nsly3] #format width
# #-----------------------------
# ns_yoyfy1 = [  (((ns2[0] + ns2[1]) / (nsly1[0] + nsly1[1])) - 1) * 100, (((ns2[0] + ns2[1] + ns2[2]) / (nsly1[0] + nsly1[1] + nsly1[2])) - 1) * 100, ((nsfy[0] / nsly1[4]) - 1) * 100] #Calculates Year-on-Year percentages for: [0] 1st half, [1] 1st 3 quarters, [2] fiscal year cumulative

# ns_yoyfy2 = [ '{:+.2f}% '.format(elem) for elem in ns_yoyfy1 ] #format all integers to string to add  and M
# ns_yoyfy3 = [ '{0: >13}'.format(elem) for elem in ns_yoyfy2] #format width
# #-----------------------------

# # next experiment - create function
# # def convertLastYear(z):
# #     z1 = [ ((ns2[0] / nsly1[0]) - 1) * 100, ((ns2[1] / nsly1[1]) -1) *100, ((ns2[2] / nsly1[2]) - 1) * 100,  ((ns2[3] / nsly1[3]) - 1) * 100] #Calculates Year-on-Year percentages for each quarter

# #     z2 = [ '{:+.2f}% '.format(elem) for elem in nsly2 ] #format all integers to string to add  and M
# #     z3 = [ '{0: >13}'.format(elem) for elem in z2] #format width


# ### end


# #+++++++++++++++++++++++++++++ Input
# #Operating Income (by quarter)
# op1 = [ 119752, 219959, 472551, 472551, 500000, 520000, 520000,  560000, 0  ] #input cumulative figures, [0] is Q1, [1] Q2, [2] Q3, [3] Q4, [4] current fiscal year forecast, [5] next fiscal year forecast (you wouldn't expect to use this until Q4 results), [6] 1st forecast revision, [7] 2nd forecast revision, [8] 3rd forecast revision (unlikely but there just in case)
# #-----------------------------
# op2 = [ op1[0], op1[1] - op1[0], op1[2] - op1[1], op1[3] - op1[2], op1[4], op1[5], op1[6], op1[7], op1[8]] #creates new operating income array which has to calculate quarterly figures

# op3 = [ '¥{:,}M '.format(elem) for elem in op2 ] #format all integers to string to add ¥ and M
# op4 =  [ '{0: >18}'.format(elem) for elem in op3] #format width
# #-----------------------------
# opfy = [op2[0] + op2[1] + op2[2] + op2[3], op2[0] + op2[1], op2[0] + op2[1] + op2[2] ] #Operating income cumulative array, [0] fiscal year cumulative figure, [1] 1st half cumulative figure, [2] 1st 3 quarters cumulative figure

# opfy1 = [ '¥{:,}M '.format(elem) for elem in opfy ] #format all integers to string to add ¥ and M
# opfy2 =  [ '{0: >18}'.format(elem) for elem in opfy1] #format width
# #-----------------------------



# # op9 = convert(op1)
# # print(op9)

# #+++++++++++++++++++++++++++++ Input
# #Operating income array for last fiscal year's numbers
# oply1= [ 144737, 146687, 229684, 119526, 640634 ] #[0] last Q1, [1] last Q2, [2] last Q3, [3] last Q4, [4] last fiscal year cumulative 
# #-----------------------------
# oply2 = [ ((op2[0] / oply1[0]) - 1) * 100, ((op2[1] / oply1[1]) -1) *100, ((op2[2] / oply1[2]) - 1) * 100,  ((op2[3] / oply1[3]) - 1) * 100]  #Calculates Year-on-Year percentages for each quarter

# oply3 = [ '{:+.2f}% '.format(elem) for elem in oply2 ] #format all integers to string to add  and M
# oply4 = [ '{0: >18}'.format(elem) for elem in oply3] #format width
# #-----------------------------
# op_yoyfy1 = [  (((op2[0] + op2[1]) / (oply1[0] + oply1[1])) - 1) * 100, (((op2[0] + op2[1] + op2[2]) / (oply1[0] + oply1[1] + oply1[2])) - 1) * 100, ((opfy[0] / oply1[4]) - 1) * 100] #Calculates Year-on-Year percentages for: [0] 1st half, [1] 1st 3 quarters, [2] fiscal year cumulative

# op_yoyfy2 = [ '{:+.2f}% '.format(elem) for elem in op_yoyfy1 ] #format all integers to string to add  and M
# op_yoyfy3 = [ '{0: >18}'.format(elem) for elem in op_yoyfy2] #format width
# #-----------------------------

# # opmgx = [((op2[0]) / (ns2[0]) ) * 100, ((op2[1]) / (ns2[1]) ) * 100, ((op2[2]) / (ns2[2]) ) * 100, ((op2[3]) / (ns2[3]) ) * 100, ((opfy[0] / nsfy[0]) ) * 100, ((op2[0] + op2[1]) / (ns2[0] + ns2[1]) ) * 100, ((op2[0] + op2[1] + op2[2]) / (ns2[0] + ns2[1] + ns2[2]) ) * 100, ((op1[4] / ns1[4]) ) * 100, ((op1[5] / ns1[5]) ) * 100, ((op1[6] / ns1[6]) ) * 100, ((op1[7] / ns1[7]) ) * 100, ((op1[8] / ns1[8]) ) * 100] #calculates operating margin: [0] 1st quarter, [1] 2nd quarter, [2] 3rd quarter, [3] 4th quarter, [4] fy cumulative, [5] fy first half, [6] fy first three quarters, [7] fy forecast, [8] next fy forecast, [9] 1st forecast revision, [10] 2nd revision, [11] 3rd revision 

# #Operating Margin
# #percentages
# if x >= 1: #1st quarter
#     op_mgx1 = ((op2[0]) / (ns2[0]) ) * 100
#     op_mgx1a =  '{:.2f}% '.format(op_mgx1) 
#     op_mgx1b =  '{0: >12}'.format(op_mgx1a)
# if x >= 2: #2nd quarter
#     op_mgx2 = ((op2[1]) / (ns2[1]) ) * 100
#     op_mgx2a =  '{:.2f}% '.format(op_mgx2) 
#     op_mgx2b =  '{0: >12}'.format(op_mgx2a)
# if x >= 3: #3rd quarter
#     op_mgx3 = ((op2[2]) / (ns2[2]) ) * 100
#     op_mgx3a =  '{:.2f}% '.format(op_mgx3) 
#     op_mgx3b =  '{0: >12}'.format(op_mgx3a)
# if x >=4 and ns2[3] != 0: #4th quarter
#     op_mgx4 = ((op2[3]) / (ns2[3]) ) * 100
#     op_mgx4a =  '{:.2f}% '.format(op_mgx4) 
#     op_mgx4b =  '{0: >12}'.format(op_mgx4a)
# else: 
#     op_mgx4b = '{0: >12}'.format("oops")

# if x>= 2: #1st half margin
#     op_mgx1half = ((op2[0] + op2[1]) / (ns2[0] + ns2[1]) ) * 100
#     op_mgx1half1 =  '{:.2f}% '.format(op_mgx1half) 
#     op_mgx1half2 =  '{0: >12}'.format(op_mgx1half1)
    
# if x>= 3: #1st 3 quarters margin
#     op_mgx1st3q = ((op2[0] + op2[1] + op2[2]) / (ns2[0] + ns2[1] + ns2[2]) ) * 100
#     op_mgx1st3qa =  '{:.2f}% '.format(op_mgx1st3q) 
#     op_mgx1st3qb =  '{0: >12}'.format(op_mgx1st3qa)
    
# op_mgxfy = ((opfy[0] / nsfy[0]) ) * 100 #fiscal year cumulative
# op_mgxfy1 =  '{:.2f}% '.format(op_mgxfy) 
# op_mgxfy2 =  '{0: >12}'.format(op_mgxfy1)
    
# op_mgxfyfc = ((op1[4] / ns1[4]) ) * 100 #fiscal year forecast
# op_mgxfyfc1 =  '{:.2f}% '.format(op_mgxfyfc) 
# op_mgxfyfc2 =  '{0: >12}'.format(op_mgxfyfc1)

# op_mgxfynextfc = ((op1[5] / ns1[5]) ) * 100 #next fiscal year forecast
# op_mgxfynextfc1 =  '{:.2f}% '.format(op_mgxfynextfc) 
# op_mgxfynextfc2 =  '{0: >12}'.format(op_mgxfynextfc1)

# if x >= 2 and ns1[6] != 0: #1st revision
#     op_mgxfyfcx1 = ((op1[6] / ns1[6]) ) * 100
#     op_mgxfyfcx1a =  '{:.2f}% '.format(op_mgxfyfcx1) 
#     op_mgxfyfcx1b =  '{0: >12}'.format(op_mgxfyfcx1a)
    
# if x >= 3 and ns1[7] != 0: #2nd revision
#     op_mgxfyfcx2 = ((op1[7] / ns1[7]) ) * 100
#     op_mgxfyfcx2a =  '{:.2f}% '.format(op_mgxfyfcx2) 
#     op_mgxfyfcx2b =  '{0: >12}'.format(op_mgxfyfcx2a)
    
# if x >= 4 and ns1[8] != 0: #3rd revision
#     op_mgxfyfcx3 = ((op1[8] / ns1[8]) ) * 100
#     op_mgxfyfcx3a =  '{:.2f}% '.format(op_mgxfyfcx3) 
#     op_mgxfyfcx3b =  '{0: >12}'.format(op_mgxfyfcx3a)

# # op_mgxfynextfc = ((op1[4] / ns1[4]) ) * 100 #I have to check this code, is probably not meant to be used
# # op_mgxfynextfc1 =  '{:.2f}% '.format(op_mgxfynextfc) 
# # op_mgxfynextfc2 =  '{0: >12}'.format(op_mgxfynextfc1)

# #+++++++++++++++++++++++++++++ Input
# #Net Income (by quarter)
# np1 = [ 92747, 171834, 367387, 367387, 340000, 350000,  350000,  400000, 0 ] #input cumulative figures, [0] is Q1, [1] Q2, [2] Q3, [3] Q4, [4] current fiscal year forecast, [5] next fiscal year forecast (you wouldn't expect to use this until Q4 results), [6] 1st forecast revision, [7] 2nd forecast revision, [8] 3rd forecast revision (unlikely but there just in case)
# #-----------------------------
# np2 = [ np1[0], np1[1] - np1[0], np1[2] - np1[1], np1[3] - np1[2],  np1[4], np1[5], np1[6], np1[7], np1[8]]

# np3 = [ '¥{:,}M '.format(elem) for elem in np2 ]
# np4 =  [ '{0: >12}'.format(elem) for elem in np3] #format width
# #-----------------------------
# npfy = [np2[0] + np2[1] + np2[2] + np2[3], np2[0] + np2[1], np2[0] + np2[1] + np2[2]]

# npfy1 = [ '¥{:,}M '.format(elem) for elem in npfy ]

# npfy2 =  [ '{0: >12}'.format(elem) for elem in npfy1] #format width
# #-----------------------------

# # np9 = convert(np1)
# # print(np9)

# #+++++++++++++++++++++++++++++ Input
# #last years numbers
# nply1= [ 106482, 106641, 163542, 103711, 480376 ] #Q1-4, fy.

# nply2 = [ ((np2[0] / nply1[0]) - 1) * 100, ((np2[1] / nply1[1]) -1) *100, ((np2[2] / nply1[2]) - 1) * 100,  ((np2[3] / nply1[3]) - 1) * 100]

# nply3 = [ '{:+.2f}% '.format(elem) for elem in nply2 ] #format all integers to string to add  and M
# nply4 = [ '{0: >12}'.format(elem) for elem in nply3] #format width

# np_yoyfy1 = [  (((np2[0] + np2[1]) / (nply1[0] + nply1[1])) - 1) * 100, (((np2[0] + np2[1] + np2[2]) / (nply1[0] + nply1[1] + nply1[2])) - 1) * 100, ((npfy[0] / nply1[4]) - 1) * 100] #Q2-4 fy cumulative

# np_yoyfy2 = [ '{:+.2f}% '.format(elem) for elem in np_yoyfy1 ] #format all integers to string to add  and M

# np_yoyfy3 = [ '{0: >12}'.format(elem) for elem in np_yoyfy2] #format width

# #printing
# print("+------------------------------------------------------------------------------+") #border
# print("|" + hd1[0] + "|" + hd1[1] + "|" + hd1[2] + "|" + " Op. Margin " + "|" +  hd1[3] + "|")

# #print first quarter
# if x >= 1:
#     print("+------------------------------------------------------------------------------+") #border
#     print("|"  +  rw1[0] +  "|" + ns4[0] + "|" + op4[0] + "|" + op_mgx1b + "|" + np4[0]+  "|" )
#     print("|"  + " 1st Quarter YoY%  " +   "|" + nsly4[0] + "|" + oply4[0] +  "|" + "            " + "|" + nply4[0] + "|"   )

# #print second quarter
# if x >=2:
#     print("+------------------------------------------------------------------------------+") #border
#     print("|"  +  rw1[1] +  "|" + ns4[1] + "|" + op4[1] + "|" + op_mgx2b + "|" + np4[1] +  "|" )
#     print("|"  + " 2nd Quarter YoY%  " +   "|" + nsly4[1] + "|" + oply4[1] +  "|" + "            " + "|" + nply4[1] + "|"  )

# #print third quarter
# if x >=3:
#     print("+------------------------------------------------------------------------------+") #border
#     print("|"  +  rw1[2] +  "|" + ns4[2] + "|" + op4[2] + "|" + op_mgx3b + "|" + np4[2] +  "|" )
#     print("|"  + " 3rd Quarter YoY%  " +   "|" + nsly4[2] + "|" + oply4[2] + "|" + "            "  + "|" + nply4[2] + "|" )

# #print fourth quarter
# if x >=4:
#     print("+------------------------------------------------------------------------------+") #border
#     print("|"  +  rw1[3] +  "|" + ns4[3] + "|" + op4[3] + "|" + op_mgx4b + "|" + np4[3] +  "|" )
#     print("|"  + " 4th Quarter YoY%  " +   "|" + nsly4[3] + "|" + oply4[3] + "|" + "            "  + "|" + nply4[3] + "|"   )

# print("+==============================================================================+") #border

# #print 1st half cumulative
# if x >= 2:
#     print("|"  +  " First Half        " +  "|" + nsfy2[1] + "|" + opfy2[1] + "|" + op_mgx1half2 + "|" + npfy2[1] +  "|" )
#     print("|"  + " First Half YoY%   " +   "|" + ns_yoyfy3[0] + "|" + op_yoyfy3[0] + "|" + "            "  + "|" + np_yoyfy3[0] + "|"  )
#     print("+------------------------------------------------------------------------------+")

# #print three quarters cumulative    
# if x >= 3:
#     print("|"  +  " First 3 Quarters  " +  "|" + nsfy2[2] + "|" + opfy2[2] + "|" + op_mgx1st3qb + "|" + npfy2[2] +  "|" )
#     print("|"  + " First 3 Qtrs YoY% " +   "|" + ns_yoyfy3[1] + "|" + op_yoyfy3[1] + "|" + "            "  + "|" + np_yoyfy3[1] + "|"  )
#     print("+------------------------------------------------------------------------------+")

# #print fy cumulative
# print("|"  +  rw1[10] +  "|" + nsfy2[0] + "|" + opfy2[0] + "|" + op_mgxfy2 + "|" + npfy2[0] +  "|" )
# if x >= 4:
#     print("|"  + rw1[13] +   "|" + ns_yoyfy3[2] + "|" + op_yoyfy3[2] + "|" + "            "  + "|" + np_yoyfy3[2] + "|"  )

# #print forecasts
# print("+------------------------------------------------------------------------------+") #border
# print("|"  +  rw1[14] +  "|" + ns4[4] + "|" + op4[4] + "|" + op_mgxfyfc2 + "|" + np4[4] + "|")

# #print 1st forecast revision
# if x >= 2 and ns1[6] != 0:
#     print("|"  +  " 1st FCST Revision " +  "|" + ns4[6] + "|" + op4[6] + "|" + op_mgxfyfcx1b + "|" + np4[6] + "|")

# #print 2nd forecast revision    
# if x >= 3 and ns1[7] != 0:
#     print("|"  +  " 2nd FCST Revision " +  "|" + ns4[7] + "|" + op4[7] + "|" + op_mgxfyfcx2b + "|" + np4[7] + "|")

# #print 3rd forecast revision    
# if x >= 4 and ns1[8] != 0:
#     print("|"  +  " 3rd FCST Revision " +  "|" + ns4[8] + "|" + op4[8] + "|" + op_mgxfyfcx3b + "|"+ np4[8] + "|")

# #print next fiscal year's forecast    
# if x >=4:
#     print("+------------------------------------------------------------------------------+") #border
#     print("|"  +  rw1[6] +  "|" + ns4[5] + "|" + op4[5] + "|" + op_mgxfynextfc2 + "|" + np4[5] + "|")
# print("+------------------------------------------------------------------------------+") #border