// Static temperature and wind speed values (°F and mph)
const temperature = 45;
const windSpeed = 5;

// Wind chill calculation function (imperial units)
function calculateWindChill(tempF, speedMph) {
  return (
    35.74 +
    0.6215 * tempF -
    35.75 * Math.pow(speedMph, 0.16) +
    0.4275 * tempF * Math.pow(speedMph, 0.16)
  ).toFixed(1);
}

// Only calculate wind chill if valid conditions are met
let windChill = "N/A";

if (temperature <= 50 && windSpeed > 3) {
  windChill = calculateWindChill(temperature, windSpeed);
}

// Display the result in the weather section
document.addEventListener("DOMContentLoaded", () => {
  const windChillElement = document.getElementById("windchill");
  if (windChillElement) {
    windChillElement.textContent = `${windChill} °F`;
  }

  // Update footer with current year and last modified date
  const currentYear = new Date().getFullYear();
  const lastModified = document.lastModified;

  const yearElement = document.getElementById("currentyear");
  const modifiedElement = document.getElementById("lastmodified");

  if (yearElement) {
    yearElement.textContent = currentYear;
  }

  if (modifiedElement) {
    modifiedElement.textContent = `Last Modified: ${lastModified}`;
  }
});
