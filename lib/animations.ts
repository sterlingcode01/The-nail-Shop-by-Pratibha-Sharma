import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export function fadeUpOnScroll(selector: gsap.DOMTarget) {
  gsap.fromTo(
    selector,
    { opacity: 0, y: 40 },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: selector as any,
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
    }
  );
}

export function staggerFadeUp(selector: gsap.DOMTarget, stagger = 0.15) {
  gsap.fromTo(
    selector,
    { opacity: 0, y: 40 },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      stagger,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: selector as any,
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
    }
  );
}

export function parallaxBg(selector: gsap.DOMTarget, speed = 0.5) {
  gsap.to(selector, {
    yPercent: 20,
    ease: 'none',
    scrollTrigger: {
      trigger: selector as any,
      start: 'top bottom',
      end: 'bottom top',
      scrub: true,
    },
  });
}

export function countUp(selector: string, target: number) {
  const obj = { value: 0 };
  gsap.to(obj, {
    value: target,
    duration: 2,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: selector,
      start: 'top 90%',
    },
    onUpdate: () => {
      const el = document.querySelector(selector);
      if (el) el.textContent = Math.floor(obj.value).toLocaleString() + '+';
    },
  });
}

export function clipReveal(selector: gsap.DOMTarget) {
  gsap.fromTo(
    selector,
    { clipPath: 'inset(0 100% 0 0)' },
    {
      clipPath: 'inset(0 0% 0 0)',
      duration: 1.5,
      ease: 'power4.inOut',
      scrollTrigger: {
        trigger: selector as any,
        start: 'top 80%',
      },
    }
  );
}
