
function pageLoad() {
        // Hammer
        (function()  {
            var displaySlide = document.getElementById('animatedSlide');
            var swipeSpace = new Hammer(displaySlide);
            swipeSpace.on('swipeleft', function () {
                nextSlide();
            });
        swipeSpace.on('swiperight', function () {
            prevSlide();
        });
    })();  
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
    $('#innerpage_popup_main2').hide();
    $('#innerpage_popup_main').hide();
}

$('.closeRefPopup').on(touchEvent, Tap(function(e) {
    closeAllPopup();
}, '', touchEvent)); 


// hammer

function prevSlide(){ 
    if($('.mainContainer').css('display')=='block'){

    }
}

function nextSlide(){ 
    if($('.mainContainer').css('display')=='block'){
        slideOpen(4, '01_index.html');
    }
}

