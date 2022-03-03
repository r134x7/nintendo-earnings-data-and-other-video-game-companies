hd1 = [  " Switch - Top Selling Titles (No Ranking) ", "   Units   ",  " Mario Kart 8 Deluxe                      ", " Super Mario Odyssey                      ", " The Legend of Zelda: Breath of the Wild  ", " Splatoon 2                               ", " Animal Crossing: New Horizons            ", " Pokémon Sword/Shield                     ", " Pokémon Let's Go Pikachu/Eevee           ", " Ring Fit Adventure                       ", " Super Mario Party                        ", " Super Smash Bros. Ultimate               ", " Pokémon Brilliant Diamond/Shining Pearl  " ] #header
rw1 = [" 1st Quarter                              ", " 2nd Quarter                              ", " 3rd Quarter                              ", " 4th Quarter                              ", " FY3/22 Cumulative                        ", " Life-To-Date                             "] # row names
lb1 = "###" # line break

#print(len(hd1[3]))

x = 3

#Switch SW

#Mario Kart 8 Deluxe

at1= [ 37.08, 38.74, 43.35, 43.35, 35.39]
#Q1-4, LTD at end of last fy
#+++++++++++++++++++++++++++++
at2 = [ at1[0] - at1[4], at1[1]  - at1[0], at1[2] - at1[1], at1[3] - at1[2]] #quarterly calculation

at3 = [ '{:.2f}M '.format(elem) for elem in at2 ] #format all integers to string to add  and M

at4 = [ '{0: >11}'.format(elem) for elem in at3]
#format width

atfyltd = [ at2[0] + at2[1] + at2[2] +at2[3] , at1[4] + at2[0] + at2[1] + at2[2] +at2[3] ]  # fiscal year cumulative at end, ltd

atfyltd1 = [ '{:.2f}M '.format(elem) for elem in atfyltd ] #format all integers to string to add  and M

atfyltd2 = [ '{0: >11}'.format(elem) for elem in atfyltd1]
#format width

# Super Mario Odyssey

bt1= [ 21.40, 21.95, 23.02, 23.02, 20.83]
#Q1-4, LTD at end of last fy
#+++++++++++++++++++++++++++++
bt2 = [ bt1[0] - bt1[4], bt1[1]  - bt1[0], bt1[2] - bt1[1], bt1[3] - bt1[2]] #quarterly calculation 

bt3 = [ '{:.2f}M '.format(elem) for elem in bt2 ] #format all integers to string to add  and M

bt4 = [ '{0: >11}'.format(elem) for elem in bt3]
#format width

btfyltd = [ bt2[0] + bt2[1] + bt2[2] +bt2[3] ,  bt1[4] + bt2[0] + bt2[1] + bt2[2] +bt2[3] ] #fiscal year cumulative at end, ltd,

btfyltd1 = [ '{:.2f}M '.format(elem) for elem in btfyltd ] #format all integers to string to add  and M

btfyltd2 = [ '{0: >11}'.format(elem) for elem in btfyltd1]
#format width

#Breath of the Wild

ct1= [ 23.20, 24.13, 25.80, 25.80, 22.28]
#Q1-4, LTD at end of last fy
#+++++++++++++++++++++++++++++
ct2 = [ ct1[0] - ct1[4], ct1[1]  - ct1[0], ct1[2] - ct1[1], ct1[3] - ct1[2]] #quarterly calculation 

ct3 = [ '{:.2f}M '.format(elem) for elem in ct2 ] #format all integers to string to add  and M

ct4 = [ '{0: >11}'.format(elem) for elem in ct3]
#format width

ctfyltd =   [ct2[0] + ct2[1] + ct2[2] +ct2[3] , ct1[4] + ct2[0] + ct2[1] + ct2[2] +ct2[3] ] #fiscal year cumulative at end, ltd,

ctfyltd1 = [ '{:.2f}M '.format(elem) for elem in ctfyltd ] #format all integers to string to add  and M

ctfyltd2 = [ '{0: >11}'.format(elem) for elem in ctfyltd1] #format width

#Splatoon 2

dt1= [ 12.45, 12.68, 12.68, 12.68, 12.21]
#Q1-4, LTD at end of last fy
#+++++++++++++++++++++++++++++
dt2 = [ dt1[0] - dt1[4] , dt1[1]  - dt1[0], dt1[2] - dt1[1], dt1[3] - dt1[2]] #quarterly calculation + 

dt3 = [ '{:.2f}M '.format(elem) for elem in dt2 ] #format all integers to string to add  and M

dt4 = [ '{0: >11}'.format(elem) for elem in dt3]
#format width

dtfyltd = [dt2[0] + dt2[1] + dt2[2] +dt2[3] , dt1[4] + dt2[0] + dt2[1] + dt2[2] +dt2[3] ] #fiscal year cumulative at end, ltd,

dtfyltd1 = [ '{:.2f}M '.format(elem) for elem in dtfyltd ] #format all integers to string to add  and M

dtfyltd2 = [ '{0: >11}'.format(elem) for elem in dtfyltd1]
#format width

#animal crossing new horizons

et1= [ 33.89, 34.85, 37.62, 37.62, 32.63]
#Q1-4, LTD at end of last fy
#+++++++++++++++++++++++++++++
et2 = [ et1[0]  - et1[4], et1[1]  - et1[0], et1[2] - et1[1], et1[3] - et1[2]] #quarterly calculation + 

et3 = [ '{:.2f}M '.format(elem) for elem in et2 ] #format all integers to string to add  and M

et4 = [ '{0: >11}'.format(elem) for elem in et3]
#format width

etfyltd = [et2[0] + et2[1] + et2[2] +et2[3] , et1[4] + et2[0] + et2[1] + et2[2] +et2[3] ] #fiscal year cumulative at end, ltd,

etfyltd1 = [ '{:.2f}M '.format(elem) for elem in etfyltd ] #format all integers to string to add  and M

etfyltd2 = [ '{0: >11}'.format(elem) for elem in etfyltd1]
#format width


#pokemon sword/shield

ft1= [ 21.85, 22.64, 23.90, 23.90, 21.10]
#Q1-4, LTD at end of last fy
#+++++++++++++++++++++++++++++
ft2 = [ ft1[0]  - ft1[4] , ft1[1]  - ft1[0], ft1[2] - ft1[1], ft1[3] - ft1[2]] #quarterly calculation 

ft3 = [ '{:.2f}M '.format(elem) for elem in ft2 ] #format all integers to string to add  and M

ft4 = [ '{0: >11}'.format(elem) for elem in ft3]
#format width

ftfyltd = [ft2[0] + ft2[1] + ft2[2] +ft2[3] , ft1[4] + ft2[0] + ft2[1] + ft2[2] + ft2[3] ] #+ fiscal year cumulative at end, ltd,

ftfyltd1 = [ '{:.2f}M '.format(elem) for elem in ftfyltd ] #format all integers to string to add  and M

ftfyltd2 = [ '{0: >11}'.format(elem) for elem in ftfyltd1]
#format width

#pokemon lets go pikachu/eevee

gt1= [ 13.57, 13.83, 14.33, 14.33, 13.28]
#Q1-4, LTD at end of last fy
#+++++++++++++++++++++++++++++
gt2 = [ gt1[0] - gt1[4], gt1[1]  - gt1[0], gt1[2] - gt1[1], gt1[3] - gt1[2]] #quarterly calculation 

gt3 = [ '{:.2f}M '.format(elem) for elem in gt2 ] #format all integers to string to add  and M

gt4 = [ '{0: >11}'.format(elem) for elem in gt3]
#format width

gtfyltd = [gt2[0] + gt2[1] + gt2[2] +gt2[3] , gt1[4] + gt2[0] + gt2[1] + gt2[2] +gt2[3] ] #+ fiscal year cumulative at end, ltd,

gtfyltd1 = [ '{:.2f}M '.format(elem) for elem in gtfyltd ] #format all integers to string to add  and M

gtfyltd2 = [ '{0: >11}'.format(elem) for elem in gtfyltd1]
#format width

#ring fit adventure

ht1= [ 11.26, 12.21, 13.53, 13.53, 10.11]
#Q1-4, LTD at end of last fy
#+++++++++++++++++++++++++++++
ht2 = [ ht1[0] - ht1[4] , ht1[1]  - ht1[0], ht1[2] - ht1[1], ht1[3] - ht1[2]] #quarterly calculation 

ht3 = [ '{:.2f}M '.format(elem) for elem in ht2 ] #format all integers to string to add  and M

ht4 = [ '{0: >11}'.format(elem) for elem in ht3]
#format width

htfyltd = [ ht2[0] + ht2[1] + ht2[2] +ht2[3] , ht1[4] + ht2[0] + ht2[1] + ht2[2] +ht2[3] ] #+ fiscal year cumulative at end, ltd,

htfyltd1 = [ '{:.2f}M '.format(elem) for elem in htfyltd ] #format all integers to string to add  and M

htfyltd2 = [ '{0: >11}'.format(elem) for elem in htfyltd1]
#format width

#super mario party

it1= [ 15.72, 16.48, 17.39, 17.39, 14.79]
#Q1-4, LTD at end of last fy
#+++++++++++++++++++++++++++++
it2 = [ it1[0] - it1[4] , it1[1]  - it1[0], it1[2] - it1[1], it1[3] - it1[2]] #quarterly calculation 

it3 = [ '{:.2f}M '.format(elem) for elem in it2 ] #format all integers to string to add  and M

it4 = [ '{0: >11}'.format(elem) for elem in it3]
#format width

itfyltd = [it2[0] + it2[1] + it2[2] +it2[3] , it1[4] + it2[0] + it2[1] + it2[2] +it2[3] ] #+ fiscal year cumulative at end, ltd,

itfyltd1 = [ '{:.2f}M '.format(elem) for elem in itfyltd ] #format all integers to string to add  and M

itfyltd2 = [ '{0: >11}'.format(elem) for elem in itfyltd1]
#format width

#smash bros ultimate

jt1= [ 24.77, 25.71, 27.40, 27.40, 23.84]
#Q1-4, LTD at end of last fy
#+++++++++++++++++++++++++++++
jt2 = [ jt1[0]  - jt1[4], jt1[1]  - jt1[0], jt1[2] - jt1[1], jt1[3] - jt1[2]] #quarterly calculation 

jt3 = [ '{:.2f}M '.format(elem) for elem in jt2 ] #format all integers to string to add  and M

jt4 = [ '{0: >11}'.format(elem) for elem in jt3]
#format width

jtfyltd = [jt2[0] + jt2[1] + jt2[2] +jt2[3] , jt1[4] + jt2[0] + jt2[1] + jt2[2] +jt2[3] ] #+ fiscal year cumulative at end, ltd,

jtfyltd1 = [ '{:.2f}M '.format(elem) for elem in jtfyltd ] #format all integers to string to add  and M

jtfyltd2 = [ '{0: >11}'.format(elem) for elem in jtfyltd1]
#format width

#=======================

#PKMN brilliant diamond/shining pearl

kt1= [ 0, 0, 13.97, 13.97, 0]
#Q1-4, LTD at end of last fy
#+++++++++++++++++++++++++++++
kt2 = [ kt1[0]  - kt1[4], kt1[1]  - kt1[0], kt1[2] - kt1[1], kt1[3] - kt1[2]] #quarterly calculation 

kt3 = [ '{:.2f}M '.format(elem) for elem in kt2 ] #format all integers to string to add  and M

kt4 = [ '{0: >11}'.format(elem) for elem in kt3]
#format width

ktfyltd = [kt2[0] + kt2[1] + kt2[2] +kt2[3] , kt1[4] + kt2[0] + kt2[1] + kt2[2] +kt2[3] ] #+ fiscal year cumulative at end, ltd,

ktfyltd1 = [ '{:.2f}M '.format(elem) for elem in ktfyltd ] #format all integers to string to add  and M

ktfyltd2 = [ '{0: >11}'.format(elem) for elem in ktfyltd1]
#format width

#=======================

print("+------------------------------------------------------+")
print("|" + hd1[0] + "|" + hd1[1] + "|")
print("+------------------------------------------------------+")
print("|" + hd1[2] + "|" + "           |")
print("+------------------------------------------------------+")
#print first quarter
if x >= 1:
    print("|"  +  rw1[0] +  "|" + at4[0] + "|"   )

#print second quarter
if x >=2:
    print("|"  +  rw1[1] +  "|" + at4[1] + "|"   )

#print third quarter
if x >=3:
    print("|"  +  rw1[2] +  "|" + at4[2] + "|"   )

#print fourth quarter
if x >=4:
    print("|"  +  rw1[3] +  "|" + at4[3] + "|"   )

print("+======================================================+") #border

#print fy cumulative
print("|"  +  rw1[4] +  "|" + atfyltd2[0] + "|"   )

#print ltd
print("|"  +  rw1[5] +  "|" + atfyltd2[1] + "|"   )
print("+------------------------------------------------------+")
print("|" + hd1[3] + "|" + "           |")
print("+------------------------------------------------------+")
#print first quarter
if x >= 1:
    print("|"  +  rw1[0] +  "|" + bt4[0] + "|"   )

#print second quarter
if x >=2:
    print("|"  +  rw1[1] +  "|" + bt4[1] + "|"   )

#print third quarter
if x >=3:
    print("|"  +  rw1[2] +  "|" + bt4[2] + "|"   )

#print fourth quarter
if x >=4:
    print("|"  +  rw1[3] +  "|" + bt4[3] + "|"   )

print("+======================================================+") #border

#print fy cumulative
print("|"  +  rw1[4] +  "|" + btfyltd2[0] + "|"   )

#print ltd
print("|"  +  rw1[5] +  "|" + btfyltd2[1] + "|"   )
print("+------------------------------------------------------+")
print("|" + hd1[4] + "|" + "           |")
print("+------------------------------------------------------+")
#print first quarter
if x >= 1:
    print("|"  +  rw1[0] +  "|" + ct4[0] + "|"   )

#print second quarter
if x >=2:
    print("|"  +  rw1[1] +  "|" + ct4[1] + "|"   )

#print third quarter
if x >=3:
    print("|"  +  rw1[2] +  "|" + ct4[2] + "|"   )

#print fourth quarter
if x >=4:
    print("|"  +  rw1[3] +  "|" + ct4[3] + "|"   )

print("+======================================================+") #border

#print fy cumulative
print("|"  +  rw1[4] +  "|" + ctfyltd2[0] + "|"   )

#print ltd
print("|"  +  rw1[5] +  "|" + ctfyltd2[1] + "|"   )
print("+------------------------------------------------------+")
print("|" + hd1[5] + "|" + "           |")
print("+------------------------------------------------------+")
#print first quarter
if x >= 1:
    print("|"  +  rw1[0] +  "|" + dt4[0] + "|"   )

#print second quarter
if x >=2:
    print("|"  +  rw1[1] +  "|" + dt4[1] + "|"   )

#print third quarter
#if x >=3:
#    print("|"  +  rw1[2] +  "|" + dt4[2] + "|"   )

#print fourth quarter
#if x >=4:
#    print("|"  +  rw1[3] +  "|" + dt4[3] + "|"   )

print("+======================================================+") #border

#print fy cumulative
print("|"  +  rw1[4] +  "|" + dtfyltd2[0] + "|"   )

#print ltd
print("|"  +  rw1[5] +  "|" + dtfyltd2[1] + "|"   )
print("+------------------------------------------------------+")
print("|" + hd1[6] + "|" + "           |")
print("+------------------------------------------------------+")
#print first quarter
if x >= 1:
    print("|"  +  rw1[0] +  "|" + et4[0] + "|"   )

#print second quarter
if x >=2:
    print("|"  +  rw1[1] +  "|" + et4[1] + "|"   )

#print third quarter
if x >=3:
    print("|"  +  rw1[2] +  "|" + et4[2] + "|"   )

#print fourth quarter
if x >=4:
    print("|"  +  rw1[3] +  "|" + et4[3] + "|"   )

print("+======================================================+") #border

#print fy cumulative
print("|"  +  rw1[4] +  "|" + etfyltd2[0] + "|"   )

#print ltd
print("|"  +  rw1[5] +  "|" + etfyltd2[1] + "|"   )
print("+------------------------------------------------------+")
print("|" + hd1[7] + "|" + "           |")
print("+------------------------------------------------------+")
#print first quarter
if x >= 1:
    print("|"  +  rw1[0] +  "|" + ft4[0] + "|"   )

#print second quarter
if x >=2:
    print("|"  +  rw1[1] +  "|" + ft4[1] + "|"   )

#print third quarter
if x >=3:
    print("|"  +  rw1[2] +  "|" + ft4[2] + "|"   )

#print fourth quarter
if x >=4:
    print("|"  +  rw1[3] +  "|" + ft4[3] + "|"   )

print("+======================================================+") #border

#print fy cumulative
print("|"  +  rw1[4] +  "|" + ftfyltd2[0] + "|"   )

#print ltd
print("|"  +  rw1[5] +  "|" + ftfyltd2[1] + "|"   )
print("+------------------------------------------------------+")
print("|" + hd1[8] + "|" + "           |")
print("+------------------------------------------------------+")
#print first quarter
if x >= 1:
    print("|"  +  rw1[0] +  "|" + gt4[0] + "|"   )

#print second quarter
if x >=2:
    print("|"  +  rw1[1] +  "|" + gt4[1] + "|"   )

#print third quarter
if x >=3:
    print("|"  +  rw1[2] +  "|" + gt4[2] + "|"   )

#print fourth quarter
if x >=4:
    print("|"  +  rw1[3] +  "|" + gt4[3] + "|"   )

print("+======================================================+") #border

#print fy cumulative
print("|"  +  rw1[4] +  "|" + gtfyltd2[0] + "|"   )

#print ltd
print("|"  +  rw1[5] +  "|" + gtfyltd2[1] + "|"   )
print("+------------------------------------------------------+")
print("|" + hd1[9] + "|" + "           |")
print("+------------------------------------------------------+")
#print first quarter
if x >= 1:
    print("|"  +  rw1[0] +  "|" + ht4[0] + "|"   )

#print second quarter
if x >=2:
    print("|"  +  rw1[1] +  "|" + ht4[1] + "|"   )

#print third quarter
if x >=3:
    print("|"  +  rw1[2] +  "|" + ht4[2] + "|"   )

#print fourth quarter
if x >=4:
    print("|"  +  rw1[3] +  "|" + ht4[3] + "|"   )

print("+======================================================+") #border

#print fy cumulative
print("|"  +  rw1[4] +  "|" + htfyltd2[0] + "|"   )

#print ltd
print("|"  +  rw1[5] +  "|" + htfyltd2[1] + "|"   )
print("+------------------------------------------------------+")
print("|" + hd1[10] + "|" + "           |")
print("+------------------------------------------------------+")
#print first quarter
if x >= 1:
    print("|"  +  rw1[0] +  "|" + it4[0] + "|"   )

#print second quarter
if x >=2:
    print("|"  +  rw1[1] +  "|" + it4[1] + "|"   )

#print third quarter
if x >=3:
    print("|"  +  rw1[2] +  "|" + it4[2] + "|"   )

#print fourth quarter
if x >=4:
    print("|"  +  rw1[3] +  "|" + it4[3] + "|"   )

print("+======================================================+") #border

#print fy cumulative
print("|"  +  rw1[4] +  "|" + itfyltd2[0] + "|"   )

#print ltd
print("|"  +  rw1[5] +  "|" + itfyltd2[1] + "|"   )
print("+------------------------------------------------------+")
print("|" + hd1[11] + "|" + "           |")
print("+------------------------------------------------------+")
#print first quarter
if x >= 1:
    print("|"  +  rw1[0] +  "|" + jt4[0] + "|"   )

#print second quarter
if x >=2:
    print("|"  +  rw1[1] +  "|" + jt4[1] + "|"   )

#print third quarter
if x >=3:
    print("|"  +  rw1[2] +  "|" + jt4[2] + "|"   )

#print fourth quarter
if x >=4:
    print("|"  +  rw1[3] +  "|" + jt4[3] + "|"   )

print("+======================================================+") #border

#print fy cumulative
print("|"  +  rw1[4] +  "|" + jtfyltd2[0] + "|"   )

#print ltd
print("|"  +  rw1[5] +  "|" + jtfyltd2[1] + "|"   )
print("+------------------------------------------------------+")
print("|" + hd1[12] + "|" + "           |")
print("+------------------------------------------------------+")
#print first quarter
#if x >= 1:
#    print("|"  +  rw1[0] +  "|" + kt4[0] + "|"   )

#print second quarter
#if x >=2:
#    print("|"  +  rw1[1] +  "|" + kt4[1] + "|"   )

#print third quarter
if x >=3:
    print("|"  +  rw1[2] +  "|" + kt4[2] + "|"   )

#print fourth quarter
if x >=4:
    print("|"  +  rw1[3] +  "|" + kt4[3] + "|"   )

print("+======================================================+") #border

#print fy cumulative
print("|"  +  rw1[4] +  "|" + ktfyltd2[0] + "|"   )

#print ltd
print("|"  +  rw1[5] +  "|" + ktfyltd2[1] + "|"   )
print("+------------------------------------------------------+")