/* Shake */

function shakeleft(elementId) {
  var id = '#' + elementId
  $(id).css('position', 'relative');
  $(id).css('left', '5px');
  timer = setTimeout("shakeright('" + elementId + "')", 10);
}

function shakeright(elementId) {
  var id = '#' + elementId
  $(id).css('left', '0');
  timer = setTimeout("shakeleft('" + elementId + "')", 10);
}

function stoptimer() {
  clearTimeout(timer);
}
