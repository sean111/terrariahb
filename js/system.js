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
    document.addEventListener("menubutton", function() {
        location.href="index.html";
    }, false);
    document.addEventListener("searchbutton", function() {
        location.href="index.html#search";        
    }, false);
    var url=window.location.pathname;
    var fName=url.substring(url.lastIndexOf('/')+1);
    var dName=fName.substring(0,fName.lastIndexOf('.'));
    console.log(dName);
    if(dName=='index' || empty(dName)) {
        if(empty(location.hash)) {
            show('#mainMenu');
            currentPage='#mainMenu';  
        }
    }
    else {
        loadImages('#'+dName);
        show('#'+dName);
        currentPage='#'+dName;
    }
    $('#searchBox').bind('click', function() {
        $('#searchBox').val('');
    });
    $('#searchButton').bind('click', function() {
        console.log('Searching...');
        $('#searchResults').empty();
        $('#searchResults').hide();
        var s=cleanString($('#searchBox').val());
        f=false;
        $('.object').each(function() {
            var n=cleanString($(this).attr('name'));
            console.log({'n': n, 's': s});
            if(n.indexOf(s)!=-1) {
                console.log(this);
                f=true;
                $('#searchResults').append(this);
            }
        });
        if(f) {
            loadImages('#search');
        }
        else {
            $('#searchResults').append('<li>No results found...</li>');
        }
        $('#searchResults').show();
    });
});

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
    if(cvar=="" || cvar===null || cvar=="undefined") {
        return true;
    }
    return false;
}

changePage=function() {
    hash=location.hash;
    console.log(hash);
    if(empty(hash)) {
        hash='#mainMenu';
    }
    if($(hash).html()===null) {
        //alert("Can't find that page!");
        //window.history.back(); //Reset the hash to avoid any errors        
        if(hash=='#mainMenu') {
            location.href='index.html';
        }
        else {
            location.href=hash.substring(1)+".html";
        }
    }
    else {
        loadImages(hash);
        hide(currentPage);
        show(hash);
        currentPage=hash;
    }
}

loadImages=function(hash) {
   $(hash+' img').each(function() {
        var name=$(this).attr('name');
        if(!empty(name)) {
            $(this).attr('src', name);
        }
    }); 
}

cleanString=function(string) {
    string=string.toLowerCase();
    string=string.replace(" ",'');
    string=string.replace("'",'');
    string=string.replace("`",'');
    return string;
}
