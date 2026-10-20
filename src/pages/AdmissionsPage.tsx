import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, MapPin, MessageCircle, Phone } from 'lucide-react';
import {
  ALL_SCHOOL_CLASSES,
  buildWhatsAppEnquiryUrl,
  SCHOOL_BRAND,
} from '../utils/schoolLogic';

export const AdmissionsPage: React.FC = () => {
  const [selectedClass, setSelectedClass] = useState<string>('KG 1');

  const customWhatsAppMessage = `Hello At-Tanzeel Success Academy, I would like to enquire about admission into ${selectedClass} at Ore-Ofe Street, Jakan, Agbowo, Ibadan.`;

  return (
    <div>
      {/* Photographic Inner Page Hero Banner */}
      <section className="relative bg-[#06142E] text-white py-16 lg:py-24 border-b border-slate-800 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1920&q=80"
            alt="Admissions at At-Tanzeel Success Academy"
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
            <span>Admissions</span>
          </div>

          <div className="inline-block px-3 py-1 rounded bg-[#D91E2A] text-white text-xs font-display font-extrabold uppercase tracking-widest mb-4">
            {SCHOOL_BRAND.status}
          </div>

          <h1
            className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight max-w-3xl"
            style={{ textWrap: 'balance' }}
          >
            Admission Into KG 1 & 2, Nursery 1 & 2, and Basic 1–5
          </h1>

          <p className="mt-4 text-base sm:text-lg text-slate-200 max-w-2xl leading-relaxed">
            {SCHOOL_BRAND.closingCallout}
          </p>
        </motion.div>
      </section>

      {/* Main Conversion Section */}
      <section className="py-16 lg:py-24 bg-white border-b border-slate-200">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Available Classes & Guidance (7 Cols) */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-7 space-y-10"
            >
              <div>
                <p className="text-xs font-display font-bold uppercase tracking-widest text-[#D91E2A] mb-2">
                  Available Classes
                </p>
                <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-[#0A1F44] mb-4">
                  Into The Following Classes
                </h2>
                <p className="text-base text-slate-700 leading-relaxed mb-6">
                  Admission is currently open across our three educational stages at{' '}
                  <strong>{SCHOOL_BRAND.address}</strong>:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="p-5 rounded-xl bg-[#F8FAFC] border border-slate-200">
                    <span className="text-xs font-display font-bold uppercase tracking-wider text-[#D91E2A] block mb-1">
                      Early Years
                    </span>
                    <div className="font-display text-lg font-extrabold text-[#0A1F44]">
                      KG 1 & KG 2
                    </div>
                  </div>

                  <div className="p-5 rounded-xl bg-[#F8FAFC] border border-slate-200">
                    <span className="text-xs font-display font-bold uppercase tracking-wider text-[#1D4ED8] block mb-1">
                      Nursery
                    </span>
                    <div className="font-display text-lg font-extrabold text-[#0A1F44]">
                      Nursery 1 & Nursery 2
                    </div>
                  </div>

                  <div className="p-5 rounded-xl bg-[#F8FAFC] border border-slate-200">
                    <span className="text-xs font-display font-bold uppercase tracking-wider text-[#0A1F44] block mb-1">
                      Primary
                    </span>
                    <div className="font-display text-lg font-extrabold text-[#0A1F44]">
                      Basic 1–5
                    </div>
                  </div>
                </div>
              </div>

              {/* Fee & Registration Guidance Note */}
              <div className="p-6 sm:p-8 rounded-xl bg-[#F8FAFC] border border-slate-200 space-y-3">
                <h3 className="font-display text-lg font-extrabold text-[#0A1F44]">
                  How to Obtain Admission & Fee Details
                </h3>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  To receive accurate information regarding current school fees, registration
                  steps, and class placement for your child, please contact the school directly by
                  phone, WhatsApp, or in person at our campus on{' '}
                  <strong>{SCHOOL_BRAND.address}</strong>.
                </p>
              </div>

              {/* Interactive Quick Class Selector for WhatsApp Enquiry */}
              <div className="pt-2 space-y-4">
                <p
                  id="class-enquiry-label"
                  className="block text-xs font-display font-bold uppercase tracking-widest text-slate-600"
                >
                  Select Class of Interest for Instant WhatsApp Enquiry:
                </p>
                <div
                  role="group"
                  aria-labelledby="class-enquiry-label"
                  className="flex flex-wrap gap-2"
                >
                  {ALL_SCHOOL_CLASSES.map((cls) => {
                    const active = selectedClass === cls.name;
                    return (
                      <button
                        key={cls.code}
                        type="button"
                        onClick={() => setSelectedClass(cls.name)}
                        className={`px-4 py-2 text-xs sm:text-sm font-display font-bold rounded-md border transition-colors cursor-pointer whitespace-nowrap ${
                          active
                            ? 'bg-[#0A1F44] text-white border-[#0A1F44]'
                            : 'bg-white text-slate-700 border-slate-300 hover:border-[#0A1F44]'
                        }`}
                      >
                        {cls.name}
                      </button>
                    );
                  })}
                </div>
              </div>
            </motion.div>

            {/* Right Column: Direct Action Panel (5 Cols) */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-5 bg-[#0A1F44] text-white rounded-2xl p-6 sm:p-8 space-y-6 shadow-xl"
            >
              <div>
                <span className="text-xs font-display font-bold uppercase tracking-widest text-[#FACC15] block">
                  Direct Admission Desk
                </span>
                <h2 className="font-editorial text-2xl font-bold mt-1">
                  Contact the School for Admission
                </h2>
              </div>

              {/* Location */}
              <div className="pt-4 border-t border-white/15 space-y-1.5">
                <div className="flex items-center gap-2 text-xs font-display font-bold uppercase tracking-wider text-[#FACC15]">
                  <MapPin className="w-4 h-4" />
                  <span>LOCATION</span>
                </div>
                <p className="text-sm sm:text-base font-medium text-white">
                  {SCHOOL_BRAND.address}
                </p>
              </div>

              {/* Phone Numbers */}
              <div className="pt-4 border-t border-white/15 space-y-2">
                <div className="flex items-center gap-2 text-xs font-display font-bold uppercase tracking-wider text-[#FACC15]">
                  <Phone className="w-4 h-4" />
                  <span>PHONE</span>
                </div>
                <div className="font-mono-tabular text-xl sm:text-2xl font-extrabold text-white space-y-1">
                  <div>
                    <a href={`tel:${SCHOOL_BRAND.phones[0]}`} className="hover:text-[#FACC15]">
                      {SCHOOL_BRAND.phones[0]}
                    </a>
                  </div>
                  <div>
                    <a href={`tel:${SCHOOL_BRAND.phones[1]}`} className="hover:text-[#FACC15]">
                      {SCHOOL_BRAND.phones[1]}
                    </a>
                  </div>
                </div>
              </div>

              {/* The 3 Action Buttons */}
              <div className="pt-4 border-t border-white/15 space-y-3">
                <a
                  href={`tel:${SCHOOL_BRAND.phones[0]}`}
                  className="w-full inline-flex items-center justify-center gap-2.5 py-3.5 px-5 text-xs sm:text-sm font-display font-bold tracking-wide text-white bg-[#D91E2A] rounded-lg hover:bg-[#B81621] transition-colors whitespace-nowrap"
                >
                  <Phone className="w-4 h-4" />
                  <span>CALL NOW ({SCHOOL_BRAND.phones[0]})</span>
                </a>

                <a
                  href={buildWhatsAppEnquiryUrl(customWhatsAppMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2.5 py-3.5 px-5 text-xs sm:text-sm font-display font-bold tracking-wide text-[#0A1F44] bg-[#FACC15] rounded-lg hover:bg-amber-300 transition-colors whitespace-nowrap"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WHATSAPP ENQUIRY ({selectedClass})</span>
                </a>

                <Link
                  to="/contact"
                  className="w-full inline-flex items-center justify-center gap-2.5 py-3.5 px-5 text-xs sm:text-sm font-display font-bold tracking-wide text-white bg-white/10 border border-white/25 rounded-lg hover:bg-white/15 transition-colors whitespace-nowrap"
                >
                  <span>ENQUIRE ABOUT ADMISSION</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};
