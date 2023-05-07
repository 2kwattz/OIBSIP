function convertToFar() {
    var celsiusInput = document.getElementById("celsius").value;
    var fahrenheitOutput = (celsiusInput * 1.8) + 32;
    document.getElementById("fahrenheit").value = fahrenheitOutput;
    
}

function convertToCel() {
    var fahrenheitInput = document.getElementById("fahrenheit").value;
    var celsiusOutput = (fahrenheitInput - 32) / 1.8;
    document.getElementById("celsius").value = celsiusOutput;
    
}