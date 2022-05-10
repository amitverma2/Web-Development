var drums = document.querySelectorAll(".drum");
for (var i = 0; i < drums.length; ++i) {
  drums[i].addEventListener("click", function() {
    switch (this.innerText) {
      case "w":
        var soundToPlay = new Audio("sounds/crash.mp3");
        break;
      case "a":
        var soundToPlay = new Audio("sounds/kick-bass.mp3");
        break;
      case "s":
        var soundToPlay = new Audio("sounds/snare.mp3");
        break;
      case "d":
        var soundToPlay = new Audio("sounds/tom-1.mp3");
        break;
      case "j":
        var soundToPlay = new Audio("sounds/tom-2.mp3");
        break;
      case "k":
        var soundToPlay = new Audio("sounds/tom-3.mp3");
        break;
      case "l":
        var soundToPlay = new Audio("sounds/tom-4.mp3");
        break;
      default:
    }
    soundToPlay.play();
  });
}

document.firstElementChild.addEventListener("keypress", function (event) {
  switch (event.key) {
    case "w":
      var soundToPlay = new Audio("sounds/crash.mp3");
      break;
    case "a":
      var soundToPlay = new Audio("sounds/kick-bass.mp3");
      break;
    case "s":
      var soundToPlay = new Audio("sounds/snare.mp3");
      break;
    case "d":
      var soundToPlay = new Audio("sounds/tom-1.mp3");
      break;
    case "j":
      var soundToPlay = new Audio("sounds/tom-2.mp3");
      break;
    case "k":
      var soundToPlay = new Audio("sounds/tom-3.mp3");
      break;
    case "l":
      var soundToPlay = new Audio("sounds/tom-4.mp3");
      break;
    default:
      return;
  }
  soundToPlay.play();
});
