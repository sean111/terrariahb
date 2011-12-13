$(document).ready(function() {
    $.mobile.defaultPageTransition='none';
   document.addEventListener("menubutton", function() {
        location.href="index.html";
    }, false);
    document.addEventListener("searchbutton", function() {
        location.href="index.html#search";        
    }, false);
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
        if(!f) {
            $('#searchResults').append('<li>No results found...</li>');
        }
        $('searchResults').listview("refresh");
        $('#searchResults').show();
    });
});


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
