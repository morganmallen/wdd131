const currentYear = new Date().getFullYear();
document.getElementById("currentyear").textContent = currentYear;

const lastModification = new Date(document.lastModified);
document.getElementById("lastModified").textContent = "Last Modification: " + lastModification;

// Define static values for temperature and wind speed
const temperature = 10; // in Celsius (example value)
const windSpeed = 20; // in km/h (example value)

// Function to calculate wind chill factor in Celsius
function calculateWindChill(temp, speed) {
  return (
    13.12 +
    0.6215 * temp -
    11.37 * Math.pow(speed, 0.16) +
    0.3965 * temp * Math.pow(speed, 0.16)
  ).toFixed(2);
}

// Function to check if conditions are met and display wind chill factor
function displayWindChill() {
  const windChillElement = document.querySelector('.weather .wind-chill');
  if (temperature <= 10 && windSpeed > 4.8) {
    const windChill = calculateWindChill(temperature, windSpeed);
    windChillElement.textContent = `Wind Chill: ${windChill} °C`;
  } else {
    windChillElement.textContent = 'Wind Chill: N/A';
  }
}

// Call the displayWindChill function on page load
document.addEventListener('DOMContentLoaded', displayWindChill);
  
