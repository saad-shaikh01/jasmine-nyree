import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Adult Training Facility — Jasmine Nyree Corporation",
  description:
    "Our Adult Training Facility provides day program services, life skills training, vocational readiness, and community integration for adults with special needs.",
};

export default function AdultTrainingFacilityPage() {
  const services = [
    {
      title: "Life Skills Development",
      description: "Daily living skills including cooking, hygiene, money management, and household care to promote independence.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="w-[26px] h-[26px]">
          <path d="M3 10.5 12 3l9 7.5V21H3z" /><path d="M9.5 21v-6h5v6" />
        </svg>
      ),
    },
    {
      title: "Vocational Readiness",
      description: "Job skill training, workplace etiquette, resume building, and supported employment opportunities.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="w-[26px] h-[26px]">
          <rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" /><path d="M12 12v.01" />
        </svg>
      ),
    },
    {
      title: "Community Integration",
      description: "Guided community outings, public transportation training, and social interaction in real-world settings.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="w-[26px] h-[26px]">
          <circle cx="12" cy="8" r="2.6" /><path d="M7.5 17c0-2.5 2-4 4.5-4s4.5 1.5 4.5 4" />
          <circle cx="4.5" cy="10.5" r="2" /><path d="M1 17c0-2 1.5-3 3.5-3" />
          <circle cx="19.5" cy="10.5" r="2" /><path d="M23 17c0-2-1.5-3-3.5-3" />
        </svg>
      ),
    },
    {
      title: "Social Skills Building",
      description: "Group activities, peer interaction workshops, communication training, and relationship building exercises.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="w-[26px] h-[26px]">
          <path d="M21 11.5a8.4 8.4 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.4 8.4 0 0 1-3.8-.9L3 21l1.9-5.7a8.4 8.4 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.4 8.4 0 0 1 3.8-.9h.5a8.5 8.5 0 0 1 8 8v.5z" />
        </svg>
      ),
    },
    {
      title: "Health & Wellness",
      description: "Physical fitness activities, nutrition education, mindfulness practices, and health awareness programming.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="w-[26px] h-[26px]">
          <path d="M20.4 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-.6-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.4-8.6a5.5 5.5 0 0 0 0-7.8z" />
        </svg>
      ),
    },
    {
      title: "Creative Arts & Recreation",
      description: "Art, music, drama, and recreational activities that foster self-expression, creativity, and joy.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="w-[26px] h-[26px]">
          <circle cx="13.5" cy="6.5" r="2.5" /><path d="M17.5 10.5 21 12l-3.5 1.5L16 17l-1.5-3.5L11 12l3.5-1.5L16 7z" />
          <path d="M7 14l-3.5 1.5L2 12l1.5-3.5L7 7l1.5 3.5L12 12l-3.5 1.5z" />
        </svg>
      ),
    },
  ];

  return (
    <>
      <PageHero
        eyebrow="Our Programs"
        title="Adult Training Facility"
        subtitle="Empowering adults with special needs through comprehensive day programs designed to build independence, confidence, and community connections."
        imageSrc="/images/adult-training.jpg"
        imageAlt="Adults participating in activities at the Jasmine Nyree training facility"
      />

      {/* PROGRAM OVERVIEW */}
      <section className="py-16 lg:py-[88px]">
        <div className="max-w-[1920px] mx-auto px-5 md:px-10">
          <div className="max-w-[720px] mx-auto text-center mb-14">
            <span className="eyebrow">What We Offer</span>
            <h2 className="font-serif text-[28px] sm:text-[34px] text-[#232323] leading-[1.18] mt-3">
              Comprehensive Day Program Services
            </h2>
            <div className="rule rule-center" />
            <p className="text-[14.5px] text-[#5F5F5F] leading-[1.7] mt-5">
              Our Adult Training Facility (ATF) provides structured, person-centered programming for adults with intellectual and developmental disabilities. Every participant receives an individualized service plan designed to maximize their growth and independence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <article
                key={service.title}
                className="bg-white border border-[#ECE3D2] rounded-[6px] p-7 card-shadow-hover"
              >
                <div className="w-[56px] h-[56px] shrink-0 rounded-full bg-[#FBEEDA] flex items-center justify-center text-[#C69440] mb-5">
                  {service.icon}
                </div>
                <h3 className="font-sans text-[16px] font-bold text-[#3A3A3A] mb-[9px]">
                  {service.title}
                </h3>
                <p className="text-[13.5px] text-[#5F5F5F] leading-[1.65]">
                  {service.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PROGRAM DETAILS */}
      <section className="bg-[#FBF4E8] py-16 lg:py-[80px]">
        <div className="max-w-[1920px] mx-auto px-5 md:px-10">
          <div className="max-w-[960px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-[6px] p-8 border border-[#ECE3D2]">
              <h3 className="font-serif text-[20px] text-[#232323] mb-4">Program Details</h3>
              <ul className="space-y-3 text-[14px] text-[#5F5F5F]">
                <li className="flex items-start gap-3">
                  <svg viewBox="0 0 24 24" fill="none" stroke="#C69440" strokeWidth="1.8" className="w-5 h-5 shrink-0 mt-[2px]">
                    <rect x="3" y="5" width="18" height="16" rx="2" /><path d="M3 10h18M8 3v4M16 3v4" />
                  </svg>
                  <span><strong className="text-[#3A3A3A]">Schedule:</strong> Monday through Friday</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg viewBox="0 0 24 24" fill="none" stroke="#C69440" strokeWidth="1.8" className="w-5 h-5 shrink-0 mt-[2px]">
                    <circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" />
                  </svg>
                  <span><strong className="text-[#3A3A3A]">Hours:</strong> 9:00 AM — 3:00 PM</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg viewBox="0 0 24 24" fill="none" stroke="#C69440" strokeWidth="1.8" className="w-5 h-5 shrink-0 mt-[2px]">
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" /><circle cx="12" cy="10" r="3" />
                  </svg>
                  <span><strong className="text-[#3A3A3A]">Location:</strong> 3011 Landis Street, Pittsburgh, PA 15204</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg viewBox="0 0 24 24" fill="none" stroke="#C69440" strokeWidth="1.8" className="w-5 h-5 shrink-0 mt-[2px]">
                    <circle cx="12" cy="8" r="2.6" /><path d="M7.5 17c0-2.5 2-4 4.5-4s4.5 1.5 4.5 4" />
                  </svg>
                  <span><strong className="text-[#3A3A3A]">Eligibility:</strong> Adults 21+ with intellectual or developmental disabilities</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-[6px] p-8 border border-[#ECE3D2]">
              <h3 className="font-serif text-[20px] text-[#232323] mb-4">Our Approach</h3>
              <p className="text-[14px] text-[#5F5F5F] leading-[1.7] mb-4">
                We believe that every individual has unique strengths and potential. Our team of trained professionals works closely with each participant and their family to create personalized goals and meaningful daily experiences.
              </p>
              <p className="text-[14px] text-[#5F5F5F] leading-[1.7]">
                From morning check-in to afternoon activities, every part of the day is designed to promote growth, build confidence, and create lasting connections within a safe and nurturing environment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ENROLLMENT CTA */}
      <section className="py-16 lg:py-[72px] text-center">
        <div className="max-w-[1920px] mx-auto px-5 md:px-10">
          <span className="eyebrow">Get Started</span>
          <h2 className="font-serif text-[28px] sm:text-[34px] text-[#232323] leading-[1.18] mt-3">
            Ready to Enroll?
          </h2>
          <div className="rule rule-center" />
          <p className="max-w-[480px] mx-auto text-[14.5px] text-[#5F5F5F] leading-[1.7] mt-4">
            Contact us today to learn more about our Adult Training Facility and how to begin the enrollment process for yourself or a loved one.
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
