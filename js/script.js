

var countDownDate = new Date("Jan 5, 2030 15:37:25").getTime();
var x = setInterval(function() {
  var now = new Date().getTime(); 
  var distance = countDownDate - now;
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);


const win = document.querySelector("#winner");

win.addEventListener('click',function(){
    alert("test")
});
alert("test")
const openCode = document.getElementById("openCode");
const codeBox = document.getElementById("codeInputBox");
const closeCode = document.getElementById("closeCode");

// فتح الصندوق
openCode.addEventListener("click", () => {
  codeBox.classList.add("active");
});

// غلق الصندوق
closeCode.addEventListener("click", () => {
  codeBox.classList.remove("active");
});

// غلق عند الضغط خارج الصندوق
codeBox.addEventListener("click", (e) => {
  if (e.target === codeBox) {
    codeBox.classList.remove("active");
  }
});
 
