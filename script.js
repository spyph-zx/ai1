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

// ENTER BUTTON
document.getElementById('enterBtn').addEventListener('click', function() {

    bgMusic.play().catch(() => {});

    startScreen.style.display = "none";
    pages[0].style.display = "flex";
});

// YES BUTTON
document.querySelectorAll('.yes').forEach(btn => {
    btn.addEventListener('click', function() {
        document.querySelectorAll('.page').forEach(p => {
            p.style.display = "none";
        });

        finalPage.style.display = "flex";
    });
});

// NO BUTTON NORMAL
document.querySelectorAll('.no').forEach(btn => {
    btn.addEventListener('click', function() {
        pages[current].style.display = "none";
        current++;

        if(current < pages.length) {
            pages[current].style.display = "flex";
        }
    });
});

// FLOATING NO BUTTON PAGE 4
const movingNo = document.getElementById('movingNo');

movingNo.addEventListener('click', function(e) {
    e.preventDefault();

    const frame = document.querySelector('.mobile-frame');

    const maxX = frame.clientWidth - movingNo.offsetWidth;
    const maxY = frame.clientHeight - movingNo.offsetHeight;

    const x = Math.random() * maxX;
    const y = Math.random() * maxY;

    movingNo.style.left = `${x}px`;
    movingNo.style.top = `${y}px`;
});
