#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>
#include <math.h>
#include <string.h>

#include "mss.h"

#define NUM_CATEGORIES 3
const char *ageCategories[NUM_CATEGORIES] = {"child", "teen", "adult"};

int main(int argc, char **argv)
{
    FILE *file = fopen(argv[1], "r");
    // How to get csv file directory given value
    if (argc > 1 && file != NULL)
    {
        totalMSS(argv[1]);
    }
    else
    {
        return -1;
    }
    return 0;
}

typedef struct ageMacros
{
    char *category;
    float macrosNeeded;
} ageMacros;

// checks if user input category is child, teen, adult
// bool check(char *fileLocation)
// {

//     if ( == true)
//     {
//         return true;
//     }
//     return false;
// }

// CSV Read function
int totalMSS(char *fileInput)
{
    // 1. Read the file columns
    // 2. Compute the values
    // 3. Output the value Protein: G, Carbs in G, Fat in G,
    // 4.
    char *data;
    char buffer[1000];
    FILE *file = fopen(fileInput, "r");
    if (file != NULL)
    {
        while (fgets(buffer, sizeof(buffer), file))
        {
            char *token;

            token = strtok(buffer, ",");

            while (token != NULL)
            {
                printf("%s", token);
                token = strtok(NULL, ",");
            }
            printf("\n");
        }
    }
    return -1;
}
