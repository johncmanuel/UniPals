import json

table = """3A 2 3B 2 2A 2 2B 2 4B 2 4A 1 1A 2 1B 2
6A 2 6B 1 5B 1 5A 1 14B 2 14A 1 7A 1 7B 1
9A 2 9B 1 10A 1 10B 2 22B 2 22A 2 ZZ 0 7C 1
13A 1 13B 2 12A 1 12B 2 30A 2 30B 1 8A 1 8B 2
16A 2 16B 2 15B 1 15A 0 32A 1 32B 1 11A 2 11B 1
21A 2 21B 2 20A 2 20B 2 33B 2 33A 0 17A 2 17B 2
24A 1 24B 1 23B 2 23A 1 37A 1 37B 2 18A 1 18B 1
26A 1 26B 0 28A 2 28B 1 39A 1 39B 1 19A 1 19B 1
29B 2 29A 2 31B 2 31A 0 40B 2 40A 1 25A 1 25B 1
36B 2 36A 1 35A 2 35B 1 44A 1 44B 2 25C 0 ZZ 0
43B 1 43A 1 38B 2 38A 0 46A 2 46B 0 27A 2 27B 2
ZZ 0 ZZ 0 42A 1 42B 2 47B 2 47A 1 34A 2 34B 2
ZZ 0 ZZ 0 45B 2 45A 0 49A 2 49B 1 41A 2 41B 2
ZZ 0 ZZ 0 48A 1 48B 1 50A 2 50B 0"""

# Credits
# https://wedgworthleadership.com/wp-content/uploads/2016/08/Myers-Briggs-Personality-Test.pdf

columns = "EISNTFJP"

# Separate table by row
table = table.splitlines()

# print(table)

for rowNum in range(len(table)):
    table[rowNum] = table[rowNum].split(" ")


    for valueNum in range(0, len(table[rowNum]), 2):
        combination = table[rowNum][valueNum]
        weight = table[rowNum][valueNum + 1]
        column = columns[(int)(valueNum/2)]
        table[rowNum][valueNum] = {
            "combination": combination, "weight": weight, "category": column}

    del table[rowNum][1::2]


MBTI_ORGANIZED_SCORES = {}
for row in table:
    for element in row:
        combination = element["combination"]
        weight = element["weight"]
        category = element["category"]
        MBTI_ORGANIZED_SCORES[combination] = {
            "weight": weight, "category": category}


print(json.dumps(MBTI_ORGANIZED_SCORES, indent=4))
