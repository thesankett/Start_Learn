try{
    CLMPlayer.defineNoSwipeRegion("animatedSlide", 0, 0, window.innerWidth, window.innerHeight);
}catch(e){
     console.log('OCE environment not found');
}