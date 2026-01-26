let isLoginMode = true;

function initAuthLogic() {
    const authForm = document.getElementById('authForm') || document.getElementById('registerForm');
    if (authForm) {
        authForm.addEventListener('submit', handleAuthSubmit);
    }
}

function toggleAuth() {
    isLoginMode = !isLoginMode;
    
    const title = document.getElementById('authTitle');
    const subtitle = document.getElementById('authSubtitle');
    const btn = document.getElementById('authBtn');
    const toggleBtn = event.target;
    const registerFields = document.getElementById('registerFields');
    const confirmPassInput = document.getElementById('authConfirmPassword');

    if (!isLoginMode) {
        if(title) title.innerText = "Create Account";
        if(subtitle) subtitle.innerText = "Join thousands of players dominating with Salorid.";
        if(btn) btn.innerText = "Sign Up";
        if(toggleBtn) toggleBtn.innerText = "Already have an account? Login";
        
        if (registerFields) {
            registerFields.style.display = "block";
            setTimeout(() => {
                registerFields.style.opacity = "1";
                registerFields.style.transform = "translateY(0)";
            }, 10);
        }
        if(confirmPassInput) confirmPassInput.required = true;
    } else {
        if(title) title.innerText = "Welcome Back";
        if(subtitle) subtitle.innerText = "Enter your credentials to access the dashboard.";
        if(btn) btn.innerText = "Sign In";
        if(toggleBtn) toggleBtn.innerText = "Create an account";
        
        if (registerFields) {
            registerFields.style.opacity = "0";
            registerFields.style.transform = "translateY(-10px)";
            setTimeout(() => {
                registerFields.style.display = "none";
            }, 400);
        }
        if(confirmPassInput) confirmPassInput.required = false;
    }
}

function handleAuthSubmit(e) {
    e.preventDefault();
    const btn = document.getElementById('authBtn');
    const password = document.getElementById('authPassword')?.value;
    const confirmPassword = document.getElementById('authConfirmPassword')?.value;
    const termsCheck = document.getElementById('authTerms');

    if (!isLoginMode || e.target.id === 'registerForm') {
        if (password && confirmPassword && password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }
        if (termsCheck && !termsCheck.checked) {
            alert("Please agree to the Terms of Service.");
            return;
        }
    }

    btn.disabled = true;
    btn.innerHTML = `<span class="spinner" style="width:20px; height:20px; border: 2px solid rgba(255,255,255,0.3); border-top: 2px solid #fff; border-radius: 50%; display: inline-block; animation: spin 1s linear infinite;"></span>`;

    setTimeout(() => {
        btn.innerText = (isLoginMode && e.target.id !== 'registerForm') ? "Redirecting..." : "Account Created!";
        btn.style.background = "#10b981";
        
        setTimeout(() => {
            window.location.href = "dashboard.html";
        }, 1000);
    }, 1500);
}

document.addEventListener('DOMContentLoaded', initAuthLogic);