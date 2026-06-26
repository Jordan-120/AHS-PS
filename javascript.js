
  const quizForm = document.getElementById("quizForm");
  if (quizForm) {
  quizForm.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent form submission

    const answers = {
      q1: "b",  // Section 12
      q2: "b",  // Use of force, arrest, or critical incident
      q3: "a",  // RMS
      q4: "c",  // Gaming, Liquor and Cannabis Act
      q5: "c",  // Return of a formal patient
      q6: "a",  // Communicable disease management
      q7: "d",  // Maintained as usual
      q8: "b",  // SAP gloves
      q9: "b",  // Public health enforcement
      q10: "b"  // Licence cancellation upon business disposal
    };

    let output = "<h3>Quiz Results</h3>";
    let score = 0;

    for (let key in answers) {
      const selected = document.querySelector(`input[name="${key}"]:checked`);
      if (!selected) {
        output += `<p>Question ${key.slice(1)}: <strong>No answer selected</strong> (Correct: ${answers[key].toUpperCase()})</p>`;
        continue;
      }

      if (selected.value === answers[key]) {
        output += `<p>Question ${key.slice(1)}: ✅ Correct</p>`;
        score++;
      } else {
        output += `<p>Question ${key.slice(1)}: ❌ Incorrect (Your answer: ${selected.value.toUpperCase()}, Correct: ${answers[key].toUpperCase()})</p>`;
      }
    }

    output += `<p><strong>Your Score: ${score} / ${Object.keys(answers).length}</strong></p>`;

    // Display results below the form
    const resultDiv = document.createElement("div");
    resultDiv.innerHTML = output;
    document.getElementById("quizForm").after(resultDiv);
  });
  }