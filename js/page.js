$(document).ready(function(){
    $("#move").load("move.html")
});
function prev() {
  if (page !== 1) {
  page -= 1
  $("article").load("saj/"+ fname + "/" + page + ".html")
  }
};
function next() {
  if (page !== pmax) {
  page += 1
  $("article").load("saj/"+ fname + "/" + page + ".html")
  }
};
