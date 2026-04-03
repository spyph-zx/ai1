const pages = [
    document.getElementById('page1'),
    document.getElementById('page2'),
    document.getElementById('page3'),
    document.getElementById('page4')
];

const finalPage = document.getElementById('finalPage');
const startScreen = document.getElementById('startScreen');
const bgMusic = document.getElementById('bgMusic');

let current = 0;

document.getElementById('enterBtn').addEventListener('click', () => {
    bgMusic.play();
    startScreen.classList.remove('active');
    pages[0].classList.add('active');
});

document.querySelectorAll('.yes').forEach(btn => {
    btn.addEventListener('click', () => {
        pages.forEach(p => p.classList.remove('active'));
        finalPage.classList.add('active');
    });
});

document.querySelectorAll('.no').forEach(btn => {
    btn.addEventListener('click', () => {
        pages[current].classList.remove('active');
        current++;
        if(current < pages.length){
            pages[current].classList.add('active');
        }
    });
});

const movingNo = document.getElementById('movingNo');

movingNo.addEventListener('click', () => {
    const frame = document.querySelector('.mobile-frame');

    const maxX = frame.clientWidth - movingNo.clientWidth;
    const maxY = frame.clientHeight - movingNo.clientHeight;

    const x = Math.random() * maxX;
    const y = Math.random() * maxY;

    movingNo.style.left = `${x}px`;
    movingNo.style.top = `${y}px`;
});
