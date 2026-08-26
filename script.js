const birthDateInput = document.getElementById("birthDate");
const calculateBtn = document.getElementById("calculateBtn");
const result = document.getElementById("result");

calculateBtn.addEventListener("click", function () {
  if (!birthDateInput.value) {
    result.textContent = "Please enter your date of birth.";
    return;
  }

  const birthDate = new Date(birthDateInput.value + "T00:00:00");
  const today = new Date();

  if (birthDate > today) {
    result.textContent = "Please enter a valid date.";
    return;
  }

  let years = today.getFullYear() - birthDate.getFullYear();
  let months = today.getMonth() - birthDate.getMonth();
  let days = today.getDate() - birthDate.getDate();

  if (days < 0) {
    months--;

    const previousMonth = new Date(
      today.getFullYear(),
      today.getMonth(),
      0
    );

    days += previousMonth.getDate();
  }

  if (months < 0) {
    years--;
    months += 12;
  }

  result.textContent =
    `You are ${years} years, ${months} months, and ${days} days old.`;
});