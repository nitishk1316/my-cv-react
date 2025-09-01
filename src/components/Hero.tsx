import { useEffect, useRef } from "react";
import Typed from "typed.js";
import AOS from "aos";
import type { Hero } from "../types";

export default function Hero({ name } : Hero) {
  const typedEl = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    // Init AOS (scroll animation)
    AOS.init({ duration: 1000, once: true });

    // Init Typed.js
    if (typedEl.current) {
      const typed = new Typed(typedEl.current, {
        strings: ["Fullstack Developer", "Frontend Developer", "Backend Developer", "DevOps Developer"],
        typeSpeed: 100,
        backSpeed: 60,
        backDelay: 150,
        loop: true,
      });
      return () => typed.destroy();
    }
  }, []);

  return (
    <section id="hero" className="hero section">
      <div
        className="container d-flex flex-column align-items-center justify-content-center text-center aos-init aos-animate">
        <h2>I am {name}</h2>
        <p>
          <span className="typed" ref={typedEl}></span>
        </p>
      </div>
    </section>
  );
}
