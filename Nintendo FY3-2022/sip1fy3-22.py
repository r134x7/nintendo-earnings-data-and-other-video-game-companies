hd1 = [  " Proportion of overseas sales ", " Proportion of hardware sales ", " Proportion of first party software sales ", " Digital Sales                ", " Proportion of Digital Sales  ", "Proportion of DL Ver. of Packaged Software Sales"] #header
rw1 = [" 1st Quarter       ", " 2nd Quarter       ", " 3rd Quarter       ", " 4th Quarter       ", " 1st Half          ",  " 1st Three Quarters", " FY3/22 Cumulative "] # row names
lb1 = "###" # line break

header = [("+------------------------------+") + ("\n|"  +  hd1[0] + "|") + ("\n+------------------------------+"), ("+------------------------------+") + ("\n|"  +  hd1[1] + "|") + ("\n+------------------------------+"), ("+------------------------------+") + ("\n|"  +  " Proportion of first party    " + "|") + ("\n|" + " software sales               " + "|") + ("\n+------------------------------+"), ("+------------------------------+") + ("\n|"  +  hd1[3] + "|") + ("\n+------------------------------+"), ("+------------------------------+") + ("\n|"  +  hd1[4] + "|") + ("\n+------------------------------+"), ("+-------------------------------------+") + ("\n|"  +  " Proportion of downloadable versions " + "|") + ("\n|" + " of Packaged Software Sales          " + "|") + ("\n+-------------------------------------+")] # [0] Print proportion of overseas sales, [1] print proportion of hardware sales, [2] print Proportion of first party software sales, [3] print Digital Sales, [4] print proportion of digital sales, [5] Print Proportion of DL Ver. of Packaged SW Sales

footer = [("+------------------------------+") + ("\n(※ Proportion of overseas (outside of Japan)") + ("\nsales to total sales)"), ("+------------------------------+") + ("\n(※ Proportion of hardware (including accessories) sales") + ("\nto total dedicated videogame platform sales)"), ("+------------------------------+") + ("\n(※ Proportion of first-party software sales") + ("\nto total dedicated video game software sales)"), ("+------------------------------+") + ("\n(\"※ Digital sales include a) downloadable versions of packaged software,") + ("\nb) download-only software, c) add-on content and d) Nintendo Switch Online, etc.") + ("\n＊ \"Downloadable versions of packaged software\" indicates the") + ("\ndownloadable version of software that is offered both physically and digitally.\")"), ("+------------------------------+") + ("\n(※ Proportion of digital sales to total dedicated ") + ("\n video game software sales )"), ("+-------------------------------------+") + ("\n(※ Proportion of downloadable versions of packaged software sales ") + ("\n to total digital sales as indicated above: a/(a+b+c+d) )")] # [0] Print proportion of overseas sales, [1] print proportion of hardware sales, [2] print Proportion of first party software sales, [3] print Digital Sales, [4] print proportion of digital sales, [5] Print Proportion of DL Ver. of Packaged SW Sales

x = 3 # x relates to the current earnings quarter, set to 1, 2, 3 or 4.

#Proportion of Overseas Sales
poos1 = [77.9, 78.7, 79.6, 66.66, 78.3, 79.0, 33.33] #Input figures, [0] 1st quarter, [1] 2nd quarter, [2] 3rd quarter, [3] 4th quarter, [4] 1st half, [5] first three quarters, [6] fiscal year cumulative

#Proportion of hardware sales
pohs1 = [47.6, 45.2, 53.9, 66.66, 46.5, 50.4, 33.33] #Input figures, [0] 1st quarter, [1] 2nd quarter, [2] 3rd quarter, [3] 4th quarter, [4] 1st half, [5] first three quarters, [6] fiscal year cumulative

#Proportion of first party software sales
pofpss1 = [72.3, 68.9, 84.1, 66.66, 70.6, 77.7, 33.33] #Input figures, [0] 1st quarter, [1] 2nd quarter, [2] 3rd quarter, [3] 4th quarter, [4] 1st half, [5] first three quarters, [6] fiscal year cumulative

#Digital sales
ds1 = [75.9, 68.2, 110.8, 66.66, 144.2, 255.0, 33.33] #Input figures, [0] 1st quarter, [1] 2nd quarter, [2] 3rd quarter, [3] 4th quarter, [4] 1st half, [5] first three quarters, [6] fiscal year cumulative

#Proportion of Digital Sales
pods1 = [46.9, 43.2, 35.3, 66.66, 45.1, 40.2, 33.33] #Input figures, [0] 1st quarter, [1] 2nd quarter, [2] 3rd quarter, [3] 4th quarter, [4] 1st half, [5] first three quarters, [6] fiscal year cumulative

#Proportion of DL Ver. of Packaged SW Sales
podlss1 = [52.1, 49.1, 56.3, 66.66, 50.7, 53.1, 33.33] #Input figures, [0] 1st quarter, [1] 2nd quarter, [2] 3rd quarter, [3] 4th quarter, [4] 1st half, [5] first three quarters, [6] fiscal year cumulative

def c_print (y, z, a, b, delta, theta): 
    # variables created inside a function are local and cannot be used outside a function

        y1, z1, a1, b1, delta1, theta1 = ['{:}% '.format(elem) for elem in y], ['{:}% '.format(elem) for elem in z], ['{:}% '.format(elem) for elem in a], ['¥{:}B '.format(elem) for elem in b], ['{:}% '.format(elem) for elem in delta], ['{:}% '.format(elem) for elem in theta]

        y2, z2, a2, b2, delta2, theta2 = ['{0: >10}'.format(elem) for elem in y1], ['{0: >10}'.format(elem) for elem in z1], ['{0: >10}'.format(elem) for elem in a1], ['{0: >10}'.format(elem) for elem in b1], ['{0: >10}'.format(elem) for elem in delta1], [ '{0: >17}'.format(elem) for elem in theta1]

        for i in range (6):
            if range (i) == range (0):
                print(header[i])
                for i in range (x):
                    print("|"  +  rw1[i] + "|" + y2[i] + "|") 
                else:
                    print("+==============================+")
                    for i in range (x-1): 
                        print("|"  +  rw1[i+4] + "|" + y2[i+4] + "|")
                    else: 
                        print(footer[0])
            elif range (i) == range (1):
                print(header[i])
                for i in range (x):
                    print("|"  +  rw1[i] + "|" + z2[i] + "|") 
                else:
                    print("+==============================+")
                    for i in range (x-1): 
                        print("|"  +  rw1[i+4] + "|" + z2[i+4] + "|")
                    else: 
                        print(footer[1])
            elif range (i) == range (2):
                print(header[i])
                for i in range (x):
                    print("|"  +  rw1[i] + "|" + a2[i] + "|") 
                else:
                    print("+==============================+")
                    for i in range (x-1): 
                        print("|"  +  rw1[i+4] + "|" + a2[i+4] + "|")
                    else: 
                        print(footer[2])
            elif range (i) == range (3):
                print(header[i])
                for i in range (x):
                    print("|"  +  rw1[i] + "|" + b2[i] + "|") 
                else:
                    print("+==============================+")
                    for i in range (x-1): 
                        print("|"  +  rw1[i+4] + "|" + b2[i+4] + "|")
                    else: 
                        print(footer[3])
            elif range (i) == range (4):
                print(header[i])
                for i in range (x):
                    print("|"  +  rw1[i] + "|" + delta2[i] + "|") 
                else:
                    print("+==============================+")
                    for i in range (x-1): 
                        print("|"  +  rw1[i+4] + "|" + delta2[i+4] + "|")
                    else: 
                        print(footer[4])
            elif range (i) == range (5):
                print(header[i])
                for i in range (x):
                    print("|"  +  rw1[i] + "|" + theta2[i] + "|") 
                else:
                    print("+=====================================+")
                    for i in range (x-1): 
                        print("|"  +  rw1[i+4] + "|" + theta2[i+4] + "|")
                    else: 
                        print(footer[5])

        return

c_print (poos1, pohs1, pofpss1, ds1, pods1, podlss1)

# Old code++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
# #Proportion of Overseas Sales
# poos1 = [ 77.9, 78.7, 79.6, 66.66, 78.3, 79.0, 33.33 ]
# #Q1-4, 1st half, first three quarters, fyc
# #+++++++++++++++++++++++++++++
# poos2 = [ '{:}% '.format(elem) for elem in poos1 ] #format all integers to string to add ¥ and M

# poos3 = [ '{0: >10}'.format(elem) for elem in poos2]
# #format width

# #Proportion of hardware sales
# pohs1 = [ 47.6, 45.2, 53.9, 66.66, 46.5, 50.4, 33.33 ]
# #Q1-4, 1st half, first three quarters, fyc
# #+++++++++++++++++++++++++++++
# pohs2 = [ '{:}% '.format(elem) for elem in pohs1 ] #format all integers to string to add ¥ and M

# pohs3 = [ '{0: >10}'.format(elem) for elem in pohs2]

# #Proportion of first party software sales
# pofpss1 = [ 72.3, 68.9, 84.1, 66.66, 70.6, 77.7, 33.33 ]
# #Q1-4, 1st half, first three quarters, fyc
# #+++++++++++++++++++++++++++++
# pofpss2 = [ '{:}% '.format(elem) for elem in pofpss1 ] #format all integers to string to add ¥ and M

# pofpss3 = [ '{0: >10}'.format(elem) for elem in pofpss2]

# #Digital sales
# ds1 = [ 75.9, 68.2, 110.8, 66.66, 144.2, 255.0, 33.33  ]
# #Q1-4, 1st half, first three quarters, fyc
# #+++++++++++++++++++++++++++++
# ds2 = [ '¥{:}B '.format(elem) for elem in ds1 ] #format all integers to string to add ¥ and M

# ds3 = [ '{0: >10}'.format(elem) for elem in ds2]

# #Proportion of Digital Sales
# pods1 = [ 46.9, 43.2, 35.3, 66.66, 45.1, 40.2, 33.33 ]
# #Q1-4, 1st half, first three quarters, fyc
# #+++++++++++++++++++++++++++++
# pods2 = [ '{:}% '.format(elem) for elem in pods1 ] #format all integers to string to add ¥ and M

# pods3 = [ '{0: >10}'.format(elem) for elem in pods2]

# #Proportion of DL Ver. of Packaged SW Sales
# podlss1 = [ 52.1, 49.1, 56.3, 66.66, 50.7, 53.1, 33.33 ]
# #Q1-4, 1st half, first three quarters, fyc
# #+++++++++++++++++++++++++++++
# podlss2 = [ '{:}% '.format(elem) for elem in podlss1 ] #format all integers to string to add ¥ and M

# podlss3 = [ '{0: >17}'.format(elem) for elem in podlss2]

# #Print proportion of overseas sales
# print("+------------------------------+")
# print("|"  +  hd1[0] + "|")
# print("+------------------------------+")
# if x >= 1: #print 1st quarter
#     print("|"  +  rw1[0] + "|" + poos3[0] + "|")
    
# if x >= 2: #print 2nd quarter
#     print("|"  +  rw1[1] + "|" + poos3[1] + "|")
    
# if x >= 3: #print 3rd quarter
#     print("|"  +  rw1[2] + "|" + poos3[2] + "|")
    
# if x >= 4: #print 4th quarter
#     print("|"  +  rw1[3] + "|" + poos3[3] + "|")
    
# print("+==============================+")
# if x >= 2: #print 1st half
#     print("|"  +  rw1[5] + "|" + poos3[4] + "|")
    
# if x >= 3: #print 1st three quarter
#     print("|"  +  rw1[6] + "|" + poos3[5] + "|")
#     #print fyc
# if x >= 4:
#     print("|"  +  rw1[4] + "|" + poos3[6] + "|")
    
# print("+------------------------------+")
# print("(※ Proportion of overseas (outside of Japan)")
# print("sales to total sales)")
    
#     #print proportion of hardware sales
# print("+------------------------------+")
# print("|"  +  hd1[1] + "|")
# print("+------------------------------+")
# if x >= 1: #print 1st quarter
#     print("|"  +  rw1[0] + "|" + pohs3[0] + "|")
    
# if x >= 2: #print 2nd quarter
#     print("|"  +  rw1[1] + "|" + pohs3[1] + "|")
    
# if x >= 3: #print 3rd quarter
#     print("|"  +  rw1[2] + "|" + pohs3[2] + "|")
    
# if x >= 4: #print 4th quarter
#     print("|"  +  rw1[3] + "|" + pohs3[3] + "|")
    
# print("+==============================+")
# if x >= 2: #print 1st half
#     print("|"  +  rw1[5] + "|" + pohs3[4] + "|")
    
# if x >= 3: #print 1st three quarter
#     print("|"  +  rw1[6] + "|" + pohs3[5] + "|")
#     #print fyc
# if x >= 4:
#     print("|"  +  rw1[4] + "|" + pohs3[6] + "|")
    
# print("+------------------------------+")
# print("(※ Proportion of hardware (including accessories) sales")
# print("to total dedicated videogame platform sales)")
    
#     #Print Proportion of first party software sales
# print("+------------------------------+")
# print("|"  +  " Proportion of first party    " + "|")
# print("|" + " software sales               " + "|")
# print("+------------------------------+")
# if x >= 1: #print 1st quarter
#     print("|"  +  rw1[0] + "|" + pofpss3[0] + "|")
    
# if x >= 2: #print 2nd quarter
#     print("|"  +  rw1[1] + "|" + pofpss3[1] + "|")
    
# if x >= 3: #print 3rd quarter
#     print("|"  +  rw1[2] + "|" + pofpss3[2] + "|")
    
# if x >= 4: #print 4th quarter
#     print("|"  +  rw1[3] + "|" + pofpss3[3] + "|")
    
# print("+==============================+")
# if x >= 2: #print 1st half
#     print("|"  +  rw1[5] + "|" + pofpss3[4] + "|")
    
# if x >= 3: #print 1st three quarter
#     print("|"  +  rw1[6] + "|" + pofpss3[5] + "|")
#     #print fyc
# if x >= 4:
#     print("|"  +  rw1[4] + "|" + pofpss3[6] + "|")
    
# print("+------------------------------+")
# print("(※ Proportion of first-party software sales") 
# print("to total dedicated video game software sales)")
    
#     #Print Digital Sales
# print("+------------------------------+")
# print("|"  +  hd1[3] + "|")
# print("+------------------------------+")
# if x >= 1: #print 1st quarter
#     print("|"  +  rw1[0] + "|" + ds3[0] + "|")
    
# if x >= 2: #print 2nd quarter
#     print("|"  +  rw1[1] + "|" + ds3[1] + "|")
    
# if x >= 3: #print 3rd quarter
#     print("|"  +  rw1[2] + "|" + ds3[2] + "|")
    
# if x >= 4: #print 4th quarter
#     print("|"  +  rw1[3] + "|" + ds3[3] + "|")
    
# print("+==============================+")
# if x >= 2: #print 1st half
#     print("|"  +  rw1[5] + "|" + ds3[4] + "|")
    
# if x >= 3: #print 1st three quarter
#     print("|"  +  rw1[6] + "|" + ds3[5] + "|")
#     #print fyc
# if x >= 4:
#     print("|"  +  rw1[4] + "|" + ds3[6] + "|")
    
# print("+------------------------------+")
# print("(\"※ Digital sales include a) downloadable versions of packaged software,")
# print("b) download-only software, c) add-on content and d) Nintendo Switch Online, etc.")
# print("＊ \"Downloadable versions of packaged software\" indicates the")
# print("downloadable version of software that is offered both physically and digitally.\")")

# #Print proportion of digital sales
# print("+------------------------------+")
# print("|"  +  hd1[4] + "|")
# print("+------------------------------+")
# if x >= 1: #print 1st quarter
#     print("|"  +  rw1[0] + "|" + pods3[0] + "|")
    
# if x >= 2: #print 2nd quarter
#     print("|"  +  rw1[1] + "|" + pods3[1] + "|")
    
# if x >= 3: #print 3rd quarter
#     print("|"  +  rw1[2] + "|" + pods3[2] + "|")
    
# if x >= 4: #print 4th quarter
#     print("|"  +  rw1[3] + "|" + pods3[3] + "|")
    
# print("+==============================+")
# if x >= 2: #print 1st half
#     print("|"  +  rw1[5] + "|" + pods3[4] + "|")
    
# if x >= 3: #print 1st three quarter
#     print("|"  +  rw1[6] + "|" + pods3[5] + "|")
#     #print fyc
# if x >= 4:
#     print("|"  +  rw1[4] + "|" + pods3[6] + "|")
    
# print("+------------------------------+")    
# print("(※ Proportion of digital sales to total dedicated ")
# print(" video game software sales )")
    
#     #Print Proportion of DL Ver. of Packaged SW Sales
# print("+-------------------------------------+")  
# print("|"  +  " Proportion of downloadable versions " + "|")
# print("|" + " of Packaged Software Sales          " + "|")
# print("+-------------------------------------+")  
# if x >= 1: #print 1st quarter
#     print("|"  +  rw1[0] + "|" + podlss3[0] + "|")
    
# if x >= 2: #print 2nd quarter
#     print("|"  +  rw1[1] + "|" + podlss3[1] + "|")
    
# if x >= 3: #print 3rd quarter
#     print("|"  +  rw1[2] + "|" + podlss3[2] + "|")
    
# if x >= 4: #print 4th quarter
#     print("|"  +  rw1[3] + "|" + podlss3[3] + "|")
    
# print("+=====================================+")
# if x >= 2: #print 1st half
#     print("|"  +  rw1[5] + "|" + podlss3[4] + "|")
    
# if x >= 3: #print 1st three quarter
#     print("|"  +  rw1[6] + "|" + podlss3[5] + "|")
#     #print fyc
# if x >= 4:
#     print("|"  +  rw1[4] + "|" + podlss3[6] + "|")
    
# print("+-------------------------------------+")  
# print("(※ Proportion of downloadable versions of packaged software sales ")
# print(" to total digital sales as indicated above: a/(a+b+c+d) )")
    
