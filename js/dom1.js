
window.onload = () => {
    console.log(document.getElementById("box1"));
    console.log(document.getElementsByClassName("box2"));
    console.log(document.getElementsByTagName("div"));
}

const box1 = document.getElementById("box1");
const box2Array = document.getElementsByClassName("box2");
const divArray = document.getElementsByTagName("div");

box1.innerHTML = `<input type="password" placeholder="박스1">`;
box2Array[1].innerHTML = `<input type="text" placeholder="박스2-2">`;

const box1_qs = document.querySelector("#box1");
const box2Array_qs = document.querySelector(".box2 .username-input"); // box2안 username-input선택
const divArray_qs = document.querySelectorAll("div");
// css에서 선택가능한 선택자 사용 가능


// const box2Array_qs = document.querySelectorAll(".box2 .username-input");
// const usernameInput = box2Array_qs[1].querySelector(.username-Input);
// usernameInput.value = "test";
//      querySelector를 활용해서 Array객체 인덱스를 특정하여 추가로 명령을 실행

box2Array_qs.value = "test";

console.log(box2Array_qs);
