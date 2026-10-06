const outputBox = document.getElementById("output");

function show(text) {
    const p = document.createElement("p");
    p.textContent = text;
    outputBox.appendChild(p);
}

outputBox.innerHTML = "" ;

show ("Assalam u Alaikkum, Hey");
show ("This is my first JavaScript Code.");
show ("Congratulation");

// Calculating.

show ("5 + 3 = " + (5 + 3));
show ("10 - 4 = " + (10 - 4));
show("6 * 7 = " + (6 * 7));
show("20 / 4 " + (20 / 4));