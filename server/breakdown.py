import pandas as pd

def breakdownMacro(production_csv : str, macros_csv : str, key : str) -> dict[int]:
    macros_data = pd.read_csv(macros_csv)
    
    nutrient_content = {}
    
    for index, row in macros_data.iterrows():
        nutrient_content[row['ItemName']] = row[key]
    
    data = pd.read_csv(production_csv)
    
    proportions = {}
    total = 0
    for index, row in data.iterrows():
        shortTons = row['ShortTonsExported']
        
        proportions[row['ItemName']] = shortTons
        total += shortTons
        
    for key in proportions.keys():
        proportions[key] = proportions[key] * 100 / total
    
    return proportions