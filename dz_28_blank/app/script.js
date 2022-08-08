function myAlert(a, c, d) {
    let b = `<p class="${c}">${a}</p>`;
    document.querySelector(d).innerHTML = b;
}

myAlert('Hi', 'red', '.test');
myAlert('Hello', 'orange', '.test2');


// class!!!!!!!!!!!!!!!!!!!!!
class Alert {
    constructor(a, c, d) {
        this.message = a;
        this.cssClass = c;
        this.out = d;
    }
    showAlert() {
        document.querySelector(this.out).innerHTML = `<p class="${this.cssClass}">${this.message}</p>`;
    }
    myAlert() {
        alert(this.message);
    }
}
class Alert2 extends Alert {
    constructor(a, c, d, icon) {
        super(a, c, d);
        this.icon = icon; // new proper
    }
    showIconAlert() {
        document.querySelector(this.out).innerHTML = `<p class="${this.cssClass}"><i class="material-icons">${this.icon}</i> ${this.message}</p>`;
    }
    myAlert() {
        alert('hi!!!' + this.message);
    }
}

let m = new Alert('My message', 'red', '.test');
console.log(m);
m.showAlert();

let m2 = new Alert2('My message', 'red', '.test', 'account_balance');
m2.showIconAlert();
m2.myAlert(this.message);