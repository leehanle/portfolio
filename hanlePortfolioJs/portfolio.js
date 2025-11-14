/*비주얼 구름 둥둥*/
$(function () {
  $("#visual .mainHanle").css({
    transform: "translateX(-50%) scale(1)",
  });

  setTimeout(function () {
    $("#visual .text").css({
      transform: "scale(1)",
    });
  }, 1000);
  /*문이 열리네용*/
  $("#container .intro").on("mouseenter", function () {
    $("#container .intro .wBox1").stop().animate({ left: "-1200px" }, 2000);
  });
  $("#container .intro").on("mouseleave", function () {
    $("#container .intro .wBox1").stop().animate({ left: "0px" }, 2000);
  });
  $("#container .intro").on("mouseenter", function () {
    $("#container .intro .wBox2").stop().animate({ right: "-1200px" }, 2000);
  });
  $("#container .intro").on("mouseleave", function () {
    $("#container .intro .wBox2").stop().animate({ right: "0px" }, 2000);
  });
});
