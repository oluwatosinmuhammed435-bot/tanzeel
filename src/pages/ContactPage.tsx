import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { CheckCircle2, MapPin, MessageCircle, Phone } from 'lucide-react';
import {
  buildWhatsAppEnquiryUrl,
  ContactFormInput,
  SCHOOL_BRAND,
  validateContactForm,
} from '../utils/schoolLogic';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormInput>({
    fullName: '',
    phoneNumber: '',
    emailAddress: '',
    message: '',
  });
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormInput, string>>>({});
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validation = validateContactForm(formData);
    if (!validation.valid) {
      setErrors(validation.errors);
      return;
    }
    setErrors({});
    setSubmitted(true);
  };

  return (
    <div>
      {/* Photographic Inner Page Hero Banner */}
      <section className="relative bg-[#06142E] text-white py-16 lg:py-24 border-b border-slate-800 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1920&q=80"
            alt="Contact At-Tanzeel Success Academy"
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
            <span>Contact</span>
          </div>
          <h1
            className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight max-w-3xl"
            style={{ textWrap: 'balance' }}
          >
            Contact {SCHOOL_BRAND.name}
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-200 max-w-2xl leading-relaxed">
            Reach out to our school for admission enquiries into KG 1 & KG 2, Nursery 1 &
            Nursery 2, and Basic 1 to 5.
          </p>
        </motion.div>
      </section>

      {/* Contact Details + Enquiry Form */}
      <section className="py-16 lg:py-24 bg-white border-b border-slate-200">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Address, Phone Numbers, Call & WhatsApp (5 Cols) */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-5 space-y-8"
            >
              <div className="p-7 rounded-2xl bg-[#0A1F44] text-white space-y-6 shadow-xl">
                <div>
                  <span className="text-xs font-display font-bold uppercase tracking-widest text-[#FACC15] block">
                    School Address & Telephone
                  </span>
                  <h2 className="font-editorial text-2xl font-bold mt-1">
                    {SCHOOL_BRAND.name}
                  </h2>
                </div>

                {/* Address */}
                <div className="pt-4 border-t border-white/15 space-y-1">
                  <div className="flex items-center gap-2 text-xs font-display font-bold uppercase tracking-wider text-[#FACC15]">
                    <MapPin className="w-4 h-4" />
                    <span>Address</span>
                  </div>
                  <div className="text-sm sm:text-base text-slate-100 leading-relaxed pl-6">
                    {SCHOOL_BRAND.addressLines.map((line) => (
                      <div key={line}>{line}</div>
                    ))}
                  </div>
                </div>

                {/* Phone Numbers */}
                <div className="pt-4 border-t border-white/15 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-display font-bold uppercase tracking-wider text-[#FACC15]">
                    <Phone className="w-4 h-4" />
                    <span>Telephone</span>
                  </div>
                  <div className="pl-6 font-mono-tabular text-xl font-extrabold text-white space-y-1">
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

                {/* Direct Action Buttons: CALL US & WHATSAPP US */}
                <div className="pt-4 border-t border-white/15 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <a
                    href={`tel:${SCHOOL_BRAND.phones[0]}`}
                    className="inline-flex items-center justify-center gap-2 py-3 px-4 text-xs font-display font-bold tracking-wide text-white bg-[#D91E2A] rounded-lg hover:bg-[#B81621] transition-colors whitespace-nowrap"
                  >
                    <Phone className="w-4 h-4" />
                    <span>CALL US</span>
                  </a>

                  <a
                    href={buildWhatsAppEnquiryUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 py-3 px-4 text-xs font-display font-bold tracking-wide text-[#0A1F44] bg-[#FACC15] rounded-lg hover:bg-amber-300 transition-colors whitespace-nowrap"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>WHATSAPP US</span>
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Right Column: Contact Form (7 Cols) */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-7 bg-[#F8FAFC] rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-sm"
            >
              {submitted ? (
                <div data-testid="contact-confirmation" className="space-y-5 py-4">
                  <div className="flex items-center gap-3 text-[#15803D]">
                    <CheckCircle2 className="w-6 h-6 shrink-0" />
                    <h2 className="font-editorial text-2xl font-bold text-[#0A1F44]">
                      Enquiry Prepared
                    </h2>
                  </div>
                  <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                    Thank you, <strong>{formData.fullName}</strong>. Your enquiry has been recorded.
                    For immediate response from our school administration, you may also call{' '}
                    <strong className="font-mono-tabular">{SCHOOL_BRAND.phones[0]}</strong> /{' '}
                    <strong className="font-mono-tabular">{SCHOOL_BRAND.phones[1]}</strong> or send
                    your message directly via WhatsApp below:
                  </p>
                  <div className="flex flex-wrap items-center gap-3 pt-2">
                    <a
                      href={buildWhatsAppEnquiryUrl(
                        `Name: ${formData.fullName}\nPhone: ${formData.phoneNumber}\nEmail: ${formData.emailAddress}\nEnquiry: ${formData.message}`
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-3 text-xs sm:text-sm font-display font-bold text-white bg-[#0A1F44] rounded-lg hover:bg-[#13326B] transition-colors"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Continue on WhatsApp</span>
                    </a>
                    <button
                      type="button"
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          fullName: '',
                          phoneNumber: '',
                          emailAddress: '',
                          message: '',
                        });
                      }}
                      className="px-4 py-3 text-xs sm:text-sm font-display font-bold text-slate-700 bg-white border border-slate-300 rounded-lg hover:bg-slate-100 cursor-pointer"
                    >
                      Send Another Enquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-6">
                  <div>
                    <span className="text-xs font-display font-bold uppercase tracking-widest text-[#D91E2A] block">
                      Enquiry Form
                    </span>
                    <h2 className="font-editorial text-2xl font-bold text-[#0A1F44] mt-1">
                      Send an Enquiry to the School
                    </h2>
                  </div>

                  <div>
                    <label
                      htmlFor="fullName"
                      className="block text-xs font-display font-bold uppercase tracking-wider text-slate-700 mb-2"
                    >
                      Full Name *
                    </label>
                    <input
                      id="fullName"
                      type="text"
                      value={formData.fullName}
                      onChange={(e) =>
                        setFormData((prev) => ({ ...prev, fullName: e.target.value }))
                      }
                      placeholder="Enter your full name"
                      className="w-full px-4 py-3 text-sm bg-white border border-slate-300 rounded-lg text-slate-900 focus:outline-none focus:border-[#0A1F44]"
                    />
                    {errors.fullName && (
                      <p role="alert" className="mt-1.5 text-xs font-medium text-[#D91E2A]">
                        {errors.fullName}
                      </p>
                    )}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="phoneNumber"
                        className="block text-xs font-display font-bold uppercase tracking-wider text-slate-700 mb-2"
                      >
                        Phone Number *
                      </label>
                      <input
                        id="phoneNumber"
                        type="tel"
                        value={formData.phoneNumber}
                        onChange={(e) =>
                          setFormData((prev) => ({ ...prev, phoneNumber: e.target.value }))
                        }
                        placeholder="e.g. 08060053097"
                        className="w-full px-4 py-3 text-sm bg-white border border-slate-300 rounded-lg text-slate-900 font-mono-tabular focus:outline-none focus:border-[#0A1F44]"
                      />
                      {errors.phoneNumber && (
                        <p role="alert" className="mt-1.5 text-xs font-medium text-[#D91E2A]">
                          {errors.phoneNumber}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="emailAddress"
                        className="block text-xs font-display font-bold uppercase tracking-wider text-slate-700 mb-2"
                      >
                        Email Address *
                      </label>
                      <input
                        id="emailAddress"
                        type="email"
                        value={formData.emailAddress}
                        onChange={(e) =>
                          setFormData((prev) => ({ ...prev, emailAddress: e.target.value }))
                        }
                        placeholder="Enter your email address"
                        className="w-full px-4 py-3 text-sm bg-white border border-slate-300 rounded-lg text-slate-900 focus:outline-none focus:border-[#0A1F44]"
                      />
                      {errors.emailAddress && (
                        <p role="alert" className="mt-1.5 text-xs font-medium text-[#D91E2A]">
                          {errors.emailAddress}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-xs font-display font-bold uppercase tracking-wider text-slate-700 mb-2"
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData((prev) => ({ ...prev, message: e.target.value }))
                      }
                      placeholder="Write your admission or school enquiry..."
                      className="w-full px-4 py-3 text-sm bg-white border border-slate-300 rounded-lg text-slate-900 focus:outline-none focus:border-[#0A1F44]"
                    />
                    {errors.message && (
                      <p role="alert" className="mt-1.5 text-xs font-medium text-[#D91E2A]">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="px-7 py-3.5 text-xs sm:text-sm font-display font-bold tracking-wide text-white bg-[#D91E2A] rounded-lg hover:bg-[#B81621] transition-colors cursor-pointer"
                  >
                    SEND ENQUIRY
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Polished Location Section */}
      <section className="py-16 bg-[#F8FAFC]">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="rounded-2xl border border-slate-200 bg-white overflow-hidden grid grid-cols-1 lg:grid-cols-12 shadow-sm">
            <div className="lg:col-span-5 p-7 sm:p-10 flex flex-col justify-between space-y-6">
              <div className="space-y-3">
                <span className="text-xs font-display font-bold uppercase tracking-widest text-[#D91E2A] block">
                  Campus Location
                </span>
                <h2 className="font-editorial text-2xl font-bold text-[#0A1F44]">
                  Visit {SCHOOL_BRAND.name}
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  <strong>Address:</strong> {SCHOOL_BRAND.address}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200 text-xs text-slate-500">
                Direct Telephone: {SCHOOL_BRAND.phones[0]} · {SCHOOL_BRAND.phones[1]}
              </div>
            </div>

            {/* Map Container Frame */}
            <div
              data-testid="campus-map-container"
              className="lg:col-span-7 min-h-[260px] bg-[#0A1F44] text-white p-8 flex flex-col items-center justify-center text-center border-t lg:border-t-0 lg:border-l border-slate-200"
            >
              <MapPin className="w-10 h-10 text-[#FACC15] mb-3" />
              <div className="font-display text-lg font-extrabold text-white">
                {SCHOOL_BRAND.name}
              </div>
              <p className="text-sm text-slate-300 mt-1">
                {SCHOOL_BRAND.fullAddress}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
