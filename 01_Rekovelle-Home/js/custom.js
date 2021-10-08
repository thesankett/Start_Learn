
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




