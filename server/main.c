#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>

#include "mss.h"

#define NUM_CATEGORIES 3
#define DEMANDED_QUANTITIES 4
#define MAX_FIELDS 10
#define LENGTH = 15 // define max length of chars for c

const char *ageCategories[NUM_CATEGORIES] = {"child", "teen", "adult"};

typedef struct MSS
{
    // MSS Properties for equation
    char *name;             // element 1
    double exported;        // element 2
    double totalProduction; // element 3
    char *units;            // element 4
    char *category;         // element 5
} MSS;

MSS *compileData(char *fileInput);

int main(int argc, char **argv)
{
    MSS *merced = compileData(argv[1]);
    FILE *file = fopen(argv[1], "r");
    // How to get csv file directory given value
    if (argc > 1 && file != NULL)
    {
    }
    return 1;
}

// Utility Function
bool openFile(char *fileInput)
{
    FILE *file = fopen(fileInput, "r");
    if (file != NULL)
    {
        return true;
    }
    return false;
}

// CSV creates an array for Micro-Satiary-Data
MSS *compileData(char *fileInput)
{
    char data;
    char buffer[100];
    MSS *arr = malloc(sizeof(MSS) * MAX_FIELDS);

    char *num_fields;
    FILE *file = fopen(fileInput, "r");
    if (openFile(fileInput))
    {
        char *fields[MAX_FIELDS];
        int num_fields;
        int count = 0;
        while (fields[num_fields] != NULL && num_fields < MAX_FIELDS - 1)
        {
            char *token;

            token = strtok(buffer, ",");

            while (fields[num_fields] != NULL && num_fields < MAX_FIELDS - 1)
            {
                num_fields++;
                fields[num_fields] = strtok(NULL, ",");
            }

            // Check if the line has enough fields to process
            if (num_fields >= 4)
            { // Assuming there are at least 4 fields: name, totalMacros, servingSize, category
                MSS *item;
                item->name = fields[0];
                item->exported = atof(fields[1]);
                item->totalProduction = atof(fields[2]); // measured in TONS, 40lbctn, 24lbctn, cwt, lb
                item->units = fields[3];
                item->category = fields[4];
            }
            count++;
            fclose(file);
        }
        return arr;
    }
    return NULL;
}

double convertToTons(double quantity, char *str1)
{
    if (strcasecmp(str1, "ton") == 0)
    {
        return quantity;
    }
    else if (strcasecmp(str1, "lb") == 0)
    {
        return quantity / 2000.0;
    }
    else if (strcasecmp(str1, "cwt") == 0)
    {
        return quantity * 0.05;
    }
    else if (strcasecmp(str1, "dozn") == 0)
    {
        return quantity * 0.0025;
    }
    else if (strcasecmp(str1, "40lbctn") == 0)
    {
        return quantity * 0.025;
    }
    else if (strcasecmp(str1, "25lbctn") == 0)
    {
        return quantity * 0.04;
    }
    else
    {
        printf("Unknown unit: %f\n", quantity);
        return 0.0;
    }
}

int totalMSS(MSS *arr, int totalPopulation)
{
    int totalMSS = 0; 
    if (arr != NULL){
        ((arr->totalProduction) - (arr->exported)) / (#serving size);
    }
    return 0;
}
