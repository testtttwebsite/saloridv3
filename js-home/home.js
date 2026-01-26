function initHome() {
    const observerOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const scrollObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                entry.target.classList.add('reveal');
            }
        });
    }, observerOptions);

    const staticTargets = document.querySelectorAll('.hero .reveal, .hero h1, .hero p');
    staticTargets.forEach(el => scrollObserver.observe(el));

    const container = document.getElementById('dynamic-content');
    if (container) {
        const rows = [
            {
                img: 'assets/preview1.png',
                title: 'Placeholder',
                desc: 'Placeholder Text (this is where you put the actual text)'
            },        
            {
                img: 'assets/preview2.png',
                title: 'Placeholder',
                desc: 'Placeholder Text (this is where you put the actual text)'
            },
            {
                img: 'assets/preview3.png',
                title: 'Placeholder',
                desc: 'Placeholder Text (this is where you put the actual text)'
            }
        ];

        let htmlContent = '<section class="info-section">';
        rows.forEach((row, index) => {
            htmlContent += `
                <div class="info-row fade-in-scroll">
                    <div class="info-img">
                        <img src="${row.img}" alt="${row.title}">
                    </div>
                    <div class="info-text">
                        <h2>${row.title}</h2>
                        <p>${row.desc}</p>
                        <a href="docs.html" class="btn btn-secondary">Learn More</a>
                    </div>
                </div>
            `;
        });
        htmlContent += '</section>';
        
        container.innerHTML = htmlContent;

        const newTargets = container.querySelectorAll('.info-row');
        newTargets.forEach(el => scrollObserver.observe(el));
    }
}

document.addEventListener('DOMContentLoaded', initHome);