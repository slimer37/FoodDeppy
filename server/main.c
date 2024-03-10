#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>
#include <unistd.h>
#include "mss.h"

#define NUM_CATEGORIES 3
#define DEMANDED_QUANTITIES 4
#define MAX_FIELDS 10
#define LENGTH = 15 // define max length of chars for c

// const char *ageCategories[NUM_CATEGORIES] = {"child", "teen", "adult"};
typedef struct MSS
{
    // MSS Properties for equation
    char *name;             // element 1
    double exported;        // element 2
    double totalProduction; // element 3
    char *units;            // element 4
    char *category;         // element 5
    double *mssTotal;
} MSS;

MSS *compileData(char *fileInput);
int totalMSS(MSS *arr, int totalPopulation);
void printMSS(MSS *obj);

int main(int argc, char **argv)
{
    if (argc != 2) {
        printf("Usage: %s <filename>\n", argv[0]);
        return 1;
    }

    char *filename = argv[1];
    if (access(filename, F_OK) == -1) {
        printf("Error: File '%s' does not exist.\n", filename);
        return 1;
    }

    MSS *merced = compileData(filename);
    if (merced == NULL) {
        printf("Error: Unable to open or read file '%s'.\n", filename);
        return 1;
    }

    printf("Hello World\n");
    double total = totalMSS(merced, 86648);
    char buffer[1000];
    
    FILE *file = fopen(filename, "r");
    if (file == NULL) {
        printf("Error: Unable to open file '%s'.\n", filename);
        return 1;
    }
    
    // Read and print each line from the CSV file
    while (fgets(buffer, sizeof(buffer), file) != NULL)
    {
        printMSS(merced);
    }
    
    fclose(file);
    return 0;
}

// Utility Function
bool openFile(char *fileInput)
{
    FILE *file = fopen(fileInput, "r");
    if (file != NULL)
    {
        return true;
    }
    fclose(file);
    return false;
}

MSS *compileData(char *fileInput)
{
    char buffer[1000]; // Increased buffer size
    MSS *arr = malloc(sizeof(MSS) * MAX_FIELDS);
    
    FILE *file = fopen(fileInput, "r");
    if (file != NULL) // Corrected file opening check
    {
        char *fields[MAX_FIELDS];
        int num_fields = 0; // Initialized num_fields
        int count = 0;
        
        while (fgets(buffer, sizeof(buffer), file) != NULL && count < MAX_FIELDS) // Changed loop condition to use fgets
        {
            char *token = strtok(buffer, ",");
            num_fields = 0; // Reset num_fields for each line
            
            while (token != NULL && num_fields < MAX_FIELDS) // Changed loop condition and removed redundant check
            {
                fields[num_fields++] = token; // Assign token to fields and then increment num_fields
                token = strtok(NULL, ",");
            }

            // Check if the line has enough fields to process
            if (num_fields >= 5)
            { // Corrected index to ensure at least 5 fields exist (0-based indexing)
                MSS *item = malloc(sizeof(MSS)); // Allocate memory for MSS item
                item->name = fields[0];
                item->exported = atof(fields[1]);
                item->totalProduction = atof(fields[2]);
                item->units = fields[3];
                item->category = fields[4];
                
                arr[count++] = *item; // Assign item to arr[count] and then increment count
            }
        }
        
        fclose(file);
        return arr;
    }
    return NULL;
}

// converting to tons
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

int findServingSize(char *str)
{
    if (strcasecmp(str, "protein") == 0 || strcasecmp(str, "livestock") == 0 || strcasecmp(str, "poultryproduct") == 0)
    {
        return 35; // protein
    }
    else if (strcasecmp(str, "vegetables") == 0 || strcasecmp(str, "fruit") == 0 || strcasecmp(str, "nut") == 0)
    {
        return 44; // fat
    }
    return 0;
}

// Recieves a MSS struct then divides by total Population and multiplies by percent
int totalMSS(MSS *arr, int totalPopulation)
{
    int total = 0;
    if (arr != NULL)
    {
        double totalProdc = convertToTons(arr->totalProduction, arr->units);
        double exportedProdc = convertToTons(arr->exported, arr->units);
        double servingSize = convertToTons(findServingSize(arr->category), arr->units);
        total = ((totalProdc - exportedProdc) / servingSize);
        total = (total / totalPopulation) * 100;
    }
    return total;
}

// Print Stmts: allergenName, exported items, productionTotal, unit type
void printMSS(MSS *obj)
{
    char *string = obj->name;
    double *indexVal = obj->mssTotal;
    printf("Item Name: %s, MSS Value: %f\n", string, *indexVal);
}
