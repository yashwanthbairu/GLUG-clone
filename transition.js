const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.5 // Trigger when 50% of element is visible
});

document.querySelectorAll('.fade-in-right').forEach((element) => {
    observer.observe(element);
});