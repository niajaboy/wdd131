
const temperature = 10;
const windSpeed = 5;



function calculateWindChill(temp, speed) {
    return 13.12 + (0.6215 * temp) - (11.37 * Math.pow(speed, 0.16)) + (0.3965 * temp * Math.pow(speed, 0.16));
}



if (temperature <= 10 && windSpeed > 4.8) {
    const windChill = calculateWindChill(temperature, windSpeed);
    document.querySelector("#wind-chill").textContent = windChill.toFixed(1) + " °C";
} else {
    document.querySelector("#wind-chill").textContent = "N/A";
}


document.querySelector("#current-year").textContent = new Date().getFullYear();
document.querySelector("#last-modified").textContent = document.lastModified;