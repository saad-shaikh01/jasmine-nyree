import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative bg-white overflow-hidden min-h-[480px] lg:min-h-[580px] flex items-center">
      {/* ABSOLUTE RIGHT IMAGE WITH LEFT GRADIENT FADE */}
      <div className="relative lg:absolute lg:inset-y-0 lg:right-0 w-full lg:w-1/2 h-[360px] sm:h-[450px] lg:h-full order-2 lg:order-none overflow-hidden bg-gradient-to-br from-[#F3E7D2] via-[#E7D3B0] to-[#D9BE8C]">
        {/* Soft White Gradient Fade Overlay on Left Edge */}
        <div className="absolute inset-y-0 left-0 w-32 sm:w-48 lg:w-64 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />

        <Image
          src="/images/hero-family.png"
          alt="A happy family smiling together outdoors"
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover object-center lg:object-[center_25%]"
        />
      </div>

      {/* CONTENT CONTAINER */}
      <div className="max-w-[1920px] mx-auto px-5 md:px-10 w-full relative z-20 py-8 lg:py-20 order-1 lg:order-none">
        <div className="w-full lg:w-1/2 lg:pr-12">
          <span className="eyebrow">Together, We Thrive</span>
          <h1 className="font-serif text-[38px] sm:text-[48px] lg:text-[60px] text-[#232323] leading-[1.14] tracking-[-0.01em] mt-[14px]">
            Building Stronger<br className="hidden sm:inline" /> Communities
          </h1>
          <div className="rule"></div>
          <p className="max-w-[440px] text-[#3A3A3A] text-[15px] sm:text-[16px] leading-[1.7] mb-[34px]">
            Empowering individuals and families through opportunity, connection, and sustainable community development.
          </p>
          <div className="flex flex-wrap gap-4">
            <a className="btn btn-solid" href="#programs">
              Our Programs
              <svg className="w-[13px] h-[13px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                <path d="M4 12h15M13 6l6 6-6 6" />
              </svg>
            </a>
            <a className="btn btn-outline" href="#involved">
              Get Involved
              <svg className="w-[13px] h-[13px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                <path d="M4 12h15M13 6l6 6-6 6" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
