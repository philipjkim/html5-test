/* Shake */

function shakeleft(elementId) {
  document.getElementById(elementId).style.position = "relative";
  document.getElementById(elementId).style.left = "5px";
  timer = setTimeout("shakeright('" + elementId + "')", 10);
}

function shakeright(elementId) {
  document.getElementById(elementId).style.left = "0";
  timer = setTimeout("shakeleft('" + elementId + "')", 10);
}

function stoptimer() {
  clearTimeout(timer);
}
