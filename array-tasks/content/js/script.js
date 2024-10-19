// task 1 :

let valuesArray = [];

function addValue(){
    const input = document.getElementById('inputValue').value;

    if(input !==""){
        valuesArray.push(input);
        document.getElementById('inputValue').value = '';
    }
    else{
        alert("You need to enter a value");
    }
}

function displayValue() {

    const button = document.getElementById('btn-display');
    button.classList.add('border-primary');
    const outputValue = document.getElementById('outputValue');
    outputValue.innerHTML = ''; 
    valuesArray.forEach((value, index) => {
      const element = document.createElement('p'); // to make a paragraph for setting the element index = value
      element.textContent = `Element ${index} = ${value}`;
      outputValue.appendChild(element);
});

}



// task 2 :

function sumArrays(arr1, arr2) {
    const maxLength = Math.max(arr1.length, arr2.length);  
    let summedArray = [];

    for (let i = 0; i < maxLength; i++) {
        // handling if there is no value submitted.
      const value1 = arr1[i] || 0;   
      const value2 = arr2[i] || 0; 
      summedArray.push(value1 + value2);  
    }

    return summedArray;
}

function arraysSum() {
    const button = document.getElementById('btn-ds');
    button.classList.add('border-primary');
    const array1 = document.getElementById('array1').value.split(',').map(Number);
    const array2 = document.getElementById('array2').value.split(',').map(Number);
    const arraySummed = sumArrays(array1, array2);
    document.getElementById('output').textContent = `[${arraySummed}]`;
}

// table task:

document.querySelectorAll('.btn-edit').forEach(button => {
    button.addEventListener('click', (e) => {
      const row = e.target.closest('tr');
      row.querySelectorAll('.edited').forEach(cell => {
        let input = document.createElement('input');
        input.type = cell.getAttribute('data-type');
        input.value = cell.getAttribute('data-value');
        input.classList.add('form-control');  
        cell.innerHTML = '';
        cell.appendChild(input);
        input.addEventListener('blur', () => {
          cell.setAttribute('value', input.value);
          (cell.getAttribute('data-type') === 'number') ? cell.innerHTML = input.value  + ' €' : cell.innerHTML = input.value;
          
        });
      });
    });
  });
