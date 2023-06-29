function water(idIframe, idwater, display) {
    return document
      .querySelector(idIframe)
      .getSVGDocument()
      .getElementById(idwater)
      .setAttribute("style", display);
  }