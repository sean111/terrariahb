// prevent console errors on browsers without console
if (!window.console) {
    window.console = {};
    window.console.log = function(){};
}
function loadPage(id) {
    $.mobile.changePage("#"+id);
}
function loadVersionNotes() {
    $.mobile.changePage("#versionNotes");
}
function loadItemList() {
    $('#itemlv').empty();
    $('#itemlv').listview();    
    $.each(item_cats, function(key, val) {        
       $('#itemlv').append("<li data-role='list-divider' role='heading'>"+key+"</li>");
       $.each(val,function(key, val) {
          img=items[val]['img'];           
          $('#itemlv').append("<li><img class='ui-li-icon' src='"+img+"'><a href='javascript:loadItem(\""+val+"\");'>"+val+"</a></li>"); 
       });
    });
    $('#itemlv').listview("refresh");
    $.mobile.changePage("#itemList");
}

function loadItem(item) {
    var itemData=items[item];
    $('#item_name').html(item);
    $('#item_img').attr('src',itemData['img']);
    $('#item_dmg').html(itemData['stats']['dmg']);
    $('#item_power').html(itemData['stats']['power']);
    $('#item_placeable').html(itemData['stats']['placeable']);
    $('#item_max_stack').html(itemData['stats']['max_stack']);
    $('#item_speed').html(itemData['stats']['speed']);
    if(itemData['crafting']) {
        $('#item_craft_table').css('display','block');
        if(itemData['crafting']['tool']) {
            string='<img src='+items[itemData['crafting']['tool']]['img']+'>'+itemData['crafting']['tool'];
        }
        else {
            string='None';
        }
        $('#item_craft_tool').html(string);
        $('#item_craft').empty();
        $.each(itemData['crafting']['ingredients'], function(key, val) {
            $('#item_craft').append('<tr><td><img src='+items[val['name']]['img']+'>'+val['name']+'</td><td>'+val['amt']+'</td></tr>');
        });
    }
    else {
        $('#item_craft_table').css('display','none');
    }
    $.mobile.changePage("#item");
}

//DATA Section
var item_cats={
    'Tools': {
        0: 'Copper Pickaxe',
        1: 'Iron Pickaxe',
        2: 'Silver Pickaxe'
    },
    'Furniture': {
        0: 'Iron Anvil',
        1: 'Work Bench'
    }
}
var items={
    'Copper Pickaxe': {
        'img': 'img/Copper_Pickaxe.png',
        'stats': {
            'dmg': 5,
            'power': 35,
            'placeable': 'No',
            'max_stack': 1,
            'speed': 'Average'
        },
        'crafting': {
            'tool': 'Iron Anvil',
            'ingredients': {
                0: {
                    'name': 'Copper Bar', 
                    'amt': 12
                },
                1: {
                    'name': 'Wood', 
                    'amt': 4
                }
            },
            'amt': 1
        }
    },
    'Iron Pickaxe': {
        'img': 'img/Iron_Pickaxe.png',
        'stats': {
            'dmg': 5,
            'power': 45,
            'placeable': 'No',
            'max_stack': 1,
            'speed': 'Average'
        },
        'crafting': {
            'tool': 'Iron Anvil',
            'ingredients': {
                0: {
                    'name': 'Iron Bar',
                    'amt': 12
                },
                1: {
                    'name': 'Wood',
                    'amt': 4
                }  
            },
            'amt': 1
        }
    },
    'Silver Pickaxe': {
        'img': 'img/Silver_Pickaxe.png',
        'stats': {
            'dmg': 6,
            'power': 45,
            'placeable': 'No',            
            'max_stack': 1,
            'speed': 'Average'
        },
        'crafting': {
            'tool': 'Iron Anvil',
            'ingredients': {
                0: {'name': 'Silver Bar','amt': 12},
                1: {'name':'Wood','amt': 4}
            },
            'amt': 1
        }
    },
    'Iron Anvil': {
        'img': 'img/Iron_Anvil.png',
        'stats': {
            'dmg': 'N/A',
            'power': 'N/A',
            'placeable': 'Yes',
            'max_stack': 99,
            'speed': 'N/A'
        },
        'crafting': {
            'tool': 'Work Bench',
            'ingredients': {
                0: {'name':'Iron Bar','amt': 5}
            },
            'amt': 1
        }
    },
    'Wood': {
        'img': 'img/Wood.png',
        'stats': {
            'dmg': 'N/A',
            'power': 'N/A',
            'placeable': 'Yes',
            'max_stack': 250,
            'speed': 'N/A'
        }
    },
    'Work Bench': {
        'img': 'img/Work_Bench.png',
        'stats': {
            'dmg': 'N/A',
            'power': 'N/A',
            'placeable': 'Yes',
            'max_stack': 99,
            'speed': 'N/A'
        },
        'crafting': {
            'ingredients': {
                0: {'name':'Wood','amt': 10}
            },
            'amt': 1
        }
    }
}