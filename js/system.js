
$(document).ready(function() {
    //console.log('Ready event');
    //alert('DOM Ready');
    $.mobile.defaultPageTransition='none';
    $(document).bind('pagechange', function(event, data) {
        //console.log(data);
        var toPage=data.toPage;
        //console.log($(toPage));
        //console.log($(toPage).find('img'));
        /*$(toPage).find('img').each(function() {
            console.log(this);
            var name=$(this).attr('name');
            if(!empty(name)) {
                $(this).attr('src', name);
            }
        });*/
        loadImages(toPage);
    });
   /*document.addEventListener("menubutton", function() {
        location.href="index.html";
    }, false);
    document.addEventListener("searchbutton", function() {
        location.href="index.html#search";
    }, false);*/
    $('#searchButton').bind('click', function() {
        //console.log('Searching...');
        $('#searchResults').empty();
        $('#searchResults').hide();
        var s=cleanString($('#searchBox').val());
        //console.log("Search String: "+s);
        f=false;
        $('.object').each(function() {
            var n=cleanString($(this).attr('name'));
            //console.log({'n': n, 's': s});
            if(n.indexOf(s)!=-1) {
                //console.log(this);
                f=true;
                $('#searchResults').append(this);
            }
        });
        if(!f) {
            $('#searchResults').append('<li>No results found...</li>');
        }
        loadImages('#searchResults');
        $('#searchResults').listview("refresh");
        $('#searchResults').show();
    });
});

document.addEventListener('deviceready', function () {
    //alert('Device Ready');
    document.addEventListener('menubutton', function() {
        location.href='index.html#mainMenu';
    }, false);
    document.addEventListener('searchbutton', function() {
        location.href='index.html#search';
    }, false);
}, false);

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

cleanString=function(string) {
    string=string.toLowerCase();
    string=string.replace(" ",'');
    string=string.replace("'",'');
    string=string.replace("`",'');
    return string;
}

loadImages=function(target) {
    //console.log('Target: '+target);
    $(target).find('img').each(function() {
        var name=$(this).attr('name');
        //console.log('Name: '+name);
        if(!empty(name)) {
            $(this).attr('src', name);
            //console.log('Src:'+$(this).attr('src'));
        }
    });
}
