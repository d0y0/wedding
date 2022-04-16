function showPopup(hasFilter, eeeeee, bbbbbb, cccccc) {

  const popup = document.querySelector('#popup');

  $("#eeeeee").text(eeeeee);
  $("#bbbbbb").text(bbbbbb);
  $("#cccccc").text(cccccc);
  popup.classList.remove('hide');
};

function closePopup() {
  const popup = document.querySelector('#popup');
  popup.classList.add('hide');
};

function copyText() {
  //
  var p = document.createElement("p");
  // p.style.display = 'none';
  document.body.appendChild(p);
  p.innerText = document.querySelector('#cccccc').innerText
  var text = document.createRange();
  text.selectNode(p);
  window.getSelection().addRange(text)
  document.execCommand('Copy');
  document.body.removeChild(p)
  alert(p.innerText + " 복사되었습니다.");
};
