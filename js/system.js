var currentDiv='';
$(window).bind('load', function(e) {
    $('[data-role="page"]').each(function () { 
        //if(x$(e).attr('data-role')=='page') {
            $(this).css({display: 'none'});
        //}
    });
    show('#mainMenu');
    currentDiv='#mainMenu';    
})

function hide(div) {
    $(div).css({display: 'none'});
}

function show(div) {
    $(div).css({display: 'block'});
    $(div).css('height',window.innerHeight+'px');
}

$(window).bind('orientationchange', function() {
    (currentDiv).css('height',window.innerHeight+'px');
});

window.onhashchange=function(event) {
    hash=location.hash;
    //console.log(hash);
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


