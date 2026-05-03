
function scrollToContent() {
    document.getElementById('features').scrollIntoView({ 
        behavior: 'smooth' 
    });
}

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

document.querySelectorAll('.glass-card').forEach(card => {
    card.style.opacity = "0";
    card.style.transform = "translateY(30px)";
    card.style.transition = "all 0.6s ease-out";
    observer.observe(card);
});

console.log("%c EASY EDIT %c System Ready ", "background: #3b82f6; color: white; font-weight: bold;", "background: #1e293b; color: #60a5fa;");