// Scroll to the specific card when its corresponding button is clicked
document.querySelectorAll('.navigation-buttons button').forEach(button => {
    button.addEventListener('click', () => {
        const index = button.getAttribute('data-index');
        const cardToScrollTo = cards[index];
        if (cardToScrollTo) {
            cardToScrollTo.scrollIntoView({ behavior: 'smooth', inline: 'start' });
        }
    });
});

