import Image from "next/image";
import Link from "next/link";

export default function Mission() {
  return (
    <section className="relative overflow-hidden py-16 lg:py-[88px] pb-[62px]" id="mission">
      {/* Decorative Sunburst & Watermark SVG */}
      <svg
        className="hidden lg:block absolute -right-[40px] top-[40px] w-[340px] text-[#C69440] opacity-16 z-0 pointer-events-none"
        viewBox="0 0 300 260"
        fill="none"
        aria-hidden="true"
      >
        <g stroke="currentColor" strokeWidth="3" strokeLinecap="round">
          <circle cx="196" cy="66" r="20" fill="currentColor" stroke="none" />
          <line x1="196" y1="18" x2="196" y2="34" />
          <line x1="196" y1="98" x2="196" y2="114" />
          <line x1="148" y1="66" x2="164" y2="66" />
          <line x1="228" y1="66" x2="244" y2="66" />
          <line x1="162" y1="32" x2="173" y2="43" />
          <line x1="219" y1="89" x2="230" y2="100" />
          <line x1="230" y1="32" x2="219" y2="43" />
          <line x1="173" y1="89" x2="162" y2="100" />
          <line x1="172" y1="22" x2="180" y2="38" />
          <line x1="212" y1="94" x2="220" y2="110" />
        </g>
        <path
          d="M120 118a13 13 0 1 0 0-26 13 13 0 0 0 0 26zM120 122c-9 0-16 6-16 14v10l-24 16 6 10 26-18h16l26 18 6-10-24-16v-10c0-8-7-14-16-14zM108 158l-8 62h12l8-42 8 42h12l-8-62z"
          fill="currentColor"
        />
      </svg>

      <div className="max-w-[1920px] mx-auto px-5 md:px-10 grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-10 lg:gap-[64px] items-center relative z-10">
        {/* CIRCULAR PHOTO WITH GOLD BORDER */}
        <div className="w-full max-w-[340px] aspect-square rounded-full mx-auto border-[3px] border-[#C69440] p-[5px] bg-white shadow-md">
          <div className="relative w-full h-full rounded-full overflow-hidden">
            <Image
              src="/images/mission-hands.png"
              alt="Diverse hands joined together in unity circle"
              fill
              sizes="300px"
              className="object-cover"
            />
          </div>
        </div>

        {/* TEXT CONTENT */}
        <div>
          <span className="eyebrow">Our Mission</span>
          <h2 className="font-serif text-[28px] sm:text-[34px] lg:text-[38px] text-[#232323] leading-[1.18] mt-3">
            Building Foundations.<br />Transforming Lives.
          </h2>
          <div className="rule my-5"></div>
          <p className="max-w-[430px] text-[14.5px] text-[#5F5F5F] leading-[1.7]">
            Jasmine Nyree Homes, Inc. is dedicated to strengthening communities by providing resources, support, and opportunities that empower individuals and families to thrive.
          </p>
          <Link className="btn btn-solid mt-[26px]" href="/about">
            Learn More About Us
            <svg className="w-[13px] h-[13px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
              <path d="M4 12h15M13 6l6 6-6 6" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
