document.getElementById("tri-btn").addEventListener("click", function(){
    // triangle base value
    const triBase = getValue('tri-base');

    // triangle height value
    const triHeight = getValue('tri-height');

    const triArea = 0.5 * triBase * triHeight; // area
    
    setElementInnerText('tri-res', triArea);

    addToCalculationEntry(triArea);
});

document.getElementById("rec-btn").addEventListener("click", function(){
    // rectangle width value
    const recWidth = getValue('rec-width');

    // rectangle length value
    const recLength = getValue('rec-length');

    const recArea = (recWidth * recLength).toFixed(2); // area

    setElementInnerText('rec-res', recArea);
});

document.getElementById("par-btn").addEventListener("click", function(){
    // parallelogram base value
    const parBase = getValue('par-base');

    // parallelogram height value
    const parHeight = getValue('par-height');

    const parArea = (parBase * parHeight).toFixed(2); // area
    
    setElementInnerText('par-res', parArea);
});

document.getElementById("ell-btn").addEventListener("click", function(){
    // ellipse major radius value
    const majorRad = getValue('majorRadius');

    // ellipse minor radius value
    const minorRad = getValue('minorRadius');

    const ellArea = (3.1416 * majorRad * minorRad).toFixed(2) ; // area
    
    setElementInnerText('ell-res', ellArea);
});

document.getElementById("rhom-btn").addEventListener("click", function(){
    // rhombus base value
    const baseRhom = getValue('base-Rhom');

    // rhombus height value
    const heightRom = getValue('height-Rhom');

    const rhomArea = (0.5 * baseRhom * heightRom).toFixed(2) ; // area
    
    setElementInnerText('rhom-res', rhomArea);
});

document.getElementById("pen-btn").addEventListener("click", function(){
    // pentagon side length value
    const penSide = getValue('pen-Side');

    // pentagon apothem value
    const penApothem = getValue('pen-Apothem');

    const penArea = ((5/2) * penSide * penApothem).toFixed(2) ; // area
    
    setElementInnerText('pen-res', penArea);
});