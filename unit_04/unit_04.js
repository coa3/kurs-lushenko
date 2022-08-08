// Task 1
// При нажатии (click) на .b-1 запускайте f1, которая выводите в .out-1 число 1.

function f1() {
    document.querySelector('.out-1').innerHTML = 1;
}

document.querySelector('.b-1').onclick = f1;


// Task 2
// При нажатии (click) на .i-2 запускайте f2, которая выводите в .out-2 число 2. 
//Т.е. как видите, мы можем повесить клик на любой элемент.

function f2() {
    document.querySelector('.out-2').innerHTML = 2;
}

document.querySelector('.i-2').onclick = f2;


// Task 3
//  При нажатии (click) на .p-3 запускайте f3, которая выводите в .out-3 число 3. 
//Т.е. как видите, мы можем повеcить клик на любой элемент.

function f3() {
    document.querySelector('.out-3').innerHTML = 3;
}

document.querySelector('.p-3').onclick = f3;


// Task 4. 
// При клике по кнопке .b-4 запускается функция f4. Функция проверяет состояние .i-4 и 
//если он checked - выводит true, если не выбран - false. Вывод везде в задачах, где не 
//указано другое, осуществляется в div.out-номер задачи. В данном случае - div.out-4
let out4 = document.querySelector('div.out-4');

function f4() {
    let myCheckBox4 = document.querySelector('.i-4');
    if (myCheckBox4.checked) {
        out4.innerHTML = true;
    } else {
        out4.innerHTML = false;


    }
}

document.querySelector('.b-4').onclick = f4;

// Task 5.
// При клике по кнопке .b-5 запускается функция f5. Функция проверяет состояние .i-5 и 
//если он checked - выводит value данного элемента, если не выбран - false. Вывод везде в задачах,
// где не указано другое, осуществляется в div.out-номер задачи. В данном случае div.out-5
let out5 = document.querySelector('div.out-5');

function f5() {
    let myCheckBox5 = document.querySelector('.i-5');
    if (myCheckBox5.checked) {
        out5.innerHTML = myCheckBox5.value;
    } else {
        out5.innerHTML = false;

    }
}

document.querySelector('.b-5').onclick = f5;


// Task 6. 
// При нажатии на кнопку выводите value из input.i-6 в div.out-6. Обратите внимание, что даже
// скрытый hidden input - нам не помеха. 
let out6 = document.querySelector('.out-6');

function f6() {
    let myCheckBox6 = document.querySelector('.i-6');

    out6.innerHTML = myCheckBox6.value;

}

document.querySelector('.b-6').onclick = f6;

// Task 7.
// При нажатии на кнопку выводите в div.out-71 value прописанное в input .i-7. 
// В .out-72 выводите 1 если длина пароля больше или равна 6 или 0 если меньше. 
//Для подсчета количества символов в 
//строке используйте length.
let out71 = document.querySelector('.out-71');
let out72 = document.querySelector('.out-72');

function f7() {
    let myCheckBox7 = document.querySelector('.i-7').value;
    out71.innerHTML = myCheckBox7;
    let lig = myCheckBox7.length;
    if (lig >= 6) {
        out72.innerHTML = 1;
    } else {
        out72.innerHTML = 0;

    }


}

document.querySelector('.b-7').onclick = f7;

// Task 8.
// При нажатии кнопки .b-8 запускается функция f8. Функция с помощью 
//innerHTML создает в .out-8 новый div с классом "js2" и текстом "new div".
// Нажали несколько раз? Создаем несколько раз!
let out8 = document.querySelector('.out-8');


function f8() {
    let in8 = document.querySelector('.b-8');
    if (in8.checked = 1) {
        out8.innerHTML = '.js2' + " " + "new div";
    } else if (in8.checked != 1) {
        out8.innerHTML = "<div class='js2 '>new div</div>";
    }

}

document.querySelector('.b-8').onclick = f8;

// Task 9
// При нажатии кнопки .b-9 запускаем функцию f9. Функция проверяет checked 
//элемента .r-9. Если элемент выбран (checked) то выводит в .out-9 value 
//radiobutton. Если не выбран - выводит false.

let out91 = document.querySelector('.out-9');

function f9() {
    let r9 = document.querySelector('.r-9');

    if (r9.checked) {
        out91.innerHTML = 'radiobutton';
    } else {
        out91.innerHTML = false;

    }


}

document.querySelector('.b-9').onclick = f9;

// Task 10
// При нажатии кнопки .b-10 запускаем функцию f10. Функция получает из
// .i-10 значение цвета и окрашивает style.background элемента .out-10 в 
//этот цвет.


let out10 = document.querySelector('.out-10');


function f10() {
    let imput10 = document.querySelector('.i-10').value;
    out10.style.backgroundColor = imput10;
}

document.querySelector('.b-10').onclick = f10;


// Task 11
// При нажатии кнопки .b-11 запускается функция f11. Функция получает цвет из
// .i-111 и присваивает как value элементу .i-112. Т.е. после нажатия кнопки
// выбранный цвета в первом и втором input станут одинаковые.
let out112 = document.querySelector('.i-112');

function f11() {

    let imput111 = document.querySelector('.i-111').value;
    out112.style.backgroundColor = imput111;
}

document.querySelector('.b-11').onclick = f11;

// Task 12
// При нажатии кнопки .b-12 запускается функция f12. Функция выводит дату из 
//.i-12 в out-12.
let out12 = document.querySelector('.out-12');

function f12() {
    let imput12 = document.querySelector('.i-12').value;
    out12.innerHTML = imput12;
}

document.querySelector('.b-12').onclick = f12;

// Task 13
//  При изменении положения ползунка .i-13 выводите его значение в out-13. 
//Обратите внимание на событие.
let out13 = document.querySelector('.out-13');

function f13() {
    let imput13 = document.querySelector('.i-13').value;
    out13.innerHTML = imput13;
}

document.querySelector('.i-13').oninput = f13;

// Task 14
// При нажатии на кнопку выводите текст из textarea .t-14 в .out-14.
let out14 = document.querySelector('.out-14');

function f14() {
    let imput14 = document.querySelector('.t-14').value;
    out14.innerHTML = imput14;
}

document.querySelector('.b-14').onclick = f14;

// Task 15
// При нажатии кнопки .b-15 функция должна выводить текст из .i-15 в 
//textarea .t-15 и в .out-15.
let out15 = document.querySelector('.out-15');
let out152 = document.querySelector('.t-15');

function f15() {
    let imput15 = document.querySelector('.i-15').value;
    out15.innerHTML = imput15;
    out152.innerHTML = imput15;
}

document.querySelector('.b-15').onclick = f15;

// Task 16
// При нажатии на кнопку .b-16 выводите в .out-16 value выбранного option из
// .s-16.
let out16 = document.querySelector('.out-16');

function f16() {
    // для получения выбранного option просто получите select в переменную и 
    //select.value;
    let imput16 = document.querySelector('.s-16').value;
    out16.innerHTML = imput16;
}

document.querySelector('.b-16').onclick = f16;

// Task 17
// При смене выбранного значения .s-17 выводите в .out-17 value выбранного 
//option из .s-17.
let out17 = document.querySelector('.out-17');

function f17() {
    let imput17 = document.querySelector('.s-17').value;
    out17.innerHTML = imput17;
}

document.querySelector('.s-17').onchange = f17;

// Task 18
// При смене выбранного значения в s-18, получайте из него value выбранного
// option и присвойте данный value в input .i-18.
let out18 = document.querySelector('.i-18');

function f18() {
    let imput18 = document.querySelector('.s-18').value;
    out18.value = imput18;
}

document.querySelector('.s-18').onchange = f18;

// Task 19
// На странице создан div.out-19. По нажатию кнопки, получите из него текст
// и присвойте в value элемента .i-19.
let out19 = document.querySelector('.out-19');

function f19() {
    let imput19 = document.querySelector('.i-19').value;
    out19.innerHTML = imput19;
}

document.querySelector('.b-19').onclick = f19;

// Task 20
// У вас есть два select. Напишите код, который при изменении select .s-201
// будет аналогично изменять выбранный option в .s-202.
let out20 = document.querySelector('.s-202');

function f20() {
    let imput20 = document.querySelector('.s-201').value;
    out20.value = imput20
}

document.querySelector('.s-201').onchange = f20;