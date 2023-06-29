// param không cần thiết thì k truyền tham số vào hoặc để trống
function autoClick() {
  document.getElementById("container").click();
}
autoClick();
function display(
  iddisplay,
  value,
  colorvalue,
  colorbackground,
  fontfamily,
  fontSize
) {
  return (
    (document
      .querySelector(iddisplay)
      .getSVGDocument()
      .getElementById("tspan33467-8-8").innerHTML = value),
    document
      .querySelector(iddisplay)
      .getSVGDocument()
      .getElementById("tspan33467-8-8")
      .setAttribute("fill", colorvalue),
    document
      .querySelector(iddisplay)
      .getSVGDocument()
      .getElementById("rect3056-5-9-6")
      .setAttribute("fill", colorbackground),
    document
      .querySelector(iddisplay)
      .getSVGDocument()
      .getElementById("tspan33467-8-8")
      .setAttribute("font-family", fontfamily),
    document
      .querySelector(iddisplay)
      .getSVGDocument()
      .getElementById("tspan33467-8-8")
      .setAttribute("font-size", fontSize)
  );
}

function led(idled, color) {
  return document
    .querySelector(idled)
    .getSVGDocument()
    .getElementById("path1060-6-4-4")
    .setAttribute("fill", color);
}
function led_c(idled, color, colortext) {
  return (
    document
      .querySelector(idled)
      .getSVGDocument()
      .getElementById("path1060-6-4-4")
      .setAttribute("fill", color),
    document
      .querySelector(idled)
      .getSVGDocument()
      .getElementById("tspan11692")
      .setAttribute("fill", colortext)
  );
}
