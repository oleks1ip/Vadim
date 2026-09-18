const noBtn = document.getElementById('noBtn');

// Playful runaway functionality for the "No" button
function moveNoButton() {
    // Get viewport boundaries
    const padding = 20;
    const btnWidth = noBtn.offsetWidth;
    const btnHeight = noBtn.offsetHeight;

    const maxX = window.innerWidth - btnWidth - padding;
    const maxY = window.innerHeight - btnHeight - padding;

    // Generate random positions across the screen
    const randomX = Math.max(padding, Math.floor(Math.random() * maxX));
    const randomY = Math.max(padding, Math.floor(Math.random() * maxY));

    // Switch to fixed positioning when hovered/touched
    noBtn.style.position = 'fixed';
    noBtn.style.left = `${randomX}px`;
    noBtn.style.top = `${randomY}px`;
}

// Trigger evasion on desktop hover and mobile touch
noBtn.addEventListener('mouseenter', moveNoButton);
noBtn.addEventListener('touchstart', (e) => {
    e.preventDefault();
    moveNoButton();
});

// Backup clickhandler in case user clicks fast
noBtn.addEventListener('click', (e) => {
    e.preventDefault();
    moveNoButton();
});