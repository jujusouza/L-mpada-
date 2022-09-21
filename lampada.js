const turnon = document.getElementById('turnon');
const turnoff = document.getElementById('turnoff');
const lamp = document.getElementById('lamp');

function islampBroken() {
    return lamp.src.indexOf('quebrada') > -1
}

function lampon() {

    if (!islampBroken()) {
        lamp.src = './img/ligada.png';

    }
}

function lampoff() {
    if (!islampBroken()) {
        lamp.src = './img/desligada.png';
    }

}
function lampBroken() {
    lamp.src = './img/quebrada.png';

}

turnon.addEventListener('click', lampon);
turnoff.addEventListener('click', lampoff);

lamp.addEventListener('dblclick', lampBroken);