/* ==========================================================================
   ORBIT PHOTO GALLERY — 3D WALL CORRIDOR FLY-THROUGH ARCHIVE ENGINE
   Custom 3D Spatial Geometry Engine for 14 High-Definition Fest Captures
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    // 14 High-Definition Fest Photo Dossier Records
    const photoCollection = [
        {
            id: 'photo-01',
            title: 'ROBO SOCCER ARENA CLASH',
            category: 'TECH & ROBOTICS',
            badge: 'FLAGSHIP',
            image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1200&q=80',
            description: 'Custom-built autonomous kinetic bots engaged in a high-speed strategic field showdown inside the packed LHC Main Arena.',
            edition: 'PRAVAAH 2026',
            location: 'LHC Arena Complex',
            photographer: 'Pravaha Lens Squad',
            resolution: '6000 x 4000 (RAW)',
            highlights: [
                'Microsecond sensor tracking recorded on center turf.',
                'Record crowd turnout exceeding 2,400 spectators.',
                'Championship match decided in sudden death overtime.'
            ]
        },
        {
            id: 'photo-02',
            title: 'EDM NIGHT STARLIGHT RESONANCE',
            category: 'CULTURAL & PRONITES',
            badge: 'PRONITE',
            image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=1200&q=80',
            description: 'Massive mainstage laser arrays illuminating thousands of festival attendees during the climax of the EDM headliner set.',
            edition: 'PRAVAAH 2026',
            location: 'Central Festival Grounds',
            photographer: 'Media Cell Lead',
            resolution: '6000 x 4000 (RAW)',
            highlights: [
                'Multi-spectrum laser synchronization across 40m main stage.',
                'Over 18,000 active wristband luminary sync nodes.',
                'Uninterrupted 3-hour live DJ performance.'
            ]
        },
        {
            id: 'photo-03',
            title: 'VALORANT CHAMPIONS STAGE',
            category: 'ESPORTS ARENA',
            badge: 'GRAND FINALS',
            image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=80',
            description: 'Pro-tier tournament setup featuring high-refresh monitors, custom LED soundproof booths, and real-time caster shoutcasting.',
            edition: 'PRAVAAH 2026',
            location: 'SAC Esports Pavilion',
            photographer: 'Esports Media Team',
            resolution: '6000 x 4000 (RAW)',
            highlights: [
                '240Hz ultra-low latency tournament rigs.',
                'Live broadcast streamed to 45,000 online viewers.',
                'Intense 5-map clutch victory on Haven.'
            ]
        },
        {
            id: 'photo-04',
            title: 'COSMIC DRONE LIGHT GRID',
            category: 'STAGE & SHOWCASE',
            badge: 'AERIAL SHOW',
            image: 'https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=1200&q=80',
            description: '300 synchronized light drones forming dynamic 3D multiverse constellations high above the campus stadium skyline.',
            edition: 'PRAVAAH 2026',
            location: 'Main Stadium Sky Vault',
            photographer: 'Aerial Aero Team',
            resolution: '6000 x 4000 (RAW)',
            highlights: [
                '3D real-time constellation shape shifts.',
                'Zero-collision precision flight control matrix.',
                'Custom Pravaah emblem formation in mid-air.'
            ]
        },
        {
            id: 'photo-05',
            title: 'HACKATHON MIDNIGHT SPRINT',
            category: 'TECH & ROBOTICS',
            badge: '24-HR HACK',
            image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80',
            description: 'Developers, designers, and AI engineers collaborating past 3 AM on next-gen decentralized spatial compute prototypes.',
            edition: 'PRAVAAH 2026',
            location: 'Research Park Tech Hub',
            photographer: 'Innovations Desk',
            resolution: '6000 x 4000 (RAW)',
            highlights: [
                'Over 120 teams competing continuously for 24 hours.',
                'Mentorship from top tech architecture leads.',
                '$10,000 grand prize pool awarded.'
            ]
        },
        {
            id: 'photo-06',
            title: 'BATTLE OF THE BANDS AMPLIFIED',
            category: 'CULTURAL & PRONITES',
            badge: 'LIVE MUSIC',
            image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1200&q=80',
            description: 'High-octane rock guitar solo under intense magenta pyrotechnics at the Open Air Theater sound stage.',
            edition: 'PRAVAAH 2026',
            location: 'Open Air Theater (OAT)',
            photographer: 'Cult Comm Team',
            resolution: '6000 x 4000 (RAW)',
            highlights: [
                '11 finalist college rock bands from across India.',
                'Custom acoustic wall paneling for pristine clarity.',
                'Standing-room crowd of 5,000+ music fans.'
            ]
        },
        {
            id: 'photo-07',
            title: 'AUTONOMOUS ROVER TERRAIN RACE',
            category: 'TECH & ROBOTICS',
            badge: 'OUTDOOR LAB',
            image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1200&q=80',
            description: 'Heavy-duty Martian terrain rovers navigating steep rock barriers, sand traps, and simulated alien topographies.',
            edition: 'PRAVAAH 2026',
            location: 'Robotics Outdoor Track',
            photographer: 'Robotics Society',
            resolution: '6000 x 4000 (RAW)',
            highlights: [
                'LiDAR & depth camera obstacle navigation.',
                'Extreme 45-degree incline climb challenge.',
                'Sample collection and autonomous deposit test.'
            ]
        },
        {
            id: 'photo-08',
            title: 'FASHION SHOW RUNWAY MATRIX',
            category: 'CULTURAL & PRONITES',
            badge: 'COUTURE',
            image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1200&q=80',
            description: 'Futuristic cyberpunk wardrobe designs presented along a mirror-finish illuminated runway path.',
            edition: 'PRAVAAH 2026',
            location: 'Auditorium Hall A',
            photographer: 'Style & Glam Crew',
            resolution: '6000 x 4000 (RAW)',
            highlights: [
                'Avant-garde LED integrated textile garments.',
                'Industry judge panel from leading fashion houses.',
                'Choreographed light-and-beat sync walk.'
            ]
        },
        {
            id: 'photo-09',
            title: 'BGMI LAN TOURNAMENT FINALS',
            category: 'ESPORTS ARENA',
            badge: 'LAN FINALS',
            image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=1200&q=80',
            description: '16 top squad tables battling simultaneously under high-intensity red and cyan spotlighting.',
            edition: 'PRAVAAH 2026',
            location: 'Indoor Sports Complex',
            photographer: 'Gaming Guild',
            resolution: '6000 x 4000 (RAW)',
            highlights: [
                '16 team LAN setup with dedicated server nodes.',
                'Live tactical map analysis on overhead screens.',
                'Final circle clutch victory in Erangel.'
            ]
        },
        {
            id: 'photo-10',
            title: 'STREET DANCE BATTLE CIRCLE',
            category: 'CULTURAL & PRONITES',
            badge: 'HIP-HOP',
            image: 'https://images.unsplash.com/photo-1547153760-18fc86324498?auto=format&fit=crop&w=1200&q=80',
            description: 'Raw energy breaking and popping cyphers surrounded by an enthusiastic ring of festgoers.',
            edition: 'PRAVAAH 2026',
            location: 'Student Activity Center Yard',
            photographer: 'Street Culture Desk',
            resolution: '6000 x 4000 (RAW)',
            highlights: [
                '1v1 all-styles elimination battles.',
                'International guest judges and beatboxers.',
                'Spontaneous crowd cyphers after sunset.'
            ]
        },
        {
            id: 'photo-11',
            title: 'AI ART & GENERATIVE EXHIBIT',
            category: 'STAGE & SHOWCASE',
            badge: 'EXHIBIT',
            image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=1200&q=80',
            description: 'Interactive neural art installations responding to visitor movement and brainwave EEG signals.',
            edition: 'PRAVAAH 2026',
            location: 'Design Gallery Wing',
            photographer: 'Media Arts Lab',
            resolution: '6000 x 4000 (RAW)',
            highlights: [
                'Real-time generative projection mapping.',
                'EEG sensor headband responsive visuals.',
                'Curated digital gallery of 50 student creators.'
            ]
        },
        {
            id: 'photo-12',
            title: 'PRO NITE POP HEADLINER',
            category: 'CULTURAL & PRONITES',
            badge: 'CELEBRITY',
            image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=80',
            description: 'Chart-topping vocalist performing under golden confetti showers to an audience of 20,000+ fans.',
            edition: 'PRAVAAH 2026',
            location: 'Main Grounds Stadium',
            photographer: 'Fest Chief Editor',
            resolution: '6000 x 4000 (RAW)',
            highlights: [
                'Full 90-minute live band performance set.',
                'Confetti cannon blast at final chorus.',
                'Record attendance in fest history.'
            ]
        },
        {
            id: 'photo-13',
            title: 'SPEED CUBING & LOGIC ARENA',
            category: 'TECH & ROBOTICS',
            badge: 'COMPETITION',
            image: 'https://images.unsplash.com/photo-1563089145-599997674d42?auto=format&fit=crop&w=1200&q=80',
            description: 'Sub-6-second Rubik\'s cube solves recorded with high-frame-rate cameras and digital timers.',
            edition: 'PRAVAAH 2026',
            location: 'LHC Hall 3',
            photographer: 'Logic Club Media',
            resolution: '6000 x 4000 (RAW)',
            highlights: [
                'WCA official timing equipment used.',
                'National record attempt witnessed live.',
                'Blindfolded solve showcase category.'
            ]
        },
        {
            id: 'photo-14',
            title: 'VALEDICTORIAN CELEBRATION SHOT',
            category: 'STAGE & SHOWCASE',
            badge: 'CLOSING CEREMONY',
            image: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=1200&q=80',
            description: 'Core organizing committee and winners celebrating with trophy presentations and sparkler fountains.',
            edition: 'PRAVAAH 2026',
            location: 'Grand Auditorium Stage',
            photographer: 'Official Convenor Desk',
            resolution: '6000 x 4000 (RAW)',
            highlights: [
                'Over 80 championship trophies awarded.',
                'Official handover to next year\'s leads.',
                'Grand pyro fountain finale spectacle.'
            ]
        }
    ];

    // DOM Elements
    const corridorViewport = document.getElementById('corridor-viewport');
    const corridorStage = document.getElementById('corridor-stage');
    const prevBtn = document.getElementById('corridor-prev-btn');
    const nextBtn = document.getElementById('corridor-next-btn');
    const filterButtons = document.querySelectorAll('.filter-btn');
    const hudCounter = document.getElementById('hud-counter');
    const hudProgressBar = document.getElementById('hud-progress-bar');

    // Modal Elements
    const modalOverlay = document.getElementById('photo-dossier-modal');
    const modalCloseBtn = document.getElementById('modal-close-btn');
    const modalImage = document.getElementById('modal-img');
    const modalBadge = document.getElementById('modal-badge');
    const modalTitle = document.getElementById('modal-title');
    const modalDescription = document.getElementById('modal-description');
    const modalEdition = document.getElementById('spec-edition');
    const modalLocation = document.getElementById('spec-location');
    const modalPhotographer = document.getElementById('spec-photographer');
    const modalResolution = document.getElementById('spec-resolution');
    const modalHighlightsList = document.getElementById('modal-highlights-list');

    // Active Filter State
    let filteredCollection = [...photoCollection];

    // 3D Spatial Geometry Config (900px Z-Spacing)
    const Z_SPACING = 900;
    const X_OFFSET = 360;
    const Y_OFFSET = 0;
    const ROTATION_Y = 18;

    // Camera State Variables
    let currentCameraZ = 0;
    let cameraVelocity = 0;
    let targetVelocity = 0;
    let maxCameraZ = (photoCollection.length - 1) * Z_SPACING + 1200;

    let cardElements = [];
    let finalFrame = null;

    // Build 3D Corridor Stage (Wall-Mounted Photo Cards + THE FINAL FRAME)
    function buildCorridorStage() {
        if (!corridorStage) return;
        corridorStage.innerHTML = '';
        cardElements = [];

        maxCameraZ = (filteredCollection.length - 1) * Z_SPACING + 1200;

        filteredCollection.forEach((photo, idx) => {
            const isLeft = idx % 2 === 0;
            const cardZ = -idx * Z_SPACING;
            const cardX = isLeft ? -X_OFFSET : X_OFFSET;
            const rotateY = isLeft ? ROTATION_Y : -ROTATION_Y;

            const card = document.createElement('article');
            card.className = 'orbit-corridor-card';
            card.setAttribute('data-id', photo.id);
            card.setAttribute('data-idx', idx);
            card.setAttribute('data-z', cardZ);
            card.setAttribute('data-x', cardX);
            card.setAttribute('data-ry', rotateY);

            card.innerHTML = `
                <div class="corridor-card-img-box">
                    <img src="${photo.image}" alt="${photo.title}" loading="lazy" />
                    <div class="card-img-overlay"></div>
                    <span class="card-badge-left">${photo.badge}</span>
                    <span class="card-badge-right">#0${idx + 1}</span>
                </div>
                <div class="card-text-body">
                    <span class="card-category-tag">✦ ${photo.category}</span>
                    <h2 class="card-title">${photo.title}</h2>
                    <p class="card-description">${photo.description}</p>
                </div>
                <div class="card-details-row">
                    <div class="meta-item">
                        <span class="meta-icon">📍</span>
                        <span>${photo.location}</span>
                    </div>
                    <div class="meta-item">
                        <span class="meta-icon meta-icon-magenta">📷</span>
                        <span>${photo.photographer}</span>
                    </div>
                    <button class="card-action-btn" type="button" aria-label="Inspect ${photo.title} Dossier">
                        <span>INSPECT DOSSIER</span>
                        <span>✦</span>
                    </button>
                </div>
            `;

            // Click to Open Dossier Modal or Jump Camera to Card
            card.addEventListener('click', (e) => {
                const targetZ = idx * Z_SPACING;
                const diff = Math.abs(currentCameraZ - targetZ);

                if (diff < 300 || e.target.closest('.card-action-btn')) {
                    openDossierModal(photo);
                } else {
                    targetVelocity += (targetZ - currentCameraZ) * 0.08;
                }
            });

            corridorStage.appendChild(card);
            cardElements.push({
                element: card,
                baseZ: cardZ,
                baseX: cardX,
                baseRY: rotateY,
                photo: photo,
                idx: idx
            });
        });

        // THE FINAL FRAME — Destination End Scene
        const endSceneZ = -filteredCollection.length * Z_SPACING - 300;
        finalFrame = document.createElement('div');
        finalFrame.className = 'corridor-final-frame';
        finalFrame.setAttribute('data-z', endSceneZ);
        finalFrame.style.setProperty('--fz', `${endSceneZ}px`);

        finalFrame.innerHTML = `
            <div class="final-frame-content">
                <span class="final-badge">✦ CORRIDOR ARCHIVE COMPLETED ✦</span>
                <h2 class="final-heading">THE FINAL FRAME</h2>
                <p class="final-subtext">"Across infinite dimensions, every capture leaves an indelible cosmic mark."</p>
                <div class="final-small-line">PRAVAAH 2026 MULTIVERSE FESTIVAL</div>
            </div>
            <button class="final-return-btn" id="final-return-btn" type="button">
                <span>✦ RE-ENTER CORRIDOR ENTRANCE ✦</span>
            </button>
        `;

        corridorStage.appendChild(finalFrame);

        const returnBtn = finalFrame.querySelector('#final-return-btn');
        if (returnBtn) {
            returnBtn.addEventListener('click', () => {
                targetVelocity = -currentCameraZ * 0.12;
            });
        }
    }

    // Smooth Continuous Animation & Render Loop
    function updateCorridorFrame() {
        // Friction & Inertia Physics Damping
        cameraVelocity += (targetVelocity - cameraVelocity) * 0.12;
        targetVelocity *= 0.88;
        currentCameraZ += cameraVelocity;

        // Clamp Camera Z within valid corridor range [-200, maxCameraZ]
        if (currentCameraZ < -200) {
            currentCameraZ = -200;
            cameraVelocity = 0;
            targetVelocity = 0;
        } else if (currentCameraZ > maxCameraZ) {
            currentCameraZ = maxCameraZ;
            cameraVelocity = 0;
            targetVelocity = 0;
        }

        let nearestCardIdx = 0;
        let minAbsDist = Infinity;

        // Render & Positioning of Wall Cards
        cardElements.forEach(item => {
            const relZ = item.baseZ + currentCameraZ;
            const absZ = Math.abs(relZ);

            if (absZ < minAbsDist) {
                minAbsDist = absZ;
                nearestCardIdx = item.idx;
            }

            // Depth Culling & Visibility Range Check
            if (relZ > 250 || relZ < -3400) {
                item.element.style.opacity = 0;
                item.element.style.pointerEvents = 'none';
                item.element.style.transform = `translate3d(${item.baseX}px, 0px, ${item.baseZ}px) rotateY(${item.baseRY}deg)`;
                item.element.classList.remove('is-nearest');
                return;
            }

            // Opacity & Blur Fade Math
            let opacity = 1;
            let blurVal = 0;

            if (relZ > 0) {
                // Fade out as card moves behind camera
                opacity = 1 - relZ / 250;
            } else if (relZ < -1800) {
                // Fade out deep in distance fog
                opacity = 1 - (-relZ - 1800) / 1600;
                blurVal = (-relZ - 1800) / 400;
            }

            opacity = Math.max(0, Math.min(1, opacity));
            blurVal = Math.min(8, blurVal);

            item.element.style.opacity = opacity;
            item.element.style.filter = blurVal > 0.5 ? `blur(${blurVal}px)` : 'none';
            item.element.style.pointerEvents = opacity > 0.4 ? 'auto' : 'none';
            item.element.style.transform = `translate3d(${item.baseX}px, 0px, ${item.baseZ}px) rotateY(${item.baseRY}deg)`;

            if (absZ < 450) {
                item.element.classList.add('is-nearest');
            } else {
                item.element.classList.remove('is-nearest');
            }
        });

        // Render & Position THE FINAL FRAME Destination Scene
        if (finalFrame) {
            const endSceneZ = -filteredCollection.length * Z_SPACING - 300;
            const finalRelZ = endSceneZ + currentCameraZ;
            const finalAbsZ = Math.abs(finalRelZ);

            if (finalRelZ > 180) {
                const exitRatio = Math.min(1, (finalRelZ - 180) / 450);
                finalFrame.style.transform = `translate3d(0px, 0px, ${endSceneZ}px) rotateY(0deg) scale(${1 + 0.2 * exitRatio})`;
                finalFrame.style.opacity = Math.max(0, 1 - exitRatio);
                finalFrame.style.pointerEvents = 'none';
            } else if (finalRelZ >= -3600) {
                const depthRatio = 1 - finalAbsZ / 3600;
                const scale = 0.4 + 0.7 * depthRatio;
                const opacity = Math.max(0.08, depthRatio);

                finalFrame.style.transform = `translate3d(0px, 0px, ${endSceneZ}px) rotateY(0deg) scale(${scale})`;
                finalFrame.style.opacity = opacity;
                finalFrame.style.filter = `blur(${(1 - depthRatio) * 4}px)`;
                finalFrame.style.pointerEvents = opacity > 0.5 ? 'auto' : 'none';
            } else {
                finalFrame.style.opacity = 0;
                finalFrame.style.pointerEvents = 'none';
            }
        }

        // Dynamic Scroll Hint Fading (fades slightly as camera advances, bright at entrance)
        const scrollHintEl = document.getElementById('corridor-scroll-hint-text');
        if (scrollHintEl) {
            if (currentCameraZ > 300) {
                scrollHintEl.style.opacity = '0.35';
            } else {
                scrollHintEl.style.opacity = '1';
            }
        }

        // Sync HUD Matrix Tracker
        updateHUDTracker(nearestCardIdx);

        // Persistent requestAnimationFrame loop
        requestAnimationFrame(updateCorridorFrame);
    }

    // Update HUD Matrix Progress Bar & Text
    function updateHUDTracker(nearestIdx) {
        if (filteredCollection.length === 0) {
            if (hudCounter) hudCounter.textContent = 'NO ARCHIVES AVAILABLE';
            if (hudProgressBar) hudProgressBar.style.width = '0%';
            return;
        }

        const safeIdx = Math.min(filteredCollection.length - 1, Math.max(0, nearestIdx));
        const photo = filteredCollection[safeIdx];
        const progress = maxCameraZ > 0 ? Math.min(1, Math.max(0, currentCameraZ / maxCameraZ)) : 0;

        if (hudCounter) {
            hudCounter.textContent = `PHOTO [0${safeIdx + 1}] OF [${filteredCollection.length}] — ${photo.title}`;
        }
        if (hudProgressBar) {
            hudProgressBar.style.width = `${progress * 100}%`;
        }
    }

    // Modal Operations
    function openDossierModal(photo) {
        if (!modalOverlay) return;

        modalImage.src = photo.image;
        modalImage.alt = photo.title;
        modalBadge.textContent = `${photo.category} // ${photo.badge}`;
        modalTitle.textContent = photo.title;
        modalDescription.textContent = photo.description;
        
        modalEdition.textContent = photo.edition;
        modalLocation.textContent = photo.location;
        modalPhotographer.textContent = photo.photographer;
        modalResolution.textContent = photo.resolution;

        // Render Highlights
        modalHighlightsList.innerHTML = '';
        if (photo.highlights && photo.highlights.length > 0) {
            photo.highlights.forEach(item => {
                const li = document.createElement('li');
                li.textContent = item;
                modalHighlightsList.appendChild(li);
            });
        }

        modalOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeDossierModal() {
        if (!modalOverlay) return;
        modalOverlay.classList.remove('active');
        document.body.style.overflow = '';
    }

    // Category Filter Handlers
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const category = btn.getAttribute('data-category');

            filteredCollection = category === 'ALL'
                ? [...photoCollection]
                : photoCollection.filter(p => p.category === category);

            currentCameraZ = 0;
            cameraVelocity = 0;
            targetVelocity = 0;
            buildCorridorStage();
        });
    });

    // Camera Navigation Buttons (Impulse Addition)
    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            targetVelocity -= 14;
            targetVelocity = Math.max(-24, Math.min(24, targetVelocity));
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            targetVelocity += 14;
            targetVelocity = Math.max(-24, Math.min(24, targetVelocity));
        });
    }

    // Handoff & Scroll State Flags
    let corridorHandoffComplete = false;
    let corridorAutoScrolling = false;
    let handoffTimeoutId = null;

    // Reset handoff state when user scrolls page up above corridor
    window.addEventListener('scroll', () => {
        if (!corridorViewport) return;
        const rect = corridorViewport.getBoundingClientRect();
        if (currentCameraZ <= 0 && rect.top > 220) {
            corridorHandoffComplete = false;
        }
    }, { passive: true });

    // Wheel Event Handler: Explicit Handoff State Model & Boundary Passthrough
    window.addEventListener('wheel', (e) => {
        if (!corridorViewport) return;

        // 1. Ignore wheel events from interactive controls, buttons, links, or modal elements
        if (e.target.closest('button, a, input, select, textarea, .dossier-modal-overlay, #photo-dossier-modal, .filter-btn, .final-return-btn')) {
            return;
        }

        // 2. Normalize wheel delta across pixel / line / page deltaModes
        let rawDelta = e.deltaY !== 0 ? e.deltaY : e.deltaX;
        if (e.deltaMode === 1) { // Line mode
            rawDelta *= 16;
        } else if (e.deltaMode === 2) { // Page mode
            rawDelta *= 300;
        }

        // 3. Boundary Passthrough: Never trap page scrolling
        if (currentCameraZ <= 0 && rawDelta < 0) {
            // At entrance and scrolling UP: allow normal page scroll up
            return;
        }
        if (currentCameraZ >= maxCameraZ && rawDelta > 0) {
            // At Final Frame and scrolling DOWN: allow normal page scroll down
            return;
        }

        // 4. Prevent duplicate handoff while smooth page scroll is active
        if (corridorAutoScrolling) {
            e.preventDefault();
            return;
        }

        // 5. Automatic Page-Scroll-to-Corridor Handoff
        const rect = corridorViewport.getBoundingClientRect();
        const navbarOffset = 80; // Account for floating cosmic navbar

        if (currentCameraZ <= 0 && rawDelta > 0 && !corridorHandoffComplete && rect.top > navbarOffset + 10) {
            e.preventDefault();
            corridorAutoScrolling = true;

            corridorViewport.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
                inline: 'nearest'
            });

            if (handoffTimeoutId) clearTimeout(handoffTimeoutId);
            handoffTimeoutId = setTimeout(() => {
                corridorAutoScrolling = false;
                corridorHandoffComplete = true;
            }, 550);

            return;
        }

        // 6. Camera 3D Movement once handoff is complete or camera is inside corridor
        e.preventDefault();

        const normalizedDelta = rawDelta * 0.48;
        const clampedDelta = Math.max(-48, Math.min(48, normalizedDelta));

        targetVelocity += clampedDelta * 0.52;
        targetVelocity = Math.max(-24, Math.min(24, targetVelocity));
    }, { passive: false });

    // Touch & Drag Pointer Impulse Movement
    let startY = 0;
    let lastY = 0;
    let isDragging = false;

    if (corridorViewport) {
        corridorViewport.addEventListener('pointerdown', (e) => {
            if (e.pointerType === 'touch') return; // Preserve normal vertical page touch scrolling on mobile
            if (e.target.closest('.final-return-btn') || e.target.closest('.card-action-btn') || e.target.closest('button')) return;
            isDragging = true;
            startY = e.clientY;
            lastY = e.clientY;
            corridorViewport.setPointerCapture(e.pointerId);
        });

        corridorViewport.addEventListener('pointermove', (e) => {
            if (!isDragging) return;
            const deltaY = lastY - e.clientY;
            lastY = e.clientY;
            const clampedTouch = Math.max(-48, Math.min(48, deltaY * 2.2));
            targetVelocity += clampedTouch * 0.52;
            targetVelocity = Math.max(-24, Math.min(24, targetVelocity));
        });

        corridorViewport.addEventListener('pointerup', (e) => {
            isDragging = false;
            try { corridorViewport.releasePointerCapture(e.pointerId); } catch (err) {}
        });

        corridorViewport.addEventListener('pointercancel', () => {
            isDragging = false;
        });
    }

    // Keyboard Arrow Keys Impulse
    document.addEventListener('keydown', (e) => {
        if (modalOverlay && modalOverlay.classList.contains('active')) {
            if (e.key === 'Escape') closeDossierModal();
            return;
        }

        if (e.key === 'ArrowUp' || e.key === 'ArrowRight') {
            targetVelocity += 12;
            targetVelocity = Math.max(-24, Math.min(24, targetVelocity));
        } else if (e.key === 'ArrowDown' || e.key === 'ArrowLeft') {
            targetVelocity -= 12;
            targetVelocity = Math.max(-24, Math.min(24, targetVelocity));
        }
    });

    // Modal Close Button Handlers
    if (modalCloseBtn) {
        modalCloseBtn.addEventListener('click', closeDossierModal);
    }

    if (modalOverlay) {
        modalOverlay.addEventListener('click', (e) => {
            if (e.target === modalOverlay) {
                closeDossierModal();
            }
        });
    }

    // Build 3D Stage & Launch Persistent Animation Loop
    buildCorridorStage();
    requestAnimationFrame(updateCorridorFrame);
});
