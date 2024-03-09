#include <stdio.h>

// TODO: Algorithms for relevant statistics, from CSVs

int main(int argc, char **argv) {
    
    if (argc > 1) {
        printf("This is C. You entered: %s", argv[1]);
    } else {
        printf("Not enough arguments.");
    }

    return 0;
}