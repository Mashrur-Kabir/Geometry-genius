document.getElementById("tri-btn").addEventListener("click", function(){
    // triangle base value
    const triBase = getValue('tri-base');

    // triangle height value
    const triHeight = getValue('tri-height');

    const triArea = 0.5 * triBase * triHeight; // area
    
    setElementInnerText('tri-res', triArea);
});

document.getElementById("rec-btn").addEventListener("click", function(){
    // rectangle width value
    const recWidth = getValue('rec-width');

    // rectangle length value
    const recLength = getValue('rec-length');

    const recArea = recWidth * recLength; // area

    setElementInnerText('rec-res', recArea);
});

document.getElementById("par-btn").addEventListener("click", function(){
    // parallelogram base value
    const parBase = getValue('par-base');

    // parallelogram height value
    const parHeight = getValue('par-height');

    const parArea = parBase * parHeight; // area
    
    setElementInnerText('par-res', parArea)
});

document.getElementById("ell-btn").addEventListener("click", function(){
    // ellipse major radius value
    const majorRad = getValue('majorRadius');

    // ellipse minor radius value
    const minorRad = getValue('minorRadius');

    const ellArea = 3.1416 * majorRad * minorRad ; // area
    
    setElementInnerText('ell-res', ellArea)
});