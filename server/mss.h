#include <math.h>
#include <string.h>
#include <ctype.h>

bool check(char *fileLocation);

// CSV Reader files & computation
int getServingSize(int population, int consumption);
int columnCounter(char *fineInput);

// Boolean Function
bool openFile(char *fileInput);
int sameTerms(char *str1);