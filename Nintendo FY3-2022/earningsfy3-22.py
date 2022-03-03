hd1 = [ " Nintendo Co., Ltd.", " Net Sales   ", " Operating Income ", " Net Profit "] #header names
rw1 = [" 1st Quarter       ", " 2nd Quarter       ", " 3rd Quarter       ", " 4th Quarter       ", " FY3/22 Cumulative ", " FY3/22 Forecast   ",  " FY3/23 Forecast   ", " FY3/22 Cml. YoY%  "] # row names
lb1 = "###" # line break

x = 3 #Variable used for if statement condition for printing Quarter 1 upto Quarter 4, set the value from 1 to 4.

#+++++++++++++++++++++++++++++ Input
#Net Sales (by quarter), variable creates an array (zero-index)
ns1 = [ 322647, 624272, 1320219, 1320219, 1600000, 1600000, 1600000,  1650000, 0  ] #input cumalative figures, [0] is Q1, [1] Q2, [2] Q3, [3] Q4, [4] current fiscal year forecast, [5] next fiscal year forecast (you wouldn't expect to use this until Q4 results), [6] 1st forecast revision, [7] 2nd forecast revision, [8] 3rd forecast revision (unlikely but there just in case)
#-----------------------------
ns2 = [ ns1[0], ns1[1]  - ns1[0], ns1[2] - ns1[1], ns1[3] - ns1[2], ns1[4], ns1[5], ns1[6], ns1[7], ns1[8]] #creates new net sales array which has to calculate quarterly figures

ns3 = [ '¥{:,}M '.format(elem) for elem in ns2 ] #formats all integers to string to add ¥ and M
ns4 = [ '{0: >13}'.format(elem) for elem in ns3] #format width
#-----------------------------
nsfy = [ ns2[0] + ns2[1] + ns2[2] +ns2[3], ns2[0] + ns2[1], ns2[0] + ns2[1] + ns2[2] ] #Net sales cumulative array, [0] fiscal year cumulative figure, [1] 1st half cumulative figure, [2] 1st 3 quarters cumulative figure

nsfy1 = [ '¥{:,}M '.format(elem) for elem in nsfy ] #format all integers to string to add ¥ and M
nsfy2 = [ '{0: >13}'.format(elem) for elem in nsfy1] #format width
#-----------------------------

#+++++++++++++++++++++++++++++ Input
#Net sales array for last fiscal year's numbers
nsly1= [ 358106, 411418, 634939, 354447, 1758910 ] #[0] last Q1, [1] last Q2, [2] last Q3, [3] last Q4, [4] last fiscal year cumulative 
#-----------------------------
nsly2 = [ ((ns2[0] / nsly1[0]) - 1) * 100, ((ns2[1] / nsly1[1]) -1) *100, ((ns2[2] / nsly1[2]) - 1) * 100,  ((ns2[3] / nsly1[3]) - 1) * 100] #Calculates Year-on-Year percentages for each quarter

nsly3 = [ '{:+.2f}% '.format(elem) for elem in nsly2 ] #format all integers to string to add  and M
nsly4 = [ '{0: >13}'.format(elem) for elem in nsly3] #format width
#-----------------------------
ns_yoyfy1 = [  (((ns2[0] + ns2[1]) / (nsly1[0] + nsly1[1])) - 1) * 100, (((ns2[0] + ns2[1] + ns2[2]) / (nsly1[0] + nsly1[1] + nsly1[2])) - 1) * 100, ((nsfy[0] / nsly1[4]) - 1) * 100] #Calculates Year-on-Year percentages for: [0] 1st half, [1] 1st 3 quarters, [2] fiscal year cumulative

ns_yoyfy2 = [ '{:+.2f}% '.format(elem) for elem in ns_yoyfy1 ] #format all integers to string to add  and M
ns_yoyfy3 = [ '{0: >13}'.format(elem) for elem in ns_yoyfy2] #format width
#-----------------------------

#+++++++++++++++++++++++++++++ Input
#Operating Income (by quarter)
op1 = [ 119752, 219959, 472551, 472551, 500000, 520000, 520000,  560000, 0  ] #input cumalative figures, [0] is Q1, [1] Q2, [2] Q3, [3] Q4, [4] current fiscal year forecast, [5] next fiscal year forecast (you wouldn't expect to use this until Q4 results), [6] 1st forecast revision, [7] 2nd forecast revision, [8] 3rd forecast revision (unlikely but there just in case)
#-----------------------------
op2 = [ op1[0], op1[1] - op1[0], op1[2] - op1[1], op1[3] - op1[2], op1[4], op1[5], op1[6], op1[7], op1[8]] #creates new operating income array which has to calculate quarterly figures

op3 = [ '¥{:,}M '.format(elem) for elem in op2 ] #format all integers to string to add ¥ and M
op4 =  [ '{0: >18}'.format(elem) for elem in op3] #format width
#-----------------------------
opfy = [op2[0] + op2[1] + op2[2] + op2[3], op2[0] + op2[1], op2[0] + op2[1] + op2[2] ] #Operating income cumulative array, [0] fiscal year cumulative figure, [1] 1st half cumulative figure, [2] 1st 3 quarters cumulative figure

opfy1 = [ '¥{:,}M '.format(elem) for elem in opfy ] #format all integers to string to add ¥ and M
opfy2 =  [ '{0: >18}'.format(elem) for elem in opfy1] #format width
#-----------------------------

#+++++++++++++++++++++++++++++ Input
#Operating income array for last fiscal year's numbers
oply1= [ 144737, 146687, 229684, 119526, 640634 ] #[0] last Q1, [1] last Q2, [2] last Q3, [3] last Q4, [4] last fiscal year cumulative 
#-----------------------------
oply2 = [ ((op2[0] / oply1[0]) - 1) * 100, ((op2[1] / oply1[1]) -1) *100, ((op2[2] / oply1[2]) - 1) * 100,  ((op2[3] / oply1[3]) - 1) * 100]  #Calculates Year-on-Year percentages for each quarter

oply3 = [ '{:+.2f}% '.format(elem) for elem in oply2 ] #format all integers to string to add  and M
oply4 = [ '{0: >18}'.format(elem) for elem in oply3] #format width
#-----------------------------
op_yoyfy1 = [  (((op2[0] + op2[1]) / (oply1[0] + oply1[1])) - 1) * 100, (((op2[0] + op2[1] + op2[2]) / (oply1[0] + oply1[1] + oply1[2])) - 1) * 100, ((opfy[0] / oply1[4]) - 1) * 100] #Calculates Year-on-Year percentages for: [0] 1st half, [1] 1st 3 quarters, [2] fiscal year cumulative

op_yoyfy2 = [ '{:+.2f}% '.format(elem) for elem in op_yoyfy1 ] #format all integers to string to add  and M
op_yoyfy3 = [ '{0: >18}'.format(elem) for elem in op_yoyfy2] #format width
#-----------------------------

#Operating Margin
#percentages
if x >= 1: #1st quarter
    op_mgx1 = ((op2[0]) / (ns2[0]) ) * 100
    op_mgx1a =  '{:.2f}% '.format(op_mgx1) 
    op_mgx1b =  '{0: >12}'.format(op_mgx1a)
if x >= 2: #2nd quarter
    op_mgx2 = ((op2[1]) / (ns2[1]) ) * 100
    op_mgx2a =  '{:.2f}% '.format(op_mgx2) 
    op_mgx2b =  '{0: >12}'.format(op_mgx2a)
if x >= 3: #3rd quarter
    op_mgx3 = ((op2[2]) / (ns2[2]) ) * 100
    op_mgx3a =  '{:.2f}% '.format(op_mgx3) 
    op_mgx3b =  '{0: >12}'.format(op_mgx3a)
if x >=4: #4th quarter
    op_mgx4 = ((op2[3]) / (ns2[3]) ) * 100
    op_mgx4a =  '{:.2f}% '.format(op_mgx4) 
    op_mgx4b =  '{0: >12}'.format(op_mgx4a)
    
if x>= 2: #1st half margin
    op_mgx1half = ((op2[0] + op2[1]) / (ns2[0] + ns2[1]) ) * 100
    op_mgx1half1 =  '{:.2f}% '.format(op_mgx1half) 
    op_mgx1half2 =  '{0: >12}'.format(op_mgx1half1)
    
if x>= 3: #1st 3 quarters margin
    op_mgx1st3q = ((op2[0] + op2[1] + op2[2]) / (ns2[0] + ns2[1] + ns2[2]) ) * 100
    op_mgx1st3qa =  '{:.2f}% '.format(op_mgx1st3q) 
    op_mgx1st3qb =  '{0: >12}'.format(op_mgx1st3qa)
    
op_mgxfy = ((opfy[0] / nsfy[0]) ) * 100 #fiscal year cumulative
op_mgxfy1 =  '{:.2f}% '.format(op_mgxfy) 
op_mgxfy2 =  '{0: >12}'.format(op_mgxfy1)
    
op_mgxfyfc = ((op1[4] / ns1[4]) ) * 100 #fiscal year forecast
op_mgxfyfc1 =  '{:.2f}% '.format(op_mgxfyfc) 
op_mgxfyfc2 =  '{0: >12}'.format(op_mgxfyfc1)

op_mgxfynextfc = ((op1[5] / ns1[5]) ) * 100 #next fiscal year forecast
op_mgxfynextfc1 =  '{:.2f}% '.format(op_mgxfynextfc) 
op_mgxfynextfc2 =  '{0: >12}'.format(op_mgxfynextfc1)

if x >= 2 and ns1[6] != 0: #1st revision
    op_mgxfyfcx1 = ((op1[6] / ns1[6]) ) * 100
    op_mgxfyfcx1a =  '{:.2f}% '.format(op_mgxfyfcx1) 
    op_mgxfyfcx1b =  '{0: >12}'.format(op_mgxfyfcx1a)
    
if x >= 3 and ns1[7] != 0: #2nd revision
    op_mgxfyfcx2 = ((op1[7] / ns1[7]) ) * 100
    op_mgxfyfcx2a =  '{:.2f}% '.format(op_mgxfyfcx2) 
    op_mgxfyfcx2b =  '{0: >12}'.format(op_mgxfyfcx2a)
    
if x >= 4 and ns1[8] != 0: #3rd revision
    op_mgxfyfcx3 = ((op1[8] / ns1[8]) ) * 100
    op_mgxfyfcx3a =  '{:.2f}% '.format(op_mgxfyfcx3) 
    op_mgxfyfcx3b =  '{0: >12}'.format(op_mgxfyfcx3a)

# op_mgxfynextfc = ((op1[4] / ns1[4]) ) * 100 #I have to check this code, is probably not meant to be used
# op_mgxfynextfc1 =  '{:.2f}% '.format(op_mgxfynextfc) 
# op_mgxfynextfc2 =  '{0: >12}'.format(op_mgxfynextfc1)

#+++++++++++++++++++++++++++++ Input
#Net Income (by quarter)
np1 = [ 92747, 171834, 367387, 367387, 340000, 350000,  350000,  400000, 0 ] #input cumalative figures, [0] is Q1, [1] Q2, [2] Q3, [3] Q4, [4] current fiscal year forecast, [5] next fiscal year forecast (you wouldn't expect to use this until Q4 results), [6] 1st forecast revision, [7] 2nd forecast revision, [8] 3rd forecast revision (unlikely but there just in case)
#-----------------------------
np2 = [ np1[0], np1[1] - np1[0], np1[2] - np1[1], np1[3] - np1[2],  np1[4], np1[5], np1[6], np1[7], np1[8]]

np3 = [ '¥{:,}M '.format(elem) for elem in np2 ]
np4 =  [ '{0: >12}'.format(elem) for elem in np3] #format width
#-----------------------------
npfy = [np2[0] + np2[1] + np2[2] + np2[3], np2[0] + np2[1], np2[0] + np2[1] + np2[2]]

npfy1 = [ '¥{:,}M '.format(elem) for elem in npfy ]

npfy2 =  [ '{0: >12}'.format(elem) for elem in npfy1] #format width
#-----------------------------

#+++++++++++++++++++++++++++++ Input
#last years numbers
nply1= [ 106482, 106641, 163542, 103711, 480376 ] #Q1-4, fy.

nply2 = [ ((np2[0] / nply1[0]) - 1) * 100, ((np2[1] / nply1[1]) -1) *100, ((np2[2] / nply1[2]) - 1) * 100,  ((np2[3] / nply1[3]) - 1) * 100]

nply3 = [ '{:+.2f}% '.format(elem) for elem in nply2 ] #format all integers to string to add  and M
nply4 = [ '{0: >12}'.format(elem) for elem in nply3] #format width

np_yoyfy1 = [  (((np2[0] + np2[1]) / (nply1[0] + nply1[1])) - 1) * 100, (((np2[0] + np2[1] + np2[2]) / (nply1[0] + nply1[1] + nply1[2])) - 1) * 100, ((npfy[0] / nply1[4]) - 1) * 100] #Q2-4 fy cumulative

np_yoyfy2 = [ '{:+.2f}% '.format(elem) for elem in np_yoyfy1 ] #format all integers to string to add  and M

np_yoyfy3 = [ '{0: >12}'.format(elem) for elem in np_yoyfy2] #format width

#printing
print("+------------------------------------------------------------------------------+") #border
print("|" + hd1[0] + "|" + hd1[1] + "|" + hd1[2] + "|" + " Op. Margin " + "|" +  hd1[3] + "|")
print("+------------------------------------------------------------------------------+") #border

#print first quarter
if x >= 1:
    print("|"  +  rw1[0] +  "|" + ns4[0] + "|" + op4[0] + "|" + op_mgx1b + "|" + np4[0]+  "|" )
    print("|"  + " 1st Quarter YoY%  " +   "|" + nsly4[0] + "|" + oply4[0] +  "|" + "            " + "|" + nply4[0] + "|"   )

#print second quarter
if x >=2:
    print("+------------------------------------------------------------------------------+") #border
    print("|"  +  rw1[1] +  "|" + ns4[1] + "|" + op4[1] + "|" + op_mgx2b + "|" + np4[1] +  "|" )
    print("|"  + " 2nd Quarter YoY%  " +   "|" + nsly4[1] + "|" + oply4[1] +  "|" + "            " + "|" + nply4[1] + "|"  )

#print third quarter
if x >=3:
    print("+------------------------------------------------------------------------------+") #border
    print("|"  +  rw1[2] +  "|" + ns4[2] + "|" + op4[2] + "|" + op_mgx3b + "|" + np4[2] +  "|" )
    print("|"  + " 3rd Quarter YoY%  " +   "|" + nsly4[2] + "|" + oply4[2] + "|" + "            "  + "|" + nply4[2] + "|" )

#print fourth quarter
if x >=4:
    print("+------------------------------------------------------------------------------+") #border
    print("|"  +  rw1[3] +  "|" + ns4[3] + "|" + op4[3] + "|" + op_mgx4b + "|" + np4[3] +  "|" )
    print("|"  + " 4th Quarter YoY%  " +   "|" + nsly4[3] + "|" + oply4[3] + "|" + "            "  + "|" + nply4[3] + "|"   )

print("+==============================================================================+") #border

#print 1st half cumulative
if x >= 2:
    print("|"  +  " First Half        " +  "|" + nsfy2[1] + "|" + opfy2[1] + "|" + op_mgx1half2 + "|" + npfy2[1] +  "|" )
    print("|"  + " First Half YoY%   " +   "|" + ns_yoyfy3[0] + "|" + op_yoyfy3[0] + "|" + "            "  + "|" + np_yoyfy3[0] + "|"  )
    print("+------------------------------------------------------------------------------+")

#print three quarters cumulative    
if x >= 3:
    print("|"  +  " First 3 Quarters  " +  "|" + nsfy2[2] + "|" + opfy2[2] + "|" + op_mgx1st3qb + "|" + npfy2[2] +  "|" )
    print("|"  + " First 3 Qtrs YoY% " +   "|" + ns_yoyfy3[1] + "|" + op_yoyfy3[1] + "|" + "            "  + "|" + np_yoyfy3[1] + "|"  )
    print("+------------------------------------------------------------------------------+")

#print fy cumulative
print("|"  +  rw1[4] +  "|" + nsfy2[0] + "|" + opfy2[0] + "|" + op_mgxfy2 + "|" + npfy2[0] +  "|" )
if x >= 4:
    print("|"  + rw1[7] +   "|" + ns_yoyfy3[2] + "|" + op_yoyfy3[2] + "|" + "            "  + "|" + np_yoyfy3[2] + "|"  )

#print forecasts
print("+------------------------------------------------------------------------------+") #border
print("|"  +  rw1[5] +  "|" + ns4[4] + "|" + op4[4] + "|" + op_mgxfyfc2 + "|" + np4[4] + "|")

#print 1st forecast revision
if x >= 2 and ns1[6] != 0:
    print("|"  +  " 1st FCST Revision " +  "|" + ns4[6] + "|" + op4[6] + "|" + op_mgxfyfcx1b + "|" + np4[6] + "|")

#print 2nd forecast revision    
if x >= 3 and ns1[7] != 0:
    print("|"  +  " 2nd FCST Revision " +  "|" + ns4[7] + "|" + op4[7] + "|" + op_mgxfyfcx2b + "|" + np4[7] + "|")

#print 3rd forecast revision    
if x >= 4 and ns1[8] != 0:
    print("|"  +  " 3rd FCST Revision " +  "|" + ns4[8] + "|" + op4[8] + "|" + op_mgxfyfcx3b + "|"+ np4[8] + "|")

#print next fiscal year's forecast    
if x >=4:
    print("+------------------------------------------------------------------------------+") #border
    print("|"  +  rw1[6] +  "|" + ns4[5] + "|" + op4[5] + "|" + op_mgxfynextfc2 + "|" + np4[5] + "|")
print("+------------------------------------------------------------------------------+") #border