"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";

const donationAmounts = [25, 50, 100, 250, 500];

export default function DonatePage() {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(100);
  const [customAmount, setCustomAmount] = useState("");
  const [isCustom, setIsCustom] = useState(false);

  const impactItems = [
    {
      title: "Support Our Programs",
      description: "Fund life-changing programs for individuals with special needs, including adult training, special explorers, and community adventures.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="w-[28px] h-[28px]">
          <circle cx="12" cy="8" r="2.6" /><path d="M7.5 17c0-2.5 2-4 4.5-4s4.5 1.5 4.5 4" />
          <circle cx="4.5" cy="10.5" r="2" /><path d="M1 17c0-2 1.5-3 3.5-3" />
          <circle cx="19.5" cy="10.5" r="2" /><path d="M23 17c0-2-1.5-3-3.5-3" />
        </svg>
      ),
    },
    {
      title: "Build Our Campus",
      description: "Help grow the Jasmine Nyree Campus into a full community resource with a community center, kitchen, event space, and supportive housing.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="w-[28px] h-[28px]">
          <path d="M3 10.5 12 3l9 7.5V21H3z" /><path d="M9.5 21v-6h5v6" />
        </svg>
      ),
    },
    {
      title: "Strengthen Community",
      description: "Your contribution helps bring fresh food access, neighborhood development resources, and a stronger voice for local residents.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="w-[28px] h-[28px]">
          <path d="M12 21V9" /><path d="M12 12C12 8 9 5 5 5c0 4 3 7 7 7z" /><path d="M12 14c0-3.5 2.7-6 6.5-6 0 3.5-2.7 6-6.5 6z" />
        </svg>
      ),
    },
  ];

  return (
    <>
      {/* HERO */}
      <PageHero
        eyebrow="Make a Difference"
        title="Your Generosity Changes Lives"
        subtitle="Every contribution — no matter the size — directly supports individuals with special needs and strengthens the communities we serve."
        imageSrc="/images/donate-hero.jpg"
        imageAlt="Community members working together in a garden"
      />

      {/* DONATION FORM SECTION */}
      <section className="py-16 lg:py-[88px]">
        <div className="max-w-[1920px] mx-auto px-5 md:px-10">
          <div className="max-w-[640px] mx-auto">
            <div className="text-center mb-10">
              <span className="eyebrow">Donate Now</span>
              <h2 className="font-serif text-[28px] sm:text-[34px] text-[#232323] leading-[1.18] mt-3">
                Choose Your Impact
              </h2>
              <div className="rule rule-center" />
            </div>

            {/* AMOUNT SELECTOR */}
            <div className="bg-[#FBF4E8] rounded-[8px] border border-[#ECE3D2] p-8">
              <p className="text-[14px] font-semibold text-[#3A3A3A] mb-4">Select a donation amount:</p>
              <div className="grid grid-cols-3 sm:grid-cols-5 gap-3 mb-5">
                {donationAmounts.map((amount) => (
                  <button
                    key={amount}
                    onClick={() => { setSelectedAmount(amount); setIsCustom(false); setCustomAmount(""); }}
                    className={`py-3 px-4 rounded-[4px] text-[15px] font-bold transition-all duration-200 border ${
                      selectedAmount === amount && !isCustom
                        ? "bg-[#C69440] text-white border-[#C69440] shadow-md"
                        : "bg-white text-[#3A3A3A] border-[#ECE3D2] hover:border-[#C69440] hover:text-[#C69440]"
                    }`}
                  >
                    ${amount}
                  </button>
                ))}
              </div>

              {/* CUSTOM AMOUNT */}
              <div className="flex items-center gap-3 mb-6">
                <button
                  onClick={() => { setIsCustom(true); setSelectedAmount(null); }}
                  className={`py-3 px-5 rounded-[4px] text-[14px] font-bold transition-all duration-200 border whitespace-nowrap ${
                    isCustom
                      ? "bg-[#C69440] text-white border-[#C69440]"
                      : "bg-white text-[#3A3A3A] border-[#ECE3D2] hover:border-[#C69440]"
                  }`}
                >
                  Custom
                </button>
                {isCustom && (
                  <div className="flex items-center gap-1 flex-1">
                    <span className="text-[18px] font-bold text-[#3A3A3A]">$</span>
                    <input
                      type="number"
                      min="1"
                      placeholder="Enter amount"
                      value={customAmount}
                      onChange={(e) => setCustomAmount(e.target.value)}
                      className="w-full py-3 px-4 rounded-[4px] border border-[#ECE3D2] text-[15px] text-[#3A3A3A] focus:outline-none focus:border-[#C69440] transition-colors"
                    />
                  </div>
                )}
              </div>

              {/* DONATION FREQUENCY */}
              <div className="flex gap-4 mb-6">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="radio" name="frequency" defaultChecked className="accent-[#C69440] w-4 h-4" />
                  <span className="text-[14px] text-[#3A3A3A] font-semibold">One-Time</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="radio" name="frequency" className="accent-[#C69440] w-4 h-4" />
                  <span className="text-[14px] text-[#3A3A3A] font-semibold">Monthly</span>
                </label>
              </div>

              {/* DONATE BUTTON */}
              <button className="w-full bg-[#C69440] hover:bg-[#A87A2C] text-white py-4 rounded-[4px] text-[14px] font-bold tracking-[0.12em] uppercase transition-colors duration-200 flex items-center justify-center gap-3">
                Donate {isCustom && customAmount ? `$${customAmount}` : selectedAmount ? `$${selectedAmount}` : "Now"}
                <svg className="w-[16px] h-[16px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21.2l8.8-8.8a5.5 5.5 0 0 0 0-7.8z" />
                </svg>
              </button>

              <p className="text-[12px] text-[#8A8A8A] text-center mt-4">
                Jasmine Nyree Corporation is a registered nonprofit. Your donation may be tax-deductible.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* IMPACT SECTION */}
      <section className="bg-[#FBF4E8] py-16 lg:py-[80px]">
        <div className="max-w-[1920px] mx-auto px-5 md:px-10">
          <div className="text-center max-w-[600px] mx-auto mb-12">
            <span className="eyebrow">Your Impact</span>
            <h2 className="font-serif text-[28px] sm:text-[34px] text-[#232323] leading-[1.18] mt-3">
              Where Your Donation Goes
            </h2>
            <div className="rule rule-center" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[1000px] mx-auto">
            {impactItems.map((item) => (
              <article
                key={item.title}
                className="bg-white border border-[#ECE3D2] rounded-[6px] p-7 text-center card-shadow-hover"
              >
                <div className="w-[64px] h-[64px] rounded-full bg-[#FBEEDA] flex items-center justify-center text-[#C69440] mx-auto mb-5">
                  {item.icon}
                </div>
                <h3 className="font-serif text-[18px] text-[#232323] mb-3">
                  {item.title}
                </h3>
                <p className="text-[13.5px] text-[#5F5F5F] leading-[1.65]">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* OTHER WAYS TO GIVE */}
      <section className="py-16 lg:py-[72px]">
        <div className="max-w-[1920px] mx-auto px-5 md:px-10">
          <div className="text-center max-w-[600px] mx-auto mb-10">
            <span className="eyebrow">More Ways to Help</span>
            <h2 className="font-serif text-[28px] sm:text-[34px] text-[#232323] leading-[1.18] mt-3">
              Other Ways to Give
            </h2>
            <div className="rule rule-center" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[960px] mx-auto">
            {[
              {
                title: "Volunteer Your Time",
                desc: "Join our team of volunteers and make a direct, hands-on impact in the lives of the individuals we serve.",
                action: "Get Involved",
              },
              {
                title: "Corporate Sponsorship",
                desc: "Partner with us as a corporate sponsor and help fund our programs while making a meaningful investment in your community.",
                action: "Learn More",
              },
              {
                title: "In-Kind Donations",
                desc: "Donate supplies, equipment, or professional services that directly support our programs and campus operations.",
                action: "Contact Us",
              },
            ].map((item) => (
              <div key={item.title} className="bg-white border border-[#ECE3D2] rounded-[6px] p-7 card-shadow-hover">
                <h3 className="font-sans text-[16px] font-bold text-[#3A3A3A] mb-3">{item.title}</h3>
                <p className="text-[13.5px] text-[#5F5F5F] leading-[1.65] mb-5">{item.desc}</p>
                <a href="tel:4125208401" className="link-more">
                  {item.action}
                  <svg className="w-[12px] h-[12px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                    <path d="M4 12h15M13 6l6 6-6 6" />
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QUOTE CTA */}
      <section className="bg-[#2B2B2B] py-14 lg:py-[60px] text-center">
        <div className="max-w-[1920px] mx-auto px-5 md:px-10">
          <p className="font-serif italic text-[18px] sm:text-[22px] text-white leading-[1.5] max-w-[680px] mx-auto">
            &ldquo;The most meaningful measure of success is simple: seeing people gain confidence, families feel supported, and communities become stronger because someone chose to listen, care, and create an opportunity.&rdquo;
          </p>
          <p className="text-[13px] text-[#E3C88F] mt-4 font-semibold">
            — Christy Porter, Founder &amp; CEO
          </p>
          <Link href="/about" className="btn btn-outline border-[#E3C88F] text-[#E3C88F] hover:bg-[#E3C88F] hover:text-[#2B2B2B] mt-8 inline-flex">
            Learn Our Story
            <svg className="w-[13px] h-[13px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
              <path d="M4 12h15M13 6l6 6-6 6" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
