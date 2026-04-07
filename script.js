document.addEventListener("DOMContentLoaded", (event) => {

    // 1. Register ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    // 2. Initialize Lenis for Smooth Scrolling
    const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        direction: 'vertical',
        gestureDirection: 'vertical',
        smooth: true,
    });

    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time)=>{
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    // 3. Custom Cursor
    const cursor = document.querySelector('.cursor');
    const cursorFollower = document.querySelector('.cursor-follower');

    document.addEventListener('mousemove', (e) => {
        gsap.to(cursor, {
            x: e.clientX,
            y: e.clientY,
            duration: 0.1,
            ease: "power2.out"
        });
        
        gsap.to(cursorFollower, {
            x: e.clientX,
            y: e.clientY,
            duration: 0.3,
            ease: "power2.out"
        });
    });

    const links = document.querySelectorAll('a, .skill-pill');
    links.forEach(link => {
        link.addEventListener('mouseenter', () => {
            gsap.to(cursorFollower, { scale: 1.5, backgroundColor: "rgba(230, 81, 0, 0.2)" });
        });
        link.addEventListener('mouseleave', () => {
            gsap.to(cursorFollower, { scale: 1, backgroundColor: "transparent" });
        });
    });

    // 4. Hero Parallax Layers
    let tlParallax = gsap.timeline({
        scrollTrigger: {
            trigger: '.hero',
            start: "top top",
            end: "bottom top",
            scrub: true
        }
    });

    // Move background text slightly up
    tlParallax.to('.bg-text', { y: -100, opacity: 0.5 }, 0);
    
    // Character moves LEFT TO RIGHT on scroll while tilting
    tlParallax.fromTo('.char-image', 
        { x: -150 }, // Start slightly out of center on the left
        { 
            x: 250,        // Move rightwards across the screen 
            y: -100,       // Slight upward float to match parallax
            scale: 1.15, 
            rotationZ: 15,
            rotationY: -15,   
            transformPerspective: 1000
        }, 
    0);
    // Move foreground hollow text the most to fly completely off
    tlParallax.to('.fg-text', { y: -450, opacity: 0 }, 0);
    // Fade out overlay hints
    tlParallax.to('.hero-overlay', { opacity: 0, y: -100 }, 0);


    // 5. Horizontal Scroll Section
    // The wrapper pins to the screen, while the container moves horizontally
    let horizContainer = document.querySelector(".horizontal-scroll-container");
    let panels = gsap.utils.toArray(".horizontal-panel");

    gsap.to(panels, {
        xPercent: -100 * (panels.length - 1),
        ease: "none",
        scrollTrigger: {
            trigger: ".projects-pin-wrapper",
            pin: true,
            scrub: 1, // Smooth dragging
            snap: 1 / (panels.length - 1), // Snap closely to individual projects
            // End after scrolling 300% of viewport height
            end: () => "+=" + horizContainer.offsetWidth
        }
    });

});
