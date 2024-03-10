import pandas as pd
import json


def calculate_nutrition():
    file_path = 'data/data_sheet_2.csv'
    df = pd.read_csv(file_path)

    total_protein = df['Protein'].sum()
    total_fat = df['Fat'].sum()
    total_carbs = df['Carbs'].sum()

    result = {
        "Proteins": total_protein,
        "Fats": total_fat,
        "Carbs": total_carbs
    }

    return json.dumps(result)


def calculate_excess_produce():
    # Load the CSV files
    df1 = pd.read_csv('data/data_sheet_1.csv')
    df2 = pd.read_csv('data/data_sheet_2.csv')

    # Convert ShortTonsExported and ProductionTotal from tons to grams (1 short ton = 907184.74 grams)
    df1['ShortTonsExportedGrams'] = df1['ShortTonsExported'] * 907184.74
    df1['ProductionTotalGrams'] = df1['ProductionTotal'] * 907184.74

    # Merge the two dataframes based on ItemName
    merged_df = pd.merge(df1, df2, on="ItemName")

    # Calculate the grams of each macronutrient consumed based on the production total
    merged_df['ProteinConsumedGrams'] = merged_df['ProductionTotalGrams'] * \
        merged_df['Protein']
    merged_df['FatConsumedGrams'] = merged_df['ProductionTotalGrams'] * \
        merged_df['Fat']
    merged_df['CarbsConsumedGrams'] = merged_df['ProductionTotalGrams'] * \
        merged_df['Carbs']

    # Calculate the excess produce in grams
    merged_df['ExcessProduceGrams'] = merged_df['ProductionTotalGrams'] - \
        merged_df['ShortTonsExportedGrams']

    # Select relevant columns for the excess produce
    excess_produce_df = merged_df[['ItemName', 'ExcessProduceGrams']]

    # Convert the excess produce dataframe to the requested JSON format
    excess_produce_json_list = excess_produce_df.apply(
        lambda x: {'name': x['ItemName'], 'mss_value': x['ExcessProduceGrams']}, axis=1).tolist()

    # Convert the list of dictionaries to a JSON string
    excess_produce_json_formatted = json.dumps(excess_produce_json_list)

    # Print the formatted JSON string
    excess_produce_json_formatted

    return excess_produce_json_formatted
