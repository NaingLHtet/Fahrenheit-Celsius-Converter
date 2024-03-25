const tempValue = document.getElementById("tempValue");
const submitBtn = document.getElementById("submitBtn");
const showResult = document.getElementById("show-result");


const toFahrenheit = document.getElementById("toFahrenheit");
const toCelsius = document.getElementById("toCelsius");

let temp;

submitBtn.onclick = function() {
  
  if(toFahrenheit.checked) {
    temp = Number(tempValue.value);
    temp = temp * 9 / 5 + 32;
    showResult.textContent = `${temp.toFixed(1)}°F`;
  }else if(toCelsius.checked) {
    temp = Number(tempValue.value);
    temp = (5 / 9) * (temp - 32);
    showResult.textContent = `${temp.toFixed(1)}°C`;
  }else {
    showResult.textContent = "Select a unit";
  };
  
};
