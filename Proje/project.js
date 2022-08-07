const cevaplar = ["E", "E", "E", "E"];
const result = document.querySelector(".result");
const form = document.querySelector(".question-form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const alinanCevaplar = [
    form.q1.value,
    form.q2.value,
    form.q3.value,
    form.q4.value,
  ];

  let score = 0;
  alinanCevaplar.forEach((cvp, i) => {
    if (cvp === cevaplar[i]) {
      score += 25;
    }
  });

  result.classList.remove("d-none");
  result.querySelector("#percentage").textContent = `${score}%`;
});
