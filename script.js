const calculate = document.getElementById('calculate');
calculate.addEventListener('click', () =>{
    let totalBill = document.getElementById('totalBill').value;let tipPercent = document.getElementById('tipPercent').value;let split = document.getElementById('split').value;

    //validate
    if(totalBill === '' || tipPercent == 0 || split == 0){
        alert('Please enter values');
        return;
    }
    //calculate
    let total = (totalBill * tipPercent) / split;
    total = total.toFixed(2);
    document.getElementById('tip').innerHTML = total;
})