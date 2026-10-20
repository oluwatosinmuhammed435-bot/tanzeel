import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';
import {
  ArrowRight,
  ChevronDown,
  ChevronRight,
  MapPin,
  Menu,
  Phone,
  Sparkles,
  X,
} from 'lucide-react';
import { SCHOOL_BRAND } from '../utils/schoolLogic';
import { SchoolCrest } from './SchoolCrest';

interface DropdownItem {
  label: string;
  desc: string;
  to: string;
}

interface NavItem {
  index: string;
  label: string;
  to: string;
  dropdown?: DropdownItem[];
}

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    setMobileMenuOpen(false);
    setOpenDropdown(null);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 16);
      setOpenDropdown(null);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks: NavItem[] = [
    { index: '01', label: 'Home', to: '/' },
    {
      index: '02',
      label: 'About',
      to: '/about',
      dropdown: [
        {
          label: 'Welcome & School Identity',
          desc: 'Our mission at Ore-Ofe Street, Jakan, Agbowo, Ibadan',
          to: '/about',
        },
        {
          label: 'Our Four Core Pillars',
          desc: 'Safe learning, moral development, academic & quality education',
          to: '/about',
        },
        {
          label: 'Why Choose Us',
          desc: 'Four commitments to every child and family',
          to: '/why-choose-us',
        },
      ],
    },
    {
      index: '03',
      label: 'Academics',
      to: '/academics',
      dropdown: [
        {
          label: 'Early Years (KG 1 & KG 2)',
          desc: 'Foundational literacy, numeracy & joyful discovery',
          to: '/academics',
        },
        {
          label: 'Nursery (Nursery 1 & Nursery 2)',
          desc: 'Confidence, early reading, writing & moral habits',
          to: '/academics',
        },
        {
          label: 'Primary (Basic 1 to 5)',
          desc: 'Comprehensive primary mastery & character leadership',
          to: '/academics',
        },
      ],
    },
    {
      index: '04',
      label: 'Admissions',
      to: '/admissions',
      dropdown: [
        {
          label: 'Admission Is In Progress',
          desc: 'Enrol into KG 1 & 2, Nursery 1 & 2, and Basic 1 to 5',
          to: '/admissions',
        },
        {
          label: 'Available Classes & Stages',
          desc: 'Explore Early Years, Nursery, and Primary placement',
          to: '/admissions',
        },
        {
          label: 'Direct Admission Enquiry',
          desc: 'Reach our admission desk by phone or WhatsApp',
          to: '/contact',
        },
      ],
    },
    { index: '05', label: 'Why Choose Us', to: '/why-choose-us' },
    { index: '06', label: 'Contact', to: '/contact' },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-[0_8px_30px_rgba(10,31,68,0.08)]'
          : 'bg-white shadow-[0_1px_3px_rgba(10,31,68,0.05)]'
      }`}
    >
      {/* Emerald-Style Top Institutional Utility Ribbon */}
      <div className="bg-[#06142E] text-slate-200 border-b border-white/10">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 h-9 flex items-center justify-between gap-4 text-[11px] sm:text-xs">
          {/* Left: Live Admission Status + Classes */}
          <div className="flex items-center gap-2 min-w-0">
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FACC15] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FACC15]" />
            </span>
            <span className="font-display font-bold text-[#FACC15] uppercase tracking-wider truncate">
              Admission Is In Progress
            </span>
            <span aria-hidden="true" className="hidden md:inline text-slate-500">
              |
            </span>
            <span className="hidden md:inline text-slate-200 truncate font-medium">
              KG 1 & KG 2 · Nursery 1 & 2 · Basic 1 to 5
            </span>
          </div>

          {/* Right: Campus Location & Direct Phones */}
          <div className="flex items-center gap-3 sm:gap-5 font-mono-tabular shrink-0">
            <span className="hidden lg:inline-flex items-center gap-1.5 text-slate-300 font-sans">
              <MapPin className="w-3.5 h-3.5 text-[#D91E2A]" />
              <span>{SCHOOL_BRAND.address}</span>
            </span>
            <span aria-hidden="true" className="hidden lg:inline text-slate-600">
              |
            </span>
            <a
              href={`tel:${SCHOOL_BRAND.phones[0]}`}
              className="inline-flex items-center gap-1.5 text-[#FACC15] font-bold hover:text-white transition-colors"
            >
              <Phone className="w-3 h-3 shrink-0" />
              <span>{SCHOOL_BRAND.phones[0]}</span>
            </a>
            <a
              href={`tel:${SCHOOL_BRAND.phones[1]}`}
              className="hidden sm:inline-flex items-center gap-1.5 text-white font-bold hover:text-[#FACC15] transition-colors"
            >
              <span>{SCHOOL_BRAND.phones[1]}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Row */}
      <div className="border-b border-slate-200/90">
        <div className="max-w-[1240px] mx-auto flex items-center justify-between gap-4 px-4 sm:px-6 h-[68px] sm:h-[78px]">
          {/* Zone 1: Crest + Crisp Aligned Two-Line Brand Lockup */}
          <Link
            to="/"
            className="flex items-center gap-3 group shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0A1F44]"
          >
            <SchoolCrest className="w-10 h-10 sm:w-12 sm:h-12 shrink-0 transition-transform duration-300 group-hover:scale-105" />
            <div className="flex flex-col justify-center">
              <span className="font-display text-[15px] sm:text-[18px] font-extrabold tracking-[-0.01em] text-[#0A1F44] leading-tight group-hover:text-[#1D4ED8] transition-colors whitespace-nowrap">
                AT-TANZEEL
              </span>
              <span className="font-display text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.06em] text-[#D91E2A] leading-tight mt-0.5 whitespace-nowrap">
                Success Academy · Ibadan
              </span>
            </div>
          </Link>

          {/* Zone 2: Desktop Navigation Links with Dropdowns & Motion Indicator */}
          <nav
            aria-label="Primary Navigation"
            className="hidden lg:flex items-center gap-1 xl:gap-2 font-display"
          >
            {navLinks.map((link) => {
              const hasDropdown = Boolean(link.dropdown);
              return (
                <div
                  key={link.to}
                  className="relative"
                  onMouseEnter={() => hasDropdown && setOpenDropdown(link.label)}
                  onMouseLeave={() => hasDropdown && setOpenDropdown(null)}
                >
                  <NavLink
                    to={link.to}
                    end={link.to === '/'}
                    className={({ isActive }) =>
                      `relative inline-flex items-center gap-1 px-3.5 py-2.5 text-[13.5px] font-bold tracking-normal rounded-lg transition-colors whitespace-nowrap ${
                        isActive
                          ? 'text-[#0A1F44]'
                          : 'text-slate-700 hover:text-[#0A1F44] hover:bg-slate-100/70'
                      }`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        <span>{link.label}</span>
                        {hasDropdown && (
                          <ChevronDown
                            className={`w-3.5 h-3.5 transition-transform duration-200 ${
                              openDropdown === link.label
                                ? 'rotate-180 text-[#D91E2A]'
                                : 'text-slate-400'
                            }`}
                          />
                        )}
                        {isActive && (
                          <motion.span
                            layoutId="activeDesktopNavIndicator"
                            className="absolute bottom-0.5 left-3.5 right-3.5 h-[3px] rounded-full bg-[#D91E2A]"
                            transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                          />
                        )}
                      </>
                    )}
                  </NavLink>

                  {/* Animated Dropdown Panel */}
                  <AnimatePresence>
                    {hasDropdown && openDropdown === link.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 6 }}
                        transition={{ duration: 0.16, ease: 'easeOut' }}
                        className="absolute left-0 top-full pt-2 w-72 z-50"
                      >
                        <div className="bg-white rounded-xl border border-slate-200 shadow-xl overflow-hidden p-2 space-y-1">
                          <div className="px-3 py-1.5 text-[10px] font-display font-extrabold uppercase tracking-wider text-[#D91E2A] border-b border-slate-100">
                            {link.label} Directory
                          </div>
                          {link.dropdown?.map((subItem) => (
                            <Link
                              key={subItem.label}
                              to={subItem.to}
                              onClick={() => setOpenDropdown(null)}
                              className="block px-3 py-2.5 rounded-lg hover:bg-[#F8FAFC] transition-colors group"
                            >
                              <div className="flex items-center justify-between text-xs font-display font-bold text-[#0A1F44] group-hover:text-[#D91E2A]">
                                <span>{subItem.label}</span>
                                <ChevronRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#D91E2A] group-hover:translate-x-0.5 transition-transform" />
                              </div>
                              <p className="text-[11px] font-sans text-slate-500 mt-0.5 leading-snug">
                                {subItem.desc}
                              </p>
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </nav>

          {/* Zone 3: Desktop Apply CTA + Mobile Drawer Trigger */}
          <div className="flex items-center gap-2.5 shrink-0">
            <button
              type="button"
              onClick={() => navigate('/admissions')}
              className="hidden sm:inline-flex items-center justify-center gap-2 h-10 px-5 text-xs font-extrabold font-display uppercase tracking-wider text-white bg-[#D91E2A] rounded-lg hover:bg-[#B81621] shadow-sm hover:shadow transition-all whitespace-nowrap shrink-0 cursor-pointer"
            >
              <span>APPLY / ENQUIRE</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              className={`lg:hidden inline-flex items-center justify-center gap-2 h-10 px-3.5 rounded-lg font-display text-xs font-extrabold uppercase tracking-wider transition-all cursor-pointer ${
                mobileMenuOpen
                  ? 'bg-[#D91E2A] text-white shadow-sm'
                  : 'bg-[#0A1F44] text-white hover:bg-[#13326B]'
              }`}
            >
              <span>{mobileMenuOpen ? 'Close' : 'Menu'}</span>
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </div>

      {/* Animated Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.nav
            key="mobile-drawer"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.24, ease: 'easeInOut' }}
            aria-label="Mobile Navigation"
            className="lg:hidden border-b-2 border-[#0A1F44] bg-white shadow-2xl overflow-hidden"
          >
            {/* Campus Context Strip inside Mobile Menu */}
            <div className="bg-[#0A1F44] text-white px-4 py-3 flex items-center justify-between gap-2 text-xs">
              <span className="inline-flex items-center gap-1.5 font-medium text-slate-200">
                <MapPin className="w-3.5 h-3.5 text-[#FACC15] shrink-0" />
                <span>{SCHOOL_BRAND.address}</span>
              </span>
              <span className="inline-flex items-center gap-1 font-display font-extrabold text-[10px] uppercase tracking-wider px-2 py-0.5 rounded bg-[#D91E2A] text-white shrink-0">
                <Sparkles className="w-2.5 h-2.5 text-[#FACC15]" />
                <span>Admission Open</span>
              </span>
            </div>

            {/* Structured Page Links */}
            <div className="px-4 py-3 divide-y divide-slate-100">
              {navLinks.map((link, idx) => (
                <motion.div
                  key={link.to}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.03 }}
                >
                  <NavLink
                    to={link.to}
                    end={link.to === '/'}
                    onClick={() => setMobileMenuOpen(false)}
                    className={({ isActive }) =>
                      `flex items-center justify-between py-3.5 px-3.5 text-sm font-bold font-display rounded-lg transition-colors ${
                        isActive
                          ? 'bg-[#0A1F44] text-white'
                          : 'text-[#0A1F44] hover:bg-slate-50'
                      }`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        <div className="flex items-center gap-3">
                          <span
                            className={`font-mono-tabular text-xs font-extrabold ${
                              isActive ? 'text-[#FACC15]' : 'text-[#D91E2A]'
                            }`}
                          >
                            {link.index}
                          </span>
                          <span>{link.label}</span>
                        </div>
                        <ChevronRight
                          className={`w-4 h-4 ${isActive ? 'text-[#FACC15]' : 'text-slate-400'}`}
                        />
                      </>
                    )}
                  </NavLink>
                </motion.div>
              ))}
            </div>

            {/* Quick Academic Stage Pills inside Mobile Drawer */}
            <div className="px-4 pb-3">
              <div className="p-3 rounded-lg bg-[#F8FAFC] border border-slate-200">
                <span className="block text-[10px] font-display font-extrabold uppercase tracking-wider text-slate-500 mb-2">
                  Classes Open for Admission
                </span>
                <div className="grid grid-cols-3 gap-2 text-center">
                  <Link
                    to="/academics"
                    onClick={() => setMobileMenuOpen(false)}
                    className="py-1.5 px-2 rounded bg-white border border-slate-200 text-[11px] font-display font-bold text-[#0A1F44]"
                  >
                    KG 1 & 2
                  </Link>
                  <Link
                    to="/academics"
                    onClick={() => setMobileMenuOpen(false)}
                    className="py-1.5 px-2 rounded bg-[#0A1F44] text-[11px] font-display font-bold text-[#FACC15]"
                  >
                    Nursery 1 & 2
                  </Link>
                  <Link
                    to="/academics"
                    onClick={() => setMobileMenuOpen(false)}
                    className="py-1.5 px-2 rounded bg-white border border-slate-200 text-[11px] font-display font-bold text-[#0A1F44]"
                  >
                    Basic 1–5
                  </Link>
                </div>
              </div>
            </div>

            {/* Mobile Drawer Action & Direct Telephone Footer */}
            <div className="p-4 bg-[#F8FAFC] border-t border-slate-200 space-y-3">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  navigate('/admissions');
                }}
                className="w-full py-3.5 px-4 text-xs font-extrabold font-display uppercase tracking-wider text-white bg-[#D91E2A] rounded-lg hover:bg-[#B81621] transition-colors whitespace-nowrap cursor-pointer flex items-center justify-center gap-2"
              >
                <span>ENQUIRE ABOUT ADMISSION</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="grid grid-cols-2 gap-2.5">
                <a
                  href={`tel:${SCHOOL_BRAND.phones[0]}`}
                  className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-lg bg-white border border-slate-200 text-xs font-mono-tabular font-bold text-[#0A1F44] hover:border-[#0A1F44]"
                >
                  <Phone className="w-3.5 h-3.5 text-[#D91E2A] shrink-0" />
                  <span>{SCHOOL_BRAND.phones[0]}</span>
                </a>
                <a
                  href={`tel:${SCHOOL_BRAND.phones[1]}`}
                  className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-lg bg-white border border-slate-200 text-xs font-mono-tabular font-bold text-[#0A1F44] hover:border-[#0A1F44]"
                >
                  <Phone className="w-3.5 h-3.5 text-[#1D4ED8] shrink-0" />
                  <span>{SCHOOL_BRAND.phones[1]}</span>
                </a>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};
