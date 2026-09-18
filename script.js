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

 if (!heightInput.value || !weightInput.value) {
      bmiResult.textContent = "Please enter your height and weight.";
    return;
 }

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

// Navigation for all calculators

function showCalculator(calculator) {
 document.getElementById("homePage").classList.add("hidden");
 
 
  document.querySelectorAll(".calculator").forEach(function (section) {
   section.classList.add("hidden");
  });
  
 if (calculator === "age") {
   document.getElementById("ageCalculator").classList.remove("hidden");
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
  
  if (calculator === "percentage") {
  document.getElementById("percentageCalculator").classList.remove("hidden");
  }
  
    if (calculator === "discount") {
  document.getElementById("discountCalculator").classList.remove("hidden");
    }
    
 if (calculator === "unit") {
  document.getElementById("unitCalculator").classList.remove("hidden");
  }
  
  if (calculator === "interest") {
document.getElementById("interestCalculator").classList.remove("hidden");
  }
}

function goHome() {
    document.getElementById("homePage").classList.remove("hidden");

  document.querySelectorAll(".calculator").forEach(function (section) {
section.classList.add("hidden");
  });
}


// Percentage Calculator

const percentageValueInput = document.getElementById("percentageValue");
const percentagePercentInput = document.getElementById("percentagePercent");
const percentageCalculateBtn = document.getElementById("percentageCalculateBtn");
const percentageResult = document.getElementById("percentageResult");

percentageCalculateBtn.addEventListener("click", function () {

  if (!percentageValueInput.value || !percentagePercentInput.value) {
   percentageResult.textContent = "Please enter both values."; 
  return;
  }

  const value = Number(percentageValueInput.value);
  const percent = Number(percentagePercentInput.value);

   if (value < 0 || percent < 0) {
  percentageResult.textContent = "Please enter valid values.";
    return;
   }

     const result = value * (percent / 100);

 percentageResult.textContent =
`${percent}% of ${value} = ${result.toFixed(2)}`;
});


// Discount Calculator

const originalPriceInput = document.getElementById("originalPrice");
const discountPercentInput = document.getElementById("discountPercent");
const discountCalculateBtn = document.getElementById("discountCalculateBtn");
const discountResult = document.getElementById("discountResult");


discountCalculateBtn.addEventListener("click", function () {

   if (!originalPriceInput.value || !discountPercentInput.value) {
  discountResult.textContent = "Please enter the price and discount.";
    return;
   }

 const originalPrice = Number(originalPriceInput.value);
     const discountPercent = Number(discountPercentInput.value);


  if (originalPrice < 0 || discountPercent < 0 || discountPercent > 100) {
  discountResult.textContent =
  "Please enter valid values. Discount must be between 0% and 100%.";
  return;
  }

 const discountAmount =
    originalPrice * (discountPercent / 100);


  const finalPrice =
    originalPrice - discountAmount;

   discountResult.textContent =
`Discount: ৳${discountAmount.toFixed(2)} | Final Price: ৳${finalPrice.toFixed(2)}`;
});


// Unit Converter

const unitValueInput = document.getElementById("unitValue");
const unitTypeInput = document.getElementById("unitType");
const unitCalculateBtn = document.getElementById("unitCalculateBtn");
const unitResult = document.getElementById("unitResult");

unitCalculateBtn.addEventListener("click", function () {

  if (!unitValueInput.value) {
  unitResult.textContent = "Please enter a value.";
     return;
  }

   const value = Number(unitValueInput.value);
  const type = unitTypeInput.value;
  
 let result;
   let unit;

 if (type === "km-mi") {
    result = value * 0.621371;
      unit = "miles";
  }
  
  if (type === "mi-km") {
    result = value * 1.60934;
 unit = "km";
  }
  
  if (type === "kg-lb") {
 result = value * 2.20462;
    unit = "lb";
  }

  if (type === "lb-kg") {
   result = value * 0.453592;
  unit = "kg";
  }

 if (type === "m-ft") {
   result = value * 3.28084;
   unit = "feet";
  }
  
  
  if (type === "ft-m") {
   result = value * 0.3048;
 unit = "meters";
  }

if (type === "c-f") {
    result = (value * 9 / 5) + 32;
  unit = "°F";
  }
  
    if (type === "f-c") {
          result = (value - 32) * 5 / 9;
unit = "°C";
  }

    unitResult.textContent =
    `Result: ${result.toFixed(2)} ${unit}`;
});

// Interest Calculator

const principalInput = document.getElementById("principal");
const interestRateInput = document.getElementById("interestRate");
const interestTimeInput = document.getElementById("interestTime");
const interestTypeInput = document.getElementById("interestType");
const interestCalculateBtn = document.getElementById("interestCalculateBtn");
const interestResult = document.getElementById("interestResult");

interestCalculateBtn.addEventListener("click", function () {


 if (
 !principalInput.value ||
 !interestRateInput.value ||
 !interestTimeInput.value
 ) {
 interestResult.textContent =
"Please enter all the required values.";
  return;
 }

  const principal = Number(principalInput.value);
 const rate = Number(interestRateInput.value);
  const time = Number(interestTimeInput.value);


  if (principal < 0 || rate < 0 || time < 0) {
  interestResult.textContent =
   "Please enter valid values.";
    return;
  }
  let interest;
 let total;

 if (interestTypeInput.value === "simple") {
   
  interest = principal * (rate / 100) * time;
    total = principal + interest;

  
    } else {
  
    total =
        principal * Math.pow(1 + rate / 100, time);
  
 interest = total - principal;
  }


  interestResult.textContent =
    `Interest: ৳${interest.toFixed(2)} | Total: ৳${total.toFixed(2)}`;
});











