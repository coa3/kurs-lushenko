const one = document.querySelector('.one');

one.style.width = '150px'; //присвоение стиля элементу
one.style.paddingBottom = '40px';

// console.log(one.style);

one.classList.add('two', 'three'); // add- присвоение и добавление класса
one.classList.remove('three'); // remove-  удаление класса
one.classList.toggle('three'); // toggle- переключатель
one.classList.contains('three'); //contains- проверка на наличие класса, если есь класс .three то true, 
//если нет то false

const toggle = document.querySelector('.toggle');

toggle.onclick = function() {
    this.classList.toggle('three'); //this- элемент на котором происходит событие
}

// атрибуты data
console.log(one.getAttribute('data')); //getAttribute -- чтение атрибута data
console.log(document.querySelectorAll('link')[1].getAttribute('href'));

one.setAttribute('data-num', 6); // setAttribute- создать атрибут, data-num = "6" со значением 6

let gas = document.querySelectorAll('.gas');
for (let i = 0; i < gas.length; i++) {
    gas[i].onclick = function() {
        let gallons = document.querySelector('.gallons').value;
        let amount = this.getAttribute('data'); // this- кнопка на котор нажали и ее читаем
        console.log(gallons * amount);
    }
}

let a = document.createElement('div'); // createElement- создает элемент div
a.innerHTML = 'Hello!'; //добавляем в созданый выше элемент текст hello
a.classList.add('one'); // добавляем ему класс one
a.onclick = function() {
    alert('hello'); // добавляем событие, во время клика срабатывает
}

document.querySelector('.test').appendChild(a); // appendChild- метод для добавления



console.log(a);