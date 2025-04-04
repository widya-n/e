// رسالة الترحيب
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
        const welcomeMessage = document.createElement('div');
        welcomeMessage.classList.add('welcome-message');
        
        welcomeMessage.innerHTML = `
            <div class="welcome-content">
                <h2>مرحباً بك في مياه وديان</h2>
                <p>نقدم لك مياه شرب طبيعية خالية من الصوديوم للحفاظ على صحتك ونشاطك اليومي</p>
                <button class="close-welcome">استكشف الموقع</button>
            </div>
        `;
        
        document.body.appendChild(welcomeMessage);
        
        document.querySelector('.close-welcome').addEventListener('click', function() {
            welcomeMessage.style.opacity = '0';
            setTimeout(() => {
                welcomeMessage.remove();
            }, 500);
        });
    }, 1000);
});

// إضافة الأنماط لرسالة الترحيب
const welcomeStyles = document.createElement('style');
welcomeStyles.textContent = `
    .welcome-message {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(95, 75, 139, 0.95);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 9999;
        transition: opacity 0.5s ease;
    }
    
    .welcome-content {
        background-color: white;
        padding: 2rem;
        border-radius: 15px;
        text-align: center;
        max-width: 500px;
        color: #5F4B8B;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
        animation: fadeIn 0.5s ease-out;
    }
    
    .welcome-content h2 {
        margin-bottom: 1rem;
        font-size: 2rem;
    }
    
    .welcome-content p {
        margin-bottom: 1.5rem;
        font-size: 1.2rem;
    }
    
    .close-welcome {
        background-color: #5F4B8B;
        color: white;
        border: none;
        padding: 0.8rem 1.5rem;
        border-radius: 25px;
        font-size: 1rem;
        cursor: pointer;
        transition: background-color 0.3s;
    }
    
    .close-welcome:hover {
        background-color: #4a3a6c;
    }
`;

document.head.appendChild(welcomeStyles);