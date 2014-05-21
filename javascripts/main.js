// JavaScript Document
$(document).ready(function(e) {

});



function highlight(line, toggle){
	if( !toggle ){
	$('#solution').css('color', '#A4A4A4');
	$(line).css({'color':'#333333','font-weight':'bold'});
	}else{
	//$('#solution').css('color', '#333333');
	$('#solution span').css({'color':'inherit','font-weight':'normal'});
	}
}