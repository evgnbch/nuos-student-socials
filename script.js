// Основной JS для проекта НУК Студентські соціальні мережі
// Анимация карточек при наведении

document.querySelectorAll('.social-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-8px) scale(1.02)';
    });
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Копирование ссылок при клике на QR-код

document.querySelectorAll('.qr-code').forEach(qr => {
    qr.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        const link = this.closest('.social-card').href;
        navigator.clipboard.writeText(link).then(() => {
            const originalContent = this.textContent;
            this.textContent = '✅';
            this.style.background = '#10b981';
            this.style.color = 'white';
            setTimeout(() => {
                this.textContent = originalContent;
                this.style.background = '#f8fafc';
                this.style.color = '#374151';
            }, 1500);
        }).catch(() => {
            this.textContent = '⚠️';
            setTimeout(() => {
                this.textContent = '📱';
            }, 1000);
        });
    });
});

// Эффект волн при клике

document.querySelectorAll('.social-card').forEach(card => {
    card.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = 60;
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.style.position = 'absolute';
        ripple.style.borderRadius = '50%';
        ripple.style.background = 'rgba(59, 130, 246, 0.4)';
        ripple.style.transform = 'scale(0)';
        ripple.style.animation = 'ripple 0.6s linear';
        ripple.style.pointerEvents = 'none';
        this.appendChild(ripple);
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});

// CSS для анимации волн
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);
