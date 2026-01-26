function processPayment(plan) {
    const overlay = document.createElement('div');
    overlay.style = `
        position: fixed; top: 0; left: 0; width: 100%; height: 100%;
        background: rgba(5, 5, 5, 0.9); backdrop-filter: blur(20px);
        z-index: 10000; display: flex; align-items: center; justify-content: center;
        opacity: 0; transition: opacity 0.4s ease;
    `;
    
    overlay.innerHTML = `
        <div class="price-card" style="width: 400px; border: 1px solid var(--accent);">
            <div class="spinner" style="width: 40px; height: 40px; border: 3px solid var(--glass); border-top-color: var(--accent); border-radius: 50%; animation: spin 1s linear infinite; margin: 0 auto 2rem;"></div>
            <h2>Processing ${plan}</h2>
            <p style="color: var(--text-muted); margin-top: 1rem;">Securing your connection to the gateway...</p>
        </div>
    `;

    document.body.appendChild(overlay);
    setTimeout(() => overlay.style.opacity = "1", 10);

    setTimeout(() => {
        overlay.innerHTML = `
            <div class="price-card" style="width: 400px; border: 1px solid var(--success);">
                <h2 style="color: var(--success);">Activation Ready</h2>
                <p style="color: var(--text-muted); margin: 1.5rem 0;">Payment successful. Welcome to the salorid family</p>
                <button class="btn btn-primary" onclick="window.location.href='dashboard.html'">Enter Dashboard</button>
            </div>
        `;
    }, 2500);
}

const style = document.createElement('style');
style.innerHTML = `@keyframes spin { to { transform: rotate(360deg); } }`;
document.head.appendChild(style);