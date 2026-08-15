import type { Metadata } from "next";
import Link from "next/link";
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

          {/* VALUE PROPS */}
          <div className="space-y-5">
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
              <div key={item.title} className="flex gap-4 items-start bg-[#FBF4E8] rounded-[6px] p-5 border border-[#ECE3D2]">
                <svg viewBox="0 0 24 24" fill="#C69440" className="w-5 h-5 shrink-0 mt-[2px]">
                  <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z" />
                </svg>
                <div>
                  <h3 className="font-sans text-[15px] font-bold text-[#3A3A3A] mb-1">{item.title}</h3>
                  <p className="text-[13.5px] text-[#5F5F5F] leading-[1.6]">{item.desc}</p>
                </div>
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
                className="bg-white border border-[#ECE3D2] rounded-[6px] p-7 card-shadow-hover"
              >
                <div className="w-[56px] h-[56px] shrink-0 rounded-full bg-[#FBEEDA] flex items-center justify-center text-[#C69440] mb-5">
                  {adventure.icon}
                </div>
                <h3 className="font-sans text-[16px] font-bold text-[#3A3A3A] mb-[9px]">
                  {adventure.title}
                </h3>
                <p className="text-[13.5px] text-[#5F5F5F] leading-[1.65]">
                  {adventure.description}
                </p>
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
