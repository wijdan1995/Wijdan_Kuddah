$(document).ready(function () {
  $('img').click(function() {
    var tmp = $(this).attr("src");
    $(this).attr("src", $(this).attr("data-alt-src"));
    $(this).attr("data-alt-src", tmp);
  });
});
