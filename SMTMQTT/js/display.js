function display(iddisplay, value) {
  return (document
    .querySelector(iddisplay)
    .getSVGDocument()
    .getElementById("tspan33467-8-8").innerHTML = value);
}
