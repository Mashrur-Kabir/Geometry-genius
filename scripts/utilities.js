function getValue(inputFieldId){
    // value
    const valueFromField = document.getElementById('inputField');
    const valueString = valueFromField.value;
    const value = parseFloat(valueString);

    return value;
}