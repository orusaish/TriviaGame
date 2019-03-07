var questions = [
  {
    q: "'.MOV' extension refers usually to what kind of file?",
    choices: [
      "Image file",
      "Animation/movie file",
      "Audio file",
      "MS Office document"
    ],
    ans: 1
  },
  {
    q: "In Alice in Wonderland, what is the name of Alice’s kitten?",
    choices: ["Dinah", "Sammie", "Kat", "Luna"],
    ans: 0
  },
  {
    q:
      "Which is a type of Electrically-Erasable Programmable Read-Only Memory?",
    choices: ["Flash", "Flange", "Fury", "FRAM"],
    ans: 0
  },
  {
    q: "'.MPG' extension refers usually to what kind of file?",
    choices: [
      "WordPerfect Document file",
      "MS Office document",
      "Animation/movie file",
      "Image file"
    ],
    ans: 3
  },
  {
    q: "'DB' computer abbreviation usually means ?",
    choices: ["Database", "Double Byte", "Data Block", "Driver Boot"],
    ans: 0
  },
  {
    q: "In the Lion King, where does Mufasa and his family live?",
    choices: ["Rocky Mountain", "Forest", "Desert", "Pride Rock"],
    ans: 3
  },
  {
    q: "In Alice in Wonderland, what is the name of Alice’s kitten?",
    choices: ["Dinah", "Sammie", "Kat", "Luna"],
    ans: 0
  },
  {
    q: "After being on earth, where did Hercules first meet his   father Zeus?",
    choices: [
      "Mount Olympus",
      "Greece",
      "In the Temple of Zeus",
      "Elysian   Fields"
    ],
    ans: 2
  }
];
function displayQuestions() {
  var element = document.getElementById("question_div");
  var innerhtml = "";

  for (var i = 0; i < questions.length; i++) {
    innerhtml += "<div>" + questions[i].q + "</div>";
    for (var j = 0; j < 4; j++) {
      innerhtml +=
        "<input type='radio' name='choiceq" +
        i +
        "' value='" +
        questions[i].choices[j] +
        "'>" +
        questions[i].choices[j] +
        "</input>";
    }
  }
  element.innerHTML = innerhtml;
}
var correct = 0;
var incorrect = 0;
for (var i = 0; i < questions.length; i++) {
  var checked_answer = document.querySelector(
    'input[name="choiceq' + i + '"]:checked'
  ).value;
  console.log(checked_answer);
  //   if (
  //     $('input:radio[name="choiceq' + i + '"]:checked').val() === questions[i].ans
  //   ) {
  //     correct++;
  //   } else {
  //     incorrect++;
  //   }
  //   console.log(correct);
  //   console.log(incorrect);
}
