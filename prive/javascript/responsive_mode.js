
function is_touch_device() {
 return (('ontouchstart' in window)
      || (navigator.MaxTouchPoints > 0)
      || (navigator.msMaxTouchPoints > 0));
}
 
if (!is_touch_device()) {
	document.getElementById('touchOnly').style.display='none';
}
