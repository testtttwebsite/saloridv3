document.addEventListener('DOMContentLoaded', () => {
    initScrollObserver();
    
    const track = document.querySelector('.nav-track');
    const bubble = document.querySelector('.bubble');
    const tabs = document.querySelectorAll('.tab');

    function moveBubble(tab, noAnimate = false) {
        if (!tab || !bubble) return;
        
        if (noAnimate) {
            bubble.style.transition = 'none';
        } else {
            bubble.style.transition = 'all 0.4s cubic-bezier(0.23, 1, 0.32, 1)';
        }

        bubble.style.width = `${tab.offsetWidth}px`;
        bubble.style.left = `${tab.offsetLeft}px`;

        if (noAnimate) {
            bubble.offsetHeight;
            bubble.style.transition = 'all 0.4s cubic-bezier(0.23, 1, 0.32, 1)';
        }
    }

    const activeTab = document.querySelector('.tab.active');
    if (activeTab) {
        moveBubble(activeTab, true);
    }

    tabs.forEach(tab => {
        tab.addEventListener('mouseenter', () => moveBubble(tab));
    });

    track.addEventListener('mouseleave', () => {
        const currentActive = document.querySelector('.tab.active');
        if (currentActive) moveBubble(currentActive);
    });

    window.addEventListener('resize', () => {
        const currentActive = document.querySelector('.tab.active');
        if (currentActive) moveBubble(currentActive, true);
    });
});

function initScrollObserver() {
    const observerOptions = { 
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const scrollObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    const targets = document.querySelectorAll('.reveal');
    targets.forEach(el => scrollObserver.observe(el));
}