document.addEventListener('DOMContentLoaded', function(){

function injectSVG() {

setTimeout(function(){
// SVG checkmark
var SVGcheckmark = document.querySelectorAll('.svg-checkmark');

for (i = 0; i < SVGcheckmark.length; ++i) {
SVGcheckmark[i].innerHTML = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"width="512px" height="512px" viewBox="0 0 512 512" enable-background="new 0 0 512 512" xml:space="preserve"><path id="check-mark-4-icon" d="M462,256c0,113.771-92.229,206-206,206S50,369.771,50,256S142.229,50,256,50S462,142.229,462,256zM422,256c0-91.755-74.258-166-166-166c-91.755,0-166,74.259-166,166c0,91.755,74.258,166,166,166C347.755,422,422,347.741,422,256zM338.224,167.637L222.108,283.753l-50.296-50.31l-37.296,37.303l87.593,87.617l153.428-153.438L338.224,167.637z"/></svg>';
}


}, 200)

}

injectSVG();

});