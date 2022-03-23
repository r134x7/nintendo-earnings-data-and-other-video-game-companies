hd1 = [  "  Japan   ", "The Americas",  "  Europe   ", "   Other   ", " Switch Lite              ", " Switch Hardware          ", " Switch Software          ", " Switch OLED              ", " Switch                   "] #header
rw1 = [ " 1st Quarter (Units)      ", " 2nd Quarter (Units)      " ,  " 3rd Quarter (Units)      ",   " 4th Quarter (Units)      ", " First Half (Units)       ", " First 3 Quarters (Units) ", " FY3/22 Cumulative (Units)", " 1st Quarter YoY%         ", " 2nd Quarter YoY%         ", " 3rd Quarter YoY%         ", " 4th Quarter YoY%         ", " First Half YoY%          ", " First 3 Qtrs YoY%        ", " FY3/22 Cumulative YoY%   ", " 1st Quarter WW%          ", " 2nd Quarter WW%          ", " 3rd Quarter WW%          ", " 4th Quarter WW%          ", " First Half WW%           ", " First 3 Qtrs WW%         ", " FY3/22 Cumulative WW%    ", " Life-To-Date (Units)     ", " Life-To-Date WW%         " ] # row names, array length 23, [0] to [22]
linebreak = "###" # line break

x = 3 # x relates to the current earnings quarter, set to 1, 2, 3 or 4.

# Worldwide figures
nswog_ww1= [331 / 100, 645 / 100, 1179 / 100, 1179 / 100, 6989 / 100, " Switch                   "] # Input figures, Worldwide - Switch OG, [0] 1st quarter, [1] 2nd quarter, [2] 3rd quarter, [3] 4th quarter, [4] LTD at end of last fiscal year, [5] header title 
#+++++++++++++++++++++++++++++
nswl_ww1= [114 / 100, 182 / 100, 317 / 100, 317 / 100, 1470 / 100, " Switch Lite              "] # Input figures, Worldwide - Switch Lite, [0] 1st quarter, [1] 2nd quarter, [2] 3rd quarter, [3] 4th quarter, [4] LTD at end of last fiscal year, [5] header title 
#+++++++++++++++++++++++++++++
nswoled_ww1= [0 / 100, 0 / 100, 399 / 100, 399 / 100, 0 / 100, " Switch OLED              "] # Input figures, Worldwide - Switch OLED, [0] 1st quarter, [1] 2nd quarter, [2] 3rd quarter, [3] 4th quarter, [4] LTD at end of last fiscal year, [5] header title 
#+++++++++++++++++++++++++++++
nswhw_ww1= [445 / 100, 828 / 100, 1895 / 100, 1895 / 100, 8459 / 100, " Switch Hardware          "] # Input figures, Worldwide - Switch Hardware, [0] 1st quarter, [1] 2nd quarter, [2] 3rd quarter, [3] 4th quarter, [4] LTD at end of last fiscal year, [5] header title 
#+++++++++++++++++++++++++++++
nswsw_ww1= [4529 / 100, 9389 / 100, 17929 / 100, 17929 / 100, 58713 / 100, " Switch Software          "] # Input figures, Worldwide - Switch Software, [0] 1st quarter, [1] 2nd quarter, [2] 3rd quarter, [3] 4th quarter, [4] LTD at end of last fiscal year, [5] header title 
#+++++++++++++++++++++++++++++

# Japan figures
nswog_jp1= [83 / 100, 158 / 100, 235 / 100, 235 / 100, 1622 / 100] # Input figures, Japan - Switch OG, [0] 1st quarter, [1] 2nd quarter, [2] 3rd quarter, [3] 4th quarter, [4] LTD at end of last fiscal year 

nsw_ogjply1= [0.79, 1.14, 2.09, 0.76, 4.78] # Input last fiscal year's figures, Japan - Switch OG, [0] 1st quarter, [1] 2nd quarter, [2] 3rd quarter, [3] 4th quarter, [4] fy cumulative
#+++++++++++++++++++++++++++++
nswl_jp1= [34 / 100, 45 / 100, 91 / 100, 91 / 100, 381 / 100] # Input figures, Japan - Switch Lite, [0] 1st quarter, [1] 2nd quarter, [2] 3rd quarter, [3] 4th quarter, [4] LTD at end of last fiscal year

nsw_litejply1= [0.36, 0.44, 0.62, 0.39, 1.81 ] # Input last fiscal year's figures, Japan - Switch Lite, [0] 1st quarter, [1] 2nd quarter, [2] 3rd quarter, [3] 4th quarter, [4] fy cumulative
#+++++++++++++++++++++++++++++
nswoled_jp1= [0 / 100, 0 / 100, 107 / 100, 107 / 100, 0 / 100] # Input figures, Japan - Switch OLED, [0] 1st quarter, [1] 2nd quarter, [2] 3rd quarter, [3] 4th quarter, [4] LTD at end of last fiscal year

nsw_oledjply1= [0, 0, 0, 0, 0] # Input last fiscal year's figures, Japan - Switch OLED, [0] 1st quarter, [1] 2nd quarter, [2] 3rd quarter, [3] 4th quarter, [4] fy cumulative
#+++++++++++++++++++++++++++++
nswhw_jp1= [116 / 100, 203 / 100, 432 / 100, 432 / 100, 2004 / 100] # Input figures, Japan - Switch Hardware, [0] 1st quarter, [1] 2nd quarter, [2] 3rd quarter, [3] 4th quarter, [4] LTD at end of last fiscal year

nsw_hwjply1= [1.15, 1.58, 2.71, 1.16, 6.60 ] # Input last fiscal year's figures, Japan - Switch Hardware, [0] 1st quarter, [1] 2nd quarter, [2] 3rd quarter, [3] 4th quarter, [4] fy cumulative
#+++++++++++++++++++++++++++++
nswsw_jp1= [813 / 100, 1613 / 100, 3098 / 100, 3098 / 100, 11222 / 100] # Input figures, Japan - Switch Software, [0] 1st quarter, [1] 2nd quarter, [2] 3rd quarter, [3] 4th quarter, [4] LTD at end of last fiscal year 

nsw_swjply1= [10.02, 7.76, 13.91, 13.33, 45.02] # Input last fiscal year's figures, Japan - Switch Software, [0] 1st quarter, [1] 2nd quarter, [2] 3rd quarter, [3] 4th quarter, [4] fy cumulative
#+++++++++++++++++++++++++++++

# The Americas figures
nswog_ta1= [110 / 100, 215 / 100, 411 / 100, 411 / 100, 2686 / 100] # Input figures, The Americas - Switch OG, [0] 1st quarter, [1] 2nd quarter, [2] 3rd quarter, [3] 4th quarter, [4] LTD at end of last fiscal year

nsw_ogtaly1= [0.71, 1.88, 3.01, 1.47, 7.07] # Input last fiscal year's figures, The Americas - Switch OG, [0] 1st quarter, [1] 2nd quarter, [2] 3rd quarter, [3] 4th quarter, [4] fy cumulative
#+++++++++++++++++++++++++++++
nswl_ta1= [48 / 100, 89 / 100, 133 / 100, 133 / 100, 641 / 100] # Input figures, The Americas - Switch Lite, [0] 1st quarter, [1] 2nd quarter, [2] 3rd quarter, [3] 4th quarter, [4] LTD at end of last fiscal year

nsw_litetaly1= [1.28, 0.59, 1.58, 0.64, 4.09] # Input last fiscal year's figures, The Americas - Switch Lite, [0] 1st quarter, [1] 2nd quarter, [2] 3rd quarter, [3] 4th quarter, [4] fy cumulative
#+++++++++++++++++++++++++++++
nswoled_ta1= [0 / 100, 0 / 100, 141 / 100, 141 / 100, 0 / 100] # Input figures, The Americas - Switch OLED, [0] 1st quarter, [1] 2nd quarter, [2] 3rd quarter, [3] 4th quarter, [4] LTD at end of last fiscal year

nsw_oledtaly1= [0, 0, 0, 0, 0] # Input figures, The Americas - Switch OLED, [0] 1st quarter, [1] 2nd quarter, [2] 3rd quarter, [3] 4th quarter, [4] LTD at end of last fiscal year
#+++++++++++++++++++++++++++++
nswhw_ta1= [159 / 100, 304 / 100, 684 / 100, 684 / 100, 3327 / 100] # Input figures, The Americas - Switch Hardware, [0] 1st quarter, [1] 2nd quarter, [2] 3rd quarter, [3] 4th quarter, [4] LTD at end of last fiscal year

nsw_hwtaly1= [1.99, 2.47, 4.59, 2.10, 11.15 ] # Input last fiscal year's figures, The Americas - Switch Hardware, [0] 1st quarter, [1] 2nd quarter, [2] 3rd quarter, [3] 4th quarter, [4] fy cumulative
#+++++++++++++++++++++++++++++
nswsw_ta1= [2235 / 100, 4513 / 100, 8464 / 100, 8464 / 100, 26100 / 100] # Input figures, The Americas - Switch Software, [0] 1st quarter, [1] 2nd quarter, [2] 3rd quarter, [3] 4th quarter, [4] LTD at end of last fiscal year

nsw_swtaly1= [21.49, 24.10, 33.95, 22.88, 102.42] # Input last fiscal year's figures, The Americas - Switch Software, [0] 1st quarter, [1] 2nd quarter, [2] 3rd quarter, [3] 4th quarter, [4] fy cumulative
#+++++++++++++++++++++++++++++

# Europe figures
nswog_eu1= [82 / 100, 163 / 100, 375 / 100, 375 / 100, 1811 / 100] # Input figures, Europe - Switch OG, [0] 1st quarter, [1] 2nd quarter, [2] 3rd quarter, [3] 4th quarter, [4] LTD at end of last fiscal year

nsw_ogeuly1= [0.83, 1.33, 2.10, 0.76, 5.02] # Input last fiscal year's figures, Europe - Switch OG, [0] 1st quarter, [1] 2nd quarter, [2] 3rd quarter, [3] 4th quarter, [4] fy cumulative
#+++++++++++++++++++++++++++++
nswl_eu1= [26 / 100, 39 / 100, 75 / 100, 75 / 100, 347 / 100] # Input figures, Europe - Switch Lite, [0] 1st quarter, [1] 2nd quarter, [2] 3rd quarter, [3] 4th quarter, [4] LTD at end of last fiscal year

nsw_liteeuly1= [0.79, 0.35, 0.88, 0.11, 2.13] # Input last fiscal year's figures, Europe - Switch Lite, [0] 1st quarter, [1] 2nd quarter, [2] 3rd quarter, [3] 4th quarter, [4] fy cumulative
#+++++++++++++++++++++++++++++
nswoled_eu1= [0 / 100, 0 / 100, 91 / 100, 91 / 100, 0 / 100] # Input figures, Europe - Switch OLED, [0] 1st quarter, [1] 2nd quarter, [2] 3rd quarter, [3] 4th quarter, [4] LTD at end of last fiscal year

nsw_oledeuly1= [0, 0, 0, 0, 0] # Input figures, Europe - Switch OLED, [0] 1st quarter, [1] 2nd quarter, [2] 3rd quarter, [3] 4th quarter, [4] LTD at end of last fiscal year
#+++++++++++++++++++++++++++++
nswhw_eu1= [108 / 100, 202 / 100, 540 / 100, 540 / 100, 2158 / 100] # Input figures, Europe - Switch Hardware, [0] 1st quarter, [1] 2nd quarter, [2] 3rd quarter, [3] 4th quarter, [4] LTD at end of last fiscal year

nsw_hweuly1= [1.61, 1.70, 2.97, 0.87, 7.15] # Input last fiscal year's figures, Europe - Switch Hardware, [0] 1st quarter, [1] 2nd quarter, [2] 3rd quarter, [3] 4th quarter, [4] fy cumulative
#+++++++++++++++++++++++++++++
nswsw_eu1= [1135 / 100, 2563 / 100, 5085 / 100, 5085 / 100, 17215 / 100] # Input figures, Europe - Switch Software, [0] 1st quarter, [1] 2nd quarter, [2] 3rd quarter, [3] 4th quarter, [4] LTD at end of last fiscal year

nsw_sweuly1= [14.31, 14.22, 23.85, 13.86, 66.24] # Input last fiscal year's figures, Europe - Switch Software, [0] 1st quarter, [1] 2nd quarter, [2] 3rd quarter, [3] 4th quarter, [4] fy cumulative
#+++++++++++++++++++++++++++++

# Other figures
nswog_other1= [56 / 100, 109 / 100, 159 / 100, 159 / 100, 870 / 100] # Input figures, Other - Switch OG, [0] 1st quarter, [1] 2nd quarter, [2] 3rd quarter, [3] 4th quarter, [4] LTD at end of last fiscal year

nsw_ogotherly1= [0.73, 0.95, 1.21, 0.56, 3.45] # Input last fiscal year's figures, Other - Switch OG, [0] 1st quarter, [1] 2nd quarter, [2] 3rd quarter, [3] 4th quarter, [4] fy cumulative
#+++++++++++++++++++++++++++++
nswl_other1= [5 / 100, 10 / 100, 18 / 100, 18 / 100, 101 / 100] # Input figures, Other - Switch Lite, [0] 1st quarter, [1] 2nd quarter, [2] 3rd quarter, [3] 4th quarter, [4] LTD at end of last fiscal year

nsw_liteotherly1= [0.20, 0.16, 0.09, 0.03, 0.48] # Input last fiscal year's figures, Other - Switch Lite, [0] 1st quarter, [1] 2nd quarter, [2] 3rd quarter, [3] 4th quarter, [4] fy cumulative
#+++++++++++++++++++++++++++++
nswoled_other1= [0 / 100, 0 / 100, 61 / 100, 61 / 100, 0 / 100] # Input figures, Other - Switch OLED, [0] 1st quarter, [1] 2nd quarter, [2] 3rd quarter, [3] 4th quarter, [4] LTD at end of last fiscal year

nsw_oledotherly1= [0, 0, 0, 0, 0] # Input figures, Other - Switch OLED, [0] 1st quarter, [1] 2nd quarter, [2] 3rd quarter, [3] 4th quarter, [4] LTD at end of last fiscal year
#+++++++++++++++++++++++++++++
nswhw_other1= [62 / 100, 119 / 100, 238 / 100, 238 / 100, 971 / 100] # Input figures, Other - Switch Hardware, [0] 1st quarter, [1] 2nd quarter, [2] 3rd quarter, [3] 4th quarter, [4] LTD at end of last fiscal year

nsw_hwotherly1= [0.92, 1.12, 1.29, 0.60, 3.93] # Input last fiscal year's figures, Other - Switch Hardware, [0] 1st quarter, [1] 2nd quarter, [2] 3rd quarter, [3] 4th quarter, [4] fy cumulative
#+++++++++++++++++++++++++++++
nswsw_other1= [346 / 100, 700 / 100, 1283 / 100, 1283 / 100, 4174 / 100] # Input figures, Other - Switch Software, [0] 1st quarter, [1] 2nd quarter, [2] 3rd quarter, [3] 4th quarter, [4] LTD at end of last fiscal year

nsw_swotherly1= [4.62, 3.72, 4.16, 4.70, 17.20] # Input last fiscal year's figures, Other - Switch Software, [0] 1st quarter, [1] 2nd quarter, [2] 3rd quarter, [3] 4th quarter, [4] fy cumulative
#+++++++++++++++++++++++++++++

def c_print (y, z, a, b, delta, ly, lz, la, lb): # y: use japan, z: use the americas, a: use europe, b: use other, delta: use worldwide, ly: last fy japan, lz; last fy the americas, la: last fy europe, lb: last fy other

    y1, z1, a1, b1, delta1 = [y[0], y[1] - y[0], y[2] - y[1], y[3] - y[2]], [z[0], z[1] - z[0], z[2] - z[1], z[3] - z[2]], [a[0], a[1] - a[0], a[2] - a[1], a[3] - a[2]], [b[0], b[1] - b[0], b[2] - b[1], b[3] - b[2]], [delta[0], delta[1] - delta[0], delta[2] - delta[1], delta[3] - delta[2]] #quarterly calculation

    y1.append(y1[0] + y1[1]), y1.append(y1[0] + y1[1] + y1[2]), y1.append(y1[0] + y1[1] + y1[2] + y1[3]), y1.append(y1[0] + y1[1] + y1[2] + y1[3] + y[4]) # adds [4] first half, [5] first three quarters, [6] fy cumulative, [7] LTD 
    z1.append(z1[0] + z1[1]), z1.append(z1[0] + z1[1] + z1[2]), z1.append(z1[0] + z1[1] + z1[2] + z1[3]), z1.append(z1[0] + z1[1] + z1[2] + z1[3] + z[4]) # adds [4] first half, [5] first three quarters, [6] fy cumulative, [7] LTD
    a1.append(a1[0] + a1[1]), a1.append(a1[0] + a1[1] + a1[2]), a1.append(a1[0] + a1[1] + a1[2] + a1[3]), a1.append(a1[0] + a1[1] + a1[2] + a1[3] + a[4]) # adds [4] first half, [5] first three quarters, [6] fy cumulative, [7] LTD 
    b1.append(b1[0] + b1[1]), b1.append(b1[0] + b1[1] + b1[2]), b1.append(b1[0] + b1[1] + b1[2] + b1[3]), b1.append(b1[0] + b1[1] + b1[2] + b1[3] + b[4]) # adds [4] first half, [5] first three quarters, [6] fy cumulative, [7] LTD 
    delta1.append(delta1[0] + delta1[1]), delta1.append(delta1[0] + delta1[1] + delta1[2]), delta1.append(delta1[0] + delta1[1] + delta1[2] + delta1[3]), delta1.append(delta1[0] + delta1[1] + delta1[2] + delta1[3] + delta[4]) # adds [4] first half, [5] first three quarters, [6] fy cumulative, [7] LTD 

    y2, z2, a2, b2 = ['{:.2f}M '.format(elem) for elem in y1], ['{:.2f}M '.format(elem) for elem in z1], ['{:.2f}M '.format(elem) for elem in a1], ['{:.2f}M '.format(elem) for elem in b1] # format

    y3, z3, a3, b3 = ['{0: >10}'.format(elem) for elem in y2], ['{0: >12}'.format(elem) for elem in z2], ['{0: >11}'.format(elem) for elem in a2], ['{0: >11}'.format(elem) for elem in b2] # format width

    ly1, lz1, la1, lb1 = [], [], [], [] # empty arrays for calculating YoY percentages, [0] 1st quarter, [1] 2nd quarter, [2] 3rd quarter, [3] 4th quarter, [4] 1st half, [5] first three quarters, [6] fy cumulative

    for i in range (4): #for dealing with divide by zeros
            if range (i) == range (0):
                for i in range (4):
                    if ly[i] != 0: 
                        ly1.append(((y1[i] / ly[i]) - 1) * 100)
                    else: ly1.append(0)
                if ly[0] + ly[1] != 0:
                            ly1.append((((y1[0] + y1[1]) / (ly[0] + ly[1])) - 1) * 100)
                else: ly1.append(0)
                if ly[0] + ly[1] + ly[2] != 0:
                            ly1.append((((y1[0] + y1[1] + y1[2]) / (ly[0] + ly[1] + ly[2])) - 1) * 100)
                else: ly1.append(0)
                if ly[4] != 0:
                            ly1.append(((y1[6] / ly[4]) - 1) * 100)
                else: ly1.append(0)
            elif range (i) == range (1):
                for i in range (4):
                    if lz[i] != 0: 
                        lz1.append(((z1[i] / lz[i]) - 1) * 100)
                    else: lz1.append(0)
                if lz[0] + lz[1] != 0:
                            lz1.append((((z1[0] + z1[1]) / (lz[0] + lz[1])) - 1) * 100)
                else: lz1.append(0)
                if lz[0] + lz[1] + lz[2] != 0:
                            lz1.append((((z1[0] + z1[1] + z1[2]) / (lz[0] + lz[1] + lz[2])) - 1) * 100)
                else: lz1.append(0)
                if lz[4] != 0:
                            lz1.append(((z1[6] / lz[4]) - 1) * 100)
                else: lz1.append(0)
            elif range (i) == range (2):
                for i in range (4):
                    if la[i] != 0: 
                        la1.append(((a1[i] / la[i]) - 1) * 100)
                    else: la1.append(0)
                if la[0] + la[1] != 0:
                            la1.append((((a1[0] + a1[1]) / (la[0] + la[1])) - 1) * 100)
                else: la1.append(0)
                if la[0] + la[1] + la[2] != 0:
                            la1.append((((a1[0] + a1[1] + a1[2]) / (la[0] + la[1] + la[2])) - 1) * 100)
                else: la1.append(0)
                if la[4] != 0:
                            la1.append(((a1[6] / la[4]) - 1) * 100)
                else: la1.append(0)
            elif range (i) == range (3):
                for i in range (4):
                    if lb[i] != 0: 
                        lb1.append(((b1[i] / lb[i]) - 1) * 100)
                    else: lb1.append(0)
                if lb[0] + lb[1] != 0:
                            lb1.append((((b1[0] + b1[1]) / (lb[0] + lb[1])) - 1) * 100)
                else: lb1.append(0)
                if lb[0] + lb[1] + lb[2] != 0:
                            lb1.append((((b1[0] + b1[1] + b1[2]) / (lb[0] + lb[1] + lb[2])) - 1) * 100)
                else: lb1.append(0)
                if lb[4] != 0:
                            lb1.append(((b1[6] / lb[4]) - 1) * 100)
                else: lb1.append(0)

    ly2, lz2, la2, lb2 = ['{:+.2f}% '.format(elem) for elem in ly1], ['{:+.2f}% '.format(elem) for elem in lz1], ['{:+.2f}% '.format(elem) for elem in la1], ['{:+.2f}% '.format(elem) for elem in lb1] # format YoY percentages

    ly3, lz3, la3, lb3 = ['{0: >10}'.format(elem) for elem in ly2], ['{0: >12}'.format(elem) for elem in lz2], ['{0: >11}'.format(elem) for elem in la2], ['{0: >11}'.format(elem) for elem in lb2] # format width for YoY percentages

    d1, e1, f1, g1 = [], [], [], [] # empty arrays for regional percentages, they will become: [0] 1st quarter, [1] 2nd quarter, [2] 3rd quarter, [3] 4th quarter, [4] 1st half, [5] first three quarters, [6] fy cumulative, [7] LTD

    for i in range (4): #for dealing with divide by zeros
            if range (i) == range (0):
                for i in range (8):
                    if delta1[i] != 0:
                        d1.append((y1[i] / delta1[i]) * 100)
                    else:  d1.append(0)
            elif range (i) == range (1):
                for i in range (8):
                    if delta1[i] != 0:
                        e1.append((z1[i] / delta1[i]) * 100)
                    else:  e1.append(0)
            elif range (i) == range (2):
                for i in range (8):
                    if delta1[i] != 0:
                        f1.append((a1[i] / delta1[i]) * 100)
                    else:  f1.append(0)
            elif range (i) == range (3):
                for i in range (8):
                    if delta1[i] != 0:
                        g1.append((b1[i] / delta1[i]) * 100)
                    else:  g1.append(0)

    d2, e2, f2, g2 = ['{:.2f}% '.format(elem) for elem in d1], ['{:.2f}% '.format(elem) for elem in e1], ['{:.2f}% '.format(elem) for elem in f1], ['{:.2f}% '.format(elem) for elem in g1] # format percentages of regional percentages

    d3, e3, f3, g3 = ['{0: >10}'.format(elem) for elem in d2], ['{0: >12}'.format(elem) for elem in e2], ['{0: >11}'.format(elem) for elem in f2], ['{0: >11}'.format(elem) for elem in g2] # format width of regional percentages

    print("+--------------------------------------------------------------------------+")
    print("|" + delta[5] + "|" + hd1[0] + "|" + hd1[1] +"|" + hd1[2] + "|" + hd1[3] + "|")
    # print("+--------------------------------------------------------------------------+")
    for i in range(x):
        if delta1[i] != 0:
            print("+--------------------------------------------------------------------------+")
            print("|"  +  rw1[i] +  "|" + y3[i] + "|" + z3[i] + "|" + a3[i] +  "|" +  b3[i] + "|" )
        if delta1[i] != 0 and ly1[i] and lz1[i] and la1[i] and lb1[i] != 0:
            print("|"  +  rw1[i+7] +  "|" + ly3[i] + "|" + lz3[i] + "|" + la3[i] +  "|" +  lb3[i] + "|")
        if delta1[i] != 0:
            print("|"  + rw1[i+14] +   "|" + d3[i] + "|" + e3[i] + "|" + f3[i] + "|" + g3[i] + "|")
    else: 
        print("+==========================================================================+") #border
        if x >= 2 and delta1[4] != 0:
            print("|"  +  rw1[4] +  "|" + y3[4] + "|" + z3[4] + "|" + a3[4] +  "|" +  b3[4] + "|" )
        if x >= 2 and delta1[4] != 0 and ly1[4] and lz1[4] and la1[4] and lb1[4] != 0:
            print("|"  +  rw1[11] +  "|" + ly3[4] + "|" + lz3[4] + "|" + la3[4] +  "|" +  lb3[4] + "|")
        if x >= 2 and delta1[4] != 0:    
            print("|"  + rw1[18] +   "|" + d3[4] + "|" + e3[4] + "|" + f3[4] + "|" + g3[4] + "|")
            print("+--------------------------------------------------------------------------+")
        if x >= 3 and delta1[5] != 0:
            print("|"  +  rw1[5] +  "|" + y3[5] + "|" + z3[5] + "|" + a3[5] +  "|" +  b3[5] + "|" )
        if x >= 3 and delta1[5] != 0 and ly1[5] and lz1[5] and la1[5] and lb1[5] != 0:
            print("|"  +  rw1[12] +  "|" + ly3[5] + "|" + lz3[5] + "|" + la3[5] +  "|" +  lb3[5] + "|")
        if x >= 3 and delta1[5] != 0:    
            print("|"  + rw1[19] +   "|" + d3[5] + "|" + e3[5] + "|" + f3[5] + "|" + g3[5] + "|")
            print("+--------------------------------------------------------------------------+")
        print("|"  +  rw1[6] +  "|" + y3[6] + "|" + z3[6] + "|" + a3[6] +  "|" +  b3[6] + "|" )
        if x == 4 and ly1[6] and lz1[6] and la1[6] and lb1[6] != 0:
            print("|"  +  rw1[13] +  "|" + ly3[6] + "|" + lz3[6] + "|" + la3[6] +  "|" +  lb3[6] + "|")    
        print("|"  + rw1[20] +   "|" + d3[6] + "|" + e3[6] + "|" + f3[6] + "|" + g3[6] + "|")
        print("+--------------------------------------------------------------------------+")
        print("|"  +  rw1[21] +  "|" + y3[7] + "|" + z3[7] + "|" + a3[7] +  "|" +  b3[7] + "|" )
        print("|"  + rw1[22] +   "|" + d3[7] + "|" + e3[7] + "|" + f3[7] + "|" + g3[7] + "|")
        print("+--------------------------------------------------------------------------+") #border
        print(linebreak)

    return

c_print(nswog_jp1, nswog_ta1, nswog_eu1, nswog_other1, nswog_ww1, nsw_ogjply1, nsw_ogtaly1, nsw_ogeuly1, nsw_ogotherly1)
c_print(nswl_jp1, nswl_ta1, nswl_eu1, nswl_other1, nswl_ww1, nsw_litejply1, nsw_litetaly1, nsw_liteeuly1, nsw_liteotherly1)
c_print(nswoled_jp1, nswoled_ta1, nswoled_eu1, nswoled_other1, nswoled_ww1, nsw_oledjply1, nsw_oledtaly1, nsw_oledeuly1, nsw_oledotherly1)
c_print(nswhw_jp1, nswhw_ta1, nswhw_eu1, nswhw_other1, nswhw_ww1, nsw_hwjply1, nsw_hwtaly1, nsw_hweuly1, nsw_hwotherly1)
c_print(nswsw_jp1, nswsw_ta1, nswsw_eu1, nswsw_other1, nswsw_ww1, nsw_swjply1, nsw_swtaly1, nsw_sweuly1, nsw_swotherly1)

# Old code++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
# #Worldwide - Switch OG
# nswog_ww1= [ 331 / 100, 645 / 100, 1179 / 100, 1179 / 100, 6989 / 100]
# #Q1-4, LTD at end of last fy
# #+++++++++++++++++++++++++++++
# nswog_ww2 = [ nswog_ww1[0], nswog_ww1[1]  - nswog_ww1[0], nswog_ww1[2] - nswog_ww1[1], nswog_ww1[3] - nswog_ww1[2] ] #quarterly calculation

# #print(nswog_ww2)
# nswog_ww3 = [ '{:.2f}M '.format(elem) for elem in nswog_ww2 ] #format all integers to string to add  and M

# nswog_ww4 = [ '{0: >11}'.format(elem) for elem in nswog_ww3] #format width

# #print(nswog_ww4)

# nswog_wwfyltd = [ nswog_ww2[0] + nswog_ww2[1] + nswog_ww2[2] +nswog_ww2[3] , nswog_ww1[4] + nswog_ww2[0] + nswog_ww2[1] + nswog_ww2[2] +nswog_ww2[3],  nswog_ww2[0] + nswog_ww2[1],  nswog_ww2[0] + nswog_ww2[1] + nswog_ww2[2]]  #+ fiscal year cumulative, ltd, first half, first three quarters

# nswog_wwfyltd1 = [ '{:.2f}M '.format(elem) for elem in nswog_wwfyltd ] #format all integers to string to add  and M

# nswog_wwfyltd2 = [ '{0: >11}'.format(elem) for elem in nswog_wwfyltd1] #format width

# #last years numbers - Switch OG WW
# nsw_ogly1= [ 3.05, 5.31, 8.41, 3.55, 20.32 ] #Q1-4, fy.

# nsw_ogly2 = [ ((nswog_ww2[0] / nsw_ogly1[0]) - 1) * 100, ((nswog_ww2[1] / nsw_ogly1[1]) -1) *100, ((nswog_ww2[2] / nsw_ogly1[2]) - 1) * 100,  ((nswog_ww2[3] / nsw_ogly1[3]) - 1) * 100]

# nsw_ogly3 = [ '{:+.2f}% '.format(elem) for elem in nsw_ogly2 ] #format all integers to string to add  and M

# nsw_ogly4 = [ '{0: >11}'.format(elem) for elem in nsw_ogly3]
# #format width

# nsw_ogyoyfy1 = [  (((nswog_ww2[0] + nswog_ww2[1]) / (nsw_ogly1[0] + nsw_ogly1[1])) - 1) * 100, (((nswog_ww2[0] + nswog_ww2[1] + nswog_ww2[2]) / (nsw_ogly1[0] + nsw_ogly1[1] + nsw_ogly1[2])) - 1) * 100, ((nswog_wwfyltd[0] / nsw_ogly1[4]) - 1) * 100] #first half, first three quarters, fy cumulative

# nsw_ogyoyfy2 = [ '{:+.2f}% '.format(elem) for elem in nsw_ogyoyfy1 ] #format all integers to string to add  and M

# nsw_ogyoyfy3 = [ '{0: >11}'.format(elem) for elem in nsw_ogyoyfy2] #format width

# #Worldwide - Switch Lite
# nswl_ww1= [ 114 / 100, 182 / 100, 317 / 100, 317 / 100, 1470 / 100]
# #Q1-4, LTD at end of last fy
# #+++++++++++++++++++++++++++++
# nswl_ww2 = [ nswl_ww1[0], nswl_ww1[1]  - nswl_ww1[0], nswl_ww1[2] - nswl_ww1[1], nswl_ww1[3] - nswl_ww1[2] ] #quarterly calculation

# #print(nswl_ww2)
# nswl_ww3 = [ '{:.2f}M '.format(elem) for elem in nswl_ww2 ] #format all integers to string to add  and M

# nswl_ww4 = [ '{0: >11}'.format(elem) for elem in nswl_ww3] #format width

# #print(nswl_ww4)

# nswl_wwfyltd = [ nswl_ww2[0] + nswl_ww2[1] + nswl_ww2[2] +nswl_ww2[3] , nswl_ww1[4] + nswl_ww2[0] + nswl_ww2[1] + nswl_ww2[2] +nswl_ww2[3],  nswl_ww2[0] + nswl_ww2[1],  nswl_ww2[0] + nswl_ww2[1] + nswl_ww2[2]]  #+ fiscal year cumulative, ltd, first half, first three quarters

# nswl_wwfyltd1 = [ '{:.2f}M '.format(elem) for elem in nswl_wwfyltd ] #format all integers to string to add  and M

# nswl_wwfyltd2 = [ '{0: >11}'.format(elem) for elem in nswl_wwfyltd1] #format width

# #last years numbers - Switch Lite WW
# nsw_litely1= [ 2.62, 1.55, 3.16, 1.18, 8.51 ] #Q1-4, fy.

# nsw_litely2 = [ ((nswl_ww2[0] / nsw_litely1[0]) - 1) * 100, ((nswl_ww2[1] / nsw_litely1[1]) -1) *100, ((nswl_ww2[2] / nsw_litely1[2]) - 1) * 100,  ((nswl_ww2[3] / nsw_litely1[3]) - 1) * 100]

# nsw_litely3 = [ '{:+.2f}% '.format(elem) for elem in nsw_litely2 ] #format all integers to string to add  and M

# nsw_litely4 = [ '{0: >11}'.format(elem) for elem in nsw_litely3]
# #format width

# nsw_liteyoyfy1 = [  (((nswl_ww2[0] + nswl_ww2[1]) / (nsw_litely1[0] + nsw_litely1[1])) - 1) * 100, (((nswl_ww2[0] + nswl_ww2[1] + nswl_ww2[2]) / (nsw_litely1[0] + nsw_litely1[1] + nsw_litely1[2])) - 1) * 100, ((nswl_wwfyltd[0] / nsw_litely1[4]) - 1) * 100] #first half, first three quarters, fy cumulative

# nsw_liteyoyfy2 = [ '{:+.2f}% '.format(elem) for elem in nsw_liteyoyfy1 ] #format all integers to string to add  and M

# nsw_liteyoyfy3 = [ '{0: >11}'.format(elem) for elem in nsw_liteyoyfy2] #format width

# #Worldwide - Switch OLED
# nswoled_ww1= [ 1 / 100, 2 / 100, 399 / 100, 399 / 100, 0 / 100]
# #Q1-4, LTD at end of last fy
# #+++++++++++++++++++++++++++++
# nswoled_ww2 = [ nswoled_ww1[0], nswoled_ww1[1]  - nswoled_ww1[0], nswoled_ww1[2] - nswoled_ww1[1], nswoled_ww1[3] - nswoled_ww1[2] ] #quarterly calculation

# #print(nswoled_ww2)
# nswoled_ww3 = [ '{:.2f}M '.format(elem) for elem in nswoled_ww2 ] #format all integers to string to add  and M

# nswoled_ww4 = [ '{0: >10}'.format(elem) for elem in nswoled_ww3] #format width

# #print(nswoled_ww4)

# nswoled_wwfyltd = [ nswoled_ww2[0] + nswoled_ww2[1] + nswoled_ww2[2] +nswoled_ww2[3] , nswoled_ww1[4] + nswoled_ww2[0] + nswoled_ww2[1] + nswoled_ww2[2] +nswoled_ww2[3],  nswoled_ww2[0] + nswoled_ww2[1],  nswoled_ww2[0] + nswoled_ww2[1] + nswoled_ww2[2]]  #+ fiscal year cumulative, ltd, first half, first three quarters

# nswoled_wwfyltd1 = [ '{:.2f}M '.format(elem) for elem in nswoled_wwfyltd ] #format all integers to string to add  and M

# nswoled_wwfyltd2 = [ '{0: >10}'.format(elem) for elem in nswoled_wwfyltd1] #format width

# #last years numbers for WW are not required
# #last years numbers - Switch OLED WW
# nswoledly1= [ 2.62, 1.55, 3.16, 1.18, 8.51 ] #Q1-4, fy.

# nswoledly2 = [ ((nswoled_ww2[0] / nswoledly1[0]) - 1) * 100, ((nswoled_ww2[1] / nswoledly1[1]) -1) *100, ((nswoled_ww2[2] / nswoledly1[2]) - 1) * 100,  ((nswoled_ww2[3] / nswoledly1[3]) - 1) * 100]

# nswoledly3 = [ '{:+.2f}% '.format(elem) for elem in nswoledly2 ] #format all integers to string to add  and M

# nswoledly4 = [ '{0: >11}'.format(elem) for elem in nswoledly3]
# #format width

# nswoledyoyfy1 = [  (((nswoled_ww2[0] + nswoled_ww2[1]) / (nswoledly1[0] + nswoledly1[1])) - 1) * 100, (((nswoled_ww2[0] + nswoled_ww2[1] + nswoled_ww2[2]) / (nswoledly1[0] + nswoledly1[1] + nswoledly1[2])) - 1) * 100, ((nswoled_wwfyltd[0] / nswoledly1[4]) - 1) * 100] #first half, first three quarters, fy cumulative

# nswoledyoyfy2 = [ '{:+.2f}% '.format(elem) for elem in nswoledyoyfy1 ] #format all integers to string to add  and M

# nswoledyoyfy3 = [ '{0: >11}'.format(elem) for elem in nswoledyoyfy2] #format width

# #Worldwide - Switch Hardware
# nswhw_ww1= [ 445 / 100, 828 / 100, 1895 / 100, 1895 / 100, 8459 / 100]
# #Q1-4, LTD at end of last fy
# #+++++++++++++++++++++++++++++
# nswhw_ww2 = [ nswhw_ww1[0], nswhw_ww1[1]  - nswhw_ww1[0], nswhw_ww1[2] - nswhw_ww1[1], nswhw_ww1[3] - nswhw_ww1[2]] #quarterly calculation

# nswhw_ww3 = [ '{:.2f}M '.format(elem) for elem in nswhw_ww2 ] #format all integers to string to add  and M

# nswhw_ww4 = [ '{0: >10}'.format(elem) for elem in nswhw_ww3] #format width

# nswhw_wwfyltd = [ nswhw_ww2[0] + nswhw_ww2[1] + nswhw_ww2[2] +nswhw_ww2[3] , nswhw_ww1[4] + nswhw_ww2[0] + nswhw_ww2[1] + nswhw_ww2[2] +nswhw_ww2[3],  nswhw_ww2[0] + nswhw_ww2[1],  nswhw_ww2[0] + nswhw_ww2[1] + nswhw_ww2[2]]  #+ fiscal year cumulative, ltd, first half, first three quarters

# nswhw_wwfyltd1 = [ '{:.2f}M '.format(elem) for elem in nswhw_wwfyltd ] #format all integers to string to add  and M

# nswhw_wwfyltd2 = [ '{0: >10}'.format(elem) for elem in nswhw_wwfyltd1] #format width

# #Worldwide - Switch Software
# nswsw_ww1= [ 4529 / 100, 9389 / 100, 17929 / 100, 17929 / 100, 58713 / 100]
# #Q1-4, LTD at end of last fy
# #+++++++++++++++++++++++++++++
# nswsw_ww2 = [ nswsw_ww1[0], nswsw_ww1[1]  - nswsw_ww1[0], nswsw_ww1[2] - nswsw_ww1[1], nswsw_ww1[3] - nswsw_ww1[2]] #quarterly calculation 

# nswsw_ww3 = [ '{:.2f}M '.format(elem) for elem in nswsw_ww2 ] #format all integers to string to add  and M

# nswsw_ww4 = [ '{0: >10}'.format(elem) for elem in nswsw_ww3] #format width

# nswsw_wwfyltd = [ nswsw_ww2[0] + nswsw_ww2[1] + nswsw_ww2[2] +nswsw_ww2[3] , nswsw_ww1[4] + nswsw_ww2[0] + nswsw_ww2[1] + nswsw_ww2[2] +nswsw_ww2[3],  nswsw_ww2[0] + nswsw_ww2[1],  nswsw_ww2[0] + nswsw_ww2[1] + nswsw_ww2[2]]  #+ fiscal year cumulative, ltd, first half, first three quarters

# nswsw_wwfyltd1 = [ '{:.2f}M '.format(elem) for elem in nswsw_wwfyltd ] #format all integers to string to add  and M

# nswsw_wwfyltd2 = [ '{0: >10}'.format(elem) for elem in nswsw_wwfyltd1] #format width

# # Japan - Switch OG
# nswog_jp1= [ 83 / 100, 158 / 100, 235 / 100, 235 / 100, 1622 / 100]
# #Q1-4, LTD at end of last fy
# #+++++++++++++++++++++++++++++
# nswog_jp2 = [ nswog_jp1[0], nswog_jp1[1]  - nswog_jp1[0], nswog_jp1[2] - nswog_jp1[1], nswog_jp1[3] - nswog_jp1[2]] #quarterly calculation

# nswog_jp3 = [ '{:.2f}M '.format(elem) for elem in nswog_jp2 ] #format all integers to string to add  and M

# nswog_jp4 = [ '{0: >10}'.format(elem) for elem in nswog_jp3] #format width

# nswog_jpfyltd = [ nswog_jp2[0] + nswog_jp2[1] + nswog_jp2[2] +nswog_jp2[3] , nswog_jp1[4] + nswog_jp2[0] + nswog_jp2[1] + nswog_jp2[2] +nswog_jp2[3], nswog_jp2[0] + nswog_jp2[1],  nswog_jp2[0] + nswog_jp2[1] + nswog_jp2[2]]  #+ fiscal year cumulative at end, ltd, first half, first three quarters

# nswog_jpfyltd1 = [ '{:.2f}M '.format(elem) for elem in nswog_jpfyltd ] #format all integers to string to add  and M

# nswog_jpfyltd2 = [ '{0: >10}'.format(elem) for elem in nswog_jpfyltd1] #format width

# #percentages
# if x >= 1:
#     nswog_jppcx1 = (nswog_jp2[0] / nswog_ww2[0])  *100
#     nswog_jppcx1a =  '{:.2f}% '.format(nswog_jppcx1) 
#     nswog_jppcx1b =  '{0: >10}'.format(nswog_jppcx1a)
# if x >= 2:
#     nswog_jppcx2 = (nswog_jp2[1] / nswog_ww2[1]) * 100
#     nswog_jppcx2a =  '{:.2f}% '.format(nswog_jppcx2) 
#     nswog_jppcx2b =  '{0: >10}'.format(nswog_jppcx2a)
# if x >= 3:
#     nswog_jppcx3 = (nswog_jp2[2] / nswog_ww2[2]) * 100
#     nswog_jppcx3a =  '{:.2f}% '.format(nswog_jppcx3) 
#     nswog_jppcx3b =  '{0: >10}'.format(nswog_jppcx3a)
# if x >=4:
#     nswog_jppcx4 = (nswog_jp2[3] / nswog_ww2[3]) * 100
#     nswog_jppcx4a =  '{:.2f}% '.format(nswog_jppcx4) 
#     nswog_jppcx4b =  '{0: >10}'.format(nswog_jppcx4a)

    
# nswog_jppcxfy =   (nswog_jpfyltd[0] / nswog_wwfyltd[0]) * 100
# nswog_jppcxfy1 =  '{:.2f}% '.format(nswog_jppcxfy) 
# nswog_jppcxfy2 =  '{0: >10}'.format(nswog_jppcxfy1) #fy %

# nswog_jppcxltd =   (nswog_jpfyltd[1] / nswog_wwfyltd[1]) * 100 
# nswog_jppcxltd1 =  '{:.2f}% '.format(nswog_jppcxltd) 
# nswog_jppcxltd2 =  '{0: >10}'.format(nswog_jppcxltd1) #ltd %

# nswog_jppcxfhalf =   (nswog_jpfyltd[2] / nswog_wwfyltd[2]) * 100
# nswog_jppcxfhalf1 =  '{:.2f}% '.format(nswog_jppcxfhalf) 
# nswog_jppcxfhalf2 =  '{0: >10}'.format(nswog_jppcxfhalf1) #first half %

# nswog_jppcxf3q =   (nswog_jpfyltd[3] / nswog_wwfyltd[3]) * 100
# nswog_jppcxf3q1 =  '{:.2f}% '.format(nswog_jppcxf3q) 
# nswog_jppcxf3q2 =  '{0: >10}'.format(nswog_jppcxf3q1) #first 3 quarters %

# #last years numbers - Switch OG JP
# nsw_ogjply1= [ 0.79, 1.14, 2.09, 0.76, 4.78 ] #Q1-4, fy.

# nsw_ogjply2 = [ ((nswog_jp2[0] / nsw_ogjply1[0]) - 1) * 100, ((nswog_jp2[1] / nsw_ogjply1[1]) -1) *100, ((nswog_jp2[2] / nsw_ogjply1[2]) - 1) * 100,  ((nswog_jp2[3] / nsw_ogjply1[3]) - 1) * 100]

# nsw_ogjply3 = [ '{:+.2f}% '.format(elem) for elem in nsw_ogjply2 ] #format all integers to string to add  and M

# nsw_ogjply4 = [ '{0: >10}'.format(elem) for elem in nsw_ogjply3]
# #format width

# nsw_ogjpyoyfy1 = [  (((nswog_jp2[0] + nswog_jp2[1]) / (nsw_ogjply1[0] + nsw_ogjply1[1])) - 1) * 100, (((nswog_jp2[0] + nswog_jp2[1] + nswog_jp2[2]) / (nsw_ogjply1[0] + nsw_ogjply1[1] + nsw_ogjply1[2])) - 1) * 100, ((nswog_jpfyltd[0] / nsw_ogjply1[4]) - 1) * 100] #first half, first three quarters, fy cumulative

# nsw_ogjpyoyfy2 = [ '{:+.2f}% '.format(elem) for elem in nsw_ogjpyoyfy1 ] #format all integers to string to add  and M

# nsw_ogjpyoyfy3 = [ '{0: >10}'.format(elem) for elem in nsw_ogjpyoyfy2] #format width

# # Japan - Switch Lite
# nswl_jp1= [ 34 / 100, 45 / 100, 91 / 100, 91 / 100, 381 / 100]
# #Q1-4, LTD at end of last fy
# #+++++++++++++++++++++++++++++
# nswl_jp2 = [ nswl_jp1[0], nswl_jp1[1]  - nswl_jp1[0], nswl_jp1[2] - nswl_jp1[1], nswl_jp1[3] - nswl_jp1[2]] #quarterly calculation

# nswl_jp3 = [ '{:.2f}M '.format(elem) for elem in nswl_jp2 ] #format all integers to string to add  and M

# nswl_jp4 = [ '{0: >10}'.format(elem) for elem in nswl_jp3] #format width

# nswl_jpfyltd = [ nswl_jp2[0] + nswl_jp2[1] + nswl_jp2[2] +nswl_jp2[3] , nswl_jp1[4] + nswl_jp2[0] + nswl_jp2[1] + nswl_jp2[2] +nswl_jp2[3], nswl_jp2[0] + nswl_jp2[1],  nswl_jp2[0] + nswl_jp2[1] + nswl_jp2[2]]  #+ fiscal year cumulative at end, ltd, first half, first three quarters

# nswl_jpfyltd1 = [ '{:.2f}M '.format(elem) for elem in nswl_jpfyltd ] #format all integers to string to add  and M

# nswl_jpfyltd2 = [ '{0: >10}'.format(elem) for elem in nswl_jpfyltd1] #format width

# #percentages
# if x >= 1:
#     nswl_jppcx1 = (nswl_jp2[0] / nswl_ww2[0])  *100
#     nswl_jppcx1a =  '{:.2f}% '.format(nswl_jppcx1) 
#     nswl_jppcx1b =  '{0: >10}'.format(nswl_jppcx1a)
# if x >= 2:
#     nswl_jppcx2 = (nswl_jp2[1] / nswl_ww2[1]) * 100
#     nswl_jppcx2a =  '{:.2f}% '.format(nswl_jppcx2) 
#     nswl_jppcx2b =  '{0: >10}'.format(nswl_jppcx2a)
# if x >= 3:
#     nswl_jppcx3 = (nswl_jp2[2] / nswl_ww2[2]) * 100
#     nswl_jppcx3a =  '{:.2f}% '.format(nswl_jppcx3) 
#     nswl_jppcx3b =  '{0: >10}'.format(nswl_jppcx3a)
# if x >=4:
#     nswl_jppcx4 = (nswl_jp2[3] / nswl_ww2[3]) * 100
#     nswl_jppcx4a =  '{:.2f}% '.format(nswl_jppcx4) 
#     nswl_jppcx4b =  '{0: >10}'.format(nswl_jppcx4a)

    
# nswl_jppcxfy =   (nswl_jpfyltd[0] / nswl_wwfyltd[0]) * 100
# nswl_jppcxfy1 =  '{:.2f}% '.format(nswl_jppcxfy) 
# nswl_jppcxfy2 =  '{0: >10}'.format(nswl_jppcxfy1) #fy %

# nswl_jppcxltd =   (nswl_jpfyltd[1] / nswl_wwfyltd[1]) * 100 
# nswl_jppcxltd1 =  '{:.2f}% '.format(nswl_jppcxltd) 
# nswl_jppcxltd2 =  '{0: >10}'.format(nswl_jppcxltd1) #ltd %

# nswl_jppcxfhalf =   (nswl_jpfyltd[2] / nswl_wwfyltd[2]) * 100
# nswl_jppcxfhalf1 =  '{:.2f}% '.format(nswl_jppcxfhalf) 
# nswl_jppcxfhalf2 =  '{0: >10}'.format(nswl_jppcxfhalf1) #first half %

# nswl_jppcxf3q =   (nswl_jpfyltd[3] / nswl_wwfyltd[3]) * 100
# nswl_jppcxf3q1 =  '{:.2f}% '.format(nswl_jppcxf3q) 
# nswl_jppcxf3q2 =  '{0: >10}'.format(nswl_jppcxf3q1) #first 3 quarters %

# #last years numbers - Switch Lite JP
# nsw_litejply1= [ 0.36, 0.44, 0.62, 0.39, 1.81 ] #Q1-4, fy.

# nsw_litejply2 = [ ((nswl_jp2[0] / nsw_litejply1[0]) - 1) * 100, ((nswl_jp2[1] / nsw_litejply1[1]) -1) *100, ((nswl_jp2[2] / nsw_litejply1[2]) - 1) * 100,  ((nswl_jp2[3] / nsw_litejply1[3]) - 1) * 100]

# nsw_litejply3 = [ '{:+.2f}% '.format(elem) for elem in nsw_litejply2 ] #format all integers to string to add  and M

# nsw_litejply4 = [ '{0: >10}'.format(elem) for elem in nsw_litejply3]
# #format width

# nsw_litejpyoyfy1 = [  (((nswl_jp2[0] + nswl_jp2[1]) / (nsw_litejply1[0] + nsw_litejply1[1])) - 1) * 100, (((nswl_jp2[0] + nswl_jp2[1] + nswl_jp2[2]) / (nsw_litejply1[0] + nsw_litejply1[1] + nsw_litejply1[2])) - 1) * 100, ((nswl_jpfyltd[0] / nsw_litejply1[4]) - 1) * 100] #first half, first three quarters, fy cumulative

# nsw_litejpyoyfy2 = [ '{:+.2f}% '.format(elem) for elem in nsw_litejpyoyfy1 ] #format all integers to string to add  and M

# nsw_litejpyoyfy3 = [ '{0: >10}'.format(elem) for elem in nsw_litejpyoyfy2] #format width

# #Japan - Switch OLED
# nswoled_jp1= [ 0 / 100, 0 / 100, 107 / 100, 107 / 100, 0 / 100]
# #Q1-4, LTD at end of last fy
# #+++++++++++++++++++++++++++++
# nswoled_jp2 = [ nswoled_jp1[0], nswoled_jp1[1]  - nswoled_jp1[0], nswoled_jp1[2] - nswoled_jp1[1], nswoled_jp1[3] - nswoled_jp1[2]] #quarterly calculation

# nswoled_jp3 = [ '{:.2f}M '.format(elem) for elem in nswoled_jp2 ] #format all integers to string to add  and M

# nswoled_jp4 = [ '{0: >10}'.format(elem) for elem in nswoled_jp3] #format width

# nswoled_jpfyltd = [ nswoled_jp2[0] + nswoled_jp2[1] + nswoled_jp2[2] +nswoled_jp2[3] , nswoled_jp1[4] + nswoled_jp2[0] + nswoled_jp2[1] + nswoled_jp2[2] +nswoled_jp2[3], nswoled_jp2[0] + nswoled_jp2[1],  nswoled_jp2[0] + nswoled_jp2[1] + nswoled_jp2[2]]  #+ fiscal year cumulative at end, ltd, first half, first three quarters

# nswoled_jpfyltd1 = [ '{:.2f}M '.format(elem) for elem in nswoled_jpfyltd ] #format all integers to string to add  and M

# nswoled_jpfyltd2 = [ '{0: >10}'.format(elem) for elem in nswoled_jpfyltd1] #format width

# #percentages
# if x >= 1:
#     nswoled_jppcx1 = (nswoled_jp2[0] / nswoled_ww2[0])  *100
#     nswoled_jppcx1a =  '{:.2f}% '.format(nswoled_jppcx1) 
#     nswoled_jppcx1b =  '{0: >10}'.format(nswoled_jppcx1a)
# if x >= 2:
#     nswoled_jppcx2 = (nswoled_jp2[1] / nswoled_ww2[1]) * 100
#     nswoled_jppcx2a =  '{:.2f}% '.format(nswoled_jppcx2) 
#     nswoled_jppcx2b =  '{0: >10}'.format(nswoled_jppcx2a)
# if x >= 3:
#     nswoled_jppcx3 = (nswoled_jp2[2] / nswoled_ww2[2]) * 100
#     nswoled_jppcx3a =  '{:.2f}% '.format(nswoled_jppcx3) 
#     nswoled_jppcx3b =  '{0: >10}'.format(nswoled_jppcx3a)
# if x >=4:
#     nswoled_jppcx4 = (nswoled_jp2[3] / nswoled_ww2[3]) * 100
#     nswoled_jppcx4a =  '{:.2f}% '.format(nswoled_jppcx4) 
#     nswoled_jppcx4b =  '{0: >10}'.format(nswoled_jppcx4a)

    
# nswoled_jppcxfy =   (nswoled_jpfyltd[0] / nswoled_wwfyltd[0]) * 100
# nswoled_jppcxfy1 =  '{:.2f}% '.format(nswoled_jppcxfy) 
# nswoled_jppcxfy2 =  '{0: >10}'.format(nswoled_jppcxfy1)

# nswoled_jppcxltd =   (nswoled_jpfyltd[1] / nswoled_wwfyltd[1]) * 100 
# nswoled_jppcxltd1 =  '{:.2f}% '.format(nswoled_jppcxltd) 
# nswoled_jppcxltd2 =  '{0: >10}'.format(nswoled_jppcxltd1)

# nswoled_jppcxfhalf =   (nswoled_jpfyltd[2] / nswoled_wwfyltd[2]) * 100
# nswoled_jppcxfhalf1 =  '{:.2f}% '.format(nswoled_jppcxfhalf) 
# nswoled_jppcxfhalf2 =  '{0: >10}'.format(nswoled_jppcxfhalf1) #first half %

# nswoled_jppcxf3q =   (nswoled_jpfyltd[3] / nswoled_wwfyltd[3]) * 100
# nswoled_jppcxf3q1 =  '{:.2f}% '.format(nswoled_jppcxf3q) 
# nswoled_jppcxf3q2 =  '{0: >10}'.format(nswoled_jppcxf3q1) #first 3 quarters %

# #last years numbers - Switch OLED JP
# nsw_oledjply1= [ 0.01, 0.02, 0.03, 0.04, 0.99 ] #Q1-4, fy.

# nsw_oledjply2 = [ ((nswoled_jp2[0] / nsw_oledjply1[0]) - 1) * 100, ((nswoled_jp2[1] / nsw_oledjply1[1]) -1) *100, ((nswoled_jp2[2] / nsw_oledjply1[2]) - 1) * 100,  ((nswoled_jp2[3] / nsw_oledjply1[3]) - 1) * 100]

# nsw_oledjply3 = [ '{:+.2f}% '.format(elem) for elem in nsw_oledjply2 ] #format all integers to string to add  and M

# nsw_oledjply4 = [ '{0: >10}'.format(elem) for elem in nsw_oledjply3]
# #format width

# nsw_oledjpyoyfy1 = [  (((nswoled_jp2[0] + nswoled_jp2[1]) / (nsw_oledjply1[0] + nsw_oledjply1[1])) - 1) * 100, (((nswoled_jp2[0] + nswoled_jp2[1] + nswoled_jp2[2]) / (nsw_oledjply1[0] + nsw_oledjply1[1] + nsw_oledjply1[2])) - 1) * 100, ((nswoled_jpfyltd[0] / nsw_oledjply1[4]) - 1) * 100] #first half, first three quarters, fy cumulative

# nsw_oledjpyoyfy2 = [ '{:+.2f}% '.format(elem) for elem in nsw_oledjpyoyfy1 ] #format all integers to string to add  and M

# nsw_oledjpyoyfy3 = [ '{0: >10}'.format(elem) for elem in nsw_oledjpyoyfy2] #format width

# #Japan - Switch Hardware
# nswhw_jp1= [ 116 / 100, 203 / 100, 432 / 100, 432 / 100, 2004 / 100]
# #Q1-4, LTD at end of last fy
# #+++++++++++++++++++++++++++++
# nswhw_jp2 = [ nswhw_jp1[0], nswhw_jp1[1]  - nswhw_jp1[0], nswhw_jp1[2] - nswhw_jp1[1], nswhw_jp1[3] - nswhw_jp1[2]] #quarterly calculation

# nswhw_jp3 = [ '{:.2f}M '.format(elem) for elem in nswhw_jp2 ] #format all integers to string to add  and M

# nswhw_jp4 = [ '{0: >10}'.format(elem) for elem in nswhw_jp3] #format width

# nswhw_jpfyltd = [ nswhw_jp2[0] + nswhw_jp2[1] + nswhw_jp2[2] +nswhw_jp2[3] , nswhw_jp1[4] + nswhw_jp2[0] + nswhw_jp2[1] + nswhw_jp2[2] +nswhw_jp2[3], nswhw_jp2[0] + nswhw_jp2[1],  nswhw_jp2[0] + nswhw_jp2[1] + nswhw_jp2[2]]  #+ fiscal year cumulative at end, ltd, first half, first three quarters

# nswhw_jpfyltd1 = [ '{:.2f}M '.format(elem) for elem in nswhw_jpfyltd ] #format all integers to string to add  and M

# nswhw_jpfyltd2 = [ '{0: >10}'.format(elem) for elem in nswhw_jpfyltd1] #format width

# #percentages
# if x >= 1:
#     nswhw_jppcx1 = (nswhw_jp2[0] / nswhw_ww2[0])  * 100 
#     nswhw_jppcx1a =  '{:.2f}% '.format(nswhw_jppcx1) 
#     nswhw_jppcx1b =  '{0: >10}'.format(nswhw_jppcx1a)
# if x >= 2:
#     nswhw_jppcx2 = (nswhw_jp2[1] / nswhw_ww2[1]) * 100
#     nswhw_jppcx2a =  '{:.2f}% '.format(nswhw_jppcx2) 
#     nswhw_jppcx2b =  '{0: >10}'.format(nswhw_jppcx2a)
# if x >= 3:
#     nswhw_jppcx3 = (nswhw_jp2[2] / nswhw_ww2[2]) * 100
#     nswhw_jppcx3a =  '{:.2f}% '.format(nswhw_jppcx3) 
#     nswhw_jppcx3b =  '{0: >10}'.format(nswhw_jppcx3a)
# if x >=4:
#     nswhw_jppcx4 = (nswhw_jp2[3] / nswhw_ww2[3]) * 100
#     nswhw_jppcx4a =  '{:.2f}% '.format(nswhw_jppcx4) 
#     nswhw_jppcx4b =  '{0: >10}'.format(nswhw_jppcx4a)

    
# nswhw_jppcxfy =   (nswhw_jpfyltd[0] / nswhw_wwfyltd[0]) * 100
# nswhw_jppcxfy1 =  '{:.2f}% '.format(nswhw_jppcxfy) 
# nswhw_jppcxfy2 =  '{0: >10}'.format(nswhw_jppcxfy1)

# nswhw_jppcxltd =   (nswhw_jpfyltd[1] / nswhw_wwfyltd[1]) * 100 
# nswhw_jppcxltd1 =  '{:.2f}% '.format(nswhw_jppcxltd) 
# nswhw_jppcxltd2 =  '{0: >10}'.format(nswhw_jppcxltd1)

# nswhw_jppcxfhalf =   (nswhw_jpfyltd[2] / nswhw_wwfyltd[2]) * 100
# nswhw_jppcxfhalf1 =  '{:.2f}% '.format(nswhw_jppcxfhalf) 
# nswhw_jppcxfhalf2 =  '{0: >10}'.format(nswhw_jppcxfhalf1) #first half %

# nswhw_jppcxf3q =   (nswhw_jpfyltd[3] / nswhw_wwfyltd[3]) * 100
# nswhw_jppcxf3q1 =  '{:.2f}% '.format(nswhw_jppcxf3q) 
# nswhw_jppcxf3q2 =  '{0: >10}'.format(nswhw_jppcxf3q1) #first 3 quarters %

# #last years numbers - Switch HW JP
# nsw_hwjply1= [ 1.15, 1.58, 2.71, 1.16, 6.60 ] #Q1-4, fy.

# nsw_hwjply2 = [ ((nswhw_jp2[0] / nsw_hwjply1[0]) - 1) * 100, ((nswhw_jp2[1] / nsw_hwjply1[1]) -1) *100, ((nswhw_jp2[2] / nsw_hwjply1[2]) - 1) * 100,  ((nswhw_jp2[3] / nsw_hwjply1[3]) - 1) * 100]

# nsw_hwjply3 = [ '{:+.2f}% '.format(elem) for elem in nsw_hwjply2 ] #format all integers to string to add  and M

# nsw_hwjply4 = [ '{0: >10}'.format(elem) for elem in nsw_hwjply3]
# #format width

# nsw_hwjpyoyfy1 = [  (((nswhw_jp2[0] + nswhw_jp2[1]) / (nsw_hwjply1[0] + nsw_hwjply1[1])) - 1) * 100, (((nswhw_jp2[0] + nswhw_jp2[1] + nswhw_jp2[2]) / (nsw_hwjply1[0] + nsw_hwjply1[1] + nsw_hwjply1[2])) - 1) * 100, ((nswhw_jpfyltd[0] / nsw_hwjply1[4]) - 1) * 100] #first half, first three quarters, fy cumulative

# nsw_hwjpyoyfy2 = [ '{:+.2f}% '.format(elem) for elem in nsw_hwjpyoyfy1 ] #format all integers to string to add  and M

# nsw_hwjpyoyfy3 = [ '{0: >10}'.format(elem) for elem in nsw_hwjpyoyfy2] #format width

# #Japan - Switch Software
# nswsw_jp1= [ 813 / 100, 1613 / 100, 3098 / 100, 3098 / 100, 11222 / 100]
# #Q1-4, LTD at end of last fy
# #+++++++++++++++++++++++++++++
# nswsw_jp2 = [ nswsw_jp1[0], nswsw_jp1[1]  - nswsw_jp1[0], nswsw_jp1[2] - nswsw_jp1[1], nswsw_jp1[3] - nswsw_jp1[2]] #quarterly calculation

# nswsw_jp3 = [ '{:.2f}M '.format(elem) for elem in nswsw_jp2 ] #format all integers to string to add  and M

# nswsw_jp4 = [ '{0: >10}'.format(elem) for elem in nswsw_jp3] #format width

# nswsw_jpfyltd = [ nswsw_jp2[0] + nswsw_jp2[1] + nswsw_jp2[2] +nswsw_jp2[3] , nswsw_jp1[4] + nswsw_jp2[0] + nswsw_jp2[1] + nswsw_jp2[2] +nswsw_jp2[3], nswsw_jp2[0] + nswsw_jp2[1],  nswsw_jp2[0] + nswsw_jp2[1] + nswsw_jp2[2]]  #+ fiscal year cumulative at end, ltd, first half, first three quarters

# nswsw_jpfyltd1 = [ '{:.2f}M '.format(elem) for elem in nswsw_jpfyltd ] #format all integers to string to add  and M

# nswsw_jpfyltd2 = [ '{0: >10}'.format(elem) for elem in nswsw_jpfyltd1] #format width

# #percentages
# if x >= 1:
#     nswsw_jppcx1 = (nswsw_jp2[0] / nswsw_ww2[0])  * 100 
#     nswsw_jppcx1a =  '{:.2f}% '.format(nswsw_jppcx1) 
#     nswsw_jppcx1b =  '{0: >10}'.format(nswsw_jppcx1a)
# if x >= 2:
#     nswsw_jppcx2 = (nswsw_jp2[1] / nswsw_ww2[1]) * 100
#     nswsw_jppcx2a =  '{:.2f}% '.format(nswsw_jppcx2) 
#     nswsw_jppcx2b =  '{0: >10}'.format(nswsw_jppcx2a)
# if x >= 3:
#     nswsw_jppcx3 = (nswsw_jp2[2] / nswsw_ww2[2]) * 100
#     nswsw_jppcx3a =  '{:.2f}% '.format(nswsw_jppcx3) 
#     nswsw_jppcx3b =  '{0: >10}'.format(nswsw_jppcx3a)
# if x >=4:
#     nswsw_jppcx4 = (nswsw_jp2[3] / nswsw_ww2[3]) * 100
#     nswsw_jppcx4a =  '{:.2f}% '.format(nswsw_jppcx4) 
#     nswsw_jppcx4b =  '{0: >10}'.format(nswsw_jppcx4a)

    
# nswsw_jppcxfy =   (nswsw_jpfyltd[0] / nswsw_wwfyltd[0]) * 100
# nswsw_jppcxfy1 =  '{:.2f}% '.format(nswsw_jppcxfy) 
# nswsw_jppcxfy2 =  '{0: >10}'.format(nswsw_jppcxfy1)

# nswsw_jppcxltd =   (nswsw_jpfyltd[1] / nswsw_wwfyltd[1]) * 100 
# nswsw_jppcxltd1 =  '{:.2f}% '.format(nswsw_jppcxltd) 
# nswsw_jppcxltd2 =  '{0: >10}'.format(nswsw_jppcxltd1)

# nswsw_jppcxfhalf =   (nswsw_jpfyltd[2] / nswsw_wwfyltd[2]) * 100
# nswsw_jppcxfhalf1 =  '{:.2f}% '.format(nswsw_jppcxfhalf) 
# nswsw_jppcxfhalf2 =  '{0: >10}'.format(nswsw_jppcxfhalf1) #first half %

# nswsw_jppcxf3q =   (nswsw_jpfyltd[3] / nswsw_wwfyltd[3]) * 100
# nswsw_jppcxf3q1 =  '{:.2f}% '.format(nswsw_jppcxf3q) 
# nswsw_jppcxf3q2 =  '{0: >10}'.format(nswsw_jppcxf3q1) #first 3 quarters %

# #last years numbers - Switch SW JP
# nsw_swjply1= [ 10.02, 7.76, 13.91, 13.33, 45.02 ] #Q1-4, fy.

# nsw_swjply2 = [ ((nswsw_jp2[0] / nsw_swjply1[0]) - 1) * 100, ((nswsw_jp2[1] / nsw_swjply1[1]) -1) *100, ((nswsw_jp2[2] / nsw_swjply1[2]) - 1) * 100,  ((nswsw_jp2[3] / nsw_swjply1[3]) - 1) * 100]

# nsw_swjply3 = [ '{:+.2f}% '.format(elem) for elem in nsw_swjply2 ] #format all integers to string to add  and M

# nsw_swjply4 = [ '{0: >10}'.format(elem) for elem in nsw_swjply3]
# #format width

# nsw_swjpyoyfy1 = [  (((nswsw_jp2[0] + nswsw_jp2[1]) / (nsw_swjply1[0] + nsw_swjply1[1])) - 1) * 100, (((nswsw_jp2[0] + nswsw_jp2[1] + nswsw_jp2[2]) / (nsw_swjply1[0] + nsw_swjply1[1] + nsw_swjply1[2])) - 1) * 100, ((nswsw_jpfyltd[0] / nsw_swjply1[4]) - 1) * 100] #first half, first three quarters, fy cumulative

# nsw_swjpyoyfy2 = [ '{:+.2f}% '.format(elem) for elem in nsw_swjpyoyfy1 ] #format all integers to string to add  and M

# nsw_swjpyoyfy3 = [ '{0: >10}'.format(elem) for elem in nsw_swjpyoyfy2] #format width

# # The Americas - Switch OG
# nswog_ta1= [ 110 / 100, 215 / 100, 411 / 100, 411 / 100, 2686 / 100]
# #Q1-4, LTD at end of last fy
# #+++++++++++++++++++++++++++++
# nswog_ta2 = [ nswog_ta1[0], nswog_ta1[1]  - nswog_ta1[0], nswog_ta1[2] - nswog_ta1[1], nswog_ta1[3] - nswog_ta1[2]] #quarterly calculation

# nswog_ta3 = [ '{:.2f}M '.format(elem) for elem in nswog_ta2 ] #format all integers to string to add  and M

# nswog_ta4 = [ '{0: >12}'.format(elem) for elem in nswog_ta3] #format width

# nswog_tafyltd = [ nswog_ta2[0] + nswog_ta2[1] + nswog_ta2[2] +nswog_ta2[3] , nswog_ta1[4] + nswog_ta2[0] + nswog_ta2[1] + nswog_ta2[2] +nswog_ta2[3], nswog_ta2[0] + nswog_ta2[1],  nswog_ta2[0] + nswog_ta2[1] + nswog_ta2[2]]  #+ fiscal year cumulative at end, ltd, first half, first three quarters

# nswog_tafyltd1 = [ '{:.2f}M '.format(elem) for elem in nswog_tafyltd ] #format all integers to string to add  and M

# nswog_tafyltd2 = [ '{0: >12}'.format(elem) for elem in nswog_tafyltd1] #format width

# #percentages
# if x >= 1:
#     nswog_tapcx1 = (nswog_ta2[0] / nswog_ww2[0])  *100
#     nswog_tapcx1a =  '{:.2f}% '.format(nswog_tapcx1) 
#     nswog_tapcx1b =  '{0: >12}'.format(nswog_tapcx1a)
# if x >= 2:
#     nswog_tapcx2 = (nswog_ta2[1] / nswog_ww2[1]) * 100
#     nswog_tapcx2a =  '{:.2f}% '.format(nswog_tapcx2) 
#     nswog_tapcx2b =  '{0: >12}'.format(nswog_tapcx2a)
# if x >= 3:
#     nswog_tapcx3 = (nswog_ta2[2] / nswog_ww2[2]) * 100
#     nswog_tapcx3a =  '{:.2f}% '.format(nswog_tapcx3) 
#     nswog_tapcx3b =  '{0: >12}'.format(nswog_tapcx3a)
# if x >=4:
#     nswog_tapcx4 = (nswog_ta2[3] / nswog_ww2[3]) * 100
#     nswog_tapcx4a =  '{:.2f}% '.format(nswog_tapcx4) 
#     nswog_tapcx4b =  '{0: >12}'.format(nswog_tapcx4a)

    
# nswog_tapcxfy =   (nswog_tafyltd[0] / nswog_wwfyltd[0]) * 100
# nswog_tapcxfy1 =  '{:.2f}% '.format(nswog_tapcxfy) 
# nswog_tapcxfy2 =  '{0: >12}'.format(nswog_tapcxfy1) #fy %

# nswog_tapcxltd =   (nswog_tafyltd[1] / nswog_wwfyltd[1]) * 100 
# nswog_tapcxltd1 =  '{:.2f}% '.format(nswog_tapcxltd) 
# nswog_tapcxltd2 =  '{0: >12}'.format(nswog_tapcxltd1) #ltd %

# nswog_tapcxfhalf =   (nswog_tafyltd[2] / nswog_wwfyltd[2]) * 100
# nswog_tapcxfhalf1 =  '{:.2f}% '.format(nswog_tapcxfhalf) 
# nswog_tapcxfhalf2 =  '{0: >12}'.format(nswog_tapcxfhalf1) #first half %

# nswog_tapcxf3q =   (nswog_tafyltd[3] / nswog_wwfyltd[3]) * 100
# nswog_tapcxf3q1 =  '{:.2f}% '.format(nswog_tapcxf3q) 
# nswog_tapcxf3q2 =  '{0: >12}'.format(nswog_tapcxf3q1) #first 3 quarters %

# #last years numbers - Switch OG TA
# nsw_ogtaly1= [ 0.71, 1.88, 3.01, 1.47, 7.07 ] #Q1-4, fy.

# nsw_ogtaly2 = [ ((nswog_ta2[0] / nsw_ogtaly1[0]) - 1) * 100, ((nswog_ta2[1] / nsw_ogtaly1[1]) -1) *100, ((nswog_ta2[2] / nsw_ogtaly1[2]) - 1) * 100,  ((nswog_ta2[3] / nsw_ogtaly1[3]) - 1) * 100]

# nsw_ogtaly3 = [ '{:+.2f}% '.format(elem) for elem in nsw_ogtaly2 ] #format all integers to string to add  and M

# nsw_ogtaly4 = [ '{0: >12}'.format(elem) for elem in nsw_ogtaly3]
# #format width

# nsw_ogtayoyfy1 = [  (((nswog_ta2[0] + nswog_ta2[1]) / (nsw_ogtaly1[0] + nsw_ogtaly1[1])) - 1) * 100, (((nswog_ta2[0] + nswog_ta2[1] + nswog_ta2[2]) / (nsw_ogtaly1[0] + nsw_ogtaly1[1] + nsw_ogtaly1[2])) - 1) * 100, ((nswog_tafyltd[0] / nsw_ogtaly1[4]) - 1) * 100] #first half, first three quarters, fy cumulative

# nsw_ogtayoyfy2 = [ '{:+.2f}% '.format(elem) for elem in nsw_ogtayoyfy1 ] #format all integers to string to add  and M

# nsw_ogtayoyfy3 = [ '{0: >12}'.format(elem) for elem in nsw_ogtayoyfy2] #format width

# #The Americas - Switch Lite
# nswl_ta1= [ 48 / 100, 89 / 100, 133 / 100, 133 / 100, 641 / 100]
# #Q1-4, LTD at end of last fy
# #+++++++++++++++++++++++++++++
# nswl_ta2 = [ nswl_ta1[0], nswl_ta1[1]  - nswl_ta1[0], nswl_ta1[2] - nswl_ta1[1], nswl_ta1[3] - nswl_ta1[2]] #quarterly calculation + fiscal year cumulative at end, ltd,

# nswl_ta3 = [ '{:.2f}M '.format(elem) for elem in nswl_ta2 ] #format all integers to string to add  and M

# nswl_ta4 = [ '{0: >12}'.format(elem) for elem in nswl_ta3] #format width

# nswl_tafyltd = [ nswl_ta2[0] + nswl_ta2[1] + nswl_ta2[2] +nswl_ta2[3] , nswl_ta1[4] + nswl_ta2[0] + nswl_ta2[1] + nswl_ta2[2] +nswl_ta2[3], nswl_ta2[0] + nswl_ta2[1] , nswl_ta2[0] + nswl_ta2[1] + nswl_ta2[2] ]  #+ fiscal year cumulative at end, ltd, first half, first three quarters

# nswl_tafyltd1 = [ '{:.2f}M '.format(elem) for elem in nswl_tafyltd ] #format all integers to string to add  and M

# nswl_tafyltd2 = [ '{0: >12}'.format(elem) for elem in nswl_tafyltd1] #format width

# #percentages
# if x >= 1:
#     nswl_tapcx1 = (nswl_ta2[0] / nswl_ww2[0])  * 100 
#     nswl_tapcx1a =  '{:.2f}% '.format(nswl_tapcx1) 
#     nswl_tapcx1b =  '{0: >12}'.format(nswl_tapcx1a)
# if x >= 2:
#     nswl_tapcx2 = (nswl_ta2[1] / nswl_ww2[1]) * 100
#     nswl_tapcx2a =  '{:.2f}% '.format(nswl_tapcx2) 
#     nswl_tapcx2b =  '{0: >12}'.format(nswl_tapcx2a)
# if x >= 3:
#     nswl_tapcx3 = (nswl_ta2[2] / nswl_ww2[2]) * 100
#     nswl_tapcx3a =  '{:.2f}% '.format(nswl_tapcx3) 
#     nswl_tapcx3b =  '{0: >12}'.format(nswl_tapcx3a)
# if x >=4:
#     nswl_tapcx4 = (nswl_ta2[3] / nswl_ww2[3]) * 100
#     nswl_tapcx4a =  '{:.2f}% '.format(nswl_tapcx4) 
#     nswl_tapcx4b =  '{0: >12}'.format(nswl_tapcx4a)

    
# nswl_tapcxfy =   (nswl_tafyltd[0] / nswl_wwfyltd[0]) * 100
# nswl_tapcxfy1 =  '{:.2f}% '.format(nswl_tapcxfy) 
# nswl_tapcxfy2 =  '{0: >12}'.format(nswl_tapcxfy1)

# nswl_tapcxltd =   (nswl_tafyltd[1] / nswl_wwfyltd[1]) * 100 
# nswl_tapcxltd1 =  '{:.2f}% '.format(nswl_tapcxltd) 
# nswl_tapcxltd2 =  '{0: >12}'.format(nswl_tapcxltd1)

# nswl_tapcxfhalf =   (nswl_tafyltd[2] / nswl_wwfyltd[2]) * 100
# nswl_tapcxfhalf1 =  '{:.2f}% '.format(nswl_tapcxfhalf) 
# nswl_tapcxfhalf2 =  '{0: >12}'.format(nswl_tapcxfhalf1) #first half %

# nswl_tapcxf3q =   (nswl_tafyltd[3] / nswl_wwfyltd[3]) * 100
# nswl_tapcxf3q1 =  '{:.2f}% '.format(nswl_tapcxf3q) 
# nswl_tapcxf3q2 =  '{0: >12}'.format(nswl_tapcxf3q1) #first 3 quarters %

# #last years numbers - Switch Lite TA
# nsw_litetaly1= [ 1.28, 0.59, 1.58, 0.64, 4.09 ] #Q1-4, fy.

# nsw_litetaly2 = [ ((nswl_ta2[0] / nsw_litetaly1[0]) - 1) * 100, ((nswl_ta2[1] / nsw_litetaly1[1]) -1) *100, ((nswl_ta2[2] / nsw_litetaly1[2]) - 1) * 100,  ((nswl_ta2[3] / nsw_litetaly1[3]) - 1) * 100]

# nsw_litetaly3 = [ '{:+.2f}% '.format(elem) for elem in nsw_litetaly2 ] #format all integers to string to add  and M

# nsw_litetaly4 = [ '{0: >12}'.format(elem) for elem in nsw_litetaly3]
# #format width

# nsw_litetayoyfy1 = [  (((nswl_ta2[0] + nswl_ta2[1]) / (nsw_litetaly1[0] + nsw_litetaly1[1])) - 1) * 100, (((nswl_ta2[0] + nswl_ta2[1] + nswl_ta2[2]) / (nsw_litetaly1[0] + nsw_litetaly1[1] + nsw_litetaly1[2])) - 1) * 100, ((nswl_tafyltd[0] / nsw_litetaly1[4]) - 1) * 100] #first half, first three quarters, fy cumulative

# nsw_litetayoyfy2 = [ '{:+.2f}% '.format(elem) for elem in nsw_litetayoyfy1 ] #format all integers to string to add  and M

# nsw_litetayoyfy3 = [ '{0: >12}'.format(elem) for elem in nsw_litetayoyfy2] #format width

# #The Americas - Switch OLED
# nswoled_ta1= [ 0 / 100, 0 / 100, 141 / 100, 141 / 100, 0 / 100]
# #Q1-4, LTD at end of last fy
# #+++++++++++++++++++++++++++++
# nswoled_ta2 = [ nswoled_ta1[0], nswoled_ta1[1]  - nswoled_ta1[0], nswoled_ta1[2] - nswoled_ta1[1], nswoled_ta1[3] - nswoled_ta1[2]] #quarterly calculation + fiscal year cumulative at end, ltd,

# nswoled_ta3 = [ '{:.2f}M '.format(elem) for elem in nswoled_ta2 ] #format all integers to string to add  and M

# nswoled_ta4 = [ '{0: >12}'.format(elem) for elem in nswoled_ta3] #format width

# nswoled_tafyltd = [ nswoled_ta2[0] + nswoled_ta2[1] + nswoled_ta2[2] +nswoled_ta2[3] , nswoled_ta1[4] + nswoled_ta2[0] + nswoled_ta2[1] + nswoled_ta2[2] +nswoled_ta2[3], nswoled_ta2[0] + nswoled_ta2[1] , nswoled_ta2[0] + nswoled_ta2[1] + nswoled_ta2[2] ]  #+ fiscal year cumulative at end, ltd, first half, first three quarters

# nswoled_tafyltd1 = [ '{:.2f}M '.format(elem) for elem in nswoled_tafyltd ] #format all integers to string to add  and M

# nswoled_tafyltd2 = [ '{0: >12}'.format(elem) for elem in nswoled_tafyltd1] #format width

# #percentages
# if x >= 1:
#     nswoled_tapcx1 = (nswoled_ta2[0] / nswoled_ww2[0])  * 100 
#     nswoled_tapcx1a =  '{:.2f}% '.format(nswoled_tapcx1) 
#     nswoled_tapcx1b =  '{0: >12}'.format(nswoled_tapcx1a)
# if x >= 2:
#     nswoled_tapcx2 = (nswoled_ta2[1] / nswoled_ww2[1]) * 100
#     nswoled_tapcx2a =  '{:.2f}% '.format(nswoled_tapcx2) 
#     nswoled_tapcx2b =  '{0: >12}'.format(nswoled_tapcx2a)
# if x >= 3:
#     nswoled_tapcx3 = (nswoled_ta2[2] / nswoled_ww2[2]) * 100
#     nswoled_tapcx3a =  '{:.2f}% '.format(nswoled_tapcx3) 
#     nswoled_tapcx3b =  '{0: >12}'.format(nswoled_tapcx3a)
# if x >=4:
#     nswoled_tapcx4 = (nswoled_ta2[3] / nswoled_ww2[3]) * 100
#     nswoled_tapcx4a =  '{:.2f}% '.format(nswoled_tapcx4) 
#     nswoled_tapcx4b =  '{0: >12}'.format(nswoled_tapcx4a)

    
# nswoled_tapcxfy =   (nswoled_tafyltd[0] / nswoled_wwfyltd[0]) * 100
# nswoled_tapcxfy1 =  '{:.2f}% '.format(nswoled_tapcxfy) 
# nswoled_tapcxfy2 =  '{0: >12}'.format(nswoled_tapcxfy1)

# nswoled_tapcxltd =   (nswoled_tafyltd[1] / nswoled_wwfyltd[1]) * 100 
# nswoled_tapcxltd1 =  '{:.2f}% '.format(nswoled_tapcxltd) 
# nswoled_tapcxltd2 =  '{0: >12}'.format(nswoled_tapcxltd1)

# nswoled_tapcxfhalf =   (nswoled_tafyltd[2] / nswoled_wwfyltd[2]) * 100
# nswoled_tapcxfhalf1 =  '{:.2f}% '.format(nswoled_tapcxfhalf) 
# nswoled_tapcxfhalf2 =  '{0: >12}'.format(nswoled_tapcxfhalf1) #first half %

# nswoled_tapcxf3q =   (nswoled_tafyltd[3] / nswoled_wwfyltd[3]) * 100
# nswoled_tapcxf3q1 =  '{:.2f}% '.format(nswoled_tapcxf3q) 
# nswoled_tapcxf3q2 =  '{0: >12}'.format(nswoled_tapcxf3q1) #first 3 quarters %

# #last years numbers - Switch OLED TA
# nsw_oledtaly1= [ 0.01, 0.02, 0.03, 0.04, 0.05 ] #Q1-4, fy.

# nsw_oledtaly2 = [ ((nswoled_ta2[0] / nsw_oledtaly1[0]) - 1) * 100, ((nswoled_ta2[1] / nsw_oledtaly1[1]) -1) *100, ((nswoled_ta2[2] / nsw_oledtaly1[2]) - 1) * 100,  ((nswoled_ta2[3] / nsw_oledtaly1[3]) - 1) * 100]

# nsw_oledtaly3 = [ '{:+.2f}% '.format(elem) for elem in nsw_oledtaly2 ] #format all integers to string to add  and M

# nsw_oledtaly4 = [ '{0: >12}'.format(elem) for elem in nsw_oledtaly3]
# #format width

# nsw_oledtayoyfy1 = [  (((nswoled_ta2[0] + nswoled_ta2[1]) / (nsw_oledtaly1[0] + nsw_oledtaly1[1])) - 1) * 100, (((nswoled_ta2[0] + nswoled_ta2[1] + nswoled_ta2[2]) / (nsw_oledtaly1[0] + nsw_oledtaly1[1] + nsw_oledtaly1[2])) - 1) * 100, ((nswoled_tafyltd[0] / nsw_oledtaly1[4]) - 1) * 100] #first half, first three quarters, fy cumulative

# nsw_oledtayoyfy2 = [ '{:+.2f}% '.format(elem) for elem in nsw_oledtayoyfy1 ] #format all integers to string to add  and M

# nsw_oledtayoyfy3 = [ '{0: >12}'.format(elem) for elem in nsw_oledtayoyfy2] #format width

# #The Americas - Switch Hardware
# nswhw_ta1= [ 159 / 100, 304 / 100, 684 / 100, 684 / 100, 3327 / 100]
# #Q1-4, LTD at end of last fy
# #+++++++++++++++++++++++++++++
# nswhw_ta2 = [ nswhw_ta1[0], nswhw_ta1[1]  - nswhw_ta1[0], nswhw_ta1[2] - nswhw_ta1[1], nswhw_ta1[3] - nswhw_ta1[2]] #quarterly calculation + fiscal year cumulative at end, ltd,

# nswhw_ta3 = [ '{:.2f}M '.format(elem) for elem in nswhw_ta2 ] #format all integers to string to add  and M

# nswhw_ta4 = [ '{0: >12}'.format(elem) for elem in nswhw_ta3] #format width

# nswhw_tafyltd = [ nswhw_ta2[0] + nswhw_ta2[1] + nswhw_ta2[2] +nswhw_ta2[3] , nswhw_ta1[4] + nswhw_ta2[0] + nswhw_ta2[1] + nswhw_ta2[2] +nswhw_ta2[3], nswhw_ta2[0] + nswhw_ta2[1] , nswhw_ta2[0] + nswhw_ta2[1] + nswhw_ta2[2] ]  #+ fiscal year cumulative at end, ltd, first half, first three quarters

# nswhw_tafyltd1 = [ '{:.2f}M '.format(elem) for elem in nswhw_tafyltd ] #format all integers to string to add  and M

# nswhw_tafyltd2 = [ '{0: >12}'.format(elem) for elem in nswhw_tafyltd1] #format width

# #percentages
# if x >= 1:
#     nswhw_tapcx1 = (nswhw_ta2[0] / nswhw_ww2[0])  * 100 
#     nswhw_tapcx1a =  '{:.2f}% '.format(nswhw_tapcx1) 
#     nswhw_tapcx1b =  '{0: >12}'.format(nswhw_tapcx1a)
# if x >= 2:
#     nswhw_tapcx2 = (nswhw_ta2[1] / nswhw_ww2[1]) * 100
#     nswhw_tapcx2a =  '{:.2f}% '.format(nswhw_tapcx2) 
#     nswhw_tapcx2b =  '{0: >12}'.format(nswhw_tapcx2a)
# if x >= 3:
#     nswhw_tapcx3 = (nswhw_ta2[2] / nswhw_ww2[2]) * 100
#     nswhw_tapcx3a =  '{:.2f}% '.format(nswhw_tapcx3) 
#     nswhw_tapcx3b =  '{0: >12}'.format(nswhw_tapcx3a)
# if x >=4:
#     nswhw_tapcx4 = (nswhw_ta2[3] / nswhw_ww2[3]) * 100
#     nswhw_tapcx4a =  '{:.2f}% '.format(nswhw_tapcx4) 
#     nswhw_tapcx4b =  '{0: >12}'.format(nswhw_tapcx4a)

    
# nswhw_tapcxfy =   (nswhw_tafyltd[0] / nswhw_wwfyltd[0]) * 100
# nswhw_tapcxfy1 =  '{:.2f}% '.format(nswhw_tapcxfy) 
# nswhw_tapcxfy2 =  '{0: >12}'.format(nswhw_tapcxfy1)

# nswhw_tapcxltd =   (nswhw_tafyltd[1] / nswhw_wwfyltd[1]) * 100 
# nswhw_tapcxltd1 =  '{:.2f}% '.format(nswhw_tapcxltd) 
# nswhw_tapcxltd2 =  '{0: >12}'.format(nswhw_tapcxltd1)

# nswhw_tapcxfhalf =   (nswhw_tafyltd[2] / nswhw_wwfyltd[2]) * 100
# nswhw_tapcxfhalf1 =  '{:.2f}% '.format(nswhw_tapcxfhalf) 
# nswhw_tapcxfhalf2 =  '{0: >12}'.format(nswhw_tapcxfhalf1) #first half %

# nswhw_tapcxf3q =   (nswhw_tafyltd[3] / nswhw_wwfyltd[3]) * 100
# nswhw_tapcxf3q1 =  '{:.2f}% '.format(nswhw_tapcxf3q) 
# nswhw_tapcxf3q2 =  '{0: >12}'.format(nswhw_tapcxf3q1) #first 3 quarters %

# #last years numbers - Switch HW TA
# nsw_hwtaly1= [ 1.99, 2.47, 4.59, 2.10, 11.15 ] #Q1-4, fy.

# nsw_hwtaly2 = [ ((nswhw_ta2[0] / nsw_hwtaly1[0]) - 1) * 100, ((nswhw_ta2[1] / nsw_hwtaly1[1]) -1) *100, ((nswhw_ta2[2] / nsw_hwtaly1[2]) - 1) * 100,  ((nswhw_ta2[3] / nsw_hwtaly1[3]) - 1) * 100]

# nsw_hwtaly3 = [ '{:+.2f}% '.format(elem) for elem in nsw_hwtaly2 ] #format all integers to string to add  and M

# nsw_hwtaly4 = [ '{0: >12}'.format(elem) for elem in nsw_hwtaly3]
# #format width

# nsw_hwtayoyfy1 = [  (((nswhw_ta2[0] + nswhw_ta2[1]) / (nsw_hwtaly1[0] + nsw_hwtaly1[1])) - 1) * 100, (((nswhw_ta2[0] + nswhw_ta2[1] + nswhw_ta2[2]) / (nsw_hwtaly1[0] + nsw_hwtaly1[1] + nsw_hwtaly1[2])) - 1) * 100, ((nswhw_tafyltd[0] / nsw_hwtaly1[4]) - 1) * 100] #first half, first three quarters, fy cumulative

# nsw_hwtayoyfy2 = [ '{:+.2f}% '.format(elem) for elem in nsw_hwtayoyfy1 ] #format all integers to string to add  and M

# nsw_hwtayoyfy3 = [ '{0: >12}'.format(elem) for elem in nsw_hwtayoyfy2] #format width

# #The Americas - Switch Software
# nswsw_ta1= [ 2235 / 100, 4513 / 100, 8464 / 100, 8464 / 100, 26100 / 100]
# #Q1-4, LTD at end of last fy
# #+++++++++++++++++++++++++++++
# nswsw_ta2 = [ nswsw_ta1[0], nswsw_ta1[1]  - nswsw_ta1[0], nswsw_ta1[2] - nswsw_ta1[1], nswsw_ta1[3] - nswsw_ta1[2]] #quarterly calculation + fiscal year cumulative at end, ltd,

# nswsw_ta3 = [ '{:.2f}M '.format(elem) for elem in nswsw_ta2 ] #format all integers to string to add  and M

# nswsw_ta4 = [ '{0: >12}'.format(elem) for elem in nswsw_ta3] #format width

# nswsw_tafyltd = [ nswsw_ta2[0] + nswsw_ta2[1] + nswsw_ta2[2] +nswsw_ta2[3] , nswsw_ta1[4] + nswsw_ta2[0] + nswsw_ta2[1] + nswsw_ta2[2] +nswsw_ta2[3], nswsw_ta2[0] + nswsw_ta2[1] , nswsw_ta2[0] + nswsw_ta2[1] + nswsw_ta2[2] ]  #+ fiscal year cumulative at end, ltd, first half, first three quarters

# nswsw_tafyltd1 = [ '{:.2f}M '.format(elem) for elem in nswsw_tafyltd ] #format all integers to string to add  and M

# nswsw_tafyltd2 = [ '{0: >12}'.format(elem) for elem in nswsw_tafyltd1] #format width

# #percentages
# if x >= 1:
#     nswsw_tapcx1 = (nswsw_ta2[0] / nswsw_ww2[0])  * 100 
#     nswsw_tapcx1a =  '{:.2f}% '.format(nswsw_tapcx1) 
#     nswsw_tapcx1b =  '{0: >12}'.format(nswsw_tapcx1a)
# if x >= 2:
#     nswsw_tapcx2 = (nswsw_ta2[1] / nswsw_ww2[1]) * 100
#     nswsw_tapcx2a =  '{:.2f}% '.format(nswsw_tapcx2) 
#     nswsw_tapcx2b =  '{0: >12}'.format(nswsw_tapcx2a)
# if x >= 3:
#     nswsw_tapcx3 = (nswsw_ta2[2] / nswsw_ww2[2]) * 100
#     nswsw_tapcx3a =  '{:.2f}% '.format(nswsw_tapcx3) 
#     nswsw_tapcx3b =  '{0: >12}'.format(nswsw_tapcx3a)
# if x >=4:
#     nswsw_tapcx4 = (nswsw_ta2[3] / nswsw_ww2[3]) * 100
#     nswsw_tapcx4a =  '{:.2f}% '.format(nswsw_tapcx4) 
#     nswsw_tapcx4b =  '{0: >12}'.format(nswsw_tapcx4a)
    
# nswsw_tapcxfy =   (nswsw_tafyltd[0] / nswsw_wwfyltd[0]) * 100
# nswsw_tapcxfy1 =  '{:.2f}% '.format(nswsw_tapcxfy) 
# nswsw_tapcxfy2 =  '{0: >12}'.format(nswsw_tapcxfy1)

# nswsw_tapcxltd =   (nswsw_tafyltd[1] / nswsw_wwfyltd[1]) * 100 
# nswsw_tapcxltd1 =  '{:.2f}% '.format(nswsw_tapcxltd) 
# nswsw_tapcxltd2 =  '{0: >12}'.format(nswsw_tapcxltd1)

# nswsw_tapcxfhalf =   (nswsw_tafyltd[2] / nswsw_wwfyltd[2]) * 100
# nswsw_tapcxfhalf1 =  '{:.2f}% '.format(nswsw_tapcxfhalf) 
# nswsw_tapcxfhalf2 =  '{0: >12}'.format(nswsw_tapcxfhalf1) #first half %

# nswsw_tapcxf3q =   (nswsw_tafyltd[3] / nswsw_wwfyltd[3]) * 100
# nswsw_tapcxf3q1 =  '{:.2f}% '.format(nswsw_tapcxf3q) 
# nswsw_tapcxf3q2 =  '{0: >12}'.format(nswsw_tapcxf3q1) #first 3 quarters %

# #last years numbers - Switch SW TA
# nsw_swtaly1= [ 21.49, 24.10, 33.95, 22.88, 102.42 ] #Q1-4, fy.

# nsw_swtaly2 = [ ((nswsw_ta2[0] / nsw_swtaly1[0]) - 1) * 100, ((nswsw_ta2[1] / nsw_swtaly1[1]) -1) *100, ((nswsw_ta2[2] / nsw_swtaly1[2]) - 1) * 100,  ((nswsw_ta2[3] / nsw_swtaly1[3]) - 1) * 100]

# nsw_swtaly3 = [ '{:+.2f}% '.format(elem) for elem in nsw_swtaly2 ] #format all integers to string to add  and M

# nsw_swtaly4 = [ '{0: >12}'.format(elem) for elem in nsw_swtaly3]
# #format width

# nsw_swtayoyfy1 = [  (((nswsw_ta2[0] + nswsw_ta2[1]) / (nsw_swtaly1[0] + nsw_swtaly1[1])) - 1) * 100, (((nswsw_ta2[0] + nswsw_ta2[1] + nswsw_ta2[2]) / (nsw_swtaly1[0] + nsw_swtaly1[1] + nsw_swtaly1[2])) - 1) * 100, ((nswsw_tafyltd[0] / nsw_swtaly1[4]) - 1) * 100] #first half, first three quarters, fy cumulative

# nsw_swtayoyfy2 = [ '{:+.2f}% '.format(elem) for elem in nsw_swtayoyfy1 ] #format all integers to string to add  and M

# nsw_swtayoyfy3 = [ '{0: >12}'.format(elem) for elem in nsw_swtayoyfy2] #format width

# # Europe - Switch OG
# nswog_eu1= [ 82 / 100, 163 / 100, 375 / 100, 375 / 100, 1811 / 100]
# #Q1-4, LTD at end of last fy
# #+++++++++++++++++++++++++++++
# nswog_eu2 = [ nswog_eu1[0], nswog_eu1[1]  - nswog_eu1[0], nswog_eu1[2] - nswog_eu1[1], nswog_eu1[3] - nswog_eu1[2]] #quarterly calculation

# nswog_eu3 = [ '{:.2f}M '.format(elem) for elem in nswog_eu2 ] #format all integers to string to add  and M

# nswog_eu4 = [ '{0: >11}'.format(elem) for elem in nswog_eu3] #format width

# nswog_eufyltd = [ nswog_eu2[0] + nswog_eu2[1] + nswog_eu2[2] +nswog_eu2[3] , nswog_eu1[4] + nswog_eu2[0] + nswog_eu2[1] + nswog_eu2[2] +nswog_eu2[3], nswog_eu2[0] + nswog_eu2[1],  nswog_eu2[0] + nswog_eu2[1] + nswog_eu2[2]]  #+ fiscal year cumulative at end, ltd, first half, first three quarters

# nswog_eufyltd1 = [ '{:.2f}M '.format(elem) for elem in nswog_eufyltd ] #format all integers to string to add  and M

# nswog_eufyltd2 = [ '{0: >11}'.format(elem) for elem in nswog_eufyltd1] #format width

# #percentages
# if x >= 1:
#     nswog_eupcx1 = (nswog_eu2[0] / nswog_ww2[0])  *100
#     nswog_eupcx1a =  '{:.2f}% '.format(nswog_eupcx1) 
#     nswog_eupcx1b =  '{0: >11}'.format(nswog_eupcx1a)
# if x >= 2:
#     nswog_eupcx2 = (nswog_eu2[1] / nswog_ww2[1]) * 100
#     nswog_eupcx2a =  '{:.2f}% '.format(nswog_eupcx2) 
#     nswog_eupcx2b =  '{0: >11}'.format(nswog_eupcx2a)
# if x >= 3:
#     nswog_eupcx3 = (nswog_eu2[2] / nswog_ww2[2]) * 100
#     nswog_eupcx3a =  '{:.2f}% '.format(nswog_eupcx3) 
#     nswog_eupcx3b =  '{0: >11}'.format(nswog_eupcx3a)
# if x >=4:
#     nswog_eupcx4 = (nswog_eu2[3] / nswog_ww2[3]) * 100
#     nswog_eupcx4a =  '{:.2f}% '.format(nswog_eupcx4) 
#     nswog_eupcx4b =  '{0: >11}'.format(nswog_eupcx4a)

    
# nswog_eupcxfy =   (nswog_eufyltd[0] / nswog_wwfyltd[0]) * 100
# nswog_eupcxfy1 =  '{:.2f}% '.format(nswog_eupcxfy) 
# nswog_eupcxfy2 =  '{0: >11}'.format(nswog_eupcxfy1) #fy %

# nswog_eupcxltd =   (nswog_eufyltd[1] / nswog_wwfyltd[1]) * 100 
# nswog_eupcxltd1 =  '{:.2f}% '.format(nswog_eupcxltd) 
# nswog_eupcxltd2 =  '{0: >11}'.format(nswog_eupcxltd1) #ltd %

# nswog_eupcxfhalf =   (nswog_eufyltd[2] / nswog_wwfyltd[2]) * 100
# nswog_eupcxfhalf1 =  '{:.2f}% '.format(nswog_eupcxfhalf) 
# nswog_eupcxfhalf2 =  '{0: >11}'.format(nswog_eupcxfhalf1) #first half %

# nswog_eupcxf3q =   (nswog_eufyltd[3] / nswog_wwfyltd[3]) * 100
# nswog_eupcxf3q1 =  '{:.2f}% '.format(nswog_eupcxf3q) 
# nswog_eupcxf3q2 =  '{0: >11}'.format(nswog_eupcxf3q1) #first 3 quarters %

# #last years numbers - Switch OG EU
# nsw_ogeuly1= [ 0.83, 1.33, 2.10, 0.76, 5.02 ] #Q1-4, fy.

# nsw_ogeuly2 = [ ((nswog_eu2[0] / nsw_ogeuly1[0]) - 1) * 100, ((nswog_eu2[1] / nsw_ogeuly1[1]) -1) *100, ((nswog_eu2[2] / nsw_ogeuly1[2]) - 1) * 100,  ((nswog_eu2[3] / nsw_ogeuly1[3]) - 1) * 100]

# nsw_ogeuly3 = [ '{:+.2f}% '.format(elem) for elem in nsw_ogeuly2 ] #format all integers to string to add  and M

# nsw_ogeuly4 = [ '{0: >11}'.format(elem) for elem in nsw_ogeuly3]
# #format width

# nsw_ogeuyoyfy1 = [  (((nswog_eu2[0] + nswog_eu2[1]) / (nsw_ogeuly1[0] + nsw_ogeuly1[1])) - 1) * 100, (((nswog_eu2[0] + nswog_eu2[1] + nswog_eu2[2]) / (nsw_ogeuly1[0] + nsw_ogeuly1[1] + nsw_ogeuly1[2])) - 1) * 100, ((nswog_eufyltd[0] / nsw_ogeuly1[4]) - 1) * 100] #first half, first three quarters, fy cumulative

# nsw_ogeuyoyfy2 = [ '{:+.2f}% '.format(elem) for elem in nsw_ogeuyoyfy1 ] #format all integers to string to add  and M

# nsw_ogeuyoyfy3 = [ '{0: >11}'.format(elem) for elem in nsw_ogeuyoyfy2] #format width

# #Europe - Switch Lite
# nswl_eu1= [ 26 / 100, 39 / 100, 75 / 100, 75 / 100, 347 / 100]
# #Q1-4, LTD at end of last fy
# #+++++++++++++++++++++++++++++
# nswl_eu2 = [ nswl_eu1[0], nswl_eu1[1]  - nswl_eu1[0], nswl_eu1[2] - nswl_eu1[1], nswl_eu1[3] - nswl_eu1[2]] #quarterly calculation + fiscal year cumulative at end, ltd,

# nswl_eu3 = [ '{:.2f}M '.format(elem) for elem in nswl_eu2 ] #format all integers to string to add  and M

# nswl_eu4 = [ '{0: >11}'.format(elem) for elem in nswl_eu3] #format width

# nswl_eufyltd = [ nswl_eu2[0] + nswl_eu2[1] + nswl_eu2[2] +nswl_eu2[3] , nswl_eu1[4] + nswl_eu2[0] + nswl_eu2[1] + nswl_eu2[2] +nswl_eu2[3], nswl_eu2[0] + nswl_eu2[1] , nswl_eu2[0] + nswl_eu2[1] + nswl_eu2[2] ]  #+ fiscal year cumulative at end, ltd, first half, first three quarters

# nswl_eufyltd1 = [ '{:.2f}M '.format(elem) for elem in nswl_eufyltd ] #format all integers to string to add  and M

# nswl_eufyltd2 = [ '{0: >11}'.format(elem) for elem in nswl_eufyltd1] #format width

# #percentages
# if x >= 1:
#     nswl_eupcx1 = (nswl_eu2[0] / nswl_ww2[0])  * 100 
#     nswl_eupcx1a =  '{:.2f}% '.format(nswl_eupcx1) 
#     nswl_eupcx1b =  '{0: >11}'.format(nswl_eupcx1a)
# if x >= 2:
#     nswl_eupcx2 = (nswl_eu2[1] / nswl_ww2[1]) * 100
#     nswl_eupcx2a =  '{:.2f}% '.format(nswl_eupcx2) 
#     nswl_eupcx2b =  '{0: >11}'.format(nswl_eupcx2a)
# if x >= 3:
#     nswl_eupcx3 = (nswl_eu2[2] / nswl_ww2[2]) * 100
#     nswl_eupcx3a =  '{:.2f}% '.format(nswl_eupcx3) 
#     nswl_eupcx3b =  '{0: >11}'.format(nswl_eupcx3a)
# if x >=4:
#     nswl_eupcx4 = (nswl_eu2[3] / nswl_ww2[3]) * 100
#     nswl_eupcx4a =  '{:.2f}% '.format(nswl_eupcx4) 
#     nswl_eupcx4b =  '{0: >11}'.format(nswl_eupcx4a)

    
# nswl_eupcxfy =   (nswl_eufyltd[0] / nswl_wwfyltd[0]) * 100
# nswl_eupcxfy1 =  '{:.2f}% '.format(nswl_eupcxfy) 
# nswl_eupcxfy2 =  '{0: >11}'.format(nswl_eupcxfy1)

# nswl_eupcxltd =   (nswl_eufyltd[1] / nswl_wwfyltd[1]) * 100 
# nswl_eupcxltd1 =  '{:.2f}% '.format(nswl_eupcxltd) 
# nswl_eupcxltd2 =  '{0: >11}'.format(nswl_eupcxltd1)

# nswl_eupcxfhalf =   (nswl_eufyltd[2] / nswl_wwfyltd[2]) * 100
# nswl_eupcxfhalf1 =  '{:.2f}% '.format(nswl_eupcxfhalf) 
# nswl_eupcxfhalf2 =  '{0: >11}'.format(nswl_eupcxfhalf1) #first half %

# nswl_eupcxf3q =   (nswl_eufyltd[3] / nswl_wwfyltd[3]) * 100
# nswl_eupcxf3q1 =  '{:.2f}% '.format(nswl_eupcxf3q) 
# nswl_eupcxf3q2 =  '{0: >11}'.format(nswl_eupcxf3q1) #first 3 quarters %

# #last years numbers - Switch Lite EU
# nsw_liteeuly1= [ 0.79, 0.35, 0.88, 0.11, 2.13 ] #Q1-4, fy.

# nsw_liteeuly2 = [ ((nswl_eu2[0] / nsw_liteeuly1[0]) - 1) * 100, ((nswl_eu2[1] / nsw_liteeuly1[1]) -1) *100, ((nswl_eu2[2] / nsw_liteeuly1[2]) - 1) * 100,  ((nswl_eu2[3] / nsw_liteeuly1[3]) - 1) * 100]

# nsw_liteeuly3 = [ '{:+.2f}% '.format(elem) for elem in nsw_liteeuly2 ] #format all integers to string to add  and M

# nsw_liteeuly4 = [ '{0: >11}'.format(elem) for elem in nsw_liteeuly3]
# #format width

# nsw_liteeuyoyfy1 = [  (((nswl_eu2[0] + nswl_eu2[1]) / (nsw_liteeuly1[0] + nsw_liteeuly1[1])) - 1) * 100, (((nswl_eu2[0] + nswl_eu2[1] + nswl_eu2[2]) / (nsw_liteeuly1[0] + nsw_liteeuly1[1] + nsw_liteeuly1[2])) - 1) * 100, ((nswl_eufyltd[0] / nsw_liteeuly1[4]) - 1) * 100] #first half, first three quarters, fy cumulative

# nsw_liteeuyoyfy2 = [ '{:+.2f}% '.format(elem) for elem in nsw_liteeuyoyfy1 ] #format all integers to string to add  and M

# nsw_liteeuyoyfy3 = [ '{0: >11}'.format(elem) for elem in nsw_liteeuyoyfy2] #format width

# #Europe - Switch OLED
# nswoled_eu1= [ 0 / 100, 0 / 100, 91 / 100, 91 / 100, 0 / 100]
# #Q1-4, LTD at end of last fy
# #+++++++++++++++++++++++++++++
# nswoled_eu2 = [ nswoled_eu1[0], nswoled_eu1[1]  - nswoled_eu1[0], nswoled_eu1[2] - nswoled_eu1[1], nswoled_eu1[3] - nswoled_eu1[2]] #quarterly calculation + fiscal year cumulative at end, ltd,

# nswoled_eu3 = [ '{:.2f}M '.format(elem) for elem in nswoled_eu2 ] #format all integers to string to add  and M

# nswoled_eu4 = [ '{0: >11}'.format(elem) for elem in nswoled_eu3] #format width

# nswoled_eufyltd = [ nswoled_eu2[0] + nswoled_eu2[1] + nswoled_eu2[2] +nswoled_eu2[3] , nswoled_eu1[4] + nswoled_eu2[0] + nswoled_eu2[1] + nswoled_eu2[2] +nswoled_eu2[3], nswoled_eu2[0] + nswoled_eu2[1] , nswoled_eu2[0] + nswoled_eu2[1] + nswoled_eu2[2] ]  #+ fiscal year cumulative at end, ltd, first half, first three quarters

# nswoled_eufyltd1 = [ '{:.2f}M '.format(elem) for elem in nswoled_eufyltd ] #format all integers to string to add  and M

# nswoled_eufyltd2 = [ '{0: >11}'.format(elem) for elem in nswoled_eufyltd1] #format width

# #percentages
# if x >= 1:
#     nswoled_eupcx1 = (nswoled_eu2[0] / nswoled_ww2[0])  * 100 
#     nswoled_eupcx1a =  '{:.2f}% '.format(nswoled_eupcx1) 
#     nswoled_eupcx1b =  '{0: >11}'.format(nswoled_eupcx1a)
# if x >= 2:
#     nswoled_eupcx2 = (nswoled_eu2[1] / nswoled_ww2[1]) * 100
#     nswoled_eupcx2a =  '{:.2f}% '.format(nswoled_eupcx2) 
#     nswoled_eupcx2b =  '{0: >11}'.format(nswoled_eupcx2a)
# if x >= 3:
#     nswoled_eupcx3 = (nswoled_eu2[2] / nswoled_ww2[2]) * 100
#     nswoled_eupcx3a =  '{:.2f}% '.format(nswoled_eupcx3) 
#     nswoled_eupcx3b =  '{0: >11}'.format(nswoled_eupcx3a)
# if x >=4:
#     nswoled_eupcx4 = (nswoled_eu2[3] / nswoled_ww2[3]) * 100
#     nswoled_eupcx4a =  '{:.2f}% '.format(nswoled_eupcx4) 
#     nswoled_eupcx4b =  '{0: >11}'.format(nswoled_eupcx4a)

    
# nswoled_eupcxfy =   (nswoled_eufyltd[0] / nswoled_wwfyltd[0]) * 100
# nswoled_eupcxfy1 =  '{:.2f}% '.format(nswoled_eupcxfy) 
# nswoled_eupcxfy2 =  '{0: >11}'.format(nswoled_eupcxfy1)

# nswoled_eupcxltd =   (nswoled_eufyltd[1] / nswoled_wwfyltd[1]) * 100 
# nswoled_eupcxltd1 =  '{:.2f}% '.format(nswoled_eupcxltd) 
# nswoled_eupcxltd2 =  '{0: >11}'.format(nswoled_eupcxltd1)

# nswoled_eupcxfhalf =   (nswoled_eufyltd[2] / nswoled_wwfyltd[2]) * 100
# nswoled_eupcxfhalf1 =  '{:.2f}% '.format(nswoled_eupcxfhalf) 
# nswoled_eupcxfhalf2 =  '{0: >11}'.format(nswoled_eupcxfhalf1) #first half %

# nswoled_eupcxf3q =   (nswoled_eufyltd[3] / nswoled_wwfyltd[3]) * 100
# nswoled_eupcxf3q1 =  '{:.2f}% '.format(nswoled_eupcxf3q) 
# nswoled_eupcxf3q2 =  '{0: >11}'.format(nswoled_eupcxf3q1) #first 3 quarters %

# #last years numbers - Switch OLED EU
# nsw_oledeuly1= [ 0.01, 0.02, 0.03, 0.04, 0.05 ] #Q1-4, fy.

# nsw_oledeuly2 = [ ((nswoled_eu2[0] / nsw_oledeuly1[0]) - 1) * 100, ((nswoled_eu2[1] / nsw_oledeuly1[1]) -1) *100, ((nswoled_eu2[2] / nsw_oledeuly1[2]) - 1) * 100,  ((nswoled_eu2[3] / nsw_oledeuly1[3]) - 1) * 100]

# nsw_oledeuly3 = [ '{:+.2f}% '.format(elem) for elem in nsw_oledeuly2 ] #format all integers to string to add  and M

# nsw_oledeuly4 = [ '{0: >11}'.format(elem) for elem in nsw_oledeuly3]
# #format width

# nsw_oledeuyoyfy1 = [  (((nswoled_eu2[0] + nswoled_eu2[1]) / (nsw_oledeuly1[0] + nsw_oledeuly1[1])) - 1) * 100, (((nswoled_eu2[0] + nswoled_eu2[1] + nswoled_eu2[2]) / (nsw_oledeuly1[0] + nsw_oledeuly1[1] + nsw_oledeuly1[2])) - 1) * 100, ((nswoled_eufyltd[0] / nsw_oledeuly1[4]) - 1) * 100] #first half, first three quarters, fy cumulative

# nsw_oledeuyoyfy2 = [ '{:+.2f}% '.format(elem) for elem in nsw_oledeuyoyfy1 ] #format all integers to string to add  and M

# nsw_oledeuyoyfy3 = [ '{0: >11}'.format(elem) for elem in nsw_oledeuyoyfy2] #format width

# #Europe - Switch Hardware
# nswhw_eu1= [ 108 / 100, 202 / 100, 540 / 100, 540 / 100, 2158 / 100]
# #Q1-4, LTD at end of last fy
# #+++++++++++++++++++++++++++++
# nswhw_eu2 = [ nswhw_eu1[0], nswhw_eu1[1]  - nswhw_eu1[0], nswhw_eu1[2] - nswhw_eu1[1], nswhw_eu1[3] - nswhw_eu1[2]] #quarterly calculation + fiscal year cumulative at end, ltd,

# nswhw_eu3 = [ '{:.2f}M '.format(elem) for elem in nswhw_eu2 ] #format all integers to string to add  and M

# nswhw_eu4 = [ '{0: >11}'.format(elem) for elem in nswhw_eu3] #format width

# nswhw_eufyltd = [ nswhw_eu2[0] + nswhw_eu2[1] + nswhw_eu2[2] +nswhw_eu2[3] , nswhw_eu1[4] + nswhw_eu2[0] + nswhw_eu2[1] + nswhw_eu2[2] +nswhw_eu2[3], nswhw_eu2[0] + nswhw_eu2[1] , nswhw_eu2[0] + nswhw_eu2[1] + nswhw_eu2[2] ]  #+ fiscal year cumulative at end, ltd, first half, first three quarters

# nswhw_eufyltd1 = [ '{:.2f}M '.format(elem) for elem in nswhw_eufyltd ] #format all integers to string to add  and M

# nswhw_eufyltd2 = [ '{0: >11}'.format(elem) for elem in nswhw_eufyltd1] #format width

# #percentages
# if x >= 1:
#     nswhw_eupcx1 = (nswhw_eu2[0] / nswhw_ww2[0])  * 100 
#     nswhw_eupcx1a =  '{:.2f}% '.format(nswhw_eupcx1) 
#     nswhw_eupcx1b =  '{0: >11}'.format(nswhw_eupcx1a)
# if x >= 2:
#     nswhw_eupcx2 = (nswhw_eu2[1] / nswhw_ww2[1]) * 100
#     nswhw_eupcx2a =  '{:.2f}% '.format(nswhw_eupcx2) 
#     nswhw_eupcx2b =  '{0: >11}'.format(nswhw_eupcx2a)
# if x >= 3:
#     nswhw_eupcx3 = (nswhw_eu2[2] / nswhw_ww2[2]) * 100
#     nswhw_eupcx3a =  '{:.2f}% '.format(nswhw_eupcx3) 
#     nswhw_eupcx3b =  '{0: >11}'.format(nswhw_eupcx3a)
# if x >=4:
#     nswhw_eupcx4 = (nswhw_eu2[3] / nswhw_ww2[3]) * 100
#     nswhw_eupcx4a =  '{:.2f}% '.format(nswhw_eupcx4) 
#     nswhw_eupcx4b =  '{0: >11}'.format(nswhw_eupcx4a)

    
# nswhw_eupcxfy =   (nswhw_eufyltd[0] / nswhw_wwfyltd[0]) * 100
# nswhw_eupcxfy1 =  '{:.2f}% '.format(nswhw_eupcxfy) 
# nswhw_eupcxfy2 =  '{0: >11}'.format(nswhw_eupcxfy1)

# nswhw_eupcxltd =   (nswhw_eufyltd[1] / nswhw_wwfyltd[1]) * 100 
# nswhw_eupcxltd1 =  '{:.2f}% '.format(nswhw_eupcxltd) 
# nswhw_eupcxltd2 =  '{0: >11}'.format(nswhw_eupcxltd1)

# nswhw_eupcxfhalf =   (nswhw_eufyltd[2] / nswhw_wwfyltd[2]) * 100
# nswhw_eupcxfhalf1 =  '{:.2f}% '.format(nswhw_eupcxfhalf) 
# nswhw_eupcxfhalf2 =  '{0: >11}'.format(nswhw_eupcxfhalf1) #first half %

# nswhw_eupcxf3q =   (nswhw_eufyltd[3] / nswhw_wwfyltd[3]) * 100
# nswhw_eupcxf3q1 =  '{:.2f}% '.format(nswhw_eupcxf3q) 
# nswhw_eupcxf3q2 =  '{0: >11}'.format(nswhw_eupcxf3q1) #first 3 quarters %

# #last years numbers - Switch HW EU
# nsw_hweuly1= [ 1.61, 1.70, 2.97, 0.87, 7.15 ] #Q1-4, fy.

# nsw_hweuly2 = [ ((nswhw_eu2[0] / nsw_hweuly1[0]) - 1) * 100, ((nswhw_eu2[1] / nsw_hweuly1[1]) -1) *100, ((nswhw_eu2[2] / nsw_hweuly1[2]) - 1) * 100,  ((nswhw_eu2[3] / nsw_hweuly1[3]) - 1) * 100]

# nsw_hweuly3 = [ '{:+.2f}% '.format(elem) for elem in nsw_hweuly2 ] #format all integers to string to add  and M

# nsw_hweuly4 = [ '{0: >11}'.format(elem) for elem in nsw_hweuly3]
# #format width

# nsw_hweuyoyfy1 = [  (((nswhw_eu2[0] + nswhw_eu2[1]) / (nsw_hweuly1[0] + nsw_hweuly1[1])) - 1) * 100, (((nswhw_eu2[0] + nswhw_eu2[1] + nswhw_eu2[2]) / (nsw_hweuly1[0] + nsw_hweuly1[1] + nsw_hweuly1[2])) - 1) * 100, ((nswhw_eufyltd[0] / nsw_hweuly1[4]) - 1) * 100] #first half, first three quarters, fy cumulative

# nsw_hweuyoyfy2 = [ '{:+.2f}% '.format(elem) for elem in nsw_hweuyoyfy1 ] #format all integers to string to add  and M

# nsw_hweuyoyfy3 = [ '{0: >11}'.format(elem) for elem in nsw_hweuyoyfy2] #format width

# #Europe - Switch Software
# nswsw_eu1= [ 1135 / 100, 2563 / 100, 5085 / 100, 5085 / 100, 17215 / 100]
# #Q1-4, LTD at end of last fy
# #+++++++++++++++++++++++++++++
# nswsw_eu2 = [ nswsw_eu1[0], nswsw_eu1[1]  - nswsw_eu1[0], nswsw_eu1[2] - nswsw_eu1[1], nswsw_eu1[3] - nswsw_eu1[2]] #quarterly calculation + fiscal year cumulative at end, ltd,

# nswsw_eu3 = [ '{:.2f}M '.format(elem) for elem in nswsw_eu2 ] #format all integers to string to add  and M

# nswsw_eu4 = [ '{0: >11}'.format(elem) for elem in nswsw_eu3] #format width

# nswsw_eufyltd = [ nswsw_eu2[0] + nswsw_eu2[1] + nswsw_eu2[2] +nswsw_eu2[3] , nswsw_eu1[4] + nswsw_eu2[0] + nswsw_eu2[1] + nswsw_eu2[2] +nswsw_eu2[3], nswsw_eu2[0] + nswsw_eu2[1] , nswsw_eu2[0] + nswsw_eu2[1] + nswsw_eu2[2] ]  #+ fiscal year cumulative at end, ltd, first half, first three quarters

# nswsw_eufyltd1 = [ '{:.2f}M '.format(elem) for elem in nswsw_eufyltd ] #format all integers to string to add  and M

# nswsw_eufyltd2 = [ '{0: >11}'.format(elem) for elem in nswsw_eufyltd1] #format width

# #percentages
# if x >= 1:
#     nswsw_eupcx1 = (nswsw_eu2[0] / nswsw_ww2[0])  * 100 
#     nswsw_eupcx1a =  '{:.2f}% '.format(nswsw_eupcx1) 
#     nswsw_eupcx1b =  '{0: >11}'.format(nswsw_eupcx1a)
# if x >= 2:
#     nswsw_eupcx2 = (nswsw_eu2[1] / nswsw_ww2[1]) * 100
#     nswsw_eupcx2a =  '{:.2f}% '.format(nswsw_eupcx2) 
#     nswsw_eupcx2b =  '{0: >11}'.format(nswsw_eupcx2a)
# if x >= 3:
#     nswsw_eupcx3 = (nswsw_eu2[2] / nswsw_ww2[2]) * 100
#     nswsw_eupcx3a =  '{:.2f}% '.format(nswsw_eupcx3) 
#     nswsw_eupcx3b =  '{0: >11}'.format(nswsw_eupcx3a)
# if x >=4:
#     nswsw_eupcx4 = (nswsw_eu2[3] / nswsw_ww2[3]) * 100
#     nswsw_eupcx4a =  '{:.2f}% '.format(nswsw_eupcx4) 
#     nswsw_eupcx4b =  '{0: >11}'.format(nswsw_eupcx4a)
    
# nswsw_eupcxfy =   (nswsw_eufyltd[0] / nswsw_wwfyltd[0]) * 100
# nswsw_eupcxfy1 =  '{:.2f}% '.format(nswsw_eupcxfy) 
# nswsw_eupcxfy2 =  '{0: >11}'.format(nswsw_eupcxfy1)

# nswsw_eupcxltd =   (nswsw_eufyltd[1] / nswsw_wwfyltd[1]) * 100 
# nswsw_eupcxltd1 =  '{:.2f}% '.format(nswsw_eupcxltd) 
# nswsw_eupcxltd2 =  '{0: >11}'.format(nswsw_eupcxltd1)

# nswsw_eupcxfhalf =   (nswsw_eufyltd[2] / nswsw_wwfyltd[2]) * 100
# nswsw_eupcxfhalf1 =  '{:.2f}% '.format(nswsw_eupcxfhalf) 
# nswsw_eupcxfhalf2 =  '{0: >11}'.format(nswsw_eupcxfhalf1) #first half %

# nswsw_eupcxf3q =   (nswsw_eufyltd[3] / nswsw_wwfyltd[3]) * 100
# nswsw_eupcxf3q1 =  '{:.2f}% '.format(nswsw_eupcxf3q) 
# nswsw_eupcxf3q2 =  '{0: >11}'.format(nswsw_eupcxf3q1) #first 3 quarters %

# #last years numbers - Switch SW EU
# nsw_sweuly1= [ 14.31, 14.22, 23.85, 13.86, 66.24 ] #Q1-4, fy.

# nsw_sweuly2 = [ ((nswsw_eu2[0] / nsw_sweuly1[0]) - 1) * 100, ((nswsw_eu2[1] / nsw_sweuly1[1]) -1) *100, ((nswsw_eu2[2] / nsw_sweuly1[2]) - 1) * 100,  ((nswsw_eu2[3] / nsw_sweuly1[3]) - 1) * 100]

# nsw_sweuly3 = [ '{:+.2f}% '.format(elem) for elem in nsw_sweuly2 ] #format all integers to string to add  and M

# nsw_sweuly4 = [ '{0: >11}'.format(elem) for elem in nsw_sweuly3]
# #format width

# nsw_sweuyoyfy1 = [  (((nswsw_eu2[0] + nswsw_eu2[1]) / (nsw_sweuly1[0] + nsw_sweuly1[1])) - 1) * 100, (((nswsw_eu2[0] + nswsw_eu2[1] + nswsw_eu2[2]) / (nsw_sweuly1[0] + nsw_sweuly1[1] + nsw_sweuly1[2])) - 1) * 100, ((nswsw_eufyltd[0] / nsw_sweuly1[4]) - 1) * 100] #first half, first three quarters, fy cumulative

# nsw_sweuyoyfy2 = [ '{:+.2f}% '.format(elem) for elem in nsw_sweuyoyfy1 ] #format all integers to string to add  and M

# nsw_sweuyoyfy3 = [ '{0: >11}'.format(elem) for elem in nsw_sweuyoyfy2] #format width

# # Other - Switch OG
# nswog_other1= [ 56 / 100, 109 / 100, 159 / 100, 159 / 100, 870 / 100]
# #Q1-4, LTD at end of last fy
# #+++++++++++++++++++++++++++++
# nswog_other2 = [ nswog_other1[0], nswog_other1[1]  - nswog_other1[0], nswog_other1[2] - nswog_other1[1], nswog_other1[3] - nswog_other1[2]] #quarterly calculation

# nswog_other3 = [ '{:.2f}M '.format(elem) for elem in nswog_other2 ] #format all integers to string to add  and M

# nswog_other4 = [ '{0: >11}'.format(elem) for elem in nswog_other3] #format width

# nswog_otherfyltd = [ nswog_other2[0] + nswog_other2[1] + nswog_other2[2] +nswog_other2[3] , nswog_other1[4] + nswog_other2[0] + nswog_other2[1] + nswog_other2[2] +nswog_other2[3], nswog_other2[0] + nswog_other2[1],  nswog_other2[0] + nswog_other2[1] + nswog_other2[2]]  #+ fiscal year cumulative at end, ltd, first half, first three quarters

# nswog_otherfyltd1 = [ '{:.2f}M '.format(elem) for elem in nswog_otherfyltd ] #format all integers to string to add  and M

# nswog_otherfyltd2 = [ '{0: >11}'.format(elem) for elem in nswog_otherfyltd1] #format width

# #percentages
# if x >= 1:
#     nswog_otherpcx1 = (nswog_other2[0] / nswog_ww2[0])  *100
#     nswog_otherpcx1a =  '{:.2f}% '.format(nswog_otherpcx1) 
#     nswog_otherpcx1b =  '{0: >11}'.format(nswog_otherpcx1a)
# if x >= 2:
#     nswog_otherpcx2 = (nswog_other2[1] / nswog_ww2[1]) * 100
#     nswog_otherpcx2a =  '{:.2f}% '.format(nswog_otherpcx2) 
#     nswog_otherpcx2b =  '{0: >11}'.format(nswog_otherpcx2a)
# if x >= 3:
#     nswog_otherpcx3 = (nswog_other2[2] / nswog_ww2[2]) * 100
#     nswog_otherpcx3a =  '{:.2f}% '.format(nswog_otherpcx3) 
#     nswog_otherpcx3b =  '{0: >11}'.format(nswog_otherpcx3a)
# if x >=4:
#     nswog_otherpcx4 = (nswog_other2[3] / nswog_ww2[3]) * 100
#     nswog_otherpcx4a =  '{:.2f}% '.format(nswog_otherpcx4) 
#     nswog_otherpcx4b =  '{0: >11}'.format(nswog_otherpcx4a)

    
# nswog_otherpcxfy =   (nswog_otherfyltd[0] / nswog_wwfyltd[0]) * 100
# nswog_otherpcxfy1 =  '{:.2f}% '.format(nswog_otherpcxfy) 
# nswog_otherpcxfy2 =  '{0: >11}'.format(nswog_otherpcxfy1) #fy %

# nswog_otherpcxltd =   (nswog_otherfyltd[1] / nswog_wwfyltd[1]) * 100 
# nswog_otherpcxltd1 =  '{:.2f}% '.format(nswog_otherpcxltd) 
# nswog_otherpcxltd2 =  '{0: >11}'.format(nswog_otherpcxltd1) #ltd %

# nswog_otherpcxfhalf =   (nswog_otherfyltd[2] / nswog_wwfyltd[2]) * 100
# nswog_otherpcxfhalf1 =  '{:.2f}% '.format(nswog_otherpcxfhalf) 
# nswog_otherpcxfhalf2 =  '{0: >11}'.format(nswog_otherpcxfhalf1) #first half %

# nswog_otherpcxf3q =   (nswog_otherfyltd[3] / nswog_wwfyltd[3]) * 100
# nswog_otherpcxf3q1 =  '{:.2f}% '.format(nswog_otherpcxf3q) 
# nswog_otherpcxf3q2 =  '{0: >11}'.format(nswog_otherpcxf3q1) #first 3 quarters %

# #last years numbers - Switch OG other
# nsw_ogotherly1= [ 0.73, 0.95, 1.21, 0.56, 3.45 ] #Q1-4, fy.

# nsw_ogotherly2 = [ ((nswog_other2[0] / nsw_ogotherly1[0]) - 1) * 100, ((nswog_other2[1] / nsw_ogotherly1[1]) -1) *100, ((nswog_other2[2] / nsw_ogotherly1[2]) - 1) * 100,  ((nswog_other2[3] / nsw_ogotherly1[3]) - 1) * 100]

# nsw_ogotherly3 = [ '{:+.2f}% '.format(elem) for elem in nsw_ogotherly2 ] #format all integers to string to add  and M

# nsw_ogotherly4 = [ '{0: >11}'.format(elem) for elem in nsw_ogotherly3]
# #format width

# nsw_ogotheryoyfy1 = [  (((nswog_other2[0] + nswog_other2[1]) / (nsw_ogotherly1[0] + nsw_ogotherly1[1])) - 1) * 100, (((nswog_other2[0] + nswog_other2[1] + nswog_other2[2]) / (nsw_ogotherly1[0] + nsw_ogotherly1[1] + nsw_ogotherly1[2])) - 1) * 100, ((nswog_otherfyltd[0] / nsw_ogotherly1[4]) - 1) * 100] #first half, first three quarters, fy cumulative

# nsw_ogotheryoyfy2 = [ '{:+.2f}% '.format(elem) for elem in nsw_ogotheryoyfy1 ] #format all integers to string to add  and M

# nsw_ogotheryoyfy3 = [ '{0: >11}'.format(elem) for elem in nsw_ogotheryoyfy2] #format width

# #Other - Switch Lite
# nswl_other1= [ 5 / 100, 10 / 100, 18 / 100, 18 / 100, 101 / 100]
# #Q1-4, LTD at end of last fy
# #+++++++++++++++++++++++++++++
# nswl_other2 = [ nswl_other1[0], nswl_other1[1]  - nswl_other1[0], nswl_other1[2] - nswl_other1[1], nswl_other1[3] - nswl_other1[2] ] #quarterly calculation + fiscal year cumulative at end, ltd,

# nswl_other3 = [ '{:.2f}M '.format(elem) for elem in nswl_other2 ] #format all integers to string to add  and M

# nswl_other4 = [ '{0: >11}'.format(elem) for elem in nswl_other3] #format width

# nswl_otherfyltd = [ nswl_other2[0] + nswl_other2[1] + nswl_other2[2] +nswl_other2[3] , nswl_other1[4] + nswl_other2[0] + nswl_other2[1] + nswl_other2[2] +nswl_other2[3], nswl_other2[0] + nswl_other2[1], nswl_other2[0] + nswl_other2[1] + nswl_other2[2]  ]  #+ fiscal year cumulative at end, ltd, first half, first three quarters

# nswl_otherfyltd1 = [ '{:.2f}M '.format(elem) for elem in nswl_otherfyltd ] #format all integers to string to add  and M

# nswl_otherfyltd2 = [ '{0: >11}'.format(elem) for elem in nswl_otherfyltd1] #format width

# #percentages
# if x >= 1:
#     nswl_otherpcx1 = (nswl_other2[0] / nswl_ww2[0])  * 100 
#     nswl_otherpcx1a =  '{:.2f}% '.format(nswl_otherpcx1) 
#     nswl_otherpcx1b =  '{0: >11}'.format(nswl_otherpcx1a)
# if x >= 2:
#     nswl_otherpcx2 = (nswl_other2[1] / nswl_ww2[1]) * 100
#     nswl_otherpcx2a =  '{:.2f}% '.format(nswl_otherpcx2) 
#     nswl_otherpcx2b =  '{0: >11}'.format(nswl_otherpcx2a)
# if x >= 3:
#     nswl_otherpcx3 = (nswl_other2[2] / nswl_ww2[2]) * 100
#     nswl_otherpcx3a =  '{:.2f}% '.format(nswl_otherpcx3) 
#     nswl_otherpcx3b =  '{0: >11}'.format(nswl_otherpcx3a)
# if x >=4:
#     nswl_otherpcx4 = (nswl_other2[3] / nswl_ww2[3]) * 100
#     nswl_otherpcx4a =  '{:.2f}% '.format(nswl_otherpcx4) 
#     nswl_otherpcx4b =  '{0: >11}'.format(nswl_otherpcx4a)

    
# nswl_otherpcxfy =   (nswl_otherfyltd[0] / nswl_wwfyltd[0]) * 100
# nswl_otherpcxfy1 =  '{:.2f}% '.format(nswl_otherpcxfy) 
# nswl_otherpcxfy2 =  '{0: >11}'.format(nswl_otherpcxfy1)

# nswl_otherpcxltd =   (nswl_otherfyltd[1] / nswl_wwfyltd[1]) * 100 
# nswl_otherpcxltd1 =  '{:.2f}% '.format(nswl_otherpcxltd) 
# nswl_otherpcxltd2 =  '{0: >11}'.format(nswl_otherpcxltd1)

# nswl_otherpcxfhalf =   (nswl_otherfyltd[2] / nswl_wwfyltd[2]) * 100
# nswl_otherpcxfhalf1 =  '{:.2f}% '.format(nswl_otherpcxfhalf) 
# nswl_otherpcxfhalf2 =  '{0: >11}'.format(nswl_otherpcxfhalf1) #first half %

# nswl_otherpcxf3q =   (nswl_otherfyltd[3] / nswl_wwfyltd[3]) * 100
# nswl_otherpcxf3q1 =  '{:.2f}% '.format(nswl_otherpcxf3q) 
# nswl_otherpcxf3q2 =  '{0: >11}'.format(nswl_otherpcxf3q1) #first 3 quarters %

# #last years numbers - Switch Lite other
# nsw_liteotherly1= [ 0.20, 0.16, 0.09, 0.03, 0.48 ] #Q1-4, fy.

# nsw_liteotherly2 = [ ((nswl_other2[0] / nsw_liteotherly1[0]) - 1) * 100, ((nswl_other2[1] / nsw_liteotherly1[1]) -1) *100, ((nswl_other2[2] / nsw_liteotherly1[2]) - 1) * 100,  ((nswl_other2[3] / nsw_liteotherly1[3]) - 1) * 100]

# nsw_liteotherly3 = [ '{:+.2f}% '.format(elem) for elem in nsw_liteotherly2 ] #format all integers to string to add  and M

# nsw_liteotherly4 = [ '{0: >11}'.format(elem) for elem in nsw_liteotherly3]
# #format width

# nsw_liteotheryoyfy1 = [  (((nswl_other2[0] + nswl_other2[1]) / (nsw_liteotherly1[0] + nsw_liteotherly1[1])) - 1) * 100, (((nswl_other2[0] + nswl_other2[1] + nswl_other2[2]) / (nsw_liteotherly1[0] + nsw_liteotherly1[1] + nsw_liteotherly1[2])) - 1) * 100, ((nswl_otherfyltd[0] / nsw_liteotherly1[4]) - 1) * 100] #first half, first three quarters, fy cumulative

# nsw_liteotheryoyfy2 = [ '{:+.2f}% '.format(elem) for elem in nsw_liteotheryoyfy1 ] #format all integers to string to add  and M

# nsw_liteotheryoyfy3 = [ '{0: >11}'.format(elem) for elem in nsw_liteotheryoyfy2] #format width

# #Other - Switch OLED
# nswoled_other1= [ 0 / 100, 0 / 100, 61 / 100, 61 / 100, 0 / 100]
# #Q1-4, LTD at end of last fy
# #+++++++++++++++++++++++++++++
# nswoled_other2 = [ nswoled_other1[0], nswoled_other1[1]  - nswoled_other1[0], nswoled_other1[2] - nswoled_other1[1], nswoled_other1[3] - nswoled_other1[2] ] #quarterly calculation + fiscal year cumulative at end, ltd,

# nswoled_other3 = [ '{:.2f}M '.format(elem) for elem in nswoled_other2 ] #format all integers to string to add  and M

# nswoled_other4 = [ '{0: >11}'.format(elem) for elem in nswoled_other3] #format width

# nswoled_otherfyltd = [ nswoled_other2[0] + nswoled_other2[1] + nswoled_other2[2] +nswoled_other2[3] , nswoled_other1[4] + nswoled_other2[0] + nswoled_other2[1] + nswoled_other2[2] +nswoled_other2[3], nswoled_other2[0] + nswoled_other2[1], nswoled_other2[0] + nswoled_other2[1] + nswoled_other2[2]  ]  #+ fiscal year cumulative at end, ltd, first half, first three quarters

# nswoled_otherfyltd1 = [ '{:.2f}M '.format(elem) for elem in nswoled_otherfyltd ] #format all integers to string to add  and M

# nswoled_otherfyltd2 = [ '{0: >11}'.format(elem) for elem in nswoled_otherfyltd1] #format width

# #percentages
# if x >= 1:
#     nswoled_otherpcx1 = (nswoled_other2[0] / nswoled_ww2[0])  * 100 
#     nswoled_otherpcx1a =  '{:.2f}% '.format(nswoled_otherpcx1) 
#     nswoled_otherpcx1b =  '{0: >11}'.format(nswoled_otherpcx1a)
# if x >= 2:
#     nswoled_otherpcx2 = (nswoled_other2[1] / nswoled_ww2[1]) * 100
#     nswoled_otherpcx2a =  '{:.2f}% '.format(nswoled_otherpcx2) 
#     nswoled_otherpcx2b =  '{0: >11}'.format(nswoled_otherpcx2a)
# if x >= 3:
#     nswoled_otherpcx3 = (nswoled_other2[2] / nswoled_ww2[2]) * 100
#     nswoled_otherpcx3a =  '{:.2f}% '.format(nswoled_otherpcx3) 
#     nswoled_otherpcx3b =  '{0: >11}'.format(nswoled_otherpcx3a)
# if x >=4:
#     nswoled_otherpcx4 = (nswoled_other2[3] / nswoled_ww2[3]) * 100
#     nswoled_otherpcx4a =  '{:.2f}% '.format(nswoled_otherpcx4) 
#     nswoled_otherpcx4b =  '{0: >11}'.format(nswoled_otherpcx4a)

    
# nswoled_otherpcxfy =   (nswoled_otherfyltd[0] / nswoled_wwfyltd[0]) * 100
# nswoled_otherpcxfy1 =  '{:.2f}% '.format(nswoled_otherpcxfy) 
# nswoled_otherpcxfy2 =  '{0: >11}'.format(nswoled_otherpcxfy1)

# nswoled_otherpcxltd =   (nswoled_otherfyltd[1] / nswoled_wwfyltd[1]) * 100 
# nswoled_otherpcxltd1 =  '{:.2f}% '.format(nswoled_otherpcxltd) 
# nswoled_otherpcxltd2 =  '{0: >11}'.format(nswoled_otherpcxltd1)

# nswoled_otherpcxfhalf =   (nswoled_otherfyltd[2] / nswoled_wwfyltd[2]) * 100
# nswoled_otherpcxfhalf1 =  '{:.2f}% '.format(nswoled_otherpcxfhalf) 
# nswoled_otherpcxfhalf2 =  '{0: >11}'.format(nswoled_otherpcxfhalf1) #first half %

# nswoled_otherpcxf3q =   (nswoled_otherfyltd[3] / nswoled_wwfyltd[3]) * 100
# nswoled_otherpcxf3q1 =  '{:.2f}% '.format(nswoled_otherpcxf3q) 
# nswoled_otherpcxf3q2 =  '{0: >11}'.format(nswoled_otherpcxf3q1) #first 3 quarters %

# #last years numbers - Switch OLED other
# nsw_oledotherly1= [ 0.01, 0.02, 0.03, 0.04, 0.05 ] #Q1-4, fy.

# nsw_oledotherly2 = [ ((nswoled_other2[0] / nsw_oledotherly1[0]) - 1) * 100, ((nswoled_other2[1] / nsw_oledotherly1[1]) -1) *100, ((nswoled_other2[2] / nsw_oledotherly1[2]) - 1) * 100,  ((nswoled_other2[3] / nsw_oledotherly1[3]) - 1) * 100]

# nsw_oledotherly3 = [ '{:+.2f}% '.format(elem) for elem in nsw_oledotherly2 ] #format all integers to string to add  and M

# nsw_oledotherly4 = [ '{0: >11}'.format(elem) for elem in nsw_oledotherly3]
# #format width

# nsw_oledotheryoyfy1 = [  (((nswoled_other2[0] + nswoled_other2[1]) / (nsw_oledotherly1[0] + nsw_oledotherly1[1])) - 1) * 100, (((nswoled_other2[0] + nswoled_other2[1] + nswoled_other2[2]) / (nsw_oledotherly1[0] + nsw_oledotherly1[1] + nsw_oledotherly1[2])) - 1) * 100, ((nswoled_otherfyltd[0] / nsw_oledotherly1[4]) - 1) * 100] #first half, first three quarters, fy cumulative

# nsw_oledotheryoyfy2 = [ '{:+.2f}% '.format(elem) for elem in nsw_oledotheryoyfy1 ] #format all integers to string to add  and M

# nsw_oledotheryoyfy3 = [ '{0: >11}'.format(elem) for elem in nsw_oledotheryoyfy2] #format width

# #Other - Switch Hardware
# nswhw_other1= [ 62 / 100, 119 / 100, 238 / 100, 238 / 100, 971 / 100]
# #Q1-4, LTD at end of last fy
# #+++++++++++++++++++++++++++++
# nswhw_other2 = [ nswhw_other1[0], nswhw_other1[1]  - nswhw_other1[0], nswhw_other1[2] - nswhw_other1[1], nswhw_other1[3] - nswhw_other1[2] ] #quarterly calculation + fiscal year cumulative at end, ltd,

# nswhw_other3 = [ '{:.2f}M '.format(elem) for elem in nswhw_other2 ] #format all integers to string to add  and M

# nswhw_other4 = [ '{0: >11}'.format(elem) for elem in nswhw_other3] #format width

# nswhw_otherfyltd = [ nswhw_other2[0] + nswhw_other2[1] + nswhw_other2[2] +nswhw_other2[3] , nswhw_other1[4] + nswhw_other2[0] + nswhw_other2[1] + nswhw_other2[2] +nswhw_other2[3], nswhw_other2[0] + nswhw_other2[1], nswhw_other2[0] + nswhw_other2[1] + nswhw_other2[2]  ]  #+ fiscal year cumulative at end, ltd, first half, first three quarters

# nswhw_otherfyltd1 = [ '{:.2f}M '.format(elem) for elem in nswhw_otherfyltd ] #format all integers to string to add  and M

# nswhw_otherfyltd2 = [ '{0: >11}'.format(elem) for elem in nswhw_otherfyltd1] #format width

# #percentages
# if x >= 1:
#     nswhw_otherpcx1 = (nswhw_other2[0] / nswhw_ww2[0])  * 100 
#     nswhw_otherpcx1a =  '{:.2f}% '.format(nswhw_otherpcx1) 
#     nswhw_otherpcx1b =  '{0: >11}'.format(nswhw_otherpcx1a)
# if x >= 2:
#     nswhw_otherpcx2 = (nswhw_other2[1] / nswhw_ww2[1]) * 100
#     nswhw_otherpcx2a =  '{:.2f}% '.format(nswhw_otherpcx2) 
#     nswhw_otherpcx2b =  '{0: >11}'.format(nswhw_otherpcx2a)
# if x >= 3:
#     nswhw_otherpcx3 = (nswhw_other2[2] / nswhw_ww2[2]) * 100
#     nswhw_otherpcx3a =  '{:.2f}% '.format(nswhw_otherpcx3) 
#     nswhw_otherpcx3b =  '{0: >11}'.format(nswhw_otherpcx3a)
# if x >=4:
#     nswhw_otherpcx4 = (nswhw_other2[3] / nswhw_ww2[3]) * 100
#     nswhw_otherpcx4a =  '{:.2f}% '.format(nswhw_otherpcx4) 
#     nswhw_otherpcx4b =  '{0: >11}'.format(nswhw_otherpcx4a)

    
# nswhw_otherpcxfy =   (nswhw_otherfyltd[0] / nswhw_wwfyltd[0]) * 100
# nswhw_otherpcxfy1 =  '{:.2f}% '.format(nswhw_otherpcxfy) 
# nswhw_otherpcxfy2 =  '{0: >11}'.format(nswhw_otherpcxfy1)

# nswhw_otherpcxltd =   (nswhw_otherfyltd[1] / nswhw_wwfyltd[1]) * 100 
# nswhw_otherpcxltd1 =  '{:.2f}% '.format(nswhw_otherpcxltd) 
# nswhw_otherpcxltd2 =  '{0: >11}'.format(nswhw_otherpcxltd1)

# nswhw_otherpcxfhalf =   (nswhw_otherfyltd[2] / nswhw_wwfyltd[2]) * 100
# nswhw_otherpcxfhalf1 =  '{:.2f}% '.format(nswhw_otherpcxfhalf) 
# nswhw_otherpcxfhalf2 =  '{0: >11}'.format(nswhw_otherpcxfhalf1) #first half %

# nswhw_otherpcxf3q =   (nswhw_otherfyltd[3] / nswhw_wwfyltd[3]) * 100
# nswhw_otherpcxf3q1 =  '{:.2f}% '.format(nswhw_otherpcxf3q) 
# nswhw_otherpcxf3q2 =  '{0: >11}'.format(nswhw_otherpcxf3q1) #first 3 quarters %

# #last years numbers - Switch HW other
# nsw_hwotherly1= [ 0.92, 1.12, 1.29, 0.60, 3.93 ] #Q1-4, fy.

# nsw_hwotherly2 = [ ((nswhw_other2[0] / nsw_hwotherly1[0]) - 1) * 100, ((nswhw_other2[1] / nsw_hwotherly1[1]) -1) *100, ((nswhw_other2[2] / nsw_hwotherly1[2]) - 1) * 100,  ((nswhw_other2[3] / nsw_hwotherly1[3]) - 1) * 100]

# nsw_hwotherly3 = [ '{:+.2f}% '.format(elem) for elem in nsw_hwotherly2 ] #format all integers to string to add  and M

# nsw_hwotherly4 = [ '{0: >11}'.format(elem) for elem in nsw_hwotherly3]
# #format width

# nsw_hwotheryoyfy1 = [  (((nswhw_other2[0] + nswhw_other2[1]) / (nsw_hwotherly1[0] + nsw_hwotherly1[1])) - 1) * 100, (((nswhw_other2[0] + nswhw_other2[1] + nswhw_other2[2]) / (nsw_hwotherly1[0] + nsw_hwotherly1[1] + nsw_hwotherly1[2])) - 1) * 100, ((nswhw_otherfyltd[0] / nsw_hwotherly1[4]) - 1) * 100] #first half, first three quarters, fy cumulative

# nsw_hwotheryoyfy2 = [ '{:+.2f}% '.format(elem) for elem in nsw_hwotheryoyfy1 ] #format all integers to string to add  and M

# nsw_hwotheryoyfy3 = [ '{0: >11}'.format(elem) for elem in nsw_hwotheryoyfy2] #format width


# #Other - Switch Software
# nswsw_other1= [ 346 / 100, 700 / 100, 1283 / 100, 1283 / 100, 4174 / 100]
# #Q1-4, LTD at end of last fy
# #+++++++++++++++++++++++++++++
# nswsw_other2 = [ nswsw_other1[0], nswsw_other1[1]  - nswsw_other1[0], nswsw_other1[2] - nswsw_other1[1], nswsw_other1[3] - nswsw_other1[2]] #quarterly calculation + fiscal year cumulative at end, ltd,

# nswsw_other3 = [ '{:.2f}M '.format(elem) for elem in nswsw_other2 ] #format all integers to string to add  and M

# nswsw_other4 = [ '{0: >11}'.format(elem) for elem in nswsw_other3] #format width

# nswsw_otherfyltd = [ nswsw_other2[0] + nswsw_other2[1] + nswsw_other2[2] +nswsw_other2[3] , nswsw_other1[4] + nswsw_other2[0] + nswsw_other2[1] + nswsw_other2[2] +nswsw_other2[3], nswsw_other2[0] + nswsw_other2[1], nswsw_other2[0] + nswsw_other2[1] + nswsw_other2[2]  ]  #+ fiscal year cumulative at end, ltd, first half, first three quarters

# nswsw_otherfyltd1 = [ '{:.2f}M '.format(elem) for elem in nswsw_otherfyltd ] #format all integers to string to add  and M

# nswsw_otherfyltd2 = [ '{0: >11}'.format(elem) for elem in nswsw_otherfyltd1] #format width

# #percentages
# if x >= 1:
#     nswsw_otherpcx1 = (nswsw_other2[0] / nswsw_ww2[0])  * 100 
#     nswsw_otherpcx1a =  '{:.2f}% '.format(nswsw_otherpcx1) 
#     nswsw_otherpcx1b =  '{0: >11}'.format(nswsw_otherpcx1a)
# if x >= 2:
#     nswsw_otherpcx2 = (nswsw_other2[1] / nswsw_ww2[1]) * 100
#     nswsw_otherpcx2a =  '{:.2f}% '.format(nswsw_otherpcx2) 
#     nswsw_otherpcx2b =  '{0: >11}'.format(nswsw_otherpcx2a)
# if x >= 3:
#     nswsw_otherpcx3 = (nswsw_other2[2] / nswsw_ww2[2]) * 100
#     nswsw_otherpcx3a =  '{:.2f}% '.format(nswsw_otherpcx3) 
#     nswsw_otherpcx3b =  '{0: >11}'.format(nswsw_otherpcx3a)
# if x >=4:
#     nswsw_otherpcx4 = (nswsw_other2[3] / nswsw_ww2[3]) * 100
#     nswsw_otherpcx4a =  '{:.2f}% '.format(nswsw_otherpcx4) 
#     nswsw_otherpcx4b =  '{0: >11}'.format(nswsw_otherpcx4a)
    
# nswsw_otherpcxfy =   (nswsw_otherfyltd[0] / nswsw_wwfyltd[0]) * 100
# nswsw_otherpcxfy1 =  '{:.2f}% '.format(nswsw_otherpcxfy) 
# nswsw_otherpcxfy2 =  '{0: >11}'.format(nswsw_otherpcxfy1)

# nswsw_otherpcxltd =   (nswsw_otherfyltd[1] / nswsw_wwfyltd[1]) * 100 
# nswsw_otherpcxltd1 =  '{:.2f}% '.format(nswsw_otherpcxltd) 
# nswsw_otherpcxltd2 =  '{0: >11}'.format(nswsw_otherpcxltd1)

# nswsw_otherpcxfhalf =   (nswsw_otherfyltd[2] / nswsw_wwfyltd[2]) * 100
# nswsw_otherpcxfhalf1 =  '{:.2f}% '.format(nswsw_otherpcxfhalf) 
# nswsw_otherpcxfhalf2 =  '{0: >11}'.format(nswsw_otherpcxfhalf1) #first half %

# nswsw_otherpcxf3q =   (nswsw_otherfyltd[3] / nswsw_wwfyltd[3]) * 100
# nswsw_otherpcxf3q1 =  '{:.2f}% '.format(nswsw_otherpcxf3q) 
# nswsw_otherpcxf3q2 =  '{0: >11}'.format(nswsw_otherpcxf3q1) #first 3 quarters %

# #last years numbers - Switch SW other
# nsw_swotherly1= [ 4.62, 3.72, 4.16, 4.70, 17.20 ] #Q1-4, fy.

# nsw_swotherly2 = [ ((nswsw_other2[0] / nsw_swotherly1[0]) - 1) * 100, ((nswsw_other2[1] / nsw_swotherly1[1]) -1) *100, ((nswsw_other2[2] / nsw_swotherly1[2]) - 1) * 100,  ((nswsw_other2[3] / nsw_swotherly1[3]) - 1) * 100]

# nsw_swotherly3 = [ '{:+.2f}% '.format(elem) for elem in nsw_swotherly2 ] #format all integers to string to add  and M

# nsw_swotherly4 = [ '{0: >11}'.format(elem) for elem in nsw_swotherly3]
# #format width

# nsw_swotheryoyfy1 = [  (((nswsw_other2[0] + nswsw_other2[1]) / (nsw_swotherly1[0] + nsw_swotherly1[1])) - 1) * 100, (((nswsw_other2[0] + nswsw_other2[1] + nswsw_other2[2]) / (nsw_swotherly1[0] + nsw_swotherly1[1] + nsw_swotherly1[2])) - 1) * 100, ((nswsw_otherfyltd[0] / nsw_swotherly1[4]) - 1) * 100] #first half, first three quarters, fy cumulative

# nsw_swotheryoyfy2 = [ '{:+.2f}% '.format(elem) for elem in nsw_swotheryoyfy1 ] #format all integers to string to add  and M

# nsw_swotheryoyfy3 = [ '{0: >11}'.format(elem) for elem in nsw_swotheryoyfy2] #format width

# #Total WW percentages - Lite, OLED, HW, SW
# # not needed 1% inaccurate
# #nswl_totalpcx1 = [ nswl_jppcx1 + nswl_tapcx1 + nswl_eupcx1 + nswl_otherpcx1]
# #nswl_totalpcx1a =  [ '{:.2f}% '.format(elem) for elem in nswl_totalpcx1 ]
# #nswl_totalpcx1b =  [ '{0: >11}'.format(elem) for elem in nswl_totalpcx1a ]

# # Printing Switch OG

# print("+--------------------------------------------------------------------------+")
# print("|" + hd1[8] + "|" + hd1[0] + "|" + hd1[1] +"|" + hd1[2] + "|" + hd1[3] + "|")
# print("+--------------------------------------------------------------------------+")
# #print first quarter
# if x >= 1:
#     print("|"  +  rw1[0] +  "|" + nswog_jp4[0] + "|" + nswog_ta4[0] + "|" + nswog_eu4[0] +  "|" +  nswog_other4[0] + "|" )
#     print("|"  + " 1st Quarter YoY%         " +   "|" + nsw_ogjply4[0] + "|" + nsw_ogtaly4[0] + "|" + nsw_ogeuly4[0] + "|" + nsw_ogotherly4[0] + "|")
#     print("|"  +  rw1[5] +  "|" + nswog_jppcx1b + "|" + nswog_tapcx1b + "|" + nswog_eupcx1b +  "|" +  nswog_otherpcx1b + "|")    
    
# #print second quarter
# if x >= 2:
#     print("+--------------------------------------------------------------------------+")
#     print("|"  +  rw1[1] +  "|" + nswog_jp4[1] + "|" + nswog_ta4[1] + "|" + nswog_eu4[1] +  "|" +  nswog_other4[1] + "|" )
#     print("|"  + " 2nd Quarter YoY%         " +   "|" + nsw_ogjply4[1] + "|" + nsw_ogtaly4[1] + "|" + nsw_ogeuly4[1] + "|" + nsw_ogotherly4[1] + "|")
#     print("|"  +  rw1[6] +  "|" + nswog_jppcx2b + "|" + nswog_tapcx2b + "|" + nswog_eupcx2b +  "|" +  nswog_otherpcx2b + "|")    
    
# #print third quarter
# if x >= 3:
#     print("+--------------------------------------------------------------------------+")
#     print("|"  +  rw1[2] +  "|" + nswog_jp4[2] + "|" + nswog_ta4[2] + "|" + nswog_eu4[2] +  "|" +  nswog_other4[2] + "|" )
#     print("|"  + " 3rd Quarter YoY%         " +   "|" + nsw_ogjply4[2] + "|" + nsw_ogtaly4[2] + "|" + nsw_ogeuly4[2] + "|" + nsw_ogotherly4[2] + "|")
#     print("|"  +  rw1[7] +  "|" + nswog_jppcx3b + "|" + nswog_tapcx3b + "|" + nswog_eupcx3b +  "|" +  nswog_otherpcx3b + "|")    
    
# #print fourth quarter
# if x >=4:
#     print("+--------------------------------------------------------------------------+")
#     print("|"  +  rw1[3] +  "|" + nswog_jp4[3] + "|" + nswog_ta4[3] + "|" + nswog_eu4[3] +  "|" +  nswog_other4[3] + "|" )
#     print("|"  + " 4th Quarter YoY%         " +   "|" + nsw_ogjply4[3] + "|" + nsw_ogtaly4[3] + "|" + nsw_ogeuly4[3] + "|" + nsw_ogotherly4[3] + "|")
#     print("|"  +  rw1[8] +  "|" + nswog_jppcx4b + "|" + nswog_tapcx4b + "|" + nswog_eupcx4b +  "|" +  nswog_otherpcx4b + "|")    

# print("+==========================================================================+") #border

# #print fy cumulative
# if x >= 2:
#     print("|"  +  " First Half               " +  "|" + nswog_jpfyltd2[2] + "|" + nswog_tafyltd2[2] + "|" + nswog_eufyltd2[2] +  "|" +  nswog_otherfyltd2[2] + "|"   )
#     print("|"  +  " First Half YoY%          " +  "|" + nsw_ogjpyoyfy3[0] + "|" + nsw_ogtayoyfy3[0] + "|" + nsw_ogeuyoyfy3[0] +  "|" +  nsw_ogotheryoyfy3[0] + "|"   )
#     print("|"  +  " First Half WW%           " +  "|" + nswog_jppcxfhalf2 + "|" + nswog_tapcxfhalf2 + "|" + nswog_eupcxfhalf2 +  "|" +  nswog_otherpcxfhalf2 + "|"   )    
#     print("+--------------------------------------------------------------------------+")

# if x >= 3:
#     print("|"  +  " First 3 Quarters         " +  "|" + nswog_jpfyltd2[3] + "|" + nswog_tafyltd2[3] + "|" + nswog_eufyltd2[3] +  "|" +  nswog_otherfyltd2[3] + "|"   )
#     print("|"  +  " First 3 Qtrs YoY%        " +  "|" + nsw_ogjpyoyfy3[1] + "|" + nsw_ogtayoyfy3[1] + "|" + nsw_ogeuyoyfy3[1] +  "|" +  nsw_ogotheryoyfy3[1] + "|"   )
#     print("|"  +  " First 3 Qtrs WW%         " +  "|" + nswog_jppcxf3q2 + "|" + nswog_tapcxf3q2 + "|" + nswog_eupcxf3q2 +  "|" +  nswog_otherpcxf3q2 + "|"   )    
#     print("+--------------------------------------------------------------------------+")
    
    
# print("|"  +  rw1[4] +  "|" + nswog_jpfyltd2[0] + "|" + nswog_tafyltd2[0] + "|" + nswog_eufyltd2[0] +  "|" +  nswog_otherfyltd2[0] + "|"   )
# print("|"  +  " FY3/22 Cumulative YoY%   " +  "|" + nsw_ogjpyoyfy3[1] + "|" + nsw_ogtayoyfy3[1] + "|" + nsw_ogeuyoyfy3[1] +  "|" +  nsw_ogotheryoyfy3[1] + "|"   )
# print("|"  +  rw1[9] +  "|" + nswog_jppcxfy2 + "|" + nswog_tapcxfy2 + "|" + nswog_eupcxfy2 +  "|" +  nswog_otherpcxfy2 + "|"   )    

# print("+--------------------------------------------------------------------------+")
# #print ltd

# print("|"  +  rw1[10] +  "|" + nswog_jpfyltd2[1] + "|" + nswog_tafyltd2[1] + "|" + nswog_eufyltd2[1] +  "|" +  nswog_otherfyltd2[1] + "|"   )

# print("|"  +  rw1[11] +  "|" + nswog_jppcxltd2 + "|" + nswog_tapcxltd2 + "|" + nswog_eupcxltd2 +  "|" +  nswog_otherpcxltd2 + "|"   )    



# print("+--------------------------------------------------------------------------+") #border

# print(lb1)

# #printing Switch Lite

# print("+--------------------------------------------------------------------------+")
# print("|" + hd1[4] + "|" + hd1[0] + "|" + hd1[1] +"|" + hd1[2] + "|" + hd1[3] + "|")
# print("+--------------------------------------------------------------------------+")
# #print first quarter
# if x >= 1:
#     print("|"  +  rw1[0] +  "|" + nswl_jp4[0] + "|" + nswl_ta4[0] + "|" + nswl_eu4[0] +  "|" +  nswl_other4[0] + "|" )
#     print("|"  + " 1st Quarter YoY%         " +   "|" + nsw_litejply4[0] + "|" + nsw_litetaly4[0] + "|" + nsw_liteeuly4[0] + "|" + nsw_liteotherly4[0] + "|")
#     print("|"  +  rw1[5] +  "|" + nswl_jppcx1b + "|" + nswl_tapcx1b + "|" + nswl_eupcx1b +  "|" +  nswl_otherpcx1b + "|")    
    
# #print second quarter
# if x >= 2:
#     print("+--------------------------------------------------------------------------+")
#     print("|"  +  rw1[1] +  "|" + nswl_jp4[1] + "|" + nswl_ta4[1] + "|" + nswl_eu4[1] +  "|" +  nswl_other4[1] + "|" )
#     print("|"  + " 2nd Quarter YoY%         " +   "|" + nsw_litejply4[1] + "|" + nsw_litetaly4[1] + "|" + nsw_liteeuly4[1] + "|" + nsw_liteotherly4[1] + "|")
#     print("|"  +  rw1[6] +  "|" + nswl_jppcx2b + "|" + nswl_tapcx2b + "|" + nswl_eupcx2b +  "|" +  nswl_otherpcx2b + "|")    
    
# #print third quarter
# if x >= 3:
#     print("+--------------------------------------------------------------------------+")
#     print("|"  +  rw1[2] +  "|" + nswl_jp4[2] + "|" + nswl_ta4[2] + "|" + nswl_eu4[2] +  "|" +  nswl_other4[2] + "|" )
#     print("|"  + " 3rd Quarter YoY%         " +   "|" + nsw_litejply4[2] + "|" + nsw_litetaly4[2] + "|" + nsw_liteeuly4[2] + "|" + nsw_liteotherly4[2] + "|")
#     print("|"  +  rw1[7] +  "|" + nswl_jppcx3b + "|" + nswl_tapcx3b + "|" + nswl_eupcx3b +  "|" +  nswl_otherpcx3b + "|")    
    
# #print fourth quarter
# if x >=4:
#     print("+--------------------------------------------------------------------------+")
#     print("|"  +  rw1[3] +  "|" + nswl_jp4[3] + "|" + nswl_ta4[3] + "|" + nswl_eu4[3] +  "|" +  nswl_other4[3] + "|" )
#     print("|"  + " 4th Quarter YoY%         " +   "|" + nsw_litejply4[3] + "|" + nsw_litetaly4[3] + "|" + nsw_liteeuly4[3] + "|" + nsw_liteotherly4[3] + "|")
#     print("|"  +  rw1[8] +  "|" + nswl_jppcx4b + "|" + nswl_tapcx4b + "|" + nswl_eupcx4b +  "|" +  nswl_otherpcx4b + "|")    

# print("+==========================================================================+") #border

# #print fy cumulative
# if x >= 2:
#     print("|"  +  " First Half               " +  "|" + nswl_jpfyltd2[2] + "|" + nswl_tafyltd2[2] + "|" + nswl_eufyltd2[2] +  "|" +  nswl_otherfyltd2[2] + "|"   )
#     print("|"  +  " First Half YoY%          " +  "|" + nsw_litejpyoyfy3[0] + "|" + nsw_litetayoyfy3[0] + "|" + nsw_liteeuyoyfy3[0] +  "|" +  nsw_liteotheryoyfy3[0] + "|"   )
#     print("|"  +  " First Half WW%           " +  "|" + nswl_jppcxfhalf2 + "|" + nswl_tapcxfhalf2 + "|" + nswl_eupcxfhalf2 +  "|" +  nswl_otherpcxfhalf2 + "|"   )    
#     print("+--------------------------------------------------------------------------+")

# if x >= 3:
#     print("|"  +  " First 3 Quarters         " +  "|" + nswl_jpfyltd2[3] + "|" + nswl_tafyltd2[3] + "|" + nswl_eufyltd2[3] +  "|" +  nswl_otherfyltd2[3] + "|"   )
#     print("|"  +  " First 3 Qtrs YoY%        " +  "|" + nsw_litejpyoyfy3[1] + "|" + nsw_litetayoyfy3[1] + "|" + nsw_liteeuyoyfy3[1] +  "|" +  nsw_liteotheryoyfy3[1] + "|"   )
#     print("|"  +  " First 3 Qtrs WW%         " +  "|" + nswl_jppcxf3q2 + "|" + nswl_tapcxf3q2 + "|" + nswl_eupcxf3q2 +  "|" +  nswl_otherpcxf3q2 + "|"   )    
#     print("+--------------------------------------------------------------------------+")
    
    
# print("|"  +  rw1[4] +  "|" + nswl_jpfyltd2[0] + "|" + nswl_tafyltd2[0] + "|" + nswl_eufyltd2[0] +  "|" +  nswl_otherfyltd2[0] + "|"   )
# print("|"  +  " FY3/22 Cumulative YoY%   " +  "|" + nsw_litejpyoyfy3[1] + "|" + nsw_litetayoyfy3[1] + "|" + nsw_liteeuyoyfy3[1] +  "|" +  nsw_liteotheryoyfy3[1] + "|"   )
# print("|"  +  rw1[9] +  "|" + nswl_jppcxfy2 + "|" + nswl_tapcxfy2 + "|" + nswl_eupcxfy2 +  "|" +  nswl_otherpcxfy2 + "|"   )    

# print("+--------------------------------------------------------------------------+")
# #print ltd

# print("|"  +  rw1[10] +  "|" + nswl_jpfyltd2[1] + "|" + nswl_tafyltd2[1] + "|" + nswl_eufyltd2[1] +  "|" +  nswl_otherfyltd2[1] + "|"   )

# print("|"  +  rw1[11] +  "|" + nswl_jppcxltd2 + "|" + nswl_tapcxltd2 + "|" + nswl_eupcxltd2 +  "|" +  nswl_otherpcxltd2 + "|"   )    



# print("+--------------------------------------------------------------------------+") #border

# print(lb1)

# #Print Switch OLED

# print("+--------------------------------------------------------------------------+")
# print("|" + hd1[7] + "|" + hd1[0] + "|" + hd1[1] +"|" + hd1[2] + "|" + hd1[3] + "|")
# print("+--------------------------------------------------------------------------+")
# ##print first quarter
# #if x >= 1:
# #    print("|"  +  rw1[0] +  "|" + nswoled_jp4[0] + "|" + nswoled_ta4[0] + "|" + nswoled_eu4[0] +  "|" +  nswoled_other4[0] + "|" )
# #    print("|"  + " 1st Quarter YoY%         " +   "|" + nsw_oledjply4[0] + "|" + nsw_oledtaly4[0] + "|" + nsw_oledeuly4[0] + "|" + nsw_oledotherly4[0] + "|")
# #    print("|"  +  rw1[5] +  "|" + nswoled_jppcx1b + "|" + nswoled_tapcx1b + "|" + nswoled_eupcx1b +  "|" +  nswoled_otherpcx1b + "|")    
# #    
# ##print second quarter
# #if x >= 2:
# #    print("+--------------------------------------------------------------------------+")
# #    print("|"  +  rw1[1] +  "|" + nswoled_jp4[1] + "|" + nswoled_ta4[1] + "|" + nswoled_eu4[1] +  "|" +  nswoled_other4[1] + "|" )
# #    print("|"  + " 2nd Quarter YoY%         " +   "|" + nsw_oledjply4[1] + "|" + nsw_oledtaly4[1] + "|" + nsw_oledeuly4[1] + "|" + nsw_oledotherly4[1] + "|")
# #    print("|"  +  rw1[6] +  "|" + nswoled_jppcx2b + "|" + nswoled_tapcx2b + "|" + nswoled_eupcx2b +  "|" +  nswoled_otherpcx2b + "|")    
# #    
# #print third quarter
# if x >= 3:
#     print("+--------------------------------------------------------------------------+")
#     print("|"  +  rw1[2] +  "|" + nswoled_jp4[2] + "|" + nswoled_ta4[2] + "|" + nswoled_eu4[2] +  "|" +  nswoled_other4[2] + "|" )
#     print("|"  + " 3rd Quarter YoY%         " +   "|" + "           " + "|" + "           " + "|" + "           " + "|" + "           " + "|")
#     print("|"  +  rw1[7] +  "|" + nswoled_jppcx3b + "|" + nswoled_tapcx3b + "|" + nswoled_eupcx3b +  "|" +  nswoled_otherpcx3b + "|")    
    
# #print fourth quarter
# if x >=4:
#     print("+--------------------------------------------------------------------------+")
#     print("|"  +  rw1[3] +  "|" + nswoled_jp4[3] + "|" + nswoled_ta4[3] + "|" + nswoled_eu4[3] +  "|" +  nswoled_other4[3] + "|" )
#     print("|"  + " 4th Quarter YoY%         " +   "|" + nsw_oledjply4[3] + "|" + nsw_oledtaly4[3] + "|" + nsw_oledeuly4[3] + "|" + nsw_oledotherly4[3] + "|")
#     print("|"  +  rw1[8] +  "|" + nswoled_jppcx4b + "|" + nswoled_tapcx4b + "|" + nswoled_eupcx4b +  "|" +  nswoled_otherpcx4b + "|")    

# print("+==========================================================================+") #border

# ##print fy cumulative
# #if x >= 2:
# #    print("|"  +  " First Half               " +  "|" + nswoled_jpfyltd2[2] + "|" + nswoled_tafyltd2[2] + "|" + nswoled_eufyltd2[2] +  "|" +  nswoled_otherfyltd2[2] + "|"   )
# #    print("|"  +  " First Half YoY%          " +  "|" + nsw_oledjpyoyfy3[0] + "|" + nsw_oledtayoyfy3[0] + "|" + nsw_oledeuyoyfy3[0] +  "|" +  nsw_oledotheryoyfy3[0] + "|"   )
# #    print("|"  +  " First Half WW%           " +  "|" + nswoled_jppcxfhalf2 + "|" + nswoled_tapcxfhalf2 + "|" + nswoled_eupcxfhalf2 +  "|" +  nswoled_otherpcxfhalf2 + "|"   )    
# #    print("+--------------------------------------------------------------------------+")

# if x >= 3:
#     print("|"  +  " First 3 Quarters         " +  "|" + nswoled_jpfyltd2[3] + "|" + nswoled_tafyltd2[3] + "|" + nswoled_eufyltd2[3] +  "|" +  nswoled_otherfyltd2[3] + "|"   )
#     print("|"  +  " First 3 Qtrs YoY%        " +  "|" + "          " + "|" + "            " + "|" + "           " +  "|" +  "           "  + "|"   )
#     print("|"  +  " First 3 Qtrs WW%         " +  "|" + nswoled_jppcxf3q2 + "|" + nswoled_tapcxf3q2 + "|" + nswoled_eupcxf3q2 +  "|" +  nswoled_otherpcxf3q2 + "|"   )    
#     print("+--------------------------------------------------------------------------+")
    
    
# print("|"  +  rw1[4] +  "|" + nswoled_jpfyltd2[0] + "|" + nswoled_tafyltd2[0] + "|" + nswoled_eufyltd2[0] +  "|" +  nswoled_otherfyltd2[0] + "|"   )
# print("|"  +  " FY3/22 Cumulative YoY%   " +  "|" + "          " + "|" + "            " + "|" + "           " +  "|" +  "           " + "|"   )
# print("|"  +  rw1[9] +  "|" + nswoled_jppcxfy2 + "|" + nswoled_tapcxfy2 + "|" + nswoled_eupcxfy2 +  "|" +  nswoled_otherpcxfy2 + "|"   )    

# print("+--------------------------------------------------------------------------+")
# #print ltd

# print("|"  +  rw1[10] +  "|" + nswoled_jpfyltd2[1] + "|" + nswoled_tafyltd2[1] + "|" + nswoled_eufyltd2[1] +  "|" +  nswoled_otherfyltd2[1] + "|"   )

# print("|"  +  rw1[11] +  "|" + nswoled_jppcxltd2 + "|" + nswoled_tapcxltd2 + "|" + nswoled_eupcxltd2 +  "|" +  nswoled_otherpcxltd2 + "|"   )    



# print("+--------------------------------------------------------------------------+") #border

# print(lb1)

# #printing Switch Hardware
# print("+--------------------------------------------------------------------------+")
# print("|" + hd1[5] + "|" + hd1[0] + "|" + hd1[1] +"|" + hd1[2] + "|" + hd1[3] + "|")
# print("+--------------------------------------------------------------------------+")
# #print first quarter
# if x >= 1:
#     print("|"  +  rw1[0] +  "|" + nswhw_jp4[0] + "|" + nswhw_ta4[0] + "|" + nswhw_eu4[0] +  "|" +  nswhw_other4[0] + "|" )
#     print("|"  + " 1st Quarter YoY%         " +   "|" + nsw_hwjply4[0] + "|" + nsw_hwtaly4[0] + "|" + nsw_hweuly4[0] + "|" + nsw_hwotherly4[0] + "|")
#     print("|"  +  rw1[5] +  "|" + nswhw_jppcx1b + "|" + nswhw_tapcx1b + "|" + nswhw_eupcx1b +  "|" +  nswhw_otherpcx1b + "|")    
    
# #print second quarter
# if x >= 2:
#     print("+--------------------------------------------------------------------------+")
#     print("|"  +  rw1[1] +  "|" + nswhw_jp4[1] + "|" + nswhw_ta4[1] + "|" + nswhw_eu4[1] +  "|" +  nswhw_other4[1] + "|" )
#     print("|"  + " 2nd Quarter YoY%         " +   "|" + nsw_hwjply4[1] + "|" + nsw_hwtaly4[1] + "|" + nsw_hweuly4[1] + "|" + nsw_hwotherly4[1] + "|")
#     print("|"  +  rw1[6] +  "|" + nswhw_jppcx2b + "|" + nswhw_tapcx2b + "|" + nswhw_eupcx2b +  "|" +  nswhw_otherpcx2b + "|")    
    
# #print third quarter
# if x >= 3:
#     print("+--------------------------------------------------------------------------+")
#     print("|"  +  rw1[2] +  "|" + nswhw_jp4[2] + "|" + nswhw_ta4[2] + "|" + nswhw_eu4[2] +  "|" +  nswhw_other4[2] + "|" )
#     print("|"  + " 3rd Quarter YoY%         " +   "|" + nsw_hwjply4[2] + "|" + nsw_hwtaly4[2] + "|" + nsw_hweuly4[2] + "|" + nsw_hwotherly4[2] + "|")
#     print("|"  +  rw1[7] +  "|" + nswhw_jppcx3b + "|" + nswhw_tapcx3b + "|" + nswhw_eupcx3b +  "|" +  nswhw_otherpcx3b + "|")    
    
# #print fourth quarter
# if x >=4:
#     print("+--------------------------------------------------------------------------+")
#     print("|"  +  rw1[3] +  "|" + nswhw_jp4[3] + "|" + nswhw_ta4[3] + "|" + nswhw_eu4[3] +  "|" +  nswhw_other4[3] + "|" )
#     print("|"  + " 4th Quarter YoY%         " +   "|" + nsw_hwjply4[3] + "|" + nsw_hwtaly4[3] + "|" + nsw_hweuly4[3] + "|" + nsw_hwotherly4[3] + "|")
#     print("|"  +  rw1[8] +  "|" + nswhw_jppcx4b + "|" + nswhw_tapcx4b + "|" + nswhw_eupcx4b +  "|" +  nswhw_otherpcx4b + "|")    

# print("+==========================================================================+") #border

# #print fy cumulative
# if x >= 2:
#     print("|"  +  " First Half               " +  "|" + nswhw_jpfyltd2[2] + "|" + nswhw_tafyltd2[2] + "|" + nswhw_eufyltd2[2] +  "|" +  nswhw_otherfyltd2[2] + "|"   )
#     print("|"  +  " First Half YoY%          " +  "|" + nsw_hwjpyoyfy3[0] + "|" + nsw_hwtayoyfy3[0] + "|" + nsw_hweuyoyfy3[0] +  "|" +  nsw_hwotheryoyfy3[0] + "|"   )
#     print("|"  +  " First Half WW%           " +  "|" + nswhw_jppcxfhalf2 + "|" + nswhw_tapcxfhalf2 + "|" + nswhw_eupcxfhalf2 +  "|" +  nswhw_otherpcxfhalf2 + "|"   )    
#     print("+--------------------------------------------------------------------------+")

# if x >= 3:
#     print("|"  +  " First 3 Quarters         " +  "|" + nswhw_jpfyltd2[3] + "|" + nswhw_tafyltd2[3] + "|" + nswhw_eufyltd2[3] +  "|" +  nswhw_otherfyltd2[3] + "|"   )
#     print("|"  +  " First 3 Qtrs YoY%        " +  "|" + nsw_hwjpyoyfy3[1] + "|" + nsw_hwtayoyfy3[1] + "|" + nsw_hweuyoyfy3[1] +  "|" +  nsw_hwotheryoyfy3[1] + "|"   )
#     print("|"  +  " First 3 Qtrs WW%         " +  "|" + nswhw_jppcxf3q2 + "|" + nswhw_tapcxf3q2 + "|" + nswhw_eupcxf3q2 +  "|" +  nswhw_otherpcxf3q2 + "|"   )    
#     print("+--------------------------------------------------------------------------+")
    
    
# print("|"  +  rw1[4] +  "|" + nswhw_jpfyltd2[0] + "|" + nswhw_tafyltd2[0] + "|" + nswhw_eufyltd2[0] +  "|" +  nswhw_otherfyltd2[0] + "|"   )
# print("|"  +  " FY3/22 Cumulative YoY%   " +  "|" + nsw_hwjpyoyfy3[1] + "|" + nsw_hwtayoyfy3[1] + "|" + nsw_hweuyoyfy3[1] +  "|" +  nsw_hwotheryoyfy3[1] + "|"   )
# print("|"  +  rw1[9] +  "|" + nswhw_jppcxfy2 + "|" + nswhw_tapcxfy2 + "|" + nswhw_eupcxfy2 +  "|" +  nswhw_otherpcxfy2 + "|"   )    

# print("+--------------------------------------------------------------------------+")
# #print ltd

# print("|"  +  rw1[10] +  "|" + nswhw_jpfyltd2[1] + "|" + nswhw_tafyltd2[1] + "|" + nswhw_eufyltd2[1] +  "|" +  nswhw_otherfyltd2[1] + "|"   )

# print("|"  +  rw1[11] +  "|" + nswhw_jppcxltd2 + "|" + nswhw_tapcxltd2 + "|" + nswhw_eupcxltd2 +  "|" +  nswhw_otherpcxltd2 + "|"   )    



# print("+--------------------------------------------------------------------------+") #border

# print(lb1)

# #printing Switch Software
# print("+--------------------------------------------------------------------------+")
# print("|" + hd1[6] + "|" + hd1[0] + "|" + hd1[1] +"|" + hd1[2] + "|" + hd1[3] + "|")
# print("+--------------------------------------------------------------------------+")
# #print first quarter
# if x >= 1:
#     print("|"  +  rw1[0] +  "|" + nswsw_jp4[0] + "|" + nswsw_ta4[0] + "|" + nswsw_eu4[0] +  "|" +  nswsw_other4[0] + "|" )
#     print("|"  + " 1st Quarter YoY%         " +   "|" + nsw_swjply4[0] + "|" + nsw_swtaly4[0] + "|" + nsw_sweuly4[0] + "|" + nsw_swotherly4[0] + "|")
#     print("|"  +  rw1[5] +  "|" + nswsw_jppcx1b + "|" + nswsw_tapcx1b + "|" + nswsw_eupcx1b +  "|" +  nswsw_otherpcx1b + "|")    
    
# #print second quarter
# if x >= 2:
#     print("+--------------------------------------------------------------------------+")
#     print("|"  +  rw1[1] +  "|" + nswsw_jp4[1] + "|" + nswsw_ta4[1] + "|" + nswsw_eu4[1] +  "|" +  nswsw_other4[1] + "|" )
#     print("|"  + " 2nd Quarter YoY%         " +   "|" + nsw_swjply4[1] + "|" + nsw_swtaly4[1] + "|" + nsw_sweuly4[1] + "|" + nsw_swotherly4[1] + "|")
#     print("|"  +  rw1[6] +  "|" + nswsw_jppcx2b + "|" + nswsw_tapcx2b + "|" + nswsw_eupcx2b +  "|" +  nswsw_otherpcx2b + "|")    
    
# #print third quarter
# if x >= 3:
#     print("+--------------------------------------------------------------------------+")
#     print("|"  +  rw1[2] +  "|" + nswsw_jp4[2] + "|" + nswsw_ta4[2] + "|" + nswsw_eu4[2] +  "|" +  nswsw_other4[2] + "|" )
#     print("|"  + " 3rd Quarter YoY%         " +   "|" + nsw_swjply4[2] + "|" + nsw_swtaly4[2] + "|" + nsw_sweuly4[2] + "|" + nsw_swotherly4[2] + "|")
#     print("|"  +  rw1[7] +  "|" + nswsw_jppcx3b + "|" + nswsw_tapcx3b + "|" + nswsw_eupcx3b +  "|" +  nswsw_otherpcx3b + "|")    
    
# #print fourth quarter
# if x >=4:
#     print("+--------------------------------------------------------------------------+")
#     print("|"  +  rw1[3] +  "|" + nswsw_jp4[3] + "|" + nswsw_ta4[3] + "|" + nswsw_eu4[3] +  "|" +  nswsw_other4[3] + "|" )
#     print("|"  + " 4th Quarter YoY%         " +   "|" + nsw_swjply4[3] + "|" + nsw_swtaly4[3] + "|" + nsw_sweuly4[3] + "|" + nsw_swotherly4[3] + "|")
#     print("|"  +  rw1[8] +  "|" + nswsw_jppcx4b + "|" + nswsw_tapcx4b + "|" + nswsw_eupcx4b +  "|" +  nswsw_otherpcx4b + "|")    

# print("+==========================================================================+") #border

# #print fy cumulative
# if x >= 2:
#     print("|"  +  " First Half               " +  "|" + nswsw_jpfyltd2[2] + "|" + nswsw_tafyltd2[2] + "|" + nswsw_eufyltd2[2] +  "|" +  nswsw_otherfyltd2[2] + "|"   )
#     print("|"  +  " First Half YoY%          " +  "|" + nsw_swjpyoyfy3[0] + "|" + nsw_swtayoyfy3[0] + "|" + nsw_sweuyoyfy3[0] +  "|" +  nsw_swotheryoyfy3[0] + "|"   )
#     print("|"  +  " First Half WW%           " +  "|" + nswsw_jppcxfhalf2 + "|" + nswsw_tapcxfhalf2 + "|" + nswsw_eupcxfhalf2 +  "|" +  nswsw_otherpcxfhalf2 + "|"   )    
#     print("+--------------------------------------------------------------------------+")

# if x >= 3:
#     print("|"  +  " First 3 Quarters         " +  "|" + nswsw_jpfyltd2[3] + "|" + nswsw_tafyltd2[3] + "|" + nswsw_eufyltd2[3] +  "|" +  nswsw_otherfyltd2[3] + "|"   )
#     print("|"  +  " First 3 Qtrs YoY%        " +  "|" + nsw_swjpyoyfy3[1] + "|" + nsw_swtayoyfy3[1] + "|" + nsw_sweuyoyfy3[1] +  "|" +  nsw_swotheryoyfy3[1] + "|"   )
#     print("|"  +  " First 3 Qtrs WW%         " +  "|" + nswsw_jppcxf3q2 + "|" + nswsw_tapcxf3q2 + "|" + nswsw_eupcxf3q2 +  "|" +  nswsw_otherpcxf3q2 + "|"   )    
#     print("+--------------------------------------------------------------------------+")
    
    
# print("|"  +  rw1[4] +  "|" + nswsw_jpfyltd2[0] + "|" + nswsw_tafyltd2[0] + "|" + nswsw_eufyltd2[0] +  "|" +  nswsw_otherfyltd2[0] + "|"   )
# print("|"  +  " FY3/22 Cumulative YoY%   " +  "|" + nsw_swjpyoyfy3[1] + "|" + nsw_swtayoyfy3[1] + "|" + nsw_sweuyoyfy3[1] +  "|" +  nsw_swotheryoyfy3[1] + "|"   )
# print("|"  +  rw1[9] +  "|" + nswsw_jppcxfy2 + "|" + nswsw_tapcxfy2 + "|" + nswsw_eupcxfy2 +  "|" +  nswsw_otherpcxfy2 + "|"   )    

# print("+--------------------------------------------------------------------------+")
# #print ltd

# print("|"  +  rw1[10] +  "|" + nswsw_jpfyltd2[1] + "|" + nswsw_tafyltd2[1] + "|" + nswsw_eufyltd2[1] +  "|" +  nswsw_otherfyltd2[1] + "|"   )

# print("|"  +  rw1[11] +  "|" + nswsw_jppcxltd2 + "|" + nswsw_tapcxltd2 + "|" + nswsw_eupcxltd2 +  "|" +  nswsw_otherpcxltd2 + "|"   )    



# print("+--------------------------------------------------------------------------+") #border

# print(lb1)