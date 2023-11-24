function calculateBMI() {
  const weight = parseInt(document.getElementById('weight').value);
  const height = parseInt(document.getElementById('height').value);
  if (weight && height === '' || weight && height === 0 || isNaN(weight && height)) {
    alert('Please enter both weight and height to calculate BMI.');
  } else {
    const bmi = (weight / ((height / 100) * (height / 100))).toFixed(2);
    const resultDiv = document.getElementById('result');
    const underWeight = document.getElementById('underWeight');
    const normalWeight = document.getElementById('normalWeight');
    const overWeight = document.getElementById('overWeight');
    resultDiv.style.display = "block";
    resultDiv.innerHTML = 'Your BMI is: ' + bmi;


    if (isNaN(weight) || isNaN(height)) {
      // Display a message if either weight or height is not a number
      clearMessages();
      return;
    }
    clearMessages();

    if (bmi < 18.6) {
      underWeight.innerHTML = 'You are underweight';
      underWeight.style.display = 'block';
    } else if (bmi >= 18.6 && bmi <= 24.9) {
      normalWeight.innerHTML = 'Your weight is normal';
      normalWeight.style.display = 'block';
    } else if (bmi > 24.9) {
      overWeight.innerHTML = 'You are overweighted';
      overWeight.style.display = 'block';
    }
  }

  function clearMessages() {
    underWeight.style.display = 'none';
    normalWeight.style.display = 'none';
    overWeight.style.display = 'none';
  }

  // Attach the function to input events for real-time updates
  document.getElementById('weight').addEventListener('input', updateBMIStatus);
  document.getElementById('height').addEventListener('input', updateBMIStatus);
}
