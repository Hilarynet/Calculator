function clearDisplay() {
    document.getElementById('display').value = '';
}

function deleteLast() {
    var currentValue = document.getElementById('display').value;
    document.getElementById('display').value = currentValue.slice(0, -1);
}

function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function calculate() {
    var expression = document.getElementById('display').value;
    try {
        document.getElementById('display').value = eval(expression);
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}
