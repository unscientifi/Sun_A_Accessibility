var audioContent = document.querySelector('#audioSrc')


function revealText() {
    document.querySelector('.audioText').style.display='block';
    //autoplay when click the reveal text button
    audioContent.play();
}
  
function play() {
    audioContent.play();
}

function pause() {
    audioContent.pause();
}