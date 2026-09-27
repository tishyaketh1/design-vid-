/**
 * PRAVAAH 2026 - REGISTRATION & PASSES MATRIX ENGINE
 * Dynamic Pass Configurator, Day/Events Selector & Checkout Engine
 */

document.addEventListener("DOMContentLoaded", () => {
    // Event definitions mapped by day
    const EVENTS_DATA = {
        day0: [
            { name: "Inaugural Ceremony & Laser Matrix", verse: "TECH", tag: "badge-tech" },
            { name: "Hackathon Orientation & Team Sync", verse: "TECH", tag: "badge-tech" },
            { name: "Multiverse Cultural Showcase", verse: "CULT", tag: "badge-cult" }
        ],
        day1: [
            { name: "Fashion Show (Glamour Verse)", verse: "CULT", tag: "badge-cult" },
            { name: "Data Science & AI Hackathon", verse: "TECH", tag: "badge-tech" },
            { name: "General Cyber Quiz", verse: "TECH", tag: "badge-tech" },
            { name: "Marcatus (Marketing Arena)", verse: "ENT", tag: "badge-ent" },
            { name: "Startup & Innovation Expo", verse: "ENT", tag: "badge-ent" },
            { name: "Cyberpunk Face Painting", verse: "CULT", tag: "badge-cult" },
            { name: "Robo Soccer Battleground", verse: "TECH", tag: "badge-tech" },
            { name: "51-Hour Short Film Challenge", verse: "MEDIA", tag: "badge-social" },
            { name: "Abhinay (Stage Play Drama)", verse: "DRAMA", tag: "badge-cult" }
        ],
        day2: [
            { name: "Comedy Night Special", verse: "ENT", tag: "badge-ent" },
            { name: "Full-Stack Web3 Hackathon", verse: "TECH", tag: "badge-tech" },
            { name: "Science & Technology Grand Quiz", verse: "TECH", tag: "badge-tech" },
            { name: "B-Plan Pitch Championship", verse: "ENT", tag: "badge-ent" },
            { name: "Enigma Cryptic Hunt", verse: "GAME", tag: "badge-game" },
            { name: "Innovation & Robotics Expo", verse: "TECH", tag: "badge-tech" },
            { name: "Blast Off (Aeromodelling)", verse: "TECH", tag: "badge-tech" },
            { name: "Robo Race Speedway", verse: "TECH", tag: "badge-tech" },
            { name: "Monoact Expression Challenge", verse: "DRAMA", tag: "badge-cult" },
            { name: "Tamasha (Nukkad Natak Street Play)", verse: "CULT", tag: "badge-cult" }
        ],
        day3: [
            { name: "IPL Auction Simulation", verse: "STRATEGY", tag: "badge-ent" },
            { name: "Solo Dance (Step Up Verse)", verse: "DANCE", tag: "badge-cult" },
            { name: "Group Dance Championship", verse: "DANCE", tag: "badge-cult" },
            { name: "Trekkon (Autonomous Line Follower)", verse: "ROBOTICS", tag: "badge-tech" },
            { name: "Street Dance Battle", verse: "DANCE", tag: "badge-cult" },
            { name: "Grand Celebrity Starnite Concert", verse: "STARNITE", tag: "badge-ent" }
        ]
    };

    const PRICES = {
        dayPass: { day0: 75, day1: 149, day2: 149, day3: 199 },
        visitor: { day0: 75, day1: 99, day2: 99, day3: 149 },
        fest: 449,
        starnite: 99
    };

    // DOM References
    const passCards = document.querySelectorAll(".pass-card");
    const selectionArea = document.getElementById("selectionArea");
    const selectedPassTitle = document.getElementById("selectedPassTxt") || document.getElementById("selectedPassTitle");
    const daySelectorRow = document.getElementById("daySelectorRow");
    const daySelectorBlock = document.getElementById("daySelectorBlock");
    const starniteAddonBlock = document.getElementById("starniteAddonBlock");
    const starniteAddonCheckbox = document.getElementById("starniteAddonCheckbox");
    const eventsConfigBlock = document.getElementById("eventsConfigBlock");
    const eventsListContainer = document.getElementById("eventsListContainer");
    const totalAmountVal = document.getElementById("totalAmount") || document.getElementById("totalAmountVal");
    const checkoutForm = document.getElementById("checkoutForm");
    const successModal = document.getElementById("successModal");
    const closeModalBtn = document.getElementById("closeModalBtn");

    // Modal data targets
    const modalPassType = document.getElementById("modalPassType");
    const modalDays = document.getElementById("modalDays");
    const modalEvents = document.getElementById("modalEvents");
    const modalTotal = document.getElementById("modalTotal");

    // Current State
    let currentPassType = "Fest Pass";
    let selectedDays = ["day0", "day1", "day2", "day3"];
    let selectedEvents = new Set();
    let includeStarniteAddon = false;

    // Initialize Default State
    function init() {
        const defaultCard = document.querySelector('.pass-card[data-type="Fest Pass"]') || passCards[0];
        if (defaultCard) {
            selectPass(defaultCard.dataset.type);
        }
    }

    // Card click handlers
    passCards.forEach(card => {
        card.addEventListener("click", () => {
            const passType = card.dataset.type;
            selectPass(passType);
            // Smooth scroll to configurator
            selectionArea.scrollIntoView({ behavior: "smooth", block: "nearest" });
        });
    });

    function selectPass(passType) {
        currentPassType = passType;

        // Highlight selected card
        passCards.forEach(c => {
            if (c.dataset.type === passType) {
                c.classList.add("selected");
            } else {
                c.classList.remove("selected");
            }
        });

        // Show selection area
        selectionArea.classList.remove("hidden");
        selectedPassTitle.textContent = `Selected: ${passType}`;

        // Reset state based on pass type
        if (passType === "Fest Pass") {
            selectedDays = ["day0", "day1", "day2", "day3"];
            daySelectorBlock.style.display = "none";
            starniteAddonBlock.style.display = "none";
            eventsConfigBlock.style.display = "block";
            includeStarniteAddon = false;
        } else if (passType === "Day Pass") {
            selectedDays = ["day1"]; // Default to day1
            daySelectorBlock.style.display = "block";
            starniteAddonBlock.style.display = "none";
            eventsConfigBlock.style.display = "block";
            includeStarniteAddon = false;
            renderDaySelectors("Day Pass");
        } else if (passType === "Visitor Pass") {
            selectedDays = ["day1"]; // Default to day1
            daySelectorBlock.style.display = "block";
            starniteAddonBlock.style.display = "block";
            eventsConfigBlock.style.display = "block";
            includeStarniteAddon = false;
            if (starniteAddonCheckbox) starniteAddonCheckbox.checked = false;
            renderDaySelectors("Visitor Pass");
        } else if (passType === "Starnite Pass") {
            selectedDays = ["day3"];
            daySelectorBlock.style.display = "none";
            starniteAddonBlock.style.display = "none";
            eventsConfigBlock.style.display = "block";
            includeStarniteAddon = false;
        }

        renderEvents();
        updateTotalPrice();
    }

    function renderDaySelectors(type) {
        daySelectorRow.innerHTML = "";
        const daysInfo = [
            { key: "day0", label: "Day 0 (Oct 15)", desc: "Inauguration & Tech Showcase", priceDay: 75, priceVisitor: 75 },
            { key: "day1", label: "Day 1 (Oct 16)", desc: "Robotics Arena & Hackathons", priceDay: 149, priceVisitor: 99 },
            { key: "day2", label: "Day 2 (Oct 17)", desc: "Cultural Stage & Esports", priceDay: 149, priceVisitor: 99 },
            { key: "day3", label: "Day 3 (Oct 18)", desc: "Grand Finale & Starnite", priceDay: 199, priceVisitor: 149 }
        ];

        daysInfo.forEach(d => {
            const card = document.createElement("div");
            card.className = `day-card ${selectedDays.includes(d.key) ? "active" : ""}`;
            card.dataset.day = d.key;

            const price = type === "Day Pass" ? d.priceDay : d.priceVisitor;

            card.innerHTML = `
                <div class="day-card-name">${d.label}</div>
                <div class="day-card-price">₹${price} / day</div>
                <div class="day-card-desc">${d.desc}</div>
            `;

            card.addEventListener("click", () => {
                toggleDay(d.key, type, card);
            });

            daySelectorRow.appendChild(card);
        });
    }

    function toggleDay(dayKey, type, cardEl) {
        if (type === "Day Pass" || type === "Visitor Pass") {
            // Multi-day toggle supported
            if (selectedDays.includes(dayKey)) {
                if (selectedDays.length > 1) {
                    selectedDays = selectedDays.filter(d => d !== dayKey);
                    cardEl.classList.remove("active");
                } else {
                    // Keep at least one day selected
                    return;
                }
            } else {
                selectedDays.push(dayKey);
                cardEl.classList.add("active");
            }
        }
        renderEvents();
        updateTotalPrice();
    }

    if (starniteAddonCheckbox) {
        starniteAddonCheckbox.addEventListener("change", (e) => {
            includeStarniteAddon = e.target.checked;
            updateTotalPrice();
        });
    }

    function renderEvents() {
        eventsListContainer.innerHTML = "";
        selectedEvents.clear();

        let availableEvents = [];
        selectedDays.forEach(dayKey => {
            if (EVENTS_DATA[dayKey]) {
                EVENTS_DATA[dayKey].forEach(ev => {
                    availableEvents.push({ ...ev, dayKey: dayKey });
                });
            }
        });

        if (availableEvents.length === 0) {
            eventsListContainer.innerHTML = `<div style="text-align:center; padding: 20px; color: var(--text-muted); font-size: 0.8rem;">No events scheduled for selected dates.</div>`;
            return;
        }

        availableEvents.forEach((ev, idx) => {
            const row = document.createElement("div");
            row.className = "event-row";
            const inputId = `ev_check_${idx}`;

            // Auto-check events by default
            selectedEvents.add(ev.name);

            const isSelectable = currentPassType !== "Visitor Pass";

            row.innerHTML = `
                <div class="event-left">
                    ${isSelectable ? `<input type="checkbox" id="${inputId}" class="event-checkbox" checked data-event="${ev.name}">` : `<span style="font-size: 0.85rem; color: var(--tech-color);">✦</span>`}
                    <label for="${inputId}" class="event-label">${ev.name}</label>
                    <span class="event-day-pill">${ev.dayKey.toUpperCase()}</span>
                </div>
                <a href="https://pravaah.iitbbs.ac.in/events.html" target="_blank" class="pdf-rule-link">
                    <span>📄 Rulebook</span>
                </a>
            `;

            if (isSelectable) {
                const cb = row.querySelector(".event-checkbox");
                cb.addEventListener("change", (e) => {
                    if (e.target.checked) {
                        selectedEvents.add(ev.name);
                    } else {
                        selectedEvents.delete(ev.name);
                    }
                });
            }

            eventsListContainer.appendChild(row);
        });
    }

    function updateTotalPrice() {
        let total = 0;

        if (currentPassType === "Fest Pass") {
            total = PRICES.fest;
        } else if (currentPassType === "Day Pass") {
            selectedDays.forEach(day => {
                total += PRICES.dayPass[day] || 0;
            });
        } else if (currentPassType === "Visitor Pass") {
            selectedDays.forEach(day => {
                total += PRICES.visitor[day] || 0;
            });
            if (includeStarniteAddon) {
                total += PRICES.starnite;
            }
        } else if (currentPassType === "Starnite Pass") {
            total = PRICES.starnite;
        }

        totalAmountVal.textContent = `Total: ₹${total}`;
    }

    // Checkout Form Submission
    if (checkoutForm) {
        checkoutForm.addEventListener("submit", (e) => {
            e.preventDefault();

            // Populate Modal
            if (modalPassType) modalPassType.textContent = currentPassType;
            if (modalDays) modalDays.textContent = selectedDays.map(d => d.toUpperCase()).join(", ");
            if (modalEvents) modalEvents.textContent = `${selectedEvents.size} Events Selected`;
            if (modalTotal) modalTotal.textContent = totalAmountVal.textContent;

            // Show Success Modal
            if (successModal) {
                successModal.classList.add("modal-open");
            }
        });
    }

    if (closeModalBtn) {
        closeModalBtn.addEventListener("click", () => {
            if (successModal) {
                successModal.classList.remove("modal-open");
            }
        });
    }

    // Initialize
    init();
});
