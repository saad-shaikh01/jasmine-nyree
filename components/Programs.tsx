export default function Programs() {
  const programCards = [
    {
      title: "Housing Initiatives",
      description: "Developing and maintaining affordable housing for individuals and families.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="w-[26px] h-[26px]">
          <path d="M3 10.5 12 3l9 7.5V21H3z" />
          <path d="M9.5 21v-6h5v6" />
        </svg>
      ),
    },
    {
      title: "Youth Empowerment",
      description: "Programs that inspire growth, leadership, and academic success.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="w-[26px] h-[26px]">
          <circle cx="12" cy="8" r="2.6" />
          <path d="M7.5 17c0-2.5 2-4 4.5-4s4.5 1.5 4.5 4" />
          <circle cx="4.5" cy="10.5" r="2" />
          <path d="M1 17c0-2 1.5-3 3.5-3" />
          <circle cx="19.5" cy="10.5" r="2" />
          <path d="M23 17c0-2-1.5-3-3.5-3" />
        </svg>
      ),
    },
    {
      title: "Community Enrichment",
      description: "Projects and partnerships that build stronger, more vibrant neighborhoods.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="w-[26px] h-[26px]">
          <path d="M12 21V9" />
          <path d="M12 12C12 8 9 5 5 5c0 4 3 7 7 7z" />
          <path d="M12 14c0-3.5 2.7-6 6.5-6 0 3.5-2.7 6-6.5 6z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-12 lg:pt-2 lg:pb-[76px] text-center" id="programs">
      <div className="max-w-[1920px] mx-auto px-5 md:px-10">
        <h2 className="font-serif text-[26px] sm:text-[30px] lg:text-[34px] text-[#232323]">
          Our Programs
        </h2>
        <div className="rule rule-center"></div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-[44px] text-left">
          {programCards.map((card) => (
            <article
              key={card.title}
              className="bg-white border border-[#ECE3D2] rounded-[4px] p-[26px_24px] flex gap-[18px] card-shadow-hover"
            >
              <div className="w-[56px] h-[56px] shrink-0 rounded-full bg-[#FBEEDA] flex items-center justify-center text-[#C69440]">
                {card.icon}
              </div>
              <div>
                <h3 className="font-sans text-[15px] font-bold text-[#3A3A3A] mb-[9px]">
                  {card.title}
                </h3>
                <p className="text-[13.5px] text-[#5F5F5F] leading-[1.6] mb-[14px]">
                  {card.description}
                </p>
                <a className="link-more" href="#programs">
                  Learn More
                  <svg className="w-[12px] h-[12px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                    <path d="M4 12h15M13 6l6 6-6 6" />
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
