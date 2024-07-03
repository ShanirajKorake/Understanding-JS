const form = document.querySelector('form');


form.addEventListener('submit',function(e){
e.preventDefault();

const height = parseInt(document.querySelector('#height').value);
const weight = parseInt(document.querySelector('#weight').value);
const result = document.querySelector(".result")
if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    if (bmi < 18.6) {
        result.innerHTML = `<span>your BMI is ${bmi} (Under-Weight)</span>`
    } else if (bmi >= 18.6 && bmi <= 24.9) {
        result.innerHTML = `<span>your BMI is ${bmi} (Normal Weight)</span>`
    } else {
        result.innerHTML = `<span>your BMI is ${bmi} (Over-Weight)</span>`
    }
  }
})