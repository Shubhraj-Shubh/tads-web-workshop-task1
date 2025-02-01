function multiplyMatrices() {
    let a1 = parseFloat(document.getElementById("a1").value) || 0;
    let a2 = parseFloat(document.getElementById("a2").value) || 0;
    let a3 = parseFloat(document.getElementById("a3").value) || 0;
    let a4 = parseFloat(document.getElementById("a4").value) || 0;

    let b1 = parseFloat(document.getElementById("b1").value) || 0;
    let b2 = parseFloat(document.getElementById("b2").value) || 0;
    let b3 = parseFloat(document.getElementById("b3").value) || 0;
    let b4 = parseFloat(document.getElementById("b4").value) || 0;

    document.getElementById("r1").value = a1 * b1 + a2 * b3; 
    document.getElementById("r2").value = a1 * b2 + a2 * b4; 
    document.getElementById("r3").value = a3 * b1 + a4 * b3; 
    document.getElementById("r4").value = a3 * b2 + a4 * b4; 
}

function addMatrices() {
    let a1 = parseFloat(document.getElementById("a1").value) || 0;
    let a2 = parseFloat(document.getElementById("a2").value) || 0;
    let a3 = parseFloat(document.getElementById("a3").value) || 0;
    let a4 = parseFloat(document.getElementById("a4").value) || 0;

    let b1 = parseFloat(document.getElementById("b1").value) || 0;
    let b2 = parseFloat(document.getElementById("b2").value) || 0;
    let b3 = parseFloat(document.getElementById("b3").value) || 0;
    let b4 = parseFloat(document.getElementById("b4").value) || 0;

    document.getElementById("r1").value = a1 + b1; 
    document.getElementById("r2").value = a2 + b2; 
    document.getElementById("r3").value = a3 + b3; 
    document.getElementById("r4").value = a4 + b4; 
}

function subtractMatrices() {
    let a1 = parseFloat(document.getElementById("a1").value) || 0;
    let a2 = parseFloat(document.getElementById("a2").value) || 0;
    let a3 = parseFloat(document.getElementById("a3").value) || 0;
    let a4 = parseFloat(document.getElementById("a4").value) || 0;

    let b1 = parseFloat(document.getElementById("b1").value) || 0;
    let b2 = parseFloat(document.getElementById("b2").value) || 0;
    let b3 = parseFloat(document.getElementById("b3").value) || 0;
    let b4 = parseFloat(document.getElementById("b4").value) || 0;

    document.getElementById("r1").value = a1 - b1; 
    document.getElementById("r2").value = a2 - b2; 
    document.getElementById("r3").value = a3 - b3; 
    document.getElementById("r4").value = a4 - b4; 
}

