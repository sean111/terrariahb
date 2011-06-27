var currentDiv='';
x$(window).on('load', function(e) {
    x$('[data-role="page"]').each(function (e, i, x) { 
        //if(x$(e).attr('data-role')=='page') {
            x$(e).css({visibility: 'hidden', display: 'none'});
        //}
    });
    x$('#mainMenu').css({visibility: 'visible', display: 'block'});
    currentDiv='#mainMenu';
})

function hide(div) {
    x$(div).css({visibility: 'hidden', display: 'none'});
}

function show(div) {
    x$(div).css({visibility: 'visible', display: 'block'});
}

window.onpopstate=function(event) {
    hash=location.hash;
    console.log(hash);
    if(empty(hash)) {
        hash='#mainMenu';
    }
    hide(currentDiv);
    show(hash);
    currentDiv=hash;
}

empty=function(cvar) {
    if(cvar=="" || cvar==null || cvar=="undefined") {
        return true;
    }
    return false;
}


