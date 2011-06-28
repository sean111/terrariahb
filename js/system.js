var currentPage='';
if("onhashchange" in window) {
    window.onhashchange=function(event) {
        changePage();
    }
}
else {
    window.setInterval(function () {
        if(location.hash != currentPage) {
            changePage();
        }
    }, 100);
    
}
$(window).bind('load', function(e) {
    show('#mainMenu');
    currentPage='#mainMenu';        
})

function hide(div) {
    $(div).css({display: 'none'});
}

function show(div) {
    $(div).css({display: 'block'});
    $(div).css('height',window.innerHeight+'px');
}

$(window).bind('orientationchange', function() {
    (currentPage).css('height',window.innerHeight+'px');
});

empty=function(cvar) {
    if(cvar=="" || cvar==null || cvar=="undefined") {
        return true;
    }
    return false;
}

changePage=function() {
    hash=location.hash;
    if(empty(hash)) {
        hash='#mainMenu';
    }
    hide(currentPage);
    show(hash);
    currentPage=hash;
}

