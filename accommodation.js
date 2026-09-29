/**
 * PRAVAAH 2026 - CAMPUS RESIDENCY & ACCOMMODATION MATRIX ENGINE
 */

document.addEventListener("DOMContentLoaded", () => {
    // Nav indicator alignment
    const activeNav = document.querySelector('.nav-item.active');
    const pill = document.getElementById('nav-indicator-pill');
    if (activeNav && pill) {
        setTimeout(() => {
            pill.style.left = `${activeNav.offsetLeft}px`;
            pill.style.width = `${activeNav.offsetWidth}px`;
        }, 100);
    }

    // DOM References
    const resCards = document.querySelectorAll(".res-card");
    const checkInSelect = document.getElementById("check-in-date");
    const checkOutSelect = document.getElementById("check-out-date");
    const maleCountEl = document.getElementById("maleCount");
    const femaleCountEl = document.getElementById("femaleCount");
    const maleMinus = document.getElementById("maleMinus");
    const malePlus = document.getElementById("malePlus");
    const femaleMinus = document.getElementById("femaleMinus");
    const femalePlus = document.getElementById("femalePlus");
    const messAddonCheckbox = document.getElementById("messAddonCheckbox");

    // Live Pass Preview Targets
    const liveHallBadge = document.getElementById("liveHallBadge");
    const liveAccName = document.getElementById("liveAccName");
    const liveAccCollege = document.getElementById("liveAccCollege");
    const liveNights = document.getElementById("liveNights");
    const liveGuestsCount = document.getElementById("liveGuestsCount");
    const liveMessStatus = document.getElementById("liveMessStatus");
    const liveStayCost = document.getElementById("liveStayCost");
    const totalStayCostDisplay = document.getElementById("totalStayCostDisplay");
    const liveResId = document.getElementById("liveResId");

    // Form inputs
    const accName = document.getElementById("acc-name");
    const accCollege = document.getElementById("acc-college");
    const accommodationForm = document.getElementById("accommodationForm");

    // Modal targets
    const accSuccessModal = document.getElementById("accSuccessModal");
    const closeAccModalBtn = document.getElementById("closeAccModalBtn");
    const modalAccName = document.getElementById("modalAccName");
    const modalHall = document.getElementById("modalHall");
    const modalNights = document.getElementById("modalNights");
    const modalGuests = document.getElementById("modalGuests");
    const modalAccTotal = document.getElementById("modalAccTotal");

    // State
    let selectedHall = "Mahanadi Boys Hall";
    let selectedRate = 450;
    let maleGuests = 1;
    let femaleGuests = 0;
    let includeMess = true;
    let currentResId = "RES-2026-" + Math.floor(1000 + Math.random() * 9000);

    if (liveResId) liveResId.textContent = currentResId;

    // Residence Card Handlers
    resCards.forEach(card => {
        card.addEventListener("click", () => {
            const hall = card.dataset.hall;
            const rate = parseInt(card.dataset.rate, 10);
            setResidenceHall(hall, rate, card);
        });
    });

    function setResidenceHall(hall, rate, cardEl) {
        selectedHall = hall;
        selectedRate = rate;

        resCards.forEach(c => c.classList.remove("selected"));
        if (cardEl) {
            cardEl.classList.add("selected");
        }

        updateCalculations();
    }

    // Guest Counters
    if (maleMinus) {
        maleMinus.addEventListener("click", () => {
            if (maleGuests > 0 && (maleGuests + femaleGuests) > 1) {
                maleGuests--;
                if (maleCountEl) maleCountEl.textContent = maleGuests;
                updateCalculations();
            }
        });
    }
    if (malePlus) {
        malePlus.addEventListener("click", () => {
            maleGuests++;
            if (maleCountEl) maleCountEl.textContent = maleGuests;
            updateCalculations();
        });
    }
    if (femaleMinus) {
        femaleMinus.addEventListener("click", () => {
            if (femaleGuests > 0 && (maleGuests + femaleGuests) > 1) {
                femaleGuests--;
                if (femaleCountEl) femaleCountEl.textContent = femaleGuests;
                updateCalculations();
            }
        });
    }
    if (femalePlus) {
        femalePlus.addEventListener("click", () => {
            femaleGuests++;
            if (femaleCountEl) femaleCountEl.textContent = femaleGuests;
            updateCalculations();
        });
    }

    // Date calculations
    if (checkInSelect) checkInSelect.addEventListener("change", updateCalculations);
    if (checkOutSelect) checkOutSelect.addEventListener("change", updateCalculations);
    if (messAddonCheckbox) {
        messAddonCheckbox.addEventListener("change", (e) => {
            includeMess = e.target.checked;
            updateCalculations();
        });
    }

    function calculateNights() {
        if (!checkInSelect || !checkOutSelect) return 3;
        const inDate = new Date(checkInSelect.value);
        const outDate = new Date(checkOutSelect.value);

        let diff = Math.ceil((outDate - inDate) / (1000 * 60 * 60 * 24));
        return diff > 0 ? diff : 1;
    }

    function updateCalculations() {
        const nights = calculateNights();
        const totalGuests = maleGuests + femaleGuests;

        const roomCost = selectedRate * nights * totalGuests;
        const messCost = includeMess ? (180 * nights * totalGuests) : 0;
        const totalCost = roomCost + messCost;

        // Update Live Ticket Pass Card Preview
        if (liveHallBadge) liveHallBadge.textContent = selectedHall.toUpperCase();
        if (liveNights) liveNights.textContent = `${nights} NIGHT${nights > 1 ? 'S' : ''}`;
        if (liveGuestsCount) liveGuestsCount.textContent = `${totalGuests} DELEGATE${totalGuests > 1 ? 'S' : ''} (${maleGuests}M / ${femaleGuests}F)`;
        if (liveMessStatus) {
            liveMessStatus.textContent = includeMess ? "INCLUDED (+₹180/DAY)" : "EXCLUDED";
            liveMessStatus.className = includeMess ? "t-val status-active" : "t-val";
        }
        if (liveStayCost) liveStayCost.textContent = `₹${totalCost}`;
        if (totalStayCostDisplay) totalStayCostDisplay.textContent = `₹${totalCost}`;
    }

    // Real-time text input listeners for live pass preview
    if (accName) {
        accName.addEventListener("input", (e) => {
            const val = e.target.value.trim();
            if (liveAccName) {
                liveAccName.textContent = val ? val.toUpperCase() : "ALEX MERCER";
            }
        });
    }

    if (accCollege) {
        accCollege.addEventListener("input", (e) => {
            const val = e.target.value.trim();
            if (liveAccCollege) {
                liveAccCollege.textContent = val ? val.toUpperCase() : "IIT BHUBANESWAR";
            }
        });
    }

    // Submit handler
    if (accommodationForm) {
        accommodationForm.addEventListener("submit", (e) => {
            e.preventDefault();

            const nights = calculateNights();
            const totalGuests = maleGuests + femaleGuests;
            const nameVal = accName ? accName.value : "Alex Mercer";

            if (modalAccName) modalAccName.textContent = nameVal;
            if (modalHall) modalHall.textContent = selectedHall;
            if (modalNights) modalNights.textContent = `${nights} Nights (${checkInSelect.value} to ${checkOutSelect.value})`;
            if (modalGuests) modalGuests.textContent = `${totalGuests} Delegates (${maleGuests} Male, ${femaleGuests} Female)`;
            if (modalAccTotal) modalAccTotal.textContent = totalStayCostDisplay ? totalStayCostDisplay.textContent : "₹1,890";

            if (accSuccessModal) {
                accSuccessModal.classList.add("modal-open");
            }
        });
    }

    if (closeAccModalBtn) {
        closeAccModalBtn.addEventListener("click", () => {
            if (accSuccessModal) {
                accSuccessModal.classList.remove("modal-open");
            }
        });
    }

    // Initialize
    updateCalculations();
});
