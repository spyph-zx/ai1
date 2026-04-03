document.getElementById('enter-button').addEventListener('click', function() {
    document.getElementById('start-screen').classList.add('hidden');
    document.getElementById('main-content').classList.remove('hidden');
    document.getElementById('background-audio').play();
});

const nextButtons = document.querySelectorAll('.next');
nextButtons.forEach(button => {
    button.addEventListener('click', function() {
        const currentPage = this.parentElement;
        currentPage.classList.add('hidden');
        const nextPage = currentPage.nextElementSibling;
        if (nextPage) {
            nextPage.classList.remove('hidden');
        }
    });
});

const yesButtons = document.querySelectorAll('.yes');
yesButtons.forEach(button => {
    button.addEventListener('click', function() {
        const currentPage = this.closest('.page');
        currentPage.querySelector('.next').classList.remove('hidden');
    });
});

const noButtons = document.querySelectorAll('.no');
noButtons.forEach(button => {
    button.addEventListener('click', function() {
        if (this.classList.contains('float')) {
            this.style.position = 'absolute';
            this.style.top = Math.random() * window.innerHeight + 'px';
            this.style.left = Math.random() * window.innerWidth + 'px';
        }
    });
});
