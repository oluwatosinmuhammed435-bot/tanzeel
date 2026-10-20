import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import {
  ArrowRight,
  BookOpen,
  Award,
  HeartHandshake,
  ShieldCheck,
  MapPin,
  Phone,
  MessageCircle,
  CheckCircle2,
} from 'lucide-react';
import { HeroSection } from '../components/HeroSection';
import { SchoolCrest } from '../components/SchoolCrest';
import {
  ACADEMIC_STAGES,
  ALL_SCHOOL_CLASSES,
  buildWhatsAppEnquiryUrl,
  SCHOOL_BRAND,
  WHY_CHOOSE_US_PILLARS,
} from '../utils/schoolLogic';

const PILLAR_ICONS = [ShieldCheck, BookOpen, Award, HeartHandshake];

const STAGE_IMAGES: Record<string, { url: string; alt: string }> = {
  'early-years': {
    url: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1000&q=80',
    alt: 'Early Years KG 1 and KG 2 learning environment',
  },
  nursery: {
    url: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1000&q=80',
    alt: 'Nursery 1 and Nursery 2 classroom instruction',
  },
  primary: {
    url: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=1000&q=80',
    alt: 'Primary Basic 1 to 5 books and academic mastery',
  },
};

export const HomePage: React.FC = () => {
  return (
    <div>
      {/* HERO SECTION (Animated Full-Bleed Slider + 4-Col Proof Bar) */}
      <HeroSection />

      {/* SECTION 1 — WELCOME / INSTITUTIONAL INTRODUCTION (Emerald Schools Style) */}
      <section className="py-16 lg:py-24 bg-white border-b border-slate-200 overflow-hidden">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            {/* Left Column: Framed Editorial Photography + Crest Badge (5 Cols) */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="lg:col-span-5 relative"
            >
              <div className="relative rounded-2xl overflow-hidden border-4 border-[#0A1F44] shadow-xl aspect-[4/3]">
                <img
                  src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=85"
                  alt="Students learning in a structured classroom at At-Tanzeel Success Academy"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1F44]/60 via-transparent to-[#0A1F44]/40" />
                <div className="absolute top-4 left-4 bg-[#0A1F44]/90 backdrop-blur-sm border border-white/15 rounded-xl px-3.5 py-2 flex items-center gap-2.5 text-white shadow-md">
                  <SchoolCrest className="w-9 h-9 shrink-0" />
                  <div>
                    <span className="block text-[10px] font-display font-extrabold uppercase tracking-wider text-[#FACC15]">
                      Ibadan, Oyo State
                    </span>
                    <span className="block text-xs font-display font-bold">
                      {SCHOOL_BRAND.address}
                    </span>
                  </div>
                </div>
              </div>

              {/* Overlapping Red Accent Ribbon */}
              <div className="mt-4 sm:mt-0 sm:absolute sm:-bottom-5 sm:-right-4 bg-[#D91E2A] text-white px-5 py-3.5 rounded-xl shadow-lg border-2 border-white">
                <span className="block text-[10px] font-display font-extrabold uppercase tracking-wider text-[#FACC15]">
                  Enrolment Status
                </span>
                <span className="block font-display text-xs sm:text-sm font-extrabold uppercase tracking-wide">
                  {SCHOOL_BRAND.status}
                </span>
              </div>
            </motion.div>

            {/* Right Column: Aligned Editorial Welcome Copy (7 Cols) */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="lg:col-span-7 space-y-6"
            >
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D91E2A]/10 text-[#D91E2A] text-xs font-display font-extrabold uppercase tracking-wider mb-3">
                  <span>Welcome to Our School</span>
                </div>
                <h2 className="font-editorial text-2xl sm:text-3xl lg:text-[38px] font-bold text-[#0A1F44] tracking-tight leading-[1.18]">
                  Nurturing Future Leaders at{' '}
                  <span className="whitespace-nowrap">AT-TANZEEL</span> SUCCESS ACADEMY
                </h2>
              </div>

              <div className="space-y-4 text-base sm:text-[17px] text-slate-700 leading-[1.7] max-w-[64ch]">
                <p>
                  <strong className="text-[#0A1F44] font-semibold">
                    {SCHOOL_BRAND.name}
                  </strong>{' '}
                  is a premier private educational institution located at{' '}
                  <strong className="text-[#0A1F44] font-semibold">
                    {SCHOOL_BRAND.address}
                  </strong>
                  , dedicated to providing affordable and quality education in a safe, nurturing
                  learning environment.
                </p>
                <p>
                  Guided by experienced and passionate teachers, our school unites moral and
                  academic excellence across{' '}
                  <strong className="text-[#0A1F44]">KG 1 & KG 2</strong>,{' '}
                  <strong className="text-[#0A1F44]">Nursery 1 & Nursery 2</strong>, and{' '}
                  <strong className="text-[#0A1F44]">Basic 1 to 5</strong>—helping every child build
                  a promising future through sound learning and positive character.
                </p>
              </div>

              {/* 4 Key Highlights Grid (Equal-Height Aligned Cells) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                {WHY_CHOOSE_US_PILLARS.map((p) => (
                  <div
                    key={p.id}
                    className="flex items-center gap-2.5 px-3.5 py-3 rounded-lg bg-[#F8FAFC] border border-slate-200/90"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#D91E2A] shrink-0" />
                    <span className="text-xs font-display font-bold text-[#0A1F44] leading-snug">
                      {p.shortTitle}
                    </span>
                  </div>
                ))}
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Link
                  to="/about"
                  className="inline-flex items-center justify-center gap-2 h-11 px-6 text-xs font-display font-extrabold uppercase tracking-wider text-white bg-[#0A1F44] rounded-lg hover:bg-[#13326B] transition-colors"
                >
                  <span>Read More About Us</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/admissions"
                  className="inline-flex items-center justify-center gap-2 h-11 px-6 text-xs font-display font-extrabold uppercase tracking-wider text-[#D91E2A] bg-[#D91E2A]/10 rounded-lg hover:bg-[#D91E2A] hover:text-white transition-colors"
                >
                  <span>Enquire About Admission</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — OUR ACADEMIC STAGES & CLASSES (Perfectly Aligned 3-Column Stage Cards) */}
      <section className="py-16 lg:py-24 bg-[#F8FAFC] border-b border-slate-200">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-12 border-b border-slate-200">
            <div className="max-w-2xl">
              <span className="inline-block px-3 py-1 rounded-full bg-[#1D4ED8]/10 text-[#1D4ED8] text-xs font-display font-extrabold uppercase tracking-wider mb-3">
                Academic Stages · Into The Following Classes
              </span>
              <h2 className="font-editorial text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0A1F44] tracking-tight leading-[1.18]">
                Structured Learning From Early Years to Primary
              </h2>
            </div>

            <Link
              to="/academics"
              className="inline-flex items-center justify-center gap-2 h-11 px-5 text-xs font-display font-extrabold uppercase tracking-wider text-white bg-[#0A1F44] rounded-lg hover:bg-[#13326B] transition-colors whitespace-nowrap self-start lg:self-end"
            >
              <span>View Full Academics Page</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* 3 Equal-Height Photographic Stage Cards with Baseline-Aligned Interiors */}
          <div className="pt-12 grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {ACADEMIC_STAGES.map((stage, stageIdx) => {
              const imgData = STAGE_IMAGES[stage.id];
              const stageClasses = ALL_SCHOOL_CLASSES.filter((c) => c.stageId === stage.id);
              return (
                <motion.div
                  key={stage.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ delay: stageIdx * 0.08, duration: 0.45 }}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all flex flex-col justify-between h-full"
                >
                  <div className="flex-1 flex flex-col">
                    {/* Stage Image Header (Identical Height h-52) */}
                    <div className="relative h-52 overflow-hidden bg-[#0A1F44] shrink-0">
                      <img
                        src={imgData.url}
                        alt={imgData.alt}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0A1F44]/90 via-[#0A1F44]/30 to-transparent" />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 rounded-md bg-[#D91E2A] text-white text-[11px] font-display font-extrabold uppercase tracking-wider">
                          STAGE {stage.number}
                        </span>
                      </div>
                      <div className="absolute bottom-4 left-4 right-4 text-white">
                        <span className="block text-xs font-display font-extrabold uppercase tracking-wider text-[#FACC15]">
                          {stage.badgeText}
                        </span>
                        <h3 className="font-editorial text-2xl font-bold mt-0.5 leading-tight">
                          {stage.title}
                        </h3>
                      </div>
                    </div>

                    {/* Stage Body with Aligned Description & Classes Container */}
                    <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
                      <p className="text-sm text-slate-600 leading-relaxed lg:min-h-[4.25rem]">
                        {stage.description}
                      </p>

                      {/* Classes in this Stage (Aligned Top Divider) */}
                      <div className="pt-4 border-t border-slate-100">
                        <span className="block text-[10px] font-display font-extrabold uppercase tracking-wider text-slate-400 mb-2.5">
                          Classes Available
                        </span>
                        <div className="flex flex-wrap gap-2 lg:min-h-[4.25rem] content-start">
                          {stageClasses.map((cls) => (
                            <Link
                              key={cls.code}
                              to="/admissions"
                              className="px-3 py-1.5 rounded-lg bg-[#F8FAFC] border border-slate-200 text-xs font-display font-bold text-[#0A1F44] hover:bg-[#0A1F44] hover:text-white transition-colors"
                            >
                              {cls.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Card Footer */}
                  <div className="px-6 py-4 bg-[#F8FAFC] border-t border-slate-200 flex items-center justify-between shrink-0">
                    <span className="text-xs font-display font-bold text-slate-600">
                      Admission Open
                    </span>
                    <Link
                      to="/admissions"
                      className="inline-flex items-center gap-1.5 text-xs font-display font-extrabold uppercase tracking-wider text-[#D91E2A] hover:text-[#0A1F44] transition-colors"
                    >
                      <span>Enquire Now</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 3 — WHY CHOOSE US (The Four Real Points from the Flyer) */}
      <section className="py-16 lg:py-24 bg-[#0A1F44] text-white border-b border-slate-800">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-12 border-b border-white/15">
            <div className="max-w-2xl">
              <span className="inline-block px-3 py-1 rounded-full bg-[#FACC15]/15 text-[#FACC15] text-xs font-display font-extrabold uppercase tracking-wider mb-3">
                Why Choose Us?
              </span>
              <h2 className="font-editorial text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight leading-[1.18]">
                Four Reasons Parents Entrust Their Children to{' '}
                <span className="whitespace-nowrap">At-Tanzeel</span> Success Academy
              </h2>
            </div>

            <Link
              to="/why-choose-us"
              className="inline-flex items-center justify-center gap-2 h-11 px-5 text-xs font-display font-extrabold uppercase tracking-wider text-[#0A1F44] bg-[#FACC15] rounded-lg hover:bg-amber-300 transition-colors whitespace-nowrap self-start lg:self-end"
            >
              <span>Explore Why Choose Us</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="pt-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            {WHY_CHOOSE_US_PILLARS.map((pillar, idx) => {
              const IconComponent = PILLAR_ICONS[idx] || ShieldCheck;
              return (
                <motion.div
                  key={pillar.id}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ delay: idx * 0.08, duration: 0.45 }}
                  whileHover={{ y: -4 }}
                  className="p-7 sm:p-8 rounded-2xl bg-[#102A5C] border border-white/15 flex flex-col justify-between space-y-4 hover:border-[#FACC15]/50 transition-all h-full"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="px-3 py-1 rounded-md bg-[#D91E2A] text-white font-mono-tabular text-xs font-extrabold">
                        {pillar.number}
                      </span>
                      <div className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center text-[#FACC15]">
                        <IconComponent className="w-5 h-5" />
                      </div>
                    </div>
                    <h3 className="font-display text-lg sm:text-xl font-extrabold text-white tracking-tight leading-snug">
                      {pillar.title}
                    </h3>
                    <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
                      {pillar.elaboration}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 4 — PHOTOGRAPHIC ADMISSION CALLOUT BANNER */}
      <section className="relative py-20 lg:py-24 bg-[#06142E] text-white overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1920&q=80"
            alt="Classroom background"
            className="w-full h-full object-cover opacity-25"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(105deg, rgba(6, 20, 46, 0.96) 0%, rgba(217, 30, 42, 0.82) 100%)',
            }}
          />
        </div>

        <div className="relative z-10 max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-7 space-y-4"
            >
              <div className="inline-block px-3.5 py-1.5 rounded-md bg-[#FACC15] text-[#0A1F44] text-xs font-display font-extrabold uppercase tracking-wider">
                {SCHOOL_BRAND.status}
              </div>
              <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-[1.14]">
                What Are You Still Waiting For?
              </h2>
              <p className="text-base sm:text-xl text-white/95 leading-relaxed max-w-2xl font-medium">
                {SCHOOL_BRAND.closingCallout}
              </p>
              <p className="text-sm text-[#FACC15] font-display font-extrabold uppercase tracking-wider pt-1">
                Classes Available: KG 1 & KG 2 · Nursery 1 & Nursery 2 · Basic 1 to 5
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-5 bg-white text-[#0A1F44] rounded-2xl p-6 sm:p-8 shadow-2xl space-y-5"
            >
              <div className="text-xs font-display font-extrabold uppercase tracking-wider text-[#D91E2A]">
                For Further Enquiry
              </div>
              <div className="space-y-1.5 font-mono-tabular text-2xl sm:text-3xl font-extrabold text-[#0A1F44]">
                <div>
                  <a
                    href={`tel:${SCHOOL_BRAND.phones[0]}`}
                    className="hover:text-[#D91E2A] transition-colors"
                  >
                    {SCHOOL_BRAND.phones[0]}
                  </a>
                </div>
                <div>
                  <a
                    href={`tel:${SCHOOL_BRAND.phones[1]}`}
                    className="hover:text-[#D91E2A] transition-colors"
                  >
                    {SCHOOL_BRAND.phones[1]}
                  </a>
                </div>
              </div>
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <Link
                  to="/admissions"
                  className="inline-flex items-center justify-center gap-2 h-11 px-5 text-xs font-display font-extrabold uppercase tracking-wider text-white bg-[#D91E2A] rounded-lg hover:bg-[#B81621] transition-colors whitespace-nowrap"
                >
                  <span>ENQUIRE ABOUT ADMISSION</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href={buildWhatsAppEnquiryUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 h-11 px-4 text-xs font-display font-extrabold uppercase tracking-wider text-white bg-[#0A1F44] rounded-lg hover:bg-[#13326B] transition-colors whitespace-nowrap"
                >
                  <MessageCircle className="w-4 h-4 text-[#FACC15]" />
                  <span>WHATSAPP US</span>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 5 — LOCATION / CONTACT STRIP */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-10 rounded-2xl bg-[#F8FAFC] border border-slate-200 shadow-sm">
            <div className="lg:col-span-8 space-y-2.5">
              <div className="flex items-center gap-2 text-xs font-display font-extrabold uppercase tracking-wider text-[#D91E2A]">
                <MapPin className="w-4 h-4" />
                <span>School Location & Contact</span>
              </div>
              <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-[#0A1F44] leading-tight">
                {SCHOOL_BRAND.address}
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Contact our school directly on{' '}
                <strong className="text-[#0A1F44] font-mono-tabular">{SCHOOL_BRAND.phones[0]}</strong>{' '}
                or{' '}
                <strong className="text-[#0A1F44] font-mono-tabular">{SCHOOL_BRAND.phones[1]}</strong>{' '}
                or visit our campus at Ore-Ofe Street, Jakan, Agbowo, Ibadan.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-wrap lg:justify-end gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 h-11 px-6 text-xs font-display font-extrabold uppercase tracking-wider text-white bg-[#0A1F44] rounded-lg hover:bg-[#13326B] transition-colors whitespace-nowrap"
              >
                <span>CONTACT US</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href={`tel:${SCHOOL_BRAND.phones[0]}`}
                className="inline-flex items-center justify-center gap-2 h-11 px-5 text-xs font-display font-extrabold uppercase tracking-wider text-white bg-[#D91E2A] rounded-lg hover:bg-[#B81621] transition-colors whitespace-nowrap"
              >
                <Phone className="w-4 h-4" />
                <span>CALL NOW</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
