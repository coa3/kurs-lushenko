document.querySelector('.block-1').addEventListener("touchstart", myTouch);
document.querySelector('.block-1').addEventListener("touchend", myTouchEnd);
document.querySelector('.block-2').addEventListener("touchmove", myTouchMove);

function myTouch(event) { // клик мыши
    console.log(event);
    console.log('touch');
    document.querySelector('.out-1').innerHTML = event.touches.length; // кол- во одновременных нажатий пальцами
    document.querySelector('.out-2').innerHTML += 'work ';
}

function myTouchEnd(event) { // нажал и отпустил пальцем
    document.querySelector('.out-2').innerHTML += 'end';
}

function myTouchMove(event) { // нажать и потянуть
    event.preventDefault(); //  что бы блок не сдвигался, плюс в конце события return false;
    console.log(event);
    document.querySelector('.out-2').innerHTML += 'move ';
    return false;
}