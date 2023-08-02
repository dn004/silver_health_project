

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

// popup

const popupContainer = document.getElementById('popup-container');
const popupIllnessTitle = document.getElementById('popup-illness-title');
const popupIllnessDetails = document.getElementById('popup-illness-details');
const closeBtn = document.getElementById('close-btn');

illnessCards.forEach((card) => {
    card.addEventListener('click', () => {
        const illnessTitle = card.querySelector('.illness-title').textContent;
        const illnessDetails = card.querySelector('.illness-details').innerHTML;

        openPopup(illnessTitle, illnessDetails);
    });
});

closeBtn.addEventListener('click', () => {
    closePopup();
});

function openPopup(title, details) {
    popupIllnessTitle.textContent = title;
    popupIllnessDetails.innerHTML = details;
    popupContainer.style.display = 'block';
}

function closePopup() {
    popupContainer.style.display = 'none';
}
