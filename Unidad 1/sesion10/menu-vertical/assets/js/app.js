var title = document.getElementById("title");
console.log(title.innerHTML);
console.log(title.attributes);

title.style.backgroundColor = "red";

var navbar = document.querySelector("#navbar");
console.log(navbar);

var lis = document.getElementsByClassName("item");
console.log(lis[0].innerHTML);

var a_list = document.getElementsByTagName("a");
console.log(a_list[0].innerHTML);

var li_list = document.querySelectorAll(".item");
console.log(li_list);

var first_li = document.querySelector(".item");
console.log(first_li);