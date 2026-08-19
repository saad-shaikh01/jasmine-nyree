import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Special Explorers — Jasmine Nyree Corporation",
  description:
    "The Special Explorers Program (SEP) provides after-school and summer enrichment for students with special needs in partnership with Pittsburgh Public Schools.",
};

export default function SpecialExplorersPage() {
  const activities = [
    {
      title: "Educational Field Trips",
      description: "Museums, science centers, historical sites, and cultural venues that make learning tangible and exciting.",
      iconSrc: "/images/icons/field-trips.jpg",
    },
    {
      title: "Social Skills Development",
      description: "Guided group activities that build communication, teamwork, and friendship-building abilities.",
      iconSrc: "/images/icons/social-skills.jpg",
    },
    {
      title: "Academic Enrichment",
      description: "Hands-on STEM activities, reading programs, and creative projects that complement classroom learning.",
      iconSrc: "/images/icons/academic.jpg",
    },
    {
      title: "Outdoor Recreation",
      description: "Nature walks, sports activities, playground adventures, and physical fitness programs.",
      iconSrc: "/images/icons/outdoor.jpg",
    },
    {
      title: "Creative Arts",
      description: "Art workshops, music sessions, drama activities, and creative expression through multiple mediums.",
      iconSrc: "/images/icons/arts.jpg",
    },
    {
      title: "Life Skills",
      description: "Age-appropriate daily living skills, safety awareness, and independence-building activities.",
      iconSrc: "/images/icons/life-skills.jpg",
    },
  ];

  return (
    <>
      <PageHero
        eyebrow="Youth Programs"
        title="Special Explorers Program"
        subtitle="After-school and summer enrichment programming for students with special needs, in partnership with Pittsburgh Public Schools."
        imageSrc="/images/special-explorers.jpg"
        imageAlt="Youth enjoying an outdoor educational field trip through nature"
      />

      {/* PROGRAM OVERVIEW */}
      <section className="py-16 lg:py-[88px]">
        <div className="max-w-[1920px] mx-auto px-5 md:px-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-[72px] items-center">
          <div>
            <span className="eyebrow">About the Program</span>
            <h2 className="font-serif text-[28px] sm:text-[34px] lg:text-[38px] text-[#232323] leading-[1.18] mt-3">
              Explore, Learn,<br />and Grow Together
            </h2>
            <div className="rule my-5" />
            <div className="space-y-4 text-[14.5px] text-[#5F5F5F] leading-[1.7] max-w-[520px]">
              <p>
                The Special Explorers Program (SEP) is designed specifically for students with intellectual and developmental disabilities who want to explore their world beyond the classroom. Through year-round programming, we provide safe, supervised, and enriching experiences that help young people develop new skills and build lasting friendships.
              </p>
              <p>
                Working in close partnership with Pittsburgh Public Schools, our trained staff create age-appropriate activities that are both fun and educational. Every outing and activity is carefully planned to support each student&apos;s individual goals and interests.
              </p>
              <p>
                Whether it&apos;s exploring a museum, creating art in the studio, or learning teamwork through outdoor games, our Special Explorers are always discovering something new about themselves and the world around them.
              </p>
            </div>
          </div>

          {/* PARTNERSHIP & HIGHLIGHT CARDS SHOWCASE */}
          <div className="relative">
            {/* Soft Ambient Background Glow */}
            <div className="absolute -inset-2 bg-gradient-to-r from-[#C69440]/15 via-[#E3C88F]/10 to-[#C69440]/15 rounded-3xl blur-2xl -z-10 opacity-70 pointer-events-none" />

            <div className="space-y-5">
              {/* HERO PARTNERSHIP CARD */}
              <div className="group relative bg-gradient-to-br from-[#FDF9F2] via-[#FBF4E8] to-[#F7ECE0] rounded-2xl p-7 md:p-8 border border-[#ECE3D2] hover:border-[#C69440]/40 transition-all duration-300 shadow-[0_10px_30px_-8px_rgba(198,148,64,0.12)] hover:shadow-[0_18px_40px_-8px_rgba(198,148,64,0.2)]">
                {/* Floating Official Badge */}
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FBEEDA] border border-[#E8D1AA] text-[#A87A2C] text-[11px] font-bold tracking-wider uppercase mb-5 shadow-xs">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5 text-[#C69440]">
                    <path d="M12 2l2.4 4.8 5.3.8-3.8 3.7.9 5.3-4.8-2.5-4.8 2.5.9-5.3-3.8-3.7 5.3-.8z" />
                  </svg>
                  Official School Partnership
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-4">
                  <div className="w-[58px] h-[58px] rounded-2xl bg-white flex items-center justify-center text-[#C69440] border border-[#ECE3D2] shadow-sm group-hover:scale-105 group-hover:border-[#C69440]/50 transition-all duration-300 shrink-0">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-[28px] h-[28px]">
                      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                      <path d="M6 12v5c3 3 9 3 12 0v-5" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-serif text-[20px] font-medium text-[#232323] leading-snug">
                      School Partnership
                    </h3>
                    <div className="flex items-center gap-2 mt-0.5">
                      <span className="w-2 h-2 rounded-full bg-[#C69440] animate-pulse" />
                      <span className="text-[13px] font-semibold text-[#A87A2C] tracking-wide">
                        Pittsburgh Public Schools
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-[14px] text-[#5F5F5F] leading-[1.7]">
                  Our year-round relationship with Pittsburgh Public Schools ensures that our programming aligns directly with educational goals while providing the enrichment, safety, and social growth students need to thrive.
                </p>
              </div>

              {/* STATS MATRIX CARDS */}
              <div className="grid grid-cols-2 gap-3.5 sm:gap-4">
                {[
                  {
                    num: "Year-Round",
                    label: "Programming",
                    icon: (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                        <line x1="16" y1="2" x2="16" y2="6" />
                        <line x1="8" y1="2" x2="8" y2="6" />
                        <line x1="3" y1="10" x2="21" y2="10" />
                      </svg>
                    ),
                  },
                  {
                    num: "K–12",
                    label: "Students Served",
                    icon: (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                      </svg>
                    ),
                  },
                  {
                    num: "1:4",
                    label: "Staff Ratio",
                    icon: (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                        <circle cx="9" cy="7" r="4" />
                        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                      </svg>
                    ),
                  },
                  {
                    num: "100%",
                    label: "Inclusive Focus",
                    icon: (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                    ),
                  },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="group relative overflow-hidden bg-white rounded-xl p-4 sm:p-5 border border-[#ECE3D2] hover:border-[#C69440]/50 transition-all duration-300 hover:-translate-y-1 shadow-xs hover:shadow-md flex flex-col justify-between"
                  >
                    {/* Top gold line indicator */}
                    <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#C69440] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    <div className="flex items-center justify-between mb-2">
                      <div className="w-8 h-8 rounded-lg bg-[#FBEEDA] flex items-center justify-center text-[#C69440] group-hover:bg-[#C69440] group-hover:text-white transition-colors duration-300">
                        {stat.icon}
                      </div>
                      <span className="text-[10px] uppercase font-bold tracking-widest text-[#C69440]/70 group-hover:text-[#C69440] transition-colors">
                        SEP
                      </span>
                    </div>

                    <div>
                      <div className="font-serif text-[22px] sm:text-[24px] font-semibold text-[#C69440] leading-tight">
                        {stat.num}
                      </div>
                      <div className="text-[11.5px] font-semibold text-[#4E4E4E] tracking-tight mt-0.5">
                        {stat.label}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ACTIVITIES GRID */}
      <section className="bg-[#FBF4E8] py-16 lg:py-[80px]">
        <div className="max-w-[1920px] mx-auto px-5 md:px-10">
          <div className="text-center max-w-[600px] mx-auto mb-12">
            <span className="eyebrow">What We Do</span>
            <h2 className="font-serif text-[28px] sm:text-[34px] text-[#232323] leading-[1.18] mt-3">
              Activities &amp; Experiences
            </h2>
            <div className="rule rule-center" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1100px] mx-auto">
            {activities.map((activity) => (
              <article
                key={activity.title}
                className="group relative bg-white border border-[#ECE3D2] hover:border-[#C69440]/60 rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1.5 shadow-xs hover:shadow-xl flex flex-col justify-between overflow-hidden"
              >
                {/* Accent top line on hover */}
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#C69440]/20 via-[#C69440] to-[#C69440]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div>
                  <div className="w-[68px] h-[68px] rounded-2xl bg-gradient-to-br from-[#FFFDF9] via-[#FDF9F2] to-[#FBEEDA] p-1.5 border border-[#E8D1AA] shadow-sm mb-5 group-hover:scale-105 group-hover:border-[#C69440] transition-all duration-300">
                    <Image
                      src={activity.iconSrc}
                      alt={activity.title}
                      width={68}
                      height={68}
                      className="w-full h-full object-cover rounded-xl shadow-2xs"
                    />
                  </div>
                  <h3 className="font-serif text-[18px] font-medium text-[#232323] group-hover:text-[#A87A2C] transition-colors duration-200 mb-2.5">
                    {activity.title}
                  </h3>
                  <p className="text-[13.5px] text-[#5F5F5F] leading-[1.65]">
                    {activity.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#F5EBD9] flex items-center justify-between text-[11px] font-bold text-[#C69440] tracking-wider uppercase">
                  <span>Special Explorers</span>
                  <span className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200">
                    →
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ENROLLMENT CTA */}
      <section className="py-16 lg:py-[72px] text-center">
        <div className="max-w-[1920px] mx-auto px-5 md:px-10">
          <span className="eyebrow">Join Us</span>
          <h2 className="font-serif text-[28px] sm:text-[34px] text-[#232323] leading-[1.18] mt-3">
            Enroll Your Child Today
          </h2>
          <div className="rule rule-center" />
          <p className="max-w-[480px] mx-auto text-[14.5px] text-[#5F5F5F] leading-[1.7] mt-4">
            Spaces are limited. Contact us to learn more about the Special Explorers Program and begin the registration process.
          </p>
          <div className="flex flex-wrap gap-4 justify-center mt-8">
            <a href="tel:4125208401" className="btn btn-solid">
              Call (412) 520-8401
              <svg className="w-[13px] h-[13px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7" />
              </svg>
            </a>
            <Link href="/donate" className="btn btn-outline">
              Support This Program
              <svg className="w-[13px] h-[13px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21.2l8.8-8.8a5.5 5.5 0 0 0 0-7.8z" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
