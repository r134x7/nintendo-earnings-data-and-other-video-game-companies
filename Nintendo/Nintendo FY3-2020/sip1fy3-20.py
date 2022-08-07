header_0 = ["| Nintendo Co., Ltd.| FY3/2023 |", "| Key/Digital Sales Indicators |"]
header_1 = [  " Proportion of overseas sales ", " Proportion of hardware sales ", " Proportion of first party software sales ", " Digital Sales                ", " Proportion of Digital Sales  ", "Proportion of DL Ver. of Packaged Software Sales"] #header
row_1 = [" 1st Quarter       ", " 2nd Quarter       ", " 3rd Quarter       ", " 4th Quarter       ", " 1st Half          ",  " 1st Three Quarters", " FY3/23 Cumulative "] # row names
line_break_1 = "###" # line break

border_line = "+" + "-"*30 + "+"
border_line_double = ["+" + "="*30 + "+", "+" + "="*37 + "+"] 

header = [
    border_line + ("\n|"  +  header_1[0] + "|") + ("\n+" + "-"*30 + "+"), 
    border_line + ("\n|"  +  header_1[1] + "|") + ("\n+" + "-"*30 + "+"), 
    border_line + ("\n|"  +  " Proportion of first party    " + "|") + ("\n|" + " software sales               " + "|") + ("\n+" + "-"*30 + "+"), 
    border_line + ("\n|"  +  header_1[3] + "|") + ("\n+" + "-"*30 + "+"), 
    border_line + ("\n|"  +  header_1[4] + "|") + ("\n+" + "-"*30 + "+"), 
    ("+" + "-"*37 + "+") + ("\n|"  +  " Proportion of downloadable versions " + "|") + ("\n|" + " of Packaged Software Sales          " + "|") + ("\n+" + "-"*37 + "+")
    ] # [0] Print proportion of overseas sales, [1] print proportion of hardware sales, [2] print Proportion of first party software sales, [3] print Digital Sales, [4] print proportion of digital sales, [5] Print Proportion of DL Ver. of Packaged SW Sales

footer = [
    border_line + ("\n(※ Proportion of overseas (outside of Japan)") + ("\nsales to total sales)"), 
    border_line + ("\n(※ Proportion of hardware \n (including accessories) sales") + ("\nto total dedicated video game platform sales)"), 
    border_line + ("\n(※ Proportion of first-party software sales") + ("\nto total dedicated video game software sales)"), 
    border_line + ("\n(\"※ Digital sales include a) downloadable \nversions of packaged software,") + ("\nb) download-only software, \nc) add-on content and \nd) Nintendo Switch Online, etc.") + ("\n＊\"Downloadable versions of packaged software\" \nindicates the ") + ("downloadable version of \nsoftware that is offered both physically \nand digitally.\")"), 
    border_line + ("\n(※ Proportion of digital sales to total \ndedicated ") + ("video game software sales )"), 
    ("+" + "-"*37 + "+") + ("\n(※ Proportion of downloadable versions of \npackaged software sales ") + ("to total digital sales \nas indicated above: a/(a+b+c+d) )")
    ] # [0] Print proportion of overseas sales, [1] print proportion of hardware sales, [2] print Proportion of first party software sales, [3] print Digital Sales, [4] print proportion of digital sales, [5] Print Proportion of DL Ver. of Packaged SW Sales

current_quarter = 1 # Set to 1, 2, 3 or 4.

# Input figures
proportion_of_overseas_sales = [
    79.9, # [0] 1st quarter 
    11.2, # [1] 2nd quarter
    11.2, # [2] 3rd quarter
    11.2, # [3] 4th quarter
    11.2, # [4] 1st half
    11.2, # [5] first three quarters
    11.2 # [6] fiscal year cumulative
    ] 

proportion_of_hardware_sales = [
    43.8, # [0] 1st quarter 
    33.2, # [1] 2nd quarter
    33.2, # [2] 3rd quarter
    33.2, # [3] 4th quarter
    33.2, # [4] 1st half
    33.2, # [5] first three quarters
    33.2 # [6] fiscal year cumulative
    ]

proportion_of_first_party_software_sales = [
    76.3, # [0] 1st quarter 
    44.2, # [1] 2nd quarter
    44.2, # [2] 3rd quarter
    44.2, # [3] 4th quarter
    44.2, # [4] 1st half
    44.2, # [5] first three quarters
    44.2 # [6] fiscal year cumulative
    ] 

digital_sales = [
    88.0, # [0] 1st quarter 
    22.2, # [1] 2nd quarter
    22.2, # [2] 3rd quarter
    22.2, # [3] 4th quarter
    22.2, # [4] 1st half
    22.2, # [5] first three quarters
    22.2 # [6] fiscal year cumulative
    ] 

proportion_of_digital_sales = [
    53.0, # [0] 1st quarter 
    66.2, # [1] 2nd quarter
    66.2, # [2] 3rd quarter
    66.2, # [3] 4th quarter
    66.2, # [4] 1st half
    66.2, # [5] first three quarters
    66.2 # [6] fiscal year cumulative
    ] 

proportion_of_download_version_of_packaged_software_sales = [
    52.1, # [0] 1st quarter 
    88.2, # [1] 2nd quarter
    88.2, # [2] 3rd quarter
    88.2, # [3] 4th quarter
    88.2, # [4] 1st half
    88.2, # [5] first three quarters
    88.2 # [6] fiscal year cumulative
    ] 

def format_to_string (y, i):

    if y != digital_sales:
        y1 = ['{:}% '.format(elem) for elem in y]
    else: y1 = ['¥{:}B '.format(elem) for elem in y]

    if y != proportion_of_download_version_of_packaged_software_sales:
        y2 = ['{0: >10}'.format(elem) for elem in y1]
    else: y2 = ['{0: >17}'.format(elem) for elem in y1]
    
    return to_print(y2, i)

def to_print(y2, i):

    print(header[i])
    for j in range (current_quarter):
        print("|"  +  row_1[j] + "|" + y2[j] + "|") 
    else:
        if i != 5:
            print(border_line_double[0])
        else: print(border_line_double[1])
        for j in range (current_quarter-1): 
            print("|"  +  row_1[j+4] + "|" + y2[j+4] + "|")
        else: 
            print(footer[i])

    return  

print(border_line)
print(header_0[0])
print(border_line)
print(header_0[1])
print(border_line)

for_loop_list = [
    proportion_of_overseas_sales, 
    proportion_of_hardware_sales, 
    proportion_of_first_party_software_sales, 
    digital_sales, 
    proportion_of_digital_sales, 
    proportion_of_download_version_of_packaged_software_sales
    ]

for i in range(len(for_loop_list)):
    format_to_string(for_loop_list[i], i)
