import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * Hook useScrollAnimation
 * Configura animaciones GSAP + ScrollTrigger basadas en la filosofía de Alexis Vega
 * Permite crear timelines sincronizadas con el scroll
 */

export interface ScrollAnimationConfig {
  trigger?: string;
  start?: string;
  end?: string;
  scrub?: boolean | number;
  pin?: boolean;
  pinSpacing?: boolean;
  markers?: boolean;
}

export function useScrollAnimation(
  animationCallback: (tl: gsap.core.Timeline) => void,
  config?: ScrollAnimationConfig
) {
  const defaultConfig: ScrollAnimationConfig = {
    start: 'top top',
    end: 'bottom bottom',
    scrub: true,
    pin: false,
    pinSpacing: false,
    markers: false,
    ...config,
  };

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: defaultConfig.trigger || '.content-container',
        start: defaultConfig.start,
        end: defaultConfig.end,
        scrub: defaultConfig.scrub,
        pin: defaultConfig.pin,
        pinSpacing: defaultConfig.pinSpacing,
        markers: defaultConfig.markers,
      },
    });

    animationCallback(tl);
  });
}

/**
 * Animaciones predefinidas para elementos comunes
 */
export const animationPresets = {
  // Elemento aparece con escala y opacidad
  scaleIn: (tl: gsap.core.Timeline, selector: string, duration = 2) => {
    tl.fromTo(
      selector,
      { scale: 0.4, autoAlpha: 0 },
      { scale: 1, autoAlpha: 1, duration }
    );
  },

  // Elemento desaparece con escala y opacidad
  scaleOut: (tl: gsap.core.Timeline, selector: string, duration = 2) => {
    tl.to(selector, {
      scale: 2,
      autoAlpha: 0,
      duration,
    });
  },

  // Elemento aparece y desaparece
  scaleInOut: (
    tl: gsap.core.Timeline,
    selector: string,
    inDuration = 2,
    outDuration = 2
  ) => {
    tl.fromTo(
      selector,
      { scale: 1.2, autoAlpha: 0 },
      { scale: 1, autoAlpha: 1, duration: inDuration }
    );
    tl.to(selector, {
      scale: 2,
      autoAlpha: 0,
      duration: outDuration,
    });
  },

  // Fade in suave
  fadeIn: (tl: gsap.core.Timeline, selector: string, duration = 1) => {
    tl.fromTo(
      selector,
      { autoAlpha: 0 },
      { autoAlpha: 1, duration }
    );
  },

  // Fade out suave
  fadeOut: (tl: gsap.core.Timeline, selector: string, duration = 1) => {
    tl.to(selector, {
      autoAlpha: 0,
      duration,
    });
  },

  // Entrada desde arriba
  slideInFromTop: (
    tl: gsap.core.Timeline,
    selector: string,
    duration = 1
  ) => {
    tl.fromTo(
      selector,
      { y: -100, autoAlpha: 0 },
      { y: 0, autoAlpha: 1, duration }
    );
  },

  // Entrada desde abajo
  slideInFromBottom: (
    tl: gsap.core.Timeline,
    selector: string,
    duration = 1
  ) => {
    tl.fromTo(
      selector,
      { y: 100, autoAlpha: 0 },
      { y: 0, autoAlpha: 1, duration }
    );
  },
};

/**
 * Easing presets para animaciones suaves
 */
export const easingPresets = {
  smooth: 'power3.inOut',
  easeIn: 'power2.in',
  easeOut: 'power2.out',
  elastic: 'elastic.out(1, 0.5)',
  bounce: 'back.out(1.7)',
};
