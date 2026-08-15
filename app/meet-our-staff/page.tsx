import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Meet Our Staff — Jasmine Nyree Corporation",
  description:
    "Meet the dedicated professionals behind Jasmine Nyree Corporation, led by founder Christy Porter with over 25 years in health and human services.",
};

export default function MeetOurStaffPage() {
  const teamMembers = [
    {
      name: "Coming Soon",
      role: "Program Director",
      bio: "Our Program Director oversees daily operations and ensures every participant receives personalized, high-quality support.",
    },
    {
      name: "Coming Soon",
      role: "Community Outreach Coordinator",
      bio: "Our Outreach Coordinator builds partnerships with local organizations and connects families to the resources they need.",
    },
    {
      name: "Coming Soon",
      role: "Lead Program Specialist",
      bio: "Our Lead Specialist designs curriculum and activities that foster growth, independence, and joy for every participant.",
    },
  ];

  return (
    <>
      {/* PAGE HERO */}
      <section className="bg-[#FBF4E8] py-12 md:py-16">
        <div className="max-w-[1920px] mx-auto px-5 md:px-10 text-center">
          <span className="eyebrow">Our Team</span>
          <h1 className="font-serif text-[32px] sm:text-[40px] lg:text-[48px] text-[#232323] leading-[1.14] tracking-[-0.01em] mt-[10px]">
            Meet Our Staff
          </h1>
          <div className="rule rule-center" />
          <p className="max-w-[540px] mx-auto text-[15px] text-[#3A3A3A] leading-[1.7] mt-3">
            Dedicated professionals who bring compassion, expertise, and a genuine commitment to every individual and family we serve.
          </p>
        </div>
      </section>

      {/* FOUNDER SPOTLIGHT */}
      <section className="py-16 lg:py-[88px]">
        <div className="max-w-[1920px] mx-auto px-5 md:px-10">
          <div className="max-w-[1100px] mx-auto bg-[#FBF4E8] rounded-[8px] border border-[#ECE3D2] overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr]">
              {/* PHOTO */}
              <div className="relative min-h-[400px] lg:min-h-0">
                <Image
                  src="/images/christy-porter.jpg"
                  alt="Christy Porter, Founder and CEO of Jasmine Nyree Corporation"
                  fill
                  sizes="(max-width: 1024px) 100vw, 320px"
                  className="object-cover"
                />
              </div>

              {/* BIO */}
              <div className="p-8 lg:p-10">
                <span className="eyebrow">Founder &amp; CEO</span>
                <h2 className="font-serif text-[28px] sm:text-[32px] text-[#232323] leading-[1.18] mt-2">
                  Christy Porter
                </h2>
                <div className="rule my-4" />
                <div className="space-y-3 text-[14px] text-[#5F5F5F] leading-[1.7]">
                  <p>
                    For Christy Porter, Jasmine Nyree has never been just a business. It has been a life&apos;s work built around service, family, and a belief that every person deserves the opportunity to be supported, included, and able to reach their fullest potential.
                  </p>
                  <p>
                    For more than 25 years, Christy has worked in health and human services, developing programs for individuals with special needs and families who often face difficult gaps in care and support. What began in California grew into the Jasmine Nyree Corporation, which now operates in both California and Pennsylvania, employs more than 50 professionals, and has served thousands of individuals and families.
                  </p>
                  <p>
                    Through the Jasmine Nyree Campus in Pittsburgh&apos;s historic West End, Christy is working to create a true community resource — with plans for a community center, community kitchen, event space, expanded services for older adults, and permanent supportive housing with 24-hour wraparound support.
                  </p>
                </div>

                {/* AWARDS INLINE */}
                <div className="mt-5 pt-5 border-t border-[#ECE3D2]">
                  <h4 className="font-sans text-[13px] font-bold text-[#3A3A3A] mb-3 flex items-center gap-2">
                    <svg viewBox="0 0 24 24" fill="none" stroke="#C69440" strokeWidth="1.7" className="w-4 h-4">
                      <circle cx="12" cy="8" r="6" /><path d="M8 14l-2 8 6-3 6 3-2-8" />
                    </svg>
                    Awards &amp; Honors
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Women with a Heart Award",
                      "Small Business Leader of the Year",
                      "Top 100 Alumni",
                      "City of Pittsburgh Proclamation",
                      "Hall of Fame Inductee",
                    ].map((award) => (
                      <span
                        key={award}
                        className="text-[11.5px] font-semibold text-[#A87A2C] bg-white border border-[#ECE3D2] rounded-full px-3 py-[5px]"
                      >
                        {award}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TEAM GRID */}
      <section className="bg-[#FBF4E8] py-16 lg:py-[80px]">
        <div className="max-w-[1920px] mx-auto px-5 md:px-10">
          <div className="text-center max-w-[600px] mx-auto mb-12">
            <span className="eyebrow">Our Team</span>
            <h2 className="font-serif text-[28px] sm:text-[34px] text-[#232323] leading-[1.18] mt-3">
              The People Behind the Mission
            </h2>
            <div className="rule rule-center" />
            <p className="text-[14.5px] text-[#5F5F5F] leading-[1.7] mt-4">
              Our team of more than 50 professionals brings expertise, compassion, and dedication to every interaction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[960px] mx-auto">
            {teamMembers.map((member, idx) => (
              <article
                key={idx}
                className="bg-white border border-[#ECE3D2] rounded-[6px] overflow-hidden card-shadow-hover"
              >
                {/* PLACEHOLDER AVATAR */}
                <div className="h-[200px] bg-gradient-to-br from-[#F3E7D2] via-[#E7D3B0] to-[#D9BE8C] flex items-center justify-center">
                  <svg viewBox="0 0 24 24" fill="none" stroke="#C69440" strokeWidth="1.2" className="w-16 h-16 opacity-50">
                    <circle cx="12" cy="8" r="4" /><path d="M4 21c0-4.4 3.6-8 8-8s8 3.6 8 8" />
                  </svg>
                </div>
                <div className="p-6 text-center">
                  <h3 className="font-serif text-[18px] text-[#C69440]">{member.name}</h3>
                  <p className="text-[12.5px] font-semibold text-[#3A3A3A] tracking-[0.02em] mt-1">
                    {member.role}
                  </p>
                  <p className="text-[13px] text-[#5F5F5F] leading-[1.6] mt-3">
                    {member.bio}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* JOIN OUR TEAM CTA */}
      <section className="py-16 lg:py-[72px] text-center">
        <div className="max-w-[1920px] mx-auto px-5 md:px-10">
          <span className="eyebrow">Careers</span>
          <h2 className="font-serif text-[28px] sm:text-[34px] text-[#232323] leading-[1.18] mt-3">
            Join Our Growing Team
          </h2>
          <div className="rule rule-center" />
          <p className="max-w-[480px] mx-auto text-[14.5px] text-[#5F5F5F] leading-[1.7] mt-4">
            We&apos;re always looking for passionate, dedicated individuals who want to make a difference. If you&apos;re interested in a career with purpose, we&apos;d love to hear from you.
          </p>
          <div className="flex flex-wrap gap-4 justify-center mt-8">
            <a href="tel:4125208401" className="btn btn-solid">
              Contact Us
              <svg className="w-[13px] h-[13px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                <path d="M4 12h15M13 6l6 6-6 6" />
              </svg>
            </a>
            <Link href="/about" className="btn btn-outline">
              Learn About Us
              <svg className="w-[13px] h-[13px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                <path d="M4 12h15M13 6l6 6-6 6" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
