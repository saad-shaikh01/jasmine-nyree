export default function Stats() {
  const statsList = [
    { num: "1,200+", label: "Families Supported" },
    { num: "850+", label: "Homes Created or Preserved" },
    { num: "35+", label: "Community Partnerships" },
    { num: "15+", label: "Years of Impact" },
  ];

  return (
    <section className="bg-[#FBF4E8] py-[34px]" id="involved">
      <div className="max-w-[1920px] mx-auto px-5 md:px-10 grid grid-cols-2 lg:grid-cols-4 gap-y-6 lg:gap-y-0">
        {statsList.map((stat, idx) => (
          <div
            key={stat.label}
            className={`text-center px-4 py-[6px] ${
              idx !== 0 ? "lg:border-l lg:border-[#EFE2CC]" : ""
            } ${idx % 2 !== 0 ? "border-l border-[#EFE2CC] lg:border-l-0" : ""}`}
          >
            <div className="font-serif text-[30px] sm:text-[34px] lg:text-[40px] text-[#C69440] leading-[1.1]">
              {stat.num}
            </div>
            <div className="text-[12.5px] font-semibold text-[#4E4E4E] tracking-[0.02em] mt-[6px]">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
