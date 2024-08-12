// reusable getValue function that sends the value of any input fields 
function getValue(inputField){
    // getting value
    const valueFromField = document.getElementById(inputField);
    const valueString = valueFromField.value;
    const value = parseFloat(valueString);

    valueFromField.value = ''; // clearing the input fields

    if(isNaN(value)){
        alert('Invalid value. put numbers only');
        return;
    }

    return value;
}

// reusable setText function that sends value for showcase
function setElementInnerText(textField, area){
    // finding from DOM by textField's ID and then assigning it. And then setting the 'area' on its innerText for showcasing
    const areaShowcase = document.getElementById(textField);
    areaShowcase.innerText = area;
}

// LOG SECTION:

function addToCalculationEntry(){
    
}