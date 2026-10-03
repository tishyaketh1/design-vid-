/**
 * PRAVAAH 2026 - REGISTRATION PORTAL
 */

document.addEventListener("DOMContentLoaded", () => {
    // 1. Nav indicator pill alignment for active REGISTER nav item
    const activeNav = document.querySelector('.nav-item.active');
    const pill = document.getElementById('nav-indicator-pill');
    
    if (activeNav && pill) {
        const updatePill = () => {
            pill.style.left = `${activeNav.offsetLeft}px`;
            pill.style.width = `${activeNav.offsetWidth}px`;
        };

        updatePill();
        setTimeout(updatePill, 100);
        window.addEventListener('resize', updatePill);
    }

    // 2. Interactive Pass Selection
    const passCards = document.querySelectorAll(".pass-card");
    const selectedPassTitle = document.getElementById("selectedPassTitle");
    const selectedCardTitle = document.getElementById("selectedCardTitle");
    const selectedCardNotice = document.getElementById("selectedCardNotice");

    if (passCards.length > 0) {
        passCards.forEach(card => {
            card.addEventListener("click", () => {
                // Toggle active state
                passCards.forEach(c => c.classList.remove("selected"));
                card.classList.add("selected");

                const name = card.dataset.name || "Pass";
                const notice = card.dataset.notice || "";

                // Update selected pass details display
                if (selectedPassTitle) {
                    selectedPassTitle.textContent = `Selected: ${name}`;
                }
                if (selectedCardTitle) {
                    selectedCardTitle.textContent = name;
                }
                if (selectedCardNotice) {
                    // Exact required text for Starnite Pass
                    if (name.toLowerCase().includes("starnite")) {
                        selectedCardNotice.textContent = "IITBBS students need not register for Starnite.";
                        selectedCardNotice.style.color = "#00ff88";
                    } else {
                        selectedCardNotice.textContent = notice;
                        selectedCardNotice.style.color = "rgba(255, 255, 255, 0.85)";
                    }
                }
            });
        });
    }
});
