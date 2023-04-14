let h2 = document.getElementById("clickCount");
h2.innerHTML = "Number of Clicks: " + localStorage.count;

function counterFunc() {
  if (typeof (Storage) !== "undefined") {
    if (localStorage.count) {
      localStorage.count = Number(localStorage.count) + 1;
    } else {
      localStorage.count = 1;
    }
    document.getElementById("clickCount").innerHTML = "Number of Clicks: " + localStorage.count;
  }
}
