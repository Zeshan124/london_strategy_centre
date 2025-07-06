import Image from "next/image";
import React from "react";

const PerfectFit = () => {
  return (
    <section className=" bg-[#F5F4F2] py-8 sm:py-12 lg:py-16">
      {/* container  ––  max‑width + horizontal padding */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-0">
        {/* layout  ––  desktop: 2‑col grid, mobile: stacked */}
        <div
          className="
            grid grid-cols-1 gap-10
            place-items-center        /* <768px: centre row+col */
            lg:grid-cols-2 lg:gap-8
            lg:place-items-start      /* ≥1024px: left‑align again */
          "
        >
          {/* ---------- LEFT : Text ---------- */}
          <div className="space-y-5 lg:pt-10">
            <h3 className="text-[#c2272d] text-md lg:text-lg sm:text-sm font-semibold uppercase tracking-wider">
              Who Should Attend
            </h3>

            <h1 className="text-[#002060] text-3xl sm:text-4xl lg:text-6xl font-bold leading-snug">
              You are a Perfect Fit
            </h1>

            <p className="text-gray-700 leading-relaxed lg:text-xl text-sm">
              Participants include outstanding executive women who are:
            </p>

            <ul className="space-y-3">
              {[
                "In leadership roles seeking to understand the digital impact.",
                "Driving organisational transformation at mid‑to‑senior levels.",
                "Entrepreneurs aiming to scale through digital strategy.",
                "Working in technology, innovation, or transformation roles.",
                "Leading HR and talent development for inclusive digital workplaces.",
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <Image
                    src="/images/bullet-point.png"
                    alt=""
                    width={16}
                    height={16}
                    className="mt-[3px] w-4 h-4 shrink-0"
                  />
                  <span className="text-gray-800 text-sm sm:text-base lg:text-xl leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* ---------- RIGHT : Image grid ---------- */}
          {/* a single large image now, but you can easily swap with a mini‑grid if needed */}
          <div className="flex justify-center lg:justify-end">
            <Image
              src="/images/Who-Should-Attend.png"
              alt="Who Should Attend"
              width={800}
              height={600}
              priority
              className="
                w-full              /* full width on small screens */
                max-w-md            /* tablets */
                md:max-w-lg
                lg:max-w-[100%]      /* desktop – keeps some white space */
                h-auto rounded-md object-cover
              "
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PerfectFit;
