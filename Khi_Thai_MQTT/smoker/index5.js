$(
  (function () {
    "use strict";
    var a = 0;
    $("#tv").hide();
    for (; a < 25; a += 1) {
      setTimeout(function b() {
        var a = Math.random() * 1e3 + 5e3,
          c = $("<div />", {
            class: "smoke",
            css: {
              left: Math.random() * 60,
              backgroundSize: "contain",
              width: Math.random() * 200,
              height: Math.random() * 300,
            },
          });
        $(c).addClass("animated");
        $(c).addClass("zoomIn");
        $(c).addClass("rollOut");
        $(c).appendTo(".viewport2");

        $.when(
          $(c).animate(
            {},
            {
              duration: a / 4,
              easing: "linear",
              queue: false,
              complete: function () {
                $(c).animate(
                  {},
                  {
                    duration: a / 3,
                    easing: "linear",
                    queue: false,
                  }
                );
              },
            }
          ),
          $(c).animate(
            {
              bottom: $(".viewport2").height(),
              left: $(".viewport2").height() - 70,
            },
            {
              duration: a,
              easing: "linear",
              queue: false,
            }
          )
        ).then(function () {
          $(c).remove();
          b();
        });
      }, Math.random() * 3e3);
    }
    $("body").keypress(function () {
      $("body").addClass("fadeOut");
      setTimeout(function () {
        $("#tv").show();
      }, 1000);

      console.log("Handler for .keypress() called.");
    });
  })()
);
