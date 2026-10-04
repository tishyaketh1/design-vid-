// Glitch Navigation & Cosmic Nav Controller
document.addEventListener('DOMContentLoaded', () => {
    // 1. Ensure Screen Glitch Overlay exists in DOM
    let glitchOverlay = document.getElementById('screen-glitch-overlay');
    if (!glitchOverlay) {
        glitchOverlay = document.createElement('div');
        glitchOverlay.id = 'screen-glitch-overlay';
        glitchOverlay.className = 'screen-glitch-overlay';
        glitchOverlay.innerHTML = `
            <div class="glitch-halftone"></div>
            <div class="glitch-shard shard-1"></div>
            <div class="glitch-shard shard-2"></div>
            <div class="glitch-shard shard-3"></div>
            <div class="glitch-shard shard-4"></div>
            <div class="glitch-shard shard-5"></div>
            <div class="glitch-noise"></div>
        `;
        document.body.appendChild(glitchOverlay);
    }

    function triggerGlitch() {
        if (!glitchOverlay) return;
        glitchOverlay.classList.remove('glitch-active');
        void glitchOverlay.offsetWidth;
        glitchOverlay.classList.add('glitch-active');

        const titles = document.querySelectorAll('.spider-title, .logo-title, .calendar-page-heading, .universe-page-heading, .events-hero-title, .pass-title, .contact-name, .agent-name, [data-text]');
        titles.forEach(t => {
            t.classList.remove('spider-glitch-active');
            void t.offsetWidth;
            t.classList.add('spider-glitch-active');
        });

        setTimeout(() => {
            glitchOverlay.classList.remove('glitch-active');
            titles.forEach(t => t.classList.remove('spider-glitch-active'));
        }, 220);
    }

    // 2. Play glitch burst on page entry / arrival
    triggerGlitch();

    // 3. Attach glitch transition to navigation link clicks
    document.querySelectorAll('a.nav-item, .footer-links-list a, .footer-col a').forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if (href && !href.startsWith('#') && !link.hasAttribute('target') && !href.startsWith('mailto:') && !href.startsWith('tel:')) {
                const currentPage = window.location.pathname.split('/').pop() || 'index.html';
                if (href !== currentPage) {
                    e.preventDefault();
                    try {
                        sessionStorage.setItem('portalEntered', 'true');
                    } catch (err) {}
                    triggerGlitch();
                    setTimeout(() => {
                        window.location.href = href;
                    }, 180);
                }
            }
        });
    });

    // 4. Cosmic Nav Wheel Indicator Pill Tracker
    function getActiveNav() {
        let activeNav = document.querySelector('.nav-item.active');
        if (!activeNav) {
            const path = window.location.pathname.split('/').pop() || 'index.html';
            activeNav = Array.from(document.querySelectorAll('.nav-item')).find(item => {
                const href = item.getAttribute('href');
                return href === path || (path === '' && href === 'index.html');
            }) || document.querySelector('.nav-item[href="index.html"]') || document.querySelector('.nav-item');
            if (activeNav) {
                activeNav.classList.add('active');
            }
        }
        return activeNav;
    }

    function updateNavPill() {
        const activeNav = getActiveNav();
        const pill = document.getElementById('nav-indicator-pill');
        if (activeNav && pill) {
            pill.style.left = `${activeNav.offsetLeft}px`;
            pill.style.width = `${activeNav.offsetWidth}px`;
        }
    }

    updateNavPill();
    setTimeout(updateNavPill, 120);
    window.addEventListener('resize', updateNavPill);
    window.addEventListener('load', updateNavPill);

    const navWheel = document.getElementById('cosmic-nav-wheel');
    const navTrack = document.querySelector('.nav-wheel-track');

    document.querySelectorAll('.nav-item').forEach(item => {
        item.addEventListener('mouseenter', () => {
            const pill = document.getElementById('nav-indicator-pill');
            if (pill) {
                pill.style.left = `${item.offsetLeft}px`;
                pill.style.width = `${item.offsetWidth}px`;
            }
        });
        item.addEventListener('focus', () => {
            const pill = document.getElementById('nav-indicator-pill');
            if (pill) {
                pill.style.left = `${item.offsetLeft}px`;
                pill.style.width = `${item.offsetWidth}px`;
            }
        });
    });

    if (navTrack) {
        navTrack.addEventListener('mouseleave', updateNavPill);
        navTrack.addEventListener('focusout', (e) => {
            if (!navTrack.contains(e.relatedTarget)) {
                updateNavPill();
            }
        });
    }

    if (navWheel) {
        navWheel.addEventListener('mouseleave', updateNavPill);
    }
});
