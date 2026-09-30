/**
 * PHOTO GALLERY — CONTINUOUS VELOCITY-DRIVEN 3D WALL CORRIDOR ENGINE
 * Features 14 wall-mounted photo cards at 900px depth spacing, targetVelocity filtering,
 * frame-rate independent deltaTime lerping, capped sway, and "THE FINAL FRAME" portal.
 */

document.addEventListener('DOMContentLoaded', () => {
    // 14 Photo Dossier Collection
    const photoCollection = [
        {
            id: 'photo-1',
            title: 'ROBO SOCCER ARENA CLASH',
            category: 'TECH & ROBOTICS',
            badge: 'FLAGSHIP TECH',
            edition: 'PRAVAAH 2026',
            location: 'LHC Complex - Arena A',
            photographer: 'Pravaah Media Team',
            resolution: '6000 x 4000 (RAW)',
            image: 'pravaah_pics_2026/DSC_0377.JPG',
            description: 'Intense micro-robotics arena competition captured during the finals of Robo Soccer. Autonomous and manual bots maneuvering under neon spotlight arrays.',
            highlights: [
                'Captured during high-speed goal scoring sequence.',
                'Multi-angle arena lighting with cyan backdrop glow.',
                'Featured in Pravaah 2026 Official Aftermovie.'
            ]
        },
        {
            id: 'photo-2',
            title: 'SINGULARITY PRONITE CROWD',
            category: 'CULTURAL & PRONITES',
            badge: 'STAR NIGHT',
            edition: 'PRAVAAH 2026',
            location: 'Main Stadium Grounds',
            photographer: 'Ayan Mukherjee',
            resolution: '5472 x 3648 (RAW)',
            image: 'pravaah_pics_2026/0Q3A0001.JPG',
            description: '15,000+ roaring festival pass holders illuminating the central amphitheatre with phone flashlights during the headline EDM artist finale.',
            highlights: [
                'Wide-angle stadium capture from the central sound mixing tower.',
                'Synchronized pyrotechnic laser beam array overhead.',
                'Peak festival attendance record moment.'
            ]
        },
        {
            id: 'photo-3',
            title: 'MECHA COMBAT ARENA FINALS',
            category: 'TECH & ROBOTICS',
            badge: 'COMBAT ARENA',
            edition: 'PRAVAAH 2026',
            location: 'Open Air Cage Complex',
            photographer: 'Rohan Sharma',
            resolution: '6000 x 4000 (RAW)',
            image: 'pravaah_pics_2026/0Q3A0171.JPG',
            description: '30kg heavyweight spinner bot impact moment inside the reinforced steel mesh arena, sending sparks flying across the spectator safety barrier.',
            highlights: [
                'High-speed shutter capture at 1/4000s.',
                'Full arena spark ignition frame.',
                'Judged as Best Action Shot of Pravaah 2026.'
            ]
        },
        {
            id: 'photo-4',
            title: 'VALORANT LAN CHAMPIONSHIP',
            category: 'ESPORTS ARENA',
            badge: '5v5 LAN',
            edition: 'PRAVAAH 2026',
            location: 'Esports Pavilion Stage',
            photographer: 'Devansh Verma',
            resolution: '5760 x 3840 (RAW)',
            image: 'pravaah_pics_2026/DSC_1631.JPG',
            description: 'Grand final clutch moment on stage as the winning squad celebrates after locking down the match-winning defuse in front of live shoutcasters.',
            highlights: [
                'Stage lighting synced to team color scheme.',
                'Live shoutcasting booth visible in foreground background.',
                'Over 500 spectators in live audience seating.'
            ]
        },
        {
            id: 'photo-5',
            title: 'VERVE FUTURISTIC RUNWAY',
            category: 'STAGE & SHOWCASE',
            badge: 'RUNWAY',
            edition: 'PRAVAAH 2026',
            location: 'Main Auditorium Stage',
            photographer: 'Sneha Mohanty',
            resolution: '6000 x 4000 (RAW)',
            image: 'pravaah_pics_2026/DSC_3951.JPG',
            description: 'Avant-garde cyberpunk fashion couture spotlight entry featuring custom neon-infused fabrics and theatrical smoke effects.',
            highlights: [
                'Dramatic low-angle runway perspective.',
                'Custom neon LED attire illumination.',
                'National inter-college fashion competition winner.'
            ]
        },
        {
            id: 'photo-6',
            title: 'EUPHONY BATTLE OF BANDS',
            category: 'CULTURAL & PRONITES',
            badge: 'LIVE MUSIC',
            edition: 'PRAVAAH 2026',
            location: 'Amphitheatre Stage',
            photographer: 'Kavya Sharma',
            resolution: '5184 x 3456 (RAW)',
            image: 'pravaah_pics_2026/DSC_0864.JPG',
            description: 'Lead guitarist performing a solo breakdown under crimson spotlights during the collegiate rock and heavy metal finals.',
            highlights: [
                'Stage fog diffusion with atmospheric backlighting.',
                'Action motion blur on drum kit background.',
                'Captured during peak 90-second guitar solo.'
            ]
        },
        {
            id: 'photo-7',
            title: 'STARTUP PITCH SUMMIT',
            category: 'STAGE & SHOWCASE',
            badge: 'VENTURE PITCH',
            edition: 'PRAVAAH 2026',
            location: 'Auditorium Hall 2',
            photographer: 'Arjun Das',
            resolution: '6000 x 4000 (RAW)',
            image: 'pravaah_pics_2026/DSC_3673.JPG',
            description: 'Student startup founders presenting their AI prototype to a panel of venture capital investors and incubator mentors.',
            highlights: [
                'Interactive pitch deck slide projection overlay.',
                'Q&A jury panel engaged response.',
                '₹1.5 Lakh seed grant award ceremony moment.'
            ]
        },
        {
            id: 'photo-8',
            title: 'AUTONOMOUS DRONE CIRCUIT',
            category: 'TECH & ROBOTICS',
            badge: 'FPV RACING',
            edition: 'PRAVAAH 2026',
            location: 'Outdoor Stadium Track',
            photographer: 'Priya Nayak',
            resolution: '6000 x 4000 (RAW)',
            image: 'pravaah_pics_2026/0Q3A8579.jpg',
            description: 'High-speed quadcopter passing through a illuminated neon gate during night obstacle course trials.',
            highlights: [
                'Motion track trail along LED gate border.',
                'Autonomous flight path telemetry verified.',
                'Record lap time finish moment.'
            ]
        },
        {
            id: 'photo-9',
            title: 'CYBERSECURITY CTF ARENA',
            category: 'TECH & ROBOTICS',
            badge: 'HACKATHON',
            edition: 'PRAVAAH 2026',
            location: 'Computer Center Lab 3',
            photographer: 'Vikram Singh',
            resolution: '6000 x 4000 (RAW)',
            image: 'pravaah_pics_2026/DSC_0450.JPG',
            description: 'Ethical hackers decoding cryptographic flags under low ambient matrix green terminal arrays during 24h CTF.',
            highlights: [
                'Jeopardy CTF scoreboard live update background.',
                '24-hour non-stop hacking challenge.',
                'Top 3 qualifying teams from 120 national entries.'
            ]
        },
        {
            id: 'photo-10',
            title: 'COSPLAY ALLEY & ANIME VERSE',
            category: 'CULTURAL & PRONITES',
            badge: 'COSPLAY ARENA',
            edition: 'PRAVAAH 2026',
            location: 'Convention Walkway',
            photographer: 'Ananya Roy',
            resolution: '5760 x 3840 (RAW)',
            image: 'pravaah_pics_2026/DSC_0469.JPG',
            description: 'Handcrafted sci-fi and anime character armor cosplayers gathering for the central festival parade walk.',
            highlights: [
                'Custom 3D printed mech armor details.',
                'Crowd interaction and photography showcase.',
                'Judged on armor craftsmanship and stage walk.'
            ]
        },
        {
            id: 'photo-11',
            title: 'BGMI ESPORTS SHOWDOWN',
            category: 'ESPORTS ARENA',
            badge: 'MOBILE LAN',
            edition: 'PRAVAAH 2026',
            location: 'Gaming Pavilion Hall B',
            photographer: 'Devansh Verma',
            resolution: '6000 x 4000 (RAW)',
            image: 'pravaah_pics_2026/DSC_0724.JPG',
            description: 'Final circle battle royale tense moment with dual shoutcaster commentary broadcast live across festival screens.',
            highlights: [
                'Final circle clutch victory finish.',
                'Live audience shouting reaction.',
                'Over 10,000 online live streaming viewers.'
            ]
        },
        {
            id: 'photo-12',
            title: 'SOLO DANCE STREET CLASH',
            category: 'CULTURAL & PRONITES',
            badge: 'STREET DANCE',
            edition: 'PRAVAAH 2026',
            location: 'Open Amphitheatre Plaza',
            photographer: 'Kavya Sharma',
            resolution: '5184 x 3456 (RAW)',
            image: 'pravaah_pics_2026/DSC_1034.JPG',
            description: 'High-energy popping & locking freestyle cipher battle surrounding by cheering student crowds under evening sun.',
            highlights: [
                'Mid-air freeze frame capture.',
                'Live beatbox background accompaniment.',
                'Inter-college street battle championship.'
            ]
        },
        {
            id: 'photo-13',
            title: 'AI ART & GRAPHIC EXPO',
            category: 'STAGE & SHOWCASE',
            badge: 'DESIGN EXPO',
            edition: 'PRAVAAH 2026',
            location: 'Design Gallery Complex',
            photographer: 'Sneha Mohanty',
            resolution: '6000 x 4000 (RAW)',
            image: 'pravaah_pics_2026/DSC_1305.JPG',
            description: 'Generative AI visual artwork exhibition featuring ultra-high definition canvas prints created by student designers.',
            highlights: [
                'Interactive digital screen artwork displays.',
                'Generative prompt art gallery tour.',
                'Exhibition attended by industry design directors.'
            ]
        },
        {
            id: 'photo-14',
            title: 'OPENING CEREMONY ILLUMINATION',
            category: 'STAGE & SHOWCASE',
            badge: 'INAUGURATION',
            edition: 'PRAVAAH 2026',
            location: 'Main Stage Auditorium',
            photographer: 'Pravaah Media Team',
            resolution: '6000 x 4000 (RAW)',
            image: 'pravaah_pics_2026/DSC_5907.JPG',
            description: 'Grand inaugural ceremony torch lighting up the holographic Multiverse logo to mark the start of Pravaah 2026.',
            highlights: [
                'Holographic logo lighting sequence.',
                'Official festival launch ceremony moment.',
                'Dignitaries and student committee stage assembly.'
            ]
        }
    ];

    // Camera Physics & Geometry Configuration
    let filteredCollection = [...photoCollection];
    const zStep = 900; // Fixed 900px depth spacing between cards
    let currentCameraZ = 0;
    let cameraVelocity = 0;
    let targetVelocity = 0;
    let lastTimestamp = 0;
    
    // Bounds: 0 to 13,000px (14 cards * 900 = 12,600px + 400px end space)
    let endSceneZ = -(filteredCollection.length * zStep); // -12,600px
    let maxCameraZ = 13000;

    // DOM Elements
    const corridorStage = document.getElementById('corridor-stage');
    const corridorViewport = document.getElementById('corridor-viewport');
    const floorPlane = document.getElementById('floor-plane');
    const ceilingPlane = document.getElementById('ceiling-plane');
    const prevBtn = document.getElementById('corridor-prev-btn');
    const nextBtn = document.getElementById('corridor-next-btn');
    const filterButtons = document.querySelectorAll('.filter-btn');
    const hudCounter = document.getElementById('hud-counter');
    const hudProgressBar = document.getElementById('hud-progress-bar');
    
    // Modal Elements
    const modalOverlay = document.getElementById('photo-dossier-modal');
    const modalImage = document.getElementById('modal-img');
    const modalBadge = document.getElementById('modal-badge');
    const modalTitle = document.getElementById('modal-title');
    const modalDescription = document.getElementById('modal-description');
    const modalEdition = document.getElementById('spec-edition');
    const modalLocation = document.getElementById('spec-location');
    const modalPhotographer = document.getElementById('spec-photographer');
    const modalResolution = document.getElementById('spec-resolution');
    const modalHighlightsList = document.getElementById('modal-highlights-list');
    const modalCloseBtn = document.getElementById('modal-close-btn');

    // Build 3D Stage (14 Wall Cards on Left/Right walls + THE FINAL FRAME End Scene)
    function buildCorridorStage() {
        if (!corridorStage) return;

        corridorStage.innerHTML = '';
        endSceneZ = -(filteredCollection.length * zStep);
        maxCameraZ = 13000;

        const isMobile = window.innerWidth <= 768;
        const wallOffset = isMobile ? 170 : 380;
        const wallAngle = isMobile ? 22 : 32;

        // Render Photo Cards on alternating Left/Right walls
        filteredCollection.forEach((photo, idx) => {
            const card = document.createElement('article');
            card.className = 'orbit-corridor-card';
            card.setAttribute('data-id', photo.id);
            card.setAttribute('data-index', idx);

            const cardZ = -idx * zStep;
            const isLeftWall = idx % 2 === 0;
            const origX = isLeftWall ? -wallOffset : wallOffset;
            const origRotateY = isLeftWall ? wallAngle : -wallAngle;

            card.dataset.cardZ = cardZ;
            card.dataset.origX = origX;
            card.dataset.origRotateY = origRotateY;

            card.innerHTML = `
                <div class="corridor-card-img-box">
                    <img src="${photo.image}" alt="${photo.title}" loading="lazy" />
                    <div class="card-img-overlay"></div>
                    <span class="card-badge-left">${photo.badge}</span>
                    <span class="card-badge-right">${photo.edition}</span>
                </div>
                
                <div class="card-text-body">
                    <span class="card-category-tag">${photo.category}</span>
                    <h3 class="card-title">${photo.title}</h3>
                    <p class="card-description">${photo.description}</p>
                </div>

                <div class="card-details-row">
                    <div class="meta-item">
                        <span class="meta-icon">📍</span>
                        <span class="truncate">${photo.location}</span>
                    </div>
                    <div class="meta-item">
                        <span class="meta-icon-magenta">📷</span>
                        <span class="truncate">${photo.photographer}</span>
                    </div>
                </div>

                <button class="card-action-btn" type="button">
                    <span>✦ INSPECT DOSSIER</span>
                </button>
            `;

            card.addEventListener('click', () => {
                openDossierModal(photo);
            });

            corridorStage.appendChild(card);
        });

        // Append "THE FINAL FRAME" End-of-Corridor Portal Scene at Z = -12,600px
        const finalFrame = document.createElement('div');
        finalFrame.className = 'corridor-final-frame';
        finalFrame.id = 'corridor-final-frame';
        finalFrame.dataset.cardZ = endSceneZ;
        finalFrame.dataset.origX = 0;
        finalFrame.dataset.origRotateY = 0;
        finalFrame.style.setProperty('--fz', `${endSceneZ}px`);

        finalFrame.innerHTML = `
            <div class="final-frame-content">
                <span class="final-badge">✦ ARCHIVE DESTINATION ✦</span>
                <h2 class="final-heading">THE FINAL FRAME</h2>
                <p class="final-subtext">“Every moment leaves a light behind.”</p>
                <div class="final-small-line">END OF ARCHIVE // PRAVAAH VISUAL MEMORY</div>
            </div>

            <button class="final-return-btn" id="final-return-btn" type="button">
                <span>✦ RETURN TO ENTRANCE ✦</span>
            </button>
        `;

        corridorStage.appendChild(finalFrame);

        // Return to Entrance button resets position smoothly to entrance
        const returnBtn = finalFrame.querySelector('#final-return-btn');
        if (returnBtn) {
            returnBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                currentCameraZ = 0;
                cameraVelocity = 0;
                targetVelocity = 0;
            });
        }
    }

    // Frame-Rate Independent Animation Frame Loop with Smoothed Target Velocity Physics
    function updateCorridorFrame(timestamp) {
        // 1. Calculate frame-rate independent deltaTime (normalized around 60fps = 16.6667ms)
        if (!lastTimestamp) lastTimestamp = timestamp;
        const deltaTime = Math.min((timestamp - lastTimestamp) / 16.6667, 2);
        lastTimestamp = timestamp;

        // 2. Smoothly approach targetVelocity from input (0.16 smoothing factor)
        cameraVelocity += (targetVelocity - cameraVelocity) * 0.16;

        // 3. Update currentCameraZ scaled by deltaTime
        currentCameraZ += cameraVelocity * deltaTime;

        // 4. Frame-rate independent friction damping applied to targetVelocity
        targetVelocity *= Math.pow(0.90, deltaTime);

        // 5. Zero out near-zero threshold values to prevent infinite micro-floating
        if (Math.abs(targetVelocity) < 0.01 && Math.abs(cameraVelocity) < 0.01) {
            targetVelocity = 0;
            cameraVelocity = 0;
        }

        // 6. Clamp currentCameraZ to [0, 13000px] bounds & zero velocities at boundaries
        if (currentCameraZ <= 0) {
            currentCameraZ = 0;
            cameraVelocity = 0;
            targetVelocity = 0;
        } else if (currentCameraZ >= maxCameraZ) {
            currentCameraZ = maxCameraZ;
            cameraVelocity = 0;
            targetVelocity = 0;
        }

        // 7. Extremely subtle & capped velocity-responsive sway
        const velSwayY = Math.max(-3, Math.min(3, cameraVelocity * 0.12));
        const velRoll = Math.max(-0.35, Math.min(0.35, cameraVelocity * 0.018));

        const swayY = Math.sin(currentCameraZ * 0.0012) * 2 + velSwayY;
        const swayRoll = Math.cos(currentCameraZ * 0.0012) * 0.12 + velRoll;

        // Apply 3D Stage Camera Transform
        if (corridorStage) {
            corridorStage.style.transform = `translate3d(0px, ${swayY}px, ${currentCameraZ}px) rotateZ(${swayRoll}deg)`;
        }

        // Multi-Layer Parallax for Floor & Ceiling Planes
        const parallaxZ = currentCameraZ * 0.25;
        if (floorPlane) {
            floorPlane.style.transform = `rotateX(85deg) translateY(${parallaxZ * 0.3}px)`;
        }
        if (ceilingPlane) {
            ceilingPlane.style.transform = `rotateX(-85deg) translateY(${-parallaxZ * 0.3}px)`;
        }

        // Update Wall Photo Cards
        const cards = corridorStage.querySelectorAll('.orbit-corridor-card');
        let nearestCardIdx = 0;
        let minAbsZ = Infinity;

        cards.forEach((card, idx) => {
            const cardZ = parseFloat(card.dataset.cardZ);
            const origX = parseFloat(card.dataset.origX);
            const origRotateY = parseFloat(card.dataset.origRotateY);

            const relZ = cardZ + currentCameraZ;
            const absRelZ = Math.abs(relZ);

            if (absRelZ < minAbsZ) {
                minAbsZ = absRelZ;
                nearestCardIdx = idx;
            }

            if (relZ > 180) {
                // Passed camera: drift outward along wall and fade out
                const exitRatio = Math.min(1, (relZ - 180) / 450);
                const exitX = origX >= 0 ? origX + 340 * exitRatio : origX - 340 * exitRatio;
                const exitRotate = origX >= 0 ? origRotateY - 18 * exitRatio : origRotateY + 18 * exitRatio;

                card.style.transform = `translate3d(${exitX}px, 0px, ${cardZ}px) rotateY(${exitRotate}deg) scale(${1 + 0.25 * exitRatio})`;
                card.style.opacity = Math.max(0, 1 - exitRatio * 1.25);
                card.style.filter = `blur(${exitRatio * 8}px)`;
                card.style.pointerEvents = 'none';
                card.classList.remove('is-nearest');
            } else if (relZ >= -3600) {
                // Visible inside 3D corridor view
                const depthRatio = 1 - Math.abs(relZ) / 3600;
                const scale = 0.35 + 0.75 * depthRatio;
                const opacity = Math.max(0.12, depthRatio);
                const blurPx = (1 - depthRatio) * 6;

                card.style.transform = `translate3d(${origX}px, 0px, ${cardZ}px) rotateY(${origRotateY}deg) scale(${scale})`;
                card.style.opacity = opacity;
                card.style.filter = `blur(${blurPx}px)`;
                card.style.pointerEvents = opacity > 0.3 ? 'auto' : 'none';

                if (absRelZ < 400) {
                    card.classList.add('is-nearest');
                } else {
                    card.classList.remove('is-nearest');
                }
            } else {
                // Far horizon
                card.style.opacity = 0;
                card.style.pointerEvents = 'none';
                card.classList.remove('is-nearest');
            }
        });

        // Update "THE FINAL FRAME" End Portal Scene
        const finalFrame = document.getElementById('corridor-final-frame');
        if (finalFrame) {
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

    // Non-Passive Wheel Listener: Smoothed Input Filter (targetVelocity += clampedDelta * 0.52)
    if (corridorViewport) {
        corridorViewport.addEventListener('wheel', (e) => {
            e.preventDefault();

            // 1. Normalize wheel delta across pixel / line / page deltaModes
            let rawDelta = e.deltaY !== 0 ? e.deltaY : e.deltaX;
            if (e.deltaMode === 1) { // Line mode
                rawDelta *= 16;
            } else if (e.deltaMode === 2) { // Page mode
                rawDelta *= 300;
            }

            // 2. Multiply by sensitivity scale 0.48 and clamp per event to ±48px
            const normalizedDelta = rawDelta * 0.48;
            const clampedDelta = Math.max(-48, Math.min(48, normalizedDelta));

            // 3. Add impulse to targetVelocity and clamp targetVelocity to ±24
            targetVelocity += clampedDelta * 0.52;
            targetVelocity = Math.max(-24, Math.min(24, targetVelocity));
        }, { passive: false });
    }

    // Touch & Drag Pointer Impulse Movement
    let startY = 0;
    let lastY = 0;
    let isDragging = false;

    if (corridorViewport) {
        corridorViewport.addEventListener('pointerdown', (e) => {
            if (e.target.closest('.final-return-btn') || e.target.closest('.card-action-btn')) return;
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
