"use strict";

var input = document.getElementById('link-input');
var linkForm = document.getElementById('link-form');
var errMsg = document.getElementById('err-msg'); // Validate a URL

function validURL(str) {
  var pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
  '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + '((\\d{1,3}\\.){3}\\d{1,3}))' + '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + '(\\?[;&a-z\\d%_.~+=-]*)?' + '(\\#[-a-z\\d_]*)?$', 'i');
}

function formSubmit(e) {
  e.preventDefault();

  if (input.value === '') {
    errMsg.innerHTML = 'Please enter something';
    input.classList.add('border-red');
  } else if (!validURL(input.value)) {
    errMsg.innerHTML = 'Please enter a valid URL';
    input.classList.add('border-red');
  } else {
    errMsg.innerHTML = '';
    input.classList.remove('border-red');
    alert('Success');
  }
}
//# sourceMappingURL=script.dev.js.map
