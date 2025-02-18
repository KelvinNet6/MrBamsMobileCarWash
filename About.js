const flipCards = document.querySelectorAll('.flip-card');

flipCards.forEach(card => {
    card.addEventListener('click', () => {
        card.classList.toggle('is-flipped');
    });
});

        const modal = document.getElementById("locationMapModal");
        const openMapBtn = document.getElementById("openMapBtn");
        const closeBtn = document.getElementsByClassName("close")[0];

        openMapBtn.onclick = function() {
            modal.style.display = "block";
        }

        closeBtn.onclick = function() {
            modal.style.display = "none";
        }

        window.onclick = function(event) {
            if (event.target === modal) {
                modal.style.display = "none";
            }
        }
