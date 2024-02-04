const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar && close && nav) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
        close.style.display = 'block';
        bar.style.display = 'none';
    });

    close.addEventListener('click', () => {
        nav.classList.remove('active');
        close.style.display = 'none';
        bar.style.display = 'block';
    });
}
