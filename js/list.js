function numbering (n1, n2, n3) {
  var t = ""
  for (var i = 1; i <= (n1+n2+n3); i++) {
    var n = ("000" + i).slice(-3)
    t += "<td><a onclick=\"num(" + i + ")\" href=\"#\">[" + n + "]</a></td>";
    if ((i % 5) === 1) { t = "<tr>" + t};
    if ((i % 5) === 0) { t += "</tr>";
    if (i <= n1) {$("#s1").before(t); t = ""}
    else if (i <= n1+n2) {$("#s2").before(t); t = ""}
    else {$("#s3").before(t); t = ""}};
  }
  return (n1+n2+n3)
};
function num(pnum) {
  $("article").load("saj/"+ fname + "/" + pnum + ".html");
  page = pnum;
};
var pmax = numbering(30, 30, 40);
