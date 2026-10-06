const outputBox = document.getElementById("output");

function show(text) {
    const p = document.createElement("p");
    p.textContent = text;
    outputBox.appendChild(p);
}

outputBox.innerHTML = "" ;

show("=== VARIABLES===");


const myName = "Ijaz ul Haq Khan" ;
show("My name: " + myName);

const myAge = 30;
show("My age: " + myAge);

const myCity = "Karachi";
show("My City: " + myCity);

show("===Let vs Const===");

const birthDay = 1999;

show("Birth Year (const): " + birthDay);

show("this will not change");

let score = 100;
show("First score:" + score);

score = 150 ;
show("New score:" +score);

score = 200;
show("Final Score: " + score );

show("Let value  can be changed after some time.");


show("===Math with Variables===");
const a = 50;
const b = 30;

show("a = " +a);
show("b = " +b);

show("Add both a and b ");
show("a + b =" + " " + (a + b));
show("Subtract b from a ");
show("a - b =" + " " + (a - b));
show("Multiply both a and b ");
show("a * b =" + " " + (a * b));
show("Divide both a and b ");
show("a / b =" + " " + (a / b));


show("Multiple variables...");

const firstName = "Ijaz ul Haq";
const lastName = "Khan";
const fullName = firstName + " " +lastName ;
const myProfession = "Teacher";
const myExperience = 10;


show("First Name: " + firstName);
show("Last Name: " + lastName);
show("Full Name: " + fullName);

show("I'm a " + myProfession + "  and having an expeience of " + " " + myExperience + " Years of teaching");
