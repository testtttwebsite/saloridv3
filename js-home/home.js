const INVITE_CODE = 'F2NzsMGmFC'; 
let countTriggered = false;

window.addEventListener('scroll', () => {
    const scroll = window.pageYOffset;
    const max = document.documentElement.scrollHeight - window.innerHeight;
    const p = scroll / max;
    const bg = document.getElementById('bgBrand');
    
    if(bg) bg.style.transform = `translateX(${200 - (p * 4000)}px)`;

    if (p < 0.12) activate('s1');
    else if (p >= 0.12 && p < 0.25) activate('s2');
    else if (p >= 0.25 && p < 0.38) activate('s3');
    else if (p >= 0.38 && p < 0.51) activate('s4');
    else if (p >= 0.51 && p < 0.64) activate('s5');
    else if (p >= 0.64 && p < 0.77) activate('s6');
    else if (p >= 0.77 && p < 0.92) {
        activate('s7');
        if(!countTriggered) { getDiscordStats(); countTriggered = true; }
    }
    else {
        document.querySelectorAll('.scene').forEach(s => s.classList.remove('active'));
        const footer = document.getElementById('footer');
        if(footer) footer.classList.add('visible');
    }
});

function activate(id) {
    const scenes = document.querySelectorAll('.scene');
    scenes.forEach(s => s.classList.remove('active'));
    
    const footer = document.getElementById('footer');
    if(footer) footer.classList.remove('visible');
    
    const el = document.getElementById(id);
    if(el) el.classList.add('active');
}

async function getDiscordStats() {
    try {
        const res = await fetch(`https://discord.com/api/v9/invites/${INVITE_CODE}?with_counts=true`);
        const data = await res.json();
        if (data.approximate_member_count) {
            animateCount('total-members', data.approximate_member_count);
            animateCount('online-members', data.approximate_presence_count);
        }
    } catch (e) { console.error("Discord error"); }
}

function animateCount(id, target) {
    let current = 0;
    const el = document.getElementById(id);
    const duration = 1500;
    const start = performance.now();
    function update(now) {
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);
        current = Math.floor(progress * target);
        if(el) el.innerText = current.toLocaleString();
        if (progress < 1) requestAnimationFrame(update);
    }
    requestAnimationFrame(update);
}
