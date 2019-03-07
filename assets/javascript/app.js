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
var startGame = $("#start-btn").on("click", function() {
  $(this)
    .parent()
    .hide();
  document.getElementById("answerScreen").style.display = "none";
  document.getElementById("timesUp").style.display = "none";

  $(".container").show();
  countdown(30);
  displayQuestions();
});

function displayQuestions() {
  $("#questions :not('#sub-but')").empty();
  var element = document.getElementById("questions");
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
function checkAns() {
  for (var i = 0; i < questions.length; i++) {
    var checked_answer = document.querySelector(
      'input[name="choiceq' + i + '"]:checked'
    ).value;

    if (checked_answer === questions[i].ans) {
      correct++;
    } else {
      incorrect++;
    }
  }
  console.log(correct);
  console.log(incorrect);
  $("#correctTimesUp").append(correct);
  // display wrongAnswers
  $("#wrongTimesUp").append(incorrect);
}

var countdown = function(seconds) {
  var timer = setInterval(function() {
    seconds = seconds - 1;
    $("#time-remain").html(seconds);

    if (seconds <= 0) {
      $(".container").fadeOut(500);
      var correct = 0;
      var incorrect = 0;
      var unAnswered = 0;

      checkAns();

      $("#timesUp")
        .fadeIn(1000)
        .show();

      clearInterval(timer);
      return;
    }
  }, 1000);
  $("#sub-but").on("click", function() {
    clearInterval(timer);
    $("#answerScreen").show();
  });
};
// function to grade quiz once submit button is clicked
// var gradeQuiz = $("#sub-but").on("click", function() {
//   var correct = 0;
//   var incorrect = 0;
//   var unAnswered = 0;
//   checkAns();
//   countdown();
// fade out questions
//   $(".container").fadeOut(500);
// show answerScreen
//   $("#answerScreen").show();
// display correctAnswers
//   $("#correctScreen").append(correct);
// display wrongAnswers
//   $("#wrongScreen").append(incorrect);
// });
