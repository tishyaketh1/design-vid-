document.addEventListener('DOMContentLoaded', () => {
    // Nav indicator alignment
    const activeNav = document.querySelector('.nav-item.active');
    const pill = document.getElementById('nav-indicator-pill');
    if (activeNav && pill) {
        setTimeout(() => {
            pill.style.left = `${activeNav.offsetLeft}px`;
            pill.style.width = `${activeNav.offsetWidth}px`;
        }, 100);
    }

    // Verses configuration
    const verses = [
        { key: 'tech', label: 'TECH VERSE', color: 'var(--tech-color)', angle: -90 },
        { key: 'cult', label: 'CULT VERSE', color: 'var(--cult-color)', angle: -18 },
        { key: 'game', label: 'GAME VERSE', color: 'var(--game-color)', angle: 54 },
        { key: 'ent', label: 'ENTRE VERSE', color: 'var(--ent-color)', angle: 126 },
        { key: 'social', label: 'SOCIAL VERSE', color: 'var(--social-color)', angle: 198 }
    ];

    // Complete 25 events dataset across 5 Verses
    const eventsData = [
        // TECH VERSE
        {
            id: 'tech-1',
            verse: 'tech',
            verseName: 'TECH VERSE',
            name: 'Robo Soccer',
            icon: '🤖',
            desc: 'Build a customized autonomous or manual robot to battle in a futuristic arena and claim the championship trophy.',
            date: 'Oct 15, 10:00 AM',
            day: '1',
            venue: 'Robotics Bay A',
            prize: '₹75,000',
            team: '2 - 4 Members',
            rules: [
                'Robot dimensions must not exceed 30cm x 30cm x 30cm at start.',
                'Max weight allowance is 5.0 kg including battery.',
                'Match duration: 2 halves of 4 minutes each with 1 min break.',
                'No damaging weapons or entanglement mechanisms allowed.'
            ]
        },
        {
            id: 'tech-2',
            verse: 'tech',
            verseName: 'TECH VERSE',
            name: 'Code-A-Thon',
            icon: '💻',
            desc: 'A grueling 24-hour sprint where developer teams solve complex algorithmic problems and real-world system challenges.',
            date: 'Oct 16, 09:00 AM',
            day: '2',
            venue: 'Matrix Lab 3',
            prize: '₹60,000',
            team: '1 - 3 Members',
            rules: [
                '24-hour non-stop algorithmic sprint.',
                'Submissions tested against rigorous hidden test suites.',
                'Languages supported: C++, Java, Python, Rust, Go.',
                'Use of AI assistance tools is strictly monitored and scored.'
            ]
        },
        {
            id: 'tech-3',
            verse: 'tech',
            verseName: 'TECH VERSE',
            name: 'AI Odyssey',
            icon: '🧠',
            desc: 'Design and train a deep learning model to navigate, classify, and resolve dimensional anomalies in noisy datasets.',
            date: 'Oct 17, 11:30 AM',
            day: '3',
            venue: 'Neuromorphic Hall',
            prize: '₹50,000',
            team: '1 - 2 Members',
            rules: [
                'Dataset provided at 11:30 AM on Day 3.',
                'Model evaluation based on F1-Score, latency, and parameter size.',
                'Final presentations to AI faculty and industry judges.'
            ]
        },
        {
            id: 'tech-4',
            verse: 'tech',
            verseName: 'TECH VERSE',
            name: 'WebCraft UI/UX',
            icon: '🌐',
            desc: 'Create futuristic, ultra-smooth interactive web experiences using modern canvas, WebGL, and reactive component frameworks.',
            date: 'Oct 15, 02:00 PM',
            day: '1',
            venue: 'Cyber Center 1',
            prize: '₹40,000',
            team: '1 - 2 Members',
            rules: [
                'Theme announced at the start of the 6-hour hack session.',
                'Judged on aesthetics, micro-interactions, responsive fluidity, and performance.',
                'Live deployment required on GitHub Pages / Vercel.'
            ]
        },
        {
            id: 'tech-5',
            verse: 'tech',
            verseName: 'TECH VERSE',
            name: 'Mech-Trix CAD Design',
            icon: '⚙️',
            desc: 'CAD 3D modeling challenge to construct aerodynamic space exploration rovers and drone frameworks.',
            date: 'Oct 17, 03:00 PM',
            day: '3',
            venue: 'Simulation Annex',
            prize: '₹35,000',
            team: 'Individual / Duo',
            rules: [
                'Software: SolidWorks, Fusion 360, or CATIA.',
                'Designs must withstand stress-strain simulation analysis.'
            ]
        },

        // CULT VERSE
        {
            id: 'cult-1',
            verse: 'cult',
            verseName: 'CULT VERSE',
            name: 'Step Up Group Dance',
            icon: '💃',
            desc: 'Unleash street dance, hip-hop, or classical choreography in a high-octane stage showdown.',
            date: 'Oct 16, 06:00 PM',
            day: '2',
            venue: 'Main Arena Gate 1',
            prize: '₹80,000',
            team: '6 - 20 Members',
            rules: [
                'Time limit: 8 - 12 minutes including stage setup.',
                'Props allowed with prior declaration.',
                'Judged on synchronization, choreography, energy, and costumes.'
            ]
        },
        {
            id: 'cult-2',
            verse: 'cult',
            verseName: 'CULT VERSE',
            name: 'Symphony Rock Battle',
            icon: '🎸',
            desc: 'The ultimate rock and fusion band championship. Feel acoustic decibels shake the multiverse.',
            date: 'Oct 17, 07:00 PM',
            day: '3',
            venue: 'The Amphitheater',
            prize: '₹100,000',
            team: '3 - 8 Members',
            rules: [
                'Performance slot: 20 minutes (including 5 min line check).',
                'At least one original composition or creative adaptation required.',
                'Full drum kit and sound amplification provided.'
            ]
        },
        {
            id: 'cult-3',
            verse: 'cult',
            verseName: 'CULT VERSE',
            name: 'Dramatics & Street Play',
            icon: '🎭',
            desc: 'Intense street theatre competition portraying contemporary social realities and cosmic satire.',
            date: 'Oct 15, 12:00 PM',
            day: '1',
            venue: 'Central Plaza',
            prize: '₹45,000',
            team: '8 - 25 Members',
            rules: [
                'Acoustic instruments and live vocals only (no mic/speakers).',
                'Performance duration: 15 minutes max.'
            ]
        },
        {
            id: 'cult-4',
            verse: 'cult',
            verseName: 'CULT VERSE',
            name: 'Voice of Pravaah',
            icon: '🎤',
            desc: 'Solo vocal competition spanning classical, western pop, rock, and Bollywood melodies.',
            date: 'Oct 16, 02:00 PM',
            day: '2',
            venue: 'Auditorium Prime',
            prize: '₹30,000',
            team: 'Solo + 1 Accompanist',
            rules: [
                'Time limit: 5 minutes.',
                'Backing tracks or 1 instrumentalist permitted.'
            ]
        },
        {
            id: 'cult-5',
            verse: 'cult',
            verseName: 'CULT VERSE',
            name: 'Vogue Cosmic Fashion',
            icon: '✨',
            desc: 'Futuristic fashion runway reflecting themes of cyberpunk, neon retro-futurism, and sustainable haute couture.',
            date: 'Oct 18, 08:00 PM',
            day: '4',
            venue: 'The Galaxy Runway',
            prize: '₹90,000',
            team: '10 - 18 Models + Crew',
            rules: [
                'Runway time: 12 - 15 minutes.',
                'Original themed background music track and narration required.'
            ]
        },

        // GAME VERSE
        {
            id: 'game-1',
            verse: 'game',
            verseName: 'GAME VERSE',
            name: 'Valorant LAN Finals',
            icon: '🎯',
            desc: 'Tactical 5v5 FPS showdown on tournament servers with 240Hz monitors and low-latency LAN connectivity.',
            date: 'Oct 15-16, All Day',
            day: '1',
            venue: 'Esports Lounge A',
            prize: '₹70,000',
            team: '5 Players + 1 Sub',
            rules: [
                'Double elimination bracket.',
                'Standard tournament map pool (Ascent, Haven, Bind, Sunset, Lotus, Split, Abyss).',
                'Bring your own peripherals (mouse/keyboard/headset).'
            ]
        },
        {
            id: 'game-2',
            verse: 'game',
            verseName: 'GAME VERSE',
            name: 'BGMI Squad Battle',
            icon: '🪂',
            desc: 'Squad survival battle in massive custom rooms. Drop, loot, strategize rotations, and secure the winner dinner.',
            date: 'Oct 16-17, All Day',
            day: '2',
            venue: 'Esports Lounge B',
            prize: '₹50,000',
            team: '4 Players Squad',
            rules: [
                'Mobile devices only (no emulators/triggers).',
                'Points scored on Placement + Kills.'
            ]
        },
        {
            id: 'game-3',
            verse: 'game',
            verseName: 'GAME VERSE',
            name: 'EA FC / FIFA Console Cup',
            icon: '⚽',
            desc: '1v1 virtual soccer tournament on PS5 consoles. Test tactical depth, passing vision, and reflex timing.',
            date: 'Oct 15, 01:00 PM',
            day: '1',
            venue: 'Console Zone 1',
            prize: '₹25,000',
            team: 'Solo',
            rules: [
                '6-minute half duration.',
                'Tactical defending compulsory. Club teams (95 overall rating mode).'
            ]
        },
        {
            id: 'game-4',
            verse: 'game',
            verseName: 'GAME VERSE',
            name: 'Retro Arcade Marathon',
            icon: '🕹️',
            desc: 'Compete for high-score domination on classic arcade machines: Pac-Man, Space Invaders, Street Fighter II, and Pinball.',
            date: 'Oct 17, 10:00 AM',
            day: '3',
            venue: 'Nostalgia Arcade',
            prize: '₹20,000',
            team: 'Solo',
            rules: [
                'Unlimited attempts during designated hours.',
                'Top 8 scores advance to head-to-head speed playoffs.'
            ]
        },
        {
            id: 'game-5',
            verse: 'game',
            verseName: 'GAME VERSE',
            name: 'Chess Grandmaster Blitz',
            icon: '♟️',
            desc: 'FIDE-standard blitz tournament (3min + 2sec increment) requiring lightning calculation and ice in the veins.',
            date: 'Oct 18, 10:00 AM',
            day: '4',
            venue: 'Silence Lounge',
            prize: '₹30,000',
            team: 'Solo',
            rules: [
                'Swiss system 7 rounds.',
                'Standard FIDE Blitz rules apply.'
            ]
        },

        // ENTREPRENEUR VERSE
        {
            id: 'ent-1',
            verse: 'ent',
            verseName: 'ENTREPRENEUR VERSE',
            name: 'Pitchers // Shark Arena',
            icon: '💼',
            desc: 'Pitch your early-stage startup or tech innovation directly to real angel investors and VC partners for funding.',
            date: 'Oct 16, 11:00 AM',
            day: '2',
            venue: 'Incubation Center',
            prize: '₹120,000 Funding + Grants',
            team: '1 - 4 Founders',
            rules: [
                '10 minutes pitch deck presentation followed by 5 minutes Q&A.',
                'Must have a working prototype or validated MVP.'
            ]
        },
        {
            id: 'ent-2',
            verse: 'ent',
            verseName: 'ENTREPRENEUR VERSE',
            name: 'B-Plan Showdown',
            icon: '📊',
            desc: 'Draft comprehensive corporate business plans detailing market sizing, unit economics, and go-to-market strategies.',
            date: 'Oct 15, 03:00 PM',
            day: '1',
            venue: 'Seminar Room C',
            prize: '₹50,000',
            team: '2 - 4 Members',
            rules: [
                'Executive summary submitted prior to fest.',
                'Finalists present financial models on stage.'
            ]
        },
        {
            id: 'ent-3',
            verse: 'ent',
            verseName: 'ENTREPRENEUR VERSE',
            name: 'Crypto & Market Quest',
            icon: '📈',
            desc: 'Live high-frequency simulated stock and crypto market trading platform. Read news feeds and execute trades.',
            date: 'Oct 17, 10:00 AM',
            day: '3',
            venue: 'Finance Lab B',
            prize: '₹35,000',
            team: 'Solo / Duo',
            rules: [
                'Initial virtual capital: $1,000,000.',
                'Highest portfolio valuation at market close wins.'
            ]
        },
        {
            id: 'ent-4',
            verse: 'ent',
            verseName: 'ENTREPRENEUR VERSE',
            name: 'Ad-Mad Creative Pitch',
            icon: '📣',
            desc: 'Brainstorm, script, and perform humorous or viral advertisements for bizarre futuristic gadgets.',
            date: 'Oct 15, 11:00 AM',
            day: '1',
            venue: 'Media Auditorium',
            prize: '₹25,000',
            team: '2 - 5 Members',
            rules: [
                'Product allocated on spot with 30 min preparation.',
                '3 minutes live act on stage.'
            ]
        },
        {
            id: 'ent-5',
            verse: 'ent',
            verseName: 'ENTREPRENEUR VERSE',
            name: 'Young Innovator Cup',
            icon: '🚀',
            desc: 'Ideation challenge for school and junior college innovators creating tech prototypes for sustainability.',
            date: 'Oct 18, 02:00 PM',
            day: '4',
            venue: 'Incubation Center',
            prize: '₹30,000',
            team: '1 - 3 Students',
            rules: [
                'Working model or poster presentation.',
                'Certificate of Excellence for all participants.'
            ]
        },

        // SOCIAL VERSE
        {
            id: 'social-1',
            verse: 'social',
            verseName: 'SOCIAL VERSE',
            name: 'Green Horizon Eco-Hack',
            icon: '🌱',
            desc: 'Design deployable solutions for solid waste management, renewable campus energy, and circular economy systems.',
            date: 'Oct 15, 10:00 AM',
            day: '1',
            venue: 'Botanical Annex',
            prize: '₹40,000',
            team: '2 - 4 Members',
            rules: [
                'Focus on low-cost, scalable community implementations.',
                'Field demonstration or physical scale prototype.'
            ]
        },
        {
            id: 'social-2',
            verse: 'social',
            verseName: 'SOCIAL VERSE',
            name: 'Blood Donation & Health Camp',
            icon: '🩸',
            desc: 'Save lives through our certified humanitarian donor drive organized in collaboration with AIIMS & Red Cross.',
            date: 'Oct 16, 09:00 AM',
            day: '2',
            venue: 'Medical Room 1',
            prize: 'Certificate & Badges',
            team: 'Individual Donors',
            rules: [
                'Pre-donation medical screening on site.',
                'Nutritional refreshments and donor card provided.'
            ]
        },
        {
            id: 'social-3',
            verse: 'social',
            verseName: 'SOCIAL VERSE',
            name: 'Street School Outreach',
            icon: '📚',
            desc: 'Hands-on interactive science demonstrations and art workshops conducted for children from local community schools.',
            date: 'Oct 17, 09:30 AM',
            day: '3',
            venue: 'Main Plaza Lawn',
            prize: 'Honorary Recognition',
            team: 'Volunteers & Mentors',
            rules: [
                'Volunteers conduct fun learning sessions and sports games.',
                'Stationery kits distributed to all attendees.'
            ]
        },
        {
            id: 'social-4',
            verse: 'social',
            verseName: 'SOCIAL VERSE',
            name: 'Tech for Accessibility Hack',
            icon: '🤝',
            desc: 'Develop assistive hardware and software prototypes tailored for individuals with visual or motor impairments.',
            date: 'Oct 17, 02:00 PM',
            day: '3',
            venue: 'Cyber Center 2',
            prize: '₹45,000',
            team: '2 - 4 Developers',
            rules: [
                'Solutions must be open-source and easy to assemble.',
                'Live demonstration with assistive tools.'
            ]
        },
        {
            id: 'social-5',
            verse: 'social',
            verseName: 'SOCIAL VERSE',
            name: 'Nukkad Natak Street Play',
            icon: '📢',
            desc: 'Spirited public street plays raising awareness regarding mental health, gender equity, and digital literacy.',
            date: 'Oct 16, 04:00 PM',
            day: '2',
            venue: 'Open Air Stage B',
            prize: '₹35,000',
            team: '6 - 20 Actors',
            rules: [
                'High energy theatrical performance without mics.',
                'Time limit: 12 minutes.'
            ]
        }
    ];

    // =========================================================================
    // MULTIVERSE PORTAL NETWORK & SPHERE SPAWNING LOGIC
    // =========================================================================
    const portalNetworkContainer = document.getElementById('portal-network-container');
    const portalOrbitWrapper = document.getElementById('portal-orbit-wrapper');
    const networkSvg = document.getElementById('network-svg');
    const pravaahCore = document.getElementById('pravaah-core');
    const bigBangFlash = document.getElementById('big-bang-flash');
    const corePrompt = document.getElementById('core-deploy-prompt');
    const liveCoords = document.getElementById('live-coords');

    let orbitAngle = 0;
    let isOrbitPaused = false;
    let isNetworkDeployed = false; // Starts undeployed with enlarged core
    let activeVerse = null;

    function renderPortalNetwork() {
        if (!portalNetworkContainer || !networkSvg || !portalOrbitWrapper) return;

        portalOrbitWrapper.querySelectorAll('.portal-node, .branch-event-node').forEach(el => el.remove());
        networkSvg.innerHTML = '';

        const rect = portalNetworkContainer.getBoundingClientRect();
        const cx = rect.width / 2;
        const cy = rect.height / 2;

        const isMobile = window.innerWidth <= 768;

        const minDimension = Math.min(
            rect.width,
            rect.height
        );

        const rPortal = isMobile
            ? minDimension * 0.27
            : minDimension * 0.29;

        const rEvent = isMobile
            ? minDimension * 0.42
            : minDimension * 0.44;

        // Core Ring
        const coreRing = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        coreRing.setAttribute("cx", cx);
        coreRing.setAttribute("cy", cy);
        coreRing.setAttribute("r", 50);
        coreRing.setAttribute("stroke", "rgba(255, 223, 122, 0.25)");
        coreRing.setAttribute("stroke-width", "2");
        coreRing.setAttribute("fill", "none");
        coreRing.setAttribute("id", "core-svg-ring");
        coreRing.setAttribute("opacity", isNetworkDeployed ? "1" : "0");
        coreRing.style.transition = "opacity 1.2s ease 0.4s";
        networkSvg.appendChild(coreRing);

        verses.forEach((verse) => {
            const rad = (verse.angle * Math.PI) / 180;
            const px = cx + Math.cos(rad) * rPortal;
            const py = cy + Math.sin(rad) * rPortal;

            // Connecting line from core to portal sphere
            const coreLine = document.createElementNS("http://www.w3.org/2000/svg", "path");
            coreLine.setAttribute("d", `M ${cx} ${cy} L ${px} ${py}`);
            coreLine.setAttribute("stroke", verse.color);
            coreLine.setAttribute("stroke-width", "2");
            coreLine.style.filter = `drop-shadow(0 0 2px ${verse.color})`;
            coreLine.setAttribute("fill", "none");
            coreLine.setAttribute("id", `path-core-${verse.key}`);
            coreLine.setAttribute("opacity", isNetworkDeployed ? "0.55" : "0");
            coreLine.style.transition = "opacity 1.2s ease 0.4s";
            networkSvg.appendChild(coreLine);

            // Portal Sphere Node
            const portal = document.createElement('div');
            portal.className = `portal-node portal-${verse.key}`;

            if (isNetworkDeployed) {
                portal.style.left = `${px}px`;
                portal.style.top = `${py}px`;
                portal.style.transform = 'translate(-50%, -50%) scale(1)';
                portal.style.opacity = '1';
                portal.style.pointerEvents = 'auto';
            } else {
                portal.style.left = `${cx}px`;
                portal.style.top = `${cy}px`;
                portal.style.transform = 'translate(-50%, -50%) scale(0)';
                portal.style.opacity = '0';
                portal.style.pointerEvents = 'none';
            }
            portal.setAttribute('data-target-left', px);
            portal.setAttribute('data-target-top', py);
            portal.setAttribute('data-verse', verse.key);

            // Moons
            const numMoons = (verse.key === 'tech' || verse.key === 'game') ? 2 : 1;
            let moonsHTML = '';
            for (let m = 0; m < numMoons; m++) {
                const orbitSpeed = 6 + m * 5;
                const moonOffset = isMobile ? (35 + m * 6) : (65 + m * 10);
                const spinAnimation = (m === 1) ? 'spin-counter' : 'spin';
                moonsHTML += `
                    <div class="portal-moon-orbit" style="animation-name: ${spinAnimation}; animation-duration: ${orbitSpeed}s;">
                        <div class="portal-moon" style="background-color: ${verse.color}; box-shadow: 0 0 8px ${verse.color}; top: ${-moonOffset}px;"></div>
                    </div>
                `;
            }

            portal.innerHTML = `
                <div class="portal-upright-wrapper">
                    <div class="portal-ring-swirl"></div>
                    <div class="portal-center">${verse.key.toUpperCase().substring(0, 4)}</div>
                    <span class="portal-label">${verse.label}</span>
                    ${moonsHTML}
                </div>
            `;

            portal.addEventListener('mouseenter', () => { isOrbitPaused = true; });
            portal.addEventListener('mouseleave', () => { isOrbitPaused = false; });

            portalOrbitWrapper.appendChild(portal);

            // Event Branch Nodes
            const verseEvents = eventsData.filter(e => e.verse === verse.key);
            verseEvents.forEach((evt, idx) => {
                const sweepAngle = isMobile ? 60 : 70;
                const halfSweep = sweepAngle / 2;
                const angleStep = sweepAngle / (verseEvents.length - 1 || 1);

                const evAngle = (verse.angle - halfSweep) + idx * angleStep;
                const evRad = (evAngle * Math.PI) / 180;
                const ex = cx + Math.cos(evRad) * rEvent;
                const ey = cy + Math.sin(evRad) * rEvent;

                const eventLine = document.createElementNS("http://www.w3.org/2000/svg", "path");
                eventLine.setAttribute("d", `M ${px} ${py} L ${ex} ${ey}`);
                eventLine.setAttribute("stroke", verse.color);
                eventLine.setAttribute("stroke-width", "1.5");
                eventLine.setAttribute("fill", "none");
                eventLine.setAttribute("class", `path-event-${verse.key}`);
                eventLine.style.opacity = "0";
                networkSvg.appendChild(eventLine);

                const eventNode = document.createElement('div');
                eventNode.className = `branch-event-node branch-event-${verse.key}`;
                eventNode.style.left = `${ex}px`;
                eventNode.style.top = `${ey}px`;
                eventNode.style.borderColor = verse.color;
                eventNode.style.color = verse.color;
                eventNode.innerHTML = `
                    <div class="event-upright-wrapper">
                        <div class="node-dot" style="background-color: ${verse.color}"></div>
                        <div class="event-node-label">${evt.name}</div>
                    </div>
                `;

                eventNode.addEventListener('mouseenter', () => { isOrbitPaused = true; });
                eventNode.addEventListener('mouseleave', () => { isOrbitPaused = false; });

                portalOrbitWrapper.appendChild(eventNode);

                eventNode.addEventListener('click', (e) => {
                    e.stopPropagation();
                    openModal(evt);
                });
            });

            portal.addEventListener('click', (e) => {
                e.stopPropagation();
                activatePortalBranch(verse.key);
            });
        });
    }

    function activatePortalBranch(verseKey) {
        if (!isNetworkDeployed) return;
        activeVerse = verseKey;

        verses.forEach(v => {
            document.body.classList.remove(`verse-${v.key}-active`);
        });
        document.body.classList.add(`verse-${verseKey}-active`);

        document.querySelectorAll('.portal-node').forEach(node => {
            if (node.getAttribute('data-verse') === verseKey) {
                node.classList.add('active-portal');
                node.classList.remove('portal-dimmed');
            } else {
                node.classList.remove('active-portal');
                node.classList.add('portal-dimmed');
            }
        });

        verses.forEach(v => {
            const coreLine = document.getElementById(`path-core-${v.key}`);
            const eventLines = document.querySelectorAll(`.path-event-${v.key}`);
            const eventNodes = document.querySelectorAll(`.branch-event-${v.key}`);

            if (v.key === verseKey) {
                if (coreLine) {
                    coreLine.style.strokeWidth = "3";
                    coreLine.style.opacity = "1";
                    coreLine.style.filter = `drop-shadow(0 0 6px ${v.color})`;
                }
                eventLines.forEach(line => {
                    line.classList.add('line-active');
                    line.style.opacity = "0.9";
                });
                eventNodes.forEach(node => {
                    node.classList.add('event-active');
                    node.classList.add('node-active');
                });
            } else {
                if (coreLine) {
                    coreLine.style.strokeWidth = "1.5";
                    coreLine.style.opacity = "0.2";
                    coreLine.style.filter = "none";
                }
                eventLines.forEach(line => {
                    line.classList.remove('line-active');
                    line.style.opacity = "0";
                });
                eventNodes.forEach(node => {
                    node.classList.remove('event-active');
                    node.classList.remove('node-active');
                });
            }
        });
    }

    function deployNetwork() {
        if (!portalNetworkContainer) return;
        isNetworkDeployed = !isNetworkDeployed;

        const universePage = document.getElementById('universe-page');

        if (isNetworkDeployed) {
            if (universePage) {
                universePage.classList.remove('network-undeployed');
                universePage.classList.add('network-deployed');
            }
            if (corePrompt) corePrompt.classList.add('fade-out');

            if (bigBangFlash) {
                bigBangFlash.classList.add('flash-active');
                setTimeout(() => {
                    bigBangFlash.classList.remove('flash-active');
                }, 750);
            }

            if (pravaahCore) {
                pravaahCore.classList.add('core-flash-pulse');
                setTimeout(() => {
                    pravaahCore.classList.remove('core-flash-pulse');
                }, 600);
            }

            // Animate out the 5 Verse Spheres from center to their orbits
            document.querySelectorAll('.portal-node').forEach(node => {
                const targetLeft = node.getAttribute('data-target-left');
                const targetTop = node.getAttribute('data-target-top');
                if (targetLeft && targetTop) {
                    node.style.left = `${targetLeft}px`;
                    node.style.top = `${targetTop}px`;
                    node.style.transform = 'translate(-50%, -50%) scale(1)';
                    node.style.opacity = '1';
                    node.style.pointerEvents = 'auto';
                }
            });

            // Fade in core connecting lines
            document.querySelectorAll('[id^="path-core-"]').forEach(line => {
                line.style.opacity = "0.55";
            });
            const coreRing = document.getElementById('core-svg-ring');
            if (coreRing) coreRing.style.opacity = "1";

            // Note: Event branch names remain collapsed until a verse sphere is clicked!
            activeVerse = null;
        } else {
            if (universePage) {
                universePage.classList.remove('network-deployed');
                universePage.classList.add('network-undeployed');
            }
            if (corePrompt) corePrompt.classList.remove('fade-out');

            verses.forEach(v => {
                document.body.classList.remove(`verse-${v.key}-active`);
            });

            activeVerse = null;

            const cx = portalNetworkContainer.clientWidth / 2;
            const cy = portalNetworkContainer.clientHeight / 2;

            document.querySelectorAll('.portal-node').forEach(node => {
                node.style.left = `${cx}px`;
                node.style.top = `${cy}px`;
                node.style.transform = 'translate(-50%, -50%) scale(0)';
                node.style.opacity = '0';
                node.style.pointerEvents = 'none';
                node.classList.remove('active-portal', 'portal-dimmed');
            });

            document.querySelectorAll('.branch-event-node').forEach(node => {
                node.classList.remove('event-active', 'node-active');
            });

            document.querySelectorAll('.network-svg path').forEach(path => {
                path.style.opacity = "0";
                path.classList.remove('line-active');
            });
            const coreRing = document.getElementById('core-svg-ring');
            if (coreRing) coreRing.style.opacity = "0";
        }
    }

    if (pravaahCore) {
        pravaahCore.addEventListener('click', (e) => {
            e.stopPropagation();
            deployNetwork();
        });
    }

    // Gentle Orbital Rotation Loop
    function animateOrbit() {
        if (!isOrbitPaused && isNetworkDeployed && portalOrbitWrapper) {
            orbitAngle = (orbitAngle + 0.05) % 360;
            portalOrbitWrapper.style.transform = `rotate(${orbitAngle}deg)`;

            document.querySelectorAll('.portal-upright-wrapper, .event-upright-wrapper').forEach(wrapper => {
                wrapper.style.transform = `rotate(${-orbitAngle}deg)`;
            });
        }
        requestAnimationFrame(animateOrbit);
    }
    requestAnimationFrame(animateOrbit);

    // Live Coords updates
    if (liveCoords) {
        setInterval(() => {
            const x = (180 + Math.random() * 10).toFixed(4);
            const y = (-490 - Math.random() * 10).toFixed(4);
            liveCoords.textContent = `X: ${x} | Y: ${y}`;
        }, 1200);
    }

    window.addEventListener('resize', () => {
        renderPortalNetwork();
    });

    // Initialize portal network on page load (enlarged & undeployed)
    setTimeout(() => {
        renderPortalNetwork();
    }, 150);

    // =========================================================================
    // MODAL HANDLING
    // =========================================================================
    const modal = document.getElementById('event-detail-modal');
    const closeModalBtn = document.getElementById('close-detail-modal');
    const modalTag = document.getElementById('modal-tag');
    const modalTitle = document.getElementById('modal-title');
    const modalDesc = document.getElementById('modal-desc');
    const modalSchedule = document.getElementById('modal-schedule');
    const modalVenue = document.getElementById('modal-venue');
    const modalPrize = document.getElementById('modal-prize');
    const modalTeam = document.getElementById('modal-team');
    const modalRules = document.getElementById('modal-rules');
    const modalRegisterBtn = document.getElementById('modal-register-btn');

    function openModal(event) {
        if (!modal) return;
        modalTag.textContent = event.verseName;
        modalTag.className = `verse-badge badge-${event.verse}`;
        modalTitle.textContent = event.name;
        modalDesc.textContent = event.desc;
        modalSchedule.textContent = event.date;
        modalVenue.textContent = event.venue;
        modalPrize.textContent = event.prize;
        modalTeam.textContent = event.team;

        if (event.rules && event.rules.length > 0) {
            modalRules.innerHTML = event.rules.map(r => `<li>${r}</li>`).join('');
        } else {
            modalRules.innerHTML = '<li>Official rules and guidelines apply. Please report 30 mins before schedule.</li>';
        }

        if (modalRegisterBtn) {
            modalRegisterBtn.href = `register.html?event=${encodeURIComponent(event.name)}&day=${encodeURIComponent(event.day || '1')}&verse=${encodeURIComponent(event.verse)}`;
        }

        modal.classList.remove('hidden');
    }

    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', () => {
            modal.classList.add('hidden');
        });
    }

    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.add('hidden');
            }
        });
    }
});
