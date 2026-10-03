/**
 * PRAVAAH 2026 - HOLOGRAPHIC ACCESS PASS MATRIX & REGISTRATION ENGINE
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

    // Complete Event Definitions mapped by day and verse
    const EVENTS_DATA = [
        // TECH VERSE
        { id: "tech-1", name: "Robo Soccer", verse: "TECH", day: "day1", dayLabel: "DAY 1", icon: "🤖" },
        { id: "tech-2", name: "Code-A-Thon 24H", verse: "TECH", day: "day2", dayLabel: "DAY 2", icon: "💻" },
        { id: "tech-3", name: "AI Odyssey Hack", verse: "TECH", day: "day3", dayLabel: "DAY 3", icon: "🧠" },
        { id: "tech-4", name: "WebCraft UI/UX", verse: "TECH", day: "day1", dayLabel: "DAY 1", icon: "🌐" },
        { id: "tech-5", name: "Mech-Trix CAD Design", verse: "TECH", day: "day3", dayLabel: "DAY 3", icon: "⚙️" },

        // CULT VERSE
        { id: "cult-1", name: "Step Up Group Dance", verse: "CULT", day: "day2", dayLabel: "DAY 2", icon: "💃" },
        { id: "cult-2", name: "Symphony Rock Battle", verse: "CULT", day: "day3", dayLabel: "DAY 3", icon: "🎸" },
        { id: "cult-3", name: "Dramatics Street Play", verse: "CULT", day: "day1", dayLabel: "DAY 1", icon: "🎭" },
        { id: "cult-4", name: "Voice of Pravaah Solo", verse: "CULT", day: "day2", dayLabel: "DAY 2", icon: "🎤" },
        { id: "cult-5", name: "Vogue Cosmic Fashion", verse: "CULT", day: "day3", dayLabel: "DAY 3", icon: "✨" },

        // GAMING VERSE
        { id: "game-1", name: "Cyber League BGMI", verse: "GAME", day: "day1", dayLabel: "DAY 1", icon: "🎮" },
        { id: "game-2", name: "Valorant Cyber Arena", verse: "GAME", day: "day2", dayLabel: "DAY 2", icon: "🎯" },
        { id: "game-3", name: "FIFA Console Clash", verse: "GAME", day: "day3", dayLabel: "DAY 3", icon: "⚽" },
        { id: "game-4", name: "Tekken 8 Showdown", verse: "GAME", day: "day1", dayLabel: "DAY 1", icon: "👊" },
        { id: "game-5", name: "Chess Grandmaster Blitz", verse: "GAME", day: "day2", dayLabel: "DAY 2", icon: "♟️" },

        // ENTREPRENEUR VERSE
        { id: "ent-1", name: "B-Plan Pitch Tank", verse: "ENT", day: "day2", dayLabel: "DAY 2", icon: "💼" },
        { id: "ent-2", name: "IPL Auction Simulation", verse: "ENT", day: "day3", dayLabel: "DAY 3", icon: "🔨" },
        { id: "ent-3", name: "Startup Expo & Summit", verse: "ENT", day: "day1", dayLabel: "DAY 1", icon: "🚀" },
        { id: "ent-4", name: "Cryptic Market Hunt", verse: "ENT", day: "day2", dayLabel: "DAY 2", icon: "📈" },
        { id: "ent-5", name: "Product Design Sprint", verse: "ENT", day: "day3", dayLabel: "DAY 3", icon: "💡" },

        // SOCIAL VERSE
        { id: "social-1", name: "Eco Hack Climate Challenge", verse: "SOCIAL", day: "day1", dayLabel: "DAY 1", icon: "🌿" },
        { id: "social-2", name: "Blood Drive & Health Camp", verse: "SOCIAL", day: "day2", dayLabel: "DAY 2", icon: "🩸" },
        { id: "social-3", name: "Rural Tech Innovation", verse: "SOCIAL", day: "day3", dayLabel: "DAY 3", icon: "🌾" },
        { id: "social-4", name: "Cyber Safety Workshop", verse: "SOCIAL", day: "day1", dayLabel: "DAY 1", icon: "🛡️" },
        { id: "social-5", name: "Inclusive Tech Summit", verse: "SOCIAL", day: "day2", dayLabel: "DAY 2", icon: "🤝" }
    ];

    const PRICES = {
        "Fest Pass": 449,
        "Starnite VIP Pass": 99,
        "Day Pass": { day0: 75, day1: 149, day2: 149, day3: 199 },
        "Visitor Pass": { day0: 75, day1: 99, day2: 99, day3: 149 }
    };

    // DOM Elements
    const tierCards = document.querySelectorAll(".tier-card");
    const daySelectorBlock = document.getElementById("daySelectorBlock");
    const daySelectorRow = document.getElementById("daySelectorRow");
    const verseFilterPills = document.getElementById("verseFilterPills");
    const eventsListContainer = document.getElementById("eventsListContainer");
    
    // Live Pass Preview Targets
    const livePassBadge = document.getElementById("livePassBadge");
    const liveDelegateName = document.getElementById("liveDelegateName");
    const liveCollege = document.getElementById("liveCollege");
    const liveDays = document.getElementById("liveDays");
    const liveEventsCount = document.getElementById("liveEventsCount");
    const livePrice = document.getElementById("livePrice");
    const totalPriceDisplay = document.getElementById("totalPriceDisplay");
    const liveTicketId = document.getElementById("liveTicketId");

    // Form inputs
    const regName = document.getElementById("reg-name");
    const regCollege = document.getElementById("reg-college");
    const registrationForm = document.getElementById("registrationForm");

    // Modal targets
    const successModal = document.getElementById("successModal");
    const closeModalBtn = document.getElementById("closeModalBtn");
    const modalDelegate = document.getElementById("modalDelegate");
    const modalPassType = document.getElementById("modalPassType");
    const modalDays = document.getElementById("modalDays");
    const modalEvents = document.getElementById("modalEvents");
    const modalTotal = document.getElementById("modalTotal");

    // State
    let selectedPassType = "Fest Pass";
    let selectedDays = ["day0", "day1", "day2", "day3"];
    let selectedVerseFilter = "all";
    let selectedEvents = new Set();
    let currentTicketId = "PRV-2026-" + Math.floor(1000 + Math.random() * 9000);

    if (liveTicketId) liveTicketId.textContent = currentTicketId;

    // Initialize Pass Card Selectors
    tierCards.forEach(card => {
        card.addEventListener("click", () => {
            const passType = card.dataset.type;
            setPassType(passType);
        });
    });

    function setPassType(passType) {
        selectedPassType = passType;

        tierCards.forEach(c => {
            if (c.dataset.type === passType) {
                c.classList.add("selected");
            } else {
                c.classList.remove("selected");
            }
        });

        if (passType === "Fest Pass") {
            selectedDays = ["day0", "day1", "day2", "day3"];
            daySelectorBlock.style.display = "none";
        } else if (passType === "Day Pass") {
            selectedDays = ["day1"];
            daySelectorBlock.style.display = "block";
            renderDayPills("Day Pass");
        } else if (passType === "Visitor Pass") {
            selectedDays = ["day1"];
            daySelectorBlock.style.display = "block";
            renderDayPills("Visitor Pass");
        } else if (passType === "Starnite VIP Pass") {
            selectedDays = ["day3"];
            daySelectorBlock.style.display = "none";
        }

        renderEvents();
        updateCalculations();
    }

    function renderDayPills(passType) {
        daySelectorRow.innerHTML = "";
        const days = [
            { key: "day0", label: "Day 0 (Oct 15)", price: passType === "Day Pass" ? 75 : 75 },
            { key: "day1", label: "Day 1 (Oct 16)", price: passType === "Day Pass" ? 149 : 99 },
            { key: "day2", label: "Day 2 (Oct 17)", price: passType === "Day Pass" ? 149 : 99 },
            { key: "day3", label: "Day 3 (Oct 18)", price: passType === "Day Pass" ? 199 : 149 }
        ];

        days.forEach(d => {
            const pill = document.createElement("button");
            pill.type = "button";
            pill.className = `day-pill-btn ${selectedDays.includes(d.key) ? "active" : ""}`;
            pill.innerHTML = `<span>${d.label}</span> <strong>₹${d.price}</strong>`;

            pill.addEventListener("click", () => {
                if (selectedDays.includes(d.key)) {
                    if (selectedDays.length > 1) {
                        selectedDays = selectedDays.filter(k => k !== d.key);
                        pill.classList.remove("active");
                    }
                } else {
                    selectedDays.push(d.key);
                    pill.classList.add("active");
                }
                renderEvents();
                updateCalculations();
            });

            daySelectorRow.appendChild(pill);
        });
    }

    // Verse filter tabs
    if (verseFilterPills) {
        verseFilterPills.querySelectorAll(".verse-tab-btn").forEach(btn => {
            btn.addEventListener("click", () => {
                verseFilterPills.querySelectorAll(".verse-tab-btn").forEach(b => b.classList.remove("active"));
                btn.classList.add("active");
                selectedVerseFilter = btn.dataset.verse;
                renderEvents();
            });
        });
    }

    function renderEvents(targetEventToHighlight) {
        eventsListContainer.innerHTML = "";
        selectedEvents.clear();

        let filtered = EVENTS_DATA.filter(e => selectedDays.includes(e.day));
        if (selectedVerseFilter !== "all") {
            filtered = filtered.filter(e => e.verse === selectedVerseFilter);
        }

        if (filtered.length === 0) {
            eventsListContainer.innerHTML = `<div class="empty-events-msg">No events matching filter for selected days.</div>`;
            return;
        }

        filtered.forEach((ev, idx) => {
            const row = document.createElement("label");
            row.className = "event-checkbox-row";
            const inputId = `event_check_${idx}`;

            const isTargetMatch = targetEventToHighlight && ev.name.toLowerCase() === targetEventToHighlight.toLowerCase();
            if (isTargetMatch) {
                row.classList.add("event-row-highlight");
            }

            // Auto-check events by default
            selectedEvents.add(ev.name);

            row.innerHTML = `
                <div class="ev-left">
                    <input type="checkbox" id="${inputId}" class="ev-cb" checked data-event-name="${ev.name}">
                    <span class="ev-icon">${ev.icon}</span>
                    <span class="ev-title">${ev.name}</span>
                    <span class="ev-verse-badge badge-${ev.verse.toLowerCase()}">${ev.verse}</span>
                </div>
                <div class="ev-right">
                    <span class="ev-day-pill">${ev.dayLabel}</span>
                    <a href="events.html" class="ev-link">📄 Details</a>
                </div>
            `;

            const cb = row.querySelector(".ev-cb");
            cb.addEventListener("change", (e) => {
                if (e.target.checked) {
                    selectedEvents.add(ev.name);
                } else {
                    selectedEvents.delete(ev.name);
                }
                updateCalculations();
            });

            eventsListContainer.appendChild(row);
        });

        updateCalculations();
    }

    function updateCalculations() {
        let total = 0;

        if (selectedPassType === "Fest Pass") {
            total = PRICES["Fest Pass"];
        } else if (selectedPassType === "Starnite VIP Pass") {
            total = PRICES["Starnite VIP Pass"];
        } else if (selectedPassType === "Day Pass") {
            selectedDays.forEach(d => {
                total += PRICES["Day Pass"][d] || 0;
            });
        } else if (selectedPassType === "Visitor Pass") {
            selectedDays.forEach(d => {
                total += PRICES["Visitor Pass"][d] || 0;
            });
        }

        // Live Ticket Preview updates
        if (livePassBadge) livePassBadge.textContent = selectedPassType.toUpperCase();
        if (livePrice) livePrice.textContent = `₹${total}`;
        if (totalPriceDisplay) totalPriceDisplay.textContent = `₹${total}`;
        if (liveEventsCount) liveEventsCount.textContent = `${selectedEvents.size} EVENTS`;

        if (liveDays) {
            if (selectedPassType === "Fest Pass") {
                liveDays.textContent = "ALL 4 DAYS";
            } else {
                liveDays.textContent = selectedDays.map(d => d.toUpperCase()).join(", ");
            }
        }
    }

    // Live form inputs update live ticket pass preview
    if (regName) {
        regName.addEventListener("input", (e) => {
            const val = e.target.value.trim();
            if (liveDelegateName) {
                liveDelegateName.textContent = val ? val.toUpperCase() : "ALEX MERCER";
            }
        });
    }

    if (regCollege) {
        regCollege.addEventListener("input", (e) => {
            const val = e.target.value.trim();
            if (liveCollege) {
                liveCollege.textContent = val ? val.toUpperCase() : "IIT BHUBANESWAR";
            }
        });
    }

    // URL parameter parsing (Redirection from Events page)
    function checkUrlParameters() {
        const urlParams = new URLSearchParams(window.location.search);
        const targetEventParam = urlParams.get('event');
        const targetDayParam = urlParams.get('day');
        const targetVerseParam = urlParams.get('verse');

        if (targetEventParam) {
            const banner = document.getElementById('event-redirect-banner');
            const bannerEvName = document.getElementById('banner-event-name');
            if (banner && bannerEvName) {
                bannerEvName.textContent = targetEventParam;
                banner.classList.remove('hidden');
            }

            let foundEvent = EVENTS_DATA.find(e => e.name.toLowerCase() === targetEventParam.toLowerCase());
            let foundDay = foundEvent ? foundEvent.day : (targetDayParam ? (targetDayParam.startsWith("day") ? targetDayParam : `day${targetDayParam}`) : "day1");

            setPassType("Day Pass");
            selectedDays = [foundDay];
            renderDayPills("Day Pass");

            if (targetVerseParam && targetVerseParam.toUpperCase() !== "ALL") {
                selectedVerseFilter = targetVerseParam.toUpperCase();
                const vBtn = verseFilterPills ? verseFilterPills.querySelector(`[data-verse="${selectedVerseFilter}"]`) : null;
                if (vBtn) {
                    verseFilterPills.querySelectorAll(".verse-tab-btn").forEach(b => b.classList.remove("active"));
                    vBtn.classList.add("active");
                }
            }

            renderEvents(targetEventParam);

            setTimeout(() => {
                const redirectBanner = document.getElementById("event-redirect-banner");
                if (redirectBanner) {
                    redirectBanner.scrollIntoView({ behavior: "smooth", block: "center" });
                }
            }, 250);
        } else {
            setPassType("Fest Pass");
        }
    }

    // Submit handler
    if (registrationForm) {
        registrationForm.addEventListener("submit", (e) => {
            e.preventDefault();

            const nameVal = regName && regName.value.trim() ? regName.value.trim() : "Alex Mercer";
            const collegeVal = regCollege && regCollege.value.trim() ? regCollege.value.trim() : "IIT Bhubaneswar";

            if (modalDelegate) modalDelegate.textContent = nameVal;
            if (modalPassType) modalPassType.textContent = selectedPassType;
            if (modalDays) modalDays.textContent = selectedDays.map(d => d.toUpperCase()).join(", ");
            if (modalEvents) modalEvents.textContent = `${selectedEvents.size} Events Selected`;
            if (modalTotal) modalTotal.textContent = totalPriceDisplay ? totalPriceDisplay.textContent : "₹449";

            const registrationData = {
                name: nameVal,
                college: collegeVal,
                ticketId: currentTicketId,
                passType: selectedPassType,
                days: selectedDays,
                eventsCount: selectedEvents.size,
                eventsList: Array.from(selectedEvents),
                total: totalPriceDisplay ? totalPriceDisplay.textContent : "₹449",
                registeredAt: new Date().toISOString()
            };
            try {
                localStorage.setItem("pravaahUserRegistration", JSON.stringify(registrationData));
            } catch (err) {}

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

    // Run Initializer
    checkUrlParameters();
});
