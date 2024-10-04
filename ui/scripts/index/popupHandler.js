function instaFade() {
  document.getElementById("goInsideWrapper").style.display = "block";
  document.getElementById("goInsideWrapper").style.opacity = "1";
  document.getElementById("introScreen").style.display = "none";
}

function fadeLoad() {
  document.getElementById("popupContainer").className = "fadeOut";

  function wait(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
  }

  wait(1200).then(
    () => (document.getElementById("introScreen").className = "fadeOut")
  );
  wait(1850).then(
    () => (document.getElementById("goInsideWrapper").className = "fadeIn")
  );
  wait(2200).then(
    () => (document.getElementById("introScreen").style.display = "none")
  );
  wait(1700).then(
    () => (document.getElementById("goInsideWrapper").style.display = "block")
  );
  wait(2400).then(() => console.log("..."));
  wait(3000).then(() =>
    console.log(
      "what are you doing here? this is not for you, dont judge my promises..."
    )
  );
}

function askAgain() {
  document.getElementById("popupContentText").innerHTML = "Please?";
  document.getElementById("pleaResponse").style.display = "block";
  document.getElementById("plea").style.display = "none";
}

function notCool() {
  document.getElementById("popupContentText").innerHTML = "...";
  document.getElementById("popupContentBtn").style.display = "none";

  function wait(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
  }

  wait(100).then(
    () => (document.getElementById("popupContainer").className = "fadeOut")
  );
  wait(1200).then(
    () => (document.getElementById("introScreen").className = "fadeOut")
  );
  wait(1850).then(
    () => (document.getElementById("goInsideWrapper").className = "fadeIn")
  );
  wait(2200).then(
    () => (document.getElementById("introScreen").style.display = "none")
  );
  wait(1700).then(
    () => (document.getElementById("goInsideWrapper").style.display = "block")
  );

  wait(2400).then(() => console.log("..."));

  wait(3000).then(() => console.log("a**hole"));
}
