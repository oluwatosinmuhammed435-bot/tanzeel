import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, Phone } from 'lucide-react';
import {
  ACADEMIC_STAGES,
  ALL_SCHOOL_CLASSES,
  SCHOOL_BRAND,
} from '../utils/schoolLogic';

export const AcademicsPage: React.FC = () => {
  return (
    <div>
      {/* Photographic Inner Page Hero Banner */}
      <section className="relative bg-[#06142E] text-white py-16 lg:py-24 border-b border-slate-800 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=1920&q=80"
            alt="Academic books and learning stages at At-Tanzeel Success Academy"
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
          <div className="flex items-center gap-2 text-xs text-[#FACC15] font-display font-bold uppercase tracking-wider mb-3">
            <Link to="/" className="hover:underline">
              Home
            </Link>
            <span aria-hidden="true">/</span>
            <span>Academics</span>
          </div>
          <h1 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight max-w-3xl leading-[1.14]">
            Academic Stages & Classes Offered
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-200 max-w-2xl leading-relaxed">
            <span className="whitespace-nowrap">AT-TANZEEL</span> SUCCESS ACADEMY offers structured
            education across Early Years (KG 1 & KG 2), Nursery (Nursery 1 & Nursery 2), and
            Primary (Basic 1 to 5).
          </p>
        </motion.div>
      </section>

      {/* Three Academic Stages */}
      <section className="py-16 lg:py-24 bg-white border-b border-slate-200">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 space-y-12">
          {ACADEMIC_STAGES.map((stage, idx) => (
            <motion.div
              key={stage.id}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              className="rounded-2xl border border-slate-200 bg-[#F8FAFC] p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start shadow-sm"
            >
              <div className="lg:col-span-6 space-y-4">
                <div className="flex items-center gap-3 text-xs font-display font-extrabold uppercase tracking-wider">
                  <span className="px-2.5 py-1 rounded bg-[#D91E2A] text-white">
                    STAGE {stage.number}
                  </span>
                  <span className="text-[#1D4ED8]">{stage.badgeText}</span>
                </div>

                <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-[#0A1F44] leading-tight">
                  {stage.title}
                </h2>

                <p className="text-base text-slate-700 leading-relaxed">
                  {stage.description}
                </p>

                <ul className="space-y-2.5 pt-2">
                  {stage.focusAreas.map((point) => (
                    <li key={point} className="flex items-start gap-2.5 text-sm text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-[#0A1F44] shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="lg:col-span-6 bg-white rounded-xl border border-slate-200 p-6 space-y-4">
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <span className="text-xs font-display font-extrabold uppercase tracking-wider text-[#0A1F44]">
                    Classes in {stage.title}
                  </span>
                  <span className="text-xs font-display font-bold text-[#D91E2A]">
                    Admission Open
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {stage.classes.map((clsName) => (
                    <div
                      key={clsName}
                      className="p-4 rounded-lg bg-[#F8FAFC] border border-slate-200 flex items-center justify-between"
                    >
                      <span className="font-display text-base font-extrabold text-[#0A1F44]">
                        {clsName}
                      </span>
                      <Link
                        to="/admissions"
                        className="text-xs font-display font-bold text-[#D91E2A] hover:underline"
                      >
                        Enquire →
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Complete 9-Class Progression Overview */}
      <section className="py-16 lg:py-24 bg-[#F8FAFC] border-b border-slate-200">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="max-w-2xl mb-10">
            <p className="text-xs font-display font-bold uppercase tracking-wider text-[#D91E2A] mb-2">
              Complete Class Directory
            </p>
            <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-[#0A1F44] leading-tight">
              All 9 Classes Open for Admission
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {ALL_SCHOOL_CLASSES.map((cls) => (
              <div
                key={cls.code}
                className="bg-white rounded-xl border border-slate-200 p-5 flex items-center justify-between hover:border-[#0A1F44] transition-colors"
              >
                <div>
                  <span className="font-display text-xs font-extrabold uppercase tracking-wider text-[#D91E2A] block">
                    {`CLASS ${cls.stepNumber} · ${(cls.stageName || cls.stageId).toUpperCase()}`}
                  </span>
                  <span className="font-display text-lg font-extrabold text-[#0A1F44] mt-0.5 block">
                    {cls.name}
                  </span>
                </div>
                <Link
                  to="/admissions"
                  className="px-3.5 py-2 rounded-lg bg-[#0A1F44] text-white text-xs font-display font-bold hover:bg-[#13326B] transition-colors"
                >
                  Enquire
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="bg-[#0A1F44] text-white rounded-2xl p-8 sm:p-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="space-y-2">
              <span className="text-xs font-display font-bold uppercase tracking-wider text-[#FACC15]">
                {SCHOOL_BRAND.status}
              </span>
              <h2 className="font-editorial text-2xl sm:text-3xl font-bold">
                Ready to Enrol in KG, Nursery, or Basic 1–5?
              </h2>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                to="/admissions"
                className="inline-flex items-center justify-center gap-2 h-11 px-6 text-xs font-display font-bold text-white bg-[#D91E2A] rounded-lg hover:bg-[#B81621] transition-colors whitespace-nowrap"
              >
                <span>GO TO ADMISSIONS</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href={`tel:${SCHOOL_BRAND.phones[0]}`}
                className="inline-flex items-center justify-center gap-2 h-11 px-5 text-xs font-mono-tabular font-bold text-[#0A1F44] bg-[#FACC15] rounded-lg hover:bg-amber-300 transition-colors whitespace-nowrap"
              >
                <Phone className="w-4 h-4" />
                <span>{SCHOOL_BRAND.phones[0]}</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
