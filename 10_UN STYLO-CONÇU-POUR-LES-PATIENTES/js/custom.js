
function pageLoad() { 
}

function pageLeave() { 
    closeAllPopup();

}

var allfunctionDisappearing = function allfunctionDisappearing() {
    pageLeave();
}

var allfunctionAppearing = function allfunctionAppearing() {
    pageLoad();
}
onviewdisappearing('', allfunctionDisappearing);
onviewappearing('', allfunctionAppearing);




$('.popupCLick, .dataLink').on(touchEvent, Tap(function (e) {
    if (!$(this).attr('data-Link')) {
         openPopup($(this).attr('data-Popup'));
    } else {
        console.log($(this).attr('data-Link'));
         slideOpen($(this).attr('data-Link'), '01_index.html');
    }
}, '', touchEvent));


/*****************ref********************* */
$('#ref_pop').html(popup);

function openPopup(popupName){
    closeAllPopup();
    $('.'+popupName).fadeIn();
}

function closeAllPopup(){
    $('.refPopup').fadeOut();
}

$('.closeRefPopup').on(touchEvent, Tap(function(e) {
    closeAllPopup();
}, '', touchEvent)); 