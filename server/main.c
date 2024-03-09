#include <stdio.h>

int main(int argc, char **argv) {
    
    if (argc < 1) {
        printf("Not enough arguments.");
        return 1;
    }

    char *location = argv[1];

    // TODO: Algorithms for relevant statistics, from CSVs

    printf("%s", location);

    return 0;
}