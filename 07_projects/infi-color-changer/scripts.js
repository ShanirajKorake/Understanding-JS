function createRandomeColor() {
    const hex = '0123456789ABCDEF'
    let color = '#'
    for (let index = 0; index < 6; index++) {
        color += hex[Math.floor(Math.random()*16)];
    }
    return color;
};

let intervalID;
function startCh() {
    function changer() {
        document.body.style.backgroundColor = createRandomeColor()
    }
    if(!intervalID){
        intervalID = setInterval(changer,1000)
    }
}
function stopCh() {
    clearInterval(intervalID)
    intervalID=null;
}
document.querySelector('#start').addEventListener('click',startCh)
document.querySelector('#stop').addEventListener('click',stopCh)