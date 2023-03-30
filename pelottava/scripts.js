let mode = new Boolean(true);

function toggle() {
    if(mode) {
        document.getElementById("sivulista").style.width = "fit-content";
        mode = false;
    } else {
        mode = true;
        document.getElementById("sivulista").style.width = "0";
    }
}

//function openNav() {
    //document.getElementById("sivulista").style.width = "200px";
//}
function closeNav() {
    document.getElementById("emolevy").style.display = "none";
    document.getElementById("prosessori").style.display = "none";
    document.getElementById("muisti").style.display = "none";
    document.getElementById("tallennus").style.display = "none";
    document.getElementById("gpu").style.display = "none";
    document.getElementById("psu").style.display = "none";
    document.getElementById("koppa").style.display = "none";
}

function etusivu() {
    document.getElementById("emolevy").style.display = "none";
    document.getElementById("etusivu").style.display = "flex";
    document.getElementById("prosessori").style.display = "none";
    document.getElementById("muisti").style.display = "none";
    document.getElementById("tallennus").style.display = "none";
    document.getElementById("gpu").style.display = "none";
    document.getElementById("psu").style.display = "none";
    document.getElementById("koppa").style.display = "none";
    document.getElementById("lisä").style.display = "none";
}

function emolevy() {
    document.getElementById("emolevy").style.display = "flex";
    document.getElementById("etusivu").style.display = "none";
    document.getElementById("prosessori").style.display = "none";
    document.getElementById("muisti").style.display = "none";
    document.getElementById("tallennus").style.display = "none";
    document.getElementById("gpu").style.display = "none";
    document.getElementById("psu").style.display = "none";
    document.getElementById("koppa").style.display = "none";
    document.getElementById("lisä").style.display = "none";
}

function prosessori() {
    document.getElementById("emolevy").style.display = "none";
    document.getElementById("etusivu").style.display = "none";
    document.getElementById("prosessori").style.display = "flex";
    document.getElementById("muisti").style.display = "none";
    document.getElementById("tallennus").style.display = "none";
    document.getElementById("gpu").style.display = "none";
    document.getElementById("psu").style.display = "none";
    document.getElementById("koppa").style.display = "none";
    document.getElementById("lisä").style.display = "none";
}

function muisti() {
    document.getElementById("emolevy").style.display = "none";
    document.getElementById("etusivu").style.display = "none";
    document.getElementById("prosessori").style.display = "none";
    document.getElementById("muisti").style.display = "flex";
    document.getElementById("tallennus").style.display = "none";
    document.getElementById("gpu").style.display = "none";
    document.getElementById("psu").style.display = "none";
    document.getElementById("koppa").style.display = "none";
    document.getElementById("lisä").style.display = "none";
}

function tallennus() {
    document.getElementById("emolevy").style.display = "none";
    document.getElementById("etusivu").style.display = "none";
    document.getElementById("prosessori").style.display = "none";
    document.getElementById("muisti").style.display = "none";
    document.getElementById("tallennus").style.display = "flex";
    document.getElementById("gpu").style.display = "none";
    document.getElementById("psu").style.display = "none";
    document.getElementById("koppa").style.display = "none";
    document.getElementById("lisä").style.display = "none";
}

function gpu() {
    document.getElementById("emolevy").style.display = "none";
    document.getElementById("etusivu").style.display = "none";
    document.getElementById("prosessori").style.display = "none";
    document.getElementById("muisti").style.display = "none";
    document.getElementById("tallennus").style.display = "none";
    document.getElementById("gpu").style.display = "flex";
    document.getElementById("psu").style.display = "none";
    document.getElementById("koppa").style.display = "none";
    document.getElementById("lisä").style.display = "none";
}

function koppa() {
    document.getElementById("emolevy").style.display = "none";
    document.getElementById("etusivu").style.display = "none";
    document.getElementById("prosessori").style.display = "none";
    document.getElementById("muisti").style.display = "none";
    document.getElementById("tallennus").style.display = "none";
    document.getElementById("gpu").style.display = "none";
    document.getElementById("psu").style.display = "none";
    document.getElementById("koppa").style.display = "flex";
    document.getElementById("lisä").style.display = "none";
}

function psu() {
    document.getElementById("emolevy").style.display = "none";
    document.getElementById("etusivu").style.display = "none";
    document.getElementById("prosessori").style.display = "none";
    document.getElementById("muisti").style.display = "none";
    document.getElementById("tallennus").style.display = "none";
    document.getElementById("gpu").style.display = "none";
    document.getElementById("psu").style.display = "flex";
    document.getElementById("koppa").style.display = "none";
    document.getElementById("lisä").style.display = "none";
}