var questions = [
  {
    q: "'.MOV' extension refers usually to what kind of file?",
    choices: [
      "Image file",
      "Animation/movie file",
      "Audio file",
      "MS Office document"
    ],
    ans: "Animation/movie file"
  },
  {
    q: "In Alice in Wonderland, what is the name of Alice’s kitten?",
    choices: ["Dinah", "Sammie", "Kat", "Luna"],
    ans: "Dinah"
  },
  {
    q:
      "Which is a type of Electrically-Erasable Programmable Read-Only Memory?",
    choices: ["Flash", "Flange", "Fury", "FRAM"],
    ans: "Flash"
  },
  {
    q: "'.MPG' extension refers usually to what kind of file?",
    choices: [
      "WordPerfect Document file",
      "MS Office document",
      "Animation/movie file",
      "Image file"
    ],
    ans: "Image file"
  },
  {
    q: "'DB' computer abbreviation usually means ?",
    choices: ["Database", "Double Byte", "Data Block", "Driver Boot"],
    ans: "Database"
  },
  {
    q: "In the Lion King, where does Mufasa and his family live?",
    choices: ["Rocky Mountain", "Forest", "Desert", "Pride Rock"],
    ans: "Pride Rock"
  },
  {
    q: "In Alice in Wonderland, what is the name of Alice’s kitten?",
    choices: ["Dinah", "Sammie", "Kat", "Luna"],
    ans: "Dinah"
  },
  {
    q: "After being on earth, where did Hercules first meet his father Zeus?",
    choices: [
      "Mount Olympus",
      "Greece",
      "In the Temple of Zeus",
      "Elysian Fields"
    ],
    ans: "In the Temple of Zeus"
  }
];

document.getElementById("answerScreen").style.display = "none";
document.getElementById("timesUp").style.display = "none";
document.getElementById("questionContainer").style.display = "none";

var startGame = $("#start-btn").on("click", function() {
  $(this)
    .parent()
    .hide();

  $(".container").show();
  countdown(60);
  displayQuestions();
});

function displayQuestions() {
  $("#introScreen").hide();
  $("#questions :not('#sub-but')").empty();
  var element = document.getElementById("questions");
  var innerhtml = "";

  for (var i = 0; i < questions.length; i++) {
    innerhtml += "<div>" + questions[i].q + "</div>";
    for (var j = 0; j < 4; j++) {
      innerhtml +=
        "<label><input type='radio' name='choiceq" +
        i +
        "' value='" +
        questions[i].choices[j] +
        "'>" +
        questions[i].choices[j] +
        "</input></label>";
    }
  }
  element.innerHTML = innerhtml;
}
function checkAns() {
  var correct = 0;
  var incorrect = 8;
  for (var i = 0; i < questions.length; i++) {
    var checked_answer = document.querySelector(
      'input[name="choiceq' + i + '"]:checked'
    );
    if (checked_answer) {
      checked_value = checked_answer.value;

      if (checked_value === questions[i].ans) {
        correct++;
        incorrect--;
      }
    }
  }
  console.log(correct);
  console.log(incorrect);
  document.getElementById("correctAnswerValue").innerHTML = correct;
  document.getElementById("wrongAnswerValue").innerHTML = incorrect;
}

function showAnswers() {
  $(".container").fadeOut(500);

  checkAns();
  clearInterval(timer);

  document.getElementById("questionContainer").style.display = "none";
  document.getElementById("answerScreen").style.display = "block";
  document.getElementById("timeDisplay").style.display = "none";
}

var timer;

var countdown = function(seconds) {
  timer = setInterval(function() {
    seconds = seconds - 1;
    $("#time-remain").html(seconds);

    if (seconds <= 0) {
      $("#timesUp")
        .fadeIn(1000)
        .show();
      clearInterval(timer);

      showAnswers();
      return;
    }
  }, 1000);

  $("#sub-but").on("click", function() {
    showAnswers();
  });
};
