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

// Calculator navigation

function showCalculator(calculator) {
document.getElementById("homePage").classList.remove("hidden");

    document.querySelectorAll(".calculator").forEach(function (section) {  section.classList.add("hidden");
      });
    
      if (calculator === "age") { document.getElementById("ageCalculator").classList.remove("hidden");
        }
      

         if (calculator === "date") {
             document.getElementById("dateCalculator").classList.remove("hidden");
         }

          if (calculator === "bmi") {
              document.getElementById("bmiCalculator").classList.remove("hidden");
  }

   if (calculator === "future") {
       document.getElementById("futureCalculator").classList.remove("hidden");
   }
   }
function goHome() {
   document.querySelector(".calculator-list").classList.remove("hidden");


   // Return to homepage


  document.querySelectorAll(".calculator").forEach(function (section) {
    section.classList.add("hidden");
  });
}


// Date Calculator

const startDateInput = document.getElementById("startDate");
const endDateInput = document.getElementById("endDate");
const dateCalculateBtn = document.getElementById("dateCalculateBtn");
const dateResult = document.getElementById("dateResult");


dateCalculateBtn.addEventListener("click", function () {


  if (!startDateInput.value || !endDateInput.value) {  
 dateResult.textContent = "Please enter both dates.";
 return;
  }


  const startDate = new Date(startDateInput.value + "T00:00:00");
 const endDate = new Date(endDateInput.value + "T00:00:00");


 if (endDate < startDate) {
 dateResult.textContent = "End date must be after the start date.";
    return;
 }


  const difference = endDate - startDate;

  const days = Math.round(
 difference / (1000 * 60 * 60 * 24)
  );


const weeks = Math.floor(days / 7);
const remainingDays = days % 7;
dateResult.textContent =
`${days} days (${weeks} week${weeks !== 1 ? "s" : ""} and ${remainingDays} day${remainingDays !== 1 ? "s" : ""})`;
});


// BMI Calculator

const heightInput = document.getElementById("height");
const weightInput = document.getElementById("weight");
const bmiCalculateBtn = document.getElementById("bmiCalculateBtn");
const bmiResult = document.getElementById("bmiResult");

bmiCalculateBtn.addEventListener("click", function () {
    bmiResult.textContent = "Please enter your height and weight.";
    return;


  const height = Number(heightInput.value);
  const weight = Number(weightInput.value);

   if (height <= 0 || weight <= 0) {
 bmiResult.textContent = "Please enter valid values.";
  return;
  }


  const heightInMeters = height / 100;

    const bmi = weight / (heightInMeters * heightInMeters);


      bmiResult.textContent = `BMI: ${bmi.toFixed(1)}`;
});


// Tip Calculator

const billAmountInput = document.getElementById("billAmount");
const tipPercentInput = document.getElementById("tipPercent");
const tipCalculateBtn = document.getElementById("tipCalculateBtn");
const tipResult = document.getElementById("tipResult");

tipCalculateBtn.addEventListener("click", function () {

  if (!billAmountInput.value || !tipPercentInput.value) {
   tipResult.textContent = "Please enter the bill amount and tip percentage.";
   return;
   
  }

    const billAmount = Number(billAmountInput.value);
      const tipPercent = Number(tipPercentInput.value);

 if (billAmount < 0 || tipPercent < 0) {
    tipResult.textContent = "Please enter valid values.";
      return;
 }


 const tipAmount = billAmount * (tipPercent / 100);
 const totalAmount = billAmount + tipAmount;


 tipResult.textContent =
  `Tip: ৳${tipAmount.toFixed(2)} | Total: ৳${totalAmount.toFixed(2)}`;
});




