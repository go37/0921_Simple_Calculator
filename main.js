const submit = document.getElementById('submit').addEventListener('click', e => {
    e.preventDefault();
    const firstValue = document.getElementById('firstValue').value;
    const secondValue = document.getElementById('secondValue').value;
    const operator = document.getElementById('operator').value;
    if (firstValue && secondValue) {
        document.getElementById('result').classList.remove('d-none');
        document.getElementById('result').classList.add('alert-success');
        document.getElementById('result').innerHTML = getResult(firstValue, operator, secondValue);
    } else {
        document.getElementById('result').classList.remove('d-none');
        document.getElementById('result').classList.add('alert-danger');
        document.getElementById('result').innerHTML = 'All values are required !';
    }
})

function getResult(firstValue, operator, secondValue) {
    console.log(secondValue)
    switch (operator) {
        case "+":
            return parseInt(firstValue) + parseInt(secondValue);
        case "-":
            return parseInt(firstValue) - parseInt(secondValue);
        case "/":
            if (parseInt(secondValue) != 0) {
                return parseInt(firstValue) / parseInt(secondValue);
            } else {
                document.getElementById('secondValue').focus();
                return "You can't divide by 0 !";
            }
        case "*":
            return parseInt(firstValue) * parseInt(secondValue);
        default:
            return "Invalid Operator";
    }
}