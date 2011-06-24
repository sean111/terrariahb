function loadPage(id) {
    $.mobile.changePage("#"+id,'none');
}

$(document).bind("mobileinit", function(){
    $.mobile.defaultPageTransition='none';
});
