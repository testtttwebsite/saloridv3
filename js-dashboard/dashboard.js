function downloadClient() {
    const btn = document.querySelector('.main-card .btn');
    btn.innerText = "Connecting...";
    btn.style.opacity = "0.7";
    
    setTimeout(() => {
        btn.innerText = "Downloading...";
        const link = document.createElement('a');
        link.href = '#';
        link.download = 'salorid_launcher.exe';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        
        setTimeout(() => {
            btn.innerText = "Download Client";
            btn.style.opacity = "1";
        }, 2000);
    }, 1500);
}