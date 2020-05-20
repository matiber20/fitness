$(document).ready(function(){
	$("li").click(function(){
		$(this).next().slideToggle(300);
});

});