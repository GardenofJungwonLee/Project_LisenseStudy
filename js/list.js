function numbering (n1, n2, n3) {
  for (var i = 1; i <= (n1+n2+n3); i++) {
    t = "<a onclick=\"num(" + i + ")\" href=\"#\">[" + i + "]\t</a>"
    if (i % 5 === 0) { t += "<br>"}
    if (i <= n1) {
      $("#s2").before(t)
    }
    else if (i <= n1+n2) {
      $("#s3").before(t)
    }
    else {
      $("#end").before(t)
    }
  }
  return (n1+n2+n3)
};
function num(pnum) {
  $("article").load("saj/"+ fname + "/" + pnum + ".html");
  page = pnum;
};
var pmax = numbering(30, 30, 40);
