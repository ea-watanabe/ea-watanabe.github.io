#let select = document.getElementsByClassName('stt-select')
#select.onclick = function() { console.log('取得しました')}

document.getElementById('stt-select').addEventListener("click", function(e){
  let elem = e.target;
  if(elem.classList.contains("stt-item")){
	  alert('box clicked');
  }
});
