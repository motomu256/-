function changeTab(tabName){
	jQuery('#tab1').css('display', 'none');
	jQuery('#tab2').css('display', 'none');
	jQuery(tabName).css('display', 'block');
}

$(function(){
	changeTab('#tab1');
});