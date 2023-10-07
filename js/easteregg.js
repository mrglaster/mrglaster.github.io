var allowedKeys = {
  73: 'I',
  68: 'D',
  81: 'Q',
};
var IDDQDCode = ['I', 'D', 'D', 'Q', 'D'];
var IDDQDCodePosition = 0;
document.addEventListener('keydown', function(e) {
  var key = allowedKeys[e.keyCode];
  var requiredKey = IDDQDCode[IDDQDCodePosition];
  if (key == requiredKey) {
    IDDQDCodePosition++;
    if (IDDQDCodePosition == IDDQDCode.length) {
      activateCheats();
      IDDQDCodePosition = 0;
    }
  } else {
    IDDQDCodePosition = 0;
  }
});

function activateCheats() {
	window.location.href = 'easteregg.html';
}