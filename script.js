const output = document.getElementById("output");
const temperature = document.getElementById("temperature");
const celsius = document.getElementById("Celsius");
const farhenheit = document.getElementById("Farhenheit");
const kelvin = document.getElementById("Kelvin");
const convert_to = document.getElementById("convert_to");
const select_type = document.getElementById("select_type");
const submit = document.getElementById("submit");
const form = document.getElementById("form");
submit.addEventListener("click", () => {
  event.preventDefault();
  const formData = new FormData(form);
  const temperature = parseFloat(formData.get("temperature"));
  const select_type = formData.get("select_type");
  const convert_to = formData.get("convert_to");
  console.log(temperature);
  console.log(select_type);
  console.log(convert_to);
  const convertedTemp = convert(temperature, select_type, convert_to);
  const convertedTemperature = document.createElement("p");
  convertedTemperature.textContent = convertedTemp + " ° " + convert_to;
  console.log("Converted Temperature: " + convertedTemp);
  output.innerHTML = "";
  output.appendChild(convertedTemperature);
});

function convert(temperature, original_type, convert_to) {
  let convertedTemp = 0; // Use let for the variable to allow reassignment

  if (original_type === "og_celsius" && convert_to === "Farhenheit") {
    convertedTemp = (temperature * 9) / 5 + 32;
  } else if (original_type === "og_farhenheit" && convert_to === "Celsius") {
    convertedTemp = ((temperature - 32) * 5) / 9;
  } else if (original_type === "og_celsius" && convert_to === "Kelvin") {
    convertedTemp = temperature + 273.15;
  } else if (original_type === "og_kelvin" && convert_to === "Celsius") {
    convertedTemp = temperature - 273.15;
  } else if (original_type === "og_kelvin" && convert_to === "Farhenheit") {
    convertedTemp = ((temperature - 273.15) * 9) / 5 + 32;
  } else if (original_type === "og_farhenheit" && convert_to === "Kelvin") {
    convertedTemp = ((temperature - 32) * 5) / 9 + 273.15;
  } else {
    convertedTemp = temperature;
  }
  return convertedTemp;
}
