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
    // How to get csv file directory given value
    if (argc > 1)
    {
        printf("This is C. You entered: %s", argv[1]);
    }
    else
    {
        printf("Not enough arguments.");
    }
    return 0;
}

typedef struct ageMacros
{
    char *category;
    float macrosNeeded;
} ageMacros;

// checks if user input category is child, teen, adult
bool check(char *word)
{
    printf("String Value: %s\n", word);
    // if () //way to compare string values
    // {
    //     return true;
    // }
    return false;
}

// CSV Read function
int totalMSS(char *fileInput, ageMacros *p)
{
    //1. Read the file columns 
    //2. Compute the values 
    //3. Output the value Protein: G, Carbs in G, Fat in G, 
    //4.
    char *buffer[1000];
    FILE *file = fopen("data.csv", "r");
    if (file != NULL)
    {
        while (fread("data.csv", "r", ))
        {
            fgets(buffer, sizeof(buffer), file);
        }
    }
    return -1;
}
