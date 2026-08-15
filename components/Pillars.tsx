export default function Pillars() {
  const pillarsList = [
    {
      title: "Affordable Housing",
      description: "Creating and preserving safe, affordable homes.",
      icon: (
        <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-[68px] h-[68px]">
          <path d="M8 21 24 9l16 12v18H8z" />
          <path d="M24 33s-6-3.6-6-7.2a3.4 3.4 0 0 1 6-1.9 3.4 3.4 0 0 1 6 1.9C30 29.4 24 33 24 33z" />
        </svg>
      ),
    },
    {
      title: "Community Development",
      description: "Strengthening neighborhoods and building opportunities.",
      icon: (
        <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-[68px] h-[68px]">
          <circle cx="24" cy="17" r="5" />
          <path d="M15 34c0-5 4-8 9-8s9 3 9 8" />
          <circle cx="10" cy="21" r="4" />
          <path d="M3 34c0-4 3-6 7-6" />
          <circle cx="38" cy="21" r="4" />
          <path d="M45 34c0-4-3-6-7-6" />
        </svg>
      ),
    },
    {
      title: "Education & Youth",
      description: "Empowering youth through mentorship and education.",
      icon: (
        <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-[68px] h-[68px]">
          <path d="M24 15v22" />
          <path d="M24 15c-4-3-9-4-15-4v22c6 0 11 1 15 4" />
          <path d="M24 15c4-3 9-4 15-4v22c-6 0-11 1-15 4" />
        </svg>
      ),
    },
    {
      title: "Family Support",
      description: "Providing resources for stronger, healthier families.",
      icon: (
        <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-[68px] h-[68px]">
          <path d="M24 24s-6-3.8-6-7.6A3.6 3.6 0 0 1 24 14a3.6 3.6 0 0 1 6 2.4C30 20.2 24 24 24 24z" />
          <path d="M12 22v10c0 4 4 7 8 7h8c4 0 8-3 8-7V22" />
          <path d="M6 26c0-3 2-5 6-4M42 26c0-3-2-5-6-4" />
        </svg>
      ),
    },
  ];

  return (
    <section className="bg-[#FBF4E8] py-14 sm:py-[64px]">
      <div className="max-w-[1920px] mx-auto px-5 md:px-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-10 lg:gap-y-0">
        {pillarsList.map((pillar, idx) => (
          <div
            key={pillar.title}
            className={`text-center px-6 sm:px-8 py-2 ${
              idx !== 0 ? "lg:border-l lg:border-[#EFE2CC]" : ""
            } ${idx % 2 !== 0 ? "sm:border-l sm:border-[#EFE2CC] lg:border-l-0" : ""}`}
          >
            <div className="text-[#C69440] h-[72px] flex items-center justify-center mb-6">
              {pillar.icon}
            </div>
            <h3 className="font-serif text-[19px] sm:text-[20px] text-[#232323] tracking-[0.01em] mb-[10px]">
              {pillar.title}
            </h3>
            <p className="text-[14px] sm:text-[14.5px] text-[#3A3A3A] leading-[1.65] max-w-[260px] mx-auto">
              {pillar.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
