function searchDocs() {
    const query = document.getElementById('docSearch').value.toLowerCase();
    const sections = document.querySelectorAll('.doc-section');
    
    sections.forEach(section => {
        const text = section.innerText.toLowerCase();
        section.style.display = text.includes(query) ? "block" : "none";
    });
}

window.addEventListener('scroll', () => {
    let current = "";
    const sections = document.querySelectorAll('.doc-section');
    const navLinks = document.querySelectorAll('.sidebar-link');

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (window.pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) {
            link.classList.add('active');
        }
    });
});