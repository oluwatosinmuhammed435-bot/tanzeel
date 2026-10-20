import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';
import {
  ArrowRight,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  MapPin,
  Phone,
  Sparkles,
} from 'lucide-react';
import { SCHOOL_BRAND } from '../utils/schoolLogic';
import { SchoolCrest } from './SchoolCrest';

interface HeroSlide {
  id: string;
  tag: string;
  line1: string;
  line2Gold: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
}

const HERO_SLIDES: HeroSlide[] = [
  {
    id: '01',
    tag: 'AT-TANZEEL SUCCESS ACADEMY · IBADAN',
    line1: 'A Strong Foundation in',
    line2Gold: 'Moral & Academic Excellence.',
    description:
      'Admission is currently in progress. We welcome children into KG 1 & KG 2, Nursery 1 & Nursery 2, and Basic 1 to 5 in a safe, nurturing learning environment led by experienced and passionate teachers.',
    imageUrl:
      'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1920&q=85',
    imageAlt: 'Bright, structured school learning environment with books and classroom desks',
  },
  {
    id: '02',
    tag: 'SAFE, NURTURING LEARNING ENVIRONMENT',
    line1: 'Experienced Teachers Guiding',
    line2Gold: 'Every Young Learner.',
    description:
      'Located at Ore-Ofe Street, Jakan, Agbowo, Ibadan, our classrooms combine attentive teaching, foundational literacy and numeracy, and strong moral guidance across every stage.',
    imageUrl:
      'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1920&q=85',
    imageAlt: 'Teacher guiding attentive young pupils in a bright classroom',
  },
  {
    id: '03',
    tag: 'AFFORDABLE AND QUALITY EDUCATION',
    line1: 'Your Child Is Your Future.',
    line2Gold: 'Create a Promising One Today.',
    description:
      'Enrol your child into Early Years (KG 1 & KG 2), Nursery (Nursery 1 & Nursery 2), or Primary (Basic 1 to 5) at AT-TANZEEL SUCCESS ACADEMY.',
    imageUrl:
      'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=1920&q=85',
    imageAlt: 'Academic books and structured learning foundation',
  },
];

export const HeroSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6500);
    return () => window.clearInterval(timer);
  }, []);

  const currentSlide = HERO_SLIDES[activeIndex];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  return (
    <section className="relative bg-[#06142E] text-white overflow-hidden border-b border-slate-800">
      {/* Main Hero Viewport with Full-Bleed Animated Background Image Slider */}
      <div className="relative min-h-[82vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide.id}
              initial={{ opacity: 0, scale: 1.06 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.1, ease: 'easeOut' }}
              className="absolute inset-0"
            >
              <img
                src={currentSlide.imageUrl}
                alt={currentSlide.imageAlt}
                className="w-full h-full object-cover object-center"
              />
            </motion.div>
          </AnimatePresence>

          {/* Balanced Institutional Navy Scrim */}
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(105deg, rgba(6, 20, 46, 0.92) 0%, rgba(10, 31, 68, 0.78) 50%, rgba(10, 31, 68, 0.48) 100%)',
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#06142E] via-transparent to-[#06142E]/30" />
        </div>

        {/* Foreground Content Grid (12 Columns, Vertically Centered) */}
        <div className="relative z-10 w-full max-w-[1240px] mx-auto px-4 sm:px-6 py-14 sm:py-18 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Column: Crisp Editorial Typography & Aligned Controls (7 Cols) */}
            <div className="lg:col-span-7 flex flex-col justify-center space-y-7">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide.id}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                  className="space-y-5"
                >
                  {/* Top Eyebrow Pill */}
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
                    <Sparkles className="w-3.5 h-3.5 text-[#FACC15] shrink-0" />
                    <span className="text-[11px] sm:text-xs font-display font-extrabold uppercase tracking-wider text-[#FACC15]">
                      {currentSlide.tag}
                    </span>
                  </div>

                  {/* Clean Two-Part Editorial Headline (No Clunky Underlines) */}
                  <h1
                    className="font-editorial font-bold text-white tracking-tight leading-[1.12]"
                    style={{ fontSize: 'clamp(2.25rem, 4.1vw, 3.65rem)' }}
                  >
                    <span className="block">{currentSlide.line1}</span>
                    <span className="block text-[#FACC15] mt-1">{currentSlide.line2Gold}</span>
                  </h1>

                  {/* Well-Proportioned Lead Paragraph */}
                  <p className="text-base sm:text-[17px] text-slate-200 leading-[1.7] max-w-[58ch]">
                    {currentSlide.description}
                  </p>
                </motion.div>
              </AnimatePresence>

              {/* Aligned Action Buttons + Slider Controls */}
              <div className="space-y-6 pt-1">
                <div className="flex flex-wrap items-center gap-3.5 sm:gap-4">
                  <Link
                    to="/admissions"
                    className="inline-flex items-center justify-center gap-2.5 h-12 px-6 text-xs sm:text-[13px] font-display font-extrabold uppercase tracking-wider text-white bg-[#D91E2A] rounded-lg hover:bg-[#B81621] shadow-lg transition-all whitespace-nowrap shrink-0"
                  >
                    <span>ENQUIRE ABOUT ADMISSION</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  <Link
                    to="/academics"
                    className="inline-flex items-center justify-center gap-2 h-12 px-6 text-xs sm:text-[13px] font-display font-extrabold uppercase tracking-wider text-white bg-white/10 backdrop-blur-sm border border-white/30 rounded-lg hover:bg-white hover:text-[#0A1F44] transition-all whitespace-nowrap shrink-0"
                  >
                    <span>EXPLORE OUR CLASSES</span>
                  </Link>
                </div>

                {/* Bottom Campus Info + Slide Switcher Row */}
                <div className="pt-5 border-t border-white/15 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-200">
                  <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
                    <span className="inline-flex items-center gap-1.5 font-medium">
                      <MapPin className="w-3.5 h-3.5 text-[#FACC15] shrink-0" />
                      <span>{SCHOOL_BRAND.address}</span>
                    </span>
                    <span className="inline-flex items-center gap-2 font-mono-tabular font-bold text-white">
                      <Phone className="w-3.5 h-3.5 text-[#FACC15]" />
                      <a href={`tel:${SCHOOL_BRAND.phones[0]}`} className="hover:text-[#FACC15]">
                        {SCHOOL_BRAND.phones[0]}
                      </a>
                      <span>/</span>
                      <a href={`tel:${SCHOOL_BRAND.phones[1]}`} className="hover:text-[#FACC15]">
                        {SCHOOL_BRAND.phones[1]}
                      </a>
                    </span>
                  </div>

                  {/* Slide Switcher Controls */}
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={handlePrev}
                      aria-label="Previous hero slide"
                      className="w-8 h-8 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-[#D91E2A] hover:border-[#D91E2A] transition-colors cursor-pointer"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <div className="flex items-center gap-1.5 px-2">
                      {HERO_SLIDES.map((s, idx) => (
                        <button
                          key={s.id}
                          type="button"
                          onClick={() => setActiveIndex(idx)}
                          aria-label={`Go to slide ${s.id}`}
                          className={`h-2 rounded-full transition-all cursor-pointer ${
                            idx === activeIndex
                              ? 'w-6 bg-[#FACC15]'
                              : 'w-2 bg-white/40 hover:bg-white/70'
                          }`}
                        />
                      ))}
                    </div>
                    <button
                      type="button"
                      onClick={handleNext}
                      aria-label="Next hero slide"
                      className="w-8 h-8 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-[#D91E2A] hover:border-[#D91E2A] transition-colors cursor-pointer"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Balanced Institutional Admission Card (5 Cols) */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.5, ease: 'easeOut' }}
              className="lg:col-span-5"
            >
              <div className="w-full bg-white text-[#0F172A] rounded-2xl border border-white/25 overflow-hidden shadow-2xl">
                {/* Top Navy Header */}
                <div className="bg-[#0A1F44] text-white px-6 py-4.5 border-b border-slate-800 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <SchoolCrest className="w-11 h-11 shrink-0" />
                    <div>
                      <span className="block text-[10px] font-display font-extrabold uppercase tracking-wider text-[#FACC15]">
                        {SCHOOL_BRAND.status}
                      </span>
                      <span className="block text-sm font-display font-extrabold text-white mt-0.5">
                        Into The Following Classes
                      </span>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded-md bg-[#D91E2A] text-white text-[10px] font-display font-extrabold uppercase tracking-wider shrink-0">
                    Enrol Now
                  </span>
                </div>

                {/* Three Educational Stages */}
                <div className="p-6 space-y-5">
                  <div className="space-y-2.5">
                    <Link
                      to="/academics"
                      className="flex items-center justify-between p-3.5 rounded-xl bg-[#F8FAFC] border border-slate-200 hover:border-[#0A1F44] transition-all group"
                    >
                      <div>
                        <span className="block text-[10px] font-display font-extrabold uppercase tracking-wider text-[#D91E2A]">
                          Stage 01 · Early Years
                        </span>
                        <span className="block font-display text-base font-extrabold text-[#0A1F44] mt-0.5">
                          KG 1 & KG 2
                        </span>
                      </div>
                      <span className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-[#0A1F44] group-hover:bg-[#0A1F44] group-hover:text-white transition-colors">
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    </Link>

                    <Link
                      to="/academics"
                      className="flex items-center justify-between p-3.5 rounded-xl bg-[#0A1F44] text-white hover:bg-[#13326B] transition-all group"
                    >
                      <div>
                        <span className="block text-[10px] font-display font-extrabold uppercase tracking-wider text-[#FACC15]">
                          Stage 02 · Nursery
                        </span>
                        <span className="block font-display text-base font-extrabold text-white mt-0.5">
                          Nursery 1 & Nursery 2
                        </span>
                      </div>
                      <span className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-[#FACC15] group-hover:bg-[#D91E2A] group-hover:text-white transition-colors">
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    </Link>

                    <Link
                      to="/academics"
                      className="flex items-center justify-between p-3.5 rounded-xl bg-[#F8FAFC] border border-slate-200 hover:border-[#0A1F44] transition-all group"
                    >
                      <div>
                        <span className="block text-[10px] font-display font-extrabold uppercase tracking-wider text-[#1D4ED8]">
                          Stage 03 · Primary
                        </span>
                        <span className="block font-display text-base font-extrabold text-[#0A1F44] mt-0.5">
                          Basic 1 to 5
                        </span>
                      </div>
                      <span className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-[#0A1F44] group-hover:bg-[#0A1F44] group-hover:text-white transition-colors">
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    </Link>
                  </div>

                  {/* Why Choose Us Checklist */}
                  <div className="pt-4 border-t border-slate-200 space-y-2.5">
                    <div className="text-[11px] font-display font-extrabold uppercase tracking-wider text-[#0A1F44]">
                      Why Choose At-Tanzeel Success Academy?
                    </div>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-medium text-slate-700">
                      <li className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#D91E2A] shrink-0 mt-0.5" />
                        <span>Safe, nurturing environment</span>
                      </li>
                      <li className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#D91E2A] shrink-0 mt-0.5" />
                        <span>Experienced teachers</span>
                      </li>
                      <li className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#D91E2A] shrink-0 mt-0.5" />
                        <span>Moral & academic excellence</span>
                      </li>
                      <li className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#D91E2A] shrink-0 mt-0.5" />
                        <span>Affordable quality education</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Emerald-Style Bottom Institutional Proof Bar (4 Symmetrical Columns) */}
      <div className="relative z-10 bg-[#0A1F44] border-t border-white/15">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 py-5 grid grid-cols-2 lg:grid-cols-4 gap-6 lg:divide-x lg:divide-white/15">
          <div className="lg:pr-4">
            <span className="block text-[10px] font-display font-extrabold uppercase tracking-wider text-[#FACC15]">
              01 · Early Years Stage
            </span>
            <span className="block font-display text-sm sm:text-base font-extrabold text-white mt-0.5">
              KG 1 & KG 2
            </span>
          </div>

          <div className="lg:px-6">
            <span className="block text-[10px] font-display font-extrabold uppercase tracking-wider text-[#FACC15]">
              02 · Nursery Stage
            </span>
            <span className="block font-display text-sm sm:text-base font-extrabold text-white mt-0.5">
              Nursery 1 & Nursery 2
            </span>
          </div>

          <div className="lg:px-6">
            <span className="block text-[10px] font-display font-extrabold uppercase tracking-wider text-[#FACC15]">
              03 · Primary Stage
            </span>
            <span className="block font-display text-sm sm:text-base font-extrabold text-white mt-0.5">
              Basic 1 to 5
            </span>
          </div>

          <div className="lg:pl-6">
            <span className="block text-[10px] font-display font-extrabold uppercase tracking-wider text-[#FACC15]">
              04 · Direct Admission Line
            </span>
            <span className="block font-mono-tabular text-sm sm:text-base font-extrabold text-white mt-0.5">
              {SCHOOL_BRAND.phones[0]}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
