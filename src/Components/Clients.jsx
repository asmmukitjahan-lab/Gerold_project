import { useState } from "react";
import client1 from "../assets/clientpic.png"
import client2 from "../assets/client2.png"

/**
 * Clients Feedback section
 * - Tailwind CSS only (arbitrary values used for pixel-accurate matching)
 * - Font: add Plus Jakarta Sans (or any geometric sans) in your project, e.g.
 *   <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
 *   and set className font-family below via style or tailwind.config.
 */

const QUOTE =
  "“Taylor is a professional Designer really helps my business by providing value to my business. Taylor is a professional Designer he really helps my business by providing value to my business. Taylor is a professional. Helps business providing value to my business. professional Designer he really helps my business";

const TESTIMONIALS = [
  {
    id: 1,
    name: "Brandon Fraser",
    role: "Senior Software Dev, Cosmic Sport",
    rating: 4,
    img: client2,
    quote: QUOTE,
  },
  {
    id: 2,
    name: "Tim Bailey" ,
    role: "SEO Specialist, Theme Junction" ,
    rating: 4,
    img: client1,
    quote: QUOTE,
  },
];

const Star=({ filled })=> {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-[22px] w-[22px] text-[#8b5cf6]"
      fill={filled ? "currentColor" : "none"}
      stroke="currentColor"
      strokeWidth={filled ? 0 : 1.4}
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 2.5l2.94 6.07 6.56.9-4.8 4.62 1.2 6.61L12 17.5l-5.9 3.2 1.2-6.61-4.8-4.62 6.56-.9L12 2.5z" />
    </svg>
  );
}

const TestimonialCard=({ item, active, onClick })=> {
  return (
    <article
      onClick={onClick}
      className={`min-h-[337px] shrink-0 cursor-pointer rounded-2xl border-2 bg-[#130c1d] p-6 transition-colors ${
        active ? "border-[#7a46f0]" : "border-[#2b1f4d]"
      }`}
    >
      {/* header */}
      <div className="flex items-start gap-[15px] border-b border-[#2a2438]">
        <div className="flex h-[77px] w-[77px] shrink-0 items-center justify-center rounded-full border-1 border-[#241b36] bg-[#170f24]">
          <img
            src={item.img}
            alt={item.name}
            className="h-14 w-14 rounded-full object-cover"
          />
        </div>

        <div className="flex-1 pb-[38px]">
          <h3 className="pt-[11.5px] text-[20px] font-bold font-sora leading-7 tracking-[-0.01em] text-[#FFFFFF]">
            {item.name}
          </h3>
          <p className="pt-[8px] text-[14px] leading-5 text-[#DDDDDD]">
            {item.role}
          </p>
        </div>

        <div className="flex items-center self-end pb-[30px]">
          {[...Array(5)].map((_, i) => (
            <Star key={i} filled={i < item.rating} />
          ))}
        </div>
      </div>

      {/* quote */}
      <p className="pt-[27px] text-[20px] font-sora leading-[30px] text-white/60">
        {item.quote}
      </p>
    </article>
  );
}

 const Clients =()=> {
  const [active, setActive] = useState(1);
  const total = TESTIMONIALS.length;
  const at = (offset) => (active + offset + total) % total;
  const visible = [at(-1), at(0), at(1)];

  return (
        <div
          className="relative h-[590px] overflow-hidden"
          style={{
            WebkitMaskImage:
              "linear-gradient(to bottom, transparent 0%, #000 14%, #000 84%, transparent 100%)",
            maskImage:
              "linear-gradient(to bottom, transparent 0%, #000 14%, #000 84%, transparent 100%)",
          }}
        >
          <div className="-mt-[270px] flex flex-col gap-[30px]">
            {visible.map((idx, pos) => (
              <TestimonialCard
                key={TESTIMONIALS[idx].id}
                item={TESTIMONIALS[idx]}
                active={pos === 1}
                onClick={() => setActive(idx)}
              />
            ))}
          </div>
        </div>
  );
}

export default Clients;
