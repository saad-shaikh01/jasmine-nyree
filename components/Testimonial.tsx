"use client";

import { useState, useEffect, useCallback } from "react";

interface TestimonialItem {
  id: number;
  quote: string;
  author: string;
  role: string;
  program?: string;
}

const testimonials: TestimonialItem[] = [
  {
    id: 1,
    quote:
      "Jasmine Nyree gave our family more than a program—they gave our child confidence, stability, and a community where he truly belongs. The staff treats every student like family.",
    author: "Marcus & Elena Vance",
    role: "Parents",
    program: "Special Explorers Program",
  },
  {
    id: 2,
    quote:
      "Finding a day program that treats adults with special needs with dignity, respect, and real life-skill opportunities was an absolute blessing. My sister looks forward to every single morning here.",
    author: "Tasha Robinson",
    role: "Family Caregiver",
    program: "Adult Training Facility",
  },
  {
    id: 3,
    quote:
      "Christy Porter and the Jasmine Nyree team are genuine community builders. Their commitment to West End residents—from fresh food access to youth enrichment—is transforming our neighborhood every day.",
    author: "David K.",
    role: "Local Community Leader",
    program: "Community Campus Partner",
  },
  {
    id: 4,
    quote:
      "The year-round partnership with Pittsburgh Public Schools has been life-changing for our son. He has made genuine friends, built key social skills, and explored places we never imagined.",
    author: "Sarah Jenkins",
    role: "Parent",
    program: "Special Explorers / PPS",
  },
  {
    id: 5,
    quote:
      "Having a Registered Community Organization that actually listens to neighbors and advocates for quality supportive housing and local resources gives us real hope for our neighborhood's future.",
    author: "Robert M.",
    role: "West End Resident",
    program: "Community Development Initiative",
  },
  {
    id: 6,
    quote:
      "The staff's 25+ years of experience shows in everything they do. They don't just offer services; they build a supportive, empowering network around every single individual.",
    author: "Denise Washington",
    role: "Community Advocate",
    program: "Family Support Services",
  },
];

export default function Testimonial() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  // Auto advance slide every 6 seconds unless hovered
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(timer);
  }, [isPaused, nextSlide]);

  return (
    <section
      className="py-[74px] pb-[68px] relative bg-white overflow-hidden border-t border-b border-[#ECE3D2]/60"
      id="testimonials"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-label="Community Testimonials"
    >
      <div className="max-w-[1920px] mx-auto px-5 md:px-10">
        {/* Section Header */}
        <div className="text-center max-w-[600px] mx-auto mb-10">
          <span className="eyebrow">Voices of Our Community</span>
          <h2 className="font-serif text-[26px] sm:text-[30px] lg:text-[34px] text-[#232323] mt-2">
            Stories of Impact &amp; Hope
          </h2>
          <div className="rule rule-center" />
        </div>

        {/* Carousel Container */}
        <div className="max-w-[860px] mx-auto relative px-4 sm:px-14">
          {/* Navigation Arrow Left */}
          <button
            onClick={prevSlide}
            aria-label="Previous testimonial"
            className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#FBF4E8] border border-[#ECE3D2] text-[#C69440] hover:bg-[#C69440] hover:text-white hover:border-[#C69440] transition-colors flex items-center justify-center z-10 focus:outline-none shadow-xs"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Testimonial Card */}
          <div className="relative min-h-[220px] flex flex-col justify-center items-center text-center px-4 sm:px-8 py-4 transition-all duration-300">
            {/* Open Quote Mark */}
            <span
              className="font-serif text-[72px] sm:text-[84px] text-[#E3C88F] leading-none select-none absolute -top-8 left-4 opacity-50"
              aria-hidden="true"
            >
              &ldquo;
            </span>

            {/* Quote Text */}
            <p className="font-serif italic text-[18px] sm:text-[21px] lg:text-[23px] leading-[1.58] text-[#2B2B2B] relative z-10 max-w-[760px]">
              {testimonials[currentIndex].quote}
            </p>

            {/* Attribution */}
            <div className="mt-6 relative z-10">
              <h4 className="font-sans text-[15px] font-bold text-[#3A3A3A] tracking-[0.02em]">
                {testimonials[currentIndex].author}
              </h4>
              <p className="text-[13px] text-[#8A8A8A] mt-1">
                {testimonials[currentIndex].role}
                {testimonials[currentIndex].program && (
                  <span className="text-[#C69440] font-medium">
                    {" "}
                    &bull; {testimonials[currentIndex].program}
                  </span>
                )}
              </p>
            </div>
          </div>

          {/* Navigation Arrow Right */}
          <button
            onClick={nextSlide}
            aria-label="Next testimonial"
            className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#FBF4E8] border border-[#ECE3D2] text-[#C69440] hover:bg-[#C69440] hover:text-white hover:border-[#C69440] transition-colors flex items-center justify-center z-10 focus:outline-none shadow-xs"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Carousel Dot Indicators */}
          <div className="flex gap-[10px] justify-center items-center mt-8">
            {testimonials.map((item, idx) => (
              <button
                key={item.id}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`transition-all duration-300 rounded-full focus:outline-none ${
                  currentIndex === idx
                    ? "w-[24px] h-[8px] bg-[#C69440]"
                    : "w-[8px] h-[8px] bg-[#DED6C6] hover:bg-[#C69440]/60"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
