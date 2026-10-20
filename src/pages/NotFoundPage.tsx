import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, Home, Phone, HelpCircle } from 'lucide-react';
import { SCHOOL_BRAND } from '../utils/schoolLogic';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="py-20 lg:py-32 flex items-center justify-center">
      <div className="max-w-[720px] mx-auto px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.35 }}
          className="space-y-6"
        >
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[#0A1F44] text-[#FACC15] shadow-lg mb-2">
            <HelpCircle className="w-10 h-10" />
          </div>

          <div className="space-y-2">
            <span className="text-xs font-display font-extrabold uppercase tracking-widest text-[#D91E2A]">
              Page Not Found · 404
            </span>
            <h1 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0A1F44]">
              Looking for Something at At-Tanzeel?
            </h1>
            <p className="text-base sm:text-lg text-slate-600 max-w-lg mx-auto leading-relaxed pt-2">
              The page you are looking for might have been moved or does not exist. Explore our school
              information or contact our admissions desk.
            </p>
          </div>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-6 py-3.5 text-xs sm:text-sm font-display font-bold uppercase tracking-wider text-white bg-[#0A1F44] rounded-lg hover:bg-[#13326B] transition-colors shadow-sm"
            >
              <Home className="w-4 h-4" />
              <span>Return Home</span>
            </Link>

            <Link
              to="/admissions"
              className="inline-flex items-center gap-2 px-6 py-3.5 text-xs sm:text-sm font-display font-bold uppercase tracking-wider text-white bg-[#D91E2A] rounded-lg hover:bg-[#B81621] transition-colors shadow-sm"
            >
              <span>Admissions Desk</span>
            </Link>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 text-xs sm:text-sm font-display font-bold uppercase tracking-wider text-[#0A1F44] bg-white border border-slate-300 rounded-lg hover:bg-slate-50 transition-colors shadow-sm"
            >
              <Phone className="w-4 h-4 text-[#D91E2A]" />
              <span>Contact Us</span>
            </Link>
          </div>

          <div className="pt-8 text-xs text-slate-500 border-t border-slate-200 mt-8">
            <p>{SCHOOL_BRAND.name} · {SCHOOL_BRAND.address}</p>
            <p className="font-mono-tabular mt-1">Direct Lines: {SCHOOL_BRAND.phones[0]} · {SCHOOL_BRAND.phones[1]}</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
