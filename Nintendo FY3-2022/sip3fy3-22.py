hd1 = [ " Nintendo Switch FY Million-Seller Titles                                                  ", " FY Japan ", " FY Overseas ", " FY Global ", " Global LTD "] #header
rw1 = [" 1st Quarter (Units)                     ", " 2nd Quarter (Units)                     ", " 3rd Quarter (Units)                     ", " 4th Quarter (Units)                     ", " FY3/22 Cumulative (Units)               ", " FY3/22 Cumulative Area/WW FY, WW FY/LTD "] # row names
lb1 = "###" # line break

game1 = [" Miitopia                                ", " Mario Kart 8 Deluxe                     ", " The Legend of Zelda: Breath of the Wild ", " New Super Mario Bros. U Deluxe          ", " Mario Golf: Super Rush                  ", " Ring Fit Adventure                      ", " Super Mario Party                       ", " Pokémon Sword/Shield                    ", " Super Smash Bros. Ultimate              ", " Super Mario Odyssey                     ", " Animal Crossing: New Horizons           ", " The Legend of Zelda: Skyward Sword HD   ", " Super Mario 3D World + Boswer's Fury    ", " New Pokémon Snap                        ", " Metroid Dread                           ", " Mario Party Superstars                  ", " Pokémon Brilliant Diamond/Shining Pearl ", " Big Brain Academy: Brain vs Brain       ", " Luigi's Mansion 3                       ", " WarioWare: Get It Together!             ", " Pokémon: Let's Go, Pikachu!/Eevee!      ", " Game Builder Garage                     " ]

#print(len(hd1[3]))

x = 3 #set quarter

#Million-seller titles for the FY

#Miitopia
a1_jp1= [ 26 / 100, 35 / 100, 38 / 100, 38 / 100] #Q1-4, japan
#+++++++++++++++++++++++++++++
a1_jp2 = [ a1_jp1[0], a1_jp1[1]  - a1_jp1[0], a1_jp1[2] - a1_jp1[1], a1_jp1[3] - a1_jp1[2]] #quarterly calculation 

a1_jp3 = [ '{:.2f}M '.format(elem) for elem in a1_jp2 ] #format all integers to string to add  and M

a1_jp4 = [ '{0: >10}'.format(elem) for elem in a1_jp3] #format width

a1_jpfy =  [a1_jp2[0] + a1_jp2[1] + a1_jp2[2] +a1_jp2[3] ]  #fiscal year cumulative, 

a1_jpfy1 = [ '{:.2f}M '.format(elem) for elem in a1_jpfy ] #format all integers to string to add  and M

a1_jpfy2 = [ '{0: >10}'.format(elem) for elem in a1_jpfy1] #format width

a1_os1= [ 78 / 100, 102 / 100, 125 / 100, 125 / 100] #Q1-4, overseas
#+++++++++++++++++++++++++++++
a1_os2 = [ a1_os1[0], a1_os1[1]  - a1_os1[0], a1_os1[2] - a1_os1[1], a1_os1[3] - a1_os1[2]] #quarterly calculation 

a1_os3 = [ '{:.2f}M '.format(elem) for elem in a1_os2 ] #format all integers to string to add  and M

a1_os4 = [ '{0: >13}'.format(elem) for elem in a1_os3] #format width

a1_osfy =  [a1_os2[0] + a1_os2[1] + a1_os2[2] +a1_os2[3] ]  #fiscal year cumulative, 

a1_osfy1 = [ '{:.2f}M '.format(elem) for elem in a1_osfy ] #format all integers to string to add  and M

a1_osfy2 = [ '{0: >13}'.format(elem) for elem in a1_osfy1] #format width


a1_wwfy1= [ 104 / 100, 137 / 100, 163 / 100, 163 / 100] #Q1-4, global fy
#+++++++++++++++++++++++++++++
a1_wwfy2 = [ a1_wwfy1[0], a1_wwfy1[1]  - a1_wwfy1[0], a1_wwfy1[2] - a1_wwfy1[1], a1_wwfy1[3] - a1_wwfy1[2]] #quarterly calculation 

a1_wwfy3 = [ '{:.2f}M '.format(elem) for elem in a1_wwfy2 ] #format all integers to string to add  and M

a1_wwfy4 = [ '{0: >11}'.format(elem) for elem in a1_wwfy3] #format width

a1_wwfyfy =  [a1_wwfy2[0] + a1_wwfy2[1] + a1_wwfy2[2] +a1_wwfy2[3] ]  #fiscal year cumulative, 

a1_wwfyfy1 = [ '{:.2f}M '.format(elem) for elem in a1_wwfyfy ] #format all integers to string to add  and M

a1_wwfyfy2 = [ '{0: >11}'.format(elem) for elem in a1_wwfyfy1] #format width

a1_wwltd1= [ 104 / 100, 137 / 100, 163 / 100, 163 / 100] #Q1-4, global LTD
#+++++++++++++++++++++++++++++
a1_wwltd2 = [ a1_wwltd1[0], a1_wwltd1[1]  - a1_wwltd1[0], a1_wwltd1[2] - a1_wwltd1[1], a1_wwltd1[3] - a1_wwltd1[2]] #quarterly calculation 

a1_wwltd3 = [ '{:.2f}M '.format(elem) for elem in a1_wwltd2 ] #format all integers to string to add  and M

a1_wwltd4 = [ '{0: >12}'.format(elem) for elem in a1_wwltd3] #format width

a1_wwltdfy =  [a1_wwltd2[0] + a1_wwltd2[1] + a1_wwltd2[2] +a1_wwltd2[3] ]  #fiscal year cumulative, 

a1_wwltdfy1 = [ '{:.2f}M '.format(elem) for elem in a1_wwltdfy ] #format all integers to string to add  and M

a1_wwltdfy2 = [ '{0: >12}'.format(elem) for elem in a1_wwltdfy1] #format width

#percentages 
a1_jpfycpc = (a1_jpfy[0] / a1_wwfyfy[0])  * 100 
a1_jpfycpc1 =  '{:.2f}% '.format(a1_jpfycpc) 
a1_jpfycpc2 =  '{0: >10}'.format(a1_jpfycpc1)

a1_osfycpc = (a1_osfy[0] / a1_wwfyfy[0])  * 100 
a1_osfycpc1 =  '{:.2f}% '.format(a1_osfycpc) 
a1_osfycpc2 =  '{0: >13}'.format(a1_osfycpc1)

a1_wwfycpc = (a1_wwfyfy[0] / a1_wwltdfy[0])  * 100 
a1_wwfycpc1 =  '{:.2f}% '.format(a1_wwfycpc) 
a1_wwfycpc2 =  '{0: >11}'.format(a1_wwfycpc1)

a1_wwltdpc = (100 - a1_wwfycpc)   
a1_wwltdpc1 =  '{:.2f}% '.format(a1_wwltdpc) 
a1_wwltdpc2 =  '{0: >12}'.format(a1_wwltdpc1)

#mario kart 8 deluxe
a2_jp1= [ 20 / 100, 46 / 100, 86 / 100, 86 / 100] #Q1-4, japan
#+++++++++++++++++++++++++++++
a2_jp2 = [ a2_jp1[0], a2_jp1[1]  - a2_jp1[0], a2_jp1[2] - a2_jp1[1], a2_jp1[3] - a2_jp1[2]] #quarterly calculation 

a2_jp3 = [ '{:.2f}M '.format(elem) for elem in a2_jp2 ] #format all integers to string to add  and M

a2_jp4 = [ '{0: >10}'.format(elem) for elem in a2_jp3] #format width

a2_jpfy =  [a2_jp2[0] + a2_jp2[1] + a2_jp2[2] +a2_jp2[3] ]  #fiscal year cumulative, 

a2_jpfy1 = [ '{:.2f}M '.format(elem) for elem in a2_jpfy ] #format all integers to string to add  and M

a2_jpfy2 = [ '{0: >10}'.format(elem) for elem in a2_jpfy1] #format width

a2_os1= [ 150 / 100, 289 / 100, 710 / 100, 710 / 100] #Q1-4, overseas
#+++++++++++++++++++++++++++++
a2_os2 = [ a2_os1[0], a2_os1[1]  - a2_os1[0], a2_os1[2] - a2_os1[1], a2_os1[3] - a2_os1[2]] #quarterly calculation 

a2_os3 = [ '{:.2f}M '.format(elem) for elem in a2_os2 ] #format all integers to string to add  and M

a2_os4 = [ '{0: >13}'.format(elem) for elem in a2_os3] #format width

a2_osfy =  [a2_os2[0] + a2_os2[1] + a2_os2[2] +a2_os2[3] ]  #fiscal year cumulative, 

a2_osfy1 = [ '{:.2f}M '.format(elem) for elem in a2_osfy ] #format all integers to string to add  and M

a2_osfy2 = [ '{0: >13}'.format(elem) for elem in a2_osfy1] #format width


a2_wwfy1= [ 169 / 100, 334 / 100, 796 / 100, 796 / 100] #Q1-4, global fy
#+++++++++++++++++++++++++++++
a2_wwfy2 = [ a2_wwfy1[0], a2_wwfy1[1]  - a2_wwfy1[0], a2_wwfy1[2] - a2_wwfy1[1], a2_wwfy1[3] - a2_wwfy1[2]] #quarterly calculation 

a2_wwfy3 = [ '{:.2f}M '.format(elem) for elem in a2_wwfy2 ] #format all integers to string to add  and M

a2_wwfy4 = [ '{0: >11}'.format(elem) for elem in a2_wwfy3] #format width

a2_wwfyfy =  [a2_wwfy2[0] + a2_wwfy2[1] + a2_wwfy2[2] +a2_wwfy2[3] ]  #fiscal year cumulative, 

a2_wwfyfy1 = [ '{:.2f}M '.format(elem) for elem in a2_wwfyfy ] #format all integers to string to add  and M

a2_wwfyfy2 = [ '{0: >11}'.format(elem) for elem in a2_wwfyfy1] #format width

a2_wwltd1= [ 3708 / 100, 3874 / 100, 4335 / 100, 4335 / 100] #Q1-4, global LTD
#+++++++++++++++++++++++++++++
a2_wwltd2 = [ a2_wwltd1[0], a2_wwltd1[1]  - a2_wwltd1[0], a2_wwltd1[2] - a2_wwltd1[1], a2_wwltd1[3] - a2_wwltd1[2]] #quarterly calculation 

a2_wwltd3 = [ '{:.2f}M '.format(elem) for elem in a2_wwltd2 ] #format all integers to string to add  and M

a2_wwltd4 = [ '{0: >12}'.format(elem) for elem in a2_wwltd3] #format width

a2_wwltdfy =  [a2_wwltd2[0] + a2_wwltd2[1] + a2_wwltd2[2] +a2_wwltd2[3] ]  #fiscal year cumulative, 

a2_wwltdfy1 = [ '{:.2f}M '.format(elem) for elem in a2_wwltdfy ] #format all integers to string to add  and M

a2_wwltdfy2 = [ '{0: >12}'.format(elem) for elem in a2_wwltdfy1] #format width

#percentages 
a2_jpfycpc = (a2_jpfy[0] / a2_wwfyfy[0])  * 100 
a2_jpfycpc1 =  '{:.2f}% '.format(a2_jpfycpc) 
a2_jpfycpc2 =  '{0: >10}'.format(a2_jpfycpc1)

a2_osfycpc = (a2_osfy[0] / a2_wwfyfy[0])  * 100 
a2_osfycpc1 =  '{:.2f}% '.format(a2_osfycpc) 
a2_osfycpc2 =  '{0: >13}'.format(a2_osfycpc1)

a2_wwfycpc = (a2_wwfyfy[0] / a2_wwltdfy[0])  * 100 
a2_wwfycpc1 =  '{:.2f}% '.format(a2_wwfycpc) 
a2_wwfycpc2 =  '{0: >11}'.format(a2_wwfycpc1)

a2_wwltdpc = (100 - a2_wwfycpc)   
a2_wwltdpc1 =  '{:.2f}% '.format(a2_wwltdpc) 
a2_wwltdpc2 =  '{0: >12}'.format(a2_wwltdpc1)

#The legend of zelda breath of the wild
a3_jp1= [ 0 / 100, 16 / 100, 40 / 100, 40 / 100] #Q1-4, japan
#+++++++++++++++++++++++++++++
a3_jp2 = [ a3_jp1[0], a3_jp1[1]  - a3_jp1[0], a3_jp1[2] - a3_jp1[1], a3_jp1[3] - a3_jp1[2]] #quarterly calculation 

a3_jp3 = [ '{:.2f}M '.format(elem) for elem in a3_jp2 ] #format all integers to string to add  and M

a3_jp4 = [ '{0: >10}'.format(elem) for elem in a3_jp3] #format width

a3_jpfy =  [a3_jp2[0] + a3_jp2[1] + a3_jp2[2] +a3_jp2[3] ]  #fiscal year cumulative, 

a3_jpfy1 = [ '{:.2f}M '.format(elem) for elem in a3_jpfy ] #format all integers to string to add  and M

a3_jpfy2 = [ '{0: >10}'.format(elem) for elem in a3_jpfy1] #format width

a3_os1= [ 0 / 100, 170 / 100, 311 / 100, 311 / 100] #Q1-4, overseas
#+++++++++++++++++++++++++++++
a3_os2 = [ a3_os1[0], a3_os1[1]  - a3_os1[0], a3_os1[2] - a3_os1[1], a3_os1[3] - a3_os1[2]] #quarterly calculation 

a3_os3 = [ '{:.2f}M '.format(elem) for elem in a3_os2 ] #format all integers to string to add  and M

a3_os4 = [ '{0: >13}'.format(elem) for elem in a3_os3] #format width

a3_osfy =  [a3_os2[0] + a3_os2[1] + a3_os2[2] +a3_os2[3] ]  #fiscal year cumulative, 

a3_osfy1 = [ '{:.2f}M '.format(elem) for elem in a3_osfy ] #format all integers to string to add  and M

a3_osfy2 = [ '{0: >13}'.format(elem) for elem in a3_osfy1] #format width


a3_wwfy1= [ 0 / 100, 185 / 100, 352 / 100, 352 / 100] #Q1-4, global fy
#+++++++++++++++++++++++++++++
a3_wwfy2 = [ a3_wwfy1[0], a3_wwfy1[1]  - a3_wwfy1[0], a3_wwfy1[2] - a3_wwfy1[1], a3_wwfy1[3] - a3_wwfy1[2]] #quarterly calculation 

a3_wwfy3 = [ '{:.2f}M '.format(elem) for elem in a3_wwfy2 ] #format all integers to string to add  and M

a3_wwfy4 = [ '{0: >11}'.format(elem) for elem in a3_wwfy3] #format width

a3_wwfyfy =  [a3_wwfy2[0] + a3_wwfy2[1] + a3_wwfy2[2] +a3_wwfy2[3] ]  #fiscal year cumulative, 

a3_wwfyfy1 = [ '{:.2f}M '.format(elem) for elem in a3_wwfyfy ] #format all integers to string to add  and M

a3_wwfyfy2 = [ '{0: >11}'.format(elem) for elem in a3_wwfyfy1] #format width

a3_wwltd1= [ 0 / 100, 2413 / 100, 2580 / 100, 2580 / 100] #Q1-4, global LTD
#+++++++++++++++++++++++++++++
a3_wwltd2 = [ a3_wwltd1[0], a3_wwltd1[1]  - a3_wwltd1[0], a3_wwltd1[2] - a3_wwltd1[1], a3_wwltd1[3] - a3_wwltd1[2]] #quarterly calculation 

a3_wwltd3 = [ '{:.2f}M '.format(elem) for elem in a3_wwltd2 ] #format all integers to string to add  and M

a3_wwltd4 = [ '{0: >12}'.format(elem) for elem in a3_wwltd3] #format width

a3_wwltdfy =  [a3_wwltd2[0] + a3_wwltd2[1] + a3_wwltd2[2] +a3_wwltd2[3] ]  #fiscal year cumulative, 

a3_wwltdfy1 = [ '{:.2f}M '.format(elem) for elem in a3_wwltdfy ] #format all integers to string to add  and M

a3_wwltdfy2 = [ '{0: >12}'.format(elem) for elem in a3_wwltdfy1] #format width

#percentages 
a3_jpfycpc = (a3_jpfy[0] / a3_wwfyfy[0])  * 100 
a3_jpfycpc1 =  '{:.2f}% '.format(a3_jpfycpc) 
a3_jpfycpc2 =  '{0: >10}'.format(a3_jpfycpc1)

a3_osfycpc = (a3_osfy[0] / a3_wwfyfy[0])  * 100 
a3_osfycpc1 =  '{:.2f}% '.format(a3_osfycpc) 
a3_osfycpc2 =  '{0: >13}'.format(a3_osfycpc1)

a3_wwfycpc = (a3_wwfyfy[0] / a3_wwltdfy[0])  * 100 
a3_wwfycpc1 =  '{:.2f}% '.format(a3_wwfycpc) 
a3_wwfycpc2 =  '{0: >11}'.format(a3_wwfycpc1)

a3_wwltdpc = (100 - a3_wwfycpc)  
a3_wwltdpc1 =  '{:.2f}% '.format(a3_wwltdpc) 
a3_wwltdpc2 =  '{0: >12}'.format(a3_wwltdpc1)

#New Super Mario Bros. U Deluxe
a4_jp1= [ 0 / 100, 8 / 100, 14 / 100, 14 / 100] #Q1-4, japan
#+++++++++++++++++++++++++++++
a4_jp2 = [ a4_jp1[0], a4_jp1[1]  - a4_jp1[0], a4_jp1[2] - a4_jp1[1], a4_jp1[3] - a4_jp1[2]] #quarterly calculation 

a4_jp3 = [ '{:.2f}M '.format(elem) for elem in a4_jp2 ] #format all integers to string to add  and M

a4_jp4 = [ '{0: >10}'.format(elem) for elem in a4_jp3] #format width

a4_jpfy =  [a4_jp2[0] + a4_jp2[1] + a4_jp2[2] +a4_jp2[3] ]  #fiscal year cumulative, 

a4_jpfy1 = [ '{:.2f}M '.format(elem) for elem in a4_jpfy ] #format all integers to string to add  and M

a4_jpfy2 = [ '{0: >10}'.format(elem) for elem in a4_jpfy1] #format width

a4_os1= [ 0 / 100, 96 / 100, 213 / 100, 213 / 100] #Q1-4, overseas
#+++++++++++++++++++++++++++++
a4_os2 = [ a4_os1[0], a4_os1[1]  - a4_os1[0], a4_os1[2] - a4_os1[1], a4_os1[3] - a4_os1[2]] #quarterly calculation 

a4_os3 = [ '{:.2f}M '.format(elem) for elem in a4_os2 ] #format all integers to string to add  and M

a4_os4 = [ '{0: >13}'.format(elem) for elem in a4_os3] #format width

a4_osfy =  [a4_os2[0] + a4_os2[1] + a4_os2[2] +a4_os2[3] ]  #fiscal year cumulative, 

a4_osfy1 = [ '{:.2f}M '.format(elem) for elem in a4_osfy ] #format all integers to string to add  and M

a4_osfy2 = [ '{0: >13}'.format(elem) for elem in a4_osfy1] #format width


a4_wwfy1= [ 0 / 100, 103 / 100, 228 / 100, 228 / 100] #Q1-4, global fy
#+++++++++++++++++++++++++++++
a4_wwfy2 = [ a4_wwfy1[0], a4_wwfy1[1]  - a4_wwfy1[0], a4_wwfy1[2] - a4_wwfy1[1], a4_wwfy1[3] - a4_wwfy1[2]] #quarterly calculation 

a4_wwfy3 = [ '{:.2f}M '.format(elem) for elem in a4_wwfy2 ] #format all integers to string to add  and M

a4_wwfy4 = [ '{0: >11}'.format(elem) for elem in a4_wwfy3] #format width

a4_wwfyfy =  [a4_wwfy2[0] + a4_wwfy2[1] + a4_wwfy2[2] +a4_wwfy2[3] ]  #fiscal year cumulative, 

a4_wwfyfy1 = [ '{:.2f}M '.format(elem) for elem in a4_wwfyfy ] #format all integers to string to add  and M

a4_wwfyfy2 = [ '{0: >11}'.format(elem) for elem in a4_wwfyfy1] #format width

a4_wwltd1= [ 0 / 100, 1148 / 100, 1272 / 100, 1272 / 100] #Q1-4, global LTD
#+++++++++++++++++++++++++++++
a4_wwltd2 = [ a4_wwltd1[0], a4_wwltd1[1]  - a4_wwltd1[0], a4_wwltd1[2] - a4_wwltd1[1], a4_wwltd1[3] - a4_wwltd1[2]] #quarterly calculation 

a4_wwltd3 = [ '{:.2f}M '.format(elem) for elem in a4_wwltd2 ] #format all integers to string to add  and M

a4_wwltd4 = [ '{0: >12}'.format(elem) for elem in a4_wwltd3] #format width

a4_wwltdfy =  [a4_wwltd2[0] + a4_wwltd2[1] + a4_wwltd2[2] +a4_wwltd2[3] ]  #fiscal year cumulative, 

a4_wwltdfy1 = [ '{:.2f}M '.format(elem) for elem in a4_wwltdfy ] #format all integers to string to add  and M

a4_wwltdfy2 = [ '{0: >12}'.format(elem) for elem in a4_wwltdfy1] #format width

#percentages 
a4_jpfycpc = (a4_jpfy[0] / a4_wwfyfy[0])  * 100 
a4_jpfycpc1 =  '{:.2f}% '.format(a4_jpfycpc) 
a4_jpfycpc2 =  '{0: >10}'.format(a4_jpfycpc1)

a4_osfycpc = (a4_osfy[0] / a4_wwfyfy[0])  * 100 
a4_osfycpc1 =  '{:.2f}% '.format(a4_osfycpc) 
a4_osfycpc2 =  '{0: >13}'.format(a4_osfycpc1)

a4_wwfycpc = (a4_wwfyfy[0] / a4_wwltdfy[0])  * 100 
a4_wwfycpc1 =  '{:.2f}% '.format(a4_wwfycpc) 
a4_wwfycpc2 =  '{0: >11}'.format(a4_wwfycpc1)

a4_wwltdpc = (100 - a4_wwfycpc)  
a4_wwltdpc1 =  '{:.2f}% '.format(a4_wwltdpc) 
a4_wwltdpc2 =  '{0: >12}'.format(a4_wwltdpc1)

#Mario Golf: Super Rush
a5_jp1= [ 21 / 100, 29 / 100, 30 / 100, 30 / 100] #Q1-4, japan
#+++++++++++++++++++++++++++++
a5_jp2 = [ a5_jp1[0], a5_jp1[1]  - a5_jp1[0], a5_jp1[2] - a5_jp1[1], a5_jp1[3] - a5_jp1[2]] #quarterly calculation 

a5_jp3 = [ '{:.2f}M '.format(elem) for elem in a5_jp2 ] #format all integers to string to add  and M

a5_jp4 = [ '{0: >10}'.format(elem) for elem in a5_jp3] #format width

a5_jpfy =  [a5_jp2[0] + a5_jp2[1] + a5_jp2[2] +a5_jp2[3] ]  #fiscal year cumulative, 

a5_jpfy1 = [ '{:.2f}M '.format(elem) for elem in a5_jpfy ] #format all integers to string to add  and M

a5_jpfy2 = [ '{0: >10}'.format(elem) for elem in a5_jpfy1] #format width

a5_os1= [ 113 / 100, 165 / 100, 196 / 100, 196 / 100] #Q1-4, overseas
#+++++++++++++++++++++++++++++
a5_os2 = [ a5_os1[0], a5_os1[1]  - a5_os1[0], a5_os1[2] - a5_os1[1], a5_os1[3] - a5_os1[2]] #quarterly calculation 

a5_os3 = [ '{:.2f}M '.format(elem) for elem in a5_os2 ] #format all integers to string to add  and M

a5_os4 = [ '{0: >13}'.format(elem) for elem in a5_os3] #format width

a5_osfy =  [a5_os2[0] + a5_os2[1] + a5_os2[2] +a5_os2[3] ]  #fiscal year cumulative, 

a5_osfy1 = [ '{:.2f}M '.format(elem) for elem in a5_osfy ] #format all integers to string to add  and M

a5_osfy2 = [ '{0: >13}'.format(elem) for elem in a5_osfy1] #format width


a5_wwfy1= [ 134 / 100, 194 / 100, 226 / 100, 226 / 100] #Q1-4, global fy
#+++++++++++++++++++++++++++++
a5_wwfy2 = [ a5_wwfy1[0], a5_wwfy1[1]  - a5_wwfy1[0], a5_wwfy1[2] - a5_wwfy1[1], a5_wwfy1[3] - a5_wwfy1[2]] #quarterly calculation 

a5_wwfy3 = [ '{:.2f}M '.format(elem) for elem in a5_wwfy2 ] #format all integers to string to add  and M

a5_wwfy4 = [ '{0: >11}'.format(elem) for elem in a5_wwfy3] #format width

a5_wwfyfy =  [a5_wwfy2[0] + a5_wwfy2[1] + a5_wwfy2[2] +a5_wwfy2[3] ]  #fiscal year cumulative, 

a5_wwfyfy1 = [ '{:.2f}M '.format(elem) for elem in a5_wwfyfy ] #format all integers to string to add  and M

a5_wwfyfy2 = [ '{0: >11}'.format(elem) for elem in a5_wwfyfy1] #format width

a5_wwltd1= [ 134 / 100, 194 / 100, 226 / 100, 226 / 100] #Q1-4, global LTD
#+++++++++++++++++++++++++++++
a5_wwltd2 = [ a5_wwltd1[0], a5_wwltd1[1]  - a5_wwltd1[0], a5_wwltd1[2] - a5_wwltd1[1], a5_wwltd1[3] - a5_wwltd1[2]] #quarterly calculation 

a5_wwltd3 = [ '{:.2f}M '.format(elem) for elem in a5_wwltd2 ] #format all integers to string to add  and M

a5_wwltd4 = [ '{0: >12}'.format(elem) for elem in a5_wwltd3] #format width

a5_wwltdfy =  [a5_wwltd2[0] + a5_wwltd2[1] + a5_wwltd2[2] +a5_wwltd2[3] ]  #fiscal year cumulative, 

a5_wwltdfy1 = [ '{:.2f}M '.format(elem) for elem in a5_wwltdfy ] #format all integers to string to add  and M

a5_wwltdfy2 = [ '{0: >12}'.format(elem) for elem in a5_wwltdfy1] #format width

#percentages 
a5_jpfycpc = (a5_jpfy[0] / a5_wwfyfy[0])  * 100 
a5_jpfycpc1 =  '{:.2f}% '.format(a5_jpfycpc) 
a5_jpfycpc2 =  '{0: >10}'.format(a5_jpfycpc1)

a5_osfycpc = (a5_osfy[0] / a5_wwfyfy[0])  * 100 
a5_osfycpc1 =  '{:.2f}% '.format(a5_osfycpc) 
a5_osfycpc2 =  '{0: >13}'.format(a5_osfycpc1)

a5_wwfycpc = (a5_wwfyfy[0] / a5_wwltdfy[0])  * 100 
a5_wwfycpc1 =  '{:.2f}% '.format(a5_wwfycpc) 
a5_wwfycpc2 =  '{0: >11}'.format(a5_wwfycpc1)

a5_wwltdpc = (100 - a5_wwfycpc)  
a5_wwltdpc1 =  '{:.2f}% '.format(a5_wwltdpc) 
a5_wwltdpc2 =  '{0: >12}'.format(a5_wwltdpc1)

#Ring Fit Adventure
a6_jp1= [ 25 / 100, 52 / 100, 80 / 100, 80 / 100] #Q1-4, japan
#+++++++++++++++++++++++++++++
a6_jp2 = [ a6_jp1[0], a6_jp1[1]  - a6_jp1[0], a6_jp1[2] - a6_jp1[1], a6_jp1[3] - a6_jp1[2]] #quarterly calculation 

a6_jp3 = [ '{:.2f}M '.format(elem) for elem in a6_jp2 ] #format all integers to string to add  and M

a6_jp4 = [ '{0: >10}'.format(elem) for elem in a6_jp3] #format width

a6_jpfy =  [a6_jp2[0] + a6_jp2[1] + a6_jp2[2] +a6_jp2[3] ]  #fiscal year cumulative, 

a6_jpfy1 = [ '{:.2f}M '.format(elem) for elem in a6_jpfy ] #format all integers to string to add  and M

a6_jpfy2 = [ '{0: >10}'.format(elem) for elem in a6_jpfy1] #format width

a6_os1= [ 89 / 100, 158 / 100, 262 / 100, 262 / 100] #Q1-4, overseas
#+++++++++++++++++++++++++++++
a6_os2 = [ a6_os1[0], a6_os1[1]  - a6_os1[0], a6_os1[2] - a6_os1[1], a6_os1[3] - a6_os1[2]] #quarterly calculation 

a6_os3 = [ '{:.2f}M '.format(elem) for elem in a6_os2 ] #format all integers to string to add  and M

a6_os4 = [ '{0: >13}'.format(elem) for elem in a6_os3] #format width

a6_osfy =  [a6_os2[0] + a6_os2[1] + a6_os2[2] +a6_os2[3] ]  #fiscal year cumulative, 

a6_osfy1 = [ '{:.2f}M '.format(elem) for elem in a6_osfy ] #format all integers to string to add  and M

a6_osfy2 = [ '{0: >13}'.format(elem) for elem in a6_osfy1] #format width


a6_wwfy1= [ 115 / 100, 210 / 100, 342 / 100, 342 / 100] #Q1-4, global fy
#+++++++++++++++++++++++++++++
a6_wwfy2 = [ a6_wwfy1[0], a6_wwfy1[1]  - a6_wwfy1[0], a6_wwfy1[2] - a6_wwfy1[1], a6_wwfy1[3] - a6_wwfy1[2]] #quarterly calculation 

a6_wwfy3 = [ '{:.2f}M '.format(elem) for elem in a6_wwfy2 ] #format all integers to string to add  and M

a6_wwfy4 = [ '{0: >11}'.format(elem) for elem in a6_wwfy3] #format width

a6_wwfyfy =  [a6_wwfy2[0] + a6_wwfy2[1] + a6_wwfy2[2] +a6_wwfy2[3] ]  #fiscal year cumulative, 

a6_wwfyfy1 = [ '{:.2f}M '.format(elem) for elem in a6_wwfyfy ] #format all integers to string to add  and M

a6_wwfyfy2 = [ '{0: >11}'.format(elem) for elem in a6_wwfyfy1] #format width

a6_wwltd1= [ 1126 / 100, 1221 / 100, 1353 / 100, 1353 / 100] #Q1-4, global LTD
#+++++++++++++++++++++++++++++
a6_wwltd2 = [ a6_wwltd1[0], a6_wwltd1[1]  - a6_wwltd1[0], a6_wwltd1[2] - a6_wwltd1[1], a6_wwltd1[3] - a6_wwltd1[2]] #quarterly calculation 

a6_wwltd3 = [ '{:.2f}M '.format(elem) for elem in a6_wwltd2 ] #format all integers to string to add  and M

a6_wwltd4 = [ '{0: >12}'.format(elem) for elem in a6_wwltd3] #format width

a6_wwltdfy =  [a6_wwltd2[0] + a6_wwltd2[1] + a6_wwltd2[2] +a6_wwltd2[3] ]  #fiscal year cumulative, 

a6_wwltdfy1 = [ '{:.2f}M '.format(elem) for elem in a6_wwltdfy ] #format all integers to string to add  and M

a6_wwltdfy2 = [ '{0: >12}'.format(elem) for elem in a6_wwltdfy1] #format width

#percentages 
a6_jpfycpc = (a6_jpfy[0] / a6_wwfyfy[0])  * 100 
a6_jpfycpc1 =  '{:.2f}% '.format(a6_jpfycpc) 
a6_jpfycpc2 =  '{0: >10}'.format(a6_jpfycpc1)

a6_osfycpc = (a6_osfy[0] / a6_wwfyfy[0])  * 100 
a6_osfycpc1 =  '{:.2f}% '.format(a6_osfycpc) 
a6_osfycpc2 =  '{0: >13}'.format(a6_osfycpc1)

a6_wwfycpc = (a6_wwfyfy[0] / a6_wwltdfy[0])  * 100 
a6_wwfycpc1 =  '{:.2f}% '.format(a6_wwfycpc) 
a6_wwfycpc2 =  '{0: >11}'.format(a6_wwfycpc1)

a6_wwltdpc = (100 - a6_wwfycpc)  
a6_wwltdpc1 =  '{:.2f}% '.format(a6_wwltdpc) 
a6_wwltdpc2 =  '{0: >12}'.format(a6_wwltdpc1)

#Super Mario Party
a7_jp1= [ 0 / 100, 22 / 100, 29 / 100, 29 / 100] #Q1-4, japan
#+++++++++++++++++++++++++++++
a7_jp2 = [ a7_jp1[0], a7_jp1[1]  - a7_jp1[0], a7_jp1[2] - a7_jp1[1], a7_jp1[3] - a7_jp1[2]] #quarterly calculation 

a7_jp3 = [ '{:.2f}M '.format(elem) for elem in a7_jp2 ] #format all integers to string to add  and M

a7_jp4 = [ '{0: >10}'.format(elem) for elem in a7_jp3] #format width

a7_jpfy =  [a7_jp2[0] + a7_jp2[1] + a7_jp2[2] +a7_jp2[3] ]  #fiscal year cumulative, 

a7_jpfy1 = [ '{:.2f}M '.format(elem) for elem in a7_jpfy ] #format all integers to string to add  and M

a7_jpfy2 = [ '{0: >10}'.format(elem) for elem in a7_jpfy1] #format width

a7_os1= [ 0 / 100, 147 / 100, 230 / 100, 230 / 100] #Q1-4, overseas
#+++++++++++++++++++++++++++++
a7_os2 = [ a7_os1[0], a7_os1[1]  - a7_os1[0], a7_os1[2] - a7_os1[1], a7_os1[3] - a7_os1[2]] #quarterly calculation 

a7_os3 = [ '{:.2f}M '.format(elem) for elem in a7_os2 ] #format all integers to string to add  and M

a7_os4 = [ '{0: >13}'.format(elem) for elem in a7_os3] #format width

a7_osfy =  [a7_os2[0] + a7_os2[1] + a7_os2[2] +a7_os2[3] ]  #fiscal year cumulative, 

a7_osfy1 = [ '{:.2f}M '.format(elem) for elem in a7_osfy ] #format all integers to string to add  and M

a7_osfy2 = [ '{0: >13}'.format(elem) for elem in a7_osfy1] #format width


a7_wwfy1= [ 0 / 100, 168 / 100, 259 / 100, 259 / 100] #Q1-4, global fy
#+++++++++++++++++++++++++++++
a7_wwfy2 = [ a7_wwfy1[0], a7_wwfy1[1]  - a7_wwfy1[0], a7_wwfy1[2] - a7_wwfy1[1], a7_wwfy1[3] - a7_wwfy1[2]] #quarterly calculation 

a7_wwfy3 = [ '{:.2f}M '.format(elem) for elem in a7_wwfy2 ] #format all integers to string to add  and M

a7_wwfy4 = [ '{0: >11}'.format(elem) for elem in a7_wwfy3] #format width

a7_wwfyfy =  [a7_wwfy2[0] + a7_wwfy2[1] + a7_wwfy2[2] +a7_wwfy2[3] ]  #fiscal year cumulative, 

a7_wwfyfy1 = [ '{:.2f}M '.format(elem) for elem in a7_wwfyfy ] #format all integers to string to add  and M

a7_wwfyfy2 = [ '{0: >11}'.format(elem) for elem in a7_wwfyfy1] #format width

a7_wwltd1= [ 0 / 100, 1648 / 100, 1739 / 100, 1739 / 100] #Q1-4, global LTD
#+++++++++++++++++++++++++++++
a7_wwltd2 = [ a7_wwltd1[0], a7_wwltd1[1]  - a7_wwltd1[0], a7_wwltd1[2] - a7_wwltd1[1], a7_wwltd1[3] - a7_wwltd1[2]] #quarterly calculation 

a7_wwltd3 = [ '{:.2f}M '.format(elem) for elem in a7_wwltd2 ] #format all integers to string to add  and M

a7_wwltd4 = [ '{0: >12}'.format(elem) for elem in a7_wwltd3] #format width

a7_wwltdfy =  [a7_wwltd2[0] + a7_wwltd2[1] + a7_wwltd2[2] +a7_wwltd2[3] ]  #fiscal year cumulative, 

a7_wwltdfy1 = [ '{:.2f}M '.format(elem) for elem in a7_wwltdfy ] #format all integers to string to add  and M

a7_wwltdfy2 = [ '{0: >12}'.format(elem) for elem in a7_wwltdfy1] #format width

#percentages 
a7_jpfycpc = (a7_jpfy[0] / a7_wwfyfy[0])  * 100 
a7_jpfycpc1 =  '{:.2f}% '.format(a7_jpfycpc) 
a7_jpfycpc2 =  '{0: >10}'.format(a7_jpfycpc1)

a7_osfycpc = (a7_osfy[0] / a7_wwfyfy[0])  * 100 
a7_osfycpc1 =  '{:.2f}% '.format(a7_osfycpc) 
a7_osfycpc2 =  '{0: >13}'.format(a7_osfycpc1)

a7_wwfycpc = (a7_wwfyfy[0] / a7_wwltdfy[0])  * 100 
a7_wwfycpc1 =  '{:.2f}% '.format(a7_wwfycpc) 
a7_wwfycpc2 =  '{0: >11}'.format(a7_wwfycpc1)

a7_wwltdpc = (100 - a7_wwfycpc)  
a7_wwltdpc1 =  '{:.2f}% '.format(a7_wwltdpc) 
a7_wwltdpc2 =  '{0: >12}'.format(a7_wwltdpc1)

#Pokémon Sword/Shield
a8_jp1= [ 0 / 100, 19 / 100, 42 / 100, 42 / 100] #Q1-4, japan
#+++++++++++++++++++++++++++++
a8_jp2 = [ a8_jp1[0], a8_jp1[1]  - a8_jp1[0], a8_jp1[2] - a8_jp1[1], a8_jp1[3] - a8_jp1[2]] #quarterly calculation 

a8_jp3 = [ '{:.2f}M '.format(elem) for elem in a8_jp2 ] #format all integers to string to add  and M

a8_jp4 = [ '{0: >10}'.format(elem) for elem in a8_jp3] #format width

a8_jpfy =  [a8_jp2[0] + a8_jp2[1] + a8_jp2[2] +a8_jp2[3] ]  #fiscal year cumulative, 

a8_jpfy1 = [ '{:.2f}M '.format(elem) for elem in a8_jpfy ] #format all integers to string to add  and M

a8_jpfy2 = [ '{0: >10}'.format(elem) for elem in a8_jpfy1] #format width

a8_os1= [ 0 / 100, 135 / 100, 238 / 100, 238 / 100] #Q1-4, overseas
#+++++++++++++++++++++++++++++
a8_os2 = [ a8_os1[0], a8_os1[1]  - a8_os1[0], a8_os1[2] - a8_os1[1], a8_os1[3] - a8_os1[2]] #quarterly calculation 

a8_os3 = [ '{:.2f}M '.format(elem) for elem in a8_os2 ] #format all integers to string to add  and M

a8_os4 = [ '{0: >13}'.format(elem) for elem in a8_os3] #format width

a8_osfy =  [a8_os2[0] + a8_os2[1] + a8_os2[2] +a8_os2[3] ]  #fiscal year cumulative, 

a8_osfy1 = [ '{:.2f}M '.format(elem) for elem in a8_osfy ] #format all integers to string to add  and M

a8_osfy2 = [ '{0: >13}'.format(elem) for elem in a8_osfy1] #format width

a8_wwfy1= [ 0 / 100, 154 / 100, 280 / 100, 280 / 100] #Q1-4, global fy
#+++++++++++++++++++++++++++++
a8_wwfy2 = [ a8_wwfy1[0], a8_wwfy1[1]  - a8_wwfy1[0], a8_wwfy1[2] - a8_wwfy1[1], a8_wwfy1[3] - a8_wwfy1[2]] #quarterly calculation 

a8_wwfy3 = [ '{:.2f}M '.format(elem) for elem in a8_wwfy2 ] #format all integers to string to add  and M

a8_wwfy4 = [ '{0: >11}'.format(elem) for elem in a8_wwfy3] #format width

a8_wwfyfy =  [a8_wwfy2[0] + a8_wwfy2[1] + a8_wwfy2[2] +a8_wwfy2[3] ]  #fiscal year cumulative, 

a8_wwfyfy1 = [ '{:.2f}M '.format(elem) for elem in a8_wwfyfy ] #format all integers to string to add  and M

a8_wwfyfy2 = [ '{0: >11}'.format(elem) for elem in a8_wwfyfy1] #format width

a8_wwltd1= [ 0 / 100, 2264 / 100, 2390 / 100, 2390 / 100] #Q1-4, global LTD
#+++++++++++++++++++++++++++++
a8_wwltd2 = [ a8_wwltd1[0], a8_wwltd1[1]  - a8_wwltd1[0], a8_wwltd1[2] - a8_wwltd1[1], a8_wwltd1[3] - a8_wwltd1[2]] #quarterly calculation 

a8_wwltd3 = [ '{:.2f}M '.format(elem) for elem in a8_wwltd2 ] #format all integers to string to add  and M

a8_wwltd4 = [ '{0: >12}'.format(elem) for elem in a8_wwltd3] #format width

a8_wwltdfy =  [a8_wwltd2[0] + a8_wwltd2[1] + a8_wwltd2[2] +a8_wwltd2[3] ]  #fiscal year cumulative, 

a8_wwltdfy1 = [ '{:.2f}M '.format(elem) for elem in a8_wwltdfy ] #format all integers to string to add  and M

a8_wwltdfy2 = [ '{0: >12}'.format(elem) for elem in a8_wwltdfy1] #format width

#percentages 
a8_jpfycpc = (a8_jpfy[0] / a8_wwfyfy[0])  * 100 
a8_jpfycpc1 =  '{:.2f}% '.format(a8_jpfycpc) 
a8_jpfycpc2 =  '{0: >10}'.format(a8_jpfycpc1)

a8_osfycpc = (a8_osfy[0] / a8_wwfyfy[0])  * 100 
a8_osfycpc1 =  '{:.2f}% '.format(a8_osfycpc) 
a8_osfycpc2 =  '{0: >13}'.format(a8_osfycpc1)

a8_wwfycpc = (a8_wwfyfy[0] / a8_wwltdfy[0])  * 100 
a8_wwfycpc1 =  '{:.2f}% '.format(a8_wwfycpc) 
a8_wwfycpc2 =  '{0: >11}'.format(a8_wwfycpc1)

a8_wwltdpc = (100 - a8_wwfycpc)  
a8_wwltdpc1 =  '{:.2f}% '.format(a8_wwltdpc) 
a8_wwltdpc2 =  '{0: >12}'.format(a8_wwltdpc1)

#Super Smash Bros. Ultimate
a9_jp1= [ 0 / 100, 33 / 100, 77 / 100, 77 / 100] #Q1-4, japan
#+++++++++++++++++++++++++++++
a9_jp2 = [ a9_jp1[0], a9_jp1[1]  - a9_jp1[0], a9_jp1[2] - a9_jp1[1], a9_jp1[3] - a9_jp1[2]] #quarterly calculation 

a9_jp3 = [ '{:.2f}M '.format(elem) for elem in a9_jp2 ] #format all integers to string to add  and M

a9_jp4 = [ '{0: >10}'.format(elem) for elem in a9_jp3] #format width

a9_jpfy =  [a9_jp2[0] + a9_jp2[1] + a9_jp2[2] +a9_jp2[3] ]  #fiscal year cumulative, 

a9_jpfy1 = [ '{:.2f}M '.format(elem) for elem in a9_jpfy ] #format all integers to string to add  and M

a9_jpfy2 = [ '{0: >10}'.format(elem) for elem in a9_jpfy1] #format width

a9_os1= [ 0 / 100, 153 / 100, 279 / 100, 279 / 100] #Q1-4, overseas
#+++++++++++++++++++++++++++++
a9_os2 = [ a9_os1[0], a9_os1[1]  - a9_os1[0], a9_os1[2] - a9_os1[1], a9_os1[3] - a9_os1[2]] #quarterly calculation 

a9_os3 = [ '{:.2f}M '.format(elem) for elem in a9_os2 ] #format all integers to string to add  and M

a9_os4 = [ '{0: >13}'.format(elem) for elem in a9_os3] #format width

a9_osfy =  [a9_os2[0] + a9_os2[1] + a9_os2[2] +a9_os2[3] ]  #fiscal year cumulative, 

a9_osfy1 = [ '{:.2f}M '.format(elem) for elem in a9_osfy ] #format all integers to string to add  and M

a9_osfy2 = [ '{0: >13}'.format(elem) for elem in a9_osfy1] #format width

a9_wwfy1= [ 0 / 100, 186 / 100, 356 / 100, 356 / 100] #Q1-4, global fy
#+++++++++++++++++++++++++++++
a9_wwfy2 = [ a9_wwfy1[0], a9_wwfy1[1]  - a9_wwfy1[0], a9_wwfy1[2] - a9_wwfy1[1], a9_wwfy1[3] - a9_wwfy1[2]] #quarterly calculation 

a9_wwfy3 = [ '{:.2f}M '.format(elem) for elem in a9_wwfy2 ] #format all integers to string to add  and M

a9_wwfy4 = [ '{0: >11}'.format(elem) for elem in a9_wwfy3] #format width

a9_wwfyfy =  [a9_wwfy2[0] + a9_wwfy2[1] + a9_wwfy2[2] +a9_wwfy2[3] ]  #fiscal year cumulative, 

a9_wwfyfy1 = [ '{:.2f}M '.format(elem) for elem in a9_wwfyfy ] #format all integers to string to add  and M

a9_wwfyfy2 = [ '{0: >11}'.format(elem) for elem in a9_wwfyfy1] #format width

a9_wwltd1= [ 0 / 100, 2571 / 100, 2740 / 100, 2740 / 100] #Q1-4, global LTD
#+++++++++++++++++++++++++++++
a9_wwltd2 = [ a9_wwltd1[0], a9_wwltd1[1]  - a9_wwltd1[0], a9_wwltd1[2] - a9_wwltd1[1], a9_wwltd1[3] - a9_wwltd1[2]] #quarterly calculation 

a9_wwltd3 = [ '{:.2f}M '.format(elem) for elem in a9_wwltd2 ] #format all integers to string to add  and M

a9_wwltd4 = [ '{0: >12}'.format(elem) for elem in a9_wwltd3] #format width

a9_wwltdfy =  [a9_wwltd2[0] + a9_wwltd2[1] + a9_wwltd2[2] +a9_wwltd2[3] ]  #fiscal year cumulative, 

a9_wwltdfy1 = [ '{:.2f}M '.format(elem) for elem in a9_wwltdfy ] #format all integers to string to add  and M

a9_wwltdfy2 = [ '{0: >12}'.format(elem) for elem in a9_wwltdfy1] #format width

#percentages 
a9_jpfycpc = (a9_jpfy[0] / a9_wwfyfy[0])  * 100 
a9_jpfycpc1 =  '{:.2f}% '.format(a9_jpfycpc) 
a9_jpfycpc2 =  '{0: >10}'.format(a9_jpfycpc1)

a9_osfycpc = (a9_osfy[0] / a9_wwfyfy[0])  * 100 
a9_osfycpc1 =  '{:.2f}% '.format(a9_osfycpc) 
a9_osfycpc2 =  '{0: >13}'.format(a9_osfycpc1)

a9_wwfycpc = (a9_wwfyfy[0] / a9_wwltdfy[0])  * 100 
a9_wwfycpc1 =  '{:.2f}% '.format(a9_wwfycpc) 
a9_wwfycpc2 =  '{0: >11}'.format(a9_wwfycpc1)

a9_wwltdpc = (100 - a9_wwfycpc)  
a9_wwltdpc1 =  '{:.2f}% '.format(a9_wwltdpc) 
a9_wwltdpc2 =  '{0: >12}'.format(a9_wwltdpc1)

#Super Mario Odyssey
a10_jp1= [ 0 / 100, 8 / 100, 15 / 100, 15 / 100] #Q1-4, japan
#+++++++++++++++++++++++++++++
a10_jp2 = [ a10_jp1[0], a10_jp1[1]  - a10_jp1[0], a10_jp1[2] - a10_jp1[1], a10_jp1[3] - a10_jp1[2]] #quarterly calculation 

a10_jp3 = [ '{:.2f}M '.format(elem) for elem in a10_jp2 ] #format all integers to string to add  and M

a10_jp4 = [ '{0: >10}'.format(elem) for elem in a10_jp3] #format width

a10_jpfy =  [a10_jp2[0] + a10_jp2[1] + a10_jp2[2] +a10_jp2[3] ]  #fiscal year cumulative, 

a10_jpfy1 = [ '{:.2f}M '.format(elem) for elem in a10_jpfy ] #format all integers to string to add  and M

a10_jpfy2 = [ '{0: >10}'.format(elem) for elem in a10_jpfy1] #format width

a10_os1= [ 0 / 100, 103 / 100, 204 / 100, 204 / 100] #Q1-4, overseas
#+++++++++++++++++++++++++++++
a10_os2 = [ a10_os1[0], a10_os1[1]  - a10_os1[0], a10_os1[2] - a10_os1[1], a10_os1[3] - a10_os1[2]] #quarterly calculation 

a10_os3 = [ '{:.2f}M '.format(elem) for elem in a10_os2 ] #format all integers to string to add  and M

a10_os4 = [ '{0: >13}'.format(elem) for elem in a10_os3] #format width

a10_osfy =  [a10_os2[0] + a10_os2[1] + a10_os2[2] +a10_os2[3] ]  #fiscal year cumulative, 

a10_osfy1 = [ '{:.2f}M '.format(elem) for elem in a10_osfy ] #format all integers to string to add  and M

a10_osfy2 = [ '{0: >13}'.format(elem) for elem in a10_osfy1] #format width

a10_wwfy1= [ 0 / 100, 112 / 100, 219 / 100, 219 / 100] #Q1-4, global fy
#+++++++++++++++++++++++++++++
a10_wwfy2 = [ a10_wwfy1[0], a10_wwfy1[1]  - a10_wwfy1[0], a10_wwfy1[2] - a10_wwfy1[1], a10_wwfy1[3] - a10_wwfy1[2]] #quarterly calculation 

a10_wwfy3 = [ '{:.2f}M '.format(elem) for elem in a10_wwfy2 ] #format all integers to string to add  and M

a10_wwfy4 = [ '{0: >11}'.format(elem) for elem in a10_wwfy3] #format width

a10_wwfyfy =  [a10_wwfy2[0] + a10_wwfy2[1] + a10_wwfy2[2] +a10_wwfy2[3] ]  #fiscal year cumulative, 

a10_wwfyfy1 = [ '{:.2f}M '.format(elem) for elem in a10_wwfyfy ] #format all integers to string to add  and M

a10_wwfyfy2 = [ '{0: >11}'.format(elem) for elem in a10_wwfyfy1] #format width

a10_wwltd1= [ 0 / 100, 2195 / 100, 2302 / 100, 2302 / 100] #Q1-4, global LTD
#+++++++++++++++++++++++++++++
a10_wwltd2 = [ a10_wwltd1[0], a10_wwltd1[1]  - a10_wwltd1[0], a10_wwltd1[2] - a10_wwltd1[1], a10_wwltd1[3] - a10_wwltd1[2]] #quarterly calculation 

a10_wwltd3 = [ '{:.2f}M '.format(elem) for elem in a10_wwltd2 ] #format all integers to string to add  and M

a10_wwltd4 = [ '{0: >12}'.format(elem) for elem in a10_wwltd3] #format width

a10_wwltdfy =  [a10_wwltd2[0] + a10_wwltd2[1] + a10_wwltd2[2] +a10_wwltd2[3] ]  #fiscal year cumulative, 

a10_wwltdfy1 = [ '{:.2f}M '.format(elem) for elem in a10_wwltdfy ] #format all integers to string to add  and M

a10_wwltdfy2 = [ '{0: >12}'.format(elem) for elem in a10_wwltdfy1] #format width

#percentages 
a10_jpfycpc = (a10_jpfy[0] / a10_wwfyfy[0])  * 100 
a10_jpfycpc1 =  '{:.2f}% '.format(a10_jpfycpc) 
a10_jpfycpc2 =  '{0: >10}'.format(a10_jpfycpc1)

a10_osfycpc = (a10_osfy[0] / a10_wwfyfy[0])  * 100 
a10_osfycpc1 =  '{:.2f}% '.format(a10_osfycpc) 
a10_osfycpc2 =  '{0: >13}'.format(a10_osfycpc1)

a10_wwfycpc = (a10_wwfyfy[0] / a10_wwltdfy[0])  * 100 
a10_wwfycpc1 =  '{:.2f}% '.format(a10_wwfycpc) 
a10_wwfycpc2 =  '{0: >11}'.format(a10_wwfycpc1)

a10_wwltdpc = (100 - a10_wwfycpc)  
a10_wwltdpc1 =  '{:.2f}% '.format(a10_wwltdpc) 
a10_wwltdpc2 =  '{0: >12}'.format(a10_wwltdpc1)

#Animal Crossing: New Horizons
a11_jp1= [ 13 / 100, 25 / 100, 70 / 100, 70 / 100] #Q1-4, japan
#+++++++++++++++++++++++++++++
a11_jp2 = [ a11_jp1[0], a11_jp1[1]  - a11_jp1[0], a11_jp1[2] - a11_jp1[1], a11_jp1[3] - a11_jp1[2]] #quarterly calculation 

a11_jp3 = [ '{:.2f}M '.format(elem) for elem in a11_jp2 ] #format all integers to string to add  and M

a11_jp4 = [ '{0: >10}'.format(elem) for elem in a11_jp3] #format width

a11_jpfy =  [a11_jp2[0] + a11_jp2[1] + a11_jp2[2] +a11_jp2[3] ]  #fiscal year cumulative, 

a11_jpfy1 = [ '{:.2f}M '.format(elem) for elem in a11_jpfy ] #format all integers to string to add  and M

a11_jpfy2 = [ '{0: >10}'.format(elem) for elem in a11_jpfy1] #format width

a11_os1= [ 113 / 100, 197 / 100, 430 / 100, 430 / 100] #Q1-4, overseas
#+++++++++++++++++++++++++++++
a11_os2 = [ a11_os1[0], a11_os1[1]  - a11_os1[0], a11_os1[2] - a11_os1[1], a11_os1[3] - a11_os1[2]] #quarterly calculation 

a11_os3 = [ '{:.2f}M '.format(elem) for elem in a11_os2 ] #format all integers to string to add  and M

a11_os4 = [ '{0: >13}'.format(elem) for elem in a11_os3] #format width

a11_osfy =  [a11_os2[0] + a11_os2[1] + a11_os2[2] +a11_os2[3] ]  #fiscal year cumulative, 

a11_osfy1 = [ '{:.2f}M '.format(elem) for elem in a11_osfy ] #format all integers to string to add  and M

a11_osfy2 = [ '{0: >13}'.format(elem) for elem in a11_osfy1] #format width

a11_wwfy1= [ 126 / 100, 222 / 100, 499 / 100, 499 / 100] #Q1-4, global fy
#+++++++++++++++++++++++++++++
a11_wwfy2 = [ a11_wwfy1[0], a11_wwfy1[1]  - a11_wwfy1[0], a11_wwfy1[2] - a11_wwfy1[1], a11_wwfy1[3] - a11_wwfy1[2]] #quarterly calculation 

a11_wwfy3 = [ '{:.2f}M '.format(elem) for elem in a11_wwfy2 ] #format all integers to string to add  and M

a11_wwfy4 = [ '{0: >11}'.format(elem) for elem in a11_wwfy3] #format width

a11_wwfyfy =  [a11_wwfy2[0] + a11_wwfy2[1] + a11_wwfy2[2] +a11_wwfy2[3] ]  #fiscal year cumulative, 

a11_wwfyfy1 = [ '{:.2f}M '.format(elem) for elem in a11_wwfyfy ] #format all integers to string to add  and M

a11_wwfyfy2 = [ '{0: >11}'.format(elem) for elem in a11_wwfyfy1] #format width

a11_wwltd1= [3389 / 100, 3485 / 100, 3762 / 100, 3762 / 100] #Q1-4, global LTD
#+++++++++++++++++++++++++++++
a11_wwltd2 = [ a11_wwltd1[0], a11_wwltd1[1]  - a11_wwltd1[0], a11_wwltd1[2] - a11_wwltd1[1], a11_wwltd1[3] - a11_wwltd1[2]] #quarterly calculation 

a11_wwltd3 = [ '{:.2f}M '.format(elem) for elem in a11_wwltd2 ] #format all integers to string to add  and M

a11_wwltd4 = [ '{0: >12}'.format(elem) for elem in a11_wwltd3] #format width

a11_wwltdfy =  [a11_wwltd2[0] + a11_wwltd2[1] + a11_wwltd2[2] +a11_wwltd2[3] ]  #fiscal year cumulative, 

a11_wwltdfy1 = [ '{:.2f}M '.format(elem) for elem in a11_wwltdfy ] #format all integers to string to add  and M

a11_wwltdfy2 = [ '{0: >12}'.format(elem) for elem in a11_wwltdfy1] #format width

#percentages 
a11_jpfycpc = (a11_jpfy[0] / a11_wwfyfy[0])  * 100 
a11_jpfycpc1 =  '{:.2f}% '.format(a11_jpfycpc) 
a11_jpfycpc2 =  '{0: >10}'.format(a11_jpfycpc1)

a11_osfycpc = (a11_osfy[0] / a11_wwfyfy[0])  * 100 
a11_osfycpc1 =  '{:.2f}% '.format(a11_osfycpc) 
a11_osfycpc2 =  '{0: >13}'.format(a11_osfycpc1)

a11_wwfycpc = (a11_wwfyfy[0] / a11_wwltdfy[0])  * 100 
a11_wwfycpc1 =  '{:.2f}% '.format(a11_wwfycpc) 
a11_wwfycpc2 =  '{0: >11}'.format(a11_wwfycpc1)

a11_wwltdpc = (100 - a11_wwfycpc)  
a11_wwltdpc1 =  '{:.2f}% '.format(a11_wwltdpc) 
a11_wwltdpc2 =  '{0: >12}'.format(a11_wwltdpc1)

#The Legend of Zelda: Skyward Sword HD
a12_jp1= [ 0 / 100, 42 / 100, 44 / 100, 44 / 100] #Q1-4, japan
#+++++++++++++++++++++++++++++
a12_jp2 = [ a12_jp1[0], a12_jp1[1]  - a12_jp1[0], a12_jp1[2] - a12_jp1[1], a12_jp1[3] - a12_jp1[2]] #quarterly calculation 

a12_jp3 = [ '{:.2f}M '.format(elem) for elem in a12_jp2 ] #format all integers to string to add  and M

a12_jp4 = [ '{0: >10}'.format(elem) for elem in a12_jp3] #format width

a12_jpfy =  [a12_jp2[0] + a12_jp2[1] + a12_jp2[2] +a12_jp2[3] ]  #fiscal year cumulative, 

a12_jpfy1 = [ '{:.2f}M '.format(elem) for elem in a12_jpfy ] #format all integers to string to add  and M

a12_jpfy2 = [ '{0: >10}'.format(elem) for elem in a12_jpfy1] #format width

a12_os1= [ 0 / 100, 318 / 100, 340 / 100, 340 / 100] #Q1-4, overseas
#+++++++++++++++++++++++++++++
a12_os2 = [ a12_os1[0], a12_os1[1]  - a12_os1[0], a12_os1[2] - a12_os1[1], a12_os1[3] - a12_os1[2]] #quarterly calculation 

a12_os3 = [ '{:.2f}M '.format(elem) for elem in a12_os2 ] #format all integers to string to add  and M

a12_os4 = [ '{0: >13}'.format(elem) for elem in a12_os3] #format width

a12_osfy =  [a12_os2[0] + a12_os2[1] + a12_os2[2] +a12_os2[3] ]  #fiscal year cumulative, 

a12_osfy1 = [ '{:.2f}M '.format(elem) for elem in a12_osfy ] #format all integers to string to add  and M

a12_osfy2 = [ '{0: >13}'.format(elem) for elem in a12_osfy1] #format width

a12_wwfy1= [ 0 / 100, 360 / 100, 385 / 100, 385 / 100] #Q1-4, global fy
#+++++++++++++++++++++++++++++
a12_wwfy2 = [ a12_wwfy1[0], a12_wwfy1[1]  - a12_wwfy1[0], a12_wwfy1[2] - a12_wwfy1[1], a12_wwfy1[3] - a12_wwfy1[2]] #quarterly calculation 

a12_wwfy3 = [ '{:.2f}M '.format(elem) for elem in a12_wwfy2 ] #format all integers to string to add  and M

a12_wwfy4 = [ '{0: >11}'.format(elem) for elem in a12_wwfy3] #format width

a12_wwfyfy =  [a12_wwfy2[0] + a12_wwfy2[1] + a12_wwfy2[2] +a12_wwfy2[3] ]  #fiscal year cumulative, 

a12_wwfyfy1 = [ '{:.2f}M '.format(elem) for elem in a12_wwfyfy ] #format all integers to string to add  and M

a12_wwfyfy2 = [ '{0: >11}'.format(elem) for elem in a12_wwfyfy1] #format width

a12_wwltd1= [ 0 / 100, 360 / 100, 385 / 100, 385 / 100] #Q1-4, global LTD
#+++++++++++++++++++++++++++++
a12_wwltd2 = [ a12_wwltd1[0], a12_wwltd1[1]  - a12_wwltd1[0], a12_wwltd1[2] - a12_wwltd1[1], a12_wwltd1[3] - a12_wwltd1[2]] #quarterly calculation 

a12_wwltd3 = [ '{:.2f}M '.format(elem) for elem in a12_wwltd2 ] #format all integers to string to add  and M

a12_wwltd4 = [ '{0: >12}'.format(elem) for elem in a12_wwltd3] #format width

a12_wwltdfy =  [a12_wwltd2[0] + a12_wwltd2[1] + a12_wwltd2[2] +a12_wwltd2[3] ]  #fiscal year cumulative, 

a12_wwltdfy1 = [ '{:.2f}M '.format(elem) for elem in a12_wwltdfy ] #format all integers to string to add  and M

a12_wwltdfy2 = [ '{0: >12}'.format(elem) for elem in a12_wwltdfy1] #format width

#percentages 
a12_jpfycpc = (a12_jpfy[0] / a12_wwfyfy[0])  * 100 
a12_jpfycpc1 =  '{:.2f}% '.format(a12_jpfycpc) 
a12_jpfycpc2 =  '{0: >10}'.format(a12_jpfycpc1)

a12_osfycpc = (a12_osfy[0] / a12_wwfyfy[0])  * 100 
a12_osfycpc1 =  '{:.2f}% '.format(a12_osfycpc) 
a12_osfycpc2 =  '{0: >13}'.format(a12_osfycpc1)

a12_wwfycpc = (a12_wwfyfy[0] / a12_wwltdfy[0])  * 100 
a12_wwfycpc1 =  '{:.2f}% '.format(a12_wwfycpc) 
a12_wwfycpc2 =  '{0: >11}'.format(a12_wwfycpc1)

a12_wwltdpc = (100 - a12_wwfycpc)  
a12_wwltdpc1 =  '{:.2f}% '.format(a12_wwltdpc) 
a12_wwltdpc2 =  '{0: >12}'.format(a12_wwltdpc1)

#Super Mario 3D World + Boswer's Fury
a13_jp1= [ 21 / 100, 36 / 100, 54 / 100, 54 / 100] #Q1-4, japan
#+++++++++++++++++++++++++++++
a13_jp2 = [ a13_jp1[0], a13_jp1[1]  - a13_jp1[0], a13_jp1[2] - a13_jp1[1], a13_jp1[3] - a13_jp1[2]] #quarterly calculation 

a13_jp3 = [ '{:.2f}M '.format(elem) for elem in a13_jp2 ] #format all integers to string to add  and M

a13_jp4 = [ '{0: >10}'.format(elem) for elem in a13_jp3] #format width

a13_jpfy =  [a13_jp2[0] + a13_jp2[1] + a13_jp2[2] +a13_jp2[3] ]  #fiscal year cumulative, 

a13_jpfy1 = [ '{:.2f}M '.format(elem) for elem in a13_jpfy ] #format all integers to string to add  and M

a13_jpfy2 = [ '{0: >10}'.format(elem) for elem in a13_jpfy1] #format width

a13_os1= [ 87 / 100, 150 / 100, 272 / 100, 272 / 100] #Q1-4, overseas
#+++++++++++++++++++++++++++++
a13_os2 = [ a13_os1[0], a13_os1[1]  - a13_os1[0], a13_os1[2] - a13_os1[1], a13_os1[3] - a13_os1[2]] #quarterly calculation 

a13_os3 = [ '{:.2f}M '.format(elem) for elem in a13_os2 ] #format all integers to string to add  and M

a13_os4 = [ '{0: >13}'.format(elem) for elem in a13_os3] #format width

a13_osfy =  [a13_os2[0] + a13_os2[1] + a13_os2[2] +a13_os2[3] ]  #fiscal year cumulative, 

a13_osfy1 = [ '{:.2f}M '.format(elem) for elem in a13_osfy ] #format all integers to string to add  and M

a13_osfy2 = [ '{0: >13}'.format(elem) for elem in a13_osfy1] #format width

a13_wwfy1= [ 109 / 100, 186 / 100, 326 / 100, 326 / 100] #Q1-4, global fy
#+++++++++++++++++++++++++++++
a13_wwfy2 = [ a13_wwfy1[0], a13_wwfy1[1]  - a13_wwfy1[0], a13_wwfy1[2] - a13_wwfy1[1], a13_wwfy1[3] - a13_wwfy1[2]] #quarterly calculation 

a13_wwfy3 = [ '{:.2f}M '.format(elem) for elem in a13_wwfy2 ] #format all integers to string to add  and M

a13_wwfy4 = [ '{0: >11}'.format(elem) for elem in a13_wwfy3] #format width

a13_wwfyfy =  [a13_wwfy2[0] + a13_wwfy2[1] + a13_wwfy2[2] +a13_wwfy2[3] ]  #fiscal year cumulative, 

a13_wwfyfy1 = [ '{:.2f}M '.format(elem) for elem in a13_wwfyfy ] #format all integers to string to add  and M

a13_wwfyfy2 = [ '{0: >11}'.format(elem) for elem in a13_wwfyfy1] #format width

a13_wwltd1= [ 668 / 100, 745 / 100, 885 / 100, 885 / 100] #Q1-4, global LTD
#+++++++++++++++++++++++++++++
a13_wwltd2 = [ a13_wwltd1[0], a13_wwltd1[1]  - a13_wwltd1[0], a13_wwltd1[2] - a13_wwltd1[1], a13_wwltd1[3] - a13_wwltd1[2]] #quarterly calculation 

a13_wwltd3 = [ '{:.2f}M '.format(elem) for elem in a13_wwltd2 ] #format all integers to string to add  and M

a13_wwltd4 = [ '{0: >12}'.format(elem) for elem in a13_wwltd3] #format width

a13_wwltdfy =  [a13_wwltd2[0] + a13_wwltd2[1] + a13_wwltd2[2] +a13_wwltd2[3] ]  #fiscal year cumulative, 

a13_wwltdfy1 = [ '{:.2f}M '.format(elem) for elem in a13_wwltdfy ] #format all integers to string to add  and M

a13_wwltdfy2 = [ '{0: >12}'.format(elem) for elem in a13_wwltdfy1] #format width

#percentages 
a13_jpfycpc = (a13_jpfy[0] / a13_wwfyfy[0])  * 100 
a13_jpfycpc1 =  '{:.2f}% '.format(a13_jpfycpc) 
a13_jpfycpc2 =  '{0: >10}'.format(a13_jpfycpc1)

a13_osfycpc = (a13_osfy[0] / a13_wwfyfy[0])  * 100 
a13_osfycpc1 =  '{:.2f}% '.format(a13_osfycpc) 
a13_osfycpc2 =  '{0: >13}'.format(a13_osfycpc1)

a13_wwfycpc = (a13_wwfyfy[0] / a13_wwltdfy[0])  * 100 
a13_wwfycpc1 =  '{:.2f}% '.format(a13_wwfycpc) 
a13_wwfycpc2 =  '{0: >11}'.format(a13_wwfycpc1)

a13_wwltdpc = (100 - a13_wwfycpc)  
a13_wwltdpc1 =  '{:.2f}% '.format(a13_wwltdpc) 
a13_wwltdpc2 =  '{0: >12}'.format(a13_wwltdpc1)

#New Pokémon Snap
a14_jp1= [ 0 / 100, 0 / 100, 0 / 100, 0 / 100] #Q1-4, japan
#+++++++++++++++++++++++++++++
a14_jp2 = [ a14_jp1[0], a14_jp1[1]  - a14_jp1[0], a14_jp1[2] - a14_jp1[1], a14_jp1[3] - a14_jp1[2]] #quarterly calculation 

a14_jp3 = [ '{:.2f}M '.format(elem) for elem in a14_jp2 ] #format all integers to string to add  and M

a14_jp4 = [ '{0: >10}'.format(elem) for elem in a14_jp3] #format width

a14_jpfy =  [a14_jp2[0] + a14_jp2[1] + a14_jp2[2] +a14_jp2[3] ]  #fiscal year cumulative, 

a14_jpfy1 = [ '{:.2f}M '.format(elem) for elem in a14_jpfy ] #format all integers to string to add  and M

a14_jpfy2 = [ '{0: >10}'.format(elem) for elem in a14_jpfy1] #format width

a14_os1= [ 207 / 100, 219 / 100, 236 / 100, 236 / 100] #Q1-4, overseas
#+++++++++++++++++++++++++++++
a14_os2 = [ a14_os1[0], a14_os1[1]  - a14_os1[0], a14_os1[2] - a14_os1[1], a14_os1[3] - a14_os1[2]] #quarterly calculation 

a14_os3 = [ '{:.2f}M '.format(elem) for elem in a14_os2 ] #format all integers to string to add  and M

a14_os4 = [ '{0: >13}'.format(elem) for elem in a14_os3] #format width

a14_osfy =  [a14_os2[0] + a14_os2[1] + a14_os2[2] +a14_os2[3] ]  #fiscal year cumulative, 

a14_osfy1 = [ '{:.2f}M '.format(elem) for elem in a14_osfy ] #format all integers to string to add  and M

a14_osfy2 = [ '{0: >13}'.format(elem) for elem in a14_osfy1] #format width

a14_wwfy1= [ 207 / 100, 219 / 100, 236 / 100, 236 / 100] #Q1-4, global fy
#+++++++++++++++++++++++++++++
a14_wwfy2 = [ a14_wwfy1[0], a14_wwfy1[1]  - a14_wwfy1[0], a14_wwfy1[2] - a14_wwfy1[1], a14_wwfy1[3] - a14_wwfy1[2]] #quarterly calculation 

a14_wwfy3 = [ '{:.2f}M '.format(elem) for elem in a14_wwfy2 ] #format all integers to string to add  and M

a14_wwfy4 = [ '{0: >11}'.format(elem) for elem in a14_wwfy3] #format width

a14_wwfyfy =  [a14_wwfy2[0] + a14_wwfy2[1] + a14_wwfy2[2] +a14_wwfy2[3] ]  #fiscal year cumulative, 

a14_wwfyfy1 = [ '{:.2f}M '.format(elem) for elem in a14_wwfyfy ] #format all integers to string to add  and M

a14_wwfyfy2 = [ '{0: >11}'.format(elem) for elem in a14_wwfyfy1] #format width

a14_wwltd1= [207 / 100, 219 / 100, 236 / 100, 236 / 100] #Q1-4, global LTD
#+++++++++++++++++++++++++++++
a14_wwltd2 = [ a14_wwltd1[0], a14_wwltd1[1]  - a14_wwltd1[0], a14_wwltd1[2] - a14_wwltd1[1], a14_wwltd1[3] - a14_wwltd1[2]] #quarterly calculation 

a14_wwltd3 = [ '{:.2f}M '.format(elem) for elem in a14_wwltd2 ] #format all integers to string to add  and M

a14_wwltd4 = [ '{0: >12}'.format(elem) for elem in a14_wwltd3] #format width

a14_wwltdfy =  [a14_wwltd2[0] + a14_wwltd2[1] + a14_wwltd2[2] +a14_wwltd2[3] ]  #fiscal year cumulative, 

a14_wwltdfy1 = [ '{:.2f}M '.format(elem) for elem in a14_wwltdfy ] #format all integers to string to add  and M

a14_wwltdfy2 = [ '{0: >12}'.format(elem) for elem in a14_wwltdfy1] #format width

#percentages 
a14_jpfycpc = (a14_jpfy[0] / a14_wwfyfy[0])  * 100 
a14_jpfycpc1 =  '{:.2f}% '.format(a14_jpfycpc) 
a14_jpfycpc2 =  '{0: >10}'.format(a14_jpfycpc1)

a14_osfycpc = (a14_osfy[0] / a14_wwfyfy[0])  * 100 
a14_osfycpc1 =  '{:.2f}% '.format(a14_osfycpc) 
a14_osfycpc2 =  '{0: >13}'.format(a14_osfycpc1)

a14_wwfycpc = (a14_wwfyfy[0] / a14_wwltdfy[0])  * 100 
a14_wwfycpc1 =  '{:.2f}% '.format(a14_wwfycpc) 
a14_wwfycpc2 =  '{0: >11}'.format(a14_wwfycpc1)

a14_wwltdpc = (100 - a14_wwfycpc)  
a14_wwltdpc1 =  '{:.2f}% '.format(a14_wwltdpc) 
a14_wwltdpc2 =  '{0: >12}'.format(a14_wwltdpc1)

#Metroid Dread
a15_jp1= [ 0 / 100, 0 / 100, 26 / 100, 26 / 100] #Q1-4, japan
#+++++++++++++++++++++++++++++
a15_jp2 = [ a15_jp1[0], a15_jp1[1]  - a15_jp1[0], a15_jp1[2] - a15_jp1[1], a15_jp1[3] - a15_jp1[2]] #quarterly calculation 

a15_jp3 = [ '{:.2f}M '.format(elem) for elem in a15_jp2 ] #format all integers to string to add  and M

a15_jp4 = [ '{0: >10}'.format(elem) for elem in a15_jp3] #format width

a15_jpfy =  [a15_jp2[0] + a15_jp2[1] + a15_jp2[2] +a15_jp2[3] ]  #fiscal year cumulative, 

a15_jpfy1 = [ '{:.2f}M '.format(elem) for elem in a15_jpfy ] #format all integers to string to add  and M

a15_jpfy2 = [ '{0: >10}'.format(elem) for elem in a15_jpfy1] #format width

a15_os1= [ 0 / 100, 0 / 100, 248 / 100, 248 / 100] #Q1-4, overseas
#+++++++++++++++++++++++++++++
a15_os2 = [ a15_os1[0], a15_os1[1]  - a15_os1[0], a15_os1[2] - a15_os1[1], a15_os1[3] - a15_os1[2]] #quarterly calculation 

a15_os3 = [ '{:.2f}M '.format(elem) for elem in a15_os2 ] #format all integers to string to add  and M

a15_os4 = [ '{0: >13}'.format(elem) for elem in a15_os3] #format width

a15_osfy =  [a15_os2[0] + a15_os2[1] + a15_os2[2] +a15_os2[3] ]  #fiscal year cumulative, 

a15_osfy1 = [ '{:.2f}M '.format(elem) for elem in a15_osfy ] #format all integers to string to add  and M

a15_osfy2 = [ '{0: >13}'.format(elem) for elem in a15_osfy1] #format width

a15_wwfy1= [ 0 / 100, 0 / 100, 274 / 100, 274 / 100] #Q1-4, global fy
#+++++++++++++++++++++++++++++
a15_wwfy2 = [ a15_wwfy1[0], a15_wwfy1[1]  - a15_wwfy1[0], a15_wwfy1[2] - a15_wwfy1[1], a15_wwfy1[3] - a15_wwfy1[2]] #quarterly calculation 

a15_wwfy3 = [ '{:.2f}M '.format(elem) for elem in a15_wwfy2 ] #format all integers to string to add  and M

a15_wwfy4 = [ '{0: >11}'.format(elem) for elem in a15_wwfy3] #format width

a15_wwfyfy =  [a15_wwfy2[0] + a15_wwfy2[1] + a15_wwfy2[2] +a15_wwfy2[3] ]  #fiscal year cumulative, 

a15_wwfyfy1 = [ '{:.2f}M '.format(elem) for elem in a15_wwfyfy ] #format all integers to string to add  and M

a15_wwfyfy2 = [ '{0: >11}'.format(elem) for elem in a15_wwfyfy1] #format width

a15_wwltd1= [0 / 100, 0 / 100, 274 / 100, 274 / 100] #Q1-4, global LTD
#+++++++++++++++++++++++++++++
a15_wwltd2 = [ a15_wwltd1[0], a15_wwltd1[1]  - a15_wwltd1[0], a15_wwltd1[2] - a15_wwltd1[1], a15_wwltd1[3] - a15_wwltd1[2]] #quarterly calculation 

a15_wwltd3 = [ '{:.2f}M '.format(elem) for elem in a15_wwltd2 ] #format all integers to string to add  and M

a15_wwltd4 = [ '{0: >12}'.format(elem) for elem in a15_wwltd3] #format width

a15_wwltdfy =  [a15_wwltd2[0] + a15_wwltd2[1] + a15_wwltd2[2] +a15_wwltd2[3] ]  #fiscal year cumulative, 

a15_wwltdfy1 = [ '{:.2f}M '.format(elem) for elem in a15_wwltdfy ] #format all integers to string to add  and M

a15_wwltdfy2 = [ '{0: >12}'.format(elem) for elem in a15_wwltdfy1] #format width

#percentages 
a15_jpfycpc = (a15_jpfy[0] / a15_wwfyfy[0])  * 100 
a15_jpfycpc1 =  '{:.2f}% '.format(a15_jpfycpc) 
a15_jpfycpc2 =  '{0: >10}'.format(a15_jpfycpc1)

a15_osfycpc = (a15_osfy[0] / a15_wwfyfy[0])  * 100 
a15_osfycpc1 =  '{:.2f}% '.format(a15_osfycpc) 
a15_osfycpc2 =  '{0: >13}'.format(a15_osfycpc1)

a15_wwfycpc = (a15_wwfyfy[0] / a15_wwltdfy[0])  * 100 
a15_wwfycpc1 =  '{:.2f}% '.format(a15_wwfycpc) 
a15_wwfycpc2 =  '{0: >11}'.format(a15_wwfycpc1)

a15_wwltdpc = (100 - a15_wwfycpc)  
a15_wwltdpc1 =  '{:.2f}% '.format(a15_wwltdpc) 
a15_wwltdpc2 =  '{0: >12}'.format(a15_wwltdpc1)

#Mario Party Superstars
a16_jp1= [ 0 / 100, 0 / 100, 113 / 100, 113 / 100] #Q1-4, japan
#+++++++++++++++++++++++++++++
a16_jp2 = [ a16_jp1[0], a16_jp1[1]  - a16_jp1[0], a16_jp1[2] - a16_jp1[1], a16_jp1[3] - a16_jp1[2]] #quarterly calculation 

a16_jp3 = [ '{:.2f}M '.format(elem) for elem in a16_jp2 ] #format all integers to string to add  and M

a16_jp4 = [ '{0: >10}'.format(elem) for elem in a16_jp3] #format width

a16_jpfy =  [a16_jp2[0] + a16_jp2[1] + a16_jp2[2] +a16_jp2[3] ]  #fiscal year cumulative, 

a16_jpfy1 = [ '{:.2f}M '.format(elem) for elem in a16_jpfy ] #format all integers to string to add  and M

a16_jpfy2 = [ '{0: >10}'.format(elem) for elem in a16_jpfy1] #format width

a16_os1= [ 0 / 100, 0 / 100, 430 / 100, 430 / 100] #Q1-4, overseas
#+++++++++++++++++++++++++++++
a16_os2 = [ a16_os1[0], a16_os1[1]  - a16_os1[0], a16_os1[2] - a16_os1[1], a16_os1[3] - a16_os1[2]] #quarterly calculation 

a16_os3 = [ '{:.2f}M '.format(elem) for elem in a16_os2 ] #format all integers to string to add  and M

a16_os4 = [ '{0: >13}'.format(elem) for elem in a16_os3] #format width

a16_osfy =  [a16_os2[0] + a16_os2[1] + a16_os2[2] +a16_os2[3] ]  #fiscal year cumulative, 

a16_osfy1 = [ '{:.2f}M '.format(elem) for elem in a16_osfy ] #format all integers to string to add  and M

a16_osfy2 = [ '{0: >13}'.format(elem) for elem in a16_osfy1] #format width

a16_wwfy1= [ 0 / 100, 0 / 100, 543 / 100, 543 / 100] #Q1-4, global fy
#+++++++++++++++++++++++++++++
a16_wwfy2 = [ a16_wwfy1[0], a16_wwfy1[1]  - a16_wwfy1[0], a16_wwfy1[2] - a16_wwfy1[1], a16_wwfy1[3] - a16_wwfy1[2]] #quarterly calculation 

a16_wwfy3 = [ '{:.2f}M '.format(elem) for elem in a16_wwfy2 ] #format all integers to string to add  and M

a16_wwfy4 = [ '{0: >11}'.format(elem) for elem in a16_wwfy3] #format width

a16_wwfyfy =  [a16_wwfy2[0] + a16_wwfy2[1] + a16_wwfy2[2] +a16_wwfy2[3] ]  #fiscal year cumulative, 

a16_wwfyfy1 = [ '{:.2f}M '.format(elem) for elem in a16_wwfyfy ] #format all integers to string to add  and M

a16_wwfyfy2 = [ '{0: >11}'.format(elem) for elem in a16_wwfyfy1] #format width

a16_wwltd1= [ 0 / 100, 0 / 100, 543 / 100, 543 / 100] #Q1-4, global LTD
#+++++++++++++++++++++++++++++
a16_wwltd2 = [ a16_wwltd1[0], a16_wwltd1[1]  - a16_wwltd1[0], a16_wwltd1[2] - a16_wwltd1[1], a16_wwltd1[3] - a16_wwltd1[2]] #quarterly calculation 

a16_wwltd3 = [ '{:.2f}M '.format(elem) for elem in a16_wwltd2 ] #format all integers to string to add  and M

a16_wwltd4 = [ '{0: >12}'.format(elem) for elem in a16_wwltd3] #format width

a16_wwltdfy =  [a16_wwltd2[0] + a16_wwltd2[1] + a16_wwltd2[2] +a16_wwltd2[3] ]  #fiscal year cumulative, 

a16_wwltdfy1 = [ '{:.2f}M '.format(elem) for elem in a16_wwltdfy ] #format all integers to string to add  and M

a16_wwltdfy2 = [ '{0: >12}'.format(elem) for elem in a16_wwltdfy1] #format width

#percentages 
a16_jpfycpc = (a16_jpfy[0] / a16_wwfyfy[0])  * 100 
a16_jpfycpc1 =  '{:.2f}% '.format(a16_jpfycpc) 
a16_jpfycpc2 =  '{0: >10}'.format(a16_jpfycpc1)

a16_osfycpc = (a16_osfy[0] / a16_wwfyfy[0])  * 100 
a16_osfycpc1 =  '{:.2f}% '.format(a16_osfycpc) 
a16_osfycpc2 =  '{0: >13}'.format(a16_osfycpc1)

a16_wwfycpc = (a16_wwfyfy[0] / a16_wwltdfy[0])  * 100 
a16_wwfycpc1 =  '{:.2f}% '.format(a16_wwfycpc) 
a16_wwfycpc2 =  '{0: >11}'.format(a16_wwfycpc1)

a16_wwltdpc = (100 - a16_wwfycpc)  
a16_wwltdpc1 =  '{:.2f}% '.format(a16_wwltdpc) 
a16_wwltdpc2 =  '{0: >12}'.format(a16_wwltdpc1)

#Pokemon Brilliant Diamond/Shining Pearl
a17_jp1= [ 0 / 100, 0 / 100, 379 / 100, 379 / 100] #Q1-4, japan
#+++++++++++++++++++++++++++++
a17_jp2 = [ a17_jp1[0], a17_jp1[1]  - a17_jp1[0], a17_jp1[2] - a17_jp1[1], a17_jp1[3] - a17_jp1[2]] #quarterly calculation 

a17_jp3 = [ '{:.2f}M '.format(elem) for elem in a17_jp2 ] #format all integers to string to add  and M

a17_jp4 = [ '{0: >10}'.format(elem) for elem in a17_jp3] #format width

a17_jpfy =  [a17_jp2[0] + a17_jp2[1] + a17_jp2[2] +a17_jp2[3] ]  #fiscal year cumulative, 

a17_jpfy1 = [ '{:.2f}M '.format(elem) for elem in a17_jpfy ] #format all integers to string to add  and M

a17_jpfy2 = [ '{0: >10}'.format(elem) for elem in a17_jpfy1] #format width

a17_os1= [ 0 / 100, 0 / 100, 1018 / 100, 1018 / 100] #Q1-4, overseas
#+++++++++++++++++++++++++++++
a17_os2 = [ a17_os1[0], a17_os1[1]  - a17_os1[0], a17_os1[2] - a17_os1[1], a17_os1[3] - a17_os1[2]] #quarterly calculation 

a17_os3 = [ '{:.2f}M '.format(elem) for elem in a17_os2 ] #format all integers to string to add  and M

a17_os4 = [ '{0: >13}'.format(elem) for elem in a17_os3] #format width

a17_osfy =  [a17_os2[0] + a17_os2[1] + a17_os2[2] +a17_os2[3] ]  #fiscal year cumulative, 

a17_osfy1 = [ '{:.2f}M '.format(elem) for elem in a17_osfy ] #format all integers to string to add  and M

a17_osfy2 = [ '{0: >13}'.format(elem) for elem in a17_osfy1] #format width

a17_wwfy1= [ 0 / 100, 0 / 100, 1397 / 100, 1397 / 100] #Q1-4, global fy
#+++++++++++++++++++++++++++++
a17_wwfy2 = [ a17_wwfy1[0], a17_wwfy1[1]  - a17_wwfy1[0], a17_wwfy1[2] - a17_wwfy1[1], a17_wwfy1[3] - a17_wwfy1[2]] #quarterly calculation 

a17_wwfy3 = [ '{:.2f}M '.format(elem) for elem in a17_wwfy2 ] #format all integers to string to add  and M

a17_wwfy4 = [ '{0: >11}'.format(elem) for elem in a17_wwfy3] #format width

a17_wwfyfy =  [a17_wwfy2[0] + a17_wwfy2[1] + a17_wwfy2[2] +a17_wwfy2[3] ]  #fiscal year cumulative, 

a17_wwfyfy1 = [ '{:.2f}M '.format(elem) for elem in a17_wwfyfy ] #format all integers to string to add  and M

a17_wwfyfy2 = [ '{0: >11}'.format(elem) for elem in a17_wwfyfy1] #format width

a17_wwltd1= [0 / 100, 0 / 100, 1397 / 100, 1397 / 100] #Q1-4, global LTD
#+++++++++++++++++++++++++++++
a17_wwltd2 = [ a17_wwltd1[0], a17_wwltd1[1]  - a17_wwltd1[0], a17_wwltd1[2] - a17_wwltd1[1], a17_wwltd1[3] - a17_wwltd1[2]] #quarterly calculation 

a17_wwltd3 = [ '{:.2f}M '.format(elem) for elem in a17_wwltd2 ] #format all integers to string to add  and M

a17_wwltd4 = [ '{0: >12}'.format(elem) for elem in a17_wwltd3] #format width

a17_wwltdfy =  [a17_wwltd2[0] + a17_wwltd2[1] + a17_wwltd2[2] +a17_wwltd2[3] ]  #fiscal year cumulative, 

a17_wwltdfy1 = [ '{:.2f}M '.format(elem) for elem in a17_wwltdfy ] #format all integers to string to add  and M

a17_wwltdfy2 = [ '{0: >12}'.format(elem) for elem in a17_wwltdfy1] #format width

#percentages 
a17_jpfycpc = (a17_jpfy[0] / a17_wwfyfy[0])  * 100 
a17_jpfycpc1 =  '{:.2f}% '.format(a17_jpfycpc) 
a17_jpfycpc2 =  '{0: >10}'.format(a17_jpfycpc1)

a17_osfycpc = (a17_osfy[0] / a17_wwfyfy[0])  * 100 
a17_osfycpc1 =  '{:.2f}% '.format(a17_osfycpc) 
a17_osfycpc2 =  '{0: >13}'.format(a17_osfycpc1)

a17_wwfycpc = (a17_wwfyfy[0] / a17_wwltdfy[0])  * 100 
a17_wwfycpc1 =  '{:.2f}% '.format(a17_wwfycpc) 
a17_wwfycpc2 =  '{0: >11}'.format(a17_wwfycpc1)

a17_wwltdpc = (100 - a17_wwfycpc)  
a17_wwltdpc1 =  '{:.2f}% '.format(a17_wwltdpc) 
a17_wwltdpc2 =  '{0: >12}'.format(a17_wwltdpc1)

#Big Brain Academy Switch
a18_jp1= [ 0 / 100, 0 / 100, 38 / 100, 38 / 100] #Q1-4, japan
#+++++++++++++++++++++++++++++
a18_jp2 = [ a18_jp1[0], a18_jp1[1]  - a18_jp1[0], a18_jp1[2] - a18_jp1[1], a18_jp1[3] - a18_jp1[2]] #quarterly calculation 

a18_jp3 = [ '{:.2f}M '.format(elem) for elem in a18_jp2 ] #format all integers to string to add  and M

a18_jp4 = [ '{0: >10}'.format(elem) for elem in a18_jp3] #format width

a18_jpfy =  [a18_jp2[0] + a18_jp2[1] + a18_jp2[2] +a18_jp2[3] ]  #fiscal year cumulative, 

a18_jpfy1 = [ '{:.2f}M '.format(elem) for elem in a18_jpfy ] #format all integers to string to add  and M

a18_jpfy2 = [ '{0: >10}'.format(elem) for elem in a18_jpfy1] #format width

a18_os1= [ 0 / 100, 0 / 100, 90 / 100, 90 / 100] #Q1-4, overseas
#+++++++++++++++++++++++++++++
a18_os2 = [ a18_os1[0], a18_os1[1]  - a18_os1[0], a18_os1[2] - a18_os1[1], a18_os1[3] - a18_os1[2]] #quarterly calculation 

a18_os3 = [ '{:.2f}M '.format(elem) for elem in a18_os2 ] #format all integers to string to add  and M

a18_os4 = [ '{0: >13}'.format(elem) for elem in a18_os3] #format width

a18_osfy =  [a18_os2[0] + a18_os2[1] + a18_os2[2] +a18_os2[3] ]  #fiscal year cumulative, 

a18_osfy1 = [ '{:.2f}M '.format(elem) for elem in a18_osfy ] #format all integers to string to add  and M

a18_osfy2 = [ '{0: >13}'.format(elem) for elem in a18_osfy1] #format width

a18_wwfy1= [ 0 / 100, 0 / 100, 128 / 100, 128 / 100] #Q1-4, global fy
#+++++++++++++++++++++++++++++
a18_wwfy2 = [ a18_wwfy1[0], a18_wwfy1[1]  - a18_wwfy1[0], a18_wwfy1[2] - a18_wwfy1[1], a18_wwfy1[3] - a18_wwfy1[2]] #quarterly calculation 

a18_wwfy3 = [ '{:.2f}M '.format(elem) for elem in a18_wwfy2 ] #format all integers to string to add  and M

a18_wwfy4 = [ '{0: >11}'.format(elem) for elem in a18_wwfy3] #format width

a18_wwfyfy =  [a18_wwfy2[0] + a18_wwfy2[1] + a18_wwfy2[2] +a18_wwfy2[3] ]  #fiscal year cumulative, 

a18_wwfyfy1 = [ '{:.2f}M '.format(elem) for elem in a18_wwfyfy ] #format all integers to string to add  and M

a18_wwfyfy2 = [ '{0: >11}'.format(elem) for elem in a18_wwfyfy1] #format width

a18_wwltd1= [0 / 100, 0 / 100, 128 / 100, 128 / 100] #Q1-4, global LTD
#+++++++++++++++++++++++++++++
a18_wwltd2 = [ a18_wwltd1[0], a18_wwltd1[1]  - a18_wwltd1[0], a18_wwltd1[2] - a18_wwltd1[1], a18_wwltd1[3] - a18_wwltd1[2]] #quarterly calculation 

a18_wwltd3 = [ '{:.2f}M '.format(elem) for elem in a18_wwltd2 ] #format all integers to string to add  and M

a18_wwltd4 = [ '{0: >12}'.format(elem) for elem in a18_wwltd3] #format width

a18_wwltdfy =  [a18_wwltd2[0] + a18_wwltd2[1] + a18_wwltd2[2] +a18_wwltd2[3] ]  #fiscal year cumulative, 

a18_wwltdfy1 = [ '{:.2f}M '.format(elem) for elem in a18_wwltdfy ] #format all integers to string to add  and M

a18_wwltdfy2 = [ '{0: >12}'.format(elem) for elem in a18_wwltdfy1] #format width

#percentages 
a18_jpfycpc = (a18_jpfy[0] / a18_wwfyfy[0])  * 100 
a18_jpfycpc1 =  '{:.2f}% '.format(a18_jpfycpc) 
a18_jpfycpc2 =  '{0: >10}'.format(a18_jpfycpc1)

a18_osfycpc = (a18_osfy[0] / a18_wwfyfy[0])  * 100 
a18_osfycpc1 =  '{:.2f}% '.format(a18_osfycpc) 
a18_osfycpc2 =  '{0: >13}'.format(a18_osfycpc1)

a18_wwfycpc = (a18_wwfyfy[0] / a18_wwltdfy[0])  * 100 
a18_wwfycpc1 =  '{:.2f}% '.format(a18_wwfycpc) 
a18_wwfycpc2 =  '{0: >11}'.format(a18_wwfycpc1)

a18_wwltdpc = (100 - a18_wwfycpc)  
a18_wwltdpc1 =  '{:.2f}% '.format(a18_wwltdpc) 
a18_wwltdpc2 =  '{0: >12}'.format(a18_wwltdpc1)

#Luigi's Mansion 3
a19_jp1= [ 0 / 100, 0 / 100, 9 / 100, 9 / 100] #Q1-4, japan
#+++++++++++++++++++++++++++++
a19_jp2 = [ a19_jp1[0], a19_jp1[1]  - a19_jp1[0], a19_jp1[2] - a19_jp1[1], a19_jp1[3] - a19_jp1[2]] #quarterly calculation 

a19_jp3 = [ '{:.2f}M '.format(elem) for elem in a19_jp2 ] #format all integers to string to add  and M

a19_jp4 = [ '{0: >10}'.format(elem) for elem in a19_jp3] #format width

a19_jpfy =  [a19_jp2[0] + a19_jp2[1] + a19_jp2[2] +a19_jp2[3] ]  #fiscal year cumulative, 

a19_jpfy1 = [ '{:.2f}M '.format(elem) for elem in a19_jpfy ] #format all integers to string to add  and M

a19_jpfy2 = [ '{0: >10}'.format(elem) for elem in a19_jpfy1] #format width

a19_os1= [ 0 / 100, 0 / 100, 136 / 100, 136 / 100] #Q1-4, overseas
#+++++++++++++++++++++++++++++
a19_os2 = [ a19_os1[0], a19_os1[1]  - a19_os1[0], a19_os1[2] - a19_os1[1], a19_os1[3] - a19_os1[2]] #quarterly calculation 

a19_os3 = [ '{:.2f}M '.format(elem) for elem in a19_os2 ] #format all integers to string to add  and M

a19_os4 = [ '{0: >13}'.format(elem) for elem in a19_os3] #format width

a19_osfy =  [a19_os2[0] + a19_os2[1] + a19_os2[2] +a19_os2[3] ]  #fiscal year cumulative, 

a19_osfy1 = [ '{:.2f}M '.format(elem) for elem in a19_osfy ] #format all integers to string to add  and M

a19_osfy2 = [ '{0: >13}'.format(elem) for elem in a19_osfy1] #format width

a19_wwfy1= [ 0 / 100, 0 / 100, 145 / 100, 145 / 100] #Q1-4, global fy
#+++++++++++++++++++++++++++++
a19_wwfy2 = [ a19_wwfy1[0], a19_wwfy1[1]  - a19_wwfy1[0], a19_wwfy1[2] - a19_wwfy1[1], a19_wwfy1[3] - a19_wwfy1[2]] #quarterly calculation 

a19_wwfy3 = [ '{:.2f}M '.format(elem) for elem in a19_wwfy2 ] #format all integers to string to add  and M

a19_wwfy4 = [ '{0: >11}'.format(elem) for elem in a19_wwfy3] #format width

a19_wwfyfy =  [a19_wwfy2[0] + a19_wwfy2[1] + a19_wwfy2[2] +a19_wwfy2[3] ]  #fiscal year cumulative, 

a19_wwfyfy1 = [ '{:.2f}M '.format(elem) for elem in a19_wwfyfy ] #format all integers to string to add  and M

a19_wwfyfy2 = [ '{0: >11}'.format(elem) for elem in a19_wwfyfy1] #format width

a19_wwltd1= [0 / 100, 0 / 100, 1104 / 100, 1104 / 100] #Q1-4, global LTD
#+++++++++++++++++++++++++++++
a19_wwltd2 = [ a19_wwltd1[0], a19_wwltd1[1]  - a19_wwltd1[0], a19_wwltd1[2] - a19_wwltd1[1], a19_wwltd1[3] - a19_wwltd1[2]] #quarterly calculation 

a19_wwltd3 = [ '{:.2f}M '.format(elem) for elem in a19_wwltd2 ] #format all integers to string to add  and M

a19_wwltd4 = [ '{0: >12}'.format(elem) for elem in a19_wwltd3] #format width

a19_wwltdfy =  [a19_wwltd2[0] + a19_wwltd2[1] + a19_wwltd2[2] +a19_wwltd2[3] ]  #fiscal year cumulative, 

a19_wwltdfy1 = [ '{:.2f}M '.format(elem) for elem in a19_wwltdfy ] #format all integers to string to add  and M

a19_wwltdfy2 = [ '{0: >12}'.format(elem) for elem in a19_wwltdfy1] #format width

#percentages 
a19_jpfycpc = (a19_jpfy[0] / a19_wwfyfy[0])  * 100 
a19_jpfycpc1 =  '{:.2f}% '.format(a19_jpfycpc) 
a19_jpfycpc2 =  '{0: >10}'.format(a19_jpfycpc1)

a19_osfycpc = (a19_osfy[0] / a19_wwfyfy[0])  * 100 
a19_osfycpc1 =  '{:.2f}% '.format(a19_osfycpc) 
a19_osfycpc2 =  '{0: >13}'.format(a19_osfycpc1)

a19_wwfycpc = (a19_wwfyfy[0] / a19_wwltdfy[0])  * 100 
a19_wwfycpc1 =  '{:.2f}% '.format(a19_wwfycpc) 
a19_wwfycpc2 =  '{0: >11}'.format(a19_wwfycpc1)

a19_wwltdpc = (100 - a19_wwfycpc)  
a19_wwltdpc1 =  '{:.2f}% '.format(a19_wwltdpc) 
a19_wwltdpc2 =  '{0: >12}'.format(a19_wwltdpc1)

#WarioWare: Get It Together!
a20_jp1= [ 0 / 100, 0 / 100, 30 / 100, 30 / 100] #Q1-4, japan
#+++++++++++++++++++++++++++++
a20_jp2 = [ a20_jp1[0], a20_jp1[1]  - a20_jp1[0], a20_jp1[2] - a20_jp1[1], a20_jp1[3] - a20_jp1[2]] #quarterly calculation 

a20_jp3 = [ '{:.2f}M '.format(elem) for elem in a20_jp2 ] #format all integers to string to add  and M

a20_jp4 = [ '{0: >10}'.format(elem) for elem in a20_jp3] #format width

a20_jpfy =  [a20_jp2[0] + a20_jp2[1] + a20_jp2[2] +a20_jp2[3] ]  #fiscal year cumulative, 

a20_jpfy1 = [ '{:.2f}M '.format(elem) for elem in a20_jpfy ] #format all integers to string to add  and M

a20_jpfy2 = [ '{0: >10}'.format(elem) for elem in a20_jpfy1] #format width

a20_os1= [ 0 / 100, 0 / 100, 94 / 100, 94 / 100] #Q1-4, overseas
#+++++++++++++++++++++++++++++
a20_os2 = [ a20_os1[0], a20_os1[1]  - a20_os1[0], a20_os1[2] - a20_os1[1], a20_os1[3] - a20_os1[2]] #quarterly calculation 

a20_os3 = [ '{:.2f}M '.format(elem) for elem in a20_os2 ] #format all integers to string to add  and M

a20_os4 = [ '{0: >13}'.format(elem) for elem in a20_os3] #format width

a20_osfy =  [a20_os2[0] + a20_os2[1] + a20_os2[2] +a20_os2[3] ]  #fiscal year cumulative, 

a20_osfy1 = [ '{:.2f}M '.format(elem) for elem in a20_osfy ] #format all integers to string to add  and M

a20_osfy2 = [ '{0: >13}'.format(elem) for elem in a20_osfy1] #format width

a20_wwfy1= [ 0 / 100, 0 / 100, 124 / 100, 124 / 100] #Q1-4, global fy
#+++++++++++++++++++++++++++++
a20_wwfy2 = [ a20_wwfy1[0], a20_wwfy1[1]  - a20_wwfy1[0], a20_wwfy1[2] - a20_wwfy1[1], a20_wwfy1[3] - a20_wwfy1[2]] #quarterly calculation 

a20_wwfy3 = [ '{:.2f}M '.format(elem) for elem in a20_wwfy2 ] #format all integers to string to add  and M

a20_wwfy4 = [ '{0: >11}'.format(elem) for elem in a20_wwfy3] #format width

a20_wwfyfy =  [a20_wwfy2[0] + a20_wwfy2[1] + a20_wwfy2[2] +a20_wwfy2[3] ]  #fiscal year cumulative, 

a20_wwfyfy1 = [ '{:.2f}M '.format(elem) for elem in a20_wwfyfy ] #format all integers to string to add  and M

a20_wwfyfy2 = [ '{0: >11}'.format(elem) for elem in a20_wwfyfy1] #format width

a20_wwltd1= [0 / 100, 0 / 100, 124 / 100, 124 / 100] #Q1-4, global LTD
#+++++++++++++++++++++++++++++
a20_wwltd2 = [ a20_wwltd1[0], a20_wwltd1[1]  - a20_wwltd1[0], a20_wwltd1[2] - a20_wwltd1[1], a20_wwltd1[3] - a20_wwltd1[2]] #quarterly calculation 

a20_wwltd3 = [ '{:.2f}M '.format(elem) for elem in a20_wwltd2 ] #format all integers to string to add  and M

a20_wwltd4 = [ '{0: >12}'.format(elem) for elem in a20_wwltd3] #format width

a20_wwltdfy =  [a20_wwltd2[0] + a20_wwltd2[1] + a20_wwltd2[2] +a20_wwltd2[3] ]  #fiscal year cumulative, 

a20_wwltdfy1 = [ '{:.2f}M '.format(elem) for elem in a20_wwltdfy ] #format all integers to string to add  and M

a20_wwltdfy2 = [ '{0: >12}'.format(elem) for elem in a20_wwltdfy1] #format width

#percentages 
a20_jpfycpc = (a20_jpfy[0] / a20_wwfyfy[0])  * 100 
a20_jpfycpc1 =  '{:.2f}% '.format(a20_jpfycpc) 
a20_jpfycpc2 =  '{0: >10}'.format(a20_jpfycpc1)

a20_osfycpc = (a20_osfy[0] / a20_wwfyfy[0])  * 100 
a20_osfycpc1 =  '{:.2f}% '.format(a20_osfycpc) 
a20_osfycpc2 =  '{0: >13}'.format(a20_osfycpc1)

a20_wwfycpc = (a20_wwfyfy[0] / a20_wwltdfy[0])  * 100 
a20_wwfycpc1 =  '{:.2f}% '.format(a20_wwfycpc) 
a20_wwfycpc2 =  '{0: >11}'.format(a20_wwfycpc1)

a20_wwltdpc = (100 - a20_wwfycpc)  
a20_wwltdpc1 =  '{:.2f}% '.format(a20_wwltdpc) 
a20_wwltdpc2 =  '{0: >12}'.format(a20_wwltdpc1)

#Pokémon: Let's Go, Pikachu!/Eevee!
a21_jp1= [ 0 / 100, 0 / 100, 3 / 100, 3 / 100] #Q1-4, japan
#+++++++++++++++++++++++++++++
a21_jp2 = [ a21_jp1[0], a21_jp1[1]  - a21_jp1[0], a21_jp1[2] - a21_jp1[1], a21_jp1[3] - a21_jp1[2]] #quarterly calculation 

a21_jp3 = [ '{:.2f}M '.format(elem) for elem in a21_jp2 ] #format all integers to string to add  and M

a21_jp4 = [ '{0: >10}'.format(elem) for elem in a21_jp3] #format width

a21_jpfy =  [a21_jp2[0] + a21_jp2[1] + a21_jp2[2] +a21_jp2[3] ]  #fiscal year cumulative, 

a21_jpfy1 = [ '{:.2f}M '.format(elem) for elem in a21_jpfy ] #format all integers to string to add  and M

a21_jpfy2 = [ '{0: >10}'.format(elem) for elem in a21_jpfy1] #format width

a21_os1= [ 0 / 100, 0 / 100, 102 / 100, 102 / 100] #Q1-4, overseas
#+++++++++++++++++++++++++++++
a21_os2 = [ a21_os1[0], a21_os1[1]  - a21_os1[0], a21_os1[2] - a21_os1[1], a21_os1[3] - a21_os1[2]] #quarterly calculation 

a21_os3 = [ '{:.2f}M '.format(elem) for elem in a21_os2 ] #format all integers to string to add  and M

a21_os4 = [ '{0: >13}'.format(elem) for elem in a21_os3] #format width

a21_osfy =  [a21_os2[0] + a21_os2[1] + a21_os2[2] +a21_os2[3] ]  #fiscal year cumulative, 

a21_osfy1 = [ '{:.2f}M '.format(elem) for elem in a21_osfy ] #format all integers to string to add  and M

a21_osfy2 = [ '{0: >13}'.format(elem) for elem in a21_osfy1] #format width

a21_wwfy1= [ 0 / 100, 0 / 100, 105 / 100, 105 / 100] #Q1-4, global fy
#+++++++++++++++++++++++++++++
a21_wwfy2 = [ a21_wwfy1[0], a21_wwfy1[1]  - a21_wwfy1[0], a21_wwfy1[2] - a21_wwfy1[1], a21_wwfy1[3] - a21_wwfy1[2]] #quarterly calculation 

a21_wwfy3 = [ '{:.2f}M '.format(elem) for elem in a21_wwfy2 ] #format all integers to string to add  and M

a21_wwfy4 = [ '{0: >11}'.format(elem) for elem in a21_wwfy3] #format width

a21_wwfyfy =  [a21_wwfy2[0] + a21_wwfy2[1] + a21_wwfy2[2] +a21_wwfy2[3] ]  #fiscal year cumulative, 

a21_wwfyfy1 = [ '{:.2f}M '.format(elem) for elem in a21_wwfyfy ] #format all integers to string to add  and M

a21_wwfyfy2 = [ '{0: >11}'.format(elem) for elem in a21_wwfyfy1] #format width

a21_wwltd1= [0 / 100, 0 / 100, 1433 / 100, 1433 / 100] #Q1-4, global LTD
#+++++++++++++++++++++++++++++
a21_wwltd2 = [ a21_wwltd1[0], a21_wwltd1[1]  - a21_wwltd1[0], a21_wwltd1[2] - a21_wwltd1[1], a21_wwltd1[3] - a21_wwltd1[2]] #quarterly calculation 

a21_wwltd3 = [ '{:.2f}M '.format(elem) for elem in a21_wwltd2 ] #format all integers to string to add  and M

a21_wwltd4 = [ '{0: >12}'.format(elem) for elem in a21_wwltd3] #format width

a21_wwltdfy =  [a21_wwltd2[0] + a21_wwltd2[1] + a21_wwltd2[2] +a21_wwltd2[3] ]  #fiscal year cumulative, 

a21_wwltdfy1 = [ '{:.2f}M '.format(elem) for elem in a21_wwltdfy ] #format all integers to string to add  and M

a21_wwltdfy2 = [ '{0: >12}'.format(elem) for elem in a21_wwltdfy1] #format width

#percentages 
a21_jpfycpc = (a21_jpfy[0] / a21_wwfyfy[0])  * 100 
a21_jpfycpc1 =  '{:.2f}% '.format(a21_jpfycpc) 
a21_jpfycpc2 =  '{0: >10}'.format(a21_jpfycpc1)

a21_osfycpc = (a21_osfy[0] / a21_wwfyfy[0])  * 100 
a21_osfycpc1 =  '{:.2f}% '.format(a21_osfycpc) 
a21_osfycpc2 =  '{0: >13}'.format(a21_osfycpc1)

a21_wwfycpc = (a21_wwfyfy[0] / a21_wwltdfy[0])  * 100 
a21_wwfycpc1 =  '{:.2f}% '.format(a21_wwfycpc) 
a21_wwfycpc2 =  '{0: >11}'.format(a21_wwfycpc1)

a21_wwltdpc = (100 - a21_wwfycpc)  
a21_wwltdpc1 =  '{:.2f}% '.format(a21_wwltdpc) 
a21_wwltdpc2 =  '{0: >12}'.format(a21_wwltdpc1)

#Game Builder Garage
a22_jp1= [ 0 / 100, 0 / 100, 44 / 100, 44 / 100] #Q1-4, japan
#+++++++++++++++++++++++++++++
a22_jp2 = [ a22_jp1[0], a22_jp1[1]  - a22_jp1[0], a22_jp1[2] - a22_jp1[1], a22_jp1[3] - a22_jp1[2]] #quarterly calculation 

a22_jp3 = [ '{:.2f}M '.format(elem) for elem in a22_jp2 ] #format all integers to string to add  and M

a22_jp4 = [ '{0: >10}'.format(elem) for elem in a22_jp3] #format width

a22_jpfy =  [a22_jp2[0] + a22_jp2[1] + a22_jp2[2] +a22_jp2[3] ]  #fiscal year cumulative, 

a22_jpfy1 = [ '{:.2f}M '.format(elem) for elem in a22_jpfy ] #format all integers to string to add  and M

a22_jpfy2 = [ '{0: >10}'.format(elem) for elem in a22_jpfy1] #format width

a22_os1= [ 0 / 100, 0 / 100, 58 / 100, 58 / 100] #Q1-4, overseas
#+++++++++++++++++++++++++++++
a22_os2 = [ a22_os1[0], a22_os1[1]  - a22_os1[0], a22_os1[2] - a22_os1[1], a22_os1[3] - a22_os1[2]] #quarterly calculation 

a22_os3 = [ '{:.2f}M '.format(elem) for elem in a22_os2 ] #format all integers to string to add  and M

a22_os4 = [ '{0: >13}'.format(elem) for elem in a22_os3] #format width

a22_osfy =  [a22_os2[0] + a22_os2[1] + a22_os2[2] +a22_os2[3] ]  #fiscal year cumulative, 

a22_osfy1 = [ '{:.2f}M '.format(elem) for elem in a22_osfy ] #format all integers to string to add  and M

a22_osfy2 = [ '{0: >13}'.format(elem) for elem in a22_osfy1] #format width

a22_wwfy1= [ 0 / 100, 0 / 100, 101 / 100, 101 / 100] #Q1-4, global fy
#+++++++++++++++++++++++++++++
a22_wwfy2 = [ a22_wwfy1[0], a22_wwfy1[1]  - a22_wwfy1[0], a22_wwfy1[2] - a22_wwfy1[1], a22_wwfy1[3] - a22_wwfy1[2]] #quarterly calculation 

a22_wwfy3 = [ '{:.2f}M '.format(elem) for elem in a22_wwfy2 ] #format all integers to string to add  and M

a22_wwfy4 = [ '{0: >11}'.format(elem) for elem in a22_wwfy3] #format width

a22_wwfyfy =  [a22_wwfy2[0] + a22_wwfy2[1] + a22_wwfy2[2] +a22_wwfy2[3] ]  #fiscal year cumulative, 

a22_wwfyfy1 = [ '{:.2f}M '.format(elem) for elem in a22_wwfyfy ] #format all integers to string to add  and M

a22_wwfyfy2 = [ '{0: >11}'.format(elem) for elem in a22_wwfyfy1] #format width

a22_wwltd1= [0 / 100, 0 / 100, 101 / 100, 101 / 100] #Q1-4, global LTD
#+++++++++++++++++++++++++++++
a22_wwltd2 = [ a22_wwltd1[0], a22_wwltd1[1]  - a22_wwltd1[0], a22_wwltd1[2] - a22_wwltd1[1], a22_wwltd1[3] - a22_wwltd1[2]] #quarterly calculation 

a22_wwltd3 = [ '{:.2f}M '.format(elem) for elem in a22_wwltd2 ] #format all integers to string to add  and M

a22_wwltd4 = [ '{0: >12}'.format(elem) for elem in a22_wwltd3] #format width

a22_wwltdfy =  [a22_wwltd2[0] + a22_wwltd2[1] + a22_wwltd2[2] +a22_wwltd2[3] ]  #fiscal year cumulative, 

a22_wwltdfy1 = [ '{:.2f}M '.format(elem) for elem in a22_wwltdfy ] #format all integers to string to add  and M

a22_wwltdfy2 = [ '{0: >12}'.format(elem) for elem in a22_wwltdfy1] #format width

#percentages 
a22_jpfycpc = (a22_jpfy[0] / a22_wwfyfy[0])  * 100 
a22_jpfycpc1 =  '{:.2f}% '.format(a22_jpfycpc) 
a22_jpfycpc2 =  '{0: >10}'.format(a22_jpfycpc1)

a22_osfycpc = (a22_osfy[0] / a22_wwfyfy[0])  * 100 
a22_osfycpc1 =  '{:.2f}% '.format(a22_osfycpc) 
a22_osfycpc2 =  '{0: >13}'.format(a22_osfycpc1)

a22_wwfycpc = (a22_wwfyfy[0] / a22_wwltdfy[0])  * 100 
a22_wwfycpc1 =  '{:.2f}% '.format(a22_wwfycpc) 
a22_wwfycpc2 =  '{0: >11}'.format(a22_wwfycpc1)

a22_wwltdpc = (100 - a22_wwfycpc)  
a22_wwltdpc1 =  '{:.2f}% '.format(a22_wwltdpc) 
a22_wwltdpc2 =  '{0: >12}'.format(a22_wwltdpc1)




#printing+++++++++++++++++++++++++++
print("+-------------------------------------------------------------------------------------------+")
print("|" + hd1[0] + "|")
print("+-------------------------------------------------------------------------------------------+")

#A1
#print first quarter
if x >= 1 and a1_wwfyfy != 0:
    print("+-------------------------------------------------------------------------------------------+")
    print("|" + game1[0] + "|" + hd1[1] + "|" + hd1[2] +"|" + hd1[3] + "|" + hd1[4] + "|" )
    print("+-------------------------------------------------------------------------------------------+")
    
if x >= 1 and a1_wwfy2[0] != 0:
    print("|"  +  rw1[0] +  "|" + a1_jp4[0] + "|" + a1_os4[0] + "|" + a1_wwfy4[0] +  "|" +  a1_wwltd4[0] + "|"   )

#print second quarter
if x >=2 and a1_wwfy2[1] != 0:
    print("|"  +  rw1[1] +  "|" + a1_jp4[1] + "|" + a1_os4[1] + "|" + a1_wwfy4[1] +  "|" +  a1_wwltd4[1] + "|"   )

#print third quarter
if x >=3 and a1_wwfy2[2] != 0:
    print("|"  +  rw1[2] +  "|" + a1_jp4[2] + "|" + a1_os4[2] + "|" + a1_wwfy4[2] +  "|" +  a1_wwltd4[2] + "|"   )

#print fourth quarter
if x >=4 and a1_wwfy2[3] != 0:
    print("|"  +  rw1[3] +  "|" + a1_jp4[2] + "|" + a1_os4[2] + "|" + a1_wwfy4[2] +  "|" +  a1_wwltd4[2] + "|"   )

#print fy cumulative
if x >= 1 and a1_wwfyfy != 0:
    print("+===========================================================================================+") #border
    print("|"  +  rw1[4] +  "|" + a1_jpfy2[0] + "|" + a1_osfy2[0] + "|" + a1_wwfyfy2[0] +  "|" +  a1_wwltdfy2[0] + "|"    )

#print ltd
if x >= 1 and a1_wwfyfy != 0:
    print("|"  +  rw1[5] +  "|" + a1_jpfycpc2 + "|" + a1_osfycpc2 + "|" + a1_wwfycpc2 +  "|" +  a1_wwltdpc2 + "|"    )
    print("+-------------------------------------------------------------------------------------------+")
    print(lb1)
    
#A2
#print first quarter
if x >= 1 and a2_wwfyfy != 0:
    print("+-------------------------------------------------------------------------------------------+")
    print("|" + game1[1] + "|" + hd1[1] + "|" + hd1[2] +"|" + hd1[3] + "|" + hd1[4] + "|" )
    print("+-------------------------------------------------------------------------------------------+")
    
if x >= 1 and a2_wwfy2[0] != 0:
    print("|"  +  rw1[0] +  "|" + a2_jp4[0] + "|" + a2_os4[0] + "|" + a2_wwfy4[0] +  "|" +  a2_wwltd4[0] + "|"   )

#print second quarter
if x >=2 and a2_wwfy2[1] != 0:
    print("|"  +  rw1[1] +  "|" + a2_jp4[1] + "|" + a2_os4[1] + "|" + a2_wwfy4[1] +  "|" +  a2_wwltd4[1] + "|"   )

#print third quarter
if x >=3 and a2_wwfy2[2] != 0:
    print("|"  +  rw1[2] +  "|" + a2_jp4[2] + "|" + a2_os4[2] + "|" + a2_wwfy4[2] +  "|" +  a2_wwltd4[2] + "|"   )

#print fourth quarter
if x >=4 and a2_wwfy2[3] != 0:
    print("|"  +  rw1[3] +  "|" + a2_jp4[2] + "|" + a2_os4[2] + "|" + a2_wwfy4[2] +  "|" +  a2_wwltd4[2] + "|"   )

#print fy cumulative
if x >= 1 and a2_wwfyfy != 0:
    print("+===========================================================================================+") #border
    print("|"  +  rw1[4] +  "|" + a2_jpfy2[0] + "|" + a2_osfy2[0] + "|" + a2_wwfyfy2[0] +  "|" +  a2_wwltdfy2[0] + "|"    )

#print ltd
if x >= 1 and a2_wwfyfy != 0:
    print("|"  +  rw1[5] +  "|" + a2_jpfycpc2 + "|" + a2_osfycpc2 + "|" + a2_wwfycpc2 +  "|" +  a2_wwltdpc2 + "|"    )
    print("+-------------------------------------------------------------------------------------------+")
    print(lb1) 
       
#A3

#print first quarter
if x >= 1 and a3_wwfyfy != 0:
    print("+-------------------------------------------------------------------------------------------+")
    print("|" + game1[2] + "|" + hd1[1] + "|" + hd1[2] +"|" + hd1[3] + "|" + hd1[4] + "|" )
    print("+-------------------------------------------------------------------------------------------+")
    
if x >= 1 and a3_wwfy2[0] != 0:
    print("|"  +  rw1[0] +  "|" + a3_jp4[0] + "|" + a3_os4[0] + "|" + a3_wwfy4[0] +  "|" +  a3_wwltd4[0] + "|"   )

#print second quarter
if x >=2 and a3_wwfy2[1] != 0:
    print("|"  +  rw1[1] +  "|" + a3_jp4[1] + "|" + a3_os4[1] + "|" + a3_wwfy4[1] +  "|" +  a3_wwltd4[1] + "|"   )

#print third quarter
if x >=3 and a3_wwfy2[2] != 0:
    print("|"  +  rw1[2] +  "|" + a3_jp4[2] + "|" + a3_os4[2] + "|" + a3_wwfy4[2] +  "|" +  a3_wwltd4[2] + "|"   )

#print fourth quarter
if x >=4 and a3_wwfy2[3] != 0:
    print("|"  +  rw1[3] +  "|" + a3_jp4[2] + "|" + a3_os4[2] + "|" + a3_wwfy4[2] +  "|" +  a3_wwltd4[2] + "|"   )

#print fy cumulative
if x >= 1 and a3_wwfyfy != 0:
    print("+===========================================================================================+") #border
    print("|"  +  rw1[4] +  "|" + a3_jpfy2[0] + "|" + a3_osfy2[0] + "|" + a3_wwfyfy2[0] +  "|" +  a3_wwltdfy2[0] + "|"    )

#print ltd
if x >= 1 and a3_wwfyfy != 0:
    print("|"  +  rw1[5] +  "|" + a3_jpfycpc2 + "|" + a3_osfycpc2 + "|" + a3_wwfycpc2 +  "|" +  a3_wwltdpc2 + "|"    )
    print("+-------------------------------------------------------------------------------------------+")
    print(lb1)
    
#A4

#print first quarter
if x >= 1 and a4_wwfyfy != 0:
    print("+-------------------------------------------------------------------------------------------+")
    print("|" + game1[3] + "|" + hd1[1] + "|" + hd1[2] +"|" + hd1[3] + "|" + hd1[4] + "|" )
    print("+-------------------------------------------------------------------------------------------+")
    
if x >= 1 and a4_wwfy2[0] != 0:
    print("|"  +  rw1[0] +  "|" + a4_jp4[0] + "|" + a4_os4[0] + "|" + a4_wwfy4[0] +  "|" +  a4_wwltd4[0] + "|"   )

#print second quarter
if x >=2 and a4_wwfy2[1] != 0:
    print("|"  +  rw1[1] +  "|" + a4_jp4[1] + "|" + a4_os4[1] + "|" + a4_wwfy4[1] +  "|" +  a4_wwltd4[1] + "|"   )

#print third quarter
if x >=3 and a4_wwfy2[2] != 0:
    print("|"  +  rw1[2] +  "|" + a4_jp4[2] + "|" + a4_os4[2] + "|" + a4_wwfy4[2] +  "|" +  a4_wwltd4[2] + "|"   )

#print fourth quarter
if x >=4 and a4_wwfy2[3] != 0:
    print("|"  +  rw1[3] +  "|" + a4_jp4[2] + "|" + a4_os4[2] + "|" + a4_wwfy4[2] +  "|" +  a4_wwltd4[2] + "|"   )

#print fy cumulative
if x >= 1 and a4_wwfyfy != 0:
    print("+===========================================================================================+") #border
    print("|"  +  rw1[4] +  "|" + a4_jpfy2[0] + "|" + a4_osfy2[0] + "|" + a4_wwfyfy2[0] +  "|" +  a4_wwltdfy2[0] + "|"    )

#print ltd
if x >= 1 and a4_wwfyfy != 0:
    print("|"  +  rw1[5] +  "|" + a4_jpfycpc2 + "|" + a4_osfycpc2 + "|" + a4_wwfycpc2 +  "|" +  a4_wwltdpc2 + "|"    )
    print("+-------------------------------------------------------------------------------------------+")
    print(lb1)
    
    #A5

#print first quarter
if x >= 1 and a5_wwfyfy != 0:
    print("+-------------------------------------------------------------------------------------------+")
    print("|" + game1[4] + "|" + hd1[1] + "|" + hd1[2] +"|" + hd1[3] + "|" + hd1[4] + "|" )
    print("+-------------------------------------------------------------------------------------------+")
    
if x >= 1 and a5_wwfy2[0] != 0:
    print("|"  +  rw1[0] +  "|" + a5_jp4[0] + "|" + a5_os4[0] + "|" + a5_wwfy4[0] +  "|" +  a5_wwltd4[0] + "|"   )

#print second quarter
if x >=2 and a5_wwfy2[1] != 0:
    print("|"  +  rw1[1] +  "|" + a5_jp4[1] + "|" + a5_os4[1] + "|" + a5_wwfy4[1] +  "|" +  a5_wwltd4[1] + "|"   )

#print third quarter
if x >=3 and a5_wwfy2[2] != 0:
    print("|"  +  rw1[2] +  "|" + a5_jp4[2] + "|" + a5_os4[2] + "|" + a5_wwfy4[2] +  "|" +  a5_wwltd4[2] + "|"   )

#print fourth quarter
if x >=4 and a5_wwfy2[3] != 0:
    print("|"  +  rw1[3] +  "|" + a5_jp4[2] + "|" + a5_os4[2] + "|" + a5_wwfy4[2] +  "|" +  a5_wwltd4[2] + "|"   )

#print fy cumulative
if x >= 1 and a5_wwfyfy != 0:
    print("+===========================================================================================+") #border
    print("|"  +  rw1[4] +  "|" + a5_jpfy2[0] + "|" + a5_osfy2[0] + "|" + a5_wwfyfy2[0] +  "|" +  a5_wwltdfy2[0] + "|"    )

#print ltd
if x >= 1 and a5_wwfyfy != 0:
    print("|"  +  rw1[5] +  "|" + a5_jpfycpc2 + "|" + a5_osfycpc2 + "|" + a5_wwfycpc2 +  "|" +  a5_wwltdpc2 + "|"    )
    print("+-------------------------------------------------------------------------------------------+")
    print(lb1)
    
    #A6

#print first quarter
if x >= 1 and a6_wwfyfy != 0:
    print("+-------------------------------------------------------------------------------------------+")
    print("|" + game1[5] + "|" + hd1[1] + "|" + hd1[2] +"|" + hd1[3] + "|" + hd1[4] + "|" )
    print("+-------------------------------------------------------------------------------------------+")
    
if x >= 1 and a6_wwfy2[0] != 0:
    print("|"  +  rw1[0] +  "|" + a6_jp4[0] + "|" + a6_os4[0] + "|" + a6_wwfy4[0] +  "|" +  a6_wwltd4[0] + "|"   )

#print second quarter
if x >=2 and a6_wwfy2[1] != 0:
    print("|"  +  rw1[1] +  "|" + a6_jp4[1] + "|" + a6_os4[1] + "|" + a6_wwfy4[1] +  "|" +  a6_wwltd4[1] + "|"   )

#print third quarter
if x >=3 and a6_wwfy2[2] != 0:
    print("|"  +  rw1[2] +  "|" + a6_jp4[2] + "|" + a6_os4[2] + "|" + a6_wwfy4[2] +  "|" +  a6_wwltd4[2] + "|"   )

#print fourth quarter
if x >=4 and a6_wwfy2[3] != 0:
    print("|"  +  rw1[3] +  "|" + a6_jp4[2] + "|" + a6_os4[2] + "|" + a6_wwfy4[2] +  "|" +  a6_wwltd4[2] + "|"   )

#print fy cumulative
if x >= 1 and a6_wwfyfy != 0:
    print("+===========================================================================================+") #border
    print("|"  +  rw1[4] +  "|" + a6_jpfy2[0] + "|" + a6_osfy2[0] + "|" + a6_wwfyfy2[0] +  "|" +  a6_wwltdfy2[0] + "|"    )

#print ltd
if x >= 1 and a6_wwfyfy != 0:
    print("|"  +  rw1[5] +  "|" + a6_jpfycpc2 + "|" + a6_osfycpc2 + "|" + a6_wwfycpc2 +  "|" +  a6_wwltdpc2 + "|"    )
    print("+-------------------------------------------------------------------------------------------+")
    print(lb1)
    
    #A7

#print first quarter
if x >= 1 and a7_wwfyfy != 0:
    print("+-------------------------------------------------------------------------------------------+")
    print("|" + game1[6] + "|" + hd1[1] + "|" + hd1[2] +"|" + hd1[3] + "|" + hd1[4] + "|" )
    print("+-------------------------------------------------------------------------------------------+")
    
if x >= 1 and a7_wwfy2[0] != 0:
    print("|"  +  rw1[0] +  "|" + a7_jp4[0] + "|" + a7_os4[0] + "|" + a7_wwfy4[0] +  "|" +  a7_wwltd4[0] + "|"   )

#print second quarter
if x >=2 and a7_wwfy2[1] != 0:
    print("|"  +  rw1[1] +  "|" + a7_jp4[1] + "|" + a7_os4[1] + "|" + a7_wwfy4[1] +  "|" +  a7_wwltd4[1] + "|"   )

#print third quarter
if x >=3 and a7_wwfy2[2] != 0:
    print("|"  +  rw1[2] +  "|" + a7_jp4[2] + "|" + a7_os4[2] + "|" + a7_wwfy4[2] +  "|" +  a7_wwltd4[2] + "|"   )

#print fourth quarter
if x >=4 and a7_wwfy2[3] != 0:
    print("|"  +  rw1[3] +  "|" + a7_jp4[2] + "|" + a7_os4[2] + "|" + a7_wwfy4[2] +  "|" +  a7_wwltd4[2] + "|"   )

#print fy cumulative
if x >= 1 and a7_wwfyfy != 0:
    print("+===========================================================================================+") #border
    print("|"  +  rw1[4] +  "|" + a7_jpfy2[0] + "|" + a7_osfy2[0] + "|" + a7_wwfyfy2[0] +  "|" +  a7_wwltdfy2[0] + "|"    )

#print ltd
if x >= 1 and a7_wwfyfy != 0:
    print("|"  +  rw1[5] +  "|" + a7_jpfycpc2 + "|" + a7_osfycpc2 + "|" + a7_wwfycpc2 +  "|" +  a7_wwltdpc2 + "|"    )
    print("+-------------------------------------------------------------------------------------------+")
    print(lb1)
    
    #A8

#print first quarter
if x >= 1 and a8_wwfyfy != 0:
    print("+-------------------------------------------------------------------------------------------+")
    print("|" + game1[7] + "|" + hd1[1] + "|" + hd1[2] +"|" + hd1[3] + "|" + hd1[4] + "|" )
    print("+-------------------------------------------------------------------------------------------+")
    
if x >= 1 and a8_wwfy2[0] != 0:
    print("|"  +  rw1[0] +  "|" + a8_jp4[0] + "|" + a8_os4[0] + "|" + a8_wwfy4[0] +  "|" +  a8_wwltd4[0] + "|"   )

#print second quarter
if x >=2 and a8_wwfy2[1] != 0:
    print("|"  +  rw1[1] +  "|" + a8_jp4[1] + "|" + a8_os4[1] + "|" + a8_wwfy4[1] +  "|" +  a8_wwltd4[1] + "|"   )

#print third quarter
if x >=3 and a8_wwfy2[2] != 0:
    print("|"  +  rw1[2] +  "|" + a8_jp4[2] + "|" + a8_os4[2] + "|" + a8_wwfy4[2] +  "|" +  a8_wwltd4[2] + "|"   )

#print fourth quarter
if x >=4 and a8_wwfy2[3] != 0:
    print("|"  +  rw1[3] +  "|" + a8_jp4[2] + "|" + a8_os4[2] + "|" + a8_wwfy4[2] +  "|" +  a8_wwltd4[2] + "|"   )

#print fy cumulative
if x >= 1 and a8_wwfyfy != 0:
    print("+===========================================================================================+") #border
    print("|"  +  rw1[4] +  "|" + a8_jpfy2[0] + "|" + a8_osfy2[0] + "|" + a8_wwfyfy2[0] +  "|" +  a8_wwltdfy2[0] + "|"    )

#print ltd
if x >= 1 and a8_wwfyfy != 0:
    print("|"  +  rw1[5] +  "|" + a8_jpfycpc2 + "|" + a8_osfycpc2 + "|" + a8_wwfycpc2 +  "|" +  a8_wwltdpc2 + "|"    )
    print("+-------------------------------------------------------------------------------------------+")
    print(lb1)
    
    #A9

#print first quarter
if x >= 1 and a9_wwfyfy != 0:
    print("+-------------------------------------------------------------------------------------------+")
    print("|" + game1[8] + "|" + hd1[1] + "|" + hd1[2] +"|" + hd1[3] + "|" + hd1[4] + "|" )
    print("+-------------------------------------------------------------------------------------------+")
    
if x >= 1 and a9_wwfy2[0] != 0:
    print("|"  +  rw1[0] +  "|" + a9_jp4[0] + "|" + a9_os4[0] + "|" + a9_wwfy4[0] +  "|" +  a9_wwltd4[0] + "|"   )

#print second quarter
if x >=2 and a9_wwfy2[1] != 0:
    print("|"  +  rw1[1] +  "|" + a9_jp4[1] + "|" + a9_os4[1] + "|" + a9_wwfy4[1] +  "|" +  a9_wwltd4[1] + "|"   )

#print third quarter
if x >=3 and a9_wwfy2[2] != 0:
    print("|"  +  rw1[2] +  "|" + a9_jp4[2] + "|" + a9_os4[2] + "|" + a9_wwfy4[2] +  "|" +  a9_wwltd4[2] + "|"   )

#print fourth quarter
if x >=4 and a9_wwfy2[3] != 0:
    print("|"  +  rw1[3] +  "|" + a9_jp4[2] + "|" + a9_os4[2] + "|" + a9_wwfy4[2] +  "|" +  a9_wwltd4[2] + "|"   )

#print fy cumulative
if x >= 1 and a9_wwfyfy != 0:
    print("+===========================================================================================+") #border
    print("|"  +  rw1[4] +  "|" + a9_jpfy2[0] + "|" + a9_osfy2[0] + "|" + a9_wwfyfy2[0] +  "|" +  a9_wwltdfy2[0] + "|"    )

#print ltd
if x >= 1 and a9_wwfyfy != 0:
    print("|"  +  rw1[5] +  "|" + a9_jpfycpc2 + "|" + a9_osfycpc2 + "|" + a9_wwfycpc2 +  "|" +  a9_wwltdpc2 + "|"    )
    print("+-------------------------------------------------------------------------------------------+")
    print(lb1)
    
    #A10

#print first quarter
if x >= 1 and a10_wwfyfy != 0:
    print("+-------------------------------------------------------------------------------------------+")
    print("|" + game1[9] + "|" + hd1[1] + "|" + hd1[2] +"|" + hd1[3] + "|" + hd1[4] + "|" )
    print("+-------------------------------------------------------------------------------------------+")
    
if x >= 1 and a10_wwfy2[0] != 0:
    print("|"  +  rw1[0] +  "|" + a10_jp4[0] + "|" + a10_os4[0] + "|" + a10_wwfy4[0] +  "|" +  a10_wwltd4[0] + "|"   )

#print second quarter
if x >=2 and a10_wwfy2[1] != 0:
    print("|"  +  rw1[1] +  "|" + a10_jp4[1] + "|" + a10_os4[1] + "|" + a10_wwfy4[1] +  "|" +  a10_wwltd4[1] + "|"   )

#print third quarter
if x >=3 and a10_wwfy2[2] != 0:
    print("|"  +  rw1[2] +  "|" + a10_jp4[2] + "|" + a10_os4[2] + "|" + a10_wwfy4[2] +  "|" +  a10_wwltd4[2] + "|"   )

#print fourth quarter
if x >=4 and a10_wwfy2[3] != 0:
    print("|"  +  rw1[3] +  "|" + a10_jp4[2] + "|" + a10_os4[2] + "|" + a10_wwfy4[2] +  "|" +  a10_wwltd4[2] + "|"   )

#print fy cumulative
if x >= 1 and a10_wwfyfy != 0:
    print("+===========================================================================================+") #border
    print("|"  +  rw1[4] +  "|" + a10_jpfy2[0] + "|" + a10_osfy2[0] + "|" + a10_wwfyfy2[0] +  "|" +  a10_wwltdfy2[0] + "|"    )

#print ltd
if x >= 1 and a10_wwfyfy != 0:
    print("|"  +  rw1[5] +  "|" + a10_jpfycpc2 + "|" + a10_osfycpc2 + "|" + a10_wwfycpc2 +  "|" +  a10_wwltdpc2 + "|"    )
    print("+-------------------------------------------------------------------------------------------+")
    print(lb1)
    
    #A11

#print first quarter
if x >= 1 and a11_wwfyfy != 0:
    print("+-------------------------------------------------------------------------------------------+")
    print("|" + game1[10] + "|" + hd1[1] + "|" + hd1[2] +"|" + hd1[3] + "|" + hd1[4] + "|" )
    print("+-------------------------------------------------------------------------------------------+")
    
if x >= 1 and a11_wwfy2[0] != 0:
    print("|"  +  rw1[0] +  "|" + a11_jp4[0] + "|" + a11_os4[0] + "|" + a11_wwfy4[0] +  "|" +  a11_wwltd4[0] + "|"   )

#print second quarter
if x >=2 and a11_wwfy2[1] != 0:
    print("|"  +  rw1[1] +  "|" + a11_jp4[1] + "|" + a11_os4[1] + "|" + a11_wwfy4[1] +  "|" +  a11_wwltd4[1] + "|"   )

#print third quarter
if x >=3 and a11_wwfy2[2] != 0:
    print("|"  +  rw1[2] +  "|" + a11_jp4[2] + "|" + a11_os4[2] + "|" + a11_wwfy4[2] +  "|" +  a11_wwltd4[2] + "|"   )

#print fourth quarter
if x >=4 and a11_wwfy2[3] != 0:
    print("|"  +  rw1[3] +  "|" + a11_jp4[2] + "|" + a11_os4[2] + "|" + a11_wwfy4[2] +  "|" +  a11_wwltd4[2] + "|"   )

#print fy cumulative
if x >= 1 and a11_wwfyfy != 0:
    print("+===========================================================================================+") #border
    print("|"  +  rw1[4] +  "|" + a11_jpfy2[0] + "|" + a11_osfy2[0] + "|" + a11_wwfyfy2[0] +  "|" +  a11_wwltdfy2[0] + "|"    )

#print ltd
if x >= 1 and a11_wwfyfy != 0:
    print("|"  +  rw1[5] +  "|" + a11_jpfycpc2 + "|" + a11_osfycpc2 + "|" + a11_wwfycpc2 +  "|" +  a11_wwltdpc2 + "|"    )
    print("+-------------------------------------------------------------------------------------------+")
    print(lb1)
    
    #A12

#print first quarter
if x >= 1 and a12_wwfyfy != 0:
    print("+-------------------------------------------------------------------------------------------+")
    print("|" + game1[11] + "|" + hd1[1] + "|" + hd1[2] +"|" + hd1[3] + "|" + hd1[4] + "|" )
    print("+-------------------------------------------------------------------------------------------+")
    
if x >= 1 and a12_wwfy2[0] != 0:
    print("|"  +  rw1[0] +  "|" + a12_jp4[0] + "|" + a12_os4[0] + "|" + a12_wwfy4[0] +  "|" +  a12_wwltd4[0] + "|"   )

#print second quarter
if x >=2 and a12_wwfy2[1] != 0:
    print("|"  +  rw1[1] +  "|" + a12_jp4[1] + "|" + a12_os4[1] + "|" + a12_wwfy4[1] +  "|" +  a12_wwltd4[1] + "|"   )

#print third quarter
if x >=3 and a12_wwfy2[2] != 0:
    print("|"  +  rw1[2] +  "|" + a12_jp4[2] + "|" + a12_os4[2] + "|" + a12_wwfy4[2] +  "|" +  a12_wwltd4[2] + "|"   )

#print fourth quarter
if x >=4 and a12_wwfy2[3] != 0:
    print("|"  +  rw1[3] +  "|" + a12_jp4[2] + "|" + a12_os4[2] + "|" + a12_wwfy4[2] +  "|" +  a12_wwltd4[2] + "|"   )

#print fy cumulative
if x >= 1 and a12_wwfyfy != 0:
    print("+===========================================================================================+") #border
    print("|"  +  rw1[4] +  "|" + a12_jpfy2[0] + "|" + a12_osfy2[0] + "|" + a12_wwfyfy2[0] +  "|" +  a12_wwltdfy2[0] + "|"    )

#print ltd
if x >= 1 and a12_wwfyfy != 0:
    print("|"  +  rw1[5] +  "|" + a12_jpfycpc2 + "|" + a12_osfycpc2 + "|" + a12_wwfycpc2 +  "|" +  a12_wwltdpc2 + "|"    )
    print("+-------------------------------------------------------------------------------------------+")
    print(lb1)
    
    #A13

#print first quarter
if x >= 1 and a13_wwfyfy != 0:
    print("+-------------------------------------------------------------------------------------------+")
    print("|" + game1[12] + "|" + hd1[1] + "|" + hd1[2] +"|" + hd1[3] + "|" + hd1[4] + "|" )
    print("+-------------------------------------------------------------------------------------------+")
    
if x >= 1 and a13_wwfy2[0] != 0:
    print("|"  +  rw1[0] +  "|" + a13_jp4[0] + "|" + a13_os4[0] + "|" + a13_wwfy4[0] +  "|" +  a13_wwltd4[0] + "|"   )

#print second quarter
if x >=2 and a13_wwfy2[1] != 0:
    print("|"  +  rw1[1] +  "|" + a13_jp4[1] + "|" + a13_os4[1] + "|" + a13_wwfy4[1] +  "|" +  a13_wwltd4[1] + "|"   )

#print third quarter
if x >=3 and a13_wwfy2[2] != 0:
    print("|"  +  rw1[2] +  "|" + a13_jp4[2] + "|" + a13_os4[2] + "|" + a13_wwfy4[2] +  "|" +  a13_wwltd4[2] + "|"   )

#print fourth quarter
if x >=4 and a13_wwfy2[3] != 0:
    print("|"  +  rw1[3] +  "|" + a13_jp4[2] + "|" + a13_os4[2] + "|" + a13_wwfy4[2] +  "|" +  a13_wwltd4[2] + "|"   )

#print fy cumulative
if x >= 1 and a13_wwfyfy != 0:
    print("+===========================================================================================+") #border
    print("|"  +  rw1[4] +  "|" + a13_jpfy2[0] + "|" + a13_osfy2[0] + "|" + a13_wwfyfy2[0] +  "|" +  a13_wwltdfy2[0] + "|"    )

#print ltd
if x >= 1 and a13_wwfyfy != 0:
    print("|"  +  rw1[5] +  "|" + a13_jpfycpc2 + "|" + a13_osfycpc2 + "|" + a13_wwfycpc2 +  "|" +  a13_wwltdpc2 + "|"    )
    print("+-------------------------------------------------------------------------------------------+")
    print(lb1)
    
    #A14

#print first quarter
if x >= 1 and a14_wwfyfy != 0:
    print("+-------------------------------------------------------------------------------------------+")
    print("|" + game1[13] + "|" + hd1[1] + "|" + hd1[2] +"|" + hd1[3] + "|" + hd1[4] + "|" )
    print("+-------------------------------------------------------------------------------------------+")
    
if x >= 1 and a14_wwfy2[0] != 0:
    print("|"  +  rw1[0] +  "|" + a14_jp4[0] + "|" + a14_os4[0] + "|" + a14_wwfy4[0] +  "|" +  a14_wwltd4[0] + "|"   )

#print second quarter
if x >=2 and a14_wwfy2[1] != 0:
    print("|"  +  rw1[1] +  "|" + a14_jp4[1] + "|" + a14_os4[1] + "|" + a14_wwfy4[1] +  "|" +  a14_wwltd4[1] + "|"   )

#print third quarter
if x >=3 and a14_wwfy2[2] != 0:
    print("|"  +  rw1[2] +  "|" + a14_jp4[2] + "|" + a14_os4[2] + "|" + a14_wwfy4[2] +  "|" +  a14_wwltd4[2] + "|"   )

#print fourth quarter
if x >=4 and a14_wwfy2[3] != 0:
    print("|"  +  rw1[3] +  "|" + a14_jp4[2] + "|" + a14_os4[2] + "|" + a14_wwfy4[2] +  "|" +  a14_wwltd4[2] + "|"   )

#print fy cumulative
if x >= 1 and a14_wwfyfy != 0:
    print("+===========================================================================================+") #border
    print("|"  +  rw1[4] +  "|" + a14_jpfy2[0] + "|" + a14_osfy2[0] + "|" + a14_wwfyfy2[0] +  "|" +  a14_wwltdfy2[0] + "|"    )

#print ltd
if x >= 1 and a14_wwfyfy != 0:
    print("|"  +  rw1[5] +  "|" + a14_jpfycpc2 + "|" + a14_osfycpc2 + "|" + a14_wwfycpc2 +  "|" +  a14_wwltdpc2 + "|"    )
    print("+-------------------------------------------------------------------------------------------+")
    print("*This title is released and sold by The Pokémon Company in Japan, and by Nintendo outside of Japan.")
    print(lb1)
    
    #A15

#print first quarter
if x >= 1 and a15_wwfyfy != 0:
    print("+-------------------------------------------------------------------------------------------+")
    print("|" + game1[14] + "|" + hd1[1] + "|" + hd1[2] +"|" + hd1[3] + "|" + hd1[4] + "|" )
    print("+-------------------------------------------------------------------------------------------+")
    
if x >= 1 and a15_wwfy2[0] != 0:
    print("|"  +  rw1[0] +  "|" + a15_jp4[0] + "|" + a15_os4[0] + "|" + a15_wwfy4[0] +  "|" +  a15_wwltd4[0] + "|"   )

#print second quarter
if x >=2 and a15_wwfy2[1] != 0:
    print("|"  +  rw1[1] +  "|" + a15_jp4[1] + "|" + a15_os4[1] + "|" + a15_wwfy4[1] +  "|" +  a15_wwltd4[1] + "|"   )

#print third quarter
if x >=3 and a15_wwfy2[2] != 0:
    print("|"  +  rw1[2] +  "|" + a15_jp4[2] + "|" + a15_os4[2] + "|" + a15_wwfy4[2] +  "|" +  a15_wwltd4[2] + "|"   )

#print fourth quarter
if x >=4 and a15_wwfy2[3] != 0:
    print("|"  +  rw1[3] +  "|" + a15_jp4[2] + "|" + a15_os4[2] + "|" + a15_wwfy4[2] +  "|" +  a15_wwltd4[2] + "|"   )

#print fy cumulative
if x >= 1 and a15_wwfyfy != 0:
    print("+===========================================================================================+") #border
    print("|"  +  rw1[4] +  "|" + a15_jpfy2[0] + "|" + a15_osfy2[0] + "|" + a15_wwfyfy2[0] +  "|" +  a15_wwltdfy2[0] + "|"    )

#print ltd
if x >= 1 and a15_wwfyfy != 0:
    print("|"  +  rw1[5] +  "|" + a15_jpfycpc2 + "|" + a15_osfycpc2 + "|" + a15_wwfycpc2 +  "|" +  a15_wwltdpc2 + "|"    )
    print("+-------------------------------------------------------------------------------------------+")
    print(lb1)
    
    #A16

#print first quarter
if x >= 1 and a16_wwfyfy != 0:
    print("+-------------------------------------------------------------------------------------------+")
    print("|" + game1[15] + "|" + hd1[1] + "|" + hd1[2] +"|" + hd1[3] + "|" + hd1[4] + "|" )
    print("+-------------------------------------------------------------------------------------------+")
    
if x >= 1 and a16_wwfy2[0] != 0:
    print("|"  +  rw1[0] +  "|" + a16_jp4[0] + "|" + a16_os4[0] + "|" + a16_wwfy4[0] +  "|" +  a16_wwltd4[0] + "|"   )

#print second quarter
if x >=2 and a16_wwfy2[1] != 0:
    print("|"  +  rw1[1] +  "|" + a16_jp4[1] + "|" + a16_os4[1] + "|" + a16_wwfy4[1] +  "|" +  a16_wwltd4[1] + "|"   )

#print third quarter
if x >=3 and a16_wwfy2[2] != 0:
    print("|"  +  rw1[2] +  "|" + a16_jp4[2] + "|" + a16_os4[2] + "|" + a16_wwfy4[2] +  "|" +  a16_wwltd4[2] + "|"   )

#print fourth quarter
if x >=4 and a16_wwfy2[3] != 0:
    print("|"  +  rw1[3] +  "|" + a16_jp4[2] + "|" + a16_os4[2] + "|" + a16_wwfy4[2] +  "|" +  a16_wwltd4[2] + "|"   )

#print fy cumulative
if x >= 1 and a16_wwfyfy != 0:
    print("+===========================================================================================+") #border
    print("|"  +  rw1[4] +  "|" + a16_jpfy2[0] + "|" + a16_osfy2[0] + "|" + a16_wwfyfy2[0] +  "|" +  a16_wwltdfy2[0] + "|"    )

#print ltd
if x >= 1 and a16_wwfyfy != 0:
    print("|"  +  rw1[5] +  "|" + a16_jpfycpc2 + "|" + a16_osfycpc2 + "|" + a16_wwfycpc2 +  "|" +  a16_wwltdpc2 + "|"    )
    print("+-------------------------------------------------------------------------------------------+")
    print(lb1)
    
    #A17

#print first quarter
if x >= 1 and a17_wwfyfy != 0:
    print("+-------------------------------------------------------------------------------------------+")
    print("|" + game1[16] + "|" + hd1[1] + "|" + hd1[2] +"|" + hd1[3] + "|" + hd1[4] + "|" )
    print("+-------------------------------------------------------------------------------------------+")
    
if x >= 1 and a17_wwfy2[0] != 0:
    print("|"  +  rw1[0] +  "|" + a17_jp4[0] + "|" + a17_os4[0] + "|" + a17_wwfy4[0] +  "|" +  a17_wwltd4[0] + "|"   )

#print second quarter
if x >=2 and a17_wwfy2[1] != 0:
    print("|"  +  rw1[1] +  "|" + a17_jp4[1] + "|" + a17_os4[1] + "|" + a17_wwfy4[1] +  "|" +  a17_wwltd4[1] + "|"   )

#print third quarter
if x >=3 and a17_wwfy2[2] != 0:
    print("|"  +  rw1[2] +  "|" + a17_jp4[2] + "|" + a17_os4[2] + "|" + a17_wwfy4[2] +  "|" +  a17_wwltd4[2] + "|"   )

#print fourth quarter
if x >=4 and a17_wwfy2[3] != 0:
    print("|"  +  rw1[3] +  "|" + a17_jp4[2] + "|" + a17_os4[2] + "|" + a17_wwfy4[2] +  "|" +  a17_wwltd4[2] + "|"   )

#print fy cumulative
if x >= 1 and a17_wwfyfy != 0:
    print("+===========================================================================================+") #border
    print("|"  +  rw1[4] +  "|" + a17_jpfy2[0] + "|" + a17_osfy2[0] + "|" + a17_wwfyfy2[0] +  "|" +  a17_wwltdfy2[0] + "|"    )

#print ltd
if x >= 1 and a17_wwfyfy != 0:
    print("|"  +  rw1[5] +  "|" + a17_jpfycpc2 + "|" + a17_osfycpc2 + "|" + a17_wwfycpc2 +  "|" +  a17_wwltdpc2 + "|"    )
    print("+-------------------------------------------------------------------------------------------+")
    print(lb1)
    
    #A18

#print first quarter
if x >= 1 and a18_wwfyfy != 0:
    print("+-------------------------------------------------------------------------------------------+")
    print("|" + game1[17] + "|" + hd1[1] + "|" + hd1[2] +"|" + hd1[3] + "|" + hd1[4] + "|" )
    print("+-------------------------------------------------------------------------------------------+")
    
if x >= 1 and a18_wwfy2[0] != 0:
    print("|"  +  rw1[0] +  "|" + a18_jp4[0] + "|" + a18_os4[0] + "|" + a18_wwfy4[0] +  "|" +  a18_wwltd4[0] + "|"   )

#print second quarter
if x >=2 and a18_wwfy2[1] != 0:
    print("|"  +  rw1[1] +  "|" + a18_jp4[1] + "|" + a18_os4[1] + "|" + a18_wwfy4[1] +  "|" +  a18_wwltd4[1] + "|"   )

#print third quarter
if x >=3 and a18_wwfy2[2] != 0:
    print("|"  +  rw1[2] +  "|" + a18_jp4[2] + "|" + a18_os4[2] + "|" + a18_wwfy4[2] +  "|" +  a18_wwltd4[2] + "|"   )

#print fourth quarter
if x >=4 and a18_wwfy2[3] != 0:
    print("|"  +  rw1[3] +  "|" + a18_jp4[2] + "|" + a18_os4[2] + "|" + a18_wwfy4[2] +  "|" +  a18_wwltd4[2] + "|"   )

#print fy cumulative
if x >= 1 and a18_wwfyfy != 0:
    print("+===========================================================================================+") #border
    print("|"  +  rw1[4] +  "|" + a18_jpfy2[0] + "|" + a18_osfy2[0] + "|" + a18_wwfyfy2[0] +  "|" +  a18_wwltdfy2[0] + "|"    )

#print ltd
if x >= 1 and a18_wwfyfy != 0:
    print("|"  +  rw1[5] +  "|" + a18_jpfycpc2 + "|" + a18_osfycpc2 + "|" + a18_wwfycpc2 +  "|" +  a18_wwltdpc2 + "|"    )
    print("+-------------------------------------------------------------------------------------------+")
    print(lb1)
    
    #A19

#print first quarter
if x >= 1 and a19_wwfyfy != 0:
    print("+-------------------------------------------------------------------------------------------+")
    print("|" + game1[18] + "|" + hd1[1] + "|" + hd1[2] +"|" + hd1[3] + "|" + hd1[4] + "|" )
    print("+-------------------------------------------------------------------------------------------+")
    
if x >= 1 and a19_wwfy2[0] != 0:
    print("|"  +  rw1[0] +  "|" + a19_jp4[0] + "|" + a19_os4[0] + "|" + a19_wwfy4[0] +  "|" +  a19_wwltd4[0] + "|"   )

#print second quarter
if x >=2 and a19_wwfy2[1] != 0:
    print("|"  +  rw1[1] +  "|" + a19_jp4[1] + "|" + a19_os4[1] + "|" + a19_wwfy4[1] +  "|" +  a19_wwltd4[1] + "|"   )

#print third quarter
if x >=3 and a19_wwfy2[2] != 0:
    print("|"  +  rw1[2] +  "|" + a19_jp4[2] + "|" + a19_os4[2] + "|" + a19_wwfy4[2] +  "|" +  a19_wwltd4[2] + "|"   )

#print fourth quarter
if x >=4 and a19_wwfy2[3] != 0:
    print("|"  +  rw1[3] +  "|" + a19_jp4[2] + "|" + a19_os4[2] + "|" + a19_wwfy4[2] +  "|" +  a19_wwltd4[2] + "|"   )

#print fy cumulative
if x >= 1 and a19_wwfyfy != 0:
    print("+===========================================================================================+") #border
    print("|"  +  rw1[4] +  "|" + a19_jpfy2[0] + "|" + a19_osfy2[0] + "|" + a19_wwfyfy2[0] +  "|" +  a19_wwltdfy2[0] + "|"    )

#print ltd
if x >= 1 and a19_wwfyfy != 0:
    print("|"  +  rw1[5] +  "|" + a19_jpfycpc2 + "|" + a19_osfycpc2 + "|" + a19_wwfycpc2 +  "|" +  a19_wwltdpc2 + "|"    )
    print("+-------------------------------------------------------------------------------------------+")
    print(lb1)
    
    #A20

#print first quarter
if x >= 1 and a20_wwfyfy != 0:
    print("+-------------------------------------------------------------------------------------------+")
    print("|" + game1[19] + "|" + hd1[1] + "|" + hd1[2] +"|" + hd1[3] + "|" + hd1[4] + "|" )
    print("+-------------------------------------------------------------------------------------------+")
    
if x >= 1 and a20_wwfy2[0] != 0:
    print("|"  +  rw1[0] +  "|" + a20_jp4[0] + "|" + a20_os4[0] + "|" + a20_wwfy4[0] +  "|" +  a20_wwltd4[0] + "|"   )

#print second quarter
if x >=2 and a20_wwfy2[1] != 0:
    print("|"  +  rw1[1] +  "|" + a20_jp4[1] + "|" + a20_os4[1] + "|" + a20_wwfy4[1] +  "|" +  a20_wwltd4[1] + "|"   )

#print third quarter
if x >=3 and a20_wwfy2[2] != 0:
    print("|"  +  rw1[2] +  "|" + a20_jp4[2] + "|" + a20_os4[2] + "|" + a20_wwfy4[2] +  "|" +  a20_wwltd4[2] + "|"   )

#print fourth quarter
if x >=4 and a20_wwfy2[3] != 0:
    print("|"  +  rw1[3] +  "|" + a20_jp4[2] + "|" + a20_os4[2] + "|" + a20_wwfy4[2] +  "|" +  a20_wwltd4[2] + "|"   )

#print fy cumulative
if x >= 1 and a20_wwfyfy != 0:
    print("+===========================================================================================+") #border
    print("|"  +  rw1[4] +  "|" + a20_jpfy2[0] + "|" + a20_osfy2[0] + "|" + a20_wwfyfy2[0] +  "|" +  a20_wwltdfy2[0] + "|"    )

#print ltd
if x >= 1 and a20_wwfyfy != 0:
    print("|"  +  rw1[5] +  "|" + a20_jpfycpc2 + "|" + a20_osfycpc2 + "|" + a20_wwfycpc2 +  "|" +  a20_wwltdpc2 + "|"    )
    print("+-------------------------------------------------------------------------------------------+")
    print(lb1)
    
    #A22

#print first quarter
if x >= 1 and a21_wwfyfy != 0:
    print("+-------------------------------------------------------------------------------------------+")
    print("|" + game1[20] + "|" + hd1[1] + "|" + hd1[2] +"|" + hd1[3] + "|" + hd1[4] + "|" )
    print("+-------------------------------------------------------------------------------------------+")
    
if x >= 1 and a21_wwfy2[0] != 0:
    print("|"  +  rw1[0] +  "|" + a21_jp4[0] + "|" + a21_os4[0] + "|" + a21_wwfy4[0] +  "|" +  a21_wwltd4[0] + "|"   )

#print second quarter
if x >=2 and a21_wwfy2[1] != 0:
    print("|"  +  rw1[1] +  "|" + a21_jp4[1] + "|" + a21_os4[1] + "|" + a21_wwfy4[1] +  "|" +  a21_wwltd4[1] + "|"   )

#print third quarter
if x >=3 and a21_wwfy2[2] != 0:
    print("|"  +  rw1[2] +  "|" + a21_jp4[2] + "|" + a21_os4[2] + "|" + a21_wwfy4[2] +  "|" +  a21_wwltd4[2] + "|"   )

#print fourth quarter
if x >=4 and a21_wwfy2[3] != 0:
    print("|"  +  rw1[3] +  "|" + a21_jp4[2] + "|" + a21_os4[2] + "|" + a21_wwfy4[2] +  "|" +  a21_wwltd4[2] + "|"   )

#print fy cumulative
if x >= 1 and a21_wwfyfy != 0:
    print("+===========================================================================================+") #border
    print("|"  +  rw1[4] +  "|" + a21_jpfy2[0] + "|" + a21_osfy2[0] + "|" + a21_wwfyfy2[0] +  "|" +  a21_wwltdfy2[0] + "|"    )

#print ltd
if x >= 1 and a21_wwfyfy != 0:
    print("|"  +  rw1[5] +  "|" + a21_jpfycpc2 + "|" + a21_osfycpc2 + "|" + a21_wwfycpc2 +  "|" +  a21_wwltdpc2 + "|"    )
    print("+-------------------------------------------------------------------------------------------+")
    print(lb1)
    
    #A22

#print first quarter
if x >= 1 and a22_wwfyfy != 0:
    print("+-------------------------------------------------------------------------------------------+")
    print("|" + game1[21] + "|" + hd1[1] + "|" + hd1[2] +"|" + hd1[3] + "|" + hd1[4] + "|" )
    print("+-------------------------------------------------------------------------------------------+")
    
if x >= 1 and a22_wwfy2[0] != 0:
    print("|"  +  rw1[0] +  "|" + a22_jp4[0] + "|" + a22_os4[0] + "|" + a22_wwfy4[0] +  "|" +  a22_wwltd4[0] + "|"   )

#print second quarter
if x >=2 and a22_wwfy2[1] != 0:
    print("|"  +  rw1[1] +  "|" + a22_jp4[1] + "|" + a22_os4[1] + "|" + a22_wwfy4[1] +  "|" +  a22_wwltd4[1] + "|"   )

#print third quarter
if x >=3 and a22_wwfy2[2] != 0:
    print("|"  +  rw1[2] +  "|" + a22_jp4[2] + "|" + a22_os4[2] + "|" + a22_wwfy4[2] +  "|" +  a22_wwltd4[2] + "|"   )

#print fourth quarter
if x >=4 and a22_wwfy2[3] != 0:
    print("|"  +  rw1[3] +  "|" + a22_jp4[2] + "|" + a22_os4[2] + "|" + a22_wwfy4[2] +  "|" +  a22_wwltd4[2] + "|"   )

#print fy cumulative
if x >= 1 and a22_wwfyfy != 0:
    print("+===========================================================================================+") #border
    print("|"  +  rw1[4] +  "|" + a22_jpfy2[0] + "|" + a22_osfy2[0] + "|" + a22_wwfyfy2[0] +  "|" +  a22_wwltdfy2[0] + "|"    )

#print ltd
if x >= 1 and a22_wwfyfy != 0:
    print("|"  +  rw1[5] +  "|" + a22_jpfycpc2 + "|" + a22_osfycpc2 + "|" + a22_wwfycpc2 +  "|" +  a22_wwltdpc2 + "|"    )
    print("+-------------------------------------------------------------------------------------------+")
    print(lb1)