try{
     CLMPlayer.defineNoSwipeRegion("animatedSlide", 0, 0, window.innerWidth, window.innerHeight);
}catch(e){
      console.log('OCE environment not found');
}

 $('#slide02_img_plus').on(touchEvent, Tap(function (e) {
    $('#innerpage_popup_main').show();
         $('#slide02_header').hide();

 }, '', touchEvent));
 
 $('#slide_02_innerpage_cross').on(touchEvent, Tap(function (e) {
    $('#innerpage_popup_main').hide();
         $('#slide02_header').show();
 }, '', touchEvent));

 $('#slide_02_innerpage2_cross2').on(touchEvent, Tap(function (e) {
    $('#innerpage_popup_main2').hide();
         $('#slide02_header').show();

 }, '', touchEvent));