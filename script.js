document.addEventListener('DOMContentLoaded', () => {
    const ball = document.getElementById('ball');
    ball.addEventListener('animationend', () => {
        document.getElementById('content').classList.remove('hidden');
    });
});
