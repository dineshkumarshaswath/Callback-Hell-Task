var div = document.createElement("div");
div.setAttribute("class", "count");

setTimeout(() => {
    div.innerHTML = "10";
}, 1000);

setTimeout(() => {
    div.innerHTML = "9";
}, 2000);

setTimeout(() => {
    div.innerHTML = "8";
}, 3000);

setTimeout(() => {
    div.innerHTML = "7";
}, 4000);

setTimeout(() => {
    div.innerHTML = "6";
}, 5000);

setTimeout(() => {
    div.innerHTML = "5";
}, 6000);

setTimeout(() => {
    div.innerHTML = "4";
}, 7000);

setTimeout(() => {
    div.innerHTML = "3";
}, 8000);

setTimeout(() => {
    div.innerHTML = "2";
}, 9000);

setTimeout(() => {
    div.innerHTML = "1";
}, 10000);

setTimeout(() => {
    div.innerHTML = "Happy Independence Day";
}, 11000);

document.body.append(div);