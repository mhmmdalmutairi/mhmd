"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dotRef     = useRef<HTMLDivElement>(null);
  const outlineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const isMobile = window.matchMedia("(pointer: coarse)").matches;
    if (isMobile) return;

    let mouseX = 0, mouseY = 0;
    let outlineX = 0, outlineY = 0;
    let rafId: number;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.left = `${mouseX}px`;
        dotRef.current.style.top  = `${mouseY}px`;
      }
    };

    const animate = () => {
      outlineX += (mouseX - outlineX) * 0.12;
      outlineY += (mouseY - outlineY) * 0.12;
      if (outlineRef.current) {
        outlineRef.current.style.left = `${outlineX}px`;
        outlineRef.current.style.top  = `${outlineY}px`;
      }
      rafId = requestAnimationFrame(animate);
    };

    const onMouseEnterLink = () => {
      if (outlineRef.current) {
        outlineRef.current.style.width  = "56px";
        outlineRef.current.style.height = "56px";
        outlineRef.current.style.borderColor = "rgba(201,162,39,0.8)";
        outlineRef.current.style.background   = "rgba(201,162,39,0.05)";
      }
    };

    const onMouseLeaveLink = () => {
      if (outlineRef.current) {
        outlineRef.current.style.width  = "36px";
        outlineRef.current.style.height = "36px";
        outlineRef.current.style.borderColor = "rgba(201,162,39,0.5)";
        outlineRef.current.style.background   = "transparent";
      }
    };

    document.addEventListener("mousemove", onMouseMove);
    rafId = requestAnimationFrame(animate);

    const links = document.querySelectorAll("a, button, [role='button'], input, textarea");
    links.forEach(el => {
      el.addEventListener("mouseenter", onMouseEnterLink);
      el.addEventListener("mouseleave", onMouseLeaveLink);
    });

    const observer = new MutationObserver(() => {
      const newLinks = document.querySelectorAll("a, button, [role='button']");
      newLinks.forEach(el => {
        el.removeEventListener("mouseenter", onMouseEnterLink);
        el.removeEventListener("mouseleave", onMouseLeaveLink);
        el.addEventListener("mouseenter", onMouseEnterLink);
        el.addEventListener("mouseleave", onMouseLeaveLink);
      });
    });

    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(rafId);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        className="cursor-dot hidden md:block"
        style={{ transform: "translate(-50%, -50%)" }}
      />
      <div
        ref={outlineRef}
        className="cursor-outline hidden md:block"
        style={{ transform: "translate(-50%, -50%)" }}
      />
    </>
  );
}
