// $(function () {
//   $("#visual .mainHanle").css({ transform: "translateX(-50%) scale(1)" }),
//     $("#visual .text").css({ transform: "scale(1)" }, 1000);
// });
$(function () {
  $("#visual .mainHanle").css({
    transform: "translateX(-50%) scale(1)",
  });

  setTimeout(function () {
    $("#visual .text").css({
      transform: "scale(1)",
    });
  }, 1000);
});
