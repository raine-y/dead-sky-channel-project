function randomString(Length) {
  var text = "";
  var possible =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()_+=";
  for (var i = 0; i < Length; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  return text;
}

function changingRandomString(Length) {
  setInterval(function () {
    var elements = document.getElementsByClassName("random");
    for (var i = 0; i < elements.length; i++) {
      elements[i].innerHTML = randomString(Length);
    }
  }, 25);
}

/* changingRandomString(10); */