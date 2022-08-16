document.getElementById('stt-select').addEventListener("click", function(e){
  let elem = e.target;
  if(elem.classList.contains("stt-item")){
	  alert('box clicked');
  }
});
