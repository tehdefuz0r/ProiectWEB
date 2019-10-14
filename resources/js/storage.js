function clickCounter1() {
	"use strict";
    if(typeof(Storage) !== "undefined") {
        if (sessionStorage.clickcount) {
            sessionStorage.clickcount = Number(sessionStorage.clickcount)+1;
        } else {
            sessionStorage.clickcount = 1;
        }
        document.getElementById("result1").innerHTML = "Ai apasat pe buton de " + sessionStorage.clickcount + " ori sesiunea asta";
    } else {
        document.getElementById("result1").innerHTML = "Sorry, your browser does not support web storage...";
    }
}

function clickCounter() {
	"use strict";
    if(typeof(Storage) !== "undefined") {
        if (localStorage.clickcount) {
            localStorage.clickcount = Number(localStorage.clickcount)+1;
        } else {
            localStorage.clickcount = 1;
        }
        document.getElementById("result").innerHTML = "Ai apasat pe buton de " + localStorage.clickcount + " ori";
    } else {
        document.getElementById("result").innerHTML = "Sorry, your browser does not support web storage...";
    }
}
	// JavaScript Document