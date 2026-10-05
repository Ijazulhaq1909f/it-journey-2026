// ============================================
// IJAZ UL HAQ KHAN - PORTFOLIO SCRIPT
// ============================================

// ---------- DARK MODE TOGGLE ----------

const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

//check

const savedTheme = localStorage.getItem("theme");
if(savedTheme === "dark"){
    body.classList.add("dark-mode");
    themeToggle.textContent = "☀️" ;
}

themeToggle.addEventListener("click",() => {
    body.classList.toggle("dark-mode")


if(body.classList.contains("dark-mode")){
    themeToggle.textContent = "☀️";
    localStorage.setItem9("theme", "dark");
} else{
    themeToggle.textContent = "🌙";
    localStorage.setItem("theme", "light");
}
});


// ---------- SMOOTH SCROLLING ----------
const navLinks = document.querySelectorAll('nav a[href^="#"]');

navLinks.forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        const targetId = link.getAttribute("href");
        const target = document.querySelector(targetId);

        if (target) {
            target.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    });
});

// ---------- SCROLL ANIMATION (Bonus) ----------
// Sections fade in jab view mein aayein
const sections = document.querySelectorAll("section");

const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, observerOptions);

sections.forEach(section => {
    section.style.opacity = "0";
    section.style.transform = "translateY(20px)";
    section.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    observer.observe(section);
});

// ---------- CONSOLE MESSAGE ----------
console.log("Portfolio loaded successfully! 🚀");
