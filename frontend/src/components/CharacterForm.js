import React from "react";
import { Grid, Segment, Container } from "semantic-ui-react";
import ApplyPadding from "./ApplyPadding";

// Hardcode the values :(
// Credits
// https://wedgworthleadership.com/wp-content/uploads/2016/08/Myers-Briggs-Personality-Test.pdf
const MyersBriggsTestPartOne = {
  question: {
    "When you go somewhere for the day, would you rather": {
      A: "Plan what you will do and when, or...",
      B: "JUST GO!!",
    },
  },
  question: {
    "IF YOU WERE A TEACHER, WOULD YOU RATHER TEACH": {
      A: "FACTS-BASED COURSES, OR",
      B: "COURSES INVOLVING OPINION OR THEORY?",
    },
  },
  question: {
    "ARE YOU USUALLY": {
      A: "A “GOOD MIXER” WITH GROUPS OF PEOPLE, OR",
      B: "RATHER QUIET AND RESERVED?",
    },
  },
  question: {
    "DO YOU MORE OFTEN LET": {
      A: "YOUR HEART RULE YOUR HEAD. OR",
      B: "YOUR HEAD RULE YOUR HEART?",
    },
  },
  question: {
    "AMONG YOUR FRIENDS ARE YOU": {
      A: "FULL OF NEWS ABOUT EVERYBODY, OR",
      B: "ONE OF THE LAST TO HEAR WHAT IS GOING ON?",
    },
  },
  question: {
    "DOES THE IDEA OF MAKING A LIST OF WHAT YOU SHOULD GET DONE OVER A WEEKEND": {
      A: "HELP YOU, OR",
      B: "STRESS YOU, OR",
      C: "POSITIVELY DEPRESS YOU?",
    },
  },
  question: {
    "WHEN YOU HAVE A SPECIAL JOB TO DO, DO YOU LIKE TO": {
      A: "ORGANIZE IT CAREFULLY BEFORE YOU START, OR",
      B: "FIND OUT WHAT IS NECESSARY AS YOU GO ALONG?",
    },
  },
  question: {
    "DO YOU TEND TO HAVE": {
      A: "BROAD FRIENDSHIPS WITH MANY DIFFERENT PEOPLE,",
      B: "DEEP FRIENDSHIP WITH VERY FEW PEOPLE?",
    },
  },
  question: {
    "DO YOU ADMIRE MORE THE PEOPLE WHO ARE": {
      A: "NORMAL-ACTING TO NEVER MAKE THEMSELVES THE CENTER OF ATTENTION, OR",
      B:
        "TOO ORIGINAL AND INDIVIDUAL TO CARE WHETHER THEY ARE THE CENTER OF ATTENTION OR NOT",
    },
  },
  question: {
    "DO YOU PREFER TO": {
      A: "ARRANGE PICNICS, PARTIES ETC, WELL IN ADVANCE, OR",
      B: "BE FREE TO DO WHATEVER TO LOOKS LIKE FUN WHEN THE TIME COMES?",
    },
  },
  question: {
    "DO YOU USUALLY GET ALONG BETTER WITH": {
      A: "REALISTIC PEOPLE, OR",
      B: "IMAGINATIVE PEOPLE?",
    },
  },
  question: {
    "WHEN YOU ARE WITH THE GROUP OF PEOPLE, WOULD YOU USUALLY RATHER": {
      A: "JOIN IN THE TALK OF THE GROUP OR",
      B: "STAND BACK AND LISTEN FIRST?",
    },
  },
  question: {
    "IN READING FOR PLEASURE, DO YOU": {
      A: "ENJOY ODD OR ORIGINAL WAYS OF SAYING THINGS, OR",
      B: "LIKE WRITERS TO SAY EXACTLY WHAT THEY MEAN?",
    },
  },
  question: {
    "DO YOU": {
      A: "TALK EASILY TO ALMOST ANYONE FOR AS LONG AS YOU HAVE TO, OR",
      B:
        "FIND A LOT TO SAY ONLY TO CERTAIN PEOPLE OR UNDER CERTAIN CONDITIONS?",
    },
  },
  question: {
    "DOES FOLLOWING A SCHEDULE": {
      A: "APPEAL TO YOU, OR",
      B: "CRAMP YOU?",
    },
  },
  question: {
    "WHEN IT IS SETTLED WELL IN ADVANCE THAT YOU WILL DO A CERTAIN THING AT A CERTAIN TIME,DO YOU FIND IT": {
      A: "NICE TO BE ABLE TO PLAN ACCORDINGLY, OR",
      B: "A LITTLE UNPLEASANT TO BE TIED DOWN?",
    },
  },
  question: {
    "ARE YOU MORE SUCCESSFUL": {
      A: "AT FOLLOWING A CAREFULLY WORKED OUT PLAN, OR",
      B:
        "AT DEALING WITH THE UNEXPECTED AND SEEING QUICKLY WHAT SHOULD BE DONE?",
    },
  },
  question: {
    "WOULD YOU RATHER BE CONSIDERED": {
      A: "A PRACTICAL PERSON, OR",
      B: "AN OUT-OF-THE-BOX-THINKING PERSON?",
    },
  },
  question: {
    "IN A LARGE GROUP, DO YOU MORE OFTEN": {
      A: "INTRODUCE OTHERS, OR",
      B: "GET INTRODUCED?",
    },
  },
  question: {
    "DO YOU USUALLY": {
      A: "VALUE EMOTION MORE THAN LOGIC, OR",
      B: "VALUE LOGIC MORE THAN FEELINGS?",
    },
  },
  question: {
    "WOULD YOU RATHER HAVE AS A FRIEND": {
      A: "SOMEONE WHO IS ALWAYS COMING UP WITH NEW IDEAS, OR",
      B: "SOMEONE WHO HAS BOTH FEET ON THE GROUND?",
    },
  },
  question: {
    "CAN THE NEW PEOPLE YOU MEET TELL WHAT YOU ARE INTERESTED IN": {
      A: "RIGHT AWAY,",
      B: "ONLY AFTER THEY REALLY GET TO KNOW YOU?",
    },
  },
  question: {
    "(ON THIS QUESTION ONLY, IF TWO ANSWERS ARE TRUE, CIRCLE BOTH) IN YOUR DAILY WORK, DO YOU": {
      A: "USUALLY PLAN YOUR WORK SO YOU WON’T NEED TO WORK UNDER PRESSURE, OR",
      B: "RATHER ENJOY AN EMERGENCY THAT MAKES YOU WORK AGAINST TIME, OR",
      C: "HATE TO WORK UNDER PRESSURE?",
    },
  },
  question: {
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

const CharacterForm = () => (
  <>
    <ApplyPadding />
    <Grid
      stackable
      container
      textAlign="center"
      style={{ height: "50vh" }}
      verticalAlign="middle"
    >
      <Grid.Row>
        <Grid.Column>
          <Segment>
            <p>hihihihihihi</p>
          </Segment>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </>
);

export default CharacterForm;
