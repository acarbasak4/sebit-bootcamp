const cevaplar = ["8", "10", "3", "25"];
const result = document.querySelector(".result");
const success = document.querySelector(".success");
const form = document.querySelector(".question-form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const alinanCevaplar = [
    form.r1.value,
    form.r2.value,
    form.r3.value,
    form.r4.value,
  ];
  let score = 0;

  alinanCevaplar.forEach((cvp, i) => {
    if (cvp === cevaplar[i]) {
      score += 25;
    }
  });

  result.classList.remove("d-none");
  result.querySelector("#percentage").textContent = `${score}%`;
  if (score === 100) {
    success.classList.remove("d-none");
    document.querySelector(".btn").disabled = true;
  }
});
