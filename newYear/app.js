function changeColor(item1, item2, item3, item4, item5) {
    item1 = document.querySelector("#happy");
    item2 = document.querySelector("#new");
    item3 = document.querySelector("#year");
    item4 = document.querySelector("#tin");
    item5 = document.querySelector("#advance");
    let colors = ["red", "yellow", "green", "blue", "purple", "orange", "brown", "peru", "seagreen", "aqua", "chartreuse", "crimson", "chocolate", "darkgoldenrod"];
    let genRand = Math.floor(Math.random() * colors.length) + 0;
    if (colors[genRand]) {
        item1.style.color = (colors[genRand]);
        item2.style.color = (colors[genRand += 1]);
        item3.style.color = (colors[genRand += 2]);
        item4.style.color = (colors[genRand += 3]);
        item5.style.color = (colors[genRand += 4]);
    }
    setInterval(() => {
        changeColor();
    }, 1000);
}

function message() {
    let happy = document.querySelector("#happy");
    let tnew = document.querySelector("#new");
    let year = document.querySelector("#year");
    let tin = document.querySelector("#tin");
    let advance = document.querySelector("#advance");

    setInterval(() => {
        happy.textContent = "*HAPPY";
    }, 1000);
    setInterval(() => {
        tnew.textContent = "NEW";
    }, 2000);
    setInterval(() => {
        year.textContent = "YEAR";
    }, 3000);
    setInterval(() => {
        tin.textContent = "IN";
    }, 4000);
    setInterval(() => {
        advance.textContent = "ADVANCE*";
    }, 5000);

    setInterval(() => {
        happy.textContent = tnew.textContent = year.textContent = tin.textContent = advance.textContent = "****";
    }, 11000)

    message();
}

function countdown(){
    var now = new Date();
    var eventDate = new Date(2020, 0, 01);

    var currentTime = now.getTime();
    var eventTime = eventDate.getTime();

    var remTime = eventTime - currentTime;

    var s = Math.floor (remTime / 1000);
    var m = Math.floor (s / 60);
    var h = Math.floor (m / 60);
    var d = Math.floor (h / 24);

    h %= 24;
    m %= 60;
    s %= 60;

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;


    document.getElementById("days").textContent = d;
    document.getElementById("days").innerHTML = d;

    document.getElementById("hours").textContent = h;
    document.getElementById("minutes").textContent = m;
    document.getElementById("seconds").textContent = s;

    if (d && h && m && s < 0){
        eventDate = new Date(2021, 0, 01);
    }

    setTimeout(countdown, 1000);
}

countdown();

const myList = document.querySelector('#floater2 ul');
myList.addEventListener('click', function(e){
    if(e.target.className  == 'btn'){
        const theLi = e.target.parentNode;
        myList.removeChild(theLi);
    }
})


const myForm = document.forms['formm'];

myForm.addEventListener('submit', function(e){
    e.preventDefault();
    const userName = myForm.querySelector('input[type="text"]').value;
    const userComment = myForm.querySelector('textarea').value;

    const myLi = document.createElement('li')
    const theH4 = document.createElement('h4');
    const theSpan = document.createElement('span');
    const theBtn = document.createElement('button');

    theH4.textContent = userName;
    theSpan.textContent = userComment;
    theBtn.textContent = "delete"

    theH4.setAttribute('id', 'micasa')
    theSpan.setAttribute("id", "comment-text");
    theBtn.classList.add('btn');


    myLi.appendChild(theH4);
    myLi.appendChild(theSpan);
    myLi.appendChild(theBtn);
    myList.appendChild(myLi);

})