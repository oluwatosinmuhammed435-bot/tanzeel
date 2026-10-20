import React from 'react';
import { Link } from 'react-router-dom';
import { SCHOOL_BRAND } from '../utils/schoolLogic';
import { SchoolCrest } from './SchoolCrest';

export const Footer: React.FC = () => {
  const quickLinks = [
    { label: 'Home', to: '/' },
    { label: 'About', to: '/about' },
    { label: 'Academics', to: '/academics' },
    { label: 'Admissions', to: '/admissions' },
    { label: 'Why Choose Us', to: '/why-choose-us' },
    { label: 'Contact', to: '/contact' },
  ];

  return (
    <footer className="bg-[#071633] text-slate-300 border-t border-slate-800">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Col 1: School Identity & Address (5 Cols) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3.5">
              <SchoolCrest className="w-14 h-14 shrink-0" />
              <div>
                <div className="font-display text-lg font-extrabold text-white tracking-tight">
                  {SCHOOL_BRAND.name}
                </div>
                <div className="text-xs font-display text-[#FACC15] font-semibold uppercase tracking-wider mt-0.5">
                  {SCHOOL_BRAND.address}
                </div>
              </div>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed max-w-sm">
              Safe, nurturing learning environment with experienced and passionate teachers. Moral
              and academic excellence through affordable and quality education in Ibadan.
            </p>

            <div className="pt-1 font-mono-tabular text-sm font-bold text-white space-x-4">
              <a href={`tel:${SCHOOL_BRAND.phones[0]}`} className="hover:text-[#FACC15] transition-colors">
                {SCHOOL_BRAND.phones[0]}
              </a>
              <span aria-hidden="true" className="text-slate-500">·</span>
              <a href={`tel:${SCHOOL_BRAND.phones[1]}`} className="hover:text-[#FACC15] transition-colors">
                {SCHOOL_BRAND.phones[1]}
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links (3 Cols) */}
          <div className="md:col-span-3 space-y-2.5 text-sm">
            <div className="text-xs uppercase tracking-widest font-display font-bold text-white mb-3">
              Quick Links
            </div>
            <ul className="space-y-2">
              {quickLinks.map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className="text-slate-300 hover:text-white transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Admission Status & CTA (4 Cols) */}
          <div className="md:col-span-4 space-y-4">
            <div className="text-xs uppercase tracking-widest font-display font-bold text-[#FACC15]">
              Admissions Desk
            </div>
            <p className="text-base font-editorial font-bold text-white">
              Admission is in progress.
            </p>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Enrolling pupils into KG 1 & KG 2, Nursery 1 & Nursery 2, and Basic 1 to 5 at
              Ore-Ofe Street, Jakan, Agbowo, Ibadan.
            </p>
            <div className="pt-1">
              <Link
                to="/admissions"
                className="inline-flex items-center justify-center px-6 py-3 text-xs sm:text-sm font-display font-bold tracking-wide text-white bg-[#D91E2A] rounded-md hover:bg-[#B81621] transition-colors whitespace-nowrap"
              >
                ENQUIRE NOW
              </Link>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {new Date().getFullYear()} {SCHOOL_BRAND.name}. All rights reserved.
          </div>
          <div>{SCHOOL_BRAND.address}</div>
        </div>
      </div>
    </footer>
  );
};
