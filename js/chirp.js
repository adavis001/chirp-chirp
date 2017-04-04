function chirp(n){
	if(n===0) {
		return " ";
	}
		return chirp(--n) + "chirp ";
  // FIX ME
}

$(document).ready(function(){
  $("#result").html(chirp(3));
});


