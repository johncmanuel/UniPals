import json

def partOne():
    pass

def partTwo():
    questions = """27. A. SCHEDULED 35. A. STATEMENT 43. A. CALM
B. UNPLANNED B. CONCEPT B. LIVELY
28. A. FACTS 36. A. RESERVED 44. A. JUSTICE
B. IDEAS B. TALAKATIVE B. MERCY
29. A. QUIET 37. A. ANALYZE 45. A. FASCINATING
B. HEARTY B. SYMPATHIZE B. SENSIBLE
30. A. CONVINCING 38. A. CREATE 46. A. FIRM-MINDED
B. TOUCHING B. MAKE B. WARM HEARTED
31. A. IMAGINATIVE 39. A. DETERMINED 47. A. FEELING
B. MATTER-OF-FACT B. DEVOTED B. THINKING
32. A. BENEFITS 40. A. GENTLE 48. A. LITERAL
B. BLESSINGS B. FIRM B. FIGURATIVE
33. A. PEACEMAKER 41. A. SYSTEMATIC 49. A. ANTICIPATION
B. JUDGE B. CASUAL B. COMPASSION
34. A. SYSTEMATIC 42. A. CERTAINTY 50. A. PRACTICAL
B. SPONTANEOUS B. THEORY B. IDEALISTIC"""

    questions = questions.splitlines()

    updatedQuestions = {}

    for rowNum in range(0, len(questions), 2):
        rowNumB = rowNum + 1

        questions[rowNum] = questions[rowNum].split(" ")
        questions[rowNumB] = questions[rowNumB].split(" ")

        rowA = questions[rowNum] 
        rowB = questions[rowNumB]

        for i in range(0, len(rowA), 3):
            questionNum = rowA[i].replace(".", "")
            answerA = rowA[i + 2]
            answerB = rowB[ ((i // 3) * 2) + 1]

            updatedQuestions[questionNum] = {
                'A': answerA,
                'B': answerB
            } 

    updatedQuestions = dict(sorted(updatedQuestions.items()))


    
    print(json.dumps(updatedQuestions, indent = 4))

partTwo()