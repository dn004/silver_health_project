
// JavaScript to toggle the display of illness details when an illness card is clicked

const illnessCards = document.querySelectorAll('.illness-card');

illnessCards.forEach((card) => {
    card.addEventListener('click', () => {
        card.classList.toggle('show-details');
    });
});

const searchInput = document.getElementById('search-input');

searchInput.addEventListener('input', () => {
    const searchTerm = searchInput.value.trim().toLowerCase();

    illnessCards.forEach((card) => {
        const illnessTitle = card.querySelector('.illness-title').textContent.toLowerCase();
        const illnessDetails = card.querySelector('.illness-details').textContent.toLowerCase();

        if (illnessTitle.includes(searchTerm) || illnessDetails.includes(searchTerm)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
});
