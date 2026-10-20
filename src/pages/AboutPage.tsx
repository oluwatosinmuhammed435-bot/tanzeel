import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, MapPin, Phone } from 'lucide-react';
import { SCHOOL_BRAND } from '../utils/schoolLogic';
import { SchoolCrest } from '../components/SchoolCrest';

export const AboutPage: React.FC = () => {
  const corePhilosophy = [
    {
      number: '01',
      title: 'SAFE LEARNING',
      description:
        'We provide a safe, nurturing learning environment where children feel secure, respected, and cared for throughout the school day at our campus on Ore-Ofe Street, Jakan, Agbowo, Ibadan.',
    },
    {
      number: '02',
      title: 'MORAL DEVELOPMENT',
      description:
        'Education at At-Tanzeel Success Academy goes hand in hand with character formation. We guide pupils to practice honesty, courtesy, discipline, and sound moral values.',
    },
    {
      number: '03',
      title: 'ACADEMIC EXCELLENCE',
      description:
        'Our experienced and passionate teachers are committed to thorough classroom instruction, helping every child build strong foundations from KG 1 & KG 2 through Nursery 1 & 2 and Basic 1 to 5.',
    },
    {
      number: '04',
      title: 'QUALITY EDUCATION',
      description:
        'We are committed to delivering affordable and quality education so families in Jakan, Agbowo, and Ibadan can give their children a promising academic start.',
    },
  ];

  return (
    <div>
      {/* Photographic Inner Page Hero Banner */}
      <section className="relative bg-[#06142E] text-white py-16 lg:py-24 border-b border-slate-800 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1920&q=80"
            alt="At-Tanzeel Success Academy classroom environment"
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
            <span>About</span>
          </div>
          <h1 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight max-w-3xl leading-[1.14]">
            About <span className="whitespace-nowrap">AT-TANZEEL</span> SUCCESS ACADEMY
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-200 max-w-2xl leading-relaxed">
            Committed to safe learning, moral development, academic excellence, and affordable
            quality education at {SCHOOL_BRAND.address}.
          </p>
        </motion.div>
      </section>

      {/* Editorial Overview */}
      <section className="py-16 lg:py-24 bg-white border-b border-slate-200">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-5 space-y-6"
            >
              <div className="flex items-center gap-4">
                <SchoolCrest className="w-16 h-16 shrink-0" />
                <div>
                  <span className="text-xs font-display font-bold uppercase tracking-widest text-[#D91E2A] block">
                    Our Identity
                  </span>
                  <h2 className="font-editorial text-2xl font-bold text-[#0A1F44]">
                    <span className="whitespace-nowrap">AT-TANZEEL</span> SUCCESS ACADEMY
                  </h2>
                  <p className="text-xs font-display font-semibold text-slate-600 mt-0.5">
                    {SCHOOL_BRAND.address}
                  </p>
                </div>
              </div>

              <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
                <img
                  src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=900&q=80"
                  alt="Teacher guiding pupils in classroom"
                  className="w-full h-52 object-cover"
                />
                <div className="p-6 bg-[#F8FAFC] space-y-3">
                  <div className="text-xs font-display font-extrabold uppercase tracking-widest text-[#0A1F44]">
                    Classes Offered
                  </div>
                  <ul className="space-y-2 text-sm font-display font-bold text-slate-800">
                    <li>· KG 1 & KG 2</li>
                    <li>· Nursery 1 & Nursery 2</li>
                    <li>· Basic 1 to 5</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-7 space-y-6 text-base sm:text-lg text-slate-700 leading-relaxed"
            >
              <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-[#0A1F44]">
                Creating a Promising Future for Every Child
              </h3>
              <p>
                <strong className="text-[#0A1F44] font-semibold">
                  {SCHOOL_BRAND.name}
                </strong>{' '}
                is located at{' '}
                <strong className="text-[#0A1F44] font-semibold">
                  {SCHOOL_BRAND.address}
                </strong>
                . Our school serves families seeking a dependable, well-structured educational
                foundation across Early Years (KG 1 & KG 2), Nursery (Nursery 1 & Nursery
                2), and Primary (Basic 1 to 5) levels.
              </p>
              <p>
                We believe that every child deserves an environment where academic instruction and
                moral guidance work together. Our experienced and passionate teachers nurture each
                pupil with care, patience, and high expectations—ensuring that quality education
                remains both accessible and impactful.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Four Philosophy Pillars */}
      <section className="py-16 lg:py-24 bg-[#F8FAFC] border-b border-slate-200">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="max-w-2xl mb-12">
            <p className="text-xs font-display font-bold uppercase tracking-widest text-[#D91E2A] mb-2">
              Our Educational Philosophy
            </p>
            <h2 className="font-editorial text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0A1F44] tracking-tight leading-[1.18]">
              The Four Foundations of <span className="whitespace-nowrap">At-Tanzeel</span> Success Academy
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {corePhilosophy.map((item, idx) => (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                whileHover={{ y: -4 }}
                className="bg-white rounded-2xl border border-slate-200 p-7 sm:p-8 space-y-3 shadow-sm hover:shadow-md transition-all"
              >
                <span className="inline-block px-2.5 py-1 rounded bg-[#D91E2A]/10 font-mono-tabular text-xs font-extrabold text-[#D91E2A]">
                  {item.number}
                </span>
                <h3 className="font-display text-lg sm:text-xl font-extrabold text-[#0A1F44]">
                  {item.title}
                </h3>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom Admission Callout */}
      <section className="py-16 bg-white">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="bg-[#0A1F44] text-white rounded-2xl p-8 sm:p-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="space-y-2 max-w-xl">
              <span className="text-xs font-display font-bold uppercase tracking-widest text-[#FACC15]">
                {SCHOOL_BRAND.status}
              </span>
              <h2 className="font-editorial text-2xl sm:text-3xl font-bold">
                Enquire About Enrolling Your Child Today
              </h2>
              <p className="text-sm text-slate-300 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#FACC15] shrink-0" />
                <span>{SCHOOL_BRAND.address}</span>
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                to="/admissions"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-xs sm:text-sm font-display font-bold text-white bg-[#D91E2A] rounded-lg hover:bg-[#B81621] transition-colors whitespace-nowrap"
              >
                <span>ENQUIRE ABOUT ADMISSION</span>
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
        </div>
      </section>
    </div>
  );
};
