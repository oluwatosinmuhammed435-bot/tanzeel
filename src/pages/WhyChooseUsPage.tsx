import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import {
  ArrowRight,
  Award,
  BookOpen,
  HeartHandshake,
  Phone,
  ShieldCheck,
} from 'lucide-react';
import { SCHOOL_BRAND, WHY_CHOOSE_US_PILLARS } from '../utils/schoolLogic';

const PILLAR_ICONS = [ShieldCheck, BookOpen, Award, HeartHandshake];

export const WhyChooseUsPage: React.FC = () => {
  return (
    <div>
      {/* Photographic Inner Page Hero Banner */}
      <section className="relative bg-[#06142E] text-white py-16 lg:py-24 border-b border-slate-800 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1920&q=80"
            alt="Experienced teachers at At-Tanzeel Success Academy"
            className="w-full h-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(105deg, rgba(6, 20, 46, 0.95) 0%, rgba(10, 31, 68, 0.85) 100%)',
            }}
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="relative z-10 max-w-[1240px] mx-auto px-4 sm:px-6"
        >
          <div className="flex items-center gap-2 text-xs text-[#FACC15] font-display font-bold uppercase tracking-widest mb-3">
            <Link to="/" className="hover:underline">
              Home
            </Link>
            <span aria-hidden="true">/</span>
            <span>Why Choose Us</span>
          </div>
          <h1 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight max-w-3xl leading-[1.14]">
            Why Choose <span className="whitespace-nowrap">AT-TANZEEL</span> SUCCESS ACADEMY?
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-200 max-w-2xl leading-relaxed">
            Four clear commitments that define every child’s experience at {SCHOOL_BRAND.address}.
          </p>
        </motion.div>
      </section>

      {/* Dedicated 4 Selling Points Section */}
      <section className="py-16 lg:py-24 bg-white border-b border-slate-200">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 space-y-10">
          {WHY_CHOOSE_US_PILLARS.map((pillar, idx) => {
            const IconComponent = PILLAR_ICONS[idx] || ShieldCheck;
            return (
              <motion.article
                key={pillar.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                whileHover={{ y: -3 }}
                className="rounded-2xl border border-slate-200 bg-[#F8FAFC] p-7 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center shadow-sm hover:shadow-md transition-all"
              >
                {/* Left Index & Visual Emblem (4 Cols) */}
                <div className="lg:col-span-4 flex items-center gap-5">
                  <div className="w-16 h-16 rounded-xl bg-[#0A1F44] text-white flex items-center justify-center shrink-0">
                    <IconComponent className="w-8 h-8 text-[#FACC15]" />
                  </div>
                  <div>
                    <span className="font-mono-tabular text-2xl sm:text-3xl font-extrabold text-[#D91E2A] block">
                      {pillar.number}
                    </span>
                    <span className="text-xs font-display font-bold uppercase tracking-widest text-slate-500">
                      Core Commitment
                    </span>
                  </div>
                </div>

                {/* Right Heading & Supporting Copy (8 Cols) */}
                <div className="lg:col-span-8 space-y-3">
                  <h2 className="font-display text-xl sm:text-2xl font-extrabold text-[#0A1F44] tracking-tight">
                    {pillar.title}
                  </h2>
                  <p className="text-base font-semibold text-slate-800">
                    {pillar.summary}
                  </p>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                    {pillar.elaboration}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="py-16 bg-[#0A1F44] text-white">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div className="space-y-2 max-w-2xl">
            <span className="text-xs font-display font-bold uppercase tracking-widest text-[#FACC15]">
              {SCHOOL_BRAND.status}
            </span>
            <h2 className="font-editorial text-2xl sm:text-3xl font-bold">
              What Are You Still Waiting For?
            </h2>
            <p className="text-sm sm:text-base text-slate-200">
              {SCHOOL_BRAND.closingCallout}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 shrink-0">
            <Link
              to="/admissions"
              className="inline-flex items-center gap-2 px-6 py-3.5 text-xs sm:text-sm font-display font-bold text-white bg-[#D91E2A] rounded-lg hover:bg-[#B81621] transition-colors whitespace-nowrap"
            >
              <span>ENQUIRE NOW</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href={`tel:${SCHOOL_BRAND.phones[0]}`}
              className="inline-flex items-center gap-2 px-5 py-3.5 text-xs sm:text-sm font-mono-tabular font-bold text-[#0A1F44] bg-[#FACC15] rounded-lg hover:bg-amber-300 transition-colors whitespace-nowrap"
            >
              <Phone className="w-4 h-4" />
              <span>{SCHOOL_BRAND.phones[0]}</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
