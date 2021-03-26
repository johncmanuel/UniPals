import ApplyFlex from "components/ApplyFlex";
import React, { Component } from "react";
import { Grid, Segment, Container, Header } from "semantic-ui-react";
import ApplyPadding from "../ApplyPadding";
import RadioGroup from "./RadioGroup";

// Hardcode the values :(
// Credits https://wedgworthleadership.com/wp-content/uploads/2016/08/Myers-Briggs-Personality-Test.pdf

// 1. WHEN YOU GO SOMEWHERE FOR THE DAY, WOULD YOU RATHER
// A. PLAN WHAT YOU WILL DO AND WHEN, OR
// B. JUST GO!!
// 2. IF YOU WERE A TEACHER, WOULD YOU RATHER TEACH
// A. FACTS-BASED COURSES, OR
// B. COURSES INVOLVING OPINION OR THEORY?
// 3. ARE YOU USUALLY
// A. A “GOOD MIXER” WITH GROUPS OF PEOPLE, OR
// B. RATHER QUIET AND RESERVED?
// 4. DO YOU MORE OFTEN LET
// A. YOUR HEART RULE YOUR HEAD. OR
// B. YOUR HEAD RULE YOUR HEART?
// 5. IN DOING SOMETHING THAT MANY OTHER PEOPLE DO, WOULD YOU RATHER
// A. INVENT A WAY OF YOUR OWN, OR
// B. DO IT IN THE ACCEPTED WAY?
// 6. AMONG YOUR FRIENDS ARE YOU
// A. FULL OF NEWS ABOUT EVERYBODY, OR
// B. ONE OF THE LAST TO HEAR WHAT IS GOING ON?
// 7. DOES THE IDEA OF MAKING A LIST OF WHAT YOU SHOULD GET DONE OVER A WEEKEND
// A. HELP YOU, OR
// B. STRESS YOU, OR
// C. POSITIVELY DEPRESS YOU?
// 8. WHEN YOU HAVE A SPECIAL JOB TO DO, DO YOU LIKE TO
// A. ORGANIZE IT CAREFULLY BEFORE YOU START, OR
// B. FIND OUT WHAT IS NECESSARY AS YOU GO ALONG?
// 9. DO YOU TEND TO HAVE
// A. BROAD FRIENDSHIPS WITH MANY DIFFERENT PEOPLE, OR
// B. DEEP FRIENDSHIP WITH VERY FEW PEOPLE?
// 10. DO YOU ADMIRE MORE THE PEOPLE WHO ARE
// A. NORMAL-ACTING TO NEVER MAKE THEMSELVES THE CENTER OF ATTENTION, OR
// B. TOO ORIGINAL AND INDIVIDUAL TO CARE WHETHER THEY ARE THE CENTER OF ATTENTION OR NOT
// 11. DO YOU PREFER TO
// A. ARRANGE PICNICS, PARTIES ETC, WELL IN ADVANCE, OR
// B. BE FREE TO DO WHATEVER TO LOOKS LIKE FUN WHEN THE TIME COMES?
// 12. DO YOU USUALLY GET ALONG BETTER WITH
// A. REALISTIC PEOPLE, OR
// B. IMAGINATIVE PEOPLE?
// 13. WHEN YOU ARE WITH THE GROUP OF PEOPLE, WOULD YOU USUALLY RATHER
// A. JOIN IN THE TALK OF THE GROUP OR
// B. STAND BACK AND LISTEN FIRST?
// 14. IS IT A HIGHER COMPLIMENT TO BE CALLED
// A. A PERSON OF REAL FEELING, OR
// B. A CONSISTENTLY REASONABLE PERSON?
// 15. IN READING FOR PLEASURE, DO YOU
// A. ENJOY ODD OR ORIGINAL WAYS OF SAYING THINGS, OR
// B. LIKE WRITERS TO SAY EXACTLY WHAT THEY MEAN?
// 16. DO YOU
// A. TALK EASILY TO ALMOST ANYONE FOR AS LONG AS YOU HAVE TO, OR
// B. FIND A LOT TO SAY ONLY TO CERTAIN PEOPLE OR UNDER
// CERTAIN CONDITIONS?
// 17. DOES FOLLOWING A SCHEDULE
// A. APPEAL TO YOU, OR
// B. CRAMP YOU?
// 18. WHEN IT IS SETTLED WELL IN ADVANCE THAT YOU WILL DO A CERTAIN THING AT A CERTAIN TIME,DO YOU FIND IT
// A. NICE TO BE ABLE TO PLAN ACCORDINGLY, OR
// B. A LITTLE UNPLEASANT TO BE TIED DOWN?
// 19. ARE YOU MORE SUCCESSFUL
// A. AT FOLLOWING A CAREFULLY WORKED OUT PLAN, OR
// B. AT DEALING WITH THE UNEXPECTED AND SEEING QUICKLY WHAT SHOULD BE DONE?
// 20. WOULD YOU RATHER BE CONSIDERED
// A. A PRACTICAL PERSON, OR
// B. AN OUT-OF-THE-BOX-THINKING PERSON?
// 21. IN A LARGE GROUP, DO YOU MORE OFTEN
// A. INTRODUCE OTHERS, OR
// B. GET INTRODUCED?
// 22. DO YOU USUALLY
// A. VALUE EMOTION MORE THAN LOGIC, OR
// B. VALUE LOGIC MORE THAN FEELINGS?
// 23. WOULD YOU RATHER HAVE AS A FRIEND
// A. SOMEONE WHO IS ALWAYS COMING UP WITH NEW IDEAS, OR
// B. SOMEONE WHO HAS BOTH FEET ON THE GROUND?
// 24. CAN THE NEW PEOPLE YOU MEET TELL WHAT YOU ARE INTERESTED IN
// A. RIGHT AWAY,
// B. ONLY AFTER THEY REALLY GET TO KNOW YOU?
// 25. (ON THIS QUESTION ONLY, IF TWO ANSWERS ARE TRUE, CIRCLE BOTH) IN YOUR DAILY WORK, DO YOU
// A. USUALLY PLAN YOUR WORK SO YOU WON’T NEED TO
// WORK UNDER PRESSURE, OR
// B. RATHER ENJOY AN EMERGENCY THAT MAKES YOU WORK AGAINST TIME, OR
// C. HATE TO WORK UNDER PRESSURE?
// 26. DO YOU USUALLY
// A. SHOW YOUR FEELINGS FREELY, OR
// B. KEEP YOUR FEELINGS TO YOURSELF?

// Part 2: Which word in each pair appeals to you more?
// (Think what the word means, not how they look or how they sound)
// 27. A. SCHEDULED 35. A. STATEMENT 43. A. CALM
//  B. UNPLANNED B. CONCEPT B. LIVELY
// 28. A. FACTS 36. A. RESERVED 44. A. JUSTICE
// B. IDEAS B. TALAKATIVE B. MERCY
// 29. A. QUIET 37. A. ANALYZE 45. A. FASCINATING
// B. HEARTY B. SYMPATHIZE B. SENSIBLE
// 30. A. CONVINCING 38. A. CREATE 46. A. FIRM-MINDED
// B. TOUCHING B. MAKE B. WARM HEARTED
// 31. A. IMAGINATIVE 39. A. DETERMINED 47. A. FEELING
// B. MATTER-OF-FACT B. DEVOTED B. THINKING
// 32. A. BENEFITS 40. A. GENTLE 48. A. LITERAL
// B. BLESSINGS B. FIRM B. FIGURATIVE
// 33. A. PEACEMAKER 41. A. SYSTEMATIC 49. A. ANTICIPATION
// B. JUDGE B. CASUAL B. COMPASSION
// 34. A. SYSTEMATIC 42. A. CERTAINTY 50. A. HARD
// B. SPONTANEOUS B. THEORY B. SOFT

const questions = [
  "When you go somewhere for the day, would you rather",
  "IF YOU WERE A TEACHER, WOULD YOU RATHER TEACH",
  "ARE YOU USUALLY",
  "DO YOU MORE OFTEN LET",
  "AMONG YOUR FRIENDS ARE YOU",
  "DOES THE IDEA OF MAKING A LIST OF WHAT YOU SHOULD GET DONE OVER A WEEKEND",
  "WHEN YOU HAVE A SPECIAL JOB TO DO, DO YOU LIKE TO",
  "DO YOU TEND TO HAVE",
  "DO YOU ADMIRE MORE THE PEOPLE WHO ARE",
  "DO YOU PREFER TO",
  "DO YOU USUALLY GET ALONG BETTER WITH",
  "WHEN YOU ARE WITH THE GROUP OF PEOPLE, WOULD YOU USUALLY RATHER",
  "IN READING FOR PLEASURE, DO YOU",
  "DO YOU",
];

const MyersBriggsTestPartOne = {
  question1: {
    "When you go somewhere for the day, would you rather": {
      A: "Plan what you will do and when, or...",
      B: "JUST GO!!",
    },
  },
  question2: {
    "IF YOU WERE A TEACHER, WOULD YOU RATHER TEACH": {
      A: "FACTS-BASED COURSES, OR",
      B: "COURSES INVOLVING OPINION OR THEORY?",
    },
  },
  question3: {
    "ARE YOU USUALLY": {
      A: "A “GOOD MIXER” WITH GROUPS OF PEOPLE, OR",
      B: "RATHER QUIET AND RESERVED?",
    },
  },
  question4: {
    "DO YOU MORE OFTEN LET": {
      A: "YOUR HEART RULE YOUR HEAD. OR",
      B: "YOUR HEAD RULE YOUR HEART?",
    },
  },
  question5: {
    "AMONG YOUR FRIENDS ARE YOU": {
      A: "FULL OF NEWS ABOUT EVERYBODY, OR",
      B: "ONE OF THE LAST TO HEAR WHAT IS GOING ON?",
    },
  },
  question6: {
    "DOES THE IDEA OF MAKING A LIST OF WHAT YOU SHOULD GET DONE OVER A WEEKEND": {
      A: "HELP YOU, OR",
      B: "STRESS YOU, OR",
      C: "POSITIVELY DEPRESS YOU?",
    },
  },
  question7: {
    "WHEN YOU HAVE A SPECIAL JOB TO DO, DO YOU LIKE TO": {
      A: "ORGANIZE IT CAREFULLY BEFORE YOU START, OR",
      B: "FIND OUT WHAT IS NECESSARY AS YOU GO ALONG?",
    },
  },
  question8: {
    "DO YOU TEND TO HAVE": {
      A: "BROAD FRIENDSHIPS WITH MANY DIFFERENT PEOPLE,",
      B: "DEEP FRIENDSHIP WITH VERY FEW PEOPLE?",
    },
  },
  question9: {
    "DO YOU ADMIRE MORE THE PEOPLE WHO ARE": {
      A: "NORMAL-ACTING TO NEVER MAKE THEMSELVES THE CENTER OF ATTENTION, OR",
      B:
        "TOO ORIGINAL AND INDIVIDUAL TO CARE WHETHER THEY ARE THE CENTER OF ATTENTION OR NOT",
    },
  },
  question10: {
    "DO YOU PREFER TO": {
      A: "ARRANGE PICNICS, PARTIES ETC, WELL IN ADVANCE, OR",
      B: "BE FREE TO DO WHATEVER TO LOOKS LIKE FUN WHEN THE TIME COMES?",
    },
  },
  question11: {
    "DO YOU USUALLY GET ALONG BETTER WITH": {
      A: "REALISTIC PEOPLE, OR",
      B: "IMAGINATIVE PEOPLE?",
    },
  },
  question12: {
    "WHEN YOU ARE WITH THE GROUP OF PEOPLE, WOULD YOU USUALLY RATHER": {
      A: "JOIN IN THE TALK OF THE GROUP OR",
      B: "STAND BACK AND LISTEN FIRST?",
    },
  },
  question13: {
    "IN READING FOR PLEASURE, DO YOU": {
      A: "ENJOY ODD OR ORIGINAL WAYS OF SAYING THINGS, OR",
      B: "LIKE WRITERS TO SAY EXACTLY WHAT THEY MEAN?",
    },
  },
  question14: {
    "DO YOU": {
      A: "TALK EASILY TO ALMOST ANYONE FOR AS LONG AS YOU HAVE TO, OR",
      B:
        "FIND A LOT TO SAY ONLY TO CERTAIN PEOPLE OR UNDER CERTAIN CONDITIONS?",
    },
  },
  question15: {
    "DOES FOLLOWING A SCHEDULE": {
      A: "APPEAL TO YOU, OR",
      B: "CRAMP YOU?",
    },
  },
  question16: {
    "WHEN IT IS SETTLED WELL IN ADVANCE THAT YOU WILL DO A CERTAIN THING AT A CERTAIN TIME,DO YOU FIND IT": {
      A: "NICE TO BE ABLE TO PLAN ACCORDINGLY, OR",
      B: "A LITTLE UNPLEASANT TO BE TIED DOWN?",
    },
  },
  question17: {
    "ARE YOU MORE SUCCESSFUL": {
      A: "AT FOLLOWING A CAREFULLY WORKED OUT PLAN, OR",
      B:
        "AT DEALING WITH THE UNEXPECTED AND SEEING QUICKLY WHAT SHOULD BE DONE?",
    },
  },
  question18: {
    "WOULD YOU RATHER BE CONSIDERED": {
      A: "A PRACTICAL PERSON, OR",
      B: "AN OUT-OF-THE-BOX-THINKING PERSON?",
    },
  },
  question19: {
    "IN A LARGE GROUP, DO YOU MORE OFTEN": {
      A: "INTRODUCE OTHERS, OR",
      B: "GET INTRODUCED?",
    },
  },
  question20: {
    "DO YOU USUALLY": {
      A: "VALUE EMOTION MORE THAN LOGIC, OR",
      B: "VALUE LOGIC MORE THAN FEELINGS?",
    },
  },
  question21: {
    "WOULD YOU RATHER HAVE AS A FRIEND": {
      A: "SOMEONE WHO IS ALWAYS COMING UP WITH NEW IDEAS, OR",
      B: "SOMEONE WHO HAS BOTH FEET ON THE GROUND?",
    },
  },
  question22: {
    "CAN THE NEW PEOPLE YOU MEET TELL WHAT YOU ARE INTERESTED IN": {
      A: "RIGHT AWAY,",
      B: "ONLY AFTER THEY REALLY GET TO KNOW YOU?",
    },
  },
  question23: {
    "(ON THIS QUESTION ONLY, IF TWO ANSWERS ARE TRUE, CIRCLE BOTH) IN YOUR DAILY WORK, DO YOU": {
      A: "USUALLY PLAN YOUR WORK SO YOU WON’T NEED TO WORK UNDER PRESSURE, OR",
      B: "RATHER ENJOY AN EMERGENCY THAT MAKES YOU WORK AGAINST TIME, OR",
      C: "HATE TO WORK UNDER PRESSURE?",
    },
  },
  question24: {
    "DO YOU USUALLY": {
      A: "SHOW YOUR FEELINGS FREELY, OR",
      B: "KEEP YOUR FEELINGS TO YOURSELF?",
    },
  },
};

const MyersBriggsTestPartTwo = {
  word: {
    A: "SCHEDULED",
    B: "UNPLANNED",
  },
  word: {
    A: "FACTS",
    B: "IDEAS",
  },
  word: {
    A: "QUIET",
    B: "HEARTY",
  },
  word: {
    A: "CONVINCING",
    B: "TOUCHING",
  },
  word: {
    A: "IMAGINATIVE",
    B: "MATTER-OF-FACT",
  },
  word: {
    A: "BENEFITS",
    B: "BLESSINGS",
  },
  word: {
    A: "PEACEMAKER",
    B: "JUDGE",
  },
  word: {
    A: "SYSTEMATIC",
    B: "SPONTANEOUS",
  },
  word: {
    A: "STATEMENT",
    B: "CONCEPT",
  },
  word: {
    A: "RESERVED",
    B: "TALKATIVE",
  },
  word: {
    A: "ANALYZE",
    B: "SYMPATHIZE",
  },
  word: {
    A: "CREATE",
    B: "MAKE",
  },
  word: {
    A: "DETERMINED",
    B: "DEVOTED",
  },
  word: {
    A: "GENTLE",
    B: "FIRM",
  },
  word: {
    A: "SYSTEMATIC",
    B: "CASUAL",
  },
  word: {
    A: "CERTAINTY",
    B: "THEORY",
  },
  word: {
    A: "CALM",
    B: "LIVELY",
  },
  word: {
    A: "JUSTICE",
    B: "MERCY",
  },
  word: {
    A: "FASCINATING",
    B: "SENSIBLE",
  },
  word: {
    A: "FIRM-MINDED",
    B: "WARM HEARTED",
  },
  word: {
    A: "FEELING",
    B: "THINKING",
  },
  word: {
    A: "LITERAL",
    B: "FIGURATIVE",
  },
  word: {
    A: "ANTICIPATION",
    B: "COMPASSION",
  },
  word: {
    A: "HARSH",
    B: "SOFT",
  },
};

// Store weights and where the weights apply
const MBTIScoring = {
  "3A": {
    weight: "2",
    category: "E",
  },
  "3B": {
    weight: "2",
    category: "I",
  },
  "2A": {
    weight: "2",
    category: "S",
  },
  "2B": {
    weight: "2",
    category: "N",
  },
  "4B": {
    weight: "2",
    category: "T",
  },
  "4A": {
    weight: "1",
    category: "F",
  },
  "1A": {
    weight: "2",
    category: "J",
  },
  "1B": {
    weight: "2",
    category: "P",
  },
  "6A": {
    weight: "2",
    category: "E",
  },
  "6B": {
    weight: "1",
    category: "I",
  },
  "5B": {
    weight: "1",
    category: "S",
  },
  "5A": {
    weight: "1",
    category: "N",
  },
  "14B": {
    weight: "2",
    category: "T",
  },
  "14A": {
    weight: "1",
    category: "F",
  },
  "7A": {
    weight: "1",
    category: "J",
  },
  "7B": {
    weight: "1",
    category: "P",
  },
  "9A": {
    weight: "2",
    category: "E",
  },
  "9B": {
    weight: "1",
    category: "I",
  },
  "10A": {
    weight: "1",
    category: "S",
  },
  "10B": {
    weight: "2",
    category: "N",
  },
  "22B": {
    weight: "2",
    category: "T",
  },
  "22A": {
    weight: "2",
    category: "F",
  },
  ZZ: {
    weight: "0",
    category: "I",
  },
  "7C": {
    weight: "1",
    category: "P",
  },
  "13A": {
    weight: "1",
    category: "E",
  },
  "13B": {
    weight: "2",
    category: "I",
  },
  "12A": {
    weight: "1",
    category: "S",
  },
  "12B": {
    weight: "2",
    category: "N",
  },
  "30A": {
    weight: "2",
    category: "T",
  },
  "30B": {
    weight: "1",
    category: "F",
  },
  "8A": {
    weight: "1",
    category: "J",
  },
  "8B": {
    weight: "2",
    category: "P",
  },
  "16A": {
    weight: "2",
    category: "E",
  },
  "16B": {
    weight: "2",
    category: "I",
  },
  "15B": {
    weight: "1",
    category: "S",
  },
  "15A": {
    weight: "0",
    category: "N",
  },
  "32A": {
    weight: "1",
    category: "T",
  },
  "32B": {
    weight: "1",
    category: "F",
  },
  "11A": {
    weight: "2",
    category: "J",
  },
  "11B": {
    weight: "1",
    category: "P",
  },
  "21A": {
    weight: "2",
    category: "E",
  },
  "21B": {
    weight: "2",
    category: "I",
  },
  "20A": {
    weight: "2",
    category: "S",
  },
  "20B": {
    weight: "2",
    category: "N",
  },
  "33B": {
    weight: "2",
    category: "T",
  },
  "33A": {
    weight: "0",
    category: "F",
  },
  "17A": {
    weight: "2",
    category: "J",
  },
  "17B": {
    weight: "2",
    category: "P",
  },
  "24A": {
    weight: "1",
    category: "E",
  },
  "24B": {
    weight: "1",
    category: "I",
  },
  "23B": {
    weight: "2",
    category: "S",
  },
  "23A": {
    weight: "1",
    category: "N",
  },
  "37A": {
    weight: "1",
    category: "T",
  },
  "37B": {
    weight: "2",
    category: "F",
  },
  "18A": {
    weight: "1",
    category: "J",
  },
  "18B": {
    weight: "1",
    category: "P",
  },
  "26A": {
    weight: "1",
    category: "E",
  },
  "26B": {
    weight: "0",
    category: "I",
  },
  "28A": {
    weight: "2",
    category: "S",
  },
  "28B": {
    weight: "1",
    category: "N",
  },
  "39A": {
    weight: "1",
    category: "T",
  },
  "39B": {
    weight: "1",
    category: "F",
  },
  "19A": {
    weight: "1",
    category: "J",
  },
  "19B": {
    weight: "1",
    category: "P",
  },
  "29B": {
    weight: "2",
    category: "E",
  },
  "29A": {
    weight: "2",
    category: "I",
  },
  "31B": {
    weight: "2",
    category: "S",
  },
  "31A": {
    weight: "0",
    category: "N",
  },
  "40B": {
    weight: "2",
    category: "T",
  },
  "40A": {
    weight: "1",
    category: "F",
  },
  "25A": {
    weight: "1",
    category: "J",
  },
  "25B": {
    weight: "1",
    category: "P",
  },
  "36B": {
    weight: "2",
    category: "E",
  },
  "36A": {
    weight: "1",
    category: "I",
  },
  "35A": {
    weight: "2",
    category: "S",
  },
  "35B": {
    weight: "1",
    category: "N",
  },
  "44A": {
    weight: "1",
    category: "T",
  },
  "44B": {
    weight: "2",
    category: "F",
  },
  "25C": {
    weight: "0",
    category: "J",
  },
  "43B": {
    weight: "1",
    category: "E",
  },
  "43A": {
    weight: "1",
    category: "I",
  },
  "38B": {
    weight: "2",
    category: "S",
  },
  "38A": {
    weight: "0",
    category: "N",
  },
  "46A": {
    weight: "2",
    category: "T",
  },
  "46B": {
    weight: "0",
    category: "F",
  },
  "27A": {
    weight: "2",
    category: "J",
  },
  "27B": {
    weight: "2",
    category: "P",
  },
  "42A": {
    weight: "1",
    category: "S",
  },
  "42B": {
    weight: "2",
    category: "N",
  },
  "47B": {
    weight: "2",
    category: "T",
  },
  "47A": {
    weight: "1",
    category: "F",
  },
  "34A": {
    weight: "2",
    category: "J",
  },
  "34B": {
    weight: "2",
    category: "P",
  },
  "45B": {
    weight: "2",
    category: "S",
  },
  "45A": {
    weight: "0",
    category: "N",
  },
  "49A": {
    weight: "2",
    category: "T",
  },
  "49B": {
    weight: "1",
    category: "F",
  },
  "41A": {
    weight: "2",
    category: "J",
  },
  "41B": {
    weight: "2",
    category: "P",
  },
  "48A": {
    weight: "1",
    category: "S",
  },
  "48B": {
    weight: "1",
    category: "N",
  },
  "50A": {
    weight: "2",
    category: "T",
  },
  "50B": {
    weight: "0",
    category: "F",
  },
};

// Use the length to divide up the entire test equally
const getLengthOfTest =
  Object.keys(MyersBriggsTestPartOne).length +
  Object.keys(MyersBriggsTestPartTwo).length;
console.log("message: " + getLengthOfTest.toString());

const CharacterForm = () => (
  <ApplyFlex>
    <ApplyPadding />
    <Grid
      stackable
      container
      // textAlign="center"
      style={{ height: "50vh" }}
      verticalAlign="middle"
    >
      <Grid.Row>
        <Grid.Column>
          <Segment>
            <Container text>
              <Header as="h1" textAlign="center">
                Personality Test
              </Header>
              <p>
                Hey there! Thank you for signing up for UniPals! Before we get
                straight into the platform, we would like to know what kind of
                person you are. <span>Why? (clickable link here)</span>
              </p>
              <p>
                That way, we would be able to connect you with people with a
                similar mindset.
              </p>
              <RadioGroup />
            </Container>
          </Segment>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </ApplyFlex>
);

export default CharacterForm;
