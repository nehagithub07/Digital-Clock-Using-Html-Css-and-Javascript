const clock = document.getElementsByClassName('box')[0];


setInterval(function(){
    let date = new Date();
    clock.innerHTML = date.toLocaleTimeString();
}, 1000)
