from operator import itemgetter

header_1 = [  " Switch - Top Selling Titles    ", " "*4 + " Units "] #header
row_1 = [" 1st Quarter " + " "*19, " 2nd Quarter "  + " "*19, " 3rd Quarter "  + " "*19, " 4th Quarter "  + " "*19, " FY3/22  Cumulative "  + " "*12, " Life-To-Date "  + " "*18] # row names
line_break_1 = "###" # line break

current_quarter = 3 # Set to 1, 2, 3 or 4.

border_line = border_line = "+" + "-"*44 + "+"
border_line_double = "+" + "="*44 + "+"

#Switch software - Top selling titles
title_1 = [ 37.08, 38.74, 43.35, 43.35, 35.39, " Mario Kart 8 Deluxe "] #Input the cumulative figure for each quarter, [0] is Quarter 1, [1] is Quarter 2, [2] is Quarter 3, [3] is Quarter 4, [4] is the LTD figure at end of the last fiscal year, [5] is the name of the title

title_2 = [ 21.40, 21.95, 23.02, 23.02, 20.83, " Super Mario Odyssey "] #Input the cumulative figure for each quarter, [0] is Quarter 1, [1] is Quarter 2, [2] is Quarter 3, [3] is Quarter 4, [4] is the LTD figure at end of the last fiscal year, [5] is the name of the title

title_3 = [ 23.20, 24.13, 25.80, 25.80, 22.28, " The Legend of Zelda: Breath of the Wild "] #Input the cumulative figure for each quarter, [0] is Quarter 1, [1] is Quarter 2, [2] is Quarter 3, [3] is Quarter 4, [4] is the LTD figure at end of the last fiscal year, [5] is the name of the title

title_4 = [ 12.45, 12.68, 12.68, 12.68, 12.21, " Splatoon 2 "] #Input the cumulative figure for each quarter, [0] is Quarter 1, [1] is Quarter 2, [2] is Quarter 3, [3] is Quarter 4, [4] is the LTD figure at end of the last fiscal year, [5] is the name of the title

title_5 = [ 33.89, 34.85, 37.62, 37.62, 32.63, " Animal Crossing: New Horizons  "] #Input the cumulative figure for each quarter, [0] is Quarter 1, [1] is Quarter 2, [2] is Quarter 3, [3] is Quarter 4, [4] is the LTD figure at end of the last fiscal year, [5] is the name of the title

title_6 = [ 21.85, 22.64, 23.90, 23.90, 21.10, " Pokémon Sword / Pokémon Shield "] #Input the cumulative figure for each quarter, [0] is Quarter 1, [1] is Quarter 2, [2] is Quarter 3, [3] is Quarter 4, [4] is the LTD figure at end of the last fiscal year, [5] is the name of the title

title_7 = [ 13.57, 13.83, 14.33, 14.33, 13.28, " Pokémon Let's Go Pikachu / Pokémon Let's Go Eevee "] #Input the cumulative figure for each quarter, [0] is Quarter 1, [1] is Quarter 2, [2] is Quarter 3, [3] is Quarter 4, [4] is the LTD figure at end of the last fiscal year, [5] is the name of the title

title_8 = [ 11.26, 12.21, 13.53, 13.53, 10.11, " Ring Fit Adventure "] #Input the cumulative figure for each quarter, [0] is Quarter 1, [1] is Quarter 2, [2] is Quarter 3, [3] is Quarter 4, [4] is the LTD figure at end of the last fiscal year, [5] is the name of the title

title_9 = [ 15.72, 16.48, 17.39, 17.39, 14.79, " Super Mario Party "] #Input the cumulative figure for each quarter, [0] is Quarter 1, [1] is Quarter 2, [2] is Quarter 3, [3] is Quarter 4, [4] is the LTD figure at end of the last fiscal year, [5] is the name of the title

title_10 = [ 24.77, 25.71, 27.40, 27.40, 23.84, " Super Smash Bros. Ultimate "] #Input the cumulative figure for each quarter, [0] is Quarter 1, [1] is Quarter 2, [2] is Quarter 3, [3] is Quarter 4, [4] is the LTD figure at end of the last fiscal year, [5] is the name of the title

title_11 = [ 0, 0, 13.97, 13.97, 0, " Pokémon Brilliant Diamond / Pokémon Shining Pearl "] #Input the cumulative figure for each quarter, [0] is Quarter 1, [1] is Quarter 2, [2] is Quarter 3, [3] is Quarter 4, [4] is the LTD figure at end of the last fiscal year, [5] is the name of the title

for_loop_list_1 = [title_1, title_2, title_3, title_4, title_5, title_6, title_7, title_8, title_9, title_10, title_11] # put all the variables into an array

for_loop_list_2 = sorted(for_loop_list_1, reverse=True, key=itemgetter(3)) # sorts the variables in the array by index[3] (the fourth quarter number [3] always contains the biggest value) inside each variable, "reverse" sorts by descending order

for i in range (len(for_loop_list_2)): # for adding in ranks after sorting
    rank_1 = " Rank " + str(i+1) + " "
    rank_2 = '{0: >11}'.format(rank_1)
    for_loop_list_2[i].append(rank_2)

def quarterly_calculation (y):

    y1 = []
    z1 = y[6] # rank

    for i in range(current_quarter):
        if i != 0:
            y1.append(y[i] - y[i-1]) # [0] Q1, [1] Q2, [2] Q3, [3] Q4
        else: y1.append(y[i])
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
        line_join = line_join.join(first_line) + " "*(31-len(line_join.join(first_line))) + "|" + " "*11 + "|" + "\n" + "| " + line_join.join(second_line) + " "*(31-len(line_join.join(second_line)))
    else: line_join = line_join.join(first_line) + " "*(31-sum(first_line_check))          

    return format_to_string(y1, z1, line_join)

def format_to_string (y1, z1, line_join):
    y2 = ['{:.2f}M '.format(elem) for elem in y1]
    y3 = ['{0: >11}'.format(elem) for elem in y2]

    return to_print_1 (y3, z1, y1, line_join)

def to_print_1 (y3, z1, y1, line_join):

    print("| " + line_join + "|" + z1 + "|")
    print(border_line)
    for i in range(current_quarter):
        if y1[i] != 0:
            print("|"  +  row_1[i] +  "|" + y3[i] + "|"   )
    else:   #print fy cumulative
        print(border_line_double) 
        print("|"  +  row_1[4] +  "|" + y3[4] + "|"   )
                    #print ltd
        print("|"  +  row_1[5] +  "|" + y3[5] + "|"   )
        print(border_line)

    return

# print header
print(border_line)
print("|" + header_1[0] + "|" + header_1[1] + "|")
print(border_line)

for i in range (len(for_loop_list_2)):
    quarterly_calculation(for_loop_list_2[i])

# def c_print (y): # y: use at1, bt1, etc
#     # variables created inside a function are local and cannot be used outside a function
#     y1 = [y[0] - y[4], y[1]  - y[0], y[2] - y[1], y[3] - y[2]] #quarterly calculation

#     y1.append(y1[0] + y1[1] + y1[2] + y1[3] ) #adds fy cumulative to array becomes y1[4]
#     y1.append(y[4] + y1[0] + y1[1] + y1[2] + y1[3]) #adds LTD becomes y1[5]

#     y2 = [ '{:.2f}M '.format(elem) for elem in y1] #formats all integers to string to add ¥ and M
#     y3 = [ '{0: >11}'.format(elem) for elem in y2] #format width

#     print("|" + y[5] + "|" + y[6] + "|")
#     print("+------------------------------------------------------+")
#     for i in range(x):
#         if y1[i] != 0:
#             print("|"  +  row_1[i] +  "|" + y3[i] + "|"   )
#     else:   #print fy cumulative
#         print("+======================================================+") #border
#         print("|"  +  row_1[4] +  "|" + y3[4] + "|"   )
#                     #print ltd
#         print("|"  +  row_1[5] +  "|" + y3[5] + "|"   )
#         print("+------------------------------------------------------+")

#     return

# Arrange the lines of code below (titles) from highest selling to lowest 
# c_print(at1) #Mario Kart 8 Deluxe
# c_print(et1) #Animal Crossing: New Horizons
# c_print(jt1) #Super Smash Bros. Ultimate
# c_print(ct1) #The Legend of Zelda: Breath of the Wild
# c_print(ft1) #Pokémon Sword/Pokémon Shield
# c_print(bt1) #Super Mario Odyssey
# c_print(it1) #Super Mario Party
# c_print(gt1) #Pokémon: Let's Go, Pikachu!/Pokémon: Let's Go, Eevee!
# c_print(kt1) #Pokémon Brilliant Diamond /Pokémon Shining Pearl
# c_print(ht1) #Ring Fit Adventure
# c_print(dt1) #Splatoon 2

# I get the ltd numbers, I sorted them, I need them paired with their 
# capture = []

# def to_sort (y): # y: use at1, bt1, etc
#     y1 = [y[0] - y[4], y[1]  - y[0], y[2] - y[1], y[3] - y[2]] #quarterly calculation
#     y1.append(y[4] + y1[0] + y1[1] + y1[2] + y1[3]) #adds LTD becomes y1[4]

#     return capture.append(y1[4] + tostring(y) )

# to_sort(at1), to_sort(bt1), to_sort(ct1), to_sort(dt1), to_sort(et1), to_sort(ft1), to_sort(gt1), to_sort(ht1), to_sort(it1) 

# print(capture)

# print(sorted(capture, reverse=True))

#Switch SW

#Mario Kart 8 Deluxe

# at1= [ 37.08, 38.74, 43.35, 43.35, 35.39, " Mario Kart 8 Deluxe                      "]
# #Q1-4, LTD at end of last fy
# #+++++++++++++++++++++++++++++
# at2 = [ at1[0] - at1[4], at1[1]  - at1[0], at1[2] - at1[1], at1[3] - at1[2]] #quarterly calculation

# at3 = [ '{:.2f}M '.format(elem) for elem in at2 ] #format all integers to string to add  and M

# at4 = [ '{0: >11}'.format(elem) for elem in at3]
# #format width

# atfyltd = [ at2[0] + at2[1] + at2[2] +at2[3] , at1[4] + at2[0] + at2[1] + at2[2] +at2[3] ]  # fiscal year cumulative at end, ltd

# atfyltd1 = [ '{:.2f}M '.format(elem) for elem in atfyltd ] #format all integers to string to add  and M

# atfyltd2 = [ '{0: >11}'.format(elem) for elem in atfyltd1]
# #format width

# # Super Mario Odyssey

# bt1= [ 21.40, 21.95, 23.02, 23.02, 20.83, " Super Mario Odyssey                      "]
# #Q1-4, LTD at end of last fy
# #+++++++++++++++++++++++++++++
# bt2 = [ bt1[0] - bt1[4], bt1[1]  - bt1[0], bt1[2] - bt1[1], bt1[3] - bt1[2]] #quarterly calculation 

# bt3 = [ '{:.2f}M '.format(elem) for elem in bt2 ] #format all integers to string to add  and M

# bt4 = [ '{0: >11}'.format(elem) for elem in bt3]
# #format width

# btfyltd = [ bt2[0] + bt2[1] + bt2[2] +bt2[3] ,  bt1[4] + bt2[0] + bt2[1] + bt2[2] +bt2[3] ] #fiscal year cumulative at end, ltd,

# btfyltd1 = [ '{:.2f}M '.format(elem) for elem in btfyltd ] #format all integers to string to add  and M

# btfyltd2 = [ '{0: >11}'.format(elem) for elem in btfyltd1]
# #format width

# #Breath of the Wild

# ct1= [ 23.20, 24.13, 25.80, 25.80, 22.28, " The Legend of Zelda: Breath of the Wild  "]
# #Q1-4, LTD at end of last fy
# #+++++++++++++++++++++++++++++
# ct2 = [ ct1[0] - ct1[4], ct1[1]  - ct1[0], ct1[2] - ct1[1], ct1[3] - ct1[2]] #quarterly calculation 

# ct3 = [ '{:.2f}M '.format(elem) for elem in ct2 ] #format all integers to string to add  and M

# ct4 = [ '{0: >11}'.format(elem) for elem in ct3]
# #format width

# ctfyltd =   [ct2[0] + ct2[1] + ct2[2] +ct2[3] , ct1[4] + ct2[0] + ct2[1] + ct2[2] +ct2[3] ] #fiscal year cumulative at end, ltd,

# ctfyltd1 = [ '{:.2f}M '.format(elem) for elem in ctfyltd ] #format all integers to string to add  and M

# ctfyltd2 = [ '{0: >11}'.format(elem) for elem in ctfyltd1] #format width

# #Splatoon 2

# dt1= [ 12.45, 12.68, 12.68, 12.68, 12.21, " Splatoon 2                               "]
# #Q1-4, LTD at end of last fy
# #+++++++++++++++++++++++++++++
# dt2 = [ dt1[0] - dt1[4] , dt1[1]  - dt1[0], dt1[2] - dt1[1], dt1[3] - dt1[2]] #quarterly calculation + 

# dt3 = [ '{:.2f}M '.format(elem) for elem in dt2 ] #format all integers to string to add  and M

# dt4 = [ '{0: >11}'.format(elem) for elem in dt3]
# #format width

# dtfyltd = [dt2[0] + dt2[1] + dt2[2] +dt2[3] , dt1[4] + dt2[0] + dt2[1] + dt2[2] +dt2[3] ] #fiscal year cumulative at end, ltd,

# dtfyltd1 = [ '{:.2f}M '.format(elem) for elem in dtfyltd ] #format all integers to string to add  and M

# dtfyltd2 = [ '{0: >11}'.format(elem) for elem in dtfyltd1]
# #format width

# #animal crossing new horizons

# et1= [ 33.89, 34.85, 37.62, 37.62, 32.63, " Animal Crossing: New Horizons            "]
# #Q1-4, LTD at end of last fy
# #+++++++++++++++++++++++++++++
# et2 = [ et1[0]  - et1[4], et1[1]  - et1[0], et1[2] - et1[1], et1[3] - et1[2]] #quarterly calculation + 

# et3 = [ '{:.2f}M '.format(elem) for elem in et2 ] #format all integers to string to add  and M

# et4 = [ '{0: >11}'.format(elem) for elem in et3]
# #format width

# etfyltd = [et2[0] + et2[1] + et2[2] +et2[3] , et1[4] + et2[0] + et2[1] + et2[2] +et2[3] ] #fiscal year cumulative at end, ltd,

# etfyltd1 = [ '{:.2f}M '.format(elem) for elem in etfyltd ] #format all integers to string to add  and M

# etfyltd2 = [ '{0: >11}'.format(elem) for elem in etfyltd1]
# #format width


# #pokemon sword/shield

# ft1= [ 21.85, 22.64, 23.90, 23.90, 21.10, " Pokémon Sword/Shield                     "]
# #Q1-4, LTD at end of last fy
# #+++++++++++++++++++++++++++++
# ft2 = [ ft1[0]  - ft1[4] , ft1[1]  - ft1[0], ft1[2] - ft1[1], ft1[3] - ft1[2]] #quarterly calculation 

# ft3 = [ '{:.2f}M '.format(elem) for elem in ft2 ] #format all integers to string to add  and M

# ft4 = [ '{0: >11}'.format(elem) for elem in ft3]
# #format width

# ftfyltd = [ft2[0] + ft2[1] + ft2[2] +ft2[3] , ft1[4] + ft2[0] + ft2[1] + ft2[2] + ft2[3] ] #+ fiscal year cumulative at end, ltd,

# ftfyltd1 = [ '{:.2f}M '.format(elem) for elem in ftfyltd ] #format all integers to string to add  and M

# ftfyltd2 = [ '{0: >11}'.format(elem) for elem in ftfyltd1]
# #format width

# #pokemon lets go pikachu/eevee

# gt1= [ 13.57, 13.83, 14.33, 14.33, 13.28, " Pokémon Let's Go Pikachu/Eevee           "]
# #Q1-4, LTD at end of last fy
# #+++++++++++++++++++++++++++++
# gt2 = [ gt1[0] - gt1[4], gt1[1]  - gt1[0], gt1[2] - gt1[1], gt1[3] - gt1[2]] #quarterly calculation 

# gt3 = [ '{:.2f}M '.format(elem) for elem in gt2 ] #format all integers to string to add  and M

# gt4 = [ '{0: >11}'.format(elem) for elem in gt3]
# #format width

# gtfyltd = [gt2[0] + gt2[1] + gt2[2] +gt2[3] , gt1[4] + gt2[0] + gt2[1] + gt2[2] +gt2[3] ] #+ fiscal year cumulative at end, ltd,

# gtfyltd1 = [ '{:.2f}M '.format(elem) for elem in gtfyltd ] #format all integers to string to add  and M

# gtfyltd2 = [ '{0: >11}'.format(elem) for elem in gtfyltd1]
# #format width

# #ring fit adventure

# ht1= [ 11.26, 12.21, 13.53, 13.53, 10.11, " Ring Fit Adventure                       "]
# #Q1-4, LTD at end of last fy
# #+++++++++++++++++++++++++++++
# ht2 = [ ht1[0] - ht1[4] , ht1[1]  - ht1[0], ht1[2] - ht1[1], ht1[3] - ht1[2]] #quarterly calculation 

# ht3 = [ '{:.2f}M '.format(elem) for elem in ht2 ] #format all integers to string to add  and M

# ht4 = [ '{0: >11}'.format(elem) for elem in ht3]
# #format width

# htfyltd = [ ht2[0] + ht2[1] + ht2[2] +ht2[3] , ht1[4] + ht2[0] + ht2[1] + ht2[2] +ht2[3] ] #+ fiscal year cumulative at end, ltd,

# htfyltd1 = [ '{:.2f}M '.format(elem) for elem in htfyltd ] #format all integers to string to add  and M

# htfyltd2 = [ '{0: >11}'.format(elem) for elem in htfyltd1]
# #format width

# #super mario party

# it1= [ 15.72, 16.48, 17.39, 17.39, 14.79, " Super Mario Party                        "]
# #Q1-4, LTD at end of last fy
# #+++++++++++++++++++++++++++++
# it2 = [ it1[0] - it1[4] , it1[1]  - it1[0], it1[2] - it1[1], it1[3] - it1[2]] #quarterly calculation 

# it3 = [ '{:.2f}M '.format(elem) for elem in it2 ] #format all integers to string to add  and M

# it4 = [ '{0: >11}'.format(elem) for elem in it3]
# #format width

# itfyltd = [it2[0] + it2[1] + it2[2] +it2[3] , it1[4] + it2[0] + it2[1] + it2[2] +it2[3] ] #+ fiscal year cumulative at end, ltd,

# itfyltd1 = [ '{:.2f}M '.format(elem) for elem in itfyltd ] #format all integers to string to add  and M

# itfyltd2 = [ '{0: >11}'.format(elem) for elem in itfyltd1]
# #format width

# #smash bros ultimate

# jt1= [ 24.77, 25.71, 27.40, 27.40, 23.84, " Super Smash Bros. Ultimate               "]
# #Q1-4, LTD at end of last fy
# #+++++++++++++++++++++++++++++
# jt2 = [ jt1[0]  - jt1[4], jt1[1]  - jt1[0], jt1[2] - jt1[1], jt1[3] - jt1[2]] #quarterly calculation 

# jt3 = [ '{:.2f}M '.format(elem) for elem in jt2 ] #format all integers to string to add  and M

# jt4 = [ '{0: >11}'.format(elem) for elem in jt3]
# #format width

# jtfyltd = [jt2[0] + jt2[1] + jt2[2] +jt2[3] , jt1[4] + jt2[0] + jt2[1] + jt2[2] +jt2[3] ] #+ fiscal year cumulative at end, ltd,

# jtfyltd1 = [ '{:.2f}M '.format(elem) for elem in jtfyltd ] #format all integers to string to add  and M

# jtfyltd2 = [ '{0: >11}'.format(elem) for elem in jtfyltd1]
# #format width

# #=======================

# #PKMN brilliant diamond/shining pearl

# kt1= [ 0, 0, 13.97, 13.97, 0, " Pokémon Brilliant Diamond/Shining Pearl  "]
# #Q1-4, LTD at end of last fy
# #+++++++++++++++++++++++++++++
# kt2 = [ kt1[0]  - kt1[4], kt1[1]  - kt1[0], kt1[2] - kt1[1], kt1[3] - kt1[2]] #quarterly calculation 

# kt3 = [ '{:.2f}M '.format(elem) for elem in kt2 ] #format all integers to string to add  and M

# kt4 = [ '{0: >11}'.format(elem) for elem in kt3]
# #format width

# ktfyltd = [kt2[0] + kt2[1] + kt2[2] +kt2[3] , kt1[4] + kt2[0] + kt2[1] + kt2[2] +kt2[3] ] #+ fiscal year cumulative at end, ltd,

# ktfyltd1 = [ '{:.2f}M '.format(elem) for elem in ktfyltd ] #format all integers to string to add  and M

# ktfyltd2 = [ '{0: >11}'.format(elem) for elem in ktfyltd1]
# #format width

# #=======================

# #create function, want to append fyltd list to quarter list and then need to sort the lists using max() or sort() so that when it run through a for loop... probably make use of if statements to sort the variables.

# # # for loop print
# # for i in range (3):
# #     print("|" + hd1[i+2] + "|" + "           |")
# #     print("+------------------------------------------------------+")
# #     for i in range(x):
# #         print("|"  +  rw1[i] +  "|" + at9[i] + "|"   )
# #     else:   #print fy cumulative
# #         print("+======================================================+") #border
# #         print("|"  +  rw1[4] +  "|" + at9[4] + "|"   )
#                 #print ltd
#         print("|"  +  rw1[5] +  "|" + at9[5] + "|"   )
#         print("+------------------------------------------------------+")

# def sort_print (z, a): # y: use at1, z: use nsly1, oply1 or nply1. (see called function below)
#     # for loop print
#     for i in range (len(a)-2):
#         print("|" + a[i+2] + "|" + "           |")
#         print("+------------------------------------------------------+")
#         for i in range(x):
#             print("|"  +  rw1[i] +  "|" + z[i] + "|"   )
#         else:   #print fy cumulative
#             print("+======================================================+") #border
#             print("|"  +  rw1[4] +  "|" + z[4] + "|"   )
#                     #print ltd
#             print("|"  +  rw1[5] +  "|" + z[5] + "|"   )
#             print("+------------------------------------------------------+")

#     return

# sort_print(big, hd1)
# print("enhastcihantscehasttchaneishanstchanceistahnceisahesthancstehanecishancsteiahcnesth")

# for i in range(3):
#     print("|" + hd1[i+2] + "|" + "           |")
#     print("+------------------------------------------------------+")
#     for i in range(1):
#         sort_print(at9)

#=====================================

# print("+------------------------------------------------------+")
# print("|" + hd1[0] + "|" + hd1[1] + "|")
# print("+------------------------------------------------------+")
# print("|" + hd1[2] + "|" + "           |")
# print("+------------------------------------------------------+")
# #print first quarter
# if x >= 1:
#     print("|"  +  rw1[0] +  "|" + at4[0] + "|"   )

# #print second quarter
# if x >=2:
#     print("|"  +  rw1[1] +  "|" + at4[1] + "|"   )

# #print third quarter
# if x >=3:
#     print("|"  +  rw1[2] +  "|" + at4[2] + "|"   )

# #print fourth quarter
# if x >=4:
#     print("|"  +  rw1[3] +  "|" + at4[3] + "|"   )

# print("+======================================================+") #border

# #print fy cumulative
# print("|"  +  rw1[4] +  "|" + atfyltd2[0] + "|"   )

# #print ltd
# print("|"  +  rw1[5] +  "|" + atfyltd2[1] + "|"   )
# print("+------------------------------------------------------+")
# print("|" + hd1[3] + "|" + "           |")
# print("+------------------------------------------------------+")
# #print first quarter
# if x >= 1:
#     print("|"  +  rw1[0] +  "|" + bt4[0] + "|"   )

# #print second quarter
# if x >=2:
#     print("|"  +  rw1[1] +  "|" + bt4[1] + "|"   )

# #print third quarter
# if x >=3:
#     print("|"  +  rw1[2] +  "|" + bt4[2] + "|"   )

# #print fourth quarter
# if x >=4:
#     print("|"  +  rw1[3] +  "|" + bt4[3] + "|"   )

# print("+======================================================+") #border

# #print fy cumulative
# print("|"  +  rw1[4] +  "|" + btfyltd2[0] + "|"   )

# #print ltd
# print("|"  +  rw1[5] +  "|" + btfyltd2[1] + "|"   )
# print("+------------------------------------------------------+")
# print("|" + hd1[4] + "|" + "           |")
# print("+------------------------------------------------------+")
# #print first quarter
# if x >= 1:
#     print("|"  +  rw1[0] +  "|" + ct4[0] + "|"   )

# #print second quarter
# if x >=2:
#     print("|"  +  rw1[1] +  "|" + ct4[1] + "|"   )

# #print third quarter
# if x >=3:
#     print("|"  +  rw1[2] +  "|" + ct4[2] + "|"   )

# #print fourth quarter
# if x >=4:
#     print("|"  +  rw1[3] +  "|" + ct4[3] + "|"   )

# print("+======================================================+") #border

# #print fy cumulative
# print("|"  +  rw1[4] +  "|" + ctfyltd2[0] + "|"   )

# #print ltd
# print("|"  +  rw1[5] +  "|" + ctfyltd2[1] + "|"   )
# print("+------------------------------------------------------+")
# print("|" + hd1[5] + "|" + "           |")
# print("+------------------------------------------------------+")
# #print first quarter
# if x >= 1:
#     print("|"  +  rw1[0] +  "|" + dt4[0] + "|"   )

# #print second quarter
# if x >=2:
#     print("|"  +  rw1[1] +  "|" + dt4[1] + "|"   )

# #print third quarter
# #if x >=3:
# #    print("|"  +  rw1[2] +  "|" + dt4[2] + "|"   )

# #print fourth quarter
# #if x >=4:
# #    print("|"  +  rw1[3] +  "|" + dt4[3] + "|"   )

# print("+======================================================+") #border

# #print fy cumulative
# print("|"  +  rw1[4] +  "|" + dtfyltd2[0] + "|"   )

# #print ltd
# print("|"  +  rw1[5] +  "|" + dtfyltd2[1] + "|"   )
# print("+------------------------------------------------------+")
# print("|" + hd1[6] + "|" + "           |")
# print("+------------------------------------------------------+")
# #print first quarter
# if x >= 1:
#     print("|"  +  rw1[0] +  "|" + et4[0] + "|"   )

# #print second quarter
# if x >=2:
#     print("|"  +  rw1[1] +  "|" + et4[1] + "|"   )

# #print third quarter
# if x >=3:
#     print("|"  +  rw1[2] +  "|" + et4[2] + "|"   )

# #print fourth quarter
# if x >=4:
#     print("|"  +  rw1[3] +  "|" + et4[3] + "|"   )

# print("+======================================================+") #border

# #print fy cumulative
# print("|"  +  rw1[4] +  "|" + etfyltd2[0] + "|"   )

# #print ltd
# print("|"  +  rw1[5] +  "|" + etfyltd2[1] + "|"   )
# print("+------------------------------------------------------+")
# print("|" + hd1[7] + "|" + "           |")
# print("+------------------------------------------------------+")
# #print first quarter
# if x >= 1:
#     print("|"  +  rw1[0] +  "|" + ft4[0] + "|"   )

# #print second quarter
# if x >=2:
#     print("|"  +  rw1[1] +  "|" + ft4[1] + "|"   )

# #print third quarter
# if x >=3:
#     print("|"  +  rw1[2] +  "|" + ft4[2] + "|"   )

# #print fourth quarter
# if x >=4:
#     print("|"  +  rw1[3] +  "|" + ft4[3] + "|"   )

# print("+======================================================+") #border

# #print fy cumulative
# print("|"  +  rw1[4] +  "|" + ftfyltd2[0] + "|"   )

# #print ltd
# print("|"  +  rw1[5] +  "|" + ftfyltd2[1] + "|"   )
# print("+------------------------------------------------------+")
# print("|" + hd1[8] + "|" + "           |")
# print("+------------------------------------------------------+")
# #print first quarter
# if x >= 1:
#     print("|"  +  rw1[0] +  "|" + gt4[0] + "|"   )

# #print second quarter
# if x >=2:
#     print("|"  +  rw1[1] +  "|" + gt4[1] + "|"   )

# #print third quarter
# if x >=3:
#     print("|"  +  rw1[2] +  "|" + gt4[2] + "|"   )

# #print fourth quarter
# if x >=4:
#     print("|"  +  rw1[3] +  "|" + gt4[3] + "|"   )

# print("+======================================================+") #border

# #print fy cumulative
# print("|"  +  rw1[4] +  "|" + gtfyltd2[0] + "|"   )

# #print ltd
# print("|"  +  rw1[5] +  "|" + gtfyltd2[1] + "|"   )
# print("+------------------------------------------------------+")
# print("|" + hd1[9] + "|" + "           |")
# print("+------------------------------------------------------+")
# #print first quarter
# if x >= 1:
#     print("|"  +  rw1[0] +  "|" + ht4[0] + "|"   )

# #print second quarter
# if x >=2:
#     print("|"  +  rw1[1] +  "|" + ht4[1] + "|"   )

# #print third quarter
# if x >=3:
#     print("|"  +  rw1[2] +  "|" + ht4[2] + "|"   )

# #print fourth quarter
# if x >=4:
#     print("|"  +  rw1[3] +  "|" + ht4[3] + "|"   )

# print("+======================================================+") #border

# #print fy cumulative
# print("|"  +  rw1[4] +  "|" + htfyltd2[0] + "|"   )

# #print ltd
# print("|"  +  rw1[5] +  "|" + htfyltd2[1] + "|"   )
# print("+------------------------------------------------------+")
# print("|" + hd1[10] + "|" + "           |")
# print("+------------------------------------------------------+")
# #print first quarter
# if x >= 1:
#     print("|"  +  rw1[0] +  "|" + it4[0] + "|"   )

# #print second quarter
# if x >=2:
#     print("|"  +  rw1[1] +  "|" + it4[1] + "|"   )

# #print third quarter
# if x >=3:
#     print("|"  +  rw1[2] +  "|" + it4[2] + "|"   )

# #print fourth quarter
# if x >=4:
#     print("|"  +  rw1[3] +  "|" + it4[3] + "|"   )

# print("+======================================================+") #border

# #print fy cumulative
# print("|"  +  rw1[4] +  "|" + itfyltd2[0] + "|"   )

# #print ltd
# print("|"  +  rw1[5] +  "|" + itfyltd2[1] + "|"   )
# print("+------------------------------------------------------+")
# print("|" + hd1[11] + "|" + "           |")
# print("+------------------------------------------------------+")
# #print first quarter
# if x >= 1:
#     print("|"  +  rw1[0] +  "|" + jt4[0] + "|"   )

# #print second quarter
# if x >=2:
#     print("|"  +  rw1[1] +  "|" + jt4[1] + "|"   )

# #print third quarter
# if x >=3:
#     print("|"  +  rw1[2] +  "|" + jt4[2] + "|"   )

# #print fourth quarter
# if x >=4:
#     print("|"  +  rw1[3] +  "|" + jt4[3] + "|"   )

# print("+======================================================+") #border

# #print fy cumulative
# print("|"  +  rw1[4] +  "|" + jtfyltd2[0] + "|"   )

# #print ltd
# print("|"  +  rw1[5] +  "|" + jtfyltd2[1] + "|"   )
# print("+------------------------------------------------------+")
# print("|" + hd1[12] + "|" + "           |")
# print("+------------------------------------------------------+")
# #print first quarter
# #if x >= 1:
# #    print("|"  +  rw1[0] +  "|" + kt4[0] + "|"   )

# #print second quarter
# #if x >=2:
# #    print("|"  +  rw1[1] +  "|" + kt4[1] + "|"   )

# #print third quarter
# if x >=3:
#     print("|"  +  rw1[2] +  "|" + kt4[2] + "|"   )

# #print fourth quarter
# if x >=4:
#     print("|"  +  rw1[3] +  "|" + kt4[3] + "|"   )

# print("+======================================================+") #border

# #print fy cumulative
# print("|"  +  rw1[4] +  "|" + ktfyltd2[0] + "|"   )

# #print ltd
# print("|"  +  rw1[5] +  "|" + ktfyltd2[1] + "|"   )
# print("+------------------------------------------------------+")