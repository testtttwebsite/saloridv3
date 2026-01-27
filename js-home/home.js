window.addEventListener('scroll', () => {
    if (window.innerWidth > 768) {
        const scrollY = window.scrollY;
        const heroContent = document.querySelector('.hero-content');
        
        const scaleValue = 1 + (scrollY / 300);
        const opacityValue = 1 - (scrollY / 500);
        
        if (heroContent) {
            if (opacityValue >= 0) {
                heroContent.style.transform = `scale(${scaleValue})`;
                heroContent.style.opacity = opacityValue;
                heroContent.style.visibility = "visible";
            } else {
                heroContent.style.visibility = "hidden";
            }
        }

        const cards = document.querySelectorAll('.stage-card');
        cards.forEach((card) => {
            const rect = card.getBoundingClientRect();
            if (rect.top < 150) {
                const dist = Math.abs(rect.top - 150);
                const cardScale = Math.max(0.92, 1 - (dist / 5000));
                card.style.transform = `scale(${cardScale})`;
            } else {
                card.style.transform = `scale(1)`;
            }
        });
    } else {
        const heroContent = document.querySelector('.hero-content');
        if (heroContent) {
            heroContent.style.transform = "none";
            heroContent.style.opacity = "1";
            heroContent.style.visibility = "visible";
        }
        
        const cards = document.querySelectorAll('.stage-card');
        cards.forEach((card) => {
            card.style.transform = "none";
        });
    }
});
