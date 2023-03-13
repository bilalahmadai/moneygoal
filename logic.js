var year = 10000;
function calculate() {
  var dollar = document.getElementById("dollar").value;

  var year = parseFloat(document.getElementById("year").value);
  var days = document.getElementById("days").value;
  var hour = parseFloat(document.getElementById("hours").value);
  var lucky = parseFloat(document.getElementById("lucky").value);
  var m = year / 12;
  var w = m / 4;
  var d = w / days;
  var h = d / hour;
  var prodictive_hour = h * lucky;
  var val;
  function convertor(val, dollar) {
    var result = val * dollar;

    return Number(result.toFixed(2));
  }
  document.getElementById("myDollar").innerHTML =
    "$1 = " + dollar + " /- Rs";
  document.getElementById("myhour").innerHTML = "$" + Number(h.toFixed(2));
  document.getElementById("myDay").innerHTML = "$" + Number(d.toFixed(2));
  document.getElementById("myWeek").innerHTML = "$" + Number(w.toFixed(2));
  document.getElementById("myMonth").innerHTML = "$" + Number(m.toFixed(2));
  document.getElementById("myYear").innerHTML =
    "$" + Number(year.toFixed(2));
  document.getElementById("myProductiveHour").innerHTML =
    "Your Productive Hours Income $" +
    Number(prodictive_hour.toFixed(2)) +
    "(" +
    convertor(prodictive_hour, dollar) +
    " /- Rs)";

  document.getElementById("myhour_Rs").innerHTML =
    convertor(h, dollar) + "/- Rs";
  document.getElementById("myDay_Rs").innerHTML =
    convertor(d, dollar) + "/- Rs";
  document.getElementById("myWeek_Rs").innerHTML =
    convertor(w, dollar) + "/- Rs";
  document.getElementById("myMonth_Rs").innerHTML =
    convertor(m, dollar) + "/- Rs";
  document.getElementById("myYear_Rs").innerHTML =
    convertor(year, dollar) + "/- Rs";
  //   document.getElementById("my").innerHTML = "$" + dollar;

  //   change box
  var x = document.getElementById("InputForm");
  var r = document.getElementById("resultBox");

  if (x.style.display === "none") {
    x.style.display = "block";
    r.style.display = "none";
  } else {
    x.style.display = "none";
    r.style.display = "block";
  }
}

function inputBox() {
  var x = document.getElementById("InputForm");
  var r = document.getElementById("resultBox");

  if (x.style.display === "block") {
    x.style.display = "none";
    r.style.display = "block";
  } else {
    x.style.display = "block";
    r.style.display = "none";
  }
}
function myTheme() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}
