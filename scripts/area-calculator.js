function calculateTriangleArea(){
    // triangle base value
    const triBaseField = document.getElementById('tri-base');
    const triBaseString = triBaseField.value;
    const triBase = parseFloat(triBaseString);

    //triangle height value
    const triHeightField = document.getElementById('tri-height');
    const triHeightString = triHeightField.value;
    const triHeight = parseFloat(triHeightString);

    const triArea = 0.5 * triBase * triHeight; 

    const areaShowcase = document.getElementById('tri-res');
    areaShowcase.innerText = triArea;
}

function calculateRectangleArea(){
    // rectangle width value
    const recWidthField = document.getElementById('rec-width');
    const recWidthString = recWidthField.value;
    const recWidth = parseFloat(recWidthString);

    // rectangle length value
    const recLengthField = document.getElementById('rec-length');
    const recLengthString = recLengthField.value;
    const recLength = parseFloat(recLengthString);

    const recArea = recWidth * recLength;

    const areaShowcase = document.getElementById('rec-res');
    areaShowcase.innerText = recArea;
}