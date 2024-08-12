// reusable getValue function that sends the value of any input fields 
function getValue(inputField){
    // getting value
    const valueFromField = document.getElementById(inputField);
    const valueString = valueFromField.value;
    const value = parseFloat(valueString);

    /* valueFromField.value = ''; // clearing the input fields if you want */

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
// get the element where i want to add the dynamic showcasing
// create desired element 
// set inner HTML. it could be dynamic template string. add classes accordingly
// append created element to its parent element

function addToCalculationEntry(areaType, area){

    const calcEntry = document.getElementById('calculation-entry'); // calling where i need to show log but there is no span or element

    const count = calcEntry.childElementCount; // to count how many child there is in calcEntry

    const p = document.createElement('p'); // making element inside the "Area Calculator"
    p.classList.add('my-4', 'font-medium', 'text-base'); // adding extra classes to <p>
    p.innerHTML = `${count + 1}. ${areaType}   ${area} cm<sup>2</sup> <button class="btn btn-sm ml-2 text-white bg-emerald-400 hover:bg-black">Convert</button>` // <p> gets its assigned values with html attributes

    calcEntry.appendChild(p); // appending <p> to parent calcEntry

    //p-s: ${count + 1} +1 to start count from 1.
}