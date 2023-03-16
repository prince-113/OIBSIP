const convertBtn = document.getElementById("convertBtn");

convertBtn.addEventListener("click", () => {
  const inputTemp = document.getElementById("inputTemp").value;
  const inputScale = document.getElementById("inputScale").value;
  const outputScale = document.getElementById("outputScale").value;
  let outputTemp;
  
  if (inputScale === "Celsius" && outputScale === "Fahrenheit") {
    outputTemp = (inputTemp * 9/5) + 32;
  } else if (inputScale === "Fahrenheit" && outputScale === "Celsius") {
    outputTemp = (inputTemp - 32) * 5/9;
  } else {
    outputTemp = inputTemp;
  }
  
  document.getElementById("outputTemp").value = outputTemp.toFixed(2);
});
