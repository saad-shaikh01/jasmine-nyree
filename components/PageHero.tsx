import Image from "next/image";

interface PageHeroProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
  imageSrc: string;
  imageAlt: string;
}

export default function PageHero({ eyebrow, title, subtitle, imageSrc, imageAlt }: PageHeroProps) {
  return (
    <section className="relative bg-[#FBF4E8] overflow-hidden min-h-[280px] md:min-h-[340px] flex items-center">
      {/* RIGHT SIDE IMAGE WITH OVERLAY */}
      <div className="absolute inset-y-0 right-0 w-full md:w-[55%] overflow-hidden">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          priority
          sizes="(max-width: 768px) 100vw, 55vw"
          className="object-cover"
        />
        {/* Gradient overlay so text is readable on mobile, fade on desktop */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#FBF4E8] via-[#FBF4E8]/90 to-[#FBF4E8]/30 md:from-[#FBF4E8] md:via-[#FBF4E8]/80 md:to-transparent" />
      </div>

      {/* TEXT CONTENT */}
      <div className="max-w-[1920px] mx-auto px-5 md:px-10 w-full relative z-10 py-12 md:py-16">
        <div className="max-w-[560px]">
          <span className="eyebrow">{eyebrow}</span>
          <h1 className="font-serif text-[32px] sm:text-[40px] lg:text-[48px] text-[#232323] leading-[1.14] tracking-[-0.01em] mt-[10px]">
            {title}
          </h1>
          <div className="rule" />
          {subtitle && (
            <p className="max-w-[440px] text-[#3A3A3A] text-[15px] sm:text-[16px] leading-[1.7]">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
