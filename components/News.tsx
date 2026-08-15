import Image from "next/image";

export default function News() {
  const newsList = [
    {
      title: "Community Resource Fair",
      date: "June 15, 2025",
      snippet: "Join us for a day of resources, food, fun, and community connection.",
      image: "/images/community-fair.png",
      alt: "People gathered at an outdoor community fair",
    },
    {
      title: "New Housing Development",
      date: "May 20, 2025",
      snippet: "Breaking ground on new affordable homes for local families.",
      image: "/images/housing-development.png",
      alt: "Hands holding a model house representing housing development",
    },
  ];

  return (
    <section className="py-[10px] pb-[84px] text-center" id="news">
      <div className="max-w-[1920px] mx-auto px-5 md:px-10">
        <h2 className="font-serif text-[26px] sm:text-[30px] lg:text-[34px] text-[#232323]">
          News &amp; Events
        </h2>
        <div className="rule rule-center"></div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[26px] mt-[44px] text-left">
          {newsList.map((item) => (
            <article
              key={item.title}
              className="grid grid-cols-1 sm:grid-cols-[38%_1fr] bg-white border border-[#ECE3D2] rounded-[4px] overflow-hidden card-shadow-hover"
            >
              {/* Image Container */}
              <div className="relative min-h-[190px] sm:min-h-[150px] w-full bg-gradient-to-br from-[#F3E7D2] to-[#D9BE8C]">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, 25vw"
                  className="object-cover"
                />
              </div>

              {/* News Body */}
              <div className="p-[22px_24px] flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-[17px] text-[#232323] mb-[8px]">
                    {item.title}
                  </h3>
                  <div className="flex items-center gap-[7px] text-[12px] text-[#8A8A8A] mb-[12px]">
                    <svg
                      className="w-[13px] h-[13px] text-[#C69440]"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                    >
                      <rect x="3" y="5" width="18" height="16" rx="2" />
                      <path d="M3 10h18M8 3v4M16 3v4" />
                    </svg>
                    <span>{item.date}</span>
                  </div>
                  <p className="text-[13.5px] text-[#5F5F5F] leading-[1.6] mb-[14px]">
                    {item.snippet}
                  </p>
                </div>
                <a className="link-more" href="#news">
                  Read More
                  <svg
                    className="w-[12px] h-[12px]"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.4"
                  >
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
