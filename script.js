let currentPage = 1;
const totalPages = 10;

const previousBtn = document.getElementById('previousBtn');
const nextBtn = document.getElementById('nextBtn');
const visitProfileBtn = document.getElementById('visitProfileBtn');

previousBtn.addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        showPage(currentPage);
    }
});

nextBtn.addEventListener('click', () => {
    if (currentPage < totalPages) {
        currentPage++;
        showPage(currentPage);
    }
});

visitProfileBtn.addEventListener('click', () => {
    window.location.href = "https://ashishsuman.me";
});

function showPage(pageNumber) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        page.classList.remove('active');
    });
    document.getElementById(`page${pageNumber}`).classList.add('active');
    adjustTextareaHeights();
}

function adjustTextareaHeights() {
    document.querySelectorAll('.page.active textarea').forEach(textarea => {
        textarea.style.height = 'auto';
        textarea.style.height = (textarea.scrollHeight) + 'px';
    });
}

document.querySelectorAll('.copy-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const codeTextarea = btn.parentElement.querySelector('textarea');
        codeTextarea.select();
        document.execCommand('copy');
        alert('Code copied to clipboard!');
    });
});

if (window.matchMedia("(max-width: 600px)").matches) {
    document.getElementById("visitProfileBtn").innerText = "My Profile";
}

let btn = document.getElementById('btn');
let foot = document.getElementById('foot');

btn.addEventListener('click', function() {
    foot.style.display = 'none';
}); 

adjustTextareaHeights();
