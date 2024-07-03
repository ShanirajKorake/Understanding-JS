const clock = document.getElementById("clock")
const div = document.createElement('div')
div.id="clock"
setInterval(function (){
    let date = new Date();
    
    div.textContent= date.toLocaleTimeString()
    clock.replaceWith(div)
}, 1000)