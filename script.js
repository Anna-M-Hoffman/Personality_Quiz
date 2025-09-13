document.getElementById("quiz-form").addEventListener("submit", function(event) {
  event.preventDefault();

  const answers = {
    introvert: 0,
    extrovert: 0,
    thinker: 0,
    feeler: 0
  };

  const formData = new FormData(event.target);
  for (let [name, value] of formData.entries()) {
    answers[value]++;
  }

  // Simple scoring system
  let resultText = "";
  if (answers.introvert > answers.extrovert) {
    resultText += "You lean introverted. ";
  } else {
    resultText += "You lean extroverted. ";
  }

  if (answers.thinker > answers.feeler) {
    resultText += "You’re more of a thinker.";
  } else {
    resultText += "You’re more of a feeler.";
  }

  document.getElementById("result").textContent = resultText;
});
