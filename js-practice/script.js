// ============================================
// JS PRACTICE - Class 1 & 2
// ============================================

// Output box dhundo (HTML se)




const outputBox = document.getElementById("output");

// Helper function: output box mein line add karo
function show(text) {
    const p = document.createElement("p");
    p.textContent = text;
    outputBox.appendChild(p);
}

// Purana output clear karo
outputBox.innerHTML = "";


/*
// ============================================
// CLASS 1: Console.log Samjho
// ============================================

show("Assalam-o-Alaikum, Ijaz!");

// ============================================
// CLASS 2: Variables
// ============================================

const myName = "Ijaz-ul-Haq Khan";
const myAge = 30;
const myCity = "Lahore";

show("Mera naam: " + myName);
show("Meri age: " + myAge);
show("Meri city: " + myCity);

// Math with variables
const num1 = 50;
const num2 = 30;

show("50 + 30 = " + (num1 + num2));
show("50 - 30 = " + (num1 - num2));
show("50 × 30 = " + (num1 * num2));

// Badalte variables
let score = 100;
show("Pehla score: " + score);

score = 150;
show("Naya score: " + score);

score = 200;
show("Final score: " + score);

// Console mein bhi dikhao (debugging ke liye)
console.log("Script loaded successfully!");


const myProfession = "Teacher";
const myExperience = 10;
const mySkills = "HTML, CSS"

show("My Profession: " + myProfession);
show("My Experience: " + myExperience + "saal");
show("My Skills: " + mySkills);
*/
const a = 100;
const b = 25;

show(a + " + " + b + " = " + (a + b));
show(a + " - " + b + " = " + (a - b));
show(a + " × " + b + " = " + (a * b));
show(a + " ÷ " + b + " = " + (a / b));