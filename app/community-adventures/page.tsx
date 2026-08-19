import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Community Adventures Program — Jasmine Nyree Corporation",
  description:
    "The Jasmine Nyree Community Adventures Program provides community-based outings and enriching experiences for individuals with disabilities.",
};

export default function CommunityAdventuresPage() {
  const adventures = [
    {
      title: "Cultural Excursions",
      description: "Visits to museums, galleries, theaters, and cultural festivals that broaden perspectives and create memorable experiences.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="w-[26px] h-[26px]">
          <path d="M3 21h18M5 21V7l7-4 7 4v14" /><rect x="9" y="13" width="6" height="8" /><path d="M9 9h6" />
        </svg>
      ),
    },
    {
      title: "Outdoor Adventures",
      description: "Parks, nature trails, botanical gardens, and recreational facilities that promote physical activity and connection with nature.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="w-[26px] h-[26px]">
          <path d="M12 21V9" /><path d="M12 12C12 8 9 5 5 5c0 4 3 7 7 7z" /><path d="M12 14c0-3.5 2.7-6 6.5-6 0 3.5-2.7 6-6.5 6z" />
        </svg>
      ),
    },
    {
      title: "Community Events",
      description: "Local fairs, community gatherings, sporting events, and seasonal celebrations that strengthen community bonds.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="w-[26px] h-[26px]">
          <circle cx="12" cy="8" r="2.6" /><path d="M7.5 17c0-2.5 2-4 4.5-4s4.5 1.5 4.5 4" />
          <circle cx="4.5" cy="10.5" r="2" /><path d="M1 17c0-2 1.5-3 3.5-3" />
          <circle cx="19.5" cy="10.5" r="2" /><path d="M23 17c0-2-1.5-3-3.5-3" />
        </svg>
      ),
    },
    {
      title: "Shopping & Dining",
      description: "Guided community outings to restaurants, markets, and stores that build real-world skills and social confidence.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="w-[26px] h-[26px]">
          <circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" /><path d="M1 1h4l2.7 13.4a2 2 0 0 0 2 1.6h9.7a2 2 0 0 0 2-1.6L23 6H6" />
        </svg>
      ),
    },
    {
      title: "Fitness & Wellness",
      description: "Swimming, bowling, yoga, and adapted sports activities that promote physical health and an active lifestyle.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="w-[26px] h-[26px]">
          <path d="M20.4 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-.6-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.4-8.6a5.5 5.5 0 0 0 0-7.8z" />
        </svg>
      ),
    },
    {
      title: "Seasonal Programs",
      description: "Holiday celebrations, summer picnics, fall festivals, and seasonal activities that create traditions and joy throughout the year.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="w-[26px] h-[26px]">
          <circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
        </svg>
      ),
    },
  ];

  return (
    <>
      <PageHero
        eyebrow="Our Programs"
        title="Community Adventures Program"
        subtitle="Community-based outings and enriching experiences that promote independence, inclusion, and a fulfilling quality of life."
        imageSrc="/images/community-adventures.jpg"
        imageAlt="Community members enjoying an outdoor group adventure together"
      />

      {/* ABOUT THE PROGRAM */}
      <section className="py-16 lg:py-[88px]">
        <div className="max-w-[1920px] mx-auto px-5 md:px-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-[72px] items-center">
          <div>
            <span className="eyebrow">About the Program</span>
            <h2 className="font-serif text-[28px] sm:text-[34px] lg:text-[38px] text-[#232323] leading-[1.18] mt-3">
              Adventures That<br />Build Connections
            </h2>
            <div className="rule my-5" />
            <div className="space-y-4 text-[14.5px] text-[#5F5F5F] leading-[1.7] max-w-[520px]">
              <p>
                The Jasmine Nyree Community Adventures Program is designed to bring individuals with disabilities into the heart of their community through meaningful, fun, and enriching experiences. Every adventure is an opportunity to explore, learn, and connect.
              </p>
              <p>
                Our trained staff plan and facilitate outings that match the interests and goals of each participant, ensuring that every experience is not only enjoyable but also contributes to personal growth, independence, and social confidence.
              </p>
              <p>
                From cultural excursions to outdoor recreation, from community events to skill-building outings, our program ensures that every individual has the chance to be an active, included member of their community.
              </p>
            </div>
          </div>

          {/* VALUE PROPS CARDS MATCHING EXACT USER REFERENCE DESIGN */}
          <div className="relative pt-6 pl-4 space-y-6">
            {[
              {
                title: "Individualized Planning",
                desc: "Every adventure is selected based on participant interests, goals, and comfort levels.",
              },
              {
                title: "Trained & Caring Staff",
                desc: "Our team is experienced in supporting individuals with diverse abilities in community settings.",
              },
              {
                title: "Safe & Supervised",
                desc: "Safety is our priority. All outings are carefully planned with appropriate staffing ratios.",
              },
              {
                title: "Community Partnerships",
                desc: "We partner with local businesses, venues, and organizations to create welcoming experiences.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="group relative bg-white rounded-2xl p-6 sm:p-7 border border-[#ECE3D2] shadow-[0_8px_30px_-8px_rgba(0,0,0,0.06)] hover:shadow-xl hover:border-[#10B981]/40 transition-all duration-300 hover:-translate-y-1"
              >
                {/* STANDALONE 3D GREEN TICK OVERHANGING TOP-LEFT CORNER */}
                <div className="absolute -top-5 -left-5 w-14 h-14 z-20 pointer-events-none drop-shadow-md group-hover:scale-110 group-hover:-rotate-6 transition-all duration-300">
                  <Image
                    src="/images/icons/tick.webp"
                    alt="Green Tick"
                    width={56}
                    height={56}
                    className="w-full h-full object-contain"
                  />
                </div>

                <div className="flex items-center gap-3 mb-2.5 pl-2">
                  <div className="w-8 h-8 rounded-xl bg-[#E8F7ED] flex items-center justify-center shrink-0 border border-[#D1F2DC]">
                    <span className="w-3 h-3 rounded-full bg-[#10B981] shadow-xs" />
                  </div>
                  <h3 className="font-sans text-[17px] font-bold text-[#232323] tracking-tight">
                    {item.title}
                  </h3>
                </div>

                <p className="text-[13.5px] text-[#5F5F5F] leading-[1.65] pl-11">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ADVENTURES GRID */}
      <section className="bg-[#FBF4E8] py-16 lg:py-[80px]">
        <div className="max-w-[1920px] mx-auto px-5 md:px-10">
          <div className="text-center max-w-[600px] mx-auto mb-12">
            <span className="eyebrow">Our Adventures</span>
            <h2 className="font-serif text-[28px] sm:text-[34px] text-[#232323] leading-[1.18] mt-3">
              Types of Adventures
            </h2>
            <div className="rule rule-center" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1100px] mx-auto">
            {adventures.map((adventure) => (
              <article
                key={adventure.title}
                className="group relative bg-white border border-[#ECE3D2] rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1.5 shadow-xs hover:shadow-xl flex flex-col justify-between overflow-hidden"
              >
                {/* Top subtle gold line accent on hover */}
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#C69440] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* WATERMARK SVG ICON AT TOP RIGHT */}
                <div className="absolute -top-3 -right-3 w-28 h-28 text-[#C69440]/12 group-hover:text-[#C69440]/25 transition-all duration-300 pointer-events-none transform -rotate-12 group-hover:scale-110 group-hover:rotate-0 [&_svg]:w-full [&_svg]:h-full">
                  {adventure.icon}
                </div>

                <div className="relative z-10 pt-1">
                  <h3 className="font-serif text-[19px] font-medium text-[#232323] group-hover:text-[#A87A2C] transition-colors duration-200 mb-2.5 pr-10">
                    {adventure.title}
                  </h3>
                  <p className="text-[13.5px] text-[#5F5F5F] leading-[1.7]">
                    {adventure.description}
                  </p>
                </div>

                <div className="relative z-10 mt-6 pt-4 border-t border-[#F5EBD9] flex items-center justify-between text-[11px] font-bold text-[#C69440] tracking-wider uppercase">
                  <span>Community Outing</span>
                  <span className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200">
                    →
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-[72px] text-center">
        <div className="max-w-[1920px] mx-auto px-5 md:px-10">
          <span className="eyebrow">Get Involved</span>
          <h2 className="font-serif text-[28px] sm:text-[34px] text-[#232323] leading-[1.18] mt-3">
            Join Our Next Adventure
          </h2>
          <div className="rule rule-center" />
          <p className="max-w-[480px] mx-auto text-[14.5px] text-[#5F5F5F] leading-[1.7] mt-4">
            Contact us today to learn more about the Community Adventures Program and how to participate.
          </p>
          <div className="flex flex-wrap gap-4 justify-center mt-8">
            <a href="tel:4125208401" className="btn btn-solid">
              Call (412) 520-8401
              <svg className="w-[13px] h-[13px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7" />
              </svg>
            </a>
            <Link href="/donate" className="btn btn-outline">
              Support Adventures
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
