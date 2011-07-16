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
    document.addEventListener("deviceready", function() {
        document.addEventListener("menubutton", function() {
            location.hash="#mainMenu";
        }, false);        
        show('#mainMenu');
        currentPage='#mainMenu'; 
    }, false);                            
})

function hide(div) {
    $(div).css({display: 'none'});
}

function show(div) {
    $(div).css({display: 'block'});
    if($(div).height()<window.innerHeight) {
        $(div).css('height',window.innerHeight+'px');
    }
}

$(window).bind('orientationchange', function() {
    if($(div).height()<window.innerHeight) {
        $(currentPage).css('height',window.innerHeight+'px');
    }
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
    if($(hash).html()==null) {
        alert("Can't find that page!");
        window.history.back() //Reset the hash to avoid any errors
    }
    else {
        $(hash+' img').each(function() {
           var name=$(this).attr('name');
           if(!empty(name)) {
               $(this).attr('src', name);               
           } 
        });
        hide(currentPage);
        show(hash);
        currentPage=hash;
    }
}

