// Visitor Counter
let visitorCount = localStorage.getItem('visitorCount') || 0;
visitorCount++;
localStorage.setItem('visitorCount', visitorCount);
document.getElementById('visitorCount').textContent = visitorCount;

// BMI Calculator
document.getElementById('bmiForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const weight = parseFloat(document.getElementById('weight').value);
  const feet = parseFloat(document.getElementById('feet').value);
  const inches = parseFloat(document.getElementById('inches').value);

  // Convert height to meters
  const heightInMeters = (feet * 0.3048) + (inches * 0.0254);

  // Calculate BMI
  const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(2);

  let resultText = '';
  if (bmi < 18.5) {
    resultText = `Your BMI is ${bmi}. You are underweight. <a href="#">Learn more about healthy weight gain.</a>`;
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    resultText = `Your BMI is ${bmi}. You have a healthy weight.`;
  } else {
    resultText = `Your BMI is ${bmi}. You are overweight. <a href="#">Learn more about healthy weight loss.</a>`;
  }

  document.getElementById('bmiResult').innerHTML = resultText;
});

// Hamburger Menu Toggle
document.querySelector('.hamburger-menu').addEventListener('click', function () {
  const menu = document.querySelector('.menu');
  if (menu.style.display === 'block') {
    menu.style.display = 'none';
  } else {
    menu.style.display = 'block';
  }
});