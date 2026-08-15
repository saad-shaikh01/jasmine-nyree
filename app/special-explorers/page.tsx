import type { Metadata } from "next";
import Link from "next/link";
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
      emoji: "🏛️",
    },
    {
      title: "Social Skills Development",
      description: "Guided group activities that build communication, teamwork, and friendship-building abilities.",
      emoji: "🤝",
    },
    {
      title: "Academic Enrichment",
      description: "Hands-on STEM activities, reading programs, and creative projects that complement classroom learning.",
      emoji: "📚",
    },
    {
      title: "Outdoor Recreation",
      description: "Nature walks, sports activities, playground adventures, and physical fitness programs.",
      emoji: "🌿",
    },
    {
      title: "Creative Arts",
      description: "Art workshops, music sessions, drama activities, and creative expression through multiple mediums.",
      emoji: "🎨",
    },
    {
      title: "Life Skills",
      description: "Age-appropriate daily living skills, safety awareness, and independence-building activities.",
      emoji: "⭐",
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

          {/* PARTNERSHIP CARD */}
          <div className="space-y-6">
            <div className="bg-[#FBF4E8] rounded-[6px] p-8 border border-[#ECE3D2]">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-[56px] h-[56px] rounded-full bg-white flex items-center justify-center text-[#C69440] border border-[#ECE3D2]">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className="w-[26px] h-[26px]">
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c3 3 9 3 12 0v-5" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-serif text-[18px] text-[#232323]">School Partnership</h3>
                  <p className="text-[12.5px] text-[#C69440] font-semibold">Pittsburgh Public Schools</p>
                </div>
              </div>
              <p className="text-[14px] text-[#5F5F5F] leading-[1.7]">
                Our year-round relationship with Pittsburgh Public Schools ensures that our programming aligns with educational goals while providing the enrichment and social experiences that students need to thrive.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { num: "Year-Round", label: "Programming" },
                { num: "K–12", label: "Students Served" },
                { num: "1:4", label: "Staff-to-Student Ratio" },
                { num: "100%", label: "Inclusive Activities" },
              ].map((stat) => (
                <div key={stat.label} className="bg-white rounded-[6px] p-5 text-center border border-[#ECE3D2]">
                  <div className="font-serif text-[22px] text-[#C69440] leading-[1.1]">{stat.num}</div>
                  <div className="text-[11.5px] font-semibold text-[#4E4E4E] tracking-[0.02em] mt-[4px]">{stat.label}</div>
                </div>
              ))}
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
                className="bg-white border border-[#ECE3D2] rounded-[6px] p-7 card-shadow-hover"
              >
                <div className="text-[32px] mb-4">{activity.emoji}</div>
                <h3 className="font-sans text-[16px] font-bold text-[#3A3A3A] mb-[9px]">
                  {activity.title}
                </h3>
                <p className="text-[13.5px] text-[#5F5F5F] leading-[1.65]">
                  {activity.description}
                </p>
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
