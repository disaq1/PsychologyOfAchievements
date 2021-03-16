let diagnoz = document.getElementById("diagnoz");
let alcko = document.getElementById("alcko");
let zdorivie = document.getElementById("zdorivie");
let mother = document.getElementById("mother");
let other = document.getElementById("other");

//Написать проверку на наличие checked на other
other.onclick = function() {
    diagnoz.setAttribute("disabled");
    alcko.setAttribute("disabled");
    zdorivie.setAttribute("disabled");
    mother.setAttribute("disabled");
}