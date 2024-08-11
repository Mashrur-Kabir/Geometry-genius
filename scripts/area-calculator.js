document.getElementById("tri-btn").addEventListener("click", function(){
    // triangle base value
    const triBase = getValue('tri-base');

    // triangle height value
    const triHeight = getValue('tri-height');

    const triArea = 0.5 * triBase * triHeight; 

    const areaShowcase = document.getElementById('tri-res');
    areaShowcase.innerText = triArea;
});

document.getElementById("rec-btn").addEventListener("click", function(){
    // rectangle width value
    const recWidth = getValue('rec-width');

    // rectangle length value
    const recLength = getValue('rec-length');

    const recArea = recWidth * recLength;

    const areaShowcase = document.getElementById('rec-res');
    areaShowcase.innerText = recArea;
});