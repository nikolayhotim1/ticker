'usestrict';
let tick = true;

function ticker() {
    if (tick) {
        console.log("Tick");
        tick = false;
    } else {
        console.log("Tock");
        tick = true;
    }
}

setInterval(ticker, 1000);
/*
Tick
Tock
Tick
Tock
*/

// let t = setInterval(ticker, 1000);
// clearInterval(t);
