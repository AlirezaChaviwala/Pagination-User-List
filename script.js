function setAttr(val1, val2, element) {
    for (var i = 0; i < val1.length; i++) {
        element.setAttribute(val1[i], val2[i]);
    }
}

let main = document.createElement('div');
let k1 = ['id'];
let v1 = ['main'];
setAttr(k1, v1, main);
document.body.append(main);

let maintitle = document.createElement('h1');
maintitle.id = 'maintitle';
maintitle.innerText = 'Pagination in DOM Manipulation';
main.append(maintitle);

let table = document.createElement('table');
table.id = 'table';
main.append(table);

let headrow = document.createElement('tr')
headrow.id = 'mainrow';
table.append(headrow);

let id = document.createElement('th');
id.id = 'mainid';
id.innerText = 'ID';
table.append(id);

let name = document.createElement('th');
name.id = 'mainname';
name.innerText = 'Name';
table.append(name);

let email = document.createElement('th');
email.id = 'mainemail';
email.innerText = 'E-mail';
table.append(email);

let currentPage = 0;

var request = new XMLHttpRequest();
let data = [];
request.open('GET', 'https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json', true);
request.send();
request.onload = function getData() {
    data = JSON.parse(this.response);

    for (let i = 0; i <= 9; i++) {
        let rowinner = document.createElement('tr')
        table.append(rowinner);

        let idinner = document.createElement('td');
        idinner.innerText = data[i].id;
        table.append(idinner);

        let nameinner = document.createElement('td');
        nameinner.innerText = data[i].name;
        table.append(nameinner);

        let emailinner = document.createElement('td');
        emailinner.innerText = data[i].email;
        table.append(emailinner);
    }

    let butsec = document.createElement('section');
    main.append(butsec);

    function appendData(start, end) {

        let headrow = document.createElement('tr')
        table.append(headrow);

        let id = document.createElement('th');
        id.id = 'mainid';
        id.innerText = 'ID';
        table.append(id);

        let name = document.createElement('th');
        name.id = 'mainname';
        name.innerText = 'Name';
        table.append(name);

        let email = document.createElement('th');
        email.id = 'mainemail';
        email.innerText = 'E-mail';
        table.append(email);

        for (let i = start; i <= end; i++) {
            let rowinner = document.createElement('tr')
            table.append(rowinner);

            let idinner = document.createElement('td');
            idinner.innerText = data[i].id;
            table.append(idinner);

            let nameinner = document.createElement('td');
            nameinner.innerText = data[i].name;
            table.append(nameinner);

            let emailinner = document.createElement('td');
            emailinner.innerText = data[i].email;
            table.append(emailinner);
        }
    }

    let first = document.createElement('button');
    let k2 = ['type'];
    let v2 = ['button'];
    first.innerText = 'First';
    setAttr(k2, v2, first);
    butsec.append(first);
    first.onclick = () => {
        table.innerHTML = '';
        currentPage = 1;
        appendData(0, 9);
    }

    let previous = document.createElement('button');
    let k3 = ['type'];
    let v3 = ['button'];
    previous.innerText = 'Previous';
    setAttr(k3, v3, previous);
    butsec.append(previous);
    previous.onclick = () => {
        if (currentPage == 2) {
            table.innerHTML = '';
            currentPage = 1;
            appendData(0, 9);
        } else if (currentPage == 3) {
            table.innerHTML = '';
            currentPage = 2;
            appendData(10, 19);
        } else if (currentPage == 4) {
            table.innerHTML = '';
            currentPage = 3;
            appendData(20, 29);
        } else if (currentPage == 5) {
            table.innerHTML = '';
            currentPage = 4;
            appendData(30, 39);
        } else if (currentPage == 6) {
            table.innerHTML = '';
            currentPage = 5;
            appendData(40, 49);
        } else if (currentPage == 7) {
            table.innerHTML = '';
            currentPage = 6;
            appendData(50, 59);
        } else if (currentPage == 8) {
            table.innerHTML = '';
            currentPage = 7;
            appendData(60, 69);
        } else if (currentPage == 9) {
            table.innerHTML = '';
            currentPage = 8;
            appendData(70, 79);
        } else if (currentPage == 10) {
            table.innerHTML = '';
            currentPage = 9;
            appendData(80, 89);
        }

    }

    let one = document.createElement('button');
    let k4 = ['type'];
    let v4 = ['button'];
    one.innerText = '1';
    setAttr(k4, v4, one);
    butsec.append(one);
    one.onclick = () => {
        currentPage = 1;
        table.innerHTML = '';
        appendData(0, 9);
    }

    let two = document.createElement('button');
    let k5 = ['type'];
    let v5 = ['button'];
    two.innerText = '2';
    setAttr(k5, v5, two);
    butsec.append(two);
    two.onclick = () => {
        table.innerHTML = '';
        currentPage = 2;
        appendData(10, 19);
    }

    let three = document.createElement('button');
    let k6 = ['type'];
    let v6 = ['button'];
    three.innerText = '3';
    setAttr(k6, v6, three);
    butsec.append(three);
    three.onclick = () => {
        table.innerHTML = '';
        currentPage = 3;
        appendData(20, 29);
    }

    let four = document.createElement('button');
    let k7 = ['type'];
    let v7 = ['button'];
    four.innerText = '4';
    setAttr(k7, v7, four);
    butsec.append(four);
    four.onclick = () => {
        table.innerHTML = '';
        currentPage = 4;
        appendData(30, 39);
    }

    let five = document.createElement('button');
    let k8 = ['type'];
    let v8 = ['button'];
    five.innerText = '5';
    setAttr(k8, v8, five);
    butsec.append(five);
    five.onclick = () => {
        table.innerHTML = '';
        currentPage = 5;
        appendData(40, 49);
    }

    let six = document.createElement('button');
    let k9 = ['type'];
    let v9 = ['button'];
    six.innerText = '6';
    setAttr(k9, v9, six);
    butsec.append(six);
    six.onclick = () => {
        table.innerHTML = '';
        currentPage = 6;
        appendData(50, 59);
    }

    let seven = document.createElement('button');
    let k10 = ['type'];
    let v10 = ['button'];
    seven.innerText = '7';
    setAttr(k10, v10, seven);
    butsec.append(seven);
    seven.onclick = () => {
        table.innerHTML = '';
        currentPage = 7;
        appendData(60, 69);
    }

    let eight = document.createElement('button');
    let k11 = ['type'];
    let v11 = ['button'];
    eight.innerText = '8';
    setAttr(k11, v11, eight);
    butsec.append(eight);
    eight.onclick = () => {
        table.innerHTML = '';
        currentPage = 8;
        appendData(70, 79);
    }

    let nine = document.createElement('button');
    let k12 = ['type'];
    let v12 = ['button'];
    nine.innerText = '9';
    setAttr(k12, v12, nine);
    butsec.append(nine);
    nine.onclick = () => {
        table.innerHTML = '';
        currentPage = 9;
        appendData(80, 89);
    }

    let ten = document.createElement('button');
    let k13 = ['type'];
    let v13 = ['button'];
    ten.innerText = '10';
    setAttr(k13, v13, ten);
    butsec.append(ten);
    ten.onclick = () => {
        table.innerHTML = '';
        currentPage = 10;
        appendData(90, 99);
    }

    let next = document.createElement('button');
    let k14 = ['type'];
    let v14 = ['button'];
    next.innerText = 'Next';
    setAttr(k14, v14, next);
    butsec.append(next);
    next.onclick = () => {
        if (currentPage == 1) {
            table.innerHTML = '';
            currentPage = 2;
            appendData(10, 19);
        } else if (currentPage == 2) {
            table.innerHTML = '';
            currentPage = 3;
            appendData(20, 29);
        } else if (currentPage == 3) {
            table.innerHTML = '';
            currentPage = 4;
            appendData(30, 39);
        } else if (currentPage == 4) {
            table.innerHTML = '';
            currentPage = 5;
            appendData(40, 49);
        } else if (currentPage == 5) {
            table.innerHTML = '';
            currentPage = 6;
            appendData(50, 59);
        } else if (currentPage == 6) {
            table.innerHTML = '';
            currentPage = 7;
            appendData(60, 69);
        } else if (currentPage == 7) {
            table.innerHTML = '';
            currentPage = 8;
            appendData(70, 79);
        } else if (currentPage == 8) {
            table.innerHTML = '';
            currentPage = 9;
            appendData(80, 89);
        } else if (currentPage == 9) {
            table.innerHTML = '';
            currentPage = 10;
            appendData(90, 99);
        }

    }

    let last = document.createElement('button');
    let k15 = ['type'];
    let v15 = ['button'];
    last.innerText = 'Last';
    setAttr(k15, v15, last);
    butsec.append(last);
    last.onclick = () => {
        table.innerHTML = '';
        currentPage = 10;
        appendData(90, 99);
    }



}