// Main script for portfolio website
// Handles smooth scrolling, custom cursor, parallax effects, and horizontal scroll

document.addEventListener("DOMContentLoaded", (event) => {
  // 1. Initialize Lenis for smooth scrolling
  const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    direction: 'vertical',
    gestureDirection: 'vertical',
    smooth: true,
  });

  // Connect Lenis to ScrollTrigger
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });
  gsap.ticker.lagSmoothing(0);

  // 2. Custom cursor functionality
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

    // 3D Face Rotation Tracking (Makes character look at cursor)
    const character = document.querySelector('.hero__character');
    if (character) {
        // Calculate mouse position relative to center of screen
        const xAxis = (window.innerWidth / 2 - e.pageX) / 20; 
        const yAxis = (window.innerHeight / 2 - e.pageY) / 20;
        
        gsap.to(character, {
            rotationY: -xAxis, 
            rotationX: yAxis,
            rotationZ: xAxis / 5, // Slight tilt
            ease: "power2.out",
            duration: 0.4,
            transformPerspective: 1000,
            transformOrigin: "center center"
        });
    }
  });

  // Add hover effects for interactive elements
  const interactiveElements = document.querySelectorAll('a, .skill-pill');
  interactiveElements.forEach(element => {
    element.addEventListener('mouseenter', () => {
      gsap.to(cursorFollower, { 
        scale: 1.5, 
        backgroundColor: "rgba(230, 81, 0, 0.2)" 
      });
    });
    
    element.addEventListener('mouseleave', () => {
      gsap.to(cursorFollower, { 
        scale: 1, 
        backgroundColor: "transparent" 
      });
    });
  });

  // 3. Hero parallax animation
  const heroParallaxTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: '.hero',
      start: "top top",
      end: "bottom top",
      scrub: true
    }
  });

  // Move background text slightly up
  heroParallaxTimeline.to('.hero__bg-text', { 
    y: -100, 
    opacity: 0.5 
  }, 0);

  // Animate character image with upward parallax depth (rotation is now handled by mousemove)
  heroParallaxTimeline.fromTo('.hero__character', 
      { y: 0, scale: 1 }, 
      { 
          y: -150,           // Vertical shift for 3D depth parallax
          scale: 1.15, 
      }, 
  0);

  // Move foreground text and fade out overlay
  heroParallaxTimeline.to('.hero__fg-text', { 
    y: -450, 
    opacity: 0 
  }, 0);
  
  heroParallaxTimeline.to('.hero__overlay', { 
    opacity: 0, 
    y: -100 
  }, 0);

  // 4. Horizontal scroll for projects section
  const horizontalContainer = document.querySelector(".horizontal-scroll-container");
  const panels = gsap.utils.toArray(".horizontal-panel");

  gsap.to(panels, {
    xPercent: -100 * (panels.length - 1),
    ease: "none",
    scrollTrigger: {
      trigger: ".projects-pin-wrapper",
      pin: true,
      scrub: 1,
      snap: 1 / (panels.length - 1),
      end: () => "+=" + horizontalContainer.offsetWidth
    }
  });

  // 5. Intersection observers for animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
  };

  const fadeInObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
        fadeInObserver.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe all panels for fade-in effect
  document.querySelectorAll('.panel').forEach(panel => {
    panel.style.opacity = 0;
    fadeInObserver.observe(panel);
  });

  // 6. Keyboard navigation support
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Tab' || e.key === 'Enter') {
      // Show cursor during keyboard navigation
      cursor.style.opacity = '1';
      cursorFollower.style.opacity = '1';
    }
  });

  // 7. Cleanup on page unload
  window.addEventListener('beforeunload', () => {
    lenis.destroy();
    gsap.ticker.remove();
  });
});