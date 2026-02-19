const toggleBtn = document.getElementById("toggle-btn");
const toggleBlock = document.getElementById("toggleBlock");

function toggleDiv() {
  toggleBlock.classList.toggle("hidden");
}

toggleBtn.addEventListener("click", toggleDiv);

const plusBtn = document.getElementById("plusBtn");
const minusBtn = document.getElementById("minusBtn");
const countEl = document.getElementById("COUNT");

let count = 0;

function updateCounter(value){
countEl.textContent = value;
}

function increase(value){
  return value + 1;
}

function decrease(value){
  return value -1;
}

plusBtn.addEventListener("click",function() {
  count = increase(count);
  updateCounter(count);
});

minusBtn.addEventListener("click",function() {
  count = decrease(count);
  updateCounter(count);
});
updateCounter(count);

const textBtn1 = document.getElementById("textBtn1");
const textBtn2 = document.getElementById("textBtn2")
const vibralText = document.getElementById("vibralText");

function changeText(text) {
    vibralText.textContent = text;
}

textBtn1.addEventListener("click", function(){
  changeText("Дароу жабаскрипт")
});

textBtn2.addEventListener("click", function(){
  changeText("Просто другой текст")
});

function sum(a, b) {
  return a + b; 
}
const result =sum(5,5);

console.log(result);

const user = {
  name: "Raman",
  age: "11",
  email: "ixwhynot",
  isAdmin: "false"
};

console.log(user.name)

user.course = "JabaScript";
console.log(user);

const product = {
  title:"monitor",
  price:"5200",
  inStock: true
};

if(product.inStock === true) {
  console.log("Товар доступный");
}