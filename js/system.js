// prevent console errors on browsers without console
if (!window.console) {
    window.console = {};
    window.console.log = function(){};
}
function loadPage(id) {
    $.mobile.changePage("#"+id);
}
