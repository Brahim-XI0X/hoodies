

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
 
const openCode2 = document.getElementById("open-code2");
const codeBox2 = document.getElementById("codeInputBox2");
const closeCode2 = document.getElementById("closeCode");

// فتح الصندوق
openCode.addEventListener("click", () => {
  codeBox2.classList.add("active");
});

// غلق الصندوق
closeCode.addEventListener("click", () => {
  codeBox2.classList.remove("active");
});
// غلق عند الضغط خارج الصندوق
codeBox.addEventListener("click", (e) => {
  if (e.target === codeBox) {
    codeBox2.classList.remove("active");
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const openCode = document.getElementById("openCode");
  const closeCode = document.getElementById("closeCode");
  const codeInputBox = document.getElementById("codeInputBox");
  const codeForm = document.getElementById("codeInputBox2");
  const submitCode = document.getElementById("open-code2");
  const txtCode = document.querySelector(".txt-inp-code");

  // عند الضغط على زر "فتح الكود"
  openCode.addEventListener("click", () => {
    codeInputBox.style.display = "flex";
  });

  // إغلاق نافذة الكود
  closeCode.addEventListener("click", () => {
    codeInputBox.style.display = "none";
  });

  // التحقق من الكود عند الإرسال
  submitCode.addEventListener("click", async (e) => {
    e.preventDefault();
    const code = txtCode.value.trim();

    if (code === "") {
      alert("Please enter your code");
      return;
    }

    // إرسال الكود إلى PHP للتحقق
    const response = await fetch("verify_code.php", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: "code=" + encodeURIComponent(code)
    });

    const result = await response.text();

    if (result === "success") {
      codeInputBox.style.display = "none";
      codeForm.style.display = "block";
    } else {
      alert("Invalid code ❌");
    }
  });
});
 