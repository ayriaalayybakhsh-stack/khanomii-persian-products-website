const toggleBtns = document.querySelectorAll('.themeToggle');
const icons = document.querySelectorAll('.themeIcon');

function updateTheme() {
    const isDark = document.documentElement.classList.contains('dark');
    icons.forEach(icon => {
        if (isDark) {
            icon.style.transform = 'translateX(-44px)';
            icon.textContent = '☀️';
        } else {
            icon.style.transform = 'translateX(0)';
            icon.textContent = '🌙';
        }
    });
}

if (localStorage.getItem('theme') === 'dark') {
    document.documentElement.classList.add('dark');
    updateTheme();
}

toggleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        document.documentElement.classList.toggle('dark');
        updateTheme();
        localStorage.setItem('theme',
            document.documentElement.classList.contains('dark') ? 'dark' : 'light'
        );
    });
});



// Menu Mobile

document.querySelector('.menuHumberger').addEventListener('click', function () {
    document.getElementById('boxMenu').classList.toggle('hidden');
});

document.getElementById('menuHumberger').addEventListener('pointerdown', function (e) {
    e.preventDefault();
    document.getElementById('boxMenu').classList.toggle('hidden');
});



// Slider

const container = document.getElementById('sliderContent');
const prevBtn = document.getElementById('prevSlide');
const nextBtn = document.getElementById('nextSlide');

const scrollAmount = 370;

nextBtn.addEventListener('click', () => {
    container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
});

prevBtn.addEventListener('click', () => {
    container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
});