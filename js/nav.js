function sajmat() {
  $("article").load("saj/materials.html")
};
function golist(date) {
  $("article").load("saj/list.html")
  fname = date
};
function dListing (date, did) {
  t = "<li><a onclick=\"golist("+date+")\" href=\"#\">" + date + "</a></li>"
  $(did).before(t)
  }

var y19 = ["#y19", "190427", "190303"]
var y18 = ["#y18", "180819", "180428", "180304"]
var y17 = ["#y17", "170826", "170507", "170305"]
var y16 = ["#y16", "160821", "160508", "160306"]
var ytest = [y19, y18, y17, y16]
for (var i = 0; i < ytest.length; i++) {
  for (var j = 1; j < ytest[i].length; j++) {
    dListing(ytest[i][j],ytest[i][0]);
  };
  var newid = ytest[i][0].replace("#","")
  document.getElementById(newid).remove();
};
