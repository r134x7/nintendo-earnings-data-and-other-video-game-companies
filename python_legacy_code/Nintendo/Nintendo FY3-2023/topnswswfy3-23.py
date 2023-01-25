from operator import itemgetter

header_1 = [  " Switch - Top Selling Titles    ", " Units "] #header
row_1 = [" 1st Quarter " + " "*8, " 2nd Quarter "  + " "*8, " 3rd Quarter "  + " "*8, " 4th Quarter "  + " "*8, " FY3/23 Cumulative  "  + " "*1, " Life-To-Date "  + " "*7] # row names
line_break_1 = "###" # line break

border_line = ["+" + "-"*43 + "+", "+" + "-"*32 + "+"]
border_line_double = "+" + "="*32 + "+"

current_quarter = 1 # Set to 1, 2, 3 or 4.

#Switch software - Top selling titles

# Input the cumulative figure for each quarter
title_1 = [ 
    46.82, # [0] Q1
    38.74, # [1] Q2
    43.35, # [2] Q3
    45.33, # [3] Q4
    45.33, # [4] LTD figure at end of the last fiscal year
    " Mario Kart 8 Deluxe " # [5] name
    ] 

title_2 = [ 
    23.93, # [0] Q1
    21.95, # [1] Q2
    23.02, # [2] Q3
    23.50, # [3] Q4
    23.50, # [4] LTD figure at end of the last fiscal year
    " Super Mario Odyssey " # [5] name
    ] 

title_3 = [ 
    27.14, # [0] Q1 
    24.13, # [1] Q2 
    25.80, # [2] Q3 
    26.55, # [3] Q4 
    26.55, # [4] LTD figure at end of the last fiscal year 
    " The Legend of Zelda: Breath of the Wild "
    ] 

title_4 = [ 
    14.79, # [0] Q1 
    0, # [1] Q2 
    13.97, # [2] Q3
    14.65, # [3] Q4
    14.65, # [4] LTD figure at end of the last fiscal year
    " Pokémon Brilliant Diamond / Pokémon Shining Pearl "
    ] 

title_5 = [ 
    39.38, # [0] Q1 
    34.85, # [1] Q2 
    37.62, # [2] Q3
    38.64, # [3] Q4
    38.64, # [4] LTD figure at end of the last fiscal year
    " Animal Crossing: New Horizons  "
    ] 

title_6 = [ 
    24.50, # [0] Q1 
    22.64, # [1] Q2 
    23.90, # [2] Q3
    24.27, # [3] Q4
    24.27, # [4] LTD figure at end of the last fiscal year
    " Pokémon Sword / Pokémon Shield "
    ] 

title_7 = [ 
    14.66, # [0] Q1 
    13.83, # [1] Q2 
    14.33, # [2] Q3
    14.65, # [3] Q4
    14.65, # [4] LTD figure at end of the last fiscal year
    " Pokémon Let's Go Pikachu / Pokémon Let's Go Eevee "
    ] 

title_8 = [ 
    14.54, # [0] Q1 
    12.21, # [1] Q2 
    13.53, # [2] Q3
    14.09, # [3] Q4
    14.09, # [4] LTD figure at end of the last fiscal year
    " Ring Fit Adventure "
    ] 

title_9 = [ 
    18.06, # [0] Q1 
    16.48, # [1] Q2 
    17.39, # [2] Q3
    17.78, # [3] Q4
    17.78, # [4] LTD figure at end of the last fiscal year
    " Super Mario Party "
    ] 

title_10 = [ 
    28.82, # [0] Q1 
    25.71, # [1] Q2 
    27.40, # [2] Q3
    28.17, # [3] Q4
    28.17, # [4] LTD figure at end of the last fiscal year
    " Super Smash Bros. Ultimate "
    ] 

# title_11 = [ 
#     12.45, # [0] Q1 
#     12.68, # [1] Q2 
#     12.68, # [2] Q3
#     12.68, # [3] Q4
#     12.21, # [4] LTD figure at end of the last fiscal year
#     " Splatoon 2 "
#     ] 

for_loop_list_1 = [title_1, title_2, title_3, title_4, title_5, title_6, title_7, title_8, title_9, title_10] # put all the variables into an array

for_loop_list_2 = sorted(for_loop_list_1, reverse=True, key=itemgetter(3)) # sorts the variables in the array by index[3] (the fourth quarter number [3] always contains the biggest value) inside each variable, "reverse" sorts by descending order

for i in range (len(for_loop_list_2)): # for adding in ranks after sorting
    rank_1 = " Rank " + str(i+1) + " "
    rank_2 = '{0: >10}'.format(rank_1)
    for_loop_list_2[i].append(rank_2)

def quarterly_calculation (y):

    y1 = []
    z1 = y[6] # rank

    for i in range(current_quarter):
        if i != 0:
            y1.append(y[i] - y[i-1]) # [0] Q1, [1] Q2, [2] Q3, [3] Q4
        else: y1.append(y[i] - y[4])
    else:
        while len(y1) < 4: y1.append(0) # To simplify inputs

    y1.append(y1[0] + y1[1] + y1[2] + y1[3] ) # fy cumulative y1[4]
    y1.append(y[4] + y1[0] + y1[1] + y1[2] + y1[3]) # LTD y1[5]

    z2 = str.split(y[5]) # title
    
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
        line_join = line_join.join(first_line) + " "*(31-len(line_join.join(first_line))) + "|" + " "*10 + "|" + "\n" + "| " + line_join.join(second_line) + " "*(31-len(line_join.join(second_line)))
    else: line_join = line_join.join(first_line) + " "*(31-sum(first_line_check))          

    return format_to_string(y1, z1, line_join)

def format_to_string (y1, z1, line_join):
    y2 = ['{:.2f}M '.format(elem) for elem in y1]
    y3 = ['{0: >10}'.format(elem) for elem in y2]

    return to_print_1 (y3, z1, y1, line_join)

def to_print_1 (y3, z1, y1, line_join):

    print(border_line[0])
    print("| " + line_join + "|" + z1 + "|")
    print(border_line[0])
    for i in range(current_quarter):
        if y1[i] != 0:
            print("|"  +  row_1[i] +  "|" + y3[i] + "|"   )
    else:   #print fy cumulative
        print(border_line_double) 
        print("|"  +  row_1[4] +  "|" + y3[4] + "|"   )
                    #print ltd
        print("|"  +  row_1[5] +  "|" + y3[5] + "|"   )
        # print(border_line[1])

    return

# print header
print(border_line[1])
print("|" + header_1[0] + "|")
print(border_line[1])
print(border_line[1])
print("|" + header_1[1] + " "*25+ "|")
print(border_line[1])

for i in range (len(for_loop_list_2)):
    quarterly_calculation(for_loop_list_2[i])

print(border_line[1])
