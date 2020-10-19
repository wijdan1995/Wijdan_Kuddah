// console.log("Test");

$(document).ready(function () {
  $(".paragraph").click(function () {
    $(this).before('<a href="#">Before</a>');
    $(this).after('<a href="#">After</a>');
    $(this).append('Append');
    

  });
  $(".hide").click(function () {
    $(".paragraph").hide();
    $(".show").removeAttr("disabled");
    $(".hide").attr("disabled", true);
  });
  $(".show").click(function () {
    $(".paragraph").show();
    // $(".hide").attr("disabled");
    $(".show").attr("disabled", true);
    $(".hide").removeAttr("disabled");
  });
  $(".toggle").click(function () {
    $(".paragraph").toggle();
    // console.log("Test");
    // console.log($(".hide").attr("disabled"));
    // console.log($(".show").attr("disabled") == "disabled");
    // console.log($(".paragraph"));

    if ($("p").css("display") == "none") {
      $(".show").attr("disabled", false);
      $(".hide").attr("disabled", true);
    } else {
      $(".show").attr("disabled", true);
      $(".hide").attr("disabled", false);
    }
  });
  $(".change-text").click(function () {
    $(".paragraph").text($(this).val());
  });
  $(".add-class").click(function () {
    $(" .paragraph").addClass("red");
  });
  $(".remove-class").click(function () {
    $(" .paragraph").removeClass("red");
  });
  $(".toggle-class").click(function () {
    $(" .paragraph").toggleClass("red");
  });
  $(".slide-down").click(function () {
    $(" .paragraph").slideDown('slow');
  });
  $(".slide-up").click(function () {
    $(" .paragraph").slideUp('slow');
  });
  $(".slide-toggle").click(function () {
    $(" .paragraph").slideToggle('slow');
  });
  $(".fade-in").click(function () {
    $(" .paragraph").fadeIn('slow');
  });
  $(".fade-out").click(function () {
    $(" .paragraph").fadeOut('slow');
  });

  $("button").click(function () {
    $("#text").text($(this).text());
    $("#val").text($(this).val());
    $("#html").html(
      //function () {
      //   var emphasis = "<em>" + $("p").length + " paragraphs!</em>";
      //   return "All new content for " + emphasis + "";
      // }
      $(this)[0].outerHTML
    );
    // console.log($("p"));
    // console.log($(this).html());
    // console.log($(this)[0].outerHTML);
  });
});
