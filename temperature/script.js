
function convertTemperature() {
    const temperature = parseFloat(document.getElementById('temperature').value);
    const fromUnit = document.getElementById('fromUnit').value;
    const toUnit = document.getElementById('toUnit').value;
    const resultArea = document.getElementById('result');
    const inputError = document.getElementById('input-error');

    inputError.style.display = 'none';

    if (isNaN(temperature)) {
        inputError.style.display = 'block';
        resultArea.innerText = '';
        return;
    }

    let result;

    if (fromUnit === 'celsius') {
        if (toUnit === 'fahrenheit') {
            result = (temperature * 9/5) + 32;
        } else if (toUnit === 'kelvin') {
            result = temperature + 273.15;
        } else {
            result = temperature;
        }
    }

    else if (fromUnit === 'fahrenheit') {
        if (toUnit === 'celsius') {
            result = (temperature - 32) * 5/9;
        } else if (toUnit === 'kelvin') {
            result = (temperature - 32) * 5/9 + 273.15;
        } else {
            result = temperature;
        }
    }

    else if (fromUnit === 'kelvin') {
        if (toUnit === 'celsius') {
            result = temperature - 273.15;
        } else if (toUnit === 'fahrenheit') {
            result = (temperature - 273.15) * 9/5 + 32;
        } else {
            result = temperature;
        }
    }

    resultArea.innerText = `Converted Temperature: ${result.toFixed(2)} ${toUnit.charAt(0).toUpperCase() + toUnit.slice(1)}`;
}

document.getElementById('convertBtn').addEventListener('click', convertTemperature);

document.getElementById('temperature').addEventListener('input', function() {
    const inputError = document.getElementById('input-error');
    const input = document.getElementById('temperature').value;
    if (isNaN(input) || input === '') {
        inputError.style.display = 'block';
    } else {
        inputError.style.display = 'none';
    }
});

document.getElementById('startBtn').addEventListener('click', function() {
    document.getElementById('welcomePage').style.display = 'none';
    document.getElementById('converterPage').style.display = 'block';
});

