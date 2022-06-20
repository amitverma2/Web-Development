console.log("Hello, world!");
var gameStarted = false;
var playerTurn = false;
var simonSequence = [];
var toMatch = [];

function showSelected(color) {
  $("#" + color).addClass("pressed");
  var audio = new Audio("sounds/" + color + ".mp3");
  audio.play();
  setTimeout(function() {
    $("#" + color).removeClass("pressed");
  }, 300);
}

function showClicked(color) {
  $("#" + color).addClass("pressed");
  var audio = new Audio("sounds/" + color + ".mp3");
  audio.play();
  setTimeout(function() {
    $("#" + color).removeClass("pressed");
  }, 100);
}

function addNext () {
  var num = Math.floor(Math.random() * 4);
  var colors = [ "green", "red", "yellow", "blue" ];
  simonSequence.push(colors[num]);
  showSelected(colors[num]);
  console.log(simonSequence);
}

function MakeAMove() {
    addNext();
    toMatch = simonSequence.slice();
    playerTurn = true;
}

function clearGameState () {
  simonSequence = [];
}

$("html").keypress(function() {
  if (!gameStarted) {
    gameStarted = true;
    $("#level-title").text("Game on!");
    clearGameState();
    setTimeout(MakeAMove, 100);
  }
});

function failedGame () {
  $("#level-title").text("Fail!");
  var audio = new Audio("sounds/wrong.mp3");
  audio.play();
  clearGameState();
  gameStarted = false;
  $("#level-title").text("Press A Key to Start");
}

function passGame() {
  MakeAMove();
}

$(".btn").click(function() {
  if (playerTurn) {
    console.log(toMatch);
    var color = this.id;
    showClicked(color);
    var matchTo = toMatch.shift();
    if (color != matchTo) {
      playerTurn = false;
      failedGame();
    } else if (toMatch.length == 0) {
      playerTurn = false;
      setTimeout(passGame, 1000);
    }
  }
});
