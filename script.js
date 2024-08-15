document.addEventListener('DOMContentLoaded', () => {
    const ball = document.getElementById('ball');
    ball.addEventListener('animationend', () => {
        ball.style.display = 'none';
        document.getElementById('content').classList.remove('hidden');
    });
});
