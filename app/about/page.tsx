import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "About Us — Jasmine Nyree Corporation",
  description:
    "Learn about Jasmine Nyree Corporation's 25+ year history of serving individuals with special needs and families across California and Pennsylvania.",
};

export default function AboutPage() {
  const awards = [
    "Women with a Heart Award",
    "Multiple Small Business Leader of the Year Awards",
    "Bakersfield College Top 100 Alumni",
    "City of Pittsburgh Proclamation",
    "Foothill High School Hall of Fame Inductee",
  ];

  return (
    <>
      <PageHero
        eyebrow="Our Story"
        title="About Jasmine Nyree Corporation"
        subtitle="For more than 25 years, we have been dedicated to serving individuals with special needs and families who face difficult gaps in care and support."
        imageSrc="/images/about-hero.jpg"
        imageAlt="Jasmine Nyree Campus in Pittsburgh's West End neighborhood"
      />

      {/* OUR STORY SECTION */}
      <section className="py-16 lg:py-[88px]">
        <div className="max-w-[1920px] mx-auto px-5 md:px-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-[72px] items-center">
          <div>
            <span className="eyebrow">Who We Are</span>
            <h2 className="font-serif text-[28px] sm:text-[34px] lg:text-[38px] text-[#232323] leading-[1.18] mt-3">
              A Legacy of Service,<br />Family, and Community
            </h2>
            <div className="rule my-5" />
            <div className="space-y-4 text-[14.5px] text-[#5F5F5F] leading-[1.7] max-w-[520px]">
              <p>
                Jasmine Nyree Corporation was founded on a belief that every person deserves the opportunity to be supported, included, and able to reach their fullest potential.
              </p>
              <p>
                What began in California has grown into an organization that now operates in both California and Pennsylvania, employs more than 50 professionals, and has served thousands of individuals and families over the years.
              </p>
              <p>
                In California, Jasmine Nyree has maintained a long-standing partnership with the Kern Regional Center. In Pittsburgh, the organization now works with local school districts, including a year-round relationship with Pittsburgh Public Schools.
              </p>
            </div>
          </div>

          {/* STATS CARDS */}
          <div className="grid grid-cols-2 gap-5">
            {[
              { num: "25+", label: "Years of Service" },
              { num: "50+", label: "Professionals on Staff" },
              { num: "2", label: "States of Operation" },
              { num: "1000s", label: "Individuals Served" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-[#FBF4E8] rounded-[6px] p-6 text-center border border-[#ECE3D2] card-shadow-hover"
              >
                <div className="font-serif text-[32px] lg:text-[38px] text-[#C69440] leading-[1.1]">
                  {stat.num}
                </div>
                <div className="text-[12.5px] font-semibold text-[#4E4E4E] tracking-[0.02em] mt-[6px]">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="bg-[#FBF4E8] py-16 lg:py-[80px]">
        <div className="max-w-[1920px] mx-auto px-5 md:px-10">
          <div className="text-center max-w-[600px] mx-auto mb-12">
            <span className="eyebrow">What Drives Us</span>
            <h2 className="font-serif text-[28px] sm:text-[34px] text-[#232323] leading-[1.18] mt-3">
              Our Mission &amp; Vision
            </h2>
            <div className="rule rule-center" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[960px] mx-auto">
            <div className="bg-white rounded-[6px] p-8 border border-[#ECE3D2] card-shadow-hover">
              <div className="w-[56px] h-[56px] rounded-full bg-[#FBEEDA] flex items-center justify-center text-[#C69440] mb-5">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className="w-[26px] h-[26px]">
                  <path d="M12 21V9" /><path d="M12 12C12 8 9 5 5 5c0 4 3 7 7 7z" /><path d="M12 14c0-3.5 2.7-6 6.5-6 0 3.5-2.7 6-6.5 6z" />
                </svg>
              </div>
              <h3 className="font-serif text-[20px] text-[#232323] mb-3">Our Mission</h3>
              <p className="text-[14.5px] text-[#5F5F5F] leading-[1.7]">
                To provide comprehensive services and support to individuals with special needs and their families, fostering independence, community integration, and a fulfilling quality of life through innovative programs and compassionate care.
              </p>
            </div>

            <div className="bg-white rounded-[6px] p-8 border border-[#ECE3D2] card-shadow-hover">
              <div className="w-[56px] h-[56px] rounded-full bg-[#FBEEDA] flex items-center justify-center text-[#C69440] mb-5">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className="w-[26px] h-[26px]">
                  <circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" />
                </svg>
              </div>
              <h3 className="font-serif text-[20px] text-[#232323] mb-3">Our Vision</h3>
              <p className="text-[14.5px] text-[#5F5F5F] leading-[1.7]">
                A world where every individual, regardless of ability, has access to the support, resources, and opportunities they need to thrive — and where communities are stronger because of their commitment to inclusion and care.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FOUNDER SPOTLIGHT */}
      <section className="py-16 lg:py-[88px]">
        <div className="max-w-[1920px] mx-auto px-5 md:px-10">
          <div className="text-center max-w-[600px] mx-auto mb-12">
            <span className="eyebrow">Our Leadership</span>
            <h2 className="font-serif text-[28px] sm:text-[34px] text-[#232323] leading-[1.18] mt-3">
              Meet Our Founder
            </h2>
            <div className="rule rule-center" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[340px_1fr] gap-10 lg:gap-[56px] items-start max-w-[1100px] mx-auto">
            {/* PHOTO */}
            <div className="mx-auto lg:mx-0">
              <div className="w-[280px] sm:w-[320px] aspect-[3/4] rounded-[8px] overflow-hidden border-[3px] border-[#C69440] shadow-lg">
                <Image
                  src="/images/christy-porter.jpg"
                  alt="Christy Porter, Founder and CEO of Jasmine Nyree Corporation"
                  width={320}
                  height={427}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-center mt-5">
                <h3 className="font-serif text-[22px] text-[#232323]">Christy Porter</h3>
                <p className="text-[13px] text-[#C69440] font-semibold tracking-[0.04em] mt-1">
                  Founder &amp; Chief Executive Officer
                </p>
              </div>
            </div>

            {/* BIO */}
            <div className="space-y-4 text-[14.5px] text-[#5F5F5F] leading-[1.75]">
              <p>
                For Christy Porter, Jasmine Nyree has never been just a business. It has been a life&apos;s work built around service, family, and a belief that every person deserves the opportunity to be supported, included, and able to reach their fullest potential.
              </p>
              <p>
                For more than 25 years, Christy has worked in health and human services, developing programs for individuals with special needs and families who often face difficult gaps in care and support. What began in California grew into the Jasmine Nyree Corporation, which now operates in both California and Pennsylvania, employs more than 50 professionals, and has served thousands of individuals and families over the years.
              </p>
              <p>
                Christy&apos;s approach has always been hands-on. She has helped design programs, build partnerships, manage growth, and create services based on what families and communities actually need. In California, Jasmine Nyree has maintained a long-standing partnership with the Kern Regional Center. In Pittsburgh, the organization now works with local school districts, including a year-round relationship with Pittsburgh Public Schools.
              </p>
              <p>
                Her vision extends beyond individual programs. Through the Jasmine Nyree Campus in Pittsburgh&apos;s historic West End, Christy is working to create a true community resource. The campus also serves as a Registered Community Organization, helping residents participate in conversations about neighborhood development and giving the community a stronger voice in decisions that affect its future.
              </p>
              <p>
                When Christy saw that the surrounding neighborhood lacked easy access to fresh food, she worked with local leaders to bring a mobile market into the community. Her plans for the campus continue to grow and include a community center, community kitchen, event space, expanded services for older adults, and permanent supportive housing with 24-hour wraparound support.
              </p>

              {/* AWARDS */}
              <div className="bg-[#FBF4E8] rounded-[6px] p-6 border border-[#ECE3D2] mt-6">
                <h4 className="font-sans text-[14px] font-bold text-[#3A3A3A] mb-3 flex items-center gap-2">
                  <svg viewBox="0 0 24 24" fill="none" stroke="#C69440" strokeWidth="1.7" className="w-5 h-5">
                    <circle cx="12" cy="8" r="6" /><path d="M8 14l-2 8 6-3 6 3-2-8" />
                  </svg>
                  Awards &amp; Recognition
                </h4>
                <ul className="grid gap-2">
                  {awards.map((award) => (
                    <li key={award} className="flex items-start gap-2 text-[13.5px] text-[#5F5F5F]">
                      <svg viewBox="0 0 24 24" fill="#C69440" className="w-4 h-4 shrink-0 mt-[3px]">
                        <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z" />
                      </svg>
                      {award}
                    </li>
                  ))}
                </ul>
              </div>

              <p className="italic text-[#8A8A8A] text-[13.5px] mt-4">
                &ldquo;The most meaningful measure of success is simple: seeing people gain confidence, families feel supported, and communities become stronger because someone chose to listen, care, and create an opportunity.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CAMPUS VISION CTA */}
      <section className="bg-[#2B2B2B] py-16 lg:py-[72px]">
        <div className="max-w-[1920px] mx-auto px-5 md:px-10 text-center">
          <span className="eyebrow text-[#E3C88F]">Our Future</span>
          <h2 className="font-serif text-[28px] sm:text-[34px] text-white leading-[1.18] mt-3">
            The Jasmine Nyree Campus
          </h2>
          <div className="rule rule-center mx-auto" />
          <p className="max-w-[560px] mx-auto text-[14.5px] text-[#CFCFCF] leading-[1.7] mt-5">
            Located in Pittsburgh&apos;s historic West End, our growing campus is becoming a true community resource — with plans for a community center, community kitchen, event space, expanded services for older adults, and permanent supportive housing with 24-hour wraparound support.
          </p>
          <div className="flex flex-wrap gap-4 justify-center mt-8">
            <Link href="/donate" className="btn btn-solid">
              Support Our Vision
              <svg className="w-[13px] h-[13px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                <path d="M4 12h15M13 6l6 6-6 6" />
              </svg>
            </Link>
            <Link href="/community-adventures" className="btn btn-outline border-[#E3C88F] text-[#E3C88F] hover:bg-[#E3C88F] hover:text-[#2B2B2B]">
              Explore Our Programs
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
