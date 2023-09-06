document.addEventListener("DOMContentLoaded", function () {
    const celsiusInput = document.getElementById("celsius");
    const fahrenheitInput = document.getElementById("fahrenheit");
    const convertCtoFButton = document.getElementById("convertCtoF");
    const convertFtoCButton = document.getElementById("convertFtoC");
    const resultDiv = document.getElementById("result");

    convertCtoFButton.addEventListener("click", function () {
        const celsiusValue = parseFloat(celsiusInput.value);
        if (!isNaN(celsiusValue)) {
            const fahrenheitValue = (celsiusValue * 9/5) + 32;
            resultDiv.textContent = `${celsiusValue}°C is ${fahrenheitValue.toFixed(2)}°F`;
        } else {
            resultDiv.textContent = "Please enter a valid number.";
        }
    });

    convertFtoCButton.addEventListener("click", function () {
        const fahrenheitValue = parseFloat(fahrenheitInput.value);
        if (!isNaN(fahrenheitValue)) {
            const celsiusValue = (fahrenheitValue - 32) * 5/9;
            resultDiv.textContent = `${fahrenheitValue}°F is ${celsiusValue.toFixed(2)}°C`;
        } else {
            resultDiv.textContent = "Please enter a valid number.";
        }
    });
});
