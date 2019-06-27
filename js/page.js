$(document).ready(function(){
    $("#move").load("move.html")
});
function prev() {
  if (page !== 1) {
  page -= 1
  $("article").load("saj/"+ fname + "/" + page + ".html")
  }
  else {alert("이전 페이지가 없습니다!")}
};
function next() {
  if (page !== pmax) {
  page += 1
  $("article").load("saj/"+ fname + "/" + page + ".html")
  }
  else {alert("최대 페이지!")}
};
