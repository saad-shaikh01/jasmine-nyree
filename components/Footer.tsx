import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer className="bg-[#FBF4E8] py-[52px] pb-[44px]" id="contact">
        <div className="max-w-[1920px] mx-auto px-5 md:px-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1.2fr_1fr] gap-[40px]">
          {/* COLUMN 1: LOGO & ORG INFO */}
          <div>
            <Link href="/" className="flex items-center gap-3 group">
              <svg className="w-[52px] h-[52px] shrink-0" viewBox="0 0 100 100" aria-hidden="true">
                <circle cx="50" cy="50" r="48" fill="#fff" stroke="#2E2E2E" strokeWidth="3" />
                <g fill="#C69440">
                  <circle cx="50" cy="40" r="9" />
                  <g stroke="#C69440" strokeWidth="3" strokeLinecap="round">
                    <line x1="50" y1="17" x2="50" y2="26" />
                    <line x1="31" y1="24" x2="36" y2="31" />
                    <line x1="69" y1="24" x2="64" y2="31" />
                    <line x1="24" y1="40" x2="33" y2="40" />
                    <line x1="76" y1="40" x2="67" y2="40" />
                    <line x1="28" y1="54" x2="35" y2="49" />
                    <line x1="72" y1="54" x2="65" y2="49" />
                  </g>
                </g>
                <path
                  d="M50 84C34 84 22 74 20 60c8-4 16-2 21 4 3-6 6-9 9-9s6 3 9 9c5-6 13-8 21-4-2 14-14 24-30 24z"
                  fill="#2E2E2E"
                />
              </svg>
              <span className="flex flex-col leading-none">
                <span className="font-serif text-[19px] tracking-[0.06em] text-[#3A3226]">
                  JASMINE NYREE
                </span>
                <span className="font-serif text-[8.5px] tracking-[0.42em] text-[#6B6055] mt-[5px] border-t border-b border-[#E3C88F] py-[3px]">
                  CORPORATION
                </span>
                <span className="text-[6.5px] italic text-[#8C8175] mt-[4px] tracking-[0.02em] leading-[1.45]">
                  A Community Development Organization<br />
                  and a Registered Community Organization
                </span>
              </span>
            </Link>
          </div>

          {/* COLUMN 2: QUICK LINKS */}
          <div>
            <h4 className="font-sans text-[14px] font-bold text-[#3A3A3A] mb-[16px]">
              Quick Links
            </h4>
            <ul className="list-none m-0 p-0 grid gap-[9px] text-[13.5px] text-[#5F5F5F]">
              <li><Link href="/about" className="hover:text-[#A87A2C] transition-colors">About Us</Link></li>
              <li><Link href="/adult-training-facility" className="hover:text-[#A87A2C] transition-colors">Adult Training Facility</Link></li>
              <li><Link href="/special-explorers" className="hover:text-[#A87A2C] transition-colors">Special Explorers</Link></li>
              <li><Link href="/community-adventures" className="hover:text-[#A87A2C] transition-colors">Community Adventures</Link></li>
              <li><Link href="/meet-our-staff" className="hover:text-[#A87A2C] transition-colors">Meet Our Staff</Link></li>
              <li><Link href="/donate" className="hover:text-[#A87A2C] transition-colors">Donate</Link></li>
            </ul>
          </div>

          {/* COLUMN 3: CONTACT INFO */}
          <div>
            <h4 className="font-sans text-[14px] font-bold text-[#3A3A3A] mb-[16px]">
              Contact Us
            </h4>
            <ul className="list-none m-0 p-0 grid gap-[11px] text-[13.5px] text-[#5F5F5F]">
              <li className="flex gap-[11px] items-start">
                <svg className="w-[14px] h-[14px] text-[#C69440] shrink-0 mt-[4px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9">
                  <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.2a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z" />
                </svg>
                <span>(412) 520-8401</span>
              </li>
              <li className="flex gap-[11px] items-start">
                <svg className="w-[14px] h-[14px] text-[#C69440] shrink-0 mt-[4px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m2 7 10 6 10-6" />
                </svg>
                <span>info@jasminenyreecampus.com</span>
              </li>
              <li className="flex gap-[11px] items-start">
                <svg className="w-[14px] h-[14px] text-[#C69440] shrink-0 mt-[4px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span>3011 Landis Street<br />Pittsburgh, PA 15204</span>
              </li>
            </ul>
          </div>

          {/* COLUMN 4: STAY CONNECTED */}
          <div>
            <h4 className="font-sans text-[14px] font-bold text-[#3A3A3A] mb-[16px]">
              Stay Connected
            </h4>
            <div className="flex gap-[11px] mb-[20px]">
              <a
                href="#"
                aria-label="Facebook"
                className="w-[34px] h-[34px] rounded-full bg-[#C69440] hover:bg-[#A87A2C] text-white flex items-center justify-center transition-colors"
              >
                <svg className="w-[16px] h-[16px]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M13.5 21v-8h2.7l.4-3.1h-3.1V7.9c0-.9.25-1.5 1.55-1.5H16.7V3.6A21 21 0 0 0 14.3 3.5c-2.4 0-4 1.45-4 4.1v2.3H7.6V13h2.7v8z" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="w-[34px] h-[34px] rounded-full bg-[#C69440] hover:bg-[#A87A2C] text-white flex items-center justify-center transition-colors"
              >
                <svg className="w-[16px] h-[16px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9">
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" stroke="none" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="w-[34px] h-[34px] rounded-full bg-[#C69440] hover:bg-[#A87A2C] text-white flex items-center justify-center transition-colors"
              >
                <svg className="w-[16px] h-[16px]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6.9 8.5H4V20h2.9zM5.45 3.9a1.7 1.7 0 1 0 0 3.4 1.7 1.7 0 0 0 0-3.4zM20 13.6c0-3-1.6-4.4-3.75-4.4A3.2 3.2 0 0 0 13.4 11V8.5h-2.9V20h2.9v-6c0-1.4.6-2.2 1.8-2.2s1.9.75 1.9 2.2v6H20z" />
                </svg>
              </a>
            </div>

            <Link
              href="/donate"
              className="bg-[#C69440] hover:bg-[#A87A2C] text-white px-6 py-[13px] rounded-[3px] text-[12px] font-bold tracking-[0.12em] uppercase inline-flex items-center gap-[9px] transition-colors"
            >
              <span>Donate</span>
              <svg className="w-[14px] h-[14px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21.2l8.8-8.8a5.5 5.5 0 0 0 0-7.8z" />
              </svg>
            </Link>
          </div>
        </div>
      </footer>

      {/* COPYRIGHT BAR */}
      <div className="bg-[#2B2B2B] text-[#CFCFCF] text-center text-[12px] py-[13px] px-5">
        &copy; 2025 Jasmine Nyree Corporation. All Rights Reserved.
      </div>
    </>
  );
}
