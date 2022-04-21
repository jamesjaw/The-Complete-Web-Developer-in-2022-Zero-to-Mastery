var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
//注意.是選class 沒.是選tag
let b = document.querySelectorAll(".button");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	let div = document.createElement("div");
	var li = document.createElement("li");
	let bu = document.createElement("button");
	li.appendChild(document.createTextNode(input.value));
	bu.appendChild(document.createTextNode("delete"));
	bu.classList.add("button");
	div.classList.add("d");
	div.appendChild(li);
	div.appendChild(bu);
	ul.appendChild(div);
	bu.addEventListener("click", function(){
		this.parentElement.remove();
	});
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

for(let i = 0; i < b.length ;i++) {
	b[i].addEventListener("click", function(){
		this.parentElement.remove();
	});
}


button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);