let x = '2304';
//let x = '230k';

function f19() {
    let ar = x / 1;
    ar = [...x];
    console.log(ar);
    for (let i = 0; i < ar.length; i++) {
        if (Number(ar[i]) === true && ar.length == 4) {
            console.log(true);
            return true;
        } else {
            console.log(false);
            return false;
        }
    }
}
document.querySelector('.b').onclick = f19;